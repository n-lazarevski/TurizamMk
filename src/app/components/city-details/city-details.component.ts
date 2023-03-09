import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {cities} from "../../domain/mock/cities";
import {City} from "../../domain/city.interface";

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit{
  cityDetails: City
  cityName: string = ''


  constructor(private activateRoute: ActivatedRoute) {
    this.cityDetails = {id: '', ime: '', attractions: [] }
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.cityName = this.setupComponent(params['city'])
      this.cityDetails = cities.filter(city => city.id == this.cityName)[0];
    })
  }

  setupComponent(param: string) {
    return param
  }

}
