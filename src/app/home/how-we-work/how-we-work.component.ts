import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-how-we-work',
  templateUrl: '../home-menuItem.component.html',
  styleUrls: ['./how-we-work.component.css']
})
export class HowWeWorkComponent implements OnInit {

  section: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.section = this.db.getHomeMenuByUrl('how-we-work');
  }

}
