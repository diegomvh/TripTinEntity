import { Component, OnInit } from '@angular/core';
import { Airport, AirportsService } from '../../trippin';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';

@Component({
  selector: 'trip-airports',
  template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadPeopleLazy($event)" [paginator]="true" 
    [rows]="size" [totalRecords]="total" [loading]="loading">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [pSortableColumn]="col.sort ? col.field : ''">
              {{col.header}}
              <p-sortIcon *ngIf="col.sort" [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
            </th>
        </tr>
        <tr>
            <th *ngFor="let col of columns" [ngSwitch]="col.field">
              <input *ngSwitchCase="'IcaoCode'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              <input *ngSwitchCase="'Name'" pInputText type="text" (input)="filter($event.target.value, col.field)">
              <input *ngSwitchCase="'IataCode'" pInputText type="text" (input)="filter($event.target.value, col.field)">
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns" [ngSwitch]="col.field">
              <span *ngSwitchCase="'Location'">{{rowData[col.field] | json}}</span>
              <span *ngSwitchDefault>{{rowData[col.field]}}</span>
            </td>
        </tr>
    </ng-template>
</p-table>`,
})
export class AirportsComponent implements OnInit {
  rows: Airport[];
  cols: any[];

  total: number;
  size: number;

  resource: ODataEntitySetResource<Airport>;
  loading: boolean;

  constructor(
    private airports: AirportsService
  ) { 
    this.resource = this.airports.entities();
  }

  ngOnInit() {
    let config = this.resource.config();
    this.cols = config.fields()
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: (f.type === 'string' && !f.collection) }));
    this.loading = true;
  }

  fetch() {
    this.loading = true;
    this.resource.get({withCount: true}).subscribe(([airports, annots]) => {
      this.rows = airports;
      if (!this.total)
        this.total = annots.count;
      if (!this.size)
        this.size = annots.skip || airports.length;
      this.loading = false;
    });
  }

  filter(value: string, field: string) {
    field = `tolower(${field})`; 
    if (value) {
      let filter = {[field]: {contains: value.toLowerCase()}};
      this.resource.filter().assign(filter);
    } else {
      this.resource.filter().unset(field);
    }
    this.resource.skip().clear();
    this.resource.top().clear();
    this.total = 0;
    this.fetch();
  }

  loadPeopleLazy(event) {
    //Pagination
    this.resource.skip(event.first);
    this.resource.top(event.rows);
    //Ordering
    if (event.sortField)
      this.resource.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch();
  }
}