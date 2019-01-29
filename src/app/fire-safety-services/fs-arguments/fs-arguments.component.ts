import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-fs-arguments',
  templateUrl: './fs-arguments.component.html',
  styleUrls: ['./fs-arguments.component.css']
})
export class FsArgumentsComponent implements OnInit {

  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getFireSafetyServiceByUrl('fire-safety-arguments');
  }

}
