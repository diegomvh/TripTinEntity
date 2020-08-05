﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { AlertFeedback } from './alertfeedback.enum';
import { AlertSeverity } from './alertseverity.enum';
import { AlertStatus } from './alertstatus.enum';
import { CloudAppSecurityState } from './cloudappsecuritystate.entity';
import { FileSecurityState } from './filesecuritystate.entity';
import { AlertHistoryState } from './alerthistorystate.entity';
import { HostSecurityState } from './hostsecuritystate.entity';
import { MalwareState } from './malwarestate.entity';
import { NetworkConnection } from './networkconnection.entity';
import { Process } from './process.entity';
import { RegistryKeyState } from './registrykeystate.entity';
import { SecurityResource } from './securityresource.entity';
import { AlertTrigger } from './alerttrigger.entity';
import { UserSecurityState } from './usersecuritystate.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { VulnerabilityState } from './vulnerabilitystate.entity';
//#endregion

export interface Alert extends Entity {
  //#region ODataApi Properties
  activityGroupName?: string;
  assignedTo?: string;
  azureSubscriptionId?: string;
  azureTenantId: string;
  category?: string;
  closedDateTime?: Date;
  cloudAppStates?: CloudAppSecurityState[];
  comments?: string[];
  confidence?: number;
  createdDateTime?: Date;
  description?: string;
  detectionIds?: string[];
  eventDateTime?: Date;
  feedback?: AlertFeedback;
  fileStates?: FileSecurityState[];
  historyStates?: AlertHistoryState[];
  hostStates?: HostSecurityState[];
  incidentIds?: string[];
  lastModifiedDateTime?: Date;
  malwareStates?: MalwareState[];
  networkConnections?: NetworkConnection[];
  processes?: Process[];
  recommendedActions?: string[];
  registryKeyStates?: RegistryKeyState[];
  securityResources?: SecurityResource[];
  severity: AlertSeverity;
  sourceMaterials?: string[];
  status: AlertStatus;
  tags?: string[];
  title?: string;
  triggers?: AlertTrigger[];
  userStates?: UserSecurityState[];
  vendorInformation?: SecurityVendorInformation;
  vulnerabilityStates?: VulnerabilityState[];
  //#endregion
}