﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceManagementExchangeConnectorStatus } from './devicemanagementexchangeconnectorstatus.enum';
//#endregion

export const DeviceManagementExchangeConnectorStatusConfig = {
  name: "DeviceManagementExchangeConnectorStatus",
  members: DeviceManagementExchangeConnectorStatus
} as EnumConfig<DeviceManagementExchangeConnectorStatus>;