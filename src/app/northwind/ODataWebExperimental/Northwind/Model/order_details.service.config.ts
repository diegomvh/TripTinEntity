﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { OrderDetailsService } from './order_details.service';
//#endregion

//#region ODataApi EntitySetConfig
export const OrderDetailsServiceEntitySetConfig = {
  name: "Order_Details",
  entityType: "NorthwindModel.Order_Detail",
  service: OrderDetailsService
} as EntitySetConfig;
//#endregion