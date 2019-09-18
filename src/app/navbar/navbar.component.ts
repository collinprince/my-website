import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})


export class NavbarComponent implements OnInit {
  // zero = document.getElementById('1');
  // one = document.getElementByID('1');
  // two = document.getElementByID('2');
  // three = document.getElementByID('3');
  collapsed = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  scrollToElement(id: string): void {
      let elem = document.getElementById(id);
      console.log(elem);
      elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

  homeScroll() {
    if(this.home.home)
    {
      this.scrollToElement('0');
    }
    else {
      this.scrollToElement('1');
    }
  }

  constructor(private home: HomeComponent) { }





  ngOnInit() {
  }

}
