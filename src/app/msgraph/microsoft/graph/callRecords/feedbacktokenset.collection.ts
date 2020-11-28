﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { FeedbackTokenSet } from './feedbacktokenset.entity';
import { FeedbackTokenSetModel } from './feedbacktokenset.model';
//#endregion

export class FeedbackTokenSetCollection<E extends FeedbackTokenSet, M extends FeedbackTokenSetModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}