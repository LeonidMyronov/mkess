import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getEnergyServiceByName('Проектирование');
  }

}
