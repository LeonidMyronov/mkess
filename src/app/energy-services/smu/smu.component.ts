import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-smu',
  templateUrl: './smu.component.html',
  styleUrls: ['./smu.component.css']
})
export class SmuComponent implements OnInit {
  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getEnergyServiceByName('Строительно-монтажные работы');
  }

}
