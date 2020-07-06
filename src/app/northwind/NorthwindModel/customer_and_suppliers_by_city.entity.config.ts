﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer_and_Suppliers_by_City } from './customer_and_suppliers_by_city.entity';
//#endregion

export const Customer_and_Suppliers_by_CityConfig = {
  name: "Customer_and_Suppliers_by_City",
  annotations: [],
  fields: {
    City: {type: 'Edm.String', maxLength: 15},
    CompanyName: {type: 'Edm.String', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    ContactName: {type: 'Edm.String', maxLength: 30},
    Relationship: {type: 'Edm.String', key: true, ref: 'Relationship', nullable: false, maxLength: 9}
  }
} as EntityConfig<Customer_and_Suppliers_by_City>;