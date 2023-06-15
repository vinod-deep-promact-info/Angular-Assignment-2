import { Component } from '@angular/core';
import { Slide } from './models/slide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Carousel';
  slides: Slide[] = [];
  newSlide: Slide = { caption: '', imageUrl: '' };

  addSlide() {
    this.slides.push(this.newSlide);
    //this.slides.push({ ...this.newSlide });
    this.newSlide = { caption: '', imageUrl: '' };
  }

  deleteSlide(slide: Slide) {
    const index = this.slides.indexOf(slide);
    if (index > -1) {
      this.slides.splice(index, 1);
    }
  }
}
