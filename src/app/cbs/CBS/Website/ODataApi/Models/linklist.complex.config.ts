﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LinkList } from './linklist.complex';
import { LinkListModel } from './linklist.model';
import { LinkListCollection } from './linklist.collection';
//#endregion

export const LinkListConfig = {
  name: "LinkList",
  model: LinkListModel,
  collection: LinkListCollection,
  annotations: [],
  fields: {
    Items: {type: 'CBS.Website.ODataApi.Models.Link', collection: true}
  }
} as StructuredTypeConfig<LinkList>;