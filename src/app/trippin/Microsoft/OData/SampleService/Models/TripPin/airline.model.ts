﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Airline } from './airline.entity';
import { AirlineCollection } from './airline.collection';
//#endregion

@Model()
export class AirlineModel<E extends Airline> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  AirlineCode!: string;
  public $AirlineCode() {
    return this.property<string>('AirlineCode');
  }
  public getAirlineCode(options?: HttpOptions) {
    return this.getValue<string>('AirlineCode', options) as Observable<string>;
  }
  
  @ModelField()
  Name!: string;
  public $Name() {
    return this.property<string>('Name');
  }
  public getName(options?: HttpOptions) {
    return this.getValue<string>('Name', options) as Observable<string>;
  }
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}