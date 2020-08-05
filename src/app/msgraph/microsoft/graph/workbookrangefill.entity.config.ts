﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeFill } from './workbookrangefill.entity';
//#endregion

export const WorkbookRangeFillConfig = {
  name: "WorkbookRangeFill",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    color: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeFill>;