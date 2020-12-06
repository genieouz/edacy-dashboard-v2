import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginGQL, UserSource } from 'generated/graphql';
import { EnvironmentSetupService } from 'app/components/navbar/environment-setup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginForm: FormGroup;
  location: Location;
  userSource = [];
  currentSource: UserSource;
  constructor(
    private readonly authService: AuthService, 
    private readonly router: Router,
    private readonly loginGQL: LoginGQL,
    private readonly environmentSetupService: EnvironmentSetupService,
  ) {
    this.location = location;
    this.userSource = this.environmentSetupService.fetchSource();
  }

  ngOnInit(): void {
    this.currentSource = this.userSource[0];
    localStorage.setItem('source', this.currentSource);
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      }
    );
  }

  signin() {
    this.errorMessage = "";
    this.loginGQL.mutate({ credentials: this.loginForm.value }).subscribe(
      ({data}) => {
        if(data.login) {
          this.authService.registerCurrentSession(data.login);
          this.authService.registerToken(data.login.token);
          this.router.navigate(['/dashboard']);
        }
      },
      (httpError: HttpErrorResponse) => {
        this.errorMessage = 'This account does not exists'
      }
    );
  }
}
