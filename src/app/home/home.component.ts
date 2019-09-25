import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //htmlToAdd:  = "<img class='popUp' src='" + this.randomPicture() + "' style='top:" + this.random100() + "%;' />";
  // image: any;
home: boolean = true;
count: number;
randomPic: number;
newNumber: number;
image: string;

constructor(private renderer: Renderer2) { }

  returnHome() {
    return this.home;
  }

  homeSwitch() {
    this.home = !this.home;
  }

  randomPicture() {
    if(this.count == 0)
    {
      this.newNumber=7;
    }
    //this.newNumber = (Math.floor(Math.random() * 10) + 1);
    while (this.newNumber == this.randomPic)
    {
      this.newNumber = (Math.floor(Math.random() * 10) + 1);
    }
    this.randomPic = this.newNumber;
    console.log(this.randomPic);
    console.log(this.count);
    this.image = 'assets/' + this.newNumber + '.jpg';
    this.count++;
    return this.image;
  }

  startSpot() {
    const picture: HTMLElement = document.getElementById('randomPic');
    this.renderer.setStyle(picture, 'top', '13vh');
    this.renderer.setStyle(picture, 'left', '35.2vw');
  }

  randomSpot() {
    const picture: HTMLElement = document.getElementById('randomPic');
    this.renderer.setStyle(picture, 'top', `${this.random1045()}%`);
    this.renderer.setStyle(picture, 'left', `${this.random25()}%`);
    this.renderer.setStyle(picture, 'src', `url(${this.randomPicture()})`)
  }

  random100() {
    Math.floor(Math.random() * 100) + 1;

  }
  random1045() {
    return Math.floor(Math.random() * 25) + 10;
  }

  random25() {
    let num = Math.floor(Math.random() * 30);
    if (Math.floor(Math.random() * 2) + 1 == 1) {
      return -num;
    }
    else {
      return num;
    }
  }

  random070() {
    return Math.floor(Math.random() * 70);
  }

  random3575() {
    return Math.floor(Math.random() * 40) + 35;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  removeElement() {
    let elem1 = document.getElementById('name');
    let elem2 = document.getElementById('subtitle');
    let elem3 = document.getElementById('subtitle2');
    elem1.parentNode.removeChild(elem1);
    elem2.parentNode.removeChild(elem2);
    elem3.parentNode.removeChild(elem3);

  }


  ngOnInit() {
    this.count = 0;
    this.randomPic = 1;
  }

}
