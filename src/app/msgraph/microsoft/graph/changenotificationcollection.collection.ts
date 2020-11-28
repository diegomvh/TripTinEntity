﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.entity';
import { ChangeNotificationCollection } from './changenotificationcollection.entity';
import { ChangeNotificationModel } from './changenotification.model';
import { ChangeNotificationCollectionModel } from './changenotificationcollection.model';
import { ChangeNotificationCollection } from './changenotification.collection';
//#endregion

export class ChangeNotificationCollectionCollection<E extends ChangeNotificationCollection, M extends ChangeNotificationCollectionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}