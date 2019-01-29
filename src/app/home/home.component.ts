import { Component, OnInit } from '@angular/core';
import {DbService} from "../core/db.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: any[] = [];
  constructor(private db: DbService) { }

  ngOnInit() {
    this.menu = this.db.getHomeMenu();

  }

}
