﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrdersService } from './orders.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrdersServiceEntitySetConfig = {
  name: "Orders",
  entityType: "NorthwindModel.Order",
  service: OrdersService
} as EntitySetConfig;
//#endregion