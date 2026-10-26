# Indexserver - OpenAPI Schema Documentation

**Version:** 25.0.1.5  
**OpenAPI:** 3.0.1

## AI Agents

AI Coding Agents, please read file SKILL.md first.

## Servers

- `http://servername:port/ix-repository/rest` — Production Endpoint

## Authentication

- **apiKey**: type=`apiKey`, scheme=``, in=`cookie`, name=`JSESSIONID`
- **basic**: type=`http`, scheme=`basic`
- **bearer**: type=`http`, scheme=`bearer`

## Endpoints (415 paths)

### BUtility (1 operations)

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/BUtility/upload` | BUtility_upload | Upload file. |

### ClientNotification (2 operations)

> Callback interface for server-push notifications.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/ClientNotification/adminMode` | ClientNotification_adminMode | Callback interface for server-push notifications. |
| POST | `/ClientNotification/updateTask` | ClientNotification_updateTask | // * Called when an existing task has been inserted, updated or removed. / * @param ClientInfo reserved / * @param userTask UserTask / * @param notify |

### ConfigService (7 operations)

> This interface provides functions to access configuration entries for several ELO modules and functionality. Configuration entries are used by ELO Flows, workspaces, teamspaces and the forms service for aspect metadata. The functions and data defined in this interface are not expected to be used for

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/ConfigService/checkinConfigurations` | ConfigService_checkinConfigurations | This interface provides functions to access configuration entries for several ELO modules and functionality. Configuration entries are used by ELO Flo |
| POST | `/ConfigService/checkinConfigurationsBatch` | ConfigService_checkinConfigurationsBatch | Insert, update, or delete configuration entries. |
| POST | `/ConfigService/checkoutConfigurations` | ConfigService_checkoutConfigurations | Read configuration entries. |
| POST | `/ConfigService/checkoutConfigurationsWithMembers` | ConfigService_checkoutConfigurationsWithMembers | Read configuration entries and return ConfigRecords with the specified members. |
| POST | `/ConfigService/deleteConfiguration` | ConfigService_deleteConfiguration | Deletes a configuration entry. |
| POST | `/ConfigService/deleteConfiguration2` | ConfigService_deleteConfiguration2 | Deletes configuration entries that match the criteria in deleteInfo. |
| POST | `/ConfigService/deleteConfigurations` | ConfigService_deleteConfigurations | Deletes a list of configuration entries. |

### DocumentEvents (2 operations)

> This interface can be implemented by a plugin to modify document related streams on upload or download.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/DocumentEvents/beginDownload` | DocumentEvents_beginDownload | This interface can be implemented by a plugin to modify document related streams on upload or download. |
| POST | `/DocumentEvents/beginUpload` | DocumentEvents_beginUpload | Provide a document processor object for a stream being uploaded. Return null, if this stream should not be processed. If `UpDownloadEventInfo#prelimin |

### DocumentProcessor (1 operations)

> This interface is can be implemented in a plugin to modify document content when it is uploaded or downloaded.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/DocumentProcessor/process` | DocumentProcessor_process | This interface is can be implemented in a plugin to modify document content when it is uploaded or downloaded. |

### FeedNotification (1 operations)

> Callback interface for notifications about a document feed. The client application can register an implementation of this interface in order to be notified if an action is created or modified.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/FeedNotification/updateAction` | FeedNotification_updateAction | Callback interface for notifications about a document feed. The client application can register an implementation of this interface in order to be not |

### FeedService (17 operations)

> This interface provides functions to access document feeds.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/FeedService/checkinAction` | FeedService_checkinAction | Create or update a document feed entry. |
| POST | `/FeedService/checkoutAction` | FeedService_checkoutAction | Read a document feed entry. |
| POST | `/FeedService/checkoutHashTag` | FeedService_checkoutHashTag | Read a HashTag Object from Database |
| POST | `/FeedService/createAction` | FeedService_createAction | Initialize a document feed item object. This function does not store the created action in the database. Use `#checkinAction(ClientInfo, Action, Actio |
| POST | `/FeedService/createHashTagSubscription` | FeedService_createHashTagSubscription | Creates a HashTag Subscription |
| POST | `/FeedService/findFirstActions` | FeedService_findFirstActions | This interface provides functions to access document feeds. |
| POST | `/FeedService/findFirstHashTagRelation` | FeedService_findFirstHashTagRelation | @param ci ClientInfo object with session information. |
| POST | `/FeedService/findFirstNotification` | FeedService_findFirstNotification | @param ci ClientInfo object with session information. |
| POST | `/FeedService/findHashTagByActions` | FeedService_findHashTagByActions | Returns all HashTags which occurs in a given Array of Actions |
| POST | `/FeedService/findHashTags` | FeedService_findHashTags | Returns all HashTags. FindHashTagInfo filter the result by, createDateIso, lastUsedIso and minCount |
| POST | `/FeedService/findNextActions` | FeedService_findNextActions | Continue reading results from a search started with findFirstActions. |
| POST | `/FeedService/findNextHashTagRelation` | FeedService_findNextHashTagRelation | @param ci ClientInfo object with session information. |
| POST | `/FeedService/findNextNotification` | FeedService_findNextNotification | @param ci ClientInfo object with session information |
| POST | `/FeedService/findPostActions` | FeedService_findPostActions | Returns a Feedpost with all comments. |
| POST | `/FeedService/internalInsertSystemAction` | FeedService_internalInsertSystemAction | Reserved. |
| POST | `/FeedService/registerNotify` | FeedService_registerNotify | Register a callback interface. The server calls functions of this interface if the document feed is modified. |
| POST | `/FeedService/unregisterNotify` | FeedService_unregisterNotify | Unregister a callback interface. Remove callback interface from internal list. |

### FioService (3 operations)

> Reserved.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/FioService/finishExport` | FioService_finishExport | Reserved. |
| POST | `/FioService/startExport` | FioService_startExport | Reserved. |
| POST | `/FioService/startImport` | FioService_startImport | Reserved. |

### HealthCheckService (7 operations)

> Functions for health check.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/HealthCheckService/computeDoubleValue` | HealthCheckService_computeDoubleValue | Compute value. This function computes a new value using the specified operation. Example: IXConnection conn = ... conn.getHealthCheckService().compute |
| POST | `/HealthCheckService/read` | HealthCheckService_read | Read given health check values. |
| POST | `/HealthCheckService/update` | HealthCheckService_update | Update one value. Example: IXConnection conn = ... HealthCheckInfo hci = new HealthCheckInfo(); hci.setName("valuename"); hci.setStringValue("string1" |
| POST | `/HealthCheckService/updateAll` | HealthCheckService_updateAll | Update given values. |
| POST | `/HealthCheckService/updateDoubleValue` | HealthCheckService_updateDoubleValue | Update one value. This function overwrites an existing value. Example: IXConnection conn = ... conn.getHealthCheckService().updateDoubleValue("valuena |
| POST | `/HealthCheckService/updateMeanValue` | HealthCheckService_updateMeanValue | Functions for health check. |
| POST | `/HealthCheckService/uploadAll` | HealthCheckService_uploadAll | Force uploading health check data to web service. This function should only be used in test scenarios. Indexserver automatically uploads health check  |

### IXEventBusHandler (1 operations)

> Handler interface for event bus events.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/IXEventBusHandler/processEventBusEvents` | IXEventBusHandler_processEventBusEvents | Interface de.elo.ix.client.IXEventBusHandler, method processEventBusEvents |

### IXServerEvents (48 operations)

