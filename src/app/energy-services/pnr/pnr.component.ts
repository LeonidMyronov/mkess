import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit {
  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getEnergyServiceByName('Пусконаладочные работы');
  }

}
