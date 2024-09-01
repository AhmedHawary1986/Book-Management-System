import { Injectable } from '@angular/core';
import { Book} from '../../app/models/book';
import { Observable , throwError, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  addBook(Book:Book) :Observable<Book> {
     return of(Book)
  }
}
