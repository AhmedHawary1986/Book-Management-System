import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    // This is an NgRx Effect that responds to 'AddBook' actions.
   
  
    
    constructor(
        private actions$: Actions,
        private bookService: BookService
    ){}

}