﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Products_by_Category } from './products_by_category.entity';
//#endregion

export const Products_by_CategoryConfig = {
  name: "Products_by_Category",
  annotations: [],
  fields: {
    CategoryName: {type: 'Edm.String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitsInStock: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', key: true, ref: 'Discontinued', nullable: false}
  }
} as EntityConfig<Products_by_Category>;