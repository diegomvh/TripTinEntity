﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FreeBusyError } from './freebusyerror.entity';
import { FreeBusyErrorCollection } from './freebusyerror.collection';
//#endregion

export class FreeBusyErrorModel<E extends FreeBusyError> extends ODataModel<E> {
  //#region ODataApi Properties
  message?: string;
  responseCode?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}