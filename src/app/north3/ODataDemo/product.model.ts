﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductDetail } from './productdetail.entity';
import { Category } from './category.entity';
import { Supplier } from './supplier.entity';
import { ProductDetailModel } from './productdetail.model';
import { CategoryModel } from './category.model';
import { SupplierModel } from './supplier.model';
import { ProductCollection } from './product.collection';
import { ProductDetailCollection } from './productdetail.collection';
import { CategoryCollection } from './category.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

export class ProductModel<E extends Product> extends ODataModel<E> {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Description?: string;
  ReleaseDate: any;
  DiscontinuedDate?: any;
  Rating: number;
  Price: number;
  Categories?: CategoryCollection<Category, CategoryModel<Category>>;
  Supplier?: SupplierModel<Supplier>;
  ProductDetail?: ProductDetailModel<ProductDetail>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}