import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-who-we-are',
  templateUrl: '../home-menuItem.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent implements OnInit {
  section: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.section = this.db.getHomeMenuByUrl('who-we-are');
  }

}
