import { Component, OnInit } from '@angular/core';
import { Airport, AirportsService } from '../../trippin';
import { ODataEntitySetResource, ODataSettings, ODataClient } from 'angular-odata';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'trip-airports',
  template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadAirportsLazy($event)" [paginator]="true"
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
              <input *ngIf="col.filter" pInputText type="text" (input)="filter($event, col.field)">
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
export class AirportsComponent {
  rows!: Airport[];
  cols: any[];

  total!: number;
  size!: number;

  resource: ODataEntitySetResource<Airport>;
  loading: boolean = false;

  constructor(
    private client: ODataClient,
    private airports: AirportsService
  ) {
    this.resource = this.airports.entities();
    const schema = this.resource.schema;
    this.cols = (schema !== null) ?
      schema.fields()
        .filter(f => !f.navigation)
        .map(f => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === 'Edm.String' })) :
      [];
    // Try toJSON, fromJSON
    this.resource = this.client.fromJSON<Airport>(this.resource.toJSON()) as ODataEntitySetResource<Airport>;
  }

  fetch(resource: ODataEntitySetResource<Airport>) {
    this.loading = true;
    resource.get({withCount: true}).subscribe(({entities, meta}) => {
      this.rows = entities || [];
      if (!this.total)
        this.total = meta.count as number;
      if (!this.size)
        this.size = meta.skip || this.rows.length;
      this.loading = false;
    });
  }

  filter(event: Event, field: string) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    field = `tolower(${field})`;
    if (value) {
      let filter = {[field]: {contains: value.toLowerCase()}};
      this.resource.query.filter().assign(filter);
    } else {
      this.resource.query.filter().unset(field);
    }
    this.total = 0;
    this.fetch(this.resource);
  }

  loadAirportsLazy(event: LazyLoadEvent) {
    //Pagination
    let resource = this.resource.clone();
    if (event.first !== undefined)
      resource = resource.skip(event.first);
    if (event.rows !== undefined)
      resource = resource.top(event.rows);
    //Ordering
    if (event.sortField !== undefined)
      resource = resource.orderBy([[event.sortField as keyof Airport, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch(resource);
  }
}
