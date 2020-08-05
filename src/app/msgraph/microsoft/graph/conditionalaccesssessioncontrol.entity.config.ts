﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControl } from './conditionalaccesssessioncontrol.entity';
//#endregion

export const ConditionalAccessSessionControlConfig = {
  name: "ConditionalAccessSessionControl",
  annotations: [],
  fields: {
    isEnabled: {type: 'Edm.Boolean'}
  }
} as EntityConfig<ConditionalAccessSessionControl>;