import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, HttpOptions } from 'angular-odata';

import { PhotoMeta } from './photo.meta';
import { Photo } from './photo.entity';


@Injectable()
export class PhotosService extends ODataEntityService<Photo> {
  static path: string = 'Photos';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Photo';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
