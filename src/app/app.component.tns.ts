import { Component } from '@angular/core';
import { registerElement } from 'nativescript-angular/element-registry';
// Register Custom Elements for Angular
import { Carousel, CarouselItem } from 'nativescript-carousel';

registerElement('Carousel', () => Carousel);
registerElement('CarouselItem', () => CarouselItem);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  moduleId: module.id
})
export class AppComponent {
}
