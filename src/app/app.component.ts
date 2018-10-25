import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as reducer from './store/reducers/firebase.reducer';
import { FetchEvents } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: Observable<any[]>;

  constructor(private store: Store<reducer.State>) { }

  ngOnInit() {
    this.data = this.store.select('events');
    this.store.dispatch(new FetchEvents());
  }
}
