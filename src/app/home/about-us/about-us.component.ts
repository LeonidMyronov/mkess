import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-about-us',
  templateUrl: '../home-menuItem.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  section: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.section = this.db.getHomeMenuByUrl('about-us');
  }

}
