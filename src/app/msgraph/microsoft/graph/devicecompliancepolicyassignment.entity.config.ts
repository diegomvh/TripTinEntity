﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
//#endregion

export const DeviceCompliancePolicyAssignmentConfig = {
  name: "DeviceCompliancePolicyAssignment",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<DeviceCompliancePolicyAssignment>;