import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  public energyServices: any[];
  public fireServices: any[];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.energyServices = this.db.getEnergyServicesTitles();
    this.fireServices = this.db.getFireSafetyServicesTitles();
  }

}
