import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/models/mission';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.scss']
})
export class MissiondetailsComponent implements OnInit {

  @Input('item') mission: any
  seeDetails = false;

  constructor() { }

  ngOnInit(): void {
    

  }

  openDetails() {
    this.seeDetails = !this.seeDetails;
  }

}
