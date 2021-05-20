﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductsService } from './products.service';
//#endregion

//#region ODataApi EntitySetConfig
export const ProductsServiceEntitySetConfig = {
  name: "Products",
  entityType: "NorthwindModel.Product",
  service: ProductsService
} as EntitySetConfig;
//#endregion