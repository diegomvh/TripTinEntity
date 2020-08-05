﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TextColumn } from './textcolumn.entity';
//#endregion

export const TextColumnConfig = {
  name: "TextColumn",
  annotations: [],
  fields: {
    allowMultipleLines: {type: 'Edm.Boolean'},
    appendChangesToExistingText: {type: 'Edm.Boolean'},
    linesForEditing: {type: 'Edm.Int32'},
    maxLength: {type: 'Edm.Int32'},
    textType: {type: 'Edm.String'}
  }
} as EntityConfig<TextColumn>;