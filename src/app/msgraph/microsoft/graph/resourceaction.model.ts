﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAction } from './resourceaction.entity';
import { ResourceActionCollection } from './resourceaction.collection';
//#endregion

export class ResourceActionModel<E extends ResourceAction> extends ODataModel<E> {
  //#region ODataApi Properties
  allowedResourceActions?: string[];
  notAllowedResourceActions?: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}