import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as reducers from './reducers';

import TableService from './services/table';
import { AppComponent } from './app.component';
import { TableComponent, LoaderComponent, ColorComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoaderComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore({
      layout: reducers.layoutReducer,
      table: reducers.tableReducer,
    }),
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
