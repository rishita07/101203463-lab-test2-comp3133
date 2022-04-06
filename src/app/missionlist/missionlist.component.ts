import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from 'src/app/models/mission';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.scss']
})
export class MissionlistComponent implements OnInit {

  missionData: Mission[] = [];

  constructor(private spacexapiService: SpacexapiService, private router: Router) {
    this.spacexapiService.getMissionData().subscribe(data => {
      this.missionData = data;
    })
  }

  ngOnInit(): void {

  }
  goToList() {
    this.router.navigate(['missiondetails']);
  }

}
