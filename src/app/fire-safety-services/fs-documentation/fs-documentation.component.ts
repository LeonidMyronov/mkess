import { Component, OnInit } from '@angular/core';
import {DbService} from "../../core/db.service";

@Component({
  selector: 'app-fs-documentation',
  templateUrl: './fs-documentation.component.html',
  styleUrls: ['./fs-documentation.component.css']
})
export class FsDocumentationComponent implements OnInit {

  public service: any;
  constructor(private db: DbService) { }

  ngOnInit() {
    this.service = this.db.getFireSafetyServiceByUrl('fire-safety-documentation-developing');
  }

}
