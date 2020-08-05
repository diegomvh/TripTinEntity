﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Security } from './security.entity';
import { Alert } from './alert.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { SecureScore } from './securescore.entity';
//#endregion

@Injectable()
export class SecurityService extends ODataService<Security> {
  constructor(protected client: ODataClient) {
    super(client, 'Security', 'microsoft.graph.security');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}