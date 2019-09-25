import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-collapse',
  templateUrl: './button-collapse.component.html',
  styleUrls: ['./button-collapse.component.css']
})
export class ButtonCollapseComponent implements OnInit {

  isCollapsed: boolean[] = [false, false, false];
  currentlyShown: number;

  images: any[] = [
    {name: 'idemia', url: 'assets/experience/idemia.jpg',
    description: '(June - September 2019) IDEMIA is the global leader in Augmented Identies and provides customers with a range of physical and digital identity solutions.' +
    " At IDEMIA, I served as a Software Engineering Intern on the Driver's License Enrollment Team."
    + " I developed and advanced skills in Angular with Typescript, Automated Testing using Selenium and Protractor, as well as working in an Agile Scrum Framework with a Kanban board. ",
    id: 0},
    {name: '1kp', url: 'assets/experience/1kp.png',
    description: '(June - October 2019) 1000 Pitches is an annual event put on by Bruin Entrepreneurs to encourage entrepreneurship and innovation on campus. '
    + 'I currently serve as the co-director of the event, managing a team through the sponsorship, marketing, and event execution stages of the 1000 Pitches Campagin and culminating with our final event.',
    id: 1},
    {name: 'indyteledata', url: 'assets/experience/indytele.png',
    description: '(May - August 2016) At IndyTeleData, I served as an IT Intern working on infrastructure for building wide networks as well as managing the setup of over 1000 organization computers.',
    id: 2},
    {name: 'be', url: 'assets/experience/be.jpg',
    description: '(October 2018 - Present) I serve as a board member on Bruin Entrepreneurs, the premier entrepreneurship student organization at UCLA. I help brainstorm and execute events that cater to the entire UCLA student body and inspire involvement in startups and business.',
    id: 3},
    {name: 'sddm', url:'assets/experience/sddm.jpg',
    description: "(August 2017 - May 2018) On the board of South Deanery Dance Marathon, I helped fundraise and organize a dance marathon to benefit Riley Children's hospital in Indianapolis.",
    id: 4},
  ]

  toggleCollapse(id: number): void {
    if (this.currentlyShown != null && this.currentlyShown != id)
    {
      this.isCollapsed[this.currentlyShown] = false;
    }
    this.isCollapsed[id] = !this.isCollapsed[id];
    this.currentlyShown = id;


  }

  imageOnHover(name: string) {
    let elem = document.getElementById(name);
    elem.style.height = '17rem';
    elem.style.width = '22rem';
  }

  imageOnExit(name: string) {
    let elem = document.getElementById(name);
    elem.style.height = '15rem';
    elem.style.width = '20rem';
  }

  constructor() { }

  ngOnInit() {
  }

}
