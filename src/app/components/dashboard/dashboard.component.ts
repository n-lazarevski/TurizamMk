import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private scroller: ViewportScroller) {
  }

  scrollToMap() {
    this.scroller.scrollToAnchor("map");
  }
}
