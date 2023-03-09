import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {cities} from "../../domain/cities";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit{
  cityDetails: any
  cityName: string = ''


  constructor(private activateRoute: ActivatedRoute) {  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.cityName = this.setupComponent(params['city'])
      this.cityDetails = cities.skopje;
    })
  }

  setupComponent(param: string) {
    return param
  }

}
