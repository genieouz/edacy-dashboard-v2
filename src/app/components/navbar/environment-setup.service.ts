import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FetchProgramsBySourceGQL, UserSource } from 'generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentSetupService {
  environmentSubject: Subject<any> = new Subject();
  constructor() { }

  getSource(): UserSource {
    return localStorage.getItem('source') as UserSource;
  }

  fetchSource() {
    const looksLikeOmanHost = /icd/.test(origin);
    const looksLikeDfpHost = /dfp/.test(origin);
    const looksLike5qsHost = /5qs/.test(origin);
    const looksLearnHost = /learn/.test(origin);
    const looksRwandaHost = /rwanda/.test(origin);
    const looksEthiopiaHost = /ethiopia/.test(origin);
    const looksSierraLeoneHost = /sierraleone/.test(origin);

    let source = Object.values(UserSource);

    if (looksLikeOmanHost || looksLikeDfpHost) {
      source = [UserSource.Oman];
    } else if (looksLike5qsHost) {
      source = [UserSource.FiveQs];
    } else if (looksLearnHost) {
      source = [UserSource.Learn];
    } else if (looksRwandaHost) {
      source = [UserSource.Rwanda];
    } else if (looksEthiopiaHost) {
      source = [UserSource.Ethiopia];
    } else if (looksSierraLeoneHost) {
      source = [UserSource.SierraLeone];
    }

    return source;
  }
}
