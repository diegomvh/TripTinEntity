﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
//#endregion

export const ExternalLinkConfig = {
  name: "ExternalLink",
  annotations: [],
  fields: {
    href: {type: 'Edm.String'}
  }
} as EntityConfig<ExternalLink>;