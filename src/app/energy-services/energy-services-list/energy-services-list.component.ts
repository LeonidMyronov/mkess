import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-energy-services-list',
  templateUrl: './energy-services-list.component.html',
  styleUrls: ['./energy-services-list.component.css']
})
export class EnergyServicesListComponent implements OnInit {
  public servicesList: any[] = [];
  constructor(private router: Router, private dbService: DbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servicesList = this.dbService.getEnergyServices();
  }
  onNavigate(service: any) {
    this.router.navigate([service.url], {relativeTo: this.route});
  }
}
