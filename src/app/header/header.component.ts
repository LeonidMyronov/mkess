import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ngOnInit () {

  }

  onToggleMobileMenu() {
    document.querySelector('.nav-group').classList.toggle('opened');
  }

  onCloseMobileMenu() {
    document.querySelector('.nav-group').classList.remove('opened');
  }
}
