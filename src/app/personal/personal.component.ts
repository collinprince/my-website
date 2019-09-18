import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  topics = [
    {name: 'Music', src: '../assets/passions/ghosts.jpg',
    description: "One of my earliest passions in life was music. Since I was in elementary school, I've loved to play the guitar and love to listen to music ranging from indie alt to classic rock. "},
    {name: 'Travel', src: '../assets/passions/travel.jpg',
    description: "I love to travel and see the world. I think that learning more about other cultures and places helps to connect us together and increases understanding and sympathy."},
    {name: 'Tech', src: '../assets/passions/silicon.jpg',
    description: "Technology has been a huge focus of my education and personal life. Between coursework, internships, and my own free time, I spend my time improving my skills with a focus on full stack development and data science."},
    {name: 'Books', src: '../assets/passions/books.jpg',
    description: "From reading books past my curfew as a kid to sitting by a window reading a book now, I've always loved the story telling and knowledge conveyed through books and have always considered myself a book worm."},
  ]

  constructor() { }

  ngOnInit() {
  }

}
