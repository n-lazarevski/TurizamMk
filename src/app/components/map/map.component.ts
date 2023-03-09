import {Component} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  image: string = 'Mapp.png'
  constructor() {
  }

  changeMap(area: string){
    this.image = `${area}.png`
  }
}
