﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceAndAppManagementAssignmentTarget } from './deviceandappmanagementassignmenttarget.entity';
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { DeviceAndAppManagementAssignmentTargetModel } from './deviceandappmanagementassignmenttarget.model';
import { DeviceAndAppManagementAssignmentTargetCollection } from './deviceandappmanagementassignmenttarget.collection';
import { TermsAndConditionsAssignmentCollection } from './termsandconditionsassignment.collection';
//#endregion

export class TermsAndConditionsAssignmentModel<E extends TermsAndConditionsAssignment> extends EntityModel<E> {
  //#region ODataApi Properties
  target?: DeviceAndAppManagementAssignmentTargetModel<DeviceAndAppManagementAssignmentTarget>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}