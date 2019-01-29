import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-fs-rights',
  templateUrl: './fs-rights.component.html',
  styleUrls: ['./fs-rights.component.css']
})
export class FsRightsComponent implements OnInit {

  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getFireSafetyServiceByUrl('fire-safety-rights-defense');
  }

}
