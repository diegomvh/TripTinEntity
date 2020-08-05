﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { AppListType } from './applisttype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { RatingAppsType } from './ratingappstype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { AppListItem } from './applistitem.entity';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.entity';
import { MediaContentRatingCanada } from './mediacontentratingcanada.entity';
import { MediaContentRatingFrance } from './mediacontentratingfrance.entity';
import { MediaContentRatingGermany } from './mediacontentratinggermany.entity';
import { MediaContentRatingIreland } from './mediacontentratingireland.entity';
import { MediaContentRatingJapan } from './mediacontentratingjapan.entity';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.entity';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.entity';
import { IosNetworkUsageRule } from './iosnetworkusagerule.entity';
//#endregion

export interface IosGeneralDeviceConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  accountBlockModification: boolean;
  activationLockAllowWhenSupervised: boolean;
  airDropBlocked: boolean;
  airDropForceUnmanagedDropTarget: boolean;
  airPlayForcePairingPasswordForOutgoingRequests: boolean;
  appleWatchBlockPairing: boolean;
  appleWatchForceWristDetection: boolean;
  appleNewsBlocked: boolean;
  appsSingleAppModeList?: AppListItem[];
  appsVisibilityList?: AppListItem[];
  appsVisibilityListType: AppListType;
  appStoreBlockAutomaticDownloads: boolean;
  appStoreBlocked: boolean;
  appStoreBlockInAppPurchases: boolean;
  appStoreBlockUIAppInstallation: boolean;
  appStoreRequirePassword: boolean;
  bluetoothBlockModification: boolean;
  cameraBlocked: boolean;
  cellularBlockDataRoaming: boolean;
  cellularBlockGlobalBackgroundFetchWhileRoaming: boolean;
  cellularBlockPerAppDataModification: boolean;
  cellularBlockPersonalHotspot: boolean;
  cellularBlockVoiceRoaming: boolean;
  certificatesBlockUntrustedTlsCertificates: boolean;
  classroomAppBlockRemoteScreenObservation: boolean;
  classroomAppForceUnpromptedScreenObservation: boolean;
  compliantAppsList?: AppListItem[];
  compliantAppListType: AppListType;
  configurationProfileBlockChanges: boolean;
  definitionLookupBlocked: boolean;
  deviceBlockEnableRestrictions: boolean;
  deviceBlockEraseContentAndSettings: boolean;
  deviceBlockNameModification: boolean;
  diagnosticDataBlockSubmission: boolean;
  diagnosticDataBlockSubmissionModification: boolean;
  documentsBlockManagedDocumentsInUnmanagedApps: boolean;
  documentsBlockUnmanagedDocumentsInManagedApps: boolean;
  emailInDomainSuffixes?: string[];
  enterpriseAppBlockTrust: boolean;
  enterpriseAppBlockTrustModification: boolean;
  faceTimeBlocked: boolean;
  findMyFriendsBlocked: boolean;
  gamingBlockGameCenterFriends: boolean;
  gamingBlockMultiplayer: boolean;
  gameCenterBlocked: boolean;
  hostPairingBlocked: boolean;
  iBooksStoreBlocked: boolean;
  iBooksStoreBlockErotica: boolean;
  iCloudBlockActivityContinuation: boolean;
  iCloudBlockBackup: boolean;
  iCloudBlockDocumentSync: boolean;
  iCloudBlockManagedAppsSync: boolean;
  iCloudBlockPhotoLibrary: boolean;
  iCloudBlockPhotoStreamSync: boolean;
  iCloudBlockSharedPhotoStream: boolean;
  iCloudRequireEncryptedBackup: boolean;
  iTunesBlockExplicitContent: boolean;
  iTunesBlockMusicService: boolean;
  iTunesBlockRadio: boolean;
  keyboardBlockAutoCorrect: boolean;
  keyboardBlockDictation: boolean;
  keyboardBlockPredictive: boolean;
  keyboardBlockShortcuts: boolean;
  keyboardBlockSpellCheck: boolean;
  kioskModeAllowAssistiveSpeak: boolean;
  kioskModeAllowAssistiveTouchSettings: boolean;
  kioskModeAllowAutoLock: boolean;
  kioskModeAllowColorInversionSettings: boolean;
  kioskModeAllowRingerSwitch: boolean;
  kioskModeAllowScreenRotation: boolean;
  kioskModeAllowSleepButton: boolean;
  kioskModeAllowTouchscreen: boolean;
  kioskModeAllowVoiceOverSettings: boolean;
  kioskModeAllowVolumeButtons: boolean;
  kioskModeAllowZoomSettings: boolean;
  kioskModeAppStoreUrl?: string;
  kioskModeBuiltInAppId?: string;
  kioskModeRequireAssistiveTouch: boolean;
  kioskModeRequireColorInversion: boolean;
  kioskModeRequireMonoAudio: boolean;
  kioskModeRequireVoiceOver: boolean;
  kioskModeRequireZoom: boolean;
  kioskModeManagedAppId?: string;
  lockScreenBlockControlCenter: boolean;
  lockScreenBlockNotificationView: boolean;
  lockScreenBlockPassbook: boolean;
  lockScreenBlockTodayView: boolean;
  mediaContentRatingAustralia?: MediaContentRatingAustralia;
  mediaContentRatingCanada?: MediaContentRatingCanada;
  mediaContentRatingFrance?: MediaContentRatingFrance;
  mediaContentRatingGermany?: MediaContentRatingGermany;
  mediaContentRatingIreland?: MediaContentRatingIreland;
  mediaContentRatingJapan?: MediaContentRatingJapan;
  mediaContentRatingNewZealand?: MediaContentRatingNewZealand;
  mediaContentRatingUnitedKingdom?: MediaContentRatingUnitedKingdom;
  mediaContentRatingUnitedStates?: MediaContentRatingUnitedStates;
  networkUsageRules?: IosNetworkUsageRule[];
  mediaContentRatingApps: RatingAppsType;
  messagesBlocked: boolean;
  notificationsBlockSettingsModification: boolean;
  passcodeBlockFingerprintUnlock: boolean;
  passcodeBlockFingerprintModification: boolean;
  passcodeBlockModification: boolean;
  passcodeBlockSimple: boolean;
  passcodeExpirationDays?: number;
  passcodeMinimumLength?: number;
  passcodeMinutesOfInactivityBeforeLock?: number;
  passcodeMinutesOfInactivityBeforeScreenTimeout?: number;
  passcodeMinimumCharacterSetCount?: number;
  passcodePreviousPasscodeBlockCount?: number;
  passcodeSignInFailureCountBeforeWipe?: number;
  passcodeRequiredType: RequiredPasswordType;
  passcodeRequired: boolean;
  podcastsBlocked: boolean;
  safariBlockAutofill: boolean;
  safariBlockJavaScript: boolean;
  safariBlockPopups: boolean;
  safariBlocked: boolean;
  safariCookieSettings: WebBrowserCookieSettings;
  safariManagedDomains?: string[];
  safariPasswordAutoFillDomains?: string[];
  safariRequireFraudWarning: boolean;
  screenCaptureBlocked: boolean;
  siriBlocked: boolean;
  siriBlockedWhenLocked: boolean;
  siriBlockUserGeneratedContent: boolean;
  siriRequireProfanityFilter: boolean;
  spotlightBlockInternetResults: boolean;
  voiceDialingBlocked: boolean;
  wallpaperBlockModification: boolean;
  wiFiConnectOnlyToConfiguredNetworks: boolean;
  //#endregion
}