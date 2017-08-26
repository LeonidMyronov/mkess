import { Component, OnInit } from '@angular/core';
import {DbService} from "../core/db.service";

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
export class LicenseComponent implements OnInit {
  public licenses;
  private innerHeight;
  private  innerWidth;
  constructor(private dbService: DbService) { }

  ngOnInit() {
    this.licenses = this.dbService.getLicenses();
  }

  onZoom(el: any) {
    el.classList.toggle('zoomed');
    let isHidden = document.querySelector('html');
    isHidden.style.overflow = isHidden.style.overflow == '' ? 'hidden' : '';
  }
}
