﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.entity';
//#endregion

export const WorkbookSessionInfoConfig = {
  name: "WorkbookSessionInfo",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    persistChanges: {type: 'Edm.Boolean'}
  }
} as EntityConfig<WorkbookSessionInfo>;