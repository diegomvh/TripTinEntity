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
import { InformationProtection } from './informationprotection.entity';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

@Injectable()
export class InformationProtectionService extends ODataService<InformationProtection> {
  constructor(protected client: ODataClient) {
    super(client, 'informationProtection', 'microsoft.graph.informationProtection');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}