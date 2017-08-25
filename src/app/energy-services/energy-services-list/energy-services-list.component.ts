import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {
  public servicesList: any[] = [];
  constructor(private router: Router, private dbService: DbService) { }

  ngOnInit() {
    this.servicesList = this.dbService.getServices();
  }
  onNavigate() {
    this.router.navigate(['/services'])
  }
}
