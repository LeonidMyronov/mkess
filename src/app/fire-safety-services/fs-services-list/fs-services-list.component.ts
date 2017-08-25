import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-fs-services-list',
  templateUrl: './fs-services-list.component.html',
  styleUrls: ['./fs-services-list.component.css']
})
export class FsServicesListComponent implements OnInit {

  public servicesList: any[] = [];
  constructor(private router: Router, private dbService: DbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servicesList = this.dbService.getFireSafetyServices();
  }
  onNavigate(service: any) {
    this.router.navigate([service.url], {relativeTo: this.route});
  }

}
