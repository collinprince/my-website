import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {



  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [
    {src: 'assets/welcome/beach.jpg'},
    {src: 'assets/welcome/madrid.jpg'},
    {src: 'assets/welcome/art.jpg'},
    {src: 'assets/welcome/littlegrand.jpg'},
    {src: 'assets/welcome/pedro.jpg'},
    {src: 'assets/welcome/la.jpg'},
  ]
  names = ['jerusalem', 'new york', 'berlin']



  constructor(private home: HomeComponent) { }

  ngOnInit() {
  }

}
