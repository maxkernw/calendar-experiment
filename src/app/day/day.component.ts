import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {
  @Input() date: Date;
  @Output() click = new EventEmitter<Date>();
  today = false;
  name: string;

  constructor() { }

  ngOnInit() {
    if (this.date.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)) {
      this.today = true;
    }
    this.name = this.date.toLocaleDateString(navigator.languages[0], { weekday: 'long' });
  }

  clicked(): void {
    this.click.emit(this.date);
  }
}
