import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import TableService from './services/table';
import { AppState } from './interfaces/state';
import { show, hide, setData } from './reducers';
import { Observable } from 'rxjs/Observable';
import { Table } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tableData: Observable<Table[]>;
  public loaderVisible: any = false;
  constructor(
    private tableService: TableService,
    private store: Store<AppState>,
  ) {
    this.loaderVisible = store.select<boolean>('layout', 'loaderVisible');
    this.tableData = store.select<Table[]>('table');
  }
  ngOnInit() {
    this.store.dispatch(show());
    this.tableService.getData().subscribe(data => {
      this.store.dispatch(setData(data.colorsArray));
      this.store.dispatch(hide());
    });
  }
}
