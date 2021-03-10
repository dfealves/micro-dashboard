import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data = 'Header - micro app 1';

  constructor() { }

  ngOnInit() {
    this.sendDataHeader();
  }

  sendDataHeader() {
    const event = new CustomEvent('data-header', {
      detail: { data: this.data }
    })
    window.dispatchEvent(event);
  }
}
