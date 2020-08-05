﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecureScore } from './securescore.entity';
//#endregion

export const SecureScoreConfig = {
  name: "SecureScore",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    activeUserCount: {type: 'Edm.Int32'},
    averageComparativeScores: {type: 'graph.averageComparativeScore', collection: true},
    azureTenantId: {type: 'Edm.String', nullable: false},
    controlScores: {type: 'graph.controlScore', collection: true},
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    currentScore: {type: 'Edm.Double'},
    enabledServices: {type: 'Edm.String', collection: true},
    licensedUserCount: {type: 'Edm.Int32'},
    maxScore: {type: 'Edm.Double'},
    vendorInformation: {type: 'graph.securityVendorInformation'}
  }
} as EntityConfig<SecureScore>;