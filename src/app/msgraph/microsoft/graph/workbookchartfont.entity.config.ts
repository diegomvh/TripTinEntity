﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

export const WorkbookChartFontConfig = {
  name: "WorkbookChartFont",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookChartFont>;