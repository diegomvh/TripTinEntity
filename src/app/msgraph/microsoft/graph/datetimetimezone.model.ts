﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DateTimeTimeZone } from './datetimetimezone.entity';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export class DateTimeTimeZoneModel<E extends DateTimeTimeZone> extends ODataModel<E> {
  //#region ODataApi Properties
  dateTime: string;
  timeZone?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}