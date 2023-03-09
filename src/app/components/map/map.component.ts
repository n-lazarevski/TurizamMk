import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor() {
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: any) {
    console.log(e);
  }
}
