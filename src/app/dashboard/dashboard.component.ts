import { Component, OnInit, HostListener } from '@angular/core';
import * as Chartist from 'chartist';
import { AnalyticsReportGQL, AnalyticsReport, FetchProgramsBySourceGQL, UserSource, Program } from 'generated/graphql';
import { EnvironmentSetupService } from 'app/components/navbar/environment-setup.service';
import { NgxUiLoaderService } from "ngx-ui-loader";
import {NgxPaginationModule} from 'ngx-pagination';
import { ViewportScroller } from '@angular/common';
import { ExcelService } from 'app/shared/services/excel.service';
import { AuthService } from 'app/auth/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  analytics: AnalyticsReport;
  programs: Program[];
  currentPage: any = {};
  numberOflines: any = {};
  constructor(
    private readonly analyticsReportGQL: AnalyticsReportGQL,
    private readonly environmentSetupService: EnvironmentSetupService,
    private readonly fetchProgramsBySourceGQL: FetchProgramsBySourceGQL,
    private ngxService: NgxUiLoaderService,
    private scroll: ViewportScroller,
    private excelService: ExcelService,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  pageYoffset = 0;
  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }

  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  async fetchAnalytics() {
    const { fetchProgramsBySource } = await this.fetchProgramsForCurrentSource();
    console.log({programId: localStorage.getItem('program') || fetchProgramsBySource[0].id})
    this.ngxService.start();
      this.ngxService.startBackground("do-background-things");
    // Do something here...
    this.ngxService.stopBackground("do-background-things");

    this.ngxService.startLoader("loader-01"); 
    this.analyticsReportGQL.fetch({ analyticsReportInput: { programId: localStorage.getItem('program') || fetchProgramsBySource[0].id } }).subscribe(
      ({ data, errors }) => {
        if (errors) {
          const error: any = errors[0];
          console.log({error})
          if(error.status == 401 || error.status == 403){

            this.authService.logout();
            this.router.navigate(["/login"]);
          }
        }
        this.analytics = data.analyticsReport as AnalyticsReport;
        this.ngxService.stop(); 
        this.ngxService.stopLoader("loader-01");
      }, 
      (error) => {
        console.log('errorrr', JSON.stringify(error))
        this.ngxService.stop(); 
        this.ngxService.stopLoader("loader-01");
        if(error.graphQLErrors && error.graphQLErrors[0] && (error.graphQLErrors[0].status == 401 || error.graphQLErrors[0].status == 403)){
          this.authService.logout();
          this.router.navigate(["/login"]);
        }
      }
    )
  }

  async fetchProgramsForCurrentSource() {
    const result = await this.fetchProgramsBySourceGQL.fetch({ source: this.environmentSetupService.getSource() as UserSource || UserSource.Common }).toPromise();
    return result.data;
  }
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
      this.fetchAnalytics();
      this.environmentSetupService.environmentSubject.subscribe((data) => {
        this.fetchAnalytics();
      })
      const dataDailySalesChart: any = {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          series: [
              [12, 17, 7, 17, 23, 18, 38]
          ]
      };

     const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

      this.startAnimationForLineChart(dailySalesChart);


      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      const dataCompletedTasksChart: any = {
          labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
          series: [
              [230, 750, 450, 300, 280, 240, 200, 190]
          ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);



      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

      var datawebsiteViewsChart = {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        series: [
          [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

        ]
      };
      var optionswebsiteViewsChart = {
          axisX: {
              showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
      };
      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];
      var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

      //start animation for the Emails Subscription Chart
      this.startAnimationForBarChart(websiteViewsChart);
  }

  exportAsXLSX(data, fileName: string):void {
    data = data.map(user => {
      return user.profile;
    });
    this.excelService.exportAsExcelFile(data, fileName);
  }
}
