import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getEnergyServiceByName('Консалтинговые услуги');
  }

}
