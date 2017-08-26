import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

  }

  onToggleMobileMenu() {
    document.querySelector('.nav-group').classList.toggle('opened');
  }

  onCloseMobileMenu() {
    document.querySelector('.nav-group').classList.remove('opened');
  }
}
