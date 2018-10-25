import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  daysInMonth = [];
  today = new Date();

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const _daysInMonth = new Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());
    for (let i = 0; i < _daysInMonth.length; i++) {
      this.daysInMonth[i] = new Date(date.getFullYear(), date.getMonth(), i + 1);
    }
  }

  selectedDate(date: Date) {
    console.log(date);
  }

}