> The Indexserver fires this events while processing API calls. Event handler functions can be written in JavaScript and their script files have to be stored below the archive folder "Administration/Indexserver Scripting Base". The first level of entries in "Administration/Indexserver Scripting Base" 

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/IXServerEvents/executeRegisteredFunction` | IXServerEvents_executeRegisteredFunction | This event is raised when the IXServicePortIF function executeRegisteredFunction is called. |
| POST | `/IXServerEvents/executeRegisteredFunctionString` | IXServerEvents_executeRegisteredFunctionString | This event is raised when the IXServicePortIF function executeRegisteredFunctionString is called. |
| POST | `/IXServerEvents/getAppInfo` | IXServerEvents_getAppInfo | The Indexserver fires this events while processing API calls. Event handler functions can be written in JavaScript and their script files have to be s |
| POST | `/IXServerEvents/getUserNames` | IXServerEvents_getUserNames | Get lean user and group information. This method is called to internally process the API function `IXServicePortIF#getUserNames(ClientInfo, String[],  |
| POST | `/IXServerEvents/hasMethod` | IXServerEvents_hasMethod | This mandatory method tests, wether an interace method is implemented. The Indexserver calls this function for each method, before the method is calle |
| POST | `/IXServerEvents/onAfterCheckinActivity` | IXServerEvents_onAfterCheckinActivity | This event is raised asynchronously after an activity is written. The event is invoked too, if the activity was deleted. An activity is called deleted |
| POST | `/IXServerEvents/onAfterCheckinDocEnd` | IXServerEvents_onAfterCheckinDocEnd | This asynchronous event is raised after a document or a document version has been checked in. It is raised in checkinDocEnd, checkinDocsEnd, startImpo |
| POST | `/IXServerEvents/onAfterCheckinMap` | IXServerEvents_onAfterCheckinMap | This event is called after `IXServicePortIF#checkinMap(ClientInfo, String, String, int, KeyValue[], LockZ)` has processed. |
| POST | `/IXServerEvents/onAfterCheckinNotes` | IXServerEvents_onAfterCheckinNotes | This asynchronous event is raised after a Note object has been written. It is raised in |
| POST | `/IXServerEvents/onAfterCheckinReminder` | IXServerEvents_onAfterCheckinReminder | This asynchronous event is raised after checkinReminder was called. |
| POST | `/IXServerEvents/onAfterCheckinSord` | IXServerEvents_onAfterCheckinSord | This asynchronous event is raised after a Sord object has been written. It is raised in checkinSord, checkinDocEnd, checkinDocsEnd, checkinSordPath, s |
| POST | `/IXServerEvents/onAfterCheckinUsers` | IXServerEvents_onAfterCheckinUsers | This event is called after `IXServicePortIF#checkinUsers(ClientInfo, UserInfo[], CheckinUsersZ, LockZ)` has processed the supplied UserInfo objects. I |
| POST | `/IXServerEvents/onAfterDelegateWorkflowNode` | IXServerEvents_onAfterDelegateWorkflowNode | This event is invoked after a workflow node has been delegated. The implementor can use this function to notify other systems about the delegation. It |
| POST | `/IXServerEvents/onAfterDeleteMap` | IXServerEvents_onAfterDeleteMap | This event is called after `IXServicePortIF#deleteMap(ClientInfo, String, String, String[], LockZ)` has processed. |
| POST | `/IXServerEvents/onAfterDeleteSord` | IXServerEvents_onAfterDeleteSord | This asynchronous event is raised after a Sord is deleted. It is raised in deleteSord, cleanupStart. |
| POST | `/IXServerEvents/onAfterEndEditWorkFlowNode` | IXServerEvents_onAfterEndEditWorkFlowNode | This asynchronous event is raised after a workflow node is forwarded by endEditWorkFlowNode. |
| POST | `/IXServerEvents/onAfterLogin` | IXServerEvents_onAfterLogin | This method is called asynchronously after a user has been successfully authenticated. |
| POST | `/IXServerEvents/onAfterPackageDeleted` | IXServerEvents_onAfterPackageDeleted | This event is invoked after a package or package level has been deleted. |
| POST | `/IXServerEvents/onAfterPackageImport` | IXServerEvents_onAfterPackageImport | This event is invoked after a package has been imported. |
| POST | `/IXServerEvents/onAfterRefSord` | IXServerEvents_onAfterRefSord | This asynchronous event is raised after a Sord is moved or a reference is created. It is raised in refSord, copySord. |
| POST | `/IXServerEvents/onAfterStartWorkFlow` | IXServerEvents_onAfterStartWorkFlow | This asynchronous event is raised after a workflow is started. |
| POST | `/IXServerEvents/onAfterTerminateDeleteWorkFlow` | IXServerEvents_onAfterTerminateDeleteWorkFlow | This asynchronous event is raised after a workflow is terminated or deleted. |
| POST | `/IXServerEvents/onBeforeCheckinActivity` | IXServerEvents_onBeforeCheckinActivity | This event is raised before an activity is written. The event is invoked too, if the activity is to be deleted. An activity is called deleted, if memb |
| POST | `/IXServerEvents/onBeforeCheckinDocEnd` | IXServerEvents_onBeforeCheckinDocEnd | This synchronous event is raised before a document or a document version is checked in. It is raised in checkinDocEnd, checkinDocsEnd, startImport. |
| POST | `/IXServerEvents/onBeforeCheckinMap` | IXServerEvents_onBeforeCheckinMap | This event is called before `IXServicePortIF#checkinMap(ClientInfo, String, String, int, KeyValue[], LockZ)` is executed. |
| POST | `/IXServerEvents/onBeforeCheckinNotes` | IXServerEvents_onBeforeCheckinNotes | This synchronous event is raised before a Note object is written. It is raised in checkinNotes |
| POST | `/IXServerEvents/onBeforeCheckinSord` | IXServerEvents_onBeforeCheckinSord | This synchronous event is raised before a Sord object is written. It is raised in checkinSord, checkinDocEnd, checkinDocsEnd, startImport. |
| POST | `/IXServerEvents/onBeforeCheckinUsers` | IXServerEvents_onBeforeCheckinUsers | This event is invoked before `IXServicePortIF#checkinUsers(ClientInfo, UserInfo[], CheckinUsersZ, LockZ)` processes the supplied UserInfo objects. |
| POST | `/IXServerEvents/onBeforeDelegateWorkflowNode` | IXServerEvents_onBeforeDelegateWorkflowNode | This event is invoked before a workflow node is delegated. The implementor can use this function to perform additional checks on delegation before Ind |
| POST | `/IXServerEvents/onBeforeDeleteMap` | IXServerEvents_onBeforeDeleteMap | This event is called before `IXServicePortIF#deleteMap(ClientInfo, String, String, String[], LockZ)` is executed. |
| POST | `/IXServerEvents/onBeforeDeleteSord` | IXServerEvents_onBeforeDeleteSord | This synchronous event is raised before a Sord is deleted. It is raised in deleteSord, cleanupStart. |
| POST | `/IXServerEvents/onBeforeFindSords` | IXServerEvents_onBeforeFindSords | This event is fired before the FindInfo object passed in findFirstSords is evaluated. The passed findInfo object can be modified. |
| POST | `/IXServerEvents/onBeforeFindSordsInternalSQL` | IXServerEvents_onBeforeFindSordsInternalSQL | This event is fired before findFirstSords executes the search statement. Be aware of the fact that there is no guaranty about the generated FindSql da |
| POST | `/IXServerEvents/onBeforeLogin` | IXServerEvents_onBeforeLogin | Before a user is authenticated the IX calls this method. Use it to allow or deny the the login to the user. If the user is not allowed to login accord |
| POST | `/IXServerEvents/onBeforeRefSord` | IXServerEvents_onBeforeRefSord | This synchronous event is raised before a Sord is moved or a reference is created. It is raised in refSord, copySord. |
| POST | `/IXServerEvents/onBeforeStartWorkFlow` | IXServerEvents_onBeforeStartWorkFlow | This synchronous event is raised before a workflow is started. |
| POST | `/IXServerEvents/onBeforeTakeWorkFlowNode` | IXServerEvents_onBeforeTakeWorkFlowNode | This event is fired before `IXServicePortIF#takeWorkFlowNode(ClientInfo, int, int, String, int, LockZ)` is processed. |
| POST | `/IXServerEvents/onBeforeTerminateDeleteWorkFlow` | IXServerEvents_onBeforeTerminateDeleteWorkFlow | This synchronous event is raised before a workflow is terminated or deleted. |
| POST | `/IXServerEvents/onCheckSordAccess` | IXServerEvents_onCheckSordAccess | Check access to Sord object. Use this method to replace the internal access checking of the ACL for Sord objects. In order to deny access to the given |
| POST | `/IXServerEvents/onCreateDoc` | IXServerEvents_onCreateDoc | This event is triggered in createDoc. If an onCreateDoc event is configured, the event onCreateSord is not triggered in onCreateSord. |
| POST | `/IXServerEvents/onCreateSord` | IXServerEvents_onCreateSord | This event is triggered in createSord, checkinSordPath and optionally in createDoc. Use this event in order to customize the initialization of an Edit |
| POST | `/IXServerEvents/onFileUploadBuildResponse` | IXServerEvents_onFileUploadBuildResponse | This event is raised after files has been uploaded by the JSON API to build the response message. The response message depends on the file upload solu |
| POST | `/IXServerEvents/onFindClose` | IXServerEvents_onFindClose | This event is called when a search via findFirstSords/findNextSords is closed. |
| POST | `/IXServerEvents/onFindSordsResult` | IXServerEvents_onFindSordsResult | This event is called for find results found by findFirstSords and findNextSords. |
| POST | `/IXServerEvents/onInheritKeywording` | IXServerEvents_onInheritKeywording | This event is called when index values are inherited. Example: function onInheritKeywording(ec, sord, parent, okeyNames, reserved) { for (var i = 0; i |
| POST | `/IXServerEvents/onReadSord` | IXServerEvents_onReadSord | Modify the Sord information returned in checkoutSord, checkoutDoc, findFirstSords, etc. This function is called, before a Sord object is returned to t |
| POST | `/IXServerEvents/onSendFeedToISearch` | IXServerEvents_onSendFeedToISearch | Every time feed documents are send to the iSearch to add it to the iSearch index, this event is called. |
| POST | `/IXServerEvents/onSendSordToISearch` | IXServerEvents_onSendSordToISearch | Every time a Sord is send to the iSearch to add it to the iSearch index, this event is called. |

### IXServicePortIF (298 operations)

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/IXServicePortIF/acceptEula` | IXServicePortIF_acceptEula | Use this method call to accept the EULA. |
| POST | `/IXServicePortIF/activateSubstitution` | IXServicePortIF_activateSubstitution | Activate the submitted substitution. Activates a submitted substitution if it the substitution can be activated manually (Substitution's `Substitution |
| POST | `/IXServicePortIF/addUrlParams` | IXServicePortIF_addUrlParams | Adds additional params to an upload or download URL. Currently, additional params are only available for download URLs. |
| POST | `/IXServicePortIF/adminMode` | IXServicePortIF_adminMode | Queries, enters or leaves the administration mode. In administration mode, only main administrators can logon to the archive. |
| POST | `/IXServicePortIF/alive` | IXServicePortIF_alive | Indexserver API. |
| POST | `/IXServicePortIF/applyForNotifications` | IXServicePortIF_applyForNotifications | Specify, which notifications should be sent by the server. |
| POST | `/IXServicePortIF/beginEditWorkFlowNode` | IXServicePortIF_beginEditWorkFlowNode | Locks a person task node of an active workflow inside the database and returns data needed to |
| POST | `/IXServicePortIF/beginForwardWorkflowNode` | IXServicePortIF_beginForwardWorkflowNode | Prepare forwarding of a workflow node. Use this function to lock a workflow and get the data required for forwarding a node. |
| POST | `/IXServicePortIF/changePassword` | IXServicePortIF_changePassword | Changes the password of the given user. Old password must be provided. |
| POST | `/IXServicePortIF/changeSordMask` | IXServicePortIF_changeSordMask | Changes the storage mask of a archive entry. |
| POST | `/IXServicePortIF/checkBackupDocumentHash` | IXServicePortIF_checkBackupDocumentHash | Check if the md5-String of the document is equal the md5 of the backup document. |
| POST | `/IXServicePortIF/checkLicense` | IXServicePortIF_checkLicense | Check licensing information. This function checks the given license information using proprietary algorithms. |
| POST | `/IXServicePortIF/checkinActivity` | IXServicePortIF_checkinActivity | This function inserts or updates an activity. The current session must have read access to the given Sord. In order to update an existing activity, th |
| POST | `/IXServicePortIF/checkinActivityProject` | IXServicePortIF_checkinActivityProject | This function writes an activity project into the database. The current session must have the permission AccessC.FLAG_EDITACT in order to call this fu |
| POST | `/IXServicePortIF/checkinAspect` | IXServicePortIF_checkinAspect | Update or insert an `Aspect` object. This function requires permission `AccessC#FLAG_EDITMASK`. An exception is thrown, if access is denied or if the  |
| POST | `/IXServicePortIF/checkinColors` | IXServicePortIF_checkinColors | Locks a person task node of an active workflow inside the database and returns data needed to edit it. If lockZ is not set to LockC.NO , WFNode.inUseD |
| POST | `/IXServicePortIF/checkinConfigFiles` | IXServicePortIF_checkinConfigFiles | Uploads configuration files to the configuration directory on the server. |
| POST | `/IXServicePortIF/checkinConfigFilesBegin` | IXServicePortIF_checkinConfigFilesBegin | Prepare ConfigFile objects with URLs to upload configuration or intray files. |
| POST | `/IXServicePortIF/checkinConfigFilesEnd` | IXServicePortIF_checkinConfigFilesEnd | Finishes a check-in procedure for configuration files. |
| POST | `/IXServicePortIF/checkinCounters` | IXServicePortIF_checkinCounters | Prepare ConfigFile objects with URLs to upload configuration or intray files. The names[.] the must contain the destination directory and file name. E |
| POST | `/IXServicePortIF/checkinCryptInfos` | IXServicePortIF_checkinCryptInfos | Write and optionally unlock encryption information. The passwords supplied in cryptInfos must be encrypted with the IXClient.encryptPassword function. |
| POST | `/IXServicePortIF/checkinDocBegin` | IXServicePortIF_checkinDocBegin | Prepares the Indexserver to enable a document to be checked in. |
| POST | `/IXServicePortIF/checkinDocBegin2` | IXServicePortIF_checkinDocBegin2 | Prepares the Indexserver to enable a document to be checked in. Retrieves path id and encryption set from the sord object and sets these values in doc |
| POST | `/IXServicePortIF/checkinDocDupl` | IXServicePortIF_checkinDocDupl | Checks-in already existing documents again. |
| POST | `/IXServicePortIF/checkinDocEnd` | IXServicePortIF_checkinDocEnd | Checks in an uploaded document. |
| POST | `/IXServicePortIF/checkinDocMask` | IXServicePortIF_checkinDocMask | Prepares the Indexserver to enable a document to be checked in. The check in procedure consists of three steps. First a call to checkinDocBegin prepar |
| POST | `/IXServicePortIF/checkinDocMaskLineTemplate` | IXServicePortIF_checkinDocMaskLineTemplate | Writes a keyword template into the database. If this keyword template is already used in keywording forms, these keywording forms will be updated. Thi |
| POST | `/IXServicePortIF/checkinDocsBegin` | IXServicePortIF_checkinDocsBegin | This method prepares the Index Server to allow multiple documents to be checked in at one time. |
| POST | `/IXServicePortIF/checkinDocsEnd` | IXServicePortIF_checkinDocsEnd | This method checks-in uploaded documents. |
| POST | `/IXServicePortIF/checkinEsSettings` | IXServicePortIF_checkinEsSettings | Check in ElasticSearch settings for ESConfigPage only. Note: For internal use only. Might change in the near future . |
| POST | `/IXServicePortIF/checkinIcon` | IXServicePortIF_checkinIcon | Write or insert icon information. When you check in a new icon you must set the ID to -1. |
| POST | `/IXServicePortIF/checkinKeys` | IXServicePortIF_checkinKeys | This method prepares the Index Server to allow multiple documents to be checked in at one time. Utilized in the same manner as checkinDocBegin but is  |
| POST | `/IXServicePortIF/checkinKeywordList` | IXServicePortIF_checkinKeywordList | Reads a keyword list. This function internally calls checkoutKeywords. |
| POST | `/IXServicePortIF/checkinKeywords` | IXServicePortIF_checkinKeywords | Insert keywords and all their children. The keyword IDs specify whether to insert or update kws[.].id={existing ID} Updates the keyword tree branch be |
| POST | `/IXServicePortIF/checkinMap` | IXServicePortIF_checkinMap | Inserts or updates the given key-value-pairs in data in the map specified by id . The map can be associated to a Sord object by setting the parameter  |
| POST | `/IXServicePortIF/checkinMapDomain` | IXServicePortIF_checkinMapDomain | Creates or updates a map domain. |
| POST | `/IXServicePortIF/checkinNoteTemplates` | IXServicePortIF_checkinNoteTemplates | Writes the given stamp definition into the database. |
| POST | `/IXServicePortIF/checkinNotes` | IXServicePortIF_checkinNotes | Write or insert Notes. Only Sord objects that reference documents can have notes. It is also possible to delete a Note: notes[.].setDeleted(true); . N |
| POST | `/IXServicePortIF/checkinNotification` | IXServicePortIF_checkinNotification | Inserts or updates a Notification object if userGuid is null, the own Guid will be taken if userGuid is not the own Guid, admin rights are needed |
| POST | `/IXServicePortIF/checkinOrgUnits` | IXServicePortIF_checkinOrgUnits | Inserts or updates organizational units. When inserting a new OU, OrgUnitInfo.id=-1 has to be set. More than one OU can be checked in with a single ca |
| POST | `/IXServicePortIF/checkinReminder` | IXServicePortIF_checkinReminder | Inserts or updates a reminder object. Reminder.receiverId = -1 should be set if receiverId is to be ignored. Reminder.receiverName = null should be se |
| POST | `/IXServicePortIF/checkinReplNames` | IXServicePortIF_checkinReplNames | Writes replication set names. |
| POST | `/IXServicePortIF/checkinReport` | IXServicePortIF_checkinReport | Inserts custom report entries. This function writes new entries into the report table. These entries always are appended to the report table. Once in  |
| POST | `/IXServicePortIF/checkinReportOptions` | IXServicePortIF_checkinReportOptions | Writes the report options. |
| POST | `/IXServicePortIF/checkinSord` | IXServicePortIF_checkinSord | Writes or inserts a archive entry into the database. A new object does not have to be created with createSord . If the object is missing a GUID then a |
| POST | `/IXServicePortIF/checkinSordPath` | IXServicePortIF_checkinSordPath | Checks the existence of an archive path and creates missing entries if necessary by traversing top-down through the Sords array. The folders are inser |
| POST | `/IXServicePortIF/checkinSordTypes` | IXServicePortIF_checkinSordTypes | Write or insert sord type information. |
| POST | `/IXServicePortIF/checkinSordTypes2` | IXServicePortIF_checkinSordTypes2 | Write or insert sord type information. When you check in a new SordType you must set the ID to -1. The server will generate the actual ID by a sequenc |
| POST | `/IXServicePortIF/checkinStorage` | IXServicePortIF_checkinStorage | This method passes path information to the document manager. |
| POST | `/IXServicePortIF/checkinSubs` | IXServicePortIF_checkinSubs | This method passes path information to the document manager. |
| POST | `/IXServicePortIF/checkinSubscription` | IXServicePortIF_checkinSubscription | Add a subscription. |
| POST | `/IXServicePortIF/checkinSubstitutions` | IXServicePortIF_checkinSubstitutions | Insert new substitutions or update existing ones. New substitutions are added if `Substitution#guid` is empty, existing ones are updated if `Substitut |
| POST | `/IXServicePortIF/checkinTranslateTerms` | IXServicePortIF_checkinTranslateTerms | Write or insert terms into the translation table. This function should not be called frequently, because it causes the translation cache to be reloade |
| POST | `/IXServicePortIF/checkinUser` | IXServicePortIF_checkinUser | Update or insert a user or group. This function internally calls `#checkinUsers(ClientInfo, UserInfo[], CheckinUsersZ, LockZ)` for one user object. |
| POST | `/IXServicePortIF/checkinUserProfile` | IXServicePortIF_checkinUserProfile | Write (add) user profile options. |
| POST | `/IXServicePortIF/checkinUsers` | IXServicePortIF_checkinUsers | Updates or inserts users or groups. When inserting users or groups either UserInfo.id=-1 should be set or the bit CheckinUsersC.NEW_USER in checkinUse |
| POST | `/IXServicePortIF/checkinWorkFlow` | IXServicePortIF_checkinWorkFlow | Write/create a workflow. In case of a new workflow object of type WFTypeC.ACTIVE, the workflow is immediately started after written into database. Thi |
| POST | `/IXServicePortIF/checkinWorkflowTemplate` | IXServicePortIF_checkinWorkflowTemplate | Check in a workflow template as a new version or overwrite an existing version. |
| POST | `/IXServicePortIF/checkoutActivity` | IXServicePortIF_checkoutActivity | This function reads and optionally locks an activity. The current session must be sender or receiver of the activity (Acitivty.senderId, Activity.rece |
| POST | `/IXServicePortIF/checkoutActivityProject` | IXServicePortIF_checkoutActivityProject | This function reads and optionally locks an activity project. |
| POST | `/IXServicePortIF/checkoutAspect` | IXServicePortIF_checkoutAspect | Read and maybe lock an `Aspect` object. An exception is thrown, if access is denied or if the aspect does not exist. |
| POST | `/IXServicePortIF/checkoutAspects` | IXServicePortIF_checkoutAspects | Read and maybe lock a list of `Aspect` objects (EIX-2437). An exception is thrown, if access is denied or if one of the aspects does not exist. |
| POST | `/IXServicePortIF/checkoutColors` | IXServicePortIF_checkoutColors | Checkout the markers definitions (colors of archive entries). |
| POST | `/IXServicePortIF/checkoutColors2` | IXServicePortIF_checkoutColors2 | Checkout the markers definitions (colors of archive entries) for administration purposes. This function returns all colors, inclusive hidden and delet |
| POST | `/IXServicePortIF/checkoutConfigFiles` | IXServicePortIF_checkoutConfigFiles | Read config file names and file data. |
| POST | `/IXServicePortIF/checkoutCounters` | IXServicePortIF_checkoutCounters | Get counter information. |
| POST | `/IXServicePortIF/checkoutCryptInfos` | IXServicePortIF_checkoutCryptInfos | Read and optionally lock the password information for document encryption. |
| POST | `/IXServicePortIF/checkoutDoc` | IXServicePortIF_checkoutDoc | Reads the indexing information and the download URL of a document. |
| POST | `/IXServicePortIF/checkoutDocMask` | IXServicePortIF_checkoutDocMask | Reads a storage mask from the database. |
| POST | `/IXServicePortIF/checkoutDocMaskLineTemplates` | IXServicePortIF_checkoutDocMaskLineTemplates | Check out keyword templates. This function requires ELO 10 license. |
| POST | `/IXServicePortIF/checkoutEsInfo` | IXServicePortIF_checkoutEsInfo | Check out the ElasticSearch informations for ESConfigPage only. Note: For internal use only. Might change in the near future . |
| POST | `/IXServicePortIF/checkoutEsSettings` | IXServicePortIF_checkoutEsSettings | Check out the ElasticSearch settings for ESConfigPage only. Note: For internal use only. Might change in the near future . |
| POST | `/IXServicePortIF/checkoutEsStatus` | IXServicePortIF_checkoutEsStatus | Checkout status of iSearch and updaters and reindexers, for ESConfigPage only. |
| POST | `/IXServicePortIF/checkoutIcon` | IXServicePortIF_checkoutIcon | Read and maybe lock an Icon object. |
| POST | `/IXServicePortIF/checkoutIcons` | IXServicePortIF_checkoutIcons | Use this method call to accept the EULA. This method rejects all data that do not match an EULA provided by the Indexserver. The Indexserver provides  |
| POST | `/IXServicePortIF/checkoutKeys` | IXServicePortIF_checkoutKeys | Reads a list of key objects. |
| POST | `/IXServicePortIF/checkoutKeywordList` | IXServicePortIF_checkoutKeywordList | Reads a keyword list. |
| POST | `/IXServicePortIF/checkoutKeywords` | IXServicePortIF_checkoutKeywords | Collects keywords and their children. |
| POST | `/IXServicePortIF/checkoutKeywordsDynamic` | IXServicePortIF_checkoutKeywordsDynamic | Queries dynamic keyword lists. A server script generates the data of dynamic keyword lists from external resources. Such resources may be databases of |
| POST | `/IXServicePortIF/checkoutMap` | IXServicePortIF_checkoutMap | Reads a map or parts of a map. Since ELO10: In order to access BLOB values, lookup the value in the returned element `MapData#mapItems` or cast the re |
| POST | `/IXServicePortIF/checkoutMapDomain` | IXServicePortIF_checkoutMapDomain | Reads the data of a map domain. |
| POST | `/IXServicePortIF/checkoutMapHistory` | IXServicePortIF_checkoutMapHistory | Reads the history entries for the given map. History entries are only written for MapDomain objects with `MapDomain#history`=true. For MapDomain objec |
| POST | `/IXServicePortIF/checkoutNoteTemplates` | IXServicePortIF_checkoutNoteTemplates | Read the stamp definitions from the users options. |
| POST | `/IXServicePortIF/checkoutNotes` | IXServicePortIF_checkoutNotes | Read notes of a given Sord. |
| POST | `/IXServicePortIF/checkoutNotification` | IXServicePortIF_checkoutNotification | Checkout the markers definitions (colors of archive entries). This function returns only visible and non-deleted colors. It returns the same result as |
| POST | `/IXServicePortIF/checkoutOrgUnits` | IXServicePortIF_checkoutOrgUnits | Read the data of all OUs. |
| POST | `/IXServicePortIF/checkoutPreviewImageURLs` | IXServicePortIF_checkoutPreviewImageURLs | Generates URLs for preview images of documents. |
| POST | `/IXServicePortIF/checkoutReminders` | IXServicePortIF_checkoutReminders | Reads and locks a reminder object. |
| POST | `/IXServicePortIF/checkoutReplNames` | IXServicePortIF_checkoutReplNames | Reads replication set names. |
| POST | `/IXServicePortIF/checkoutReportOptions` | IXServicePortIF_checkoutReportOptions | Reads the report options. |
| POST | `/IXServicePortIF/checkoutSord` | IXServicePortIF_checkoutSord | Reads the data needed to edit an existing archive entry. |
| POST | `/IXServicePortIF/checkoutSordHistory` | IXServicePortIF_checkoutSordHistory | <code>checkoutSordHistory</code> retrieves all history entries related to a given object. |
| POST | `/IXServicePortIF/checkoutSordPath` | IXServicePortIF_checkoutSordPath | Gets the list of Sord object which are the predecessors of the sord given by the objId. If csi.inclRefPaths is set, all the sord of the referenced pat |
| POST | `/IXServicePortIF/checkoutSordTypes` | IXServicePortIF_checkoutSordTypes | Get sord type information. |
| POST | `/IXServicePortIF/checkoutSordTypes2` | IXServicePortIF_checkoutSordTypes2 | Get sord type information. |
| POST | `/IXServicePortIF/checkoutStorage` | IXServicePortIF_checkoutStorage | checkoutStorage retrieves an array of configured paths from the Document Manager. |
| POST | `/IXServicePortIF/checkoutSubs` | IXServicePortIF_checkoutSubs | Read the substitute information for the given user. |
| POST | `/IXServicePortIF/checkoutSubstitutions` | IXServicePortIF_checkoutSubstitutions | Checkout substitutions. Substitutions are checked out by the provided `CheckoutSubstitutionsInfo` and the selected members in `SubscriptionZ` are retu |
| POST | `/IXServicePortIF/checkoutTranslateTerms` | IXServicePortIF_checkoutTranslateTerms | Read terms from translation table for viewing or editing. It can also be used to retrieve the supported languages. Use this function, if only a few te |
| POST | `/IXServicePortIF/checkoutUser` | IXServicePortIF_checkoutUser | Reads the user data for a user or group. Parameter <code>id</code> needs to be specified. |
| POST | `/IXServicePortIF/checkoutUserProfile` | IXServicePortIF_checkoutUserProfile | Read user profile options. |
| POST | `/IXServicePortIF/checkoutUsers` | IXServicePortIF_checkoutUsers | Reads the user data for users or groups. |
| POST | `/IXServicePortIF/checkoutWorkFlow` | IXServicePortIF_checkoutWorkFlow | Reads a workflow definition. |
| POST | `/IXServicePortIF/checkoutWorkflowHistory` | IXServicePortIF_checkoutWorkflowHistory | Reads the histories of a node or a whole workflow. |
| POST | `/IXServicePortIF/checkoutWorkflowTemplate` | IXServicePortIF_checkoutWorkflowTemplate | Check out versions of a workflow template. |
| POST | `/IXServicePortIF/cleanupStart` | IXServicePortIF_cleanupStart | Reads and locks a reminder object. |
| POST | `/IXServicePortIF/cleanupState` | IXServicePortIF_cleanupState | <code>cleanupState(ClientInfo ci)</code> returns state information in a |
| POST | `/IXServicePortIF/cleanupStop` | IXServicePortIF_cleanupStop | cleanupState(ClientInfo ci) returns state information in a BackgroundThreadInfo . |
| POST | `/IXServicePortIF/closeEventBus` | IXServicePortIF_closeEventBus | Close an event bus opened by openEventBus . Any subscriber that knows the bus ID can close this event bus. When a bus is closed, all outstanding event |
| POST | `/IXServicePortIF/collectJobStates` | IXServicePortIF_collectJobStates | <code>collectJobStates</code> lists all the states of currently existing jobs from the IX |
| POST | `/IXServicePortIF/collectMapDomains` | IXServicePortIF_collectMapDomains | Collects the existing map domains. This function does not return the special domain MapDomainC.DOMAIN_IX_OPTIONS. |
| POST | `/IXServicePortIF/collectWorkFlowNodes` | IXServicePortIF_collectWorkFlowNodes | Collect workflow nodes. |
| POST | `/IXServicePortIF/collectWorkFlows` | IXServicePortIF_collectWorkFlows | Collects workflow names. |
| POST | `/IXServicePortIF/combineAcl` | IXServicePortIF_combineAcl | Compares the given ACLs and computes the sum, difference and intersection. To remove the duplicate entries in an ACL, call this function with a null v |
| POST | `/IXServicePortIF/computeDocumentHash` | IXServicePortIF_computeDocumentHash | Compute the hash value of an archived document. |
| POST | `/IXServicePortIF/configureBackup` | IXServicePortIF_configureBackup | Query or send backup profile information of the ELOdm. The user calling this method must have the main administrator right (AccessC.FLAG_ADMIN). |
| POST | `/IXServicePortIF/configureFulltext` | IXServicePortIF_configureFulltext | Get or set the fulltext configuration. Note: deprecated. Use checkinEsSettings and checkoutEsSettings instead. |
| POST | `/IXServicePortIF/configureLicense` | IXServicePortIF_configureLicense | Read or update license information. |
| POST | `/IXServicePortIF/configurePurge` | IXServicePortIF_configurePurge | Query or send the purge task settings of the ELOdm. The user calling this method must have the main administrator right (AccessC.FLAG_ADMIN). |
| POST | `/IXServicePortIF/controlBackgroundThread` | IXServicePortIF_controlBackgroundThread | Query the status of the job and control its state. Using this method the job can be cancelled. The user calling this method must have started the job  |
| POST | `/IXServicePortIF/controlBackup` | IXServicePortIF_controlBackup | Query the status of the backup and purge tasks of the ELOdm. In addition, the backup and purge tasks can be started or stopped. The user calling this  |
| POST | `/IXServicePortIF/cookKeyword` | IXServicePortIF_cookKeyword | Replaces control sequences in the text of a keyword. |
| POST | `/IXServicePortIF/copySord` | IXServicePortIF_copySord | Replaces control sequences in the text of a keyword. |
| POST | `/IXServicePortIF/createActivity` | IXServicePortIF_createActivity | This function creates an activity in memory based on the given project and assigned to the given object. The current session must have read access to  |
| POST | `/IXServicePortIF/createActivityProject` | IXServicePortIF_createActivityProject | This function creates an activity project in memory. If projectName is not null and not empty, the function checks whether the name is already used. T |
| POST | `/IXServicePortIF/createAspect` | IXServicePortIF_createAspect | Initialize an `Aspect` object. Note: The name and type of an aspect line is fixed with the initial value during the first check in and cannot be chang |
| POST | `/IXServicePortIF/createAspectAssoc` | IXServicePortIF_createAspectAssoc | Initializes an `AspectAssoc` object. All parameters are mandatory. |
| POST | `/IXServicePortIF/createAspectMask` | IXServicePortIF_createAspectMask | Initializes a `DocMask` object as a keywording form for aspects. Use `#checkinDocMask(ClientInfo, DocMask, DocMaskZ, LockZ)` to store the keywording f |
| POST | `/IXServicePortIF/createDoc` | IXServicePortIF_createDoc | Creates a new document with indexing information. |
| POST | `/IXServicePortIF/createDocMask` | IXServicePortIF_createDocMask | Creates a storage mask object and assigns default values. |
| POST | `/IXServicePortIF/createEventBusListener` | IXServicePortIF_createEventBusListener | Creates an event bus listener. This function creates an event bus listener that filters events from the event bus as described in the filter list of t |
| POST | `/IXServicePortIF/createEventBusSubscriber` | IXServicePortIF_createEventBusSubscriber | Create an event bus subscriber. A subscriber sends events to an event bus or receives events from an event bus. An application resp. an IXConnection c |
| POST | `/IXServicePortIF/createKey` | IXServicePortIF_createKey | Creates and initializes a key object. |
| POST | `/IXServicePortIF/createNewEncryptionSet` | IXServicePortIF_createNewEncryptionSet | ToBeFilled |
| POST | `/IXServicePortIF/createNote` | IXServicePortIF_createNote | Returns an initialized, temporary Note object. |
| POST | `/IXServicePortIF/createNote2` | IXServicePortIF_createNote2 | Creates a new document with indexing information. Currently the same as createSord but the type member of the returned indexing information (if any) i |
| POST | `/IXServicePortIF/createNoteTemplate` | IXServicePortIF_createNoteTemplate | Initializes a new NoteTemplate object. |
| POST | `/IXServicePortIF/createReminder` | IXServicePortIF_createReminder | Creates a reminder for the Sord specified by objId. |
| POST | `/IXServicePortIF/createRsaKeys` | IXServicePortIF_createRsaKeys | Helper function to create a RSA key pair. |
| POST | `/IXServicePortIF/createSord` | IXServicePortIF_createSord | Creates an object containing all the data needed to edit the indexing information of a new |
| POST | `/IXServicePortIF/createSubscription` | IXServicePortIF_createSubscription | Initialize a subscription object. |
| POST | `/IXServicePortIF/createSuperiorSubstitution` | IXServicePortIF_createSuperiorSubstitution | Create a Substitution as a superior. A superior is able to substitute any of his users (he must be the direct superior (ignoring groups, `UserInfo#sup |
| POST | `/IXServicePortIF/createUser` | IXServicePortIF_createUser | Creates an object for user data. |
| POST | `/IXServicePortIF/createWFNode` | IXServicePortIF_createWFNode | Initalizes a WFNode object. |
| POST | `/IXServicePortIF/createWorkFlow` | IXServicePortIF_createWorkFlow | Prepares a WFDiagram structure. |
| POST | `/IXServicePortIF/deactivateSubstitution` | IXServicePortIF_deactivateSubstitution | Deactivate the submitted substitution. Deactivates a submitted substitution if the substitution was activated manually (Substitution's `SubstitutionSe |
| POST | `/IXServicePortIF/deferWorkFlowNode` | IXServicePortIF_deferWorkFlowNode | Sets the value userDelayDateIso of the given node. |
| POST | `/IXServicePortIF/delegateWorkFlowNode` | IXServicePortIF_delegateWorkFlowNode | Delegates the specified workflow node to another user. An additional person node is inserted into the workflow for the given user and the workflow is  |
| POST | `/IXServicePortIF/deleteActivity` | IXServicePortIF_deleteActivity | This function deletes an activity. The current session must be sender or receiver of the activity (Acitivty.senderId, Activity.receiverId). |
| POST | `/IXServicePortIF/deleteActivityProject` | IXServicePortIF_deleteActivityProject | This function deletes an activity project from the database. The current session must have the permission AccessC.FLAG_EDITACT in order to call this f |
| POST | `/IXServicePortIF/deleteAspect` | IXServicePortIF_deleteAspect | Delete an `Aspect` object. This function requires permission `AccessC#FLAG_EDITMASK`. An exception is thrown, if access is denied or if the aspect doe |
| POST | `/IXServicePortIF/deleteConfigFiles` | IXServicePortIF_deleteConfigFiles | Creates a reminder for the Sord specified by objId. |
| POST | `/IXServicePortIF/deleteCounters` | IXServicePortIF_deleteCounters | Delete counters. This function is currently not implemented and always throws an exception. Counters cannot be deleted. |
| POST | `/IXServicePortIF/deleteDocMask` | IXServicePortIF_deleteDocMask | Deletes a storage mask. If archive entries connected to the mask still exist in the database, another mask assignMaskId can be assigned to them. If as |
| POST | `/IXServicePortIF/deleteDocMaskLineTemplates` | IXServicePortIF_deleteDocMaskLineTemplates | Delete keyword templates This function requires ELO 10 license. |
| POST | `/IXServicePortIF/deleteEventBusListener` | IXServicePortIF_deleteEventBusListener | Deletes an event bus listener. This function deletes an event bus listener that was created by a call to createEventBusListener . The function does no |
| POST | `/IXServicePortIF/deleteEventBusSubscriber` | IXServicePortIF_deleteEventBusSubscriber | Deletes an event bus subscriber. This function deletes a subscriber an all its event listeners. |
| POST | `/IXServicePortIF/deleteIcon` | IXServicePortIF_deleteIcon | Delete an icon. |
| POST | `/IXServicePortIF/deleteKeys` | IXServicePortIF_deleteKeys | Deletes keys. Since the function requires an exclusive access to the user data, the data must be locked for the current user or must not be locked for |
| POST | `/IXServicePortIF/deleteKeywordList` | IXServicePortIF_deleteKeywordList | Deletes a keyword list. |
| POST | `/IXServicePortIF/deleteKeywords` | IXServicePortIF_deleteKeywords | Deletes the keywords with the given IDs. IMPORTANT: This function assigns new IDs to all branches of the keyword trees below the parent keywords of th |
| POST | `/IXServicePortIF/deleteMap` | IXServicePortIF_deleteMap | Delete map items. |
| POST | `/IXServicePortIF/deleteMapDomain` | IXServicePortIF_deleteMapDomain | Deletes a map domain and removes the associated database tables. |
| POST | `/IXServicePortIF/deleteNoteTemplates` | IXServicePortIF_deleteNoteTemplates | Delete the stamp definition with the given ID. |
| POST | `/IXServicePortIF/deleteNotes` | IXServicePortIF_deleteNotes | Deletes notes. After a note or annotation has been deleted it should not be checked in again with MbAll. In this case the isDeleted() value is overwri |
| POST | `/IXServicePortIF/deleteNotification` | IXServicePortIF_deleteNotification | Deleting the Notification identified by objGuid / userGuid combination if the Notification has child Notifications, they will be deleted as well. |
| POST | `/IXServicePortIF/deleteOrgUnits` | IXServicePortIF_deleteOrgUnits | Delete OUs. |
| POST | `/IXServicePortIF/deleteReminders` | IXServicePortIF_deleteReminders | Deletes the reminders (logically) with the the given IDs. |
| POST | `/IXServicePortIF/deleteReport` | IXServicePortIF_deleteReport | Deletes report entries until endDateISO . |
| POST | `/IXServicePortIF/deleteSord` | IXServicePortIF_deleteSord | Deletes an archive entry and all child entries or deletes a relation (logical copy). A reference is deleted if parentId specifies an entry which is no |
| POST | `/IXServicePortIF/deleteSordTypes` | IXServicePortIF_deleteSordTypes | Delete sord type information. |
| POST | `/IXServicePortIF/deleteSubs` | IXServicePortIF_deleteSubs | Delete deputy information. |
| POST | `/IXServicePortIF/deleteSubscription` | IXServicePortIF_deleteSubscription | Delete a subscription. |
| POST | `/IXServicePortIF/deleteSubstitutions` | IXServicePortIF_deleteSubstitutions | Delete substitutions by its GUIDs. The current user is allowed to delete a substitution where Substitution.user is user A, if: The current user create |
| POST | `/IXServicePortIF/deleteTranslateTerms` | IXServicePortIF_deleteTranslateTerms | Delete terms from the translation table. This function should not be called frequently, because it causes the translation cache to be reloaded. |
| POST | `/IXServicePortIF/deleteUser` | IXServicePortIF_deleteUser | Deletes user or group. |
| POST | `/IXServicePortIF/deleteUserProfile` | IXServicePortIF_deleteUserProfile | Deletes profile options. |
| POST | `/IXServicePortIF/deleteUsers` | IXServicePortIF_deleteUsers | Deletes users or groups. Since this function requires exclusive access to the user data, the data must be locked for the current user or must not be l |
| POST | `/IXServicePortIF/deleteWorkFlow` | IXServicePortIF_deleteWorkFlow | Deletes a workflow. WOrkflows that are deleted are not physically deleted and can be retrieved using checkoutWorkFlow(). Deleted workflows return true |
| POST | `/IXServicePortIF/deleteWorkflowTemplate` | IXServicePortIF_deleteWorkflowTemplate | Deletes a workflow template version. |
| POST | `/IXServicePortIF/editPublicDownloadUrls` | IXServicePortIF_editPublicDownloadUrls | Edits the public downloads |
| POST | `/IXServicePortIF/encryptStringRsa` | IXServicePortIF_encryptStringRsa | Encrypt or decrypt a string using the RSA algorithm. This function encrypts or decrypts the string data using the RSA algorithm. The string must not b |
| POST | `/IXServicePortIF/endEditWorkFlowNode` | IXServicePortIF_endEditWorkFlowNode | Stores an edited person node of an active workflow into the database and unlocks the workflow. The workflow is forwarded to the successor nodes as pas |
| POST | `/IXServicePortIF/evalAutoFiling` | IXServicePortIF_evalAutoFiling | Evaluate the destination archive path based on filing definitions of a keywording from. This function evaluates the parent folder of a Sord object bas |
| POST | `/IXServicePortIF/executeRegisteredFunction` | IXServicePortIF_executeRegisteredFunction | Execute a registered function defined in a JavaScript or in an event handler. |
| POST | `/IXServicePortIF/executeRegisteredFunctionString` | IXServicePortIF_executeRegisteredFunctionString | Execute a registered function defined in a JavaScript or in an event handler. |
| POST | `/IXServicePortIF/executeScript` | IXServicePortIF_executeScript | Execute a script. |
| POST | `/IXServicePortIF/exportWorkflow` | IXServicePortIF_exportWorkflow | Exports the workflow-version. |
| POST | `/IXServicePortIF/findActivityProjects` | IXServicePortIF_findActivityProjects | This function reads all activity projects. |
| POST | `/IXServicePortIF/findAggregations` | IXServicePortIF_findAggregations | Find aggregation data for dashboards and statistics. |
| POST | `/IXServicePortIF/findBackgroundThreads` | IXServicePortIF_findBackgroundThreads | Query all jobs executed in the background. The method returns all jobs started by the calling user. If the user has the administrator right (AccessC.F |
| POST | `/IXServicePortIF/findClose` | IXServicePortIF_findClose | Deletes the search results explicitly in the Indexserver process to save memory. |
| POST | `/IXServicePortIF/findCompletion` | IXServicePortIF_findCompletion | Autocompletion/ Type as you search Use `de.elo.ix.client.esearch.CompletionOptions` in findInfo.indByElastic.eSearchOptions. |
| POST | `/IXServicePortIF/findContextTerms` | IXServicePortIF_findContextTerms | Find terms for faceted search. |
| POST | `/IXServicePortIF/findFirstActivities` | IXServicePortIF_findFirstActivities | This function reads the activities of an object. |
| POST | `/IXServicePortIF/findFirstConfigFiles` | IXServicePortIF_findFirstConfigFiles | Finds configuration or postbox files. |
| POST | `/IXServicePortIF/findFirstDocMasks` | IXServicePortIF_findFirstDocMasks | Find docMask. This function allows to find docMasks by their name, id, guid, packageguid or packagelevelguid properties. Wildcards can be used as defi |
| POST | `/IXServicePortIF/findFirstIcons` | IXServicePortIF_findFirstIcons | Find icon. This function allows to find icons by their name, package, or contentType properties. Wildcards can be used as defined in the session optio |
| POST | `/IXServicePortIF/findFirstNotes` | IXServicePortIF_findFirstNotes | Find first notes. This function starts a search for Note object and returns the first objects found in `FindResult#notes`. At least `FindInfo#findByNo |
| POST | `/IXServicePortIF/findFirstReportInfos` | IXServicePortIF_findFirstReportInfos | Finds report entries. |
| POST | `/IXServicePortIF/findFirstSords` | IXServicePortIF_findFirstSords | Find archive entries and retrieve the first <code>max</code> objects. |
| POST | `/IXServicePortIF/findFirstSubscriptions` | IXServicePortIF_findFirstSubscriptions | Find first max subscriptions. This function finds the subscriptions of the current user. |
| POST | `/IXServicePortIF/findFirstTasks` | IXServicePortIF_findFirstTasks | Finds reminders, activities and active workflow nodes. |
| POST | `/IXServicePortIF/findFirstTranslateTerms` | IXServicePortIF_findFirstTranslateTerms | Find terms for which a translation is available. Close the search results with a call to findClose. |
| POST | `/IXServicePortIF/findFirstUsers` | IXServicePortIF_findFirstUsers | Find user data. This function allows to find users by their name, description, or one of their properties. Wildcards can be used as defined in the ses |
| POST | `/IXServicePortIF/findFirstWorkflows` | IXServicePortIF_findFirstWorkflows | collectJobStates lists all the states of currently existing jobs from the IX backround job pool running or finished, but still listed. |
| POST | `/IXServicePortIF/findNextActivities` | IXServicePortIF_findNextActivities | This function reads the next activites of an object. |
| POST | `/IXServicePortIF/findNextConfigFiles` | IXServicePortIF_findNextConfigFiles | Finds next configuration files. |
| POST | `/IXServicePortIF/findNextDocMasks` | IXServicePortIF_findNextDocMasks | Find next docMask. |
| POST | `/IXServicePortIF/findNextIcons` | IXServicePortIF_findNextIcons | Find next icon. |
| POST | `/IXServicePortIF/findNextNotes` | IXServicePortIF_findNextNotes | Find next notes. This function continues a search for Note objects startet with function `#findFirstNotes(ClientInfo, FindInfo, int, NoteZ)`. |
| POST | `/IXServicePortIF/findNextReportInfos` | IXServicePortIF_findNextReportInfos | Finds report entries. |
| POST | `/IXServicePortIF/findNextSords` | IXServicePortIF_findNextSords | Retrieves further results of a previous search with <code>findFirstSords</code>. |
| POST | `/IXServicePortIF/findNextSubscriptions` | IXServicePortIF_findNextSubscriptions | Find next max subscriptions beginning at index idx. |
| POST | `/IXServicePortIF/findNextTasks` | IXServicePortIF_findNextTasks | Continues the find process started with findFirstTasks. |
| POST | `/IXServicePortIF/findNextTranslateTerms` | IXServicePortIF_findNextTranslateTerms | Find next terms. |
| POST | `/IXServicePortIF/findNextUsers` | IXServicePortIF_findNextUsers | Find next user data. |
| POST | `/IXServicePortIF/findNextWorkflows` | IXServicePortIF_findNextWorkflows | Finds more active workflows. This method returns all active workflows for the current user. |
| POST | `/IXServicePortIF/findSearchTerms` | IXServicePortIF_findSearchTerms | Corrections and synonyms. |
| POST | `/IXServicePortIF/finishExport` | IXServicePortIF_finishExport | Finds configuration or postbox files. |
| POST | `/IXServicePortIF/forwardSubstitution` | IXServicePortIF_forwardSubstitution | Forward or transfer a substitution to an other user. A substitution can be forwarded or transfered to an other user if `SubstitutionSettings#canBeForw |
| POST | `/IXServicePortIF/forwardWorkflowNode` | IXServicePortIF_forwardWorkflowNode | Forward a workflow node, terminate a workflow or modify node data. Example 1: Forward a workflow node: // Lock workflow and read node data WFEditNode  |
| POST | `/IXServicePortIF/getAclAccess` | IXServicePortIF_getAclAccess | Returns the access of the given ACL. |
| POST | `/IXServicePortIF/getArchiveStatistics` | IXServicePortIF_getArchiveStatistics | Read characteristical properties of the archive. |
| POST | `/IXServicePortIF/getCompiledScripts` | IXServicePortIF_getCompiledScripts | This function returns a map containing information of all compiled scripts. |
| POST | `/IXServicePortIF/getConstants` | IXServicePortIF_getConstants | Retrieves the constants. |
| POST | `/IXServicePortIF/getContextTerms` | IXServicePortIF_getContextTerms | Send a notification to another user. |
| POST | `/IXServicePortIF/getDebuggerPort` | IXServicePortIF_getDebuggerPort | This function returns debugger's port. |
| POST | `/IXServicePortIF/getDistinctValuesOfObjKey` | IXServicePortIF_getDistinctValuesOfObjKey | Exports the workflow-version. |
| POST | `/IXServicePortIF/getESWFromEditInfo` | IXServicePortIF_getESWFromEditInfo | Returns the FileData-Objects from the EditInfo-Objects. |
| POST | `/IXServicePortIF/getEditInfoFromESW` | IXServicePortIF_getEditInfoFromESW | Returns the EditInfo-Objects from the FileData-Objects. |
| POST | `/IXServicePortIF/getExportZipUrl` | IXServicePortIF_getExportZipUrl | Gets the URL for downloading the generated ZIP-archive of this export. |
| POST | `/IXServicePortIF/getImportZipUrl` | IXServicePortIF_getImportZipUrl | Retrieves the URL for uploading the ZIP-archive for this import. |
| POST | `/IXServicePortIF/getPublicDownloads` | IXServicePortIF_getPublicDownloads | Gets the public downloads. |
| POST | `/IXServicePortIF/getScriptsToDebug` | IXServicePortIF_getScriptsToDebug | This function returns the list of the scripts which are currently debugged, i.e. the property "scriptsToDebug". |
| POST | `/IXServicePortIF/getSearchTerms` | IXServicePortIF_getSearchTerms | Get alternative terms for an iSearch search. This function can be used to list all index values currently used for a given index group. To achieve thi |
| POST | `/IXServicePortIF/getServerInfo` | IXServicePortIF_getServerInfo | Retrieves configurational information, e.g. license key, additional Indexservers, etc. |
| POST | `/IXServicePortIF/getServerInfoDM` | IXServicePortIF_getServerInfoDM | Gets DM configuration information. |
| POST | `/IXServicePortIF/getSessionFromTicket` | IXServicePortIF_getSessionFromTicket | Returns the EditInfo-Objects from the FileData-Objects. The rows "IXDTEXT", "ISCRYPT", "ATTACHID" and "SIGID" in the esw-file are not supported in thi |
| POST | `/IXServicePortIF/getSessionInfos` | IXServicePortIF_getSessionInfos | Returns the SessionInfo-Objects about all the active connections. |
| POST | `/IXServicePortIF/getSessionOptions` | IXServicePortIF_getSessionOptions | Retrieve the current session options. |
| POST | `/IXServicePortIF/getUserNames` | IXServicePortIF_getUserNames | Reads user or group names and IDs. |
| POST | `/IXServicePortIF/getWebDAVPathFromObjID` | IXServicePortIF_getWebDAVPathFromObjID | Returns the WebDAV path from an Object ID. |
| POST | `/IXServicePortIF/getWebDAVPathFromObjID2` | IXServicePortIF_getWebDAVPathFromObjID2 | Returns the WebDAV path from an Object ID. |
| POST | `/IXServicePortIF/getWorkflowTemplateVersions` | IXServicePortIF_getWorkflowTemplateVersions | Reads the version information of all versions of the given workflow. |
| POST | `/IXServicePortIF/importWorkFlow` | IXServicePortIF_importWorkFlow | Retrieve the current session options. |
| POST | `/IXServicePortIF/importWorkFlow2` | IXServicePortIF_importWorkFlow2 | Imports a workflow template from a file. To export a workflow template into a file, use the workflow design dialogue in ELO-CLIENT. |
| POST | `/IXServicePortIF/insertPublicDownload` | IXServicePortIF_insertPublicDownload | Creates and inserts a new public download |
| POST | `/IXServicePortIF/internalReceiveEvents` | IXServicePortIF_internalReceiveEvents | Read events from the server. This function should not be called directly. It is used internally by the event bus helper object of IXConnection . |
| POST | `/IXServicePortIF/invalidateCache` | IXServicePortIF_invalidateCache | Invalidate the internally used caches for users, storage masks, etc. |
| POST | `/IXServicePortIF/invalidateCache2` | IXServicePortIF_invalidateCache2 | Invalidate the internally used caches. |
| POST | `/IXServicePortIF/linkSords` | IXServicePortIF_linkSords | Links archive entries. Links are associations between archive entries and are independent from the archive hierarchy. The links to or from an archive  |
| POST | `/IXServicePortIF/linkSords2` | IXServicePortIF_linkSords2 | Links archive entries like `#linkSords`. This method provides the additional parameter `LinkSordInfo` to specify more options for linking sords togeth |
| POST | `/IXServicePortIF/lockArchive` | IXServicePortIF_lockArchive | Locks the archive for users or retrieves the lock on the archive. The behavior of this function has changed with ELO11 since the security concept of k |
| POST | `/IXServicePortIF/login` | IXServicePortIF_login | Log on to Indexserver. |
| POST | `/IXServicePortIF/loginAdmin` | IXServicePortIF_loginAdmin | Login any user as an administrator. |
| POST | `/IXServicePortIF/loginEloProf` | IXServicePortIF_loginEloProf | This login is used by ELOprofessional applications if the Indexserver is used to forward |
| POST | `/IXServicePortIF/loginKerberos` | IXServicePortIF_loginKerberos | Login using Kerberos ticket. |
| POST | `/IXServicePortIF/logout` | IXServicePortIF_logout | Log on to Indexserver. If the function succeeds, the return value is an object containing a ticket that allows access to all the other interface funct |
| POST | `/IXServicePortIF/moveDocuments` | IXServicePortIF_moveDocuments | Move documents from one storage path to another storage path. |
| POST | `/IXServicePortIF/notifyServer` | IXServicePortIF_notifyServer | This function notifies the Indexserver about an operation of the client program. Use this function in order to notify the license management, when a w |
| POST | `/IXServicePortIF/openEventBus` | IXServicePortIF_openEventBus | Open a new event bus. Caution: the event bus API functions cannot be used with SOAP communication. An event bus is like a communication channel betwee |
| POST | `/IXServicePortIF/parseException` | IXServicePortIF_parseException | Parses the given string of an exception into a structured IXExceptionData object. |
| POST | `/IXServicePortIF/processFindResult` | IXServicePortIF_processFindResult | Executes the processing information given by <code>processInfo</code> for all objects found by |
| POST | `/IXServicePortIF/processOcr` | IXServicePortIF_processOcr | Compute OCR on the given image data or on an archived document. In order to use this function, the ELO OCR Service 8.0 has to be installed somewhere o |
| POST | `/IXServicePortIF/processTrees` | IXServicePortIF_processTrees | <code>processTrees</code> extends ValueClass implements a generic tree walk for all subtrees |
| POST | `/IXServicePortIF/provideCryptPassword` | IXServicePortIF_provideCryptPassword | Provide a password to be used in the current session for encrypting and decrypting of documents. The given password must be encrypted with the IXClien |
| POST | `/IXServicePortIF/provideSystemCryptPassword` | IXServicePortIF_provideSystemCryptPassword | Provide a system password to be used in the current session for encrypting and decrypting of documents. The given password must be encrypted with the  |
| POST | `/IXServicePortIF/queryJobProtocol` | IXServicePortIF_queryJobProtocol | Query the protocol of a background thread. The method returns all log messages that matches the restrictions given by the parameter queryJobProtocolIn |
| POST | `/IXServicePortIF/queryJobState` | IXServicePortIF_queryJobState | Returns the job state for a given job GUID. |
| POST | `/IXServicePortIF/refSord` | IXServicePortIF_refSord | Parses the given string of an exception into a structured IXExceptionData object. If the given string does not represent an IXException, the exception |
| POST | `/IXServicePortIF/registerOcrWorker` | IXServicePortIF_registerOcrWorker | This function is called from an OCR worker process to notify Indexserver about its state. The behavior of a OCR worker process is beyond the API docum |
| POST | `/IXServicePortIF/reload` | IXServicePortIF_reload | This function reloads all internal objects. Call this function with administrator privileges, if configuration options, scripts or configuration files |
| POST | `/IXServicePortIF/reloadScripts` | IXServicePortIF_reloadScripts | This function reloads all scripts. Call this function with administrator privileges, if some scripts are modified. |
| POST | `/IXServicePortIF/resolveRights` | IXServicePortIF_resolveRights | Resolves the rights of a user. This function calculates the effective rights of a given user. Hereby, the given parameter userInfo will not be checked |
| POST | `/IXServicePortIF/restoreDoc` | IXServicePortIF_restoreDoc | Overwrites a document with the corresponding version from the backup. This function only works if a backup exists. |
| POST | `/IXServicePortIF/restoreIcon` | IXServicePortIF_restoreIcon | Restore a deleted icon. |
| POST | `/IXServicePortIF/restoreSord` | IXServicePortIF_restoreSord | Restores an archive entry, its references and notes. Passing true for singleObject restores only the object represented by objId . Otherwise, the comp |
| POST | `/IXServicePortIF/runEsProcess` | IXServicePortIF_runEsProcess | Run a iSearch process now (if it is not running) or interrupt it if its running. |
| POST | `/IXServicePortIF/sendEvents` | IXServicePortIF_sendEvents | Send events to event busses. Call this function to send events to event busses. |
| POST | `/IXServicePortIF/setScriptsToDebug` | IXServicePortIF_setScriptsToDebug | This function allows to set the the property "scriptsToDebug". |
| POST | `/IXServicePortIF/setServerInfo` | IXServicePortIF_setServerInfo | Retrieves the constants. Constants are provided as objects to provide the advantage of type checking. (Java 1.4 does not support enumeration types). |
| POST | `/IXServicePortIF/setServerInfoDM` | IXServicePortIF_setServerInfoDM | Sets the writable members of the DM configuration. |
| POST | `/IXServicePortIF/setSessionOptions` | IXServicePortIF_setSessionOptions | This function sets options related to the session identified by the given ticket. |
| POST | `/IXServicePortIF/startAdHocWorkFlow` | IXServicePortIF_startAdHocWorkFlow | Starts an Ad Hoc Workflow. |
| POST | `/IXServicePortIF/startAdHocWorkFlow2` | IXServicePortIF_startAdHocWorkFlow2 | Starts an Ad Hoc Workflow. |
| POST | `/IXServicePortIF/startAdHocWorkFlow3` | IXServicePortIF_startAdHocWorkFlow3 | Starts an Ad Hoc Workflow. |
| POST | `/IXServicePortIF/startExport` | IXServicePortIF_startExport | Starts an export-job. |
| POST | `/IXServicePortIF/startExportExt` | IXServicePortIF_startExportExt | Starts an export-job. |
| POST | `/IXServicePortIF/startImport` | IXServicePortIF_startImport | Starts an import-job. |
| POST | `/IXServicePortIF/startWorkFlow` | IXServicePortIF_startWorkFlow | Starts an export-job. The given IDs and their children will be exported as specified in the options. |
| POST | `/IXServicePortIF/startWorkFlow2` | IXServicePortIF_startWorkFlow2 | Starts a workflow from a workflow template. |
| POST | `/IXServicePortIF/takeWorkFlowNode` | IXServicePortIF_takeWorkFlowNode | Assign a node to a user. This function is useful in two situations: 1. A user calls this function to assume a task for exclusive use. The task must be |
| POST | `/IXServicePortIF/terminatePublicDownloadUrls` | IXServicePortIF_terminatePublicDownloadUrls | Deletes the public downloads |
| POST | `/IXServicePortIF/terminateWorkFlow` | IXServicePortIF_terminateWorkFlow | Terminates a workflow. |
| POST | `/IXServicePortIF/testAdapter` | IXServicePortIF_testAdapter | This function is used for testing. |
| POST | `/IXServicePortIF/unlinkSords` | IXServicePortIF_unlinkSords | This function is used for testing. In productive environments it always throws an exception. |
| POST | `/IXServicePortIF/updateWorkflow` | IXServicePortIF_updateWorkflow | Updates data of an active `WFDiagram`. This function can be used to mark a workflow node as read or unread. |

### LdapService (2 operations)

> Configure access to LDAP server.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/LdapService/configure` | LdapService_configure | Get or set LDAP configuration from plugin. |
| POST | `/LdapService/createConfig` | LdapService_createConfig | Configure access to LDAP server. |

### MyELOService (4 operations)

> This interface provides functions to MyELO page.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/MyELOService/checkState` | MyELOService_checkState | This interface provides functions to MyELO page. |
| POST | `/MyELOService/cleanUpNotifications` | MyELOService_cleanUpNotifications | Delete Notifications of a user. |
| POST | `/MyELOService/readContent` | MyELOService_readContent | @param ci ClientInfo object with session information. |
| POST | `/MyELOService/readHashTagCloud` | MyELOService_readHashTagCloud | Returns HashTagCloud informations. Currently HtCloudInfo is not used. Set null instead. Default values for HashTagCloud: Timeperiod: 8 Weeks. HashTagC |

### PackageService (5 operations)

> This interface provides functions to access packages. EIX-1895

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/PackageService/checkinPackage` | PackageService_checkinPackage | Create a `PackageData` object. |
| POST | `/PackageService/checkoutPackages` | PackageService_checkoutPackages | Read and maybe lock `PackageData` objects. |
| POST | `/PackageService/createPackage` | PackageService_createPackage | This interface provides functions to access packages. EIX-1895 |
| POST | `/PackageService/deletePackages` | PackageService_deletePackages | Delete `PackageData` objects. |
| POST | `/PackageService/exportPackageContent` | PackageService_exportPackageContent | Export `PackageData` objects. |

### PluginService (10 operations)

> This service allows to start and stop OSGi plugins.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/PluginService/configure` | PluginService_configure | Read and/or modify plugin configuration. If the plugin does not support configuration, an exception with code `IXExceptionC#UNSUPPORTED_FUNCTION` is t |
| POST | `/PluginService/getHistory` | PluginService_getHistory | Get the history of a plugin. |
| POST | `/PluginService/getPlugin` | PluginService_getPlugin | Return the plugin with the given symbolic name. If no plugin with the given name is running, an exception with code IXExceptionC#NOT_FOUND is thrown. |
| POST | `/PluginService/getPlugins` | PluginService_getPlugins | This service allows to start and stop OSGi plugins. |
| POST | `/PluginService/install` | PluginService_install | Install a plugin from the location of a JAR file. |
| POST | `/PluginService/send` | PluginService_send | Send a message to a plugin. This function directs the message to the `ConfigurePlugin` interface of the plugin. |
| POST | `/PluginService/start` | PluginService_start | Start plugin with given ID. |
| POST | `/PluginService/stop` | PluginService_stop | Stop plugin with given ID. |
| POST | `/PluginService/uninstall` | PluginService_uninstall | Uninstall plugin with given ID. |
| POST | `/PluginService/upload` | PluginService_upload | Install a plugin which JAR is uploaded from a stream. |

### RawStreamService (2 operations)

> This service helps to support the upload and download functions in IXConnection.

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/RawStreamService/download` | RawStreamService_download | Download a stream |
| POST | `/RawStreamService/upload` | RawStreamService_upload | This service helps to support the upload and download functions in IXConnection. |

### SystemInformation (4 operations)

> Provides functions for AdminConsole to give an overview over the whole System (e.g. number of Documents or information about all users)

| Method | Path | Operation ID | Summary |
|--------|------|-------------|---------|
| POST | `/SystemInformation/archivReport` | SystemInformation_archivReport | Provides functions for AdminConsole to give an overview over the whole System (e.g. number of Documents or information about all users) |
| POST | `/SystemInformation/countDocsInStorePath` | SystemInformation_countDocsInStorePath | Counts the documents defined by SystemInfo. |
| POST | `/SystemInformation/licenseReport` | SystemInformation_licenseReport | Delegeates the AM license report. |
| POST | `/SystemInformation/userReport` | SystemInformation_userReport | Implementation for AdminConsoles user statistics. |

