import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList
} from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  event: AngularFireList<any>;
  items: Observable<{events: any}>;

  constructor(private db: AngularFireDatabase) {
    this.items = this.db.object<{events: any}>('/events').valueChanges();
  }
}
