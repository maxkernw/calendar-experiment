import { Actions, Effect } from '@ngrx/effects';
import { FETCH_EVENTS, FetchEventsSuccess, FetchEventsFail } from '../actions';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FirebaseService } from 'src/app/firebase.service';
import { of } from 'rxjs';

@Injectable()
export class FirebaseEffect {
    constructor(private actions$: Actions, private firebaseService: FirebaseService) { }

    @Effect()
    Fetch = this.actions$.ofType(FETCH_EVENTS)
        .pipe(
            switchMap(() => this.firebaseService.items))
        .pipe(
            map(data => new FetchEventsSuccess(data)),
            catchError(error => of(new FetchEventsFail(error)))
        );
}
