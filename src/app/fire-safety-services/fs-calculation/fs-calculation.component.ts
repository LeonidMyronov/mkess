import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-fs-calculation',
  templateUrl: './fs-calculation.component.html',
  styleUrls: ['./fs-calculation.component.css']
})
export class FsCalculationComponent implements OnInit {

  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getFireSafetyServiceByUrl('fire-safety-calculation');
  }

}
