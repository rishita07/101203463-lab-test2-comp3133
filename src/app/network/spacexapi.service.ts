import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mission } from 'src/app/models/mission';
import { BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  missionData: Subject<Mission[]> = new BehaviorSubject<Mission[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missionData.next(data);
    })
   }

   getMissionData(): Observable<Mission[]> {
     return this.missionData.asObservable();
   }

}
