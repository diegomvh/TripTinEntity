﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Topic } from './topic.entity';
import { TopicModel } from './topic.model';
import { TopicCollection } from './topic.collection';
//#endregion

export const TopicConfig = {
  name: "Topic",
  base: "Cbs.OData.DimensionOrTopic",
  model: TopicModel,
  collection: TopicCollection,
  annotations: [],
  fields: {
    Datatype: {type: 'Edm.String'},
    Unit: {type: 'Edm.String'},
    Decimals: {type: 'Edm.Byte'},
    Default: {type: 'Edm.String'}
  }
} as EntityConfig<Topic>;