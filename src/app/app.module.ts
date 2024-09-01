import { NgModule  } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookReducer} from './books/book.reducer'
import { StoreModule } from '@ngrx/store';
import { AppState } from './app.state';
import { CommonModule} from '@angular/common'
import { BookListComponent} from './book-list/book-list.component'
import { EffectsModule} from '@ngrx/effects'
import { BookEffects} from '../app/books/book.effect'


@NgModule({
  declarations: [
    AppComponent,BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot<AppState>({book:BookReducer}),
    EffectsModule.forRoot([BookEffects])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
