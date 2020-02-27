import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
//


export class NavbarComponent implements OnInit {
  // zero = document.getElementById('1');
  // one = document.getElementByID('1');
  // two = document.getElementByID('2');
  // three = document.getElementByID('3');
  collapsed = true;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll() {
      let elem = document.getElementById('bar');
      elem.setAttribute("style", "opacity: 1; transition-duration: .25s;");
      setTimeout(function() {
        elem.setAttribute("style", "opacity: 0; transition-duration: .25s;");
	    }, 1000);
  }


  scrollToElement(id: string): void {
      let elem = document.getElementById(id);
      console.log(elem);
      elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

  onHover() {
    let elem = document.getElementById('bar');
    elem.setAttribute("style", "opacity: 1; transition-duration: .25s;");
  }

  onExit() {
    let elem = document.getElementById('bar');
    elem.setAttribute("style", "opacity: 0; transition-duration: .25s;");

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
