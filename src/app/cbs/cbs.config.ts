﻿import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { ModelsSchema } from './CBS/Website/ODataApi/Models/models.schema';
import { DefaultSchema } from './Default/default.schema';
//#endregion

export const CBSConfig = {
  name: 'CBS',
  serviceRootUrl: 'https://www.cbs.nl/odata/v1/',
  version: '4.0',
  creation: new Date('2020-08-05T17:01:48.4955103-03:00'),
  schemas: [
    ModelsSchema,
    DefaultSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;