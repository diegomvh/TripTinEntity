﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MimeContent } from './mimecontent.entity';
//#endregion

export const MimeContentConfig = {
  name: "MimeContent",
  annotations: [],
  fields: {
    type: {type: 'Edm.String'},
    value: {type: 'Edm.Binary'}
  }
} as EntityConfig<MimeContent>;