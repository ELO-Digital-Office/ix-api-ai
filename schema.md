# Indexserver - Data Type Definitions

**Version:** 25.0.1.5

## AI Agents

AI Coding Agents, please read file SKILL.md first.

## Schemas (1396 total)

### Model Schemas (841)

#### `AccessC`

This class defines constants for access rights. The FLAG_* constants are used in `UserInfo#flags`. The LUR_* constants are used in access control lists, `AclItem#access`.

| Property | Type | Description |
|----------|------|-------------|
| `FLAG2_ALL` | integer | User right: all rights for `UserInfo#flags2`. Default flags2 value for administrators. / |
| `FLAG2_ANALYTICS_DASHBOARD_EDIT` | integer | User right: analytics dashboard edit. This right allows a user to access the 'dashboard' area at ELO Analytics and to edit dashboards. |
| `FLAG2_ANALYTICS_DASHBOARD_VIEW` | integer | User right: analytics dashboard view. This right allows a user to view predefined dashboards. |
| `FLAG2_ANALYTICS_DISCOVER` | integer | User right: analytics discover. This right allows a user to access the 'discover' area at ELO Analytics and to edit searches. |
| `FLAG2_ANALYTICS_VISUALIZE` | integer | User right: analytics visualize. This right allows a user to access the 'visualize' area at ELO Analytics and to edit visualizations. |
| `FLAG2_CAN_BE_SUBSTITUTED` | integer | Group right: This group can be substituted to an other user. This right cannot be inherited by sub groups and is not inherited by substituted groups o |
| `FLAG2_CAN_USE_AI` | integer | User's right to use AI functions. <p>  The Indexserver only grants this right but does not enforce it. It is up to the AI assistant component to verif |
| `FLAG2_DESKTOP_CLIENT_PLUS` | integer | Allows to use Desktop Client Plus. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_EDITFLOWS` | integer | User right to edit data in the ELO Flows component. <p>  The Indexserver only provides this right but does not enforce it. It is up to the ELO Flows c |
| `FLAG2_EXTEND_WORKFLOW_RIGHTS` | integer | User right: extend ACL during workflow execution. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_FUNCTIONAL_ROLE` | integer | PlaceHolder 1<<13 (8192) can be used. / Functional role that can be chosen by the user. |
| `FLAG2_INTERACTIVE_LOGIN` | integer | User right: Allow interactive login. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_IS_DMS_DESKTOP_USER` | integer | User right: user works with ELO DMS Desktop. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_LAST` | integer | User right to edit data in the ELO Flows component. The Indexserver only provides this right but does not enforce it. It is up to the ELO Flows compon |
| `FLAG2_LIMITED_CLIENT` | integer | User right: limited client. This right limits the functionality of the client application. In AdminConsole, this flag ist named "ELOxc Client User, Em |
| `FLAG2_SHOW_EXTRA_INFO` | integer | User right: user can see additional keywording information. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_VISIBLE_FEED_USER` | integer | User right: user is visible in document feed. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_VISIBLE_USER` | integer | User right: user is visible in a select box. This value has to be used in the UserInfo.flags2 member. |
| `FLAG2_WF_CONTROLLER` | integer | User right: workflow controller. This right allows a user to read all active workflows - even those where she or he is not involved. In IX 8.x, this f |
| `FLAGS2_NOT_TO_INHERIT` | integer | Rights (UserInfo.flags2) which are not inherited from groups the user is a member. |
| `FLAGS2_NOT_TO_SUBSTITUTE` | integer | Rights (UserInfo.flags2) which are not substituted. EIX-864, RID11413 |
| `FLAGS_EXCLUSIVE_FOR_GROUPS` | integer | These rights are removed from UserInfo.flags if UserInfo.type == UserInfoC.TYPE_USER |
| `FLAGS_NOT_TO_INHERIT` | integer | Rights (UserInfo.flags) which are not inherited from groups the user is a member. |
| `FLAGS_NOT_TO_SUBSTITUTE` | integer | Rights (UserInfo.flags) which are not substituted. EIX-864 |
| `FLAG_ADMIN` | integer | Main administrator, can edit all users and groups. / |
| `FLAG_ALL` | integer | All rights (without flag FLAG_NOLOGIN and FLAG_IS_OPTION_GROUP ). / |
| `FLAG_AUTHOR` | integer | Author for release documents / |
| `FLAG_CHANGEMASK` | integer | Change the storage mask of an existing (not new) archive entry. / |
| `FLAG_CHANGEPATH` | integer | Change storage path settings. / |
| `FLAG_CHANGEPW` | integer | Change password. / |
| `FLAG_CHANGEREV` | integer | Change the archiving mode of a document. |
| `FLAG_DELDOC` | integer | Delete documents. |
| `FLAG_DELREADONLY` | integer | Delete read only documents. / |
| `FLAG_DELSTRUC` | integer | Delete archive entries. / |
| `FLAG_DELVERSION` | integer | Delete a document version in history / |
| `FLAG_EDITACL` | integer | Edit security settings. / |
| `FLAG_EDITACT` | integer | Edit activity projects. / |
| `FLAG_EDITCONFIG` | integer | Edit master data / |
| `FLAG_EDITDOCS` | integer | Edit documents: checkin, checkout. |
| `FLAG_EDITDUEDATE` | integer | Edit expiration date of archive entries. / |
| `FLAG_EDITMASK` | integer | Create, edit, delete storage masks. / |
| `FLAG_EDITREPL` | integer | Edit replication set assignment. / |
| `FLAG_EDITSCAN` | integer | Edit scanner settings. / |
| `FLAG_EDITSCRIPT` | integer | Create, edit, delete scripts. / |
| `FLAG_EDITSTRUCTURE` | integer | Edit archive structure: create, edit, move archive entries. |
| `FLAG_EDITSWL` | integer | Edit catchwords. / |
| `FLAG_EDITWF` | integer | Edit work flows. / |
| `FLAG_EXPORT` | integer | Export. / |
| `FLAG_HASFILEACCESS` | integer | Read document file. |
| `FLAG_IGNOREACL` | integer | Ignore access control lists. / |
| `FLAG_IMPORT` | integer | Import. / |
| `FLAG_IS_OPTION_GROUP` | integer | This flag marks an option group. / |
| `FLAG_NOLOGIN` | integer | User cannot login. This is not a right but a prohibition. / |
| `FLAG_SAPADMIN` | integer | SAP administrator. / |
| `FLAG_STARTWF` | integer | Start work flows. / |
| `FLAG_SUBADMIN` | integer | Administrator, can edit only the users and groups he created. / |
| `LUR_ALL` | integer | All access control rights. / |
| `LUR_DELETE` | integer | Access control right for deleting an archive entry. / |
| `LUR_EDIT` | integer | Access control right for beeing able to checkin a new document version. / |
| `LUR_LIST` | integer | Insert or remove an entry to the list of subentries of a Sord. / |
| `LUR_NOTHING` | integer | No access. |
| `LUR_PERMISSION` | integer | Access control right to change ACL of an object. |
| `LUR_READ` | integer | Access control right for reading an archive entry. / |
| `LUR_SPACE` | integer | Access control right to combine rights for an object contained in a workspace. |
| `LUR_WRITE` | integer | Access control right for writing an archive entry. / |

#### `AclAccessInfo`

This class contains the option for the methode getAclAccess

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string |  |
| `aclItems` | array | Note that no GUID is set for the AND groups of the ACL items. / |
| `objId` | string |  |
| `parentId` | string | Parent's ID of the current object. (Useful to get the inherited ACLs of objects which haven't any ID yet, i.e. the ones being just added in archive.) |

#### `AclAccessResult`

This class contains the result return by the method getAclAccess.

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer |  |

#### `AclItem`

Human readable ACL entry. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | Access mode. Bitset of LUR_*. |
| `andGroups` | array | Only valid for group items. Contains the IDs and names of additional groups. The user has to be a member in each of this groups to be able to access t |
| `displayName` | string | Locale specific name. Readonly. |
| `id` | integer | ID of user, group, key. / |
| `name` | string | Name of user, group, key. / |
| `type` | integer | Item type: user, group, key, ... / |

#### `AclItemC`

Types of ACL items.

| Property | Type | Description |
|----------|------|-------------|
| `ACL_EVERYONE` | array | ACL items for group "Everyone" with full access. |
| `ACL_EVERYONE_RAW` | string | String representation of an ACL entry for group "Everyone" with full access. |
| `TYPE_GROUP` | integer | ACL item for group. / |
| `TYPE_INHERIT` | integer | ACL item to inherit rights. / |
| `TYPE_KEY` | integer | ACL item for key. |
| `TYPE_OWNER` | integer | ACL item to set rights for the owner. / |
| `TYPE_PARTICIPANTS` | integer | ACL item to set rights for the workflow participants. Only used for workflows. |
| `TYPE_USER` | integer | ACL item for user. / |

#### `Action`

This class describes an entry in a document feed. There are three kinds of entries/actions in general. First, an action can be a comment added manually by a user. Second, scripts or programs can insert actions e.g. to notify about a particular state. Third, actions are generated by the system e.g. when a new document version is created. In order to add an action to a feed, call `FeedService#checkinAction(de.elo.ix.client.ClientInfo, Action, ActionZ)`. User comments can have a parent action to su

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Time stamp. Time stamp of creation or modification. |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `acl` | string | Raw ACL representation. Only valid for Actions of type {@link EActionType#UserComment} or  {@link EActionType#AutoComment}. This member is ignored if  |
| `aclItems` | array | Timestamp of this object's last export by the replication. |
| `changeCounter` | integer | Counts the number of updates. This element is only valid for {@link EActionType#UserComment}. It counts the number of updates made to the comment. |
| `createDateIso` | string | Create date. This element is the ISO formatted create date of the action. When this object is  received from {@link FeedService#checkoutAction(de.elo. |
| `docVersion` | DocVersion | Create date. This element is the ISO formatted create date of the action. When this object is received from `FeedService#checkoutAction(de.elo.ix.clie |
| `docVersionGuid` | string | GUID of the associated document version. This element is only valid for generated actions that  belong to a document version, e.g. {@link EActionType# |
| `feedGuid` | string | Feed GUID. This action belongs to the feed identified by this GUID. |
| `guid` | string | This class describes an entry in a document feed. There are three kinds of entries/actions in general. First, an action can be a comment added manuall |
| `history` | ListOfActionHistory | Time stamp. Time stamp of creation or modification. / / {{elm: TStamp String actiontstamp}} protected String TStamp; Change history of text member. Th |
| `parentGuid` | string | Parent action GUID. This element is only valid for user comments,  {@link EActionType#UserComment}. If not empty, this action is subordinated under th |
| `text` | string | Comment text. This element is only valid for {@link EActionType#UserComment}, and  {@link EActionType#AutoComment}. |
| `type` | EActionType | Action type. |
| `updateDateIso` | string | Update date. This element is only valid for {@link EActionType#UserComment}. It holds the ISO  formatted update date. When this object is received fro |
| `userGuid` | string | User GUID. The GUID of the user who has created this action. For actions of type  {@link EActionType#SordCreated}, this member holds the GUID of Sord. |
| `userId` | integer | Action type. / / {{elm: protected RawType int actiontype}} protected EActionType type; Feed GUID. This action belongs to the feed identified by this G |
| `userName` | string | User name. It is set to the name of the user given by `#userGuid`. This element is read-only. / |
| `workflow` | WFDiagram | GUID of the associated workflow. This element is valid for action types that belong to a workflow. / / {{elm: WorkflowGuid String workflowguid}} prote |
| `workflowGuid` | string | GUID of the associated workflow. This element is valid for action types that belong to a  workflow. |

#### `ActionC`

Constants for class Action.

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | ActionZ | All Action members. / |
| `mbAllMembers` | string |  |
| `mbDocVersion` | string | Constants for class Action. |
| `mbHistory` | string |  |
| `mbMin` | ActionZ | All Action members without text, docVersion and workflow. / |
| `mbWorkflow` | string |  |

#### `ActionDataC`

<p>Bit constants for members of Action</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: EL

#### `ActionHistDataC`

<p>Bit constants for members of ActionHistory</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisat

#### `ActionHistory`

@since 9.00.000.033 /

| Property | Type | Description |
|----------|------|-------------|
| `actionGuid` | string | Action GUID. Unique identifier. |
| `createDateIso` | string | Create date. This element is the ISO formatted create date of the action in the time zone of  the client application. In order to convert this value i |
| `text` | string | Comment text. This element is only valid for {@link EActionType#UserComment}, and  {@link EActionType#AutoComment}. |

#### `ActionHistoryC`

@since 9.00.000.033 /

#### `ActionZ`

Type safe element selector for class Action.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Type safe element selector for class Action. |

#### `Activity`

This class represents an activity. An activity is a task delegated to an instance outside the ELO system. It is created when the task is sent to the instance and deleted, if it is received back. An activity defines a date for expecting the response, dueDateIso . At this date, the activity appears in the task list of the initiator. If the task is finished, the initiator sets the backAt member and the activity is closed. Activities can be used to observe a document or a folder. For each modificati

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Date and time of the last update. Readonly / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `backAt` | string | Date when activity object was returned, ISO format. This value does not contain a time portion. / |
| `backMode` | string | Application defined purpose. / |
| `comment` | string | Comment for the activity. / |
| `destination` | string | Application defined purpose. / |
| `dueDateIso` | string | Date when activity object is expected to be returned. This value does not contain a time portion. / |
| `fileName` | string | Application defined purpose. / |
| `guid` | string | GUID of the activity object. / |
| `name` | string | Short name/description of the activity object. / |
| `objEntryType` | SordTypeEnum | Application defined value. |
| `objGuid` | string | GUID of the assigned archive entry. / |
| `objId` | integer | Object ID of the associated folder or document. Read-only. |
| `objType` | integer | Object type of the associated folder or document. Read-only. |
| `prio` | integer | Priority for the activity. Priority A has value 0, UserTaskPriorityC.HIGHEST Priority B has value 1. Priority C has value 2, UserTaskPriorityC#LOWEST |
| `project` | string | Project name for the activity. / |
| `receiverDisplayName` | string | Locale specific name of this reminder's receiver. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `receiverId` | integer | The ID of the recipient. / |
| `receiverName` | string | Activity was created for this user. Readonly. / |
| `revVers` | string | Revision version of the activity object. / |
| `senderDisplayName` | string | Locale specific name of this reminder's sender. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `senderId` | integer | ID of the user who created the activity. / |
| `senderName` | string | Activity was created by this user. Readonly. / |
| `sentAtIso` | string | Date the activity was sent in ISO format. This value does not contain a time portion. / |
| `sentMode` | string | Application defined purpose. / |
| `transId` | string | Application defined value. |
| `ud0` | string | First application defined value. |
| `ud1` | string | Second application defined value. |
| `ud2` | string | Third application defined value. |
| `ud3` | string | Fourth application defined value. |
| `ud4` | string | Fifth application defined value. |
| `ud5` | string | Sixth application defined value. |
| `ud6` | string | Seventh application defined value. |
| `ud7` | string | Eighth application defined value. |
| `ud8` | string | Ninth application defined value. |
| `ud9` | string | Tenth application defined value. |

#### `ActivityC`

Constants for class Activity. /

| Property | Type | Description |
|----------|------|-------------|
| `mbActivityAndObjectGuid` | ActivityZ | Typesafe element selector for members Activity.guid and Activity.objGuid. Contains ActivityC.mbGuid \| ActivityC.mbObjGuid / |
| `mbAll` | ActivityZ | Typesafe element selector for all members. Contains ActivityC.mbAllMembers / |
| `mbOnlyGuid` | ActivityZ | Constants for class Activity. / |

#### `ActivityDataC`

<p>Bit constants for members of Activity</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `ActivityOption`

This class represents an option for an activity project.

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | This class represents an option for an activity project. |
| `keywords` | array | Keywords. This array defines the values that can or must be used to set the option. If no keywords are defined, this member is null or an empty array. |
| `mandatory` | boolean | A value must be defined for this option. This option has to be checked by the client application. It is not checked by Indexserver. / |
| `name` | string | Activity option name. The name must not contain one of this characters: ! $ - + * / |
| `onlyKeyword` | boolean | The value can only be selected from the associated keyword list. This option has to be checked by the client application. It is not checked by Indexse |
| `readOnly` | boolean | The value can not be edited in the user interface. This option has to be checked by the client application. It is not checked by Indexserver. / |
| `sorted` | boolean | The value has to be displayed in an appropriate order. This option has to be checked by the client application. It is not checked by Indexserver. / |
| `stamp` | boolean | This option is a stamp field. This option has to be checked by the client application. It is not checked by Indexserver. / |

#### `ActivityOptionC`

Constants for class ActivityOption

| Property | Type | Description |
|----------|------|-------------|
| `ID_RECEIVER` | integer | Constants for class ActivityOption |
| `ID_STATUS` | integer | Option ID for receiving status. / |
| `ID_TRANS` | integer | Option ID for transmission number. / |
| `ID_TYPE` | integer | Option ID for shipping type. / |
| `ID_VALUE` | integer | Application defined IDs must be greater or equal to this value. Up to 10 application defined IDs can be defined. Their values have to be in the range  |

#### `ActivityProject`

This class represents an activity project. An activity project is a template for an activity.

| Property | Type | Description |
|----------|------|-------------|
| `lockedWhenFinished` | boolean | Activity project is locked when finished. |
| `major` | integer | Reserved. / |
| `minor` | integer | Reserved. / |
| `optValue` | string | Reserved. / |
| `options` | array | Options. |
| `project` | string | Reserved. Constructor for internal usage. |
| `protectedProject` | boolean | Activity project is protected. |

#### `ActivityProjectC`

Constants for class ActivityProject. /

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT` | string | Default project name. / |
| `NOTIFY` | string | Activity used to notify about a new document version or new sub-item. / |
| `REQUEST` | string | Activity for observing documents and folders. / |
| `SYSTEM` | string | Reserved. This name is used internally only. Do not use this name in your code. / |
| `mbOptions` | string |  |

#### `ActivityProjectDataC`

<p>Bit constants for members of ActivityProject</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organis

#### `ActivityZ`

Typed element selector for class Activity.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field. / |

#### `AdminModeC`

Constants for the administration mode.

| Property | Type | Description |
|----------|------|-------------|
| `OFF` | integer | Administration mode is inactive / |
| `ON` | integer | Administration mode is active / |
| `QUERY` | integer | Query administration mode / |

#### `AggregationOptions`

Use this class if aggregations in general (i.e. not context terms) should be retrieved by `de.elo.ix.client.IXServicePortIF#findAggregations(de.elo.ix.client.ClientInfo, de.elo.ix.client.FindInfo)`. Submit a map of AggregationQuerys to retrieve result aggregations for each of them. The resulting list `ContextTermResults#contextTerms` is provided in the same order as the submitted list contextTermQueries

| Property | Type | Description |
|----------|------|-------------|
| `aggregationQueries` | MapToAggregationQuery | Map of aggregation queries. / |

#### `AggregationOrderE`

Sort options for ElasticSearch. By default, the terms aggregation orders terms by descending document _count. The date_histogram aggregation, however, sorts buckets by default by their key ascending. Use the order parameter to specify a different sort order. We do not offer some sort order types if it is not guaranteed to produce reasonable results. E.g. Due to the way the terms aggregation gets terms from shards, sorting by ascending doc count often produces inaccurate results.

#### `AggregationQuery`

@since 21.03.000.001 /

| Property | Type | Description |
|----------|------|-------------|
| `aggregationQueryParams` | AggregationQueryParams | Contains type specific parameters (e.g. for type=TERMS parameters size, sub-aggregations, ...) / |
| `fieldType` | FieldTypeE | Defines the concrete ES field together with searchField. Options are tokenized, not tokenized, numeric, date. |
| `indexFieldKey` | string | If searchfield equals to SearchFieldE.INDEXFIELD, provide the name of the index field here. If searchField != SearchFieldE.INDEXFIELD, this value is i |
| `name` | string | Constructor with name, type and frequently used parameters searchField and fieldType. / |
| `searchField` | SearchFieldE | Provides the constant of the field to be aggregated. To aggregate an index field, set this to SearchFieldE.INDEXFIELD and provide its name in indexFie |
| `type` | AggregationTypeE |  |

#### `AggregationQueryParams`

Base class for aggregation type specific parameters given in an AggregationQuery.

#### `AggregationResult`

Return object for AggregationQueries. Consists of name and type and a type specific part. This type specific part contains actual results according to its AggregationType. Hence, in each instance of AggregationResult is only one type specific part valid. All other parts are not valid and equal to null.

| Property | Type | Description |
|----------|------|-------------|
| `dateHistogramResult` | DateHistogramAggregationResult | Type specific part: Result of an aggregation of type DATE_HISTOGRAM. |
| `filterResult` | FilterAggregationResult | Type specific part: Result of an aggregation of type FILTER. / |
| `histogramResult` | HistogramAggregationResult | Type specific part: Result of an aggregation of type HISTOGRAM. |
| `name` | string | Name of the aggregation. / |
| `rangeResult` | RangeAggregationResult | Type specific part: Result of an aggregation of type RANGE. / |
| `singleValueMetricsResult` | SingleValueMetricsAggregationResult | Type specific part: Result of an aggregation of a single-value-metrics type (MIN, MAX, SUM, AVG). / |
| `termsResult` | TermsAggregationResult | Type specific part: Result of an aggregation of type TERMS. / |
| `type` | AggregationTypeE | Type of aggregation. / |
| `valueCountResult` | ValueCountAggregationResult | Type specific part: Result of an aggregation of type VALUE_COUNT. / |

#### `AggregationTypeE`

Types of Aggregations for ESearch AggregationQuery.

#### `Alert`

Alerts are messages shown in the alert tab of ELO client.

| Property | Type | Description |
|----------|------|-------------|
| `dest` | integer |  |
| `destName` | string | User name of the recipient. |
| `extra1` | integer | Extra data 1. DB column: extra1 / |
| `extra2` | integer | Extra data 2. DB column: extra2 / |
| `memo` | string | Comment text. DB column: alertmemo / |
| `objId` | integer | Object ID. DB column: objid / |
| `source` | integer | User ID of the sender. DB column: source / |
| `sourceName` | string | User name of the sender. |
| `time` | integer | Date and time when the alert was created. DB column: alerttime / |
| `timeIso` | string | ISO date when the alert was created. Timezone is related to ClientInfo.timezone. |
| `type` | integer | Alert type. DB column: alerttype / |

#### `AlertC`

@author Imig /

| Property | Type | Description |
|----------|------|-------------|
| `DELVERT` | integer | (to be defined) / |
| `MASKALARM` | integer | (to be defined) |
| `MASKPOST` | integer | (to be defined) |
| `MASKSONST` | integer | (to be defined) |
| `MASKVERT` | integer | (to be defined) |
| `MASKWF` | integer | (to be defined) |
| `MASKWV` | integer | (to be defined) |
| `MASKWVDELMSG` | integer | (to be defined) |
| `MASKWVEDMSG` | integer | (to be defined) |
| `MESSAGE` | integer | (to be defined) / |
| `NEWVERT` | integer | (to be defined) / |
| `POSTMOVE` | integer | (to be defined) / |
| `REPLERR` | integer | Alert is a message from the replication module / |
| `WFARRIVED` | integer | (to be defined) / |
| `WFSTART` | integer | (to be defined) / |
| `WVDELETED` | integer | (to be defined) / |
| `WVEDITED` | integer | (to be defined) / |
| `WVSEEN` | integer | (to be defined) / |

#### `AlertDataC`

<p>Bit constants for members of Alert</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO

#### `AndOperator`

This operator contains a list of QueryObjects and concatenates them with an "AND" operation. This means, a document is returned if all of the QueryObjects are present in the document. For REST calls, use class QueryOperator and set the operator type in `QueryOperator#operatorType`.

| Property | Type | Description |
|----------|------|-------------|
| `queryObjectList` | ListOfQueryObject | List of QueryObjects which are and combined. / |

#### `Any`

This class is a container for one value of a serializable type.

| Property | Type | Description |
|----------|------|-------------|
| `anyArray` | array | Array of Any. |
| `booleanValue` | boolean | Boolean value. |
| `byteArray` | string | Date value. |
| `doubleValue` | number | Double value. |
| `intValue` | integer | // * Byte value. / * / * @see AnyC#TYPE_BYTE / / protected byte byteValue; / / /** / * Short value. / * / * @see AnyC#TYPE_SHORT / / protected short s |
| `longValue` | string | Long value. |
| `objectValue` | ValueClass | Object value. |
| `stringValue` | string | String value. |
| `type` | integer | This class is a container for one value of a serializable type. |

#### `AnyC`

This class defines the constants for the type member in Any.

| Property | Type | Description |
|----------|------|-------------|
| `TYPE_ARRAY_ANY` | integer |  |
| `TYPE_ARRAY_BYTE` | integer |  |
| `TYPE_BOOLEAN` | integer |  |
| `TYPE_DOUBLE` | integer |  |
| `TYPE_HANDLE` | integer |  |
| `TYPE_INT` | integer |  |
| `TYPE_LONG` | integer |  |
| `TYPE_OBJECT` | integer |  |
| `TYPE_STRING` | integer |  |

#### `ApplyForNotificationsInfo`

This class defines which notification messages the server has to send.

| Property | Type | Description |
|----------|------|-------------|
| `adminMode` | boolean | Receive `de.elo.ix.client.notify.ClientNotification#adminMode(ClientInfo, int)` / |
| `userTask` | boolean | Reserved / |

#### `ArcPath`

Archive path. /

| Property | Type | Description |
|----------|------|-------------|
| `path` | array | IdName array. Contains the identifiers and names for the archive paths. The first element is for the cabinet level. An entry does not exist for the ar |
| `pathAsString` | string | Path as string. The first charachter is the path separator. |

#### `ArchivReport`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `archivGUID` | string | / |
| `elodmdocs` | ListOfArchivValue | / |
| `objecte` | ListOfArchivValue | / |

#### `ArchivValue`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `count` | integer | / |
| `year` | integer | / |

#### `ArchiveStatistics`

Characteristic properties of the archive.

| Property | Type | Description |
|----------|------|-------------|
| `maxDocId` | integer | Last document (version) ID. / |
| `maxObjId` | integer | Last object ID. / |

#### `ArchiveStatisticsOptionsC`

An object of this class controls the function getArchiveStatistics.

| Property | Type | Description |
|----------|------|-------------|
| `mbMaxDocId` | string | Find the maximum document (version) ID / |
| `mbMaxObjId` | string | Find the maximum object ID / |

#### `ArchivingModeC`

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT` | integer |  |
| `NONE` | integer |  |
| `READONLY` | integer | Version flag: read only. / |
| `READWRITE` | integer | Version flag: no versioning. |
| `VERSION` | integer | Version flag: version controlled. / |
| `dummy` | integer |  |

#### `Array2OfString`

Type: array

#### `ArrayListOfESInstanceSettings`

Type: array

#### `ArrayListOfSearchFieldE`

Type: array

#### `ArrayListOfString`

Type: array

#### `ArrayListOfWFDiagram`

Type: array

#### `ArrayListOfWFNodeHistory`

Type: array

#### `ArrayOfAclItem`

Type: array

#### `ArrayOfAction`

Type: array

#### `ArrayOfActivityOption`

Type: array

#### `ArrayOfActivityProject`

Type: array

#### `ArrayOfAny`

Type: array

#### `ArrayOfArcPath`

Type: array

#### `ArrayOfBackupProfile`

Type: array

#### `ArrayOfColorData`

Type: array

#### `ArrayOfConfigFile`

Type: array

#### `ArrayOfContextTerm`

Type: array

#### `ArrayOfCounterInfo`

Type: array

#### `ArrayOfCryptInfo`

Type: array

#### `ArrayOfDocMaskLine`

Type: array

#### `ArrayOfDocMaskLineTemplate`

Type: array

#### `ArrayOfDocVersion`

Type: array

#### `ArrayOfDocument`

Type: array

#### `ArrayOfEditInfo`

Type: array

#### `ArrayOfEvent`

Type: array

#### `ArrayOfEventFilter`

Type: array

#### `ArrayOfFileData`

Type: array

#### `ArrayOfFindByFulltextCtrlResultItem`

Type: array

#### `ArrayOfFindByFulltextResultItem`

Type: array

#### `ArrayOfIdName`

Type: array

#### `ArrayOfIndexServerForArchive`

Type: array

#### `ArrayOfJobState`

Type: array

#### `ArrayOfKeyInfo`

Type: array

#### `ArrayOfKeyValue`

Type: array

#### `ArrayOfKeyword`

Type: array

#### `ArrayOfMapDomain`

Type: array

#### `ArrayOfMapHist`

Type: array

#### `ArrayOfMapHistItem`

Type: array

#### `ArrayOfMaskName`

Type: array

#### `ArrayOfNote`

Type: array

#### `ArrayOfNoteTemplate`

Type: array

#### `ArrayOfObjKey`

Type: array

#### `ArrayOfOcrRect`

Type: array

#### `ArrayOfOrgUnitInfo`

Type: array

#### `ArrayOfPointInfo`

Type: array

#### `ArrayOfQueryJobProtocolEvent`

Type: array

#### `ArrayOfReminder`

Type: array

#### `ArrayOfReplSetName`

Type: array

#### `ArrayOfReportErpCode`

Type: array

#### `ArrayOfReportInfo`

Type: array

#### `ArrayOfSessionInfo`

Type: array

#### `ArrayOfSord`

Type: array

#### `ArrayOfSordHist`

Type: array

#### `ArrayOfSordHistKey`

Type: array

#### `ArrayOfSordLink`

Type: array

#### `ArrayOfSordType`

Type: array

#### `ArrayOfSordZ`

Type: array

#### `ArrayOfStoreInfo`

Type: array

#### `ArrayOfString`

Type: array

#### `ArrayOfSubsInfo`

Type: array

#### `ArrayOfTranslateTerm`

Type: array

#### `ArrayOfUserInfo`

Type: array

#### `ArrayOfUserName`

Type: array

#### `ArrayOfUserNodeInfo`

Type: array

#### `ArrayOfUserTask`

Type: array

#### `ArrayOfWFCollectNode`

Type: array

#### `ArrayOfWFDiagram`

Type: array

#### `ArrayOfWFNode`

Type: array

#### `ArrayOfWFNodeAssoc`

Type: array

#### `ArrayOfWFTimeLimit`

Type: array

#### `ArrayOfWFVersion`

Type: array

#### `ArrayOfint`

Type: array

#### `Aspect`

This class defines a keywording aspect.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp of last modification. |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `deleted` | boolean | Aspect GUID. / / {{elm: Guid String guid}} protected String guid; Timestamp of last modification. / / {{elm: TStamp String tstamp}} protected String T |
| `displayName` | string | Locale specific name. Readonly. This value is the resolved `Aspect#translationKey`. / |
| `guid` | string | Aspect GUID. |
| `id` | integer | Aspect ID. For a new aspect, this value is -1. This value cannot be changed for an existing  aspect. |
| `lines` | MapToAspectLine | Translation key. Defines the `Aspect#displayName` as technical resource ID. / / {{elm: TranslationKey String translationkey}} protected String transla |
| `lockId` | integer | User ID that holds a lock on this object. If -1, the object is unlocked. |
| `lockName` | string | Aspect ID. For a new aspect, this value is -1. This value cannot be changed for an existing aspect. / / {{elm: Id int id}} protected int id; Aspect na |
| `name` | string | Aspect name. <br>  This must be a String of alpha-numeric characters between 'A' and 'Z', 'a' and 'z', '0' and  '9'.<br>  Additionally, it can contain |
| `packageName` | string | Package name of Aspect. |
| `translationKey` | string | Translation key. Defines the {@link Aspect#displayName} as technical resource ID. |

#### `AspectAssoc`

This class defines an aspect association. An AspectAssoc defines a reference to a keywording `Aspect` in `DocMask#aspectAssocs`.

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string | Access control list. |
| `aclItems` | array | Internal flags representation. |
| `aspectId` | integer | ID of the referenced aspect. |
| `cardinality` | Cardinality | Cardinality. |
| `displayName` | string | Technical aspect association name. This member must start with a character between 'A' and 'Z'. The following characters must be alpha-numeric includi |
| `extending` | string | Aspect association which will be extended. Optionally set this field to the name of an other AspectAssoc in order  to extend it. That other AspectAsso |
| `name` | string | Technical aspect association name. This member must start with a character between 'A' and 'Z'. The following characters must be alpha-numeric includi |
| `packageName` | string | Package name. It should be the GUID of the package {@link PackageData#guid} or the GUID of the package level  {@link PackageLevelData#guid}. |
| `regionInherit` | boolean | Indicates if the Sord object passes the aspect object to all sub-entries for search via iSearch, if this AspectAssoc object is contained in a region m |
| `translationKey` | string | Translation-keyword for {@link AspectAssoc#displayName}. Defines the {@link AspectAssoc#displayName} as  technical resource ID. If this value is set,  |

#### `AspectAssocC`

<p>Bit constants for members of AspectAssoc</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `AspectC`

Constants related to class Aspect .

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | AspectZ | Read or write all elements. / |
| `mbAllMembers` | string | Member bit: read or write all elements. / |
| `mbAspectLines` | string | Member bit: read or write index lines. / |
| `mbOnlyLock` | AspectZ | Only lock or unlock / |

#### `AspectDataC`

<p>Bit constants for members of Aspect</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: EL

#### `AspectInfo`

Aspect info object. Copyright: Copyright (c) 2020 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `displayName` | string | Translated name of this aspect. This value is read-only and therefore ignored when changed and checked-in. Furthermore, the Indexserver always transla |
| `guid` | string | GUID / |
| `id` | integer | Aspect ID. / |
| `name` | string | Aspect name. / |
| `packageName` | string | Package name. |
| `translationKey` | string | Translation-keyword for `AspectInfo#name`. / |

#### `AspectLine`

This class contains data for a line in a document mask, if `DocMask#dataOrganisation` = `DocMaskC#DATA_ORGANISATION_ASPECT`. AspectLines are contained in keywording `Aspect`s.

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | This line information belongs to an aspect with the ID AspectId. / / {{elm: AspectId int aspectid}} protected int aspectId; The type of the line infor |
| `allowedMaskIdsForKeywordingRelation` | ListOfInteger | Specifies the {@link DocMask#id} allowed in a {@link AspectLineC#TYPE_RELATION}. Mandatory if AspectLine is of type {@link AspectLineC#TYPE_RELATION}. |
| `aspectId` | integer | This line information belongs to an aspect with the ID AspectId. |
| `canBeFoundViaKeywordingRelation` | boolean | A script or plugin at the server can serve as the data source of a dynamic keyword list. This value represents the name of that script or plugin. If t |
| `canBeFoundViaRegion` | boolean | Maximum length of a line of type `AspectLineC#TYPE_TEXT`. |
| `comment` | string | Quickinfo text for the attribute. |
| `commentTranslationKey` | string | Translation-keyword for {@link AspectLine#comment}. |
| `defaultValue` | string | This value is assigned to the element for a new Sord object. |
| `displayComment` | string | Locale specific comment. Readonly. This value is the resolved `#commentTranslationKey`. |
| `displayName` | string | The display name of the attribute. This value is displayed in the lable before the edit field. It can be translated into reps. from the users language |
| `dynamicKeywordReference` | string | A script or plugin at the server can serve as the data source of a dynamic keyword list. This  value represents the name of that script or plugin. If  |
| `excludeFromISearch` | boolean | If true a index value will not be searchable via iSearch. Does not affect the index search. / |
| `externalData` | string | External data. Can be used to store an arbitary string. |
| `important` | boolean | Display index value next to the objects short description. This element has to be interpreted by the client application. Further it is used while gene |
| `key` | string | The attribute identifier. |
| `keywordListId` | string | Keyword List ID. |
| `maxTextLength` | integer | Maximum length of a line of type {@link AspectLineC#TYPE_TEXT}. |
| `nameTranslationKey` | string | Translation-keyword for {@link AspectLine#displayName}. |
| `notTokenized` | boolean | Defines whether a index value should be searchable as TOKENIZED or UN_TOKENIZED / |
| `postfixAsterix` | boolean | This value is assigned to the element for a new Sord object. / / {{elm: DefaultValue String linedefault}} protected String defaultValue; Translation-k |
| `prefixAsterix` | boolean | Add "*" before index value in search operation. / |
| `subType` | string | This field can be used by clients to determine a subtype of the given type. For the purpose of  properly displaying a value there are subtypes defined |
| `translate` | boolean | Translate index values into or from the users language. |
| `type` | integer | The type of the line information. <br>  This can be one of the <code>AspectLineC.TYPE_*</code> constants but none of the  <code>DocMaskLineC.TYPE_*</c |

#### `AspectLineC`

Constants for class AspectLine Copyright: Copyright (c) 2019 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `MAX_CHARS_TEXT_COLUMN_ALLOWED` | integer | Maximum length of fields of type `TYPE_TEXT`. This determines the maximum length of the column in database. The actual field length is determined by ` |
| `MAX_CHARS_TEXT_COLUMN_DEFAULT` | integer | Default length of fields of type `TYPE_TEXT`. This determines the default length of the column in database. |
| `TYPE_DOUBLE` | integer | Aspect line contains a floating point number value with 15 significant digits. To assign a value of this type to `IndexValue#doubleValue`, the String  |
| `TYPE_FIXED_POINT_NUMBER` | integer | Aspect line contains a fixed-point number (exact). The value is represented by a string in API. The string representation of the value must be convert |
| `TYPE_INTEGER` | integer | Aspect line contains a number value without fraction in the range of (-2^31) to (2^31)-1. |
| `TYPE_ISO_DATE_ONLY` | integer | Aspect line contains a date in ISO format without time digits. |
| `TYPE_ISO_DATE_TIME` | integer | Aspect line contains a date in ISO format with time digits. |
| `TYPE_OFFSET_TYPES_FOR_ASPECTS` | integer | Types above this value are supported only by newer docMasks with aspects. |
| `TYPE_RELATION` | integer | Aspect line contains a relation. A Relation consists of a `Sord#guid` which references a `Sord`. with a allowed DocMask `DocMaskDetails#keywordingRela |
| `TYPE_STATUS` | integer | Aspect line contains a text which is defined by a mandatory keyword list with a localized display value. |
| `TYPE_TEXT` | integer | Aspect line contains text information. |
| `TYPE_TIME` | integer | Aspect line contains a text with a time semantics without a date. |
| `TYPE_USER` | integer | Aspect line contains user guid information. |
| `mbAllowedMaskIdsForKeywordingRelation` | string | Member bit: allowedMaskIds / |
| `mbFlags` | string | Member bit: Line flags / |
| `mbImportant` | string |  |
| `mbPostfixAsterix` | string |  |
| `mbPrefixAsterix` | string |  |
| `mbTranslate` | string |  |
| `mbType` | string | Member bit: The type of the line information. This can be one of the DocMaskLineC.LINETYPE_* constants. / |

#### `AspectLineDataC`

<p>Bit constants for members of AspectLine</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation

#### `AspectZ`

This class encapsulates the constants of the AspectC class. Copyright: Copyright (c) 2019 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the AspectC class. / |

#### `AutoFilingOptions`

Options for function `IXServicePortIF#evalAutoFiling(ClientInfo, String, Sord, AutoFilingOptions)` /

| Property | Type | Description |
|----------|------|-------------|
| `autoFilingDefinition` | string | Auto filing index string. If this option is set, paramter maskId in `IXServicePortIF#evalAutoFiling(ClientInfo, String, Sord, AutoFilingOptions)` is i |

#### `AutoFilingResult`

Contains the archive destination returned by a call to `IXServicePortIF#evalAutoFiling(ClientInfo, String, Sord, AutoFilingOptions)`.

| Property | Type | Description |
|----------|------|-------------|
| `parentIds` | array | Destination object IDs. The first array element belongs to the main path. The other elements belong to reference paths. The element value is the objec |
| `pathsAsString` | array | Contains the archive destination returned by a call to `IXServicePortIF#evalAutoFiling(ClientInfo, String, Sord, AutoFilingOptions)`. |

#### `BStreamReference`

Type: object, Properties: streamId, url

#### `BValueClass`

Type: object

#### `BackupProfile`

This class represents settings of a ELOdm backup profile.

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | This class represents settings of a ELOdm backup profile. |
| `nbOfDocsPerLoop` | integer | Maximum number of documents per backup loop. / |
| `pathId` | integer | Storage path id / |
| `retention` | integer | Reserved / |
| `slot` | integer | Backup slot / |
| `sqlDocSelect` | string | Optional SQL command to select the documents to be stored. / |
| `writeKeywording` | boolean | Store keywording too / |

#### `BackupPurgeStatus`

This class represents the status of the ELOdm backup and purge tasks

| Property | Type | Description |
|----------|------|-------------|
| `backupStatus` | BackupStatus | This class represents the status of the ELOdm backup and purge tasks |
| `purgeStatus` | PurgeStatus | Status of the ELOdm purge task / |

#### `BackupStatus`

This class represents the status of the ELOdm backup task

| Property | Type | Description |
|----------|------|-------------|
| `errorMessage` | string | an error message, if an error occured, else an empty String / |
| `isRunning` | boolean | This class represents the status of the ELOdm backup task |
| `numberOfDocsCopied` | integer | number of copied documents since start of the backup task / |
| `secondsUntilNextCheck` | integer | waiting time in seconds until the next proccessing (when the backup profiles are traversed) / |

#### `BeginForwardWorkflowNodeInfo`

@since 9.99.009.005 /

#### `Bitset`

This class is used in the scripting API of Indexserver and provides bit operations on 64 bit integers. JavaScript does not support bit operations for 64 bit integers. The global context of the JavaScripts executed by Indexserver contain an object named Bitset which is an instance of this class. /

| Property | Type | Description |
|----------|------|-------------|
| `v` | string | Tests wether all bits are 0. |

#### `Bucket`

Represents a bucket within an AggregationResult for a bucket aggregation.

| Property | Type | Description |
|----------|------|-------------|
| `aggregations` | MapToAggregationResult | In case the bucket aggregation query has defined sub-aggregations, this Map contains the results of that sub-aggregations within this bucket. / |
| `docCount` | string | Number of documents belonging to the bucket's criteria. / |
| `from` | string | For aggregations of type RANGE and DATE_RANGE, this value is a string representation of the lower bound of this bucket. / |
| `key` | string | The bucket key identifying the bucket. / |
| `to` | string | For aggregations of type RANGE and DATE_RANGE, this value is a string representation of the upper bound of this bucket. / |
| `type` | AggregationTypeE | Type of aggregation. / |

#### `BucketKeyDateFormatE`

Date formats of the bucket key in return buckets of aggregations of type DATE_HISTOGRAM and DATE_RANGE.

#### `CalendarIntervalE`

Types of calendar intervals used for AggregationQuery of type DATE_HISTOGRAM. Note: The value NONE exists only to check if this mandatory parameter is given, since API serialization may deliver always the first enum value.

#### `Cardinality`

Aspect cardinality.

#### `ChangePasswordInfo`

Parameter object to change a user's password. All passwords in this object may (and should) be encrypted for enhanced security. To encrypt the fields, use `IXConnection#encryptPassword(String)`.

| Property | Type | Description |
|----------|------|-------------|
| `currentPassword` | string | Current password. Must be set and match the actual current password. / |
| `newPassword` | string | New password to set. Must be different to the current password. / |

#### `CheckAccessOptions`

Options for function `IXServerEvents#onCheckSordAccess(IXServerEventsContext, Sord, SordZ, int, CheckAccessOptions)` /

#### `CheckInDocMaskLineTemplateOptions`

Option class for the methode CheckInDocMaskLineTemplate

| Property | Type | Description |
|----------|------|-------------|
| `dmltZ` | DocMaskLineTemplateZ | Specifies which elements are passed to the document mask lines, which are using this template. / |
| `keepModifiedLineMembers` | boolean | Modified line members in the table masklines are kept. / |
| `onlyModifiedTemplateMembers` | boolean | Only change template members are passed to the document mask lines, which are using this template. This variable is ignored if dmltZ does not equal NU |

#### `CheckinDocOptions`

This class defines options for the API function checkinDocBegin2.

| Property | Type | Description |
|----------|------|-------------|
| `keepIds` | boolean | If true , the DocVersion to check-in will use the ID and GUID you specify. In order to only set the GUID, set the ID to 0. |

#### `CheckinIconInfo`

Object to define icons to be checked in.

| Property | Type | Description |
|----------|------|-------------|
| `icon` | Icon | Icon to be checked in. / |

#### `CheckinIconResult`

Object returned by `IXServicePortIF#checkinIcon`. It contains the identifier of the checked-in icon.

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | Contains the identifier of checked-in icon. / |

#### `CheckinOrgUnitInfo`

Objects of this class specify the selection criteria for checkinOrgUnits . Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

#### `CheckinReportInfo`

Objects of this class specify the selection criteria for checkinReport . Copyright: Copyright (c) 2014 Organisation: ELO Digital Office GmbH

#### `CheckinSordTypesInfo`

Object to define sord types to be checked in.

| Property | Type | Description |
|----------|------|-------------|
| `sordTypes` | ListOfSordType | List of sord types to checkin. / |

#### `CheckinSubstitutionsInfo`

Object to define substitutions to be checked in. Substitutions which do not have a `Substitution#guid` are new substitutions. If a `Substitution#guid` is set, the corresponding substitution is updated.

| Property | Type | Description |
|----------|------|-------------|
| `substitutions` | ListOfSubstitution | List of substitutions to be inserted/ updated / |

#### `CheckinUsersC`

Constants for the function checkinUsers . Copyright: Copyright (c) 2004 Organisation:

| Property | Type | Description |
|----------|------|-------------|
| `NEW_USER` | CheckinUsersZ | Insert a new user with the supplied user ID. Set the user's password. / |
| `NOTHING` | CheckinUsersZ | Checkin no user. Makes sense if you only want to unlock user data. / |
| `PASSWORD` | CheckinUsersZ | Updates a users password. / |
| `WRITE` | CheckinUsersZ | Updates or creates a user. / |
| `WRITE_PASSWORD` | CheckinUsersZ | Updates or creates a user and set's the users's password. / |
| `bsetNEW_USER` | string | Insert a new user with the supplied user ID. / |
| `bsetNOTHING` | string | Checkin no user. Makes sense if you only want to unlock user data. / |
| `bsetPASSWORD` | string | Updates a users password. / |
| `bsetWRITE` | string | Write without password. Create new user if user ID &lt; 0. / |

#### `CheckinUsersZ`

This class encapsulates the constants of CheckinUsersC. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from CheckinUsersC class. / |

#### `CheckoutIconInfo`

| Property | Type | Description |
|----------|------|-------------|
| `iconId` | string | Describes checkout criteria for `IXServicePortIF#checkoutIcon(ClientInfo ci, CheckoutIconInfo iconInfo, IconZ iconZ, LockZ lockZ)`. |
| `includeDeleted` | boolean | Select deleted icon. / |

#### `CheckoutIconResult`

| Property | Type | Description |
|----------|------|-------------|
| `icon` | Icon | Result of the function `IXServicePortIF#checkoutIcon(ClientInfo ci, CheckoutIconInfo iconInfo, IconZ iconZ, LockZ lockZ)`. |

#### `CheckoutIconsInfo`

| Property | Type | Description |
|----------|------|-------------|
| `iconIds` | ListOfString | List of IDs, GUIDs or names of the icons to check out. To retrieve all icons, iconsIds should be left blank. / |
| `includeDeleted` | boolean | Describes checkout criteria for `IXServicePortIF#checkoutIcons(ClientInfo ci, CheckoutIconsInfo iconsInfo, IconZ iconZ, LockZ lockZ)`. To retrieve all |

#### `CheckoutIconsResult`

| Property | Type | Description |
|----------|------|-------------|
| `icons` | ListOfIcon | Result of the function `IXServicePortIF#checkoutIcons(ClientInfo ci, CheckoutIconsInfo checkoutsInfo, IconZ iconZ, LockZ lockZ)`. |

#### `CheckoutOrgUnitInfo`

Objects of this class specify the selection criteria for `IXServicePortIF#checkoutOrgUnits(ClientInfo, CheckoutOrgUnitInfo, LockZ)` No criterias can be set yet. All OUs are returned. Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

#### `CheckoutSordPathInfo`

Type: object, Properties: inclRefPaths

#### `CheckoutSordTypesInfo`

Use this object to define which sord types should be returned by `IXServicePortIF#checkoutSordTypes2`. This class contains several lists you can use to specify which SordTypes you want to get. The elements in one list are always searched with an OR operation. If various list are provided, they are connected using OR operator. If all lists are empty, all sord types are returned.

| Property | Type | Description |
|----------|------|-------------|
| `sordTypeGuids` | ListOfString | GUIDs of the sord types to checkout. |
| `sordTypeIds` | ListOfInteger | IDs of the sord types to checkout. |
| `sordTypeNames` | ListOfString | Names of the sord types to checkout. |

#### `CheckoutSubstitutionsInfo`

This object is used to define which substitutions should be returned by `IXServicePortIF#checkoutSubstitutions`. The elements in one list are always search with an OR operation. If various list are provided, they are connected using OR (default) (set `#andOperator` to true to use AND operator)

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Search for elements of different lists with OR operator (default) or AND (set value to true) / |
| `creatorIds` | ListOfInteger | Returns all substitutions this users created. (This user is set as `Substitution#creatorId`) |
| `creatorNames` | ListOfString | Returns all substitutions this users created. (This user is set as `Substitution#creatorId`) |
| `includeSubstitutesGroups` | boolean | Include substitutions where `Substitution#substituteId` is set to the provided substitutes or any of their groups. / |
| `substituteIds` | ListOfInteger | Returns all substitutions this users substitutes. (This user is set as `Substitution#substituteId`) |
| `substituteNames` | ListOfString | Returns all substitutions this users substitutes. (This user is set as `Substitution#substituteId`) |
| `substitutionGuids` | ListOfString | GUID of the substitutions to checkout. / |
| `userIds` | ListOfInteger | Returns all substitutions of this users substitutes where this user is set as `Substitution#userId`. |
| `userNames` | ListOfString | Returns all substitutions of this users where this user is set as `Substitution#userId`. |

#### `CheckoutUsersC`

Constants to select users and groups

| Property | Type | Description |
|----------|------|-------------|
| `ALL_GROUPS` | CheckoutUsersZ | Selects all groups. Returned user data contains effective rights. |
| `ALL_GROUPS_RAW` | CheckoutUsersZ | Selects all groups. Returned user data does not contain effective rights. |
| `ALL_USERS` | CheckoutUsersZ | Selects all users. Returned user data contains effective rights. |
| `ALL_USERS_AND_GROUPS` | CheckoutUsersZ | Selects all users an all groups. Returned user data contains effective rights. |
| `ALL_USERS_AND_GROUPS_RAW` | CheckoutUsersZ | Selects all users an all groups. Returned user data does not contain effective rights. |
| `ALL_USERS_RAW` | CheckoutUsersZ | Selects all users. Returned user data does not contain effective rights. |
| `BY_IDS` | CheckoutUsersZ | Selects the user objects of the specified users. Returned user data contains effective rights. Is usable with checkoutUser. / |
| `BY_IDS_RAW` | CheckoutUsersZ | Selects the user objects of the specified users. Returned user data does not contain effective rights. Is usable with checkoutUser. / |
| `BY_NUMERIC_IDS` | CheckoutUsersZ | Selects the user objects of the specified users using the numeric user IDs. If an ID is not  defined, an exception is thrown. Returned user data conta |
| `BY_NUMERIC_IDS_RAW` | CheckoutUsersZ | Selects the user objects of the specified users using the numeric user IDs. If an ID is not  defined, an exception is thrown. Returned user data does  |
| `EXCLUDE_IDS` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#BY_IDS} Selects all users and groups except the specified users.  Returned user data contains effective rights. |
| `EXCLUDE_IDS_RAW` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#BY_IDS} Selects all users and groups except the specified users.  Returned user data does not contain effective right |
| `GROUPS_OF_MEMBER` | CheckoutUsersZ | Selects all direct groups of a user (or group). Does not look for groups recursively. Returned user data contains effective rights. / |
| `GROUPS_OF_MEMBER_RAW` | CheckoutUsersZ | Selects all direct groups of a user (or group). Does not look for groups recursively. Returned user data does not contain effective rights. / |
| `GROUPS_OF_MEMBER_RECURSIVE` | CheckoutUsersZ | Selects all direct groups of a user (or group). Walks recursively over the users groups. Returned user data contains effective rights. / |
| `GROUPS_OF_MEMBER_RECURSIVE_RAW` | CheckoutUsersZ | Selects all direct groups of a user (or group). Walks recursively over the users groups. Returned user data does not contain effective rights. / |
| `MEMBERS_OF_GROUP` | CheckoutUsersZ | Selects all members (users and groups) of the specified group. Does not look for members of member groups recursively. Returned user data contains eff |
| `MEMBERS_OF_GROUP_RAW` | CheckoutUsersZ | Selects all members (users and groups) of the specified group. Does not look for members of member groups recursively. Returned user data does not con |
| `MEMBERS_OF_GROUP_RECURSIVE` | CheckoutUsersZ | Selects all members (users and groups) of the specified group. Walks recursively over the group members and selects all members directly or indirectly |
| `MEMBERS_OF_GROUP_RECURSIVE_RAW` | CheckoutUsersZ | Selects all members (users and groups) of the specified group. Walks recursively over the group members and selects all members directly or indirectly |
| `MEMBERS_OF_ORGUNIT` | CheckoutUsersZ | Selects all members of a given Orgunit. When used in conjunction with checkoutUsers, the `OrgUnitInfo#id` is expected as input. |
| `MEMBERS_OF_PACKAGE` | CheckoutUsersZ | Selects all users and groups part of the given package- or packageLevelGuid. Returned user data does not contain effective rights. |
| `MEMBERS_OF_PACKAGE_RAW` | CheckoutUsersZ | Selects all users and groups part of the given package- or packageLevelGuid. Returned user data does not contain effective rights. |
| `NOTHING` | CheckoutUsersZ | Select no user or group. Makes sense if you only want to lock user data. Is usable with checkoutUser. / |
| `NOT_MEMBERS_OF_GROUP` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#MEMBERS_OF_GROUP}. Selects all users and groups not member of the specified group. Does not look for members of  memb |
| `NOT_MEMBERS_OF_GROUP_RAW` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#MEMBERS_OF_GROUP_RAW}. Selects all users and groups not member of the specified group. Does not look for members of   |
| `NOT_MEMBERS_OF_GROUP_RECURSIVE` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#MEMBERS_OF_GROUP_RECURSIVE} Selects all users and groups not member of the specified group. Walks recursively over th |
| `NOT_MEMBERS_OF_GROUP_RECURSIVE_RAW` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#MEMBERS_OF_GROUP_RECURSIVE_RAW} Selects all users and groups not member of the specified group. Walks recursively ove |
| `NOT_USERS_OF_SUBADMIN` | CheckoutUsersZ | Inverse of {@link CheckoutUsersC#USERS_OF_SUBADMIN} Selects all users and group not managed by the given user.  Returned user data contains effective  |
| `SESSION_USERS` | CheckoutUsersZ | Selects all active users. / |
| `SESSION_USERS_RAW` | CheckoutUsersZ | Selects all active users. Returned user data does not contain effective rights. / |
| `SUBADMINS` | CheckoutUsersZ | Selects all sub-administrators. |
| `USERS_OF_GROUP` | CheckoutUsersZ | Selects all users of the specified group. Does not look for members of member groups recursively. Returned user data contains effective rights. |
| `USERS_OF_GROUP_RAW` | CheckoutUsersZ | Selects all users of the specified group. Does not look for members of member groups recursively. Returned user data does not contain effective rights |
| `USERS_OF_GROUP_RECURSIVE` | CheckoutUsersZ | Selects all users of the specified group. Walks recursively over the group members and selects all users directly or indirectly contained in the speci |
| `USERS_OF_GROUP_RECURSIVE_RAW` | CheckoutUsersZ | Selects all users of the specified group. Walks recursively over the group members and selects all users directly or indirectly contained in the speci |
| `USERS_OF_SUBADMIN` | CheckoutUsersZ | Selects all users and group managed by the given user. |
| `USERS_OF_SUPERIOR` | CheckoutUsersZ | Selects all users and groups where `UserInfo#superiorId` is either `FindUserInfo#userIds` or any of the raw groups of `FindUserInfo#userIds`. If the f |
| `USERS_OF_SUPERIOR_OR_SUBADMIN` | CheckoutUsersZ | Combined OR-search of `#USERS_OF_SUBADMIN` and `#USERS_OF_SUPERIOR`. |
| `bsetALL_GROUPS` | string | Internal use only. / |
| `bsetALL_USERS` | string | Internal use only. / |
| `bsetALL_USERS_AND_GROUPS` | string | Internal use only. / |
| `bsetBY_IDS` | string | Internal use only. / |
| `bsetBY_NUMERIC_IDS` | string | Internal use only. |
| `bsetEFFECTIVE_RIGHTS` | string | Internal use only. / |
| `bsetEXCLUDE_IDS` | string | Internal use only. |
| `bsetGROUPS_OF_MEMBER` | string | Internal use only. / |
| `bsetGROUPS_OF_MEMBER_RECURSIVE` | string | Internal use only. / |
| `bsetMEMBERS_OF_GROUP` | string | Internal use only. / |
| `bsetMEMBERS_OF_GROUP_RECURSIVE` | string | Internal use only. / |
| `bsetMEMBERS_OF_ORGUNIT` | string | Internal use only. |
| `bsetMEMBERS_OF_PACKAGE` | string | Internal use only. |
| `bsetMY_USERS` | string | Internal use only. / |
| `bsetNOTHING` | string | Internal use only. / |
| `bsetNOT_MEMBERS_OF_GROUP` | string | Internal use only. |
| `bsetNOT_MEMBERS_OF_GROUP_RECURSIVE` | string | Internal use only. |
| `bsetNOT_USERS_OF_SUBADMIN` | string | Internal use only. |
| `bsetSELECT_MASK` | string | Internal use only. |
| `bsetSESSION_INFO` | string | Internal use only. / |
| `bsetSUBADMINS` | string | Internal use only. |
| `bsetUSERS_OF_GROUP` | string | Internal use only. / |
| `bsetUSERS_OF_GROUP_RECURSIVE` | string | Internal use only. / |
| `bsetUSERS_OF_SUBADMIN` | string | Internal use only. |
| `bsetUSERS_OF_SUPERIOR` | string | Internal use only. |
| `bsetUSERS_OF_SUPERIOR_OR_SUBADMIN` | string | Internal use only. |

#### `CheckoutUsersZ`

This class encapsulates the constants of CheckoutUsersC. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from CheckoutUsersC class. / |

#### `CheckoutWorkflowHistoryParams`

Parameter class for the method checkoutWorkflowHistory.

| Property | Type | Description |
|----------|------|-------------|
| `flowId` | string | Workflow ID or workflow GUID. / |
| `nodeId` | integer | Node ID. If node ID is 0, histories of all node are return. / |

#### `CheckoutWorkflowHistoryResult`

This class contains the results returned by the function checkoutWorkflowHistory.

| Property | Type | Description |
|----------|------|-------------|
| `nodeHistories` | MapToArrayListOfWFNodeHistory | Map of the node histories. Node ID is the key. / |

#### `CleanUpInfo`

Settings Object for MyELOService.cleanUpNotifications()

| Property | Type | Description |
|----------|------|-------------|
| `deleteImportant` | boolean | Include Notifications marked as important. / |
| `lifetimeDays` | integer | Lifetime of notifications in days. / |
| `userGuidOrID` | string | GUID or ID or Name of the User. If null, current user will be set. If GUID/ID is not the current user, admin rights are required to perform the cleanu |

#### `ClientInfo`

Contains the session ticket and the users language and country. Each Indexserver interface function, except the login, requires a ClientInfo object as parameter with a valid session ticket. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `callId` | string | Constructor |
| `country` | string | Country in ISO 3166 format. This value defines number formats (especially the decimal delimiter) used in numeric values in `Sord#objKeys`. Examples CZ |
| `language` | string | The user's language as IETF language tag. A language is specified as IETF language tag. The language part conforms to ISO 639-1. Starting with IX vers |
| `options` | integer | Internal use only. Bit 0 of this member is set for requests that are send from one Indexserver instance to another instance in load balancing scenario |
| `ticket` | string | This ClientInfo object is used by default in REST calls if the client does not provide one. EIX-2651 / |
| `timeZone` | string | The time zone for the ELO client. Can be one of the predefined time zone IDs in the Java platform or a string of format "GMT" + sign + hh + ":" + mm.  |
| `userProductClientTypes` | ListOfUserProductClientType | Constructor with |

#### `ClientInfoC`

Constants for ClientInfo. /

| Property | Type | Description |
|----------|------|-------------|
| `LANGUAGE_FROM_SESSION` | string | Used by the client. If the constant matches the value of the country field of the ClientInfo, language and country  from the ClientInfo of the existin |
| `OPTION_AVOID_EVENT_CASCADING` | integer | Can be used to check if an operation is called from a client or not (initially requested by FLOWS to avoid event recursion).  Constant has to be evalu |
| `OPTION_DO_NOT_TRANSLATE_TERMS` | integer | Do not translate terms into the language given by `ClientInfo#language`. Session option `SessionOptionsC#TRANSLATE_TERMS` is ignored. |
| `OPTION_ENABLE_CHANGE_MASK_DATA_ORGANISATION_TO_ASPECT` | integer | Can be used to allow checkin a sord with simultaneously change its mask to {@link DocMaskC#DATA_ORGANISATION_ASPECT}.<br>  This is normally forbidden  |
| `OPTION_REPLICATION_REQUEST` | integer | Replication requests are marked with this bit. / |

#### `ClientNotification`

Callback interface for server-push notifications.

#### `ColorData`

Colours for marking entries in the archive. Copyright: Copyright (c) 2003 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `RGB` | integer | RGB value encoded as a 4-byte integer. The data is stored in the following way: `[0][B][G][R] ` i.e., Highest byte: 0 (not used) 2nd highest byte: Blu |
| `RGBContrast` | integer | RGB contrast value. The color is intended to be used in dark themes instead of the RGB value. |
| `TStamp` | string | TStamp |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `deleted` | boolean | GUID |
| `displayName` | string | Timestamp of this object's last export by the replication. |
| `guid` | string | GUID |
| `hidden` | boolean | This color should not be selectable in client applications. This color is reserved as marker  for technical purposes. |
| `id` | integer | Colour number (ID). / |
| `name` | string | Colour name / |
| `nameTranslationKey` | string | Translation key. Optional identifier in the localization property files or translations stored  via {@link IXServicePortIF#checkinTranslateTerms(Clien |
| `packageName` | string | Package name of ColorData |
| `specName` | string | Unique specification for a color. ELO provides a set of standard colors with such a  specification. The ELO clients have a color palette for these sta |

#### `ColorDataC`

| Property | Type | Description |
|----------|------|-------------|
| `ALL_COLORS` | integer | Read all colors. This option can be passed to `IXServicePortIF#checkoutColors2(ClientInfo, int, LockZ)`. |
| `GUID_AZURE` | string | Color azure |
| `GUID_BLUE` | string | Color blue |
| `GUID_CYAN` | string | Color cyan |
| `GUID_FUCHSIA` | string | Color fuchsia |
| `GUID_GREEN` | string | Color green |
| `GUID_LIME` | string | Color lime |
| `GUID_MAGENTA` | string | Color magenta |
| `GUID_ORANGE` | string | Color orange |
| `GUID_PETROL` | string | Color petrol |
| `GUID_PURPLE` | string | Color purple |
| `GUID_RED` | string | Color red |
| `GUID_SYSTEM` | string | System color |
| `GUID_WINE` | string | Color wine |
| `INCLUSIVE_DELETED` | integer | Read colors inclusive logically deleted colors. This option can be passed to `IXServicePortIF#checkoutColors2(ClientInfo, int, LockZ)`. |
| `INCLUSIVE_HIDDEN` | integer | Read colors inclusive hidden colors. This option can be passed to `IXServicePortIF#checkoutColors2(ClientInfo, int, LockZ)`. |
| `SORD_COLORS` | integer | Read colors that can be assigned to Sord objects. This option can be passed to `IXServicePortIF#checkoutColors2(ClientInfo, int, LockZ)`. |
| `mbDeleted` | string |  |
| `mbHidden` | string | Hidden flag. |

#### `ColorDataInternC`

<p>Bit constants for members of ColorData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `CombineAclOptions`

This class specifies additional options for compareAcl.

| Property | Type | Description |
|----------|------|-------------|
| `lhsAclStr` | string | Left operand for ACL operation in String representation. |
| `rhsAclStr` | string | Right operand for ACL operation in String representation. |

#### `CombineAclResult`

This class contains the results returned by the function combineAcl.

| Property | Type | Description |
|----------|------|-------------|
| `compareCode` | integer | Compare result. Negative if ACL lhs is less than rhs. Positive if ACL lhs is greater than rhs. Zero if ACLs are equal. / |
| `compareIgnoreAccessCode` | integer | Compare result by ignoring the member AclItem.access. Negative if ACL lhs is less than rhs. Posiitve if ACL lhs is greater than rhs. Zero if ACLs are  |
| `difference` | array | Contains the ACL items that are in ACL lhs but not in rhs. / |
| `differenceAclStr` | string | String representation of AclItem array difference. |
| `intersection` | array | Contains the ACL items that are in both ACLs. / |
| `intersectionAclStr` | string | String representation of AclItem array intersection. |
| `inverseDifference` | array | Contains the ACL items that are in ACL rhs but not in lhs. / |
| `inverseDifferenceAclStr` | string | String representation of AclItem array inverseDifference. |
| `spaceIntersection` | array | Contains the result of the combination of a workspace ACL with another ACL. This field is set only if at least one of the ACLs contains an X-access. A |
| `spaceIntersectionStr` | string | String representation of AclItem array `#spaceIntersection`. |
| `sum` | array | Contains the sum of both ACLs. / |
| `sumAclStr` | string | String representation of AclItem array sum. |

#### `CompletionOptions`

Use this class if a completion should be retrieved by `de.elo.ix.client.IXServicePortIF#findCompletion(de.elo.ix.client.ClientInfo, de.elo.ix.client.FindInfo, int)`. Deliver text to complete in `de.elo.ix.client.esearch.ESearchParams#query`.

| Property | Type | Description |
|----------|------|-------------|
| `completionField` | QueryFilter | Defines field to retrieve completion. Submit text to get completion for by completionField.value Additionally, a query and queryOperator can be added  |
| `returnType` | FieldTypeE | Defines type (tokenized/ not tokenized) of returned values. If null `FieldTypeE#tokenized` is used as default value. / |

#### `ComputeDocumentHashInfo`

This class defines the parameters for computing a document file hash by `IXServicePortIF#computeDocumentHash(ClientInfo, ComputeDocumentHashInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `docId` | integer | Document ID. / |

#### `ComputeDocumentHashResult`

This class provides the result data computed by `IXServicePortIF#computeDocumentHash(ClientInfo, ComputeDocumentHashInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `accessDate` | string | Document last access date. / |
| `computedHash` | string | MD5 hash computed by `IXServicePortIF#computeDocumentHash(ClientInfo, ComputeDocumentHashInfo)`. / |
| `createDate` | string | Document create date. / |
| `docId` | integer | Document ID. / |
| `equalHash` | boolean | True, if `#storedHash` is equal to `#computedHash`. / |
| `storedHash` | string | MD5 has stored in DB. This value can be empty if MD5 checking is disabled in DM configuration. / |
| `updateDate` | string | Document update date. / |

#### `ConfigBatchData`

Collects configuration data to be inserted, updated, or deleted.

| Property | Type | Description |
|----------|------|-------------|
| `deletes` | ListOfLong | Records to be deleted. / |
| `inserts` | ListOfConfigRecord | Records to be inserted. / |
| `updates` | ListOfConfigRecord | Records to be updated. / |

#### `ConfigFile`

Used for accessing directories or files on the server. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `dir` | string | The path to the file. / |
| `fileData` | FileData | The content of the file. / |
| `isDirectory` | boolean | Returns true if the object is a directory, false if it is a file. / |
| `lastModifiedISO` | string | The last-modified date of the script file. This value is related to the UTC time-zone. / |
| `name` | string | The name of the file or the extension. / |
| `size` | string | File size. / |
| `uploadResult` | string | HTTP-Response returned when file is uploaded. / |
| `url` | string | Download or upload URL. / |

#### `ConfigFileC`

Constants for the ConfigFile class. These are used for accessing server directories. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `CHECKOUT` | string | Server side checkout directory. / |
| `COLD` | string | Directory for COLD background files. / |
| `ELO_SCRIPTS` | string | Directory for scripts. / |
| `INIT_DATA` | string | Directory of initialization data. / |
| `POSTBOX` | string | Directory of Intray/postbox. / |
| `TEMPLATE` | string | Old document template directory (ELO 5.0). / |
| `VIEWER_POSTBOX` | string | RESERVED / |
| `mbAll` | ConfigFileZ | Constant object for mbAllMembers. / |
| `mbAllMembers` | string | Member bit set: all members. / |
| `mbFileData` | string | Member bit: fileData / |
| `mbLastModified` | string | Member bit: lastModified / |
| `mbName` | string | Member bit: name / |
| `mbNoFileData` | ConfigFileZ | Constant object for mbAllmembers without file data. / |
| `mbSize` | string | Member bit: size / |
| `mbUrl` | string | Member bit: URL / |

#### `ConfigFileZ`

This class encapsulates the constants of ConfigFileC. /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants of the ConfigFileC class. / |

#### `ConfigInfo`

This class defines select criteria for reading configuration data.

| Property | Type | Description |
|----------|------|-------------|
| `component` | string | Component name. Filters `ConfigRecord#component` values. / |
| `groupId` | string | Entry keys. Filters `ConfigRecord#key` values. This value supports wildcards at its end. |
| `instanceId` | string | Instance ID. Filters `ConfigRecord#instanceId` values. / |
| `key` | string | Entry key. Filters `ConfigRecord#key` values. This value supports wildcards at its end. / |
| `keys` | array |  |
| `level` | integer | Priority level. Select entries with the highest priority that is lower or equal to this value. / |
| `packageName` | string | Package name or GUID. Filters `ConfigRecord#packageName` values. / |

#### `ConfigRecord`

Objects of this class represent entries for configurations related to packages.

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string | Access control in raw representation. |
| `aclItems` | ListOfAclItem | Row ID. This ID is unique over all entries. / / {{elm: Id long cfgid}} protected long id; Package name or GUID. / / {{elm: PackageName String cfgpacka |
| `component` | string | ELO module name or ID. |
| `groupId` | string | Groups related entries. |
| `id` | string | Default constructor. / |
| `instanceId` | string | Instance ID for workspace. For workspace entries, this value is assigned to the related  {@link Sord#getGuid()}. |
| `key` | string | Entry key. |
| `level` | integer | Layer level. This value defines the priority for the entry. |
| `otherLevels` | array | Access control in raw representation. / / {{elm: Acl String cfgacl}} protected String acl; Groups related entries. / / {{elm: GroupId String cfggroup} |
| `packageName` | string | Package name or GUID. |
| `value` | string | Entry value. This value can hold up to {@link ConfigRecordC#MAX_VALUE_LENGTH} characters. |

#### `ConfigRecordC`

Constants for configuration entries.

| Property | Type | Description |
|----------|------|-------------|
| `COMPONENT_FLOWS` | string | Used as `ConfigRecord#component` for flows entries. / |
| `COMPONENT_TEAMSPACES` | string | Used as `ConfigRecord#component` for teamspace entries. / |
| `COMPONENT_WORKSPACES` | string | Used as `ConfigRecord#component` for workspace entries. / |
| `MAX_VALUE_LENGTH` | integer | Maximum length of `ConfigRecord#value`. The maximum length is 1 million characters. / |
| `PACKAGE_TEAMSPACES` | string | Package name for teamspace entries as `ConfigRecord#packageName`. / |
| `PACKAGE_WORKSPACES` | string | Package name for workspace entries used as `ConfigRecord#packageName`. / |
| `mbAllMembers` | string | Member bit for `ConfigRecord#otherLevels` This is intentionally not part of `#mbAllMembers` because it causes computational overhead and is not requir |
| `mbOtherLevels` | string | Member bit for {@link ConfigRecord#otherLevels} <p>  This is intentionally not part of {@link #mbAllMembers} because it causes computational overhead  |

#### `ConfigRecordDataC`

<p>Bit constants for members of ConfigRecord</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `ConfigResult`

Return value for `ConfigService` functions.

| Property | Type | Description |
|----------|------|-------------|
| `configRecords` | MapToListOfConfigRecord | Selected records. |
| `writtenRecords` | ListOfConfigRecord | Updated or inserted records. |

#### `ConfigResultOptions`

This options control grouping of configuration entries returned by `ConfigService#checkoutConfigurations(de.elo.ix.client.ClientInfo, ConfigInfo, ConfigResultOptions)`.

| Property | Type | Description |
|----------|------|-------------|
| `exploded` | boolean | If true, entries are not merged by their `ConfigRecord#level` values. / |
| `groupingType` | GroupingType | Map the returned entries on this value type. / |

#### `ConfigResultOptionsC`

Predefined objects to be used as parameter in `ConfigService#checkoutConfigurations(de.elo.ix.client.ClientInfo, ConfigInfo, ConfigResultOptions)`.

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT` | ConfigResultOptions | Default options. / |
| `DEFAULT_EXPLODED` | ConfigResultOptions |  |

#### `ConfigService`

This interface provides functions to access configuration entries for several ELO modules and functionality. Configuration entries are used by ELO Flows, workspaces, teamspaces and the forms service for aspect metadata. The functions and data defined in this interface are not expected to be used for other purposes. The interface behavior might change in future versions and the data might be extended.

#### `ConflictHandlingE`

FIXME: add javadoc

#### `ContentStream`

This class contains information about a document related stream. Such a stream might be a document version, attachment, preview content, fulltext content or signature.

| Property | Type | Description |
|----------|------|-------------|
| `contentLength` | string | Stream content length. This member is set to the number of bytes in the stream. If the length is unknown set `ContentStreamC#CONTENT_LENGTH_UNKNOWN`.  |
| `contentType` | string | Content type (or MIME type). Either set content type or `#fileExtension` to describe the stream content. / |
| `fileExtension` | string | File extension without dot. Either set file extension or `#contentType` to describe the stream content. / |
| `headers` | MapToListOfString | Optional HTTP headers. This headers can provide additional information for streams being downloaded. E.g. supply byte range headers for parts of video |
| `responseCode` | integer | HTTP response code for streams being downloaded. This status should be set as 200 (HTTP OK) if the entire document has been processed. If `DocumentPro |
| `stream` | BStreamReference | Document related stream. / |

#### `ContentStreamC`

Constants related to `ContentStream`.

| Property | Type | Description |
|----------|------|-------------|
| `CONTENT_LENGTH_UNKNOWN` | string | Pseudo content length for streams of unknown size. / |

#### `ContextTerm`

Type: object, Properties: docNum, term

#### `ContextTermOptions`

Use this class if context terms should be retrieved by `de.elo.ix.client.IXServicePortIF#findContextTerms(de.elo.ix.client.ClientInfo, de.elo.ix.client.FindInfo, int)`. Query is submitted by `de.elo.ix.client.esearch.ESearchParams`. Submit a list of ContextTermQuerys to retrieve context terms for each of them. For every ContextTermQuerys, context terms are returned by adding all other ContextTermQuerys to the query but itself. This means, if you want have various values for one index field, use 

| Property | Type | Description |
|----------|------|-------------|
| `contextTermQueries` | ListOfContextTermQuery | List of contextTermQueries. / |

#### `ContextTermQuery`

Submit a ContextTermQuery for each ContextTerm to be retrieved. Describe the contextTerm in with filter. If a value is committed, this value is used to calculate every other ContextTerm in ContextTermOptions.contextTermQueries Specify a return type for each contextTerm: `ContextTermReturnTypeE` To exclude a value from contextTerms, use set isNegated=true. Defaults to false.

| Property | Type | Description |
|----------|------|-------------|
| `filter` | QueryFilter | Specify the field and type for which a context term should be returned. / |
| `isNegated` | boolean | To exclude a value from contextTerms, use set isNegated=true. Defaults to false. |
| `returnType` | ContextTermReturnTypeE | Specify the return type of this ContextTerm. / |

#### `ContextTermResults`

@since 10.99.999.033 /

| Property | Type | Description |
|----------|------|-------------|
| `contextTerms` | ListOfContextTerm |  |

#### `ContextTermReturnTypeE`

Specifies the return type for context terms.

#### `ControlBackupInfo`

Mode for the ELOdm backup and purge tasks

| Property | Type | Description |
|----------|------|-------------|
| `mode` | integer | Mode for the ELOdm backup and purge tasks |

#### `ControlBackupInfoC`

Constants for class ControlBackupInfo (mode for the ELOdm backup and purge tasks)

| Property | Type | Description |
|----------|------|-------------|
| `MODE_START_BACKUP` | integer | Start the backup task (if it is already running, nothing happens). If the purge task is already running, it is stopped. / |
| `MODE_START_BACKUP_PURGE` | integer | Start the backup and the purge task. If the backup task is already running, only the purge task is started. / |
| `MODE_STATUS` | integer | Constants for class ControlBackupInfo (mode for the ELOdm backup and purge tasks) |
| `MODE_STOP` | integer | Stop the backup and purge tasks / |

#### `CopyInfo`

Controls the options of de.elo.ix.IXServicePortIF.copySord(). Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `adjustAclDifference` | boolean | The permissions of the moved object are modified. The permissions inherited from the old parent are substracted and the permissions of the new parent  |
| `adjustAclIgnoreDocuments` | boolean | Recursivly adjust the permissions of the child-documents of the moved object too. |
| `adjustAclIgnoreFolders` | boolean | Recursivly adjust the permissions of the sub-folders of the moved object too. |
| `adjustAclInBackground` | boolean | Recursivly adjust the permissions of the child-elements in the background. |
| `adjustAclOverwrite` | boolean | Set the permissions of the moved object equal to the permissions of the new parent. |
| `checkRecursion` | boolean | Check for recursion. If this member is set, the function `IXServicePortIF#copySord(ClientInfo, String, String, CopyInfo, CopySordZ)` checks whether th |
| `depth` | integer | Depth up to which the structure is to be copied. THIS FUNCTION IS NOT CURRENTLY SUPPORTED! / |
| `manSortIdx` | integer | Manually determine the position. Use 0 to insert at the beginning of the child list. Use -1 to insert at the end of the child list ( this is the faste |
| `name` | string | COPY-Mode: Name of the destination archive entry. THIS FUNCTION IS NOT CURRENTLY SUPPORTED! / |
| `oldParentId` | string | Parent ID for move operation. Set this element to the old parent ID when a reference has to be moved. If an original entry has to be moved, set the ma |

#### `CopyOptions`

Structure for the options for the copy-process. Copyright: Copyright (c) 2009 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `acceptChanges` | boolean | Accept the change. Only one of the three options keepOriginalPermissions, takeTargetPermissions and acceptChanges can be true. |
| `adjustAclDifference` | boolean | The permissions of the moved objects are modified. The permissions inherited from the old parent are substracted and the permissions of the new parent |
| `copyOnlyBaseElement` | boolean | Copy only the base element. / |
| `copyOnlyWorkAttachment` | boolean | If inclAttachments and copyOnlyWorkAttachment are true, copy only the work attachments. Setting copyOnlyWorkAttachment to true when inclAttachments is |
| `copyOnlyWorkversion` | boolean | Do not copy all documents versions but only workversion |
| `copyStructuresAndDocuments` | boolean | Copy all structures with the documents. / |
| `inclAttachments` | boolean | Also copy all attachments. |
| `keepCurrentNotes` | boolean | Keep the current documentnotes. / |
| `keepOriginalOwner` | boolean | Keep the original owner of the archive element. / |
| `keepOriginalPermissions` | boolean | Keep the current permissions. Only one of the three options keepOriginalPermissions, takeTargetPermissions and acceptChanges can be true. |
| `keepReferences` | boolean | Keep references to original objects in copied parents. This member is ignored, if ProcessInfo.inclReferences=false. If this member is true or only the |
| `moveOnly` | boolean | Sets the property for moving the sord. |
| `newParentId` | integer | ParentId of the new element. / |
| `takeTargetPermissions` | boolean | Take the target permissions. Only one of the three options keepOriginalPermissions, takeTargetPermissions and acceptChanges can be true. |
| `targetName` | string | Constructor for the class "CopyOptions". / |

#### `CopyResult`

Results of a `ProcessCopyElements`-Operation.

| Property | Type | Description |
|----------|------|-------------|
| `mapGuidsSource2Copy` | MapToString | @param mapGuidsSource2Copy the mapGuidsSource2Copy to set / |
| `mapIdsSource2Copy` | MapToInteger | @param mapIdsSource2Copy the mapIdsSource2Copy to set / |

#### `CopySordC`

Constants to copy or move archive entries, or to create a logical link. These constants are used as parameters in the copySord function. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `COPY` | CopySordZ | RESERVED. Use ProcessCopyElements and processTrees to copy an archive structure. |
| `MOVE` | CopySordZ | Move the sord. Used in ix.copySord(...). / |
| `REFERENCE` | CopySordZ | Create a reference to the sord. Used in ix.copySord(...). / |
| `bsetCOPY` | string | Reserved. Use ProcessCopyElements and processTrees to copy an archive structure. |
| `bsetCOPY_WITH_ATTACHMENTS` | string | Copy archive entry with attachments (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_ATTACHMENT_VERSIONS` | string | Copy archive entry with attachment versions (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_CHILDREN` | string | Copy archive entry with children (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_DOCUMENTS` | string | Copy archive entry with documents (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_DOCUMENT_VERSIONS` | string | Copy archive entry with document versions (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_NOTES_TYPE_NORMAL` | string | Copy archive entry with notes (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_NOTES_TYPE_PERSONAL` | string | Copy archive entry with personal notes (CURRENTLY NOT SUPPORTED!). / |
| `bsetCOPY_WITH_NOTES_TYPE_STAMP` | string | Copy archive entry with stamps (CURRENTLY NOT SUPPORTED!). / |
| `bsetMOVE` | string | Move an archive entry. / |
| `bsetREFERENCE` | string | Create a logical link. / |

#### `CopySordZ`

This class encapsulates the constants of the CopySordsC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the CopySordC class. / |

#### `CountResult`

Class for the results of one count process.

| Property | Type | Description |
|----------|------|-------------|
| `attBytesCount` | string | count of the bytes of the current attachment version |
| `docAttachCount` | integer | count of the found document attachments |
| `docBytesCount` | string | count of the bytes of the current document version |
| `docCount` | integer | Constructor for the class "CountResult". / |
| `docVersionsCount` | integer | count of the documents in the version history |
| `otherAttVersBytesCount` | string | count of the bytes of other attachment versions |
| `otherAttachVersionsCount` | integer | count of the other attachment versions |
| `otherDocVersBytesCount` | string | count of the bytes of other document versions |
| `structCount` | integer | count of the found structures |

#### `CounterInfo`

This class provides counters for use by the access manager. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | Counter ID. |
| `name` | string | Name of the counter / |
| `value` | integer | The current value of the counter / |

#### `CounterInfoC`

Constants class for the CounterInfo class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `lnName` | integer | length field for Name. / |

#### `CreateSuperiorSubstitutionInfo`

Define how a superior substitution is created. A superior has the right to substitute any of its subordinates. A superior substitution has `SubstitutionSettings#superiorSubstitution` set to true.

| Property | Type | Description |
|----------|------|-------------|
| `userToSubstituteId` | integer | User to be substituted by superior. This value is ignored if `#userToSubstituteName` is set. / |
| `userToSubstituteName` | string | User to be substituted by superior. `#userToSubstituteId` is ignored if this member is set. / |

#### `CryptInfo`

This class defines an encryption set.

| Property | Type | Description |
|----------|------|-------------|
| `aesSystemInitVector` | string | @since 12.00.000.028 / |
| `aesSystemKeyInfo` | string | @since 12.00.000.028 / |
| `aesUserInitVector` | string | @since 12.00.000.028 / |
| `aesUserKeyInfo` | string | @since 12.00.000.028 / |
| `currentPwd` | string | @since 12.00.000.028 / |
| `currentSystemPwd` | string | @since 12.00.000.028 / |
| `id` | integer | Numerical ID of the encryption information. The first ID is 1. / |
| `keyInfo` | string | Only for TwoFish-Encyption! Key material. Contains the external and internal password in serialized and encrypted format. Only for internal use. This  |
| `name` | string | Name. / |
| `pwd` | string | External password used for encrypting documents. It is empty if this object was returned by checkoutCryptInfos . / |
| `systemPwd` | string | @since 12.00.000.028 / |
| `systemUserId` | string | @since 12.00.000.028 / |
| `version` | string | @since 12.00.000.028 / |

#### `CryptInfoC`

@since 12.00.000.028 /

| Property | Type | Description |
|----------|------|-------------|
| `DELETE_SYSTEM_PART` | string | Marker for the action "delete the system part from an encryption set". This is used within the field `CryptInfo#systemPwd` to indicate the above desir |
| `ENCRYPTION_VERSION_AES_V1` | string | Denotes the current internal version of encryption method used for file encryption. |
| `MAX_LENGTH_ENCRYPTIONSET_NAME` | integer | Maximum length of encryption set name. |

#### `DateHistogramAggregationQueryParams`

Defines parameters to run an aggregation of type "Date_Histogram" (a multi-bucket-aggregation). This aggregation query allows sub-aggregations.

| Property | Type | Description |
|----------|------|-------------|
| `bucketKeyDateFormat` | BucketKeyDateFormatE | Specifies the format of returned values of the key names of buckets. If this is not set, the default format is used "yyyMMddHHmmssSSS", which is the d |
| `calendarInterval` | CalendarIntervalE | Specifies the width of generated buckets measured in time units (e.g. month). Multiple quantities, such as 6months, are not supported by ES. / |
| `extendedBounds` | DateRangeValue | Sets optional extended bounds if parameter minDocCount equals to zero. Explanation: By default the histogram returns all the buckets within the range  |
| `hardBounds` | DateRangeValue | The optional hard_bounds is a counterpart of extended_bounds and can limit the range of buckets in the histogram. It is particularly useful in the cas |
| `minDocCount` | integer | If minDocCount = 0, the response will fill gaps in the histogram with empty buckets. It is possible change that and request buckets with a higher mini |
| `missingValue` | DateIsoValue | The optional missingValue parameter defines how documents that are missing a value should be treated. By default they will be ignored but it is also p |
| `offset` | DateRelative | Provides an optional offset to change the start value of each bucket by the specified positive (+) or negative offset (-) duration. For example, when  |
| `order` | AggregationOrderE | The optional order buckets are retrieved. By default, the date_histogram aggregation orders buckets by their key ascending. If this value is omitted,  |
| `subAggregations` | MapToAggregationQuery | Inner aggregations of this aggregation. / |

#### `DateHistogramAggregationResult`

The result object of a date_histogram aggregation. It consists mainly of buckets and within its inner aggregations results (sub-aggregations).

| Property | Type | Description |
|----------|------|-------------|
| `buckets` | ListOfBucket | The result buckets. / |

#### `DateIsoValue`

Class to commit a date value to iSearch via QueryFilter. Date format: YYYYMMddHHmmss If less than 14 digits are commited, it is converted to a 14 digit numer, e.g.: "2017" -> "20170101000000" If roundTo is null, a search for an exact date is executed. If roundTo is != null, DateIsoValue is converted to a Range query. From is dateIso rounded down, To is dateIso rounded up. Example dateIso=2017, roundTo=DateRoundC.YEAR results in From=01.01.2017 00:00:00, To=31.12.2017 23:59:59 The delivered date 

| Property | Type | Description |
|----------|------|-------------|
| `dateIso` | string | ISO-Date. Number of digits defines kind of timeunit: 4 digits for year. 6 digits for year with month. 8 digits for date with days. 10 digits for date  |
| `roundTo` | DateRoundE | Define to which time unit this date should be rounded. If it is != null, a range query is performed. / |

#### `DateListValue`

A list of date values which is joined by AND or OR depending on andOpeDoubleListrator . Defaults to an OR-disjunction.

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Connective of list elements (default is OR (=false) ). / |
| `valueList` | ListOfDateValue | A list of double values which is joined by AND or OR depending on andOperator . / |

#### `DateNowValue`

Class to commit a time which refers to the current time. Depending on the committed values, different searches are performed: If roundTo == null and relative == null , a search for the exact current times is performed. If roundTo != null and relative == null , a range query is performed. From is current time rounded down, To is current time rounded up, defined by roundTo . If relative != null : A range query relative to current time is performed. If the biggest relative value is negative, a rang

| Property | Type | Description |
|----------|------|-------------|
| `relative` | DateRelative | Relative time differences to now. Can be null. / |
| `roundTo` | DateRoundE | Define to which time unit this date should be rounded. If it is != null, a range query is performed. / |

#### `DateRangeValue`

Perform a range query with date values. Range queries for dates: If from contains a value for roundTo, it is always rounded down by roundTo. If to contains a value for roundTo, it is always rounded up by roundTo. If one of from or to is of type DateNowValue and contains a value for relative, it is always ignored for range queries. To perform an open range query (e.g. from now to infinite), only submit either a value for from or to

| Property | Type | Description |
|----------|------|-------------|
| `from` | DateSingleValue |  |
| `to` | DateSingleValue |  |

#### `DateRelative`

Can be used in three cases with different meanings: (1) Provides relative time differences for DateNowValues in search queries. If a range query into the past or future is performed, is defined if the biggest delivered value is positive or negative. e.g.: If year=0, month=-2 , a range query from now to two months into the past is performed. e.g.: If year=0, month=-2, days=10 , a range query from now to one month, 20 days into the past is performed. (2) Provides optional time offset for date hist

| Property | Type | Description |
|----------|------|-------------|
| `day` | integer | Time shift for days. example: -3 means three days to the past. 3 means three days to the future. / |
| `hour` | integer | Time shift for hours. example: -3 means three hours to the past. 3 means three hours to the future. / |
| `minute` | integer | Time shift for minutes. example: -3 means three minutes to the past. 3 means three minutes to the future. / |
| `month` | integer | Time shift for months. example: -3 means three months to the past. 3 means three months to the future. / |
| `year` | integer | Time shift for years. example: -3 means three years to the past. 3 means three years to the future. / |

#### `DateRoundE`

Enum for rounding DateValues. It defines if a date should be rounded to year, month, day, hour or minute.

#### `DateSingleValue`

@since 10.99.999.027 /

#### `DateValue`

@since 10.99.999.027 /

#### `DeleteActivityOptions`

This class defines options for the API function deleteActivity.

| Property | Type | Description |
|----------|------|-------------|
| `deleteFinally` | boolean | This class defines options for the API function deleteActivity. |

#### `DeleteConfigInfo`

Describe what to delete in `ConfigService#deleteConfiguration2(de.elo.ix.client.ClientInfo, DeleteConfigInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `level` | integer | Layer level. This value defines the priority for the entry. If level is 0, all levels of the given `#packageName` are deleted. / |
| `packageName` | string | Package GUID. Delete all configuration entries related to this package. / |

#### `DeleteIconInfo`

| Property | Type | Description |
|----------|------|-------------|
| `iconId` | string | Describes delete criteria for `IXServicePortIF#deleteIcon(ClientInfo ci, DeleteIconInfo iconInfo, LockZ unlockZ)`. |

#### `DeleteOptions`

This class contains options for deleting archive entries using the `IXServicePortIF#deleteSord(ClientInfo, String, String, LockZ, DeleteOptions)` function. /

| Property | Type | Description |
|----------|------|-------------|
| `deleteCertainDocumentVersionsOnly` | boolean | Delete physically certain document versions of the objects. In order to delete physically certain document versions, first mark document versions as d |
| `deleteDocumentVersionsOnly` | boolean | Delete the document versions of the objects but keep keywording information. In order to delete only the document versions, call deleteSord on an mayb |
| `deleteExpiredFolders` | boolean | Delete only expired folders and documents. Only expired empty folders can be deleted. Only supported in function `IXServicePortIF#cleanupStart(ClientI |
| `deleteExpiredOnly` | boolean | Delete only expired objects. Only supported in function `IXServicePortIF#cleanupStart(ClientInfo, DeleteOptions)`. This option can be combined with `# |
| `deleteFinally` | boolean | deleteFinally=true causes the objects to be removed physically. When used together with cleanupStart , this option is always true. Exception: see `#de |
| `deleteResidueFree` | boolean | Delete all references to the objects in the database. This includes reporting, replication control information, fulltext, etc. This option is ignroed, |
| `folderMustBeEmpty` | boolean | Delete a folder only if it is empty. Set this member to true, if deleteSord should delete only empty folders. If the parameters to deleteSord specify  |
| `maxIDate` | string | maxIDate ist the ISO representation of the local date used to mark the upper limit for deleting. / |
| `maxTStamp` | string | Delete objects modified last time before this date. Only supported in function cleanupStart . If deleteFinally is true and this member is set, ony tho |

#### `DeleteOrgUnitInfo`

Objects of this class specify the selection criteria for deleteOrgUnits . OU IDs or names can be set or both. Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `ids` | array | OU identifiers / |
| `names` | array |  |

#### `DeleteSubstitutionsInfo`

Define which substitutions should be deleted.

| Property | Type | Description |
|----------|------|-------------|
| `substitutionGuids` | ListOfString | List of substitution GUIDs to delete / |

#### `DocHistory`

Document version data, e. g. document version ID and GUID, version comment, MD5 hash of document file. Internal use only. /

| Property | Type | Description |
|----------|------|-------------|
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `comment` | string | The user can enter a comment that describes the version. DB column: histcomment / |
| `createDate` | integer | The version is created at this date. The value is an ELO date format. DB column: createdate / |
| `deleteDate` | integer | The version is deleted at this date. The value is an ELO date format. The value is zero, if  isDeleted() returns false. |
| `docId` | integer | Document version ID. DB column: documentid / |
| `docMD5` | string | The MD5 hash of the document file. DB column: docmd5 / |
| `flags` | integer | MFG_BURNIN DB column: docflags / |
| `guid` | string | GUID of the document version. DB column: docguid / |
| `language` | string | Language of the document content. This value is estimated by ELO Textreader when the document is sent for fulltext extraction.  See {@link TranslateTe |
| `nbOfValidSignatures` | integer | Number of valid signatures. |
| `objId` | integer | Document version belongs to this object. DB column: objectid / |
| `sigId` | integer | Document signature ID. DB column: docsignature / |
| `status` | integer | Deleted versions have Status=1. DB column: docstatus / |
| `tStamp` | string | The last update time of the version in ISO format (with dots). DB column: doctstamp / |
| `type` | integer | The type of this DocHistory makes the difference between attachments and document versions. |
| `user` | integer | The user who inserts the version into the archive. DB column: userid / |
| `version` | string | The version number (like 1.0) of the document version. DB column: histversion / |

#### `DocHistoryC`

<p>Bit constants for members of DocHistory</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation

#### `DocInfoDM`

Document information table of DM. For performance reason directly read by IX Copyright: Copyright (c) 2003 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `createDateIso` | string | Create date ISO. DB column: createdate / |
| `encrSet` | integer | Encryption set. |
| `ext` | string | File extension DB column: ext / |
| `extOrig` | string | Original file extension for encrypted documents |
| `fclip` | string | reserved DB column: fclip / |
| `ftExt` | string | Fulltext file extension. |
| `fulltextContentSize` | integer | Fulltext content file size. Since the fulltext content file is usually stored in UTF-8  encoding, the file size might be different from the number of  |
| `fulltextContentTStamp` | string | Fulltext content timestamp |
| `guid` | string | Document GUID. DB column: docguid / |
| `id` | integer | Document version ID. DB column: docid / |
| `lastAccessIso` | string | Last access date ISO. DB column: lastaccess / |
| `lastUpdateIso` | string | Last update date ISO. DB column: lastupdate / |
| `md5` | string | MD5 hash. DB column: md5 / |
| `owner` | integer | User ID. DB column: owner / |
| `pathId` | integer | Storage path ID DB column: pathid / |
| `pathId2` | integer | reserved DB column: pathid2 / |
| `previewExt` | string | Preview file extension. |
| `previewExtOrig` | string | Original preview file extension for encrypted previews. |
| `previewSize` | integer | Encryption set. |
| `previewSizeL` | string | Size of preview file. Is 0, if there is no preview file assigned. Is -1, if preview creation  has failed. |
| `relFilePath` | string | Relative file path |
| `size` | integer | File size. DB column: docsize |
| `sizeL` | string | Document file size. |
| `sizeOrig` | integer | Original file extension for encrypted documents |
| `sizeOrigL` | string | Original file extension for encrypted documents |

#### `DocInfoDMC`

<p>Bit constants for members of DocInfoDM</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `DocMask`

Contains the data for a storage mask. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `DAcl` | string | New objects are created with these ACL permission settings. / |
| `DKind` | integer | The marker color ID for new objects created with this mask. / |
| `DPath` | integer | Document storage path name where the documents of this mask should be stored. / |
| `TStamp` | string | Last update time of the storage mask data. / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `acl` | string | Access control for the mask line / |
| `aclItems` | array | Note that no GUID is set for the AND groups of the ACL items. / |
| `aspectAssocs` | MapToAspectAssoc | Keywording aspect associations. These are the effective aspect associations inluding locally defined associations and inherited associations. Only val |
| `barcode` | string | Barcode string. / |
| `dataOrganisation` | integer | This member specifies how the index values are stored in database. |
| `deleted` | boolean | Deleted status. |
| `deletionDeadline` | string | Deletion deadline for new objects. |
| `details` | DocMaskDetails | Detailed properties for the DocMask object. / |
| `docAclItems` | array | These access control items are the initial values for new documents inserted with this mask. / |
| `flowId` | integer | The ID of a workflow that is started if a new object with this mask is created. If the SessionOption START_DOCMASK_WORKFLOWS is set, the Indexserver s |
| `flowId2` | integer | The ID of a workflow that is to be started if a new version of an associated document is checked in. If the SessionOption START_DOCMASK_WORKFLOWS is s |
| `groupLicenseKeys` | ListOfString | Group license keys of this mask (without license keys of its parent masks). |
| `guid` | string | GUID |
| `id` | integer | Storage mask ID. / |
| `index` | string | This control string provides a way of storing new storage mask objects automatically in a particular archive path. / |
| `inheritFromMasks` | ListOfDocMaskInherit | GUID |
| `lifetime` | string | New objects are valid for this length of time. / |
| `lines` | array | Array of index value definitions. Only valid for `#dataOrganisation` = `DocMaskC#DATA_ORGANISATION_OBJKEYS` or `DocMaskC#DATA_ORGANISATION_TABLE`. |
| `localAspectAssocs` | MapToAspectAssoc | Keywording aspect associations which are defined locally in this mask. Only valid for `#dataOrganisation` = `DocMaskC#DATA_ORGANISATION_ASPECT`. |
| `localGroupLicenseKeys` | ListOfString | Group license keys of this mask (without license keys of its parent masks). |
| `lockId` | integer | User ID of the user that has locked the storage mask. If -1, no lock is held. / |
| `lockName` | string | Name of the user that has locked th storage mask. Read-only, ignored in checkinDocMask. |
| `maskIdsForChildEntries` | ListOfInteger | Child entries in the archive hierarchy should only use this keywording forms. If this element  is null or empty, child entries can use any keywording  |
| `name` | string | Storage mask name. It can be translated into reps. from the users language: set SessionOptionsC.TRANSLATE_TERM . |
| `nameTranslationKey` | string | Translation-keyword for {@link DocMask#name}. |
| `packageName` | string | Package name of DocMask |
| `sordType` | integer | Prepare this type for a new Sord object. <p>  If this value is 0, the Sord type is {@link SordC#LBT_DOCUMENT} for a new document. For a new  folder, t |
| `text` | string | Tab captions. List of tab captions separated by pipe char \|. / |
| `textTranslationKey` | string | Translation-keyword for {@link DocMask#text}. |
| `transitiveChildren` | ListOfInteger | Deletion deadline for new objects. |

#### `DocMaskC`

Constants related to class `DocMask`. /

| Property | Type | Description |
|----------|------|-------------|
| `DATA_ORGANISATION_ASPECT` | integer | Keywording form is based on aspects. |
| `DATA_ORGANISATION_OBJKEYS` | integer | Store index values as key-value-pairs in the objkeys table. |
| `DATA_ORGANISATION_TABLE` | integer | Store index values in columns of a dedicated table. |
| `GUID_BASIC` | string | Predefined GUID for keywording form "Freie Eingabe". |
| `GUID_CONTACT` | string | @deprecated |
| `GUID_ELOSCRIPTS` | string | Predefined GUID for the keywording form used for scripts. |
| `GUID_EMAIL` | string | Predefined GUID for keywording form "EMail". |
| `GUID_FOLDER` | string | Predefined GUID for the keywording form used for folders by default. |
| `GUID_MS_SHAREPOINT_DOCUMENT` | string | Prefefined GUID for a keywording form for MS Sharepoint documents. |
| `GUID_SEARCH` | string | Predefined GUID for the keywording form used to search entries regardless of their storage mask. |
| `GUID_STRUCTURE_ELEMENT` | string | @deprecated Use GUID_FOLDER / |
| `GUID_USER_FOLDER` | string | Predefined GUID for the keywording form used by user folders. |
| `MAX_GROUP_LICENSE_KEYS_PER_MASK` | integer | Maximum number of local group license keys that can be associated to a mask. Note that the mask can get more associated group license keys via its par |
| `MAX_MASK_IDS_FOR_CHILD_ENTRIES` | integer | Maximum number of keywording form IDs for `DocMask#maskIdsForChildEntries`. |
| `lnAcl` | integer | ACL length |
| `mbAcl` | string | Member bit: ACL / |
| `mbAclItems` | string | Member bit: use the ACL items in the member DocMask.aclItems and DocMask.docAclItems for reading and writing. / |
| `mbAll` | DocMaskZ | Read or write all elements. / |
| `mbAllMembers` | string | Member bit: read or write all elements. / |
| `mbAspectAssocs` | string | Member bit for `DocMask#aspectAssocs`. |
| `mbDeleted` | string |  |
| `mbDeletionDeadline` | string | Member bit for `DocMask#deletionDeadline`. |
| `mbDetails` | string |  |
| `mbDocAclItems` | string |  |
| `mbGroupLicenseKeys` | string | Group license keys of this mask. |
| `mbInheritFromMasks` | string | Member bit for `DocMask#inheritFromMasks`. |
| `mbLines` | string |  |
| `mbMaskLines` | string | Member bit: read or write index lines. / |
| `mbOnlyLock` | DocMaskZ | Only lock or unlock |
| `mbSortOrderNotArchivingMode` | string | Member bit: this bit should be set if the Mask is to be used for structure elements and not for documents. The effect is that the member DocMask.detai |
| `mbTransitiveChildren` | string | Member bit for `DocMask#transitiveChildren`. |

#### `DocMaskDataC`

<p>Bit constants for members of DocMask</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `DocMaskDetails`

This class contains a member of a `DocMask` object. /

| Property | Type | Description |
|----------|------|-------------|
| `archivingMode` | integer | Archiving mode. Sort order and archiving mode share the same database column. If the mask is used for documents, set sortOrder=SordOrderC.NONE . ELO 7 |
| `createIndexPath` | boolean | If DocMask.index is defined, this option effects that the resulting archieve path is created, if it does not exist. |
| `createIndexReferencesPaths` | boolean | If DocMask.index is defined including reference paths, this option effects that the resulting reference paths are created, if they do not exist. |
| `documentContainer` | boolean | Folders indexed with this mask get the flag `SordDetails#documentContainer` set accordingly. |
| `documentMask` | boolean | Mask can be used to edit indexing information of a document. / |
| `enabledByParent` | boolean | Usage depends on the keywording form of the parent entry. This keywording form should only be used for a Sord, if the keywording form of the parent So |
| `encryptionSet` | integer | Encryption set number. / |
| `folderMask` | boolean | Mask can be used to edit indexing information of a folder |
| `fulltext` | boolean | Document is or should be containted in the fultext database. / |
| `inheritAclDisabled` | boolean | Do not inherit permissions from parent Sords. |
| `keywordingRelationAllowed` | boolean | Mask can be referenced from a DocMaskLine of type `DocMaskLineC#TYPE_RELATION`. If this mask has a data organisation `DocMaskC#DATA_ORGANISATION_ASPEC |
| `region` | boolean | Sords of this mask, in case they are a folder, establish a region within the repository tree. This flag is only valid for masks of data organisation.  |
| `releaseDocument` | boolean | Documents using this mask may be used as release notes |
| `searchMask` | boolean | Mask can be used to search for indexing information. / |
| `sortOrder` | integer | Sort order of child entries. Sort order and archiving mode share the same database column. If the mask is used for folders, set archivingMode=Archivin |
| `translateSordName` | boolean | If true translate the sord's short description into or from the user language. |

#### `DocMaskInherit`

This class describes how a keywording form inherits from another keywording form.

| Property | Type | Description |
|----------|------|-------------|
| `parentMaskId` | integer |  |

#### `DocMaskInheritC`

<p>Bit constants for members of DocMaskInherit</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisa

#### `DocMaskLine`

This class contains data for a line in the document mask. /

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | Internal acl. |
| `acl` | string | Access control for mask line. / |
| `aclItems` | array | Specifies the `DocMask#id` allowed in a `DocMaskLineC#TYPE_RELATION`. Mandatory if DocMaskLine is of type `DocMaskLineC#TYPE_RELATION`. Only Sords wit |
| `allowedMaskIdsForKeywordingRelation` | ListOfInteger | Specifies the {@link DocMask#id} allowed in a {@link DocMaskLineC#TYPE_RELATION}. Mandatory if DocMaskLine is of type {@link DocMaskLineC#TYPE_RELATIO |
| `canEdit` | boolean | Determines whether the index line can be modified. Read-only. / |
| `comment` | string | Quickinfo text for the attribute. / |
| `commentTranslationKey` | string | Translation-keyword for {@link DocMaskLine#comment}. |
| `defaultValue` | string | This value is assigned to the ObjKey.data element for a new Sord object. |
| `disableWordWheel` | boolean | Disable word wheel. Clients should not provide a function to list all existing values for this index vlaue. The Indexserver does not set or test this  |
| `editCol` | integer | Column position of edit control / |
| `editRow` | integer | Row postion of edit control / |
| `editWidth` | integer | With of edit control / |
| `excludeFromISearch` | boolean | If true a index value will not be searchable via iSearch. Does not affect the index search. |
| `externalData` | string | External data. Can be used to store an arbitary string. |
| `hidden` | boolean | This value should not be displayed to the user. / |
| `id` | integer | The ID of the line information. / |
| `important` | boolean | External data. Can be used to store an arbitary string. |
| `inherit` | boolean | This value is assigned to the ObjKey.data element for a new Sord object. |
| `inheritFromParent` | boolean | Do not inherit the parent's value. |
| `key` | string | The attribute group name. This member corresponds to ObjKey.name . |
| `labelCol` | integer | Column position of label control / |
| `labelRow` | integer | Row position of label control / |
| `maskId` | integer | This line information belongs to a storage mask with the ID MaskId. / |
| `max` | integer | The maximum value of this attribute. / |
| `min` | integer | The minimum value of this attribute. / |
| `name` | string | The name of the attribute. This value is displayed in the lable before the edit field. It can be translated into reps. from the users language: set Se |
| `nameTranslationKey` | string | Translation-keyword for {@link DocMaskLine#name}. |
| `nextTab` | boolean | Creates a new tab in the keywording dialogue. / |
| `notTokenized` | boolean | Defines whether a index value should be searchable as TOKENIZED or UN_TOKENIZED |
| `onlyBuzzwords` | boolean | The index line can only contain buzzwords. / |
| `postfixAsterix` | boolean | Add "*" after index value in search operation. / |
| `prefixAsterix` | boolean | Add "*" before index value in search operation. / |
| `readOnly` | boolean | This value should not be edited in a user interface (convention). Scripts are allowed to edit the value. / |
| `required` | boolean | RegEx to validate user input for entry. |
| `serverScriptName` | string | A script or plugin at the server can serve as the data source of a dynamic keyword list. This  value represents the name of that script or plugin. If  |
| `tabIndex` | integer | This value represents the number of the tab, this line has to appear on. The first tab's index  value is 0. It is on the client's hand to set valid va |
| `tabOrder` | integer | Tabulator order of edit control / |
| `translate` | boolean | Translate index values into or from the users language. |
| `type` | integer | The type of the line information. This can be one of the DocMaskLineC.TYPE_* constants. |
| `validateExpression` | string | RegEx to validate user input for entry. |
| `valueArray` | boolean | Translation-keyword for `DocMaskLine#name`. |
| `version` | boolean | Display index value in version information dialog when checking in a document. This element has to be interpreted by the client application. Indexserv |

#### `DocMaskLineC`

Constants for class `DocMaskLine`. /

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT` | integer | Default ist text / |
| `DOCKEY_VSL` | integer | Index line ID to store informations used by "Versendemappe". / |
| `DOCNAME_VSL` | string | Index line name to store informations used by "Versendemappe". / |
| `ID_FILENAME` | integer | Index line ID of original file name |
| `ID_LINK` | integer | Index line ID of links. Sord.linksGoOut and Sord.linksComeIn provide a more convinient way to access links. Links can be added and removed with the fu |
| `ID_MAINSCALE` | integer | Internally used by JavaClient. |
| `ID_PERSONALDATA_DELETEAT` | integer | Index line used to specify a delete date for personal data. |
| `ID_PERSONALDATA_UID` | integer | Index line used to mark a folder or document as personal data record. |
| `KEY_EMAIL_BCC` | string | Index line key for mail BCC addresses. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_CC` | string | Index line key for mail CC addresses. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_CONVERSATIONID` | string | Index line key for a mail's internal conversation ID. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_ENTRYID` | string | Index line key for an internal mail ID. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_FROM` | string | Index line key for mail sender address. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_POSTBOXPATH` | string | Index line key for mailbox path. Use this constant as value for `DocMaskLine#key`. |
| `KEY_EMAIL_TO` | string | Index line key for mail receiver addresses. Use this constant as value for `DocMaskLine#key`. |
| `MAX_ID_DOCMASK_LINE` | integer | This constant defines a limit for `ObjKey#id` values. The following table defines which `ObjKey#id` values are allowed. ObjKey.id Comment 0 ... MAX_ID |
| `MAX_ID_HIDDEN_VALUE` | integer |  |
| `MAX_ID_RESERVED` | integer | Maximum ID for reserved keywording field |
| `MAX_ID_VALUE_ARRAY` | integer | This constant defines a limit for ObjKey.id values. |
| `MIN_ID_HIDDEN_VALUE` | integer |  |
| `MIN_ID_RESERVED` | integer | Minimum ID for reserved keywording field |
| `NAME_FILENAME` | string | Index line name of original file name |
| `NAME_LINK` | string | Index line name of links. |
| `NAME_MAINSCALE` | string | Internally used by JavaClient. |
| `NAME_PERSONALDATA_DELETEAT` | string | Index line used to specify a delete date for personal data. The Value has to be in ISO 8601 format without separators and time section. Example value  |
| `NAME_PERSONALDATA_UID` | string | Index line used to mark a folder or document as personal data record. Values should uniquely identify the person that belongs to the object. This inde |
| `SECONDARYTYPES` | integer | EIX-2820: This constant defines secondary-types for CMIS. |
| `TYPE_AZ` | integer | Index line contains a reference number ("Aktenzeichen"). / |
| `TYPE_DATE` | integer | Index line contains a date. / |
| `TYPE_DOUBLE` | integer | Index line contains a floating point number value with 15 significant digits. This type can only be used for keywording forms with `DocMaskC#DATA_ORGA |
| `TYPE_DUMMY` | integer | Index line contains a dummy entry which should not be displayed. |
| `TYPE_FLOAT` | integer | Index line contains a floating point number value with 7 significant digits. This type can only be used for keywording forms with `DocMaskC#DATA_ORGAN |
| `TYPE_INTEGER` | integer | Index line contains a number value without fraction in the range of (-2^31) to (2^31)-1. This type can only be used for keywording forms with `DocMask |
| `TYPE_ISO_DATE` | integer | Index line contains a date in ISO format. / |
| `TYPE_LIST` | integer | Index line contains a list entry. / |
| `TYPE_LONG` | integer | Index line contains a number value without fraction in the range of (-2^63) to (2^63)-1. This type can only be used for keywording forms with `DocMask |
| `TYPE_NUMBER` | integer | Index line contains a number. The number is internally stored as a string value without any padding. Thus it is not possible to search over an interva |
| `TYPE_NUMBER_F0` | integer | Index line contains a number value with an arbitrary number of fraction digits. The value is internally stored with a padding of &amp; (positive numbe |
| `TYPE_NUMBER_F1` | integer | Index line contains a number value with one digit after the decimal point. |
| `TYPE_NUMBER_F2` | integer | Index line contains a number value with one digit after the decimal point. |
| `TYPE_NUMBER_F4` | integer | Index line contains a number value of with four digits after the decimal point. |
| `TYPE_NUMBER_F6` | integer | Index line contains a number value with six digits after the decimal point. |
| `TYPE_RELATION` | integer | Index line contains a relation. A Relation consists of a `Sord#guid` which references a `Sord`. with a allowed DocMask `DocMaskDetails#keywordingRelat |
| `TYPE_TEXT` | integer | Index line contains text information. / |
| `TYPE_THES` | integer | Thesaurus / |
| `TYPE_USER` | integer | Index line contains a user name. / |
| `_TYPE_TYPE_ID` | integer | Used to check wether a correct constant is used. / |
| `lnAcl` | integer | ACL length |
| `mbAcl` | string | Member bit: ACL / |
| `mbAclItems` | string |  |
| `mbAllowedMaskIdsForKeywordingRelation` | string | Member bit: allowedMaskIds |
| `mbFlags` | string | Member bit: Line flags / |
| `mbHidden` | string |  |
| `mbImportant` | string |  |
| `mbNextTab` | string |  |
| `mbOnlyBuzzwords` | string |  |
| `mbPostfixAsterix` | string |  |
| `mbPrefixAsterix` | string |  |
| `mbReadOnly` | string |  |
| `mbTabOrder` | string |  |
| `mbTranslate` | string |  |
| `mbType` | string | Member bit: The type of the line information. This can be one of the DocMaskLineC.LINETYPE_* constants. / |
| `mbVersion` | string |  |

#### `DocMaskLineDataC`

<p>Bit constants for members of DocMaskLine</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `DocMaskLineTemplate`

This class contains data for a document mask line template.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Last update time of the storage template data. / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. / |
| `acl` | string | Access control for mask line. / |
| `aclItems` | array | Specifies the `DocMask#id` allowed in a `DocMaskLineC#TYPE_RELATION`. Mandatory if DocMaskLine is of type `DocMaskLineC#TYPE_RELATION`. Only Sords wit |
| `allowedMaskIdsForKeywordingRelation` | ListOfInteger | Specifies the {@link DocMask#id} allowed in a {@link DocMaskLineC#TYPE_RELATION}. Mandatory if DocMaskLine is of type {@link DocMaskLineC#TYPE_RELATIO |
| `comment` | string | Quickinfo text for the attribute. / |
| `commentTranslationKey` | string | Translation-keyword for `DocMaskLine#comment`. / |
| `defaultValue` | string | This value is assigned to the ObjKey.data element for a new Sord object. / |
| `disableWordWheel` | boolean | Disable word wheel. Clients should not provide a function to list all existing values for this index vlaue. The Indexserver does not set or test this  |
| `excludeFromISearch` | boolean | If true a index value will not be searchable via iSearch. Does not affect the index search. |
| `externalData` | string | External data. Can be used to store an arbitary string. / |
| `guid` | string | GUID. |
| `hidden` | boolean | This value should not be displayed to the user. / |
| `id` | integer | The ID of the line information. / |
| `important` | boolean | Display index value next to the objects short description. This element has to be interpreted by the client application. Indexserver ignores this valu |
| `inherit` | boolean | Inherit this keywording field to subordinated entries. This option is used to make sure, that all entries in an archive sub-tree have the same value f |
| `inheritFromParent` | boolean | Do not inherit the parent's value. |
| `key` | string | The attribute group name. This member corresponds to ObjKey.name . |
| `lockId` | integer | User ID of the user that has locked the mask line template. If -1, no lock is held. / |
| `lockName` | string | Name of the user that has locked the mask line template. Read-only, ignored in checkinDocMaskLineTemplate. / |
| `max` | integer | The maximum value of this attribute. / |
| `min` | integer | The minimum value of this attribute. / |
| `name` | string | The name of the attribute. This value is displayed in the lable before the edit field. It can be translated into reps. from the users language: set Se |
| `nameTranslationKey` | string | Translation-keyword for `DocMaskLine#name`. / |
| `notTokenized` | boolean | Defines whether a index value should be searchable as TOKENIZED or UN_TOKENIZED / |
| `onlyBuzzwords` | boolean | The index line can only contain buzzwords. / |
| `postfixAsterix` | boolean | Add "*" after index value in search operation. / |
| `prefixAsterix` | boolean | Add "*" before index value in search operation. / |
| `readOnly` | boolean | This value should not be edited in a user interface (convention). Scripts are allowed to edit the value. / |
| `required` | boolean | RegEx to validate user input for entry. |
| `serverScriptName` | string | A script at the server can serve as the data source of a dynamic keyword list. This value represents the name of that script. If the value is not empt |
| `translate` | boolean | Translate index values into or from the users language. |
| `type` | integer | The type of the line information. This can be one of the DocMaskLineC.TYPE_* constants. |
| `validateExpression` | string | RegEx to validate user input for entry. |
| `version` | boolean | Display index value in version information dialog when checking in a document. This element has to be interpreted by the client application. Indexserv |

#### `DocMaskLineTemplateC`

Constants related to class DocMaskLineTemplate .

| Property | Type | Description |
|----------|------|-------------|
| `lnAcl` | integer | ACL length |
| `mbAcl` | string | Member bit: ACL / |
| `mbAclItems` | string |  |
| `mbAll` | DocMaskLineTemplateZ | Read or write all elements. / |
| `mbAllowedMaskIdsForKeywordingRelation` | string | Member bit: allowedMaskIds |
| `mbFlags` | string | Member bit: Line flags / |
| `mbHidden` | string |  |
| `mbImportant` | string |  |
| `mbOnlyBuzzwords` | string |  |
| `mbOnlyLock` | DocMaskLineTemplateZ | Only lock or unlock / |
| `mbPostfixAsterix` | string |  |
| `mbPrefixAsterix` | string |  |
| `mbReadOnly` | string |  |
| `mbTranslate` | string |  |
| `mbType` | string | Member bit: The type of the line information. This can be one of the DocMaskLineC.LINETYPE_* constants. / |
| `mbVersion` | string |  |

#### `DocMaskLineTemplateDataC`

<p>Bit constants for members of DocMaskLineTemplate</p> <p>Copyright: Copyright (c) 2003</p>  <p>Org

#### `DocMaskLineTemplateZ`

This class encapsulates the constants of the DocMaskLineTemplateC class.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string |  |

#### `DocMaskZ`

This class encapsulates the constants of the DocMaskC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the DocMaskC class. / |

#### `DocVersion`

Description: This class describes a document version, a document preview or a signature. Copyright: Copyright (c) 2002 Organisation: ELO DIgital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `accessDateIso` | string | Last access date. ClientInfo determines the Timezone. Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `comment` | string | Version comment Applies to document version. Is undefined for signature, preview and fulltextContent. / |
| `contentType` | string | Content-Type (MIME-Type). |
| `createDateIso` | string | Create date. ClientInfo determines the Timezone. Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `deleteDateIso` | string | Delete date. ClientInfo determines the Timezone. Is undefined if isDeleted() returns false. |
| `deleted` | boolean | Indicates whether the version is logically deleted. Applies to document version. Is undefined for signature, preview and fulltextContent. / |
| `encryptionSet` | integer | ID of the encryption set. It's password is used to encrypt or decrypt the document. It a new document or version should be checked in, this member mus |
| `ext` | string | Document file extension (without ".") Applies to document version, signature and preview. Is readonly for fulltextContent. This value has precedence b |
| `fileData` | FileData | Document, preview or fulltextContent file content. If checkoutDoc is called with option mbSordDocSmallContent and the requested document (version) is  |
| `fulltextContent` | DocVersion | This object provides the content of the fulltext database for the document version. The information is read-only and only available for DocVersion obj |
| `guid` | string | Document GUID. Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `id` | integer | Document ID Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `language` | string | Language of the document content. This value is estimated by ELO Textreader when the document is sent for fulltext extraction. See `TranslateTermC#DEF |
| `md5` | string | MD5 hash of the documet file. Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `milestone` | boolean | Indicates whether the version is marked as a milestone version. Applies to document version. Is undefined for signature and preview and fulltextConten |
| `nbOfValidSignatures` | integer | Number of valid signatures. This member holds the count of valid signatures in the signature file. It is only valid for a DocVersion object that repre |
| `ownerId` | integer | The owners user ID. Applies to document version. Is undefined for signature and preview and fulltextContent. / |
| `ownerName` | string | The owners user name. This value is read only (ignored in checkinDoc...). Applies to document version. Is undefined for signature and preview and full |
| `pathId` | integer | Storage path ID Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `pathId2` | integer | (to be defined) Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `physPath` | string | Physical path Applies to document version and signature. Is undefined for preview and fulltextContent. Set SordC.mbPhysPath or EditInfoC.mbPhysPath in |
| `preview` | DocVersion | Document preview Applies to document version. Is null for signature and preview and fulltextContent. |
| `previewUrl` | string | @deprecated / |
| `relativeFilePath` | string | Relative file path for external file. This member specifies the location of the file relative to a custom path. If `#pathId` does not refer a custom p |
| `sig` | DocVersion | Document signature Applies to document version. Is null for signature and preview and fulltextContent. / |
| `size` | string | File size. / |
| `tStamp` | string | Document timestamp Applies to document version and signature. Is undefined for preview. (Is available for fulltextContent) The format is JJJJ.MM.DD.hh |
| `tStampSync` | string | Timestamp of this object's ACLs last export by the replication. |
| `updateDateIso` | string | Last update date. ClientInfo determines the Timezone. Applies to document version and signature. Is undefined for preview and fulltextContent. / |
| `uploadResult` | string | Result from the ELODM if the document was uploaded. Applies to document version, signature, preview and fulltextContent. / |
| `url` | string | URL to up-/download Applies to document version, signature,preview and fulltextContent. / |
| `version` | string | Version number Applies to document version. Is undefined for signature, preview and fulltextContent. / |
| `workVersion` | boolean | Indicates whether the version is the current work version. Applies to document version. Is undefined for signature, preview and fulltextContent. / |

#### `DocVersionC`

| Property | Type | Description |
|----------|------|-------------|
| `FLAG_MILESTONE` | integer | Document versions marked with this flag cannot be deleted. / |
| `TYPE_ATTACHMENT` | integer | @since 9.99.009.001 / |
| `TYPE_DOCVERSION` | integer | @since 9.99.009.001 / |
| `UPLOAD_RESULT_ERROR` | string | This value should be set in DocVersion.uploadResult, if preview creation fails. |
| `URL_PARAM_CREATE_DATE` | string | URL parameter create date. Used to set the create date of the file. ISO date in UTC timezone. Example: String writeUrl = docVersion.url + "&amp;" + UR |
| `URL_PARAM_LAST_ACCESS` | string | URL parameter last access date. Used to set the last access time of the file. ISO date in UTC timezone. Example: String writeUrl = docVersion.url + "& |
| `URL_PARAM_LAST_UPDATE` | string | URL parameter last write date. Used to set the last write time of the file. ISO date in UTC timezone. Example: String writeUrl = docVersion.url + "&am |
| `URL_PARAM_LENGTH` | string | URL parameter length. Used to read length bytes from a file. Do not read more bytes than the legnth of the file. Example: String readUrl = docVersion. |
| `URL_PARAM_OFFSET` | string | URL parameter offset. Used to read a file at a particular offset. Do not position offset after the length of the file. Example: String readUrl = docVe |
| `lnComment` | integer | Length of version comment. / |
| `lnExt` | integer | Length of file extension. / |
| `lnVersion` | integer | Length of version number (like 1.0). / |

#### `Document`

Document object with identifier and version arrays for the document and attachments. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `atts` | array | Attachment versions for the document. / |
| `docs` | array | Versions of the document. / |
| `objId` | string | Object ID for the document. / |

#### `DocumentEvents`

This interface can be implemented by a plugin to modify document related streams on upload or download.

#### `DocumentOptions`

Use this class to search for documents by `de.elo.ix.client.IXServicePortIF#findFirstSords(de.elo.ix.client.ClientInfo, de.elo.ix.client.FindInfo, int, de.elo.ix.client.SordZ)` and `de.elo.ix.client.IXServicePortIF#findNextSords(de.elo.ix.client.ClientInfo, String, int, int, de.elo.ix.client.SordZ)`. Deliver query by `de.elo.ix.client.esearch.ESearchParams`.

| Property | Type | Description |
|----------|------|-------------|
| `currentFolderId` | integer | Provide this ID to restrict search on current folder. / |
| `highlightedText` | boolean | Return highlighted result text for each sord. Highlighted text is retrieved from fulltext and surrounded by b-tags. Defaults to false. / |
| `relevance` | boolean | Calculate relevance for each sord. Defaults to false. / |
| `resultField` | boolean | Return fields in which search terms are found for each sord. Defaults to false. / |
| `sort` | ESearchOrderE | Results are ordered by this parameter. |

#### `DocumentProcessor`

This interface is can be implemented in a plugin to modify document content when it is uploaded or downloaded.

#### `Domain`

This class defines how to connect to a domain controller, login a user and find her groups.

| Property | Type | Description |
|----------|------|-------------|
| `AD_ATTRIBUTE_MAIL` | string | LDAP attribute ID that specifies the mail address of a given user. |
| `AD_ATTRIBUTE_MANAGER` | string | AD attribute ID -manager- that specifies the superior of an ELO user. |
| `AD_ATTRIBUTE_MEMBER_OF` | string | LDAP attribute ID that specifies the group list of a given user or group. |
| `AD_SAM_ACCOUNT_NAME` | string | LDAP attribute ID for sAMAccountName. |
| `AD_USER_PRINCIPAL_NAME` | string | LDAP attribute ID for userPrincipalName. |
| `DEFAULT_ATTRIBUTES` | array | Default attributes to read. |
| `DEFAULT_ENVIRONMENT` | Array2OfString | Default properties for LDAP connection via Java. |
| `FILTER_GROUPS` | string | Filter expression used to find groups of a given user. |
| `FILTER_PERSON` | string | Filter expression used to find a person by her/his sAMAccountName. |
| `FILTER_PERSON_MAIL` | string | Filter expression used to find a person by her mail address. |
| `FILTER_PERSON_USER_PRINCIPAL_NAME` | string | Filter expression used to find a person by her/his userPrinicpalName. |
| `attributeForUserPropOS` | string | LDAP attribute to be used as OS name for `UserInfoC#PROP_NAME_OS`. This value is either `#AD_SAM_ACCOUNT_NAME` or `#AD_USER_PRINCIPAL_NAME`. If set as |
| `attributeNameMail` | string | Name of attribute that contains the user's mail address. Defaults to "mail". / |
| `attributeNameMemberOf` | string | Name of attribute that contains the user's groups. Defaults to "memberOf". / |
| `attributeSuperior` | string | Attribute to determine the superior of an ELO user. Set this attribute ID e.g. to `#AD_ATTRIBUTE_MANAGER` to assign the superior of a user on login. T |
| `attributesToRead` | SetOfString | Read this LDAP attributes into ldapProperties of UserInfo. The attributes `#getAttributeNameMail()` and `#getAttributeNameMemberOf()` are always read  |
| `connectionTimeoutSeconds` | integer | Timeout limit when connecting to a LDAP server. / |
| `defaultUserName` | string | Optional user name to connect to the LDAP servers. This account must have the permission to list the group associations of all users. It does not need |
| `defaultUserPasswordEncr` | string | Optional encrypted user password to connect to the LDAP servers. This password can also be set in plain text. It is automatically encrypted when store |
| `domainPrefix` | string | Domain prefix. The login name of the user is prefixed by this value to build the user property `UserInfoC#PROP_NAME_OS`. When using this prefix, users |
| `groupSearchDNList` | ListOfString | Search paths to find groups. If empty, only those groups are assigned to the user in ELO the user is a direct member of in LDAP. If not empty, the use |
| `initialContextEnvironment` | MapToString | Additional properties to build the login environment. Example: initialContextEnvironment.put(Context.SECURITY_AUTHENTICATION, "DIGEST-MD5"); / |
| `maxGroupNesting` | integer | Groups are collected recursively up to this depth. A value of 0 means no depth limit. This value is ignored, if `#groupSearchDNList` is empty. / |
| `name` | string | Domain name. E.g. ELO.LOCAL / |
| `nameFormatter` | string | Format string to build a unique ELO account name from LDAP attributes. LDAP attributes have to be enclosed in $. Examples: 1. $cn$, $department$ ; 2.  |
| `parentOfNewUser` | string | Assign this user as parent for a new ELO user. ID, GUID or name of existing ELO user or group that is assigned as UserInfo#parent when a new ELO user  |
| `personSearchDNList` | ListOfString | Search paths to find persons. Only users that are found in one of this DN can login to ELO. E.g. "cn=users,dc=elotest2,dc=local". / |
| `requiredGroup` | string | Users must be member of this LDAP group. Optional, short LDAP group name (not a DN) the user must be a member of in order to login. The membership in  |
| `searchFilterForGroups` | string | Name of attribute that contains the user's groups. Defaults to "(&amp;(objectCategory=group)(member={0}))" / |
| `searchFilterForMail` | string | Search filter for mail address. Defaults to "(&amp;(objectclass=person)(mail={0}))" / |
| `searchFilterForPerson` | string | Search filter for person. Defaults to "(&amp;(objectclass=person)(sAMAccountName={0}))" / |
| `searchTimeLimitSeconds` | integer | Search for groups can least up to this number of seconds. / |
| `servers` | ListOfServer | List of LDAP servers of the domain. / |

#### `DoubleListValue`

A list of double values which is joined by AND or OR depending on andOperator . Defaults to an OR-disjunction.

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Connective of list elements (default is OR (=false) ). / |
| `valueList` | ListOfDoubleValue | A list of double values which is joined by AND or OR depending on andOperator . / |

#### `DoubleRangeValue`

Class to commit a range filter of double values or specify a range aggregation. To perform an open range query (e.g. from now to infinite), only submit either a value for from or to To perform a range aggregation, submit both from/to or at least from or to for each requested bucket (e.g. [from 3.14 to 6.28] or [from 3.14 to infinite]). Note that this aggregation includes the "from"-value and excludes the "to"-value for each range.

| Property | Type | Description |
|----------|------|-------------|
| `from` | DoubleSingleValue |  |
| `to` | DoubleSingleValue |  |

#### `DoubleSingleValue`

@since 10.99.999.023 /

| Property | Type | Description |
|----------|------|-------------|
| `value` | number | double value / |

#### `DoubleValue`

Class to commit a numeric double value to iSearch via QueryFilter.

#### `EActionType`

Types of document feed entries.

#### `ESInfoObj`

Note: For internal use only. Might change in the near future.

| Property | Type | Description |
|----------|------|-------------|
| `STATUS_GREEN` | integer |  |
| `STATUS_RED` | integer |  |
| `STATUS_YELLOW` | integer |  |
| `arhiveStatus` | integer |  |
| `connectionCount` | integer |  |
| `documentCount` | integer |  |
| `installedPlugins` | ListOfString |  |
| `installedVersion` | string |  |
| `langsWithDocCount` | ListOfString |  |
| `lastUpdate` | string |  |
| `nodeList` | ListOfESNodeObj |  |
| `thesaurusLangs` | ListOfString |  |
| `thesaurusStatus` | integer |  |

#### `ESInstanceSettings`

Class to read and write settings of Elasticsearch.

| Property | Type | Description |
|----------|------|-------------|
| `additionalIndex` | EsSettingsProperty | Set to true if this IX should generate a separate index (e.g. second system for test purposes  or scheduled reindex) |
| `allowLeadingWildcards` | EsSettingsProperty | Allow leading wildcard for search queries. Defaults to false. Setting it to true might result  in very poor search perfomance. |
| `archiveLang` | string | Archive language. <p>  <i>Immutable.</i>  </p> |
| `clusterName` | EsSettingsProperty | Elasticsearch cluster name. |
| `completion` | EsSettingsProperty | Query "auto completion" on search |
| `configuredLangs` | EsSettingsProperty | Configured languages (without archive language), separated by comma |
| `continueReindexOnFailure` | EsSettingsProperty | Define if reindex process should be continued or interrupted on failure. |
| `correction` | EsSettingsProperty | Query "corrections" on search |
| `feedAnalyzer` | EsSettingsProperty | Define if feed should use archive language, one of the configured languages or try to determine the language based on content. |
| `germanAnalyzer` | EsSettingsProperty | Option to define a analyzer for German language without decomposition (to speed up analysis process, but results in worse search results). Default: em |
| `hosts` | EsSettingsProperty | Elasticsearch host address. |
| `indexName` | EsSettingsProperty | Elasticsearch index name |
| `indexingDisabled` | EsSettingsProperty | Define if this IX instance should be used to run reindex and updater thread. Can only be set  instance specific. |
| `indexingOfMetadataFieldsViaKeywordingRelationEnabled` | EsSettingsProperty | EIX-1567: Erlaubt das Indizieren von markierten Indexfeldern von Sords, die über Felder vom Typ RELATION referenziert werden. Die markierten Felder de |
| `instanceName` | string |  |
| `maxAmountOfReferencesInErrorFolder` | EsSettingsProperty | Maximum number of references created in Reindex error folder during reindex process |
| `maxFulltextLength` | EsSettingsProperty | Define the maximun length for fulltext documents indexed by iSearch. If not set or set to &lt;=  0, complete documents are indexed. |
| `maxObjsPerReindexInterval` | EsSettingsProperty | Maximum number of objects to be processed in one time unit of updater. Default: 1.000. Set to  -1 if nothing should be changed. |
| `maxObjsPerUpdateInterval` | EsSettingsProperty | Maximum number of objects selected by reindexer. Default: 10. 000 Set to -1 if nothing should be  changed. |
| `maxSearchResults` | EsSettingsProperty | Define how many results should be returned with findFirstSords and findNextSords (in total!) by iSearch. Defaults to 10000. |
| `maxTokenLength` | EsSettingsProperty | Maximum length of tokens in elastic search. Defaults to 300, max 10922. Set to -1 if nothing  should be changed. |
| `nbOfAllowedLangs` | integer | Define if this IX instance should be used to run reindex and updater thread. Can only be set instance specific. / EsSettingsProperty indexingDisabled; |
| `nodeName` | EsSettingsProperty | Elasticsearch node name |
| `numberOfShards` | EsSettingsProperty | Number of shards per index in Elasticsearch. Default: 1. |
| `numberOfShardsByMaskId` | EsSettingsProperty | Define the nuber of shards for individual masks. Use a higher number of (e.g. 3) for masks with  many objects. Masks which are not defined with this s |
| `reindexFromObjId` | EsSettingsProperty | Reindex processes object IDs >= this one. Set to -1 to delete, everything >= 0 is written to db  (if lower than reindexToObjId) Always needs to send r |
| `reindexStarted` | string | Reindex started at this time. Format: yyyyMMddHHmmss Timezone: JVM default. |
| `reindexToObjId` | EsSettingsProperty | Reindex processes object IDs &lt;= this one. Set to -1 to delete, everything &gt;= 0 is written  to db (if greater than reindexFromObjId) Always needs |
| `searchAnalyzer` | EsSettingsProperty | Define a special analyzer to use during search. Please make sure the defined analyzer exists. Remove or set to "default" to disable. |
| `skipNonAsciiStepsOnFallback` | EsSettingsProperty | Determines if we should skip some analyzer steps when we use the fallback analyzer. The skipped  steps are trimming non-ascii chars from the analyzed  |
| `synonyms` | EsSettingsProperty | Query synonyms on search |
| `updaterFromTs` | EsSettingsProperty | Process documents newer than this date. Format: yyyyMMddHHmmss Timezone: JVM default. |
| `updaterInterval` | EsSettingsProperty | How often should the updater run? Interval in seconds |
| `updaterNextStart` | EsSettingsProperty | Next start of updater. Format: yyyyMMddHHmmss. Timezone: JVM default. |
| `useSsl` | boolean | Use SSL encryption. |

#### `ESNodeObj`

Note: For internal use only. Might change in the near future.

| Property | Type | Description |
|----------|------|-------------|
| `Status` | string |  |
| `discSpaceUsage` | string |  |
| `ip` | string |  |
| `port` | integer |  |

#### `ESSettingsObj`

checkoutEsSettings returns the current IX instance name, a list of all available IX instances as well as one EsInstanceSettings object for every IX instance of the archive and one for the setting "_ALL". If there is no entry for a setting in the database, the default value is returned as value. checkinEsSettings writes entries for every EsInstanceSettings to the database: If a EsSettingsProperty member is null, nothing is written or deleted. To delete a setting, the EsSettingsProperty member mus

| Property | Type | Description |
|----------|------|-------------|
| `allInstanceNames` | ArrayListOfString | List of all instance names |
| `instanceName` | string | Name of this IX instance |
| `instanceSettings` | ArrayListOfESInstanceSettings | List of instance settings. Contains settings (as in database) for instance _ALL and every IX  instance. |

#### `ESStatusObj`

Calling checkoutEsStatus returns this object to inform about the current status of connection to Elasticsearch and running processes.

| Property | Type | Description |
|----------|------|-------------|
| `esConnection` | boolean | Is this IX connected to the Elasticsearch server. |
| `lastExceptionReindexer` | string | Last exception of reindexer of this IX |
| `lastExceptionUpdater` | string | Last exception of updater of this IX |
| `runningReindexers` | MapToString | List of all IXs with an active reindex process. It returns the IX ID and its progress percent. |
| `runningUpdaters` | MapToString | List of all IXs with an active updater process. It returns the IX ID and its progress percent. |

#### `ESearchOptions`

Class for various iSearch options.

#### `ESearchOrderE`

Sort options for ElasticSearch.

#### `ESearchParams`

Parameters for iSearch.

| Property | Type | Description |
|----------|------|-------------|
| `inclDeleted` | integer | Define if deleted sords should be included: 0: exclude deleted sords (default). 1: include deleted sords. 2: only deleted sords. / |
| `query` | string | Query String. Note: Do not escaped any characters, this is done by IX. A Power Search is enabled if query starts with = . In this case, nothing is esc |
| `queryOperator` | QueryOperator | The QueryOperator is a combination of various QueryFilters to specify in which fields (e.g. index field, sord title, ...) |
| `searchIn` | string | Select which Information should be searched. Example for multiple selection to search in title and fulltext: searchIn = SearchObjectC.TITLE \| SearchO |

#### `ESearchParamsC`

Constants for searchIn selector. Example for multiple selection to search in title and fulltext: searchIn = SearchObjectC.TITLE | SearchObjectC.FULLTEXT

| Property | Type | Description |
|----------|------|-------------|
| `EXTRA_TEXT` | string | Search in EXTRA_TEXT / |
| `FEED` | string | Search in FEED / |
| `FULLTEXT` | string | Search in FULLTEXT / |
| `INDEX_FIELDS` | string | Search in INDEX_FIELDS / |
| `TITLE` | string | Search in title / |
| `VERSION` | string | Search in latest VERSION / |

#### `EditInfo`

Contains data to edit the indexing information. Therfore it provides storage mask names, storage path names, marker names, document template names, replication set names, document version information, etc. /

| Property | Type | Description |
|----------|------|-------------|
| `aspectInfos` | ListOfAspectInfo | Aspect infos containing id, name, guid, translationKey of aspects. |
| `docTemplates` | array | Document template names (Template files for new documents). / |
| `document` | Document | Document or attachment information. / |
| `keywords` | array | Root keywords. Each item of this array contains the first item of the following keyword lists for documents, keyword[.].id is one of: KeywordC.KWID_ST |
| `markerNames` | array | Marker names (Colours). / |
| `mask` | DocMask | Document mask data of the mask selected in sord . / |
| `maskNames` | array | Storage mask names. / |
| `notes` | array | Notes. / |
| `pathNames` | array | Storage path names. / |
| `replNames` | array | Replication set names. / |
| `sord` | Sord | Indexing information. / |
| `sordTypes` | array | Sord types (labels, icons, extensions corresponding to Sord.type). / |

#### `EditInfoC`

Constants to read data for editing the indexing information of an archive entry

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | EditInfoZ | All members without mbSmallDocumentContent |
| `mbAllMembers` | string | All members: indexing information + basic data + document + attachment + signature |
| `mbAllMembersLazy` | string | As `#mbAllMembers` but provides `EditInfo#mask`, `EditInfo#sordTypes` and `EditInfo#keywords` for lazy loading. |
| `mbAspectInfos` | string | Aspect infos. |
| `mbAttachment` | EditInfoZ | Attachment version(s), no index information / |
| `mbAttachmentMembers` | string | Information to download the attachment of the archive entry. / |
| `mbBasicData` | EditInfoZ | Arrays of mask, marker, repl, path names / |
| `mbDocTemplates` | string | RESERVED. Document templates. / |
| `mbDocument` | EditInfoZ | Document version(s) and signature, no index information / |
| `mbDocumentMembers` | string | Information to download the document of the archive entry. / |
| `mbKeywordMembers` | string | Return keywords in checkoutSord and checkoutDoc. / |
| `mbMarkerNames` | string | Marker names (colors). / |
| `mbMask` | string | Complete data of the mask of the specified object. / |
| `mbMaskNames` | string | Mask names. / |
| `mbNoteMembers` | string | Return notes in checkoutSord and checkoutDoc. / |
| `mbNotes` | EditInfoZ | Return only notes. / |
| `mbOnlyId` | EditInfoZ | Read only Sord ID and GUID. / |
| `mbOnlyLock` | EditInfoZ | Lock or unlock object, do not read or write any data. / |
| `mbPathNames` | string | Path names. / |
| `mbPhysPath` | string | Return the physical path of the document in checkoutDoc. This requires a request to Document Mangager. / |
| `mbPreviewMembers` | string | Return document preview in checkoutDoc |
| `mbReplNames` | string | Names of all replication sets. / |
| `mbSignatureMembers` | string | Information to download the signature of the archive entry. / |
| `mbSord` | EditInfoZ | Sord object with all members. |
| `mbSordContentStream` | EditInfoZ | Sord object with all members, work version can be read from an InputStream. File content is supplied in `Sord#docVersion`, `FileData#stream`. |
| `mbSordDoc` | EditInfoZ | Sord object with SordC.mbAll, document versions, signatures. / |
| `mbSordDocAtt` | EditInfoZ | Sord object with SordC.mbAll, document versions, attachment versions, signatures. / |
| `mbSordDocAttContentStream` | EditInfoZ | Sord object with SordC.mbAll, document versions, attachment versions, signatures. File contents are supplied in `FileData#stream`. |
| `mbSordDocSmallContent` | EditInfoZ | Includes mbDocumentMembers, mbSignatureMembers, SordC.mbCheckout / |
| `mbSordLean` | EditInfoZ | Sord object with lean members. |
| `mbSordNotes` | EditInfoZ | Return all Sord members and notes. / |
| `mbSordPreviewSmallContent` | EditInfoZ | Includes mbDocumentMembers\|mbSignatureMembers, SordC.mbCheckoutPreview / |
| `mbSordTypesJPG` | string | List of Sord types (labels, icons, extensions corresponding to Sord.type). Icon images are returned in JPEG format. / |

#### `EditInfoEswOptions`

Options for reading or writing of esw-files. /

| Property | Type | Description |
|----------|------|-------------|
| `reserved` | integer | Constructor for the class "EditInfoEswOptions". / |

#### `EditInfoZ`

This class encapsulates the constants of the EditInfoC class. EditInfo also returns a Sord object and a SordZ member is included to control the Sord data returned. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the EditInfoC class. / |
| `sordZ` | SordZ | SordZ object to control the SordC elements returned. / |

#### `EloDmOpt`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | DB column: optno / |
| `instanceName` | string | DB column: instance |
| `remark` | string | DB column: remark / |
| `value` | string | DB column: optval / |

#### `EloDmOptC`

Internal class /

| Property | Type | Description |
|----------|------|-------------|
| `INSTANCE_ALL` | string | Instance name for options related to all ELOdm instances. |

#### `EloDmOptDataC`

<p>Bit constants for members of EloDmOpt</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `EloFtOpt`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | DB column: optid / |
| `remark` | string | DB column: remark / |
| `value` | string | DB column: optval / |

#### `EloFtOptC`

Internal class. /

#### `EloFtOptDataC`

<p>Bit constants for members of EloFtOpt</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `EloIxOpt`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `ixId` | string | DB column: ixid / |
| `name` | string | DB column: optname / |
| `value` | string | DB column: optval / |

#### `EloIxOptC`

Type: object

#### `EloIxOptDataC`

<p>Bit constants for members of EloIxOpt</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `EloIxOpt_old`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `optNo` | integer | DB column: optno / |
| `optVal` | string | DB column: optval / |
| `remark` | string | DB column: remark / |

#### `EloIxOpt_oldC`

<p>Bit constants for members of EloIxOpt_old</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `EsSettingsProperty`

Properties of ESInstanceSettings

| Property | Type | Description |
|----------|------|-------------|
| `defaultValue` | string | Default value of property. |
| `possibleValues` | ArrayListOfString | List of all possible values. If empty, there are no specified possible values. |
| `value` | string | Value of property as set in database. If empty, default value is used. |

#### `EulaAcceptInfo`

| Property | Type | Description |
|----------|------|-------------|
| `changePasswordInfo` | ChangePasswordInfo | Parameter object for `IXServicePortIF#acceptEula(ClientInfo, EulaAcceptInfo)`. |
| `eulaFile` | FileData | `FileData` object for uploading the EULA file to accept. This field must not be null . The Indexserver expects the client to use `FileData#stream` for |

#### `EulaAcceptResult`

Return object for `IXServicePortIF#acceptEula(ClientInfo, EulaAcceptInfo)`. Currently not used.

#### `Event`

This class represents an event used by the event bus API functions.

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string | Access control list. An empty ACL means here, that the event is dispatched to everyone. |
| `any` | Any | Event payload data as Any object. / |
| `busId` | string | Bus-ID / |
| `data` | string | Event payload data as byte array. / |
| `id` | string | Event ID. If the sender awaits a response to this event, it should set a random number in id . The receiver should use the same number in the response |
| `param1` | string | Value depends on event type. Event filters check this value. |
| `param2` | string | Value depends on event type. Event filters check this value. |
| `senderId` | string | User ID of event sender. Might be used for other IDs in future too. Read-only. / |
| `type` | string | Event type. Event filters check this value. This must be one of the predefined event types or an application defined type with a larger value than Eve |

#### `EventBusC`

Constants related to the event bus API.

| Property | Type | Description |
|----------|------|-------------|
| `BUSID_BROADCAST` | string | Broadcast bus ID. The EventBusC.BUSID_BROADCAST refers to a public communication channel that can used by all applications and users. Any user can sen |
| `BUSID_MAX_SYSTEM` | string | Reserved. / |
| `BUSID_USER` | string | User related bus ID. For each user, an event bus exists with the bus ID EventBusC.BUSID_USER + user-ID. Any user can send events to this bus but only  |
| `EVENT_FULLTEXT_INDEXING_STATUS_UPDATE` | string | Notify about status change in fulltext indexing. |
| `EVENT_OCR_REQUEST` | string | OCR Request Event. OCR Worker Processes listen to this event and process OCR on the supplied image data. In order to listen for this event, the sessio |
| `EVENT_OCR_RESULT` | string | OCR Finished Event. OCR Worker Process sends this event if the OCR processing is finished. The client application initiates a OCR request by calling A |
| `EVENT_TYPE_CHAT` | string | Chat event type. Events of this type contain chat text. / |
| `EVENT_TYPE_CLOSE_CHAT` | string | Close chat event type. An event of this type is sent to notify the subscribers that the chat channel (resp. event bus) will be closed shortly. / |
| `EVENT_TYPE_MAX_SYSTEM` | string | User defined events must have a higher type value than this limit. / |
| `EVENT_TYPE_OPEN_CHAT` | string | Open chat event type. Events of this type are used to invite subscribers to open a public final static chat channel. / |
| `EVENT_TYPE_WATCH_FOLDER` | string | Watch folder event. An event of this type is sent, if the contents of a given folder have been changed. In order to register a listener for such event |
| `WATCH_DELETE` | integer | An object was deleted. |
| `WATCH_INSERT` | integer | An object was inserted. |
| `WATCH_UPDATE` | integer | An object was updated, locked or unlocked. |

#### `EventBusParams`

This class supplies params to control the creation of an event bus ID. Only one of the members ticket, userId and channelId should be set.

| Property | Type | Description |
|----------|------|-------------|
| `channelId` | string | Create an event bus ID based on this string. An arbitary string can be supplied. / |
| `noForwardToOtherIxs` | boolean | Do not open this bus on other Indexservers. In load balancing environments, event busses are opened on each Indexserver by default. Set this option to |
| `ticket` | string | Create event bus ID based on this ticket. / |
| `userId` | string | Get the event bus ID for this user. A numeric ID, GUID or user name can be specified. The returned bus ID is computed as EventBusC.BUSID_USER + uid, w |

#### `EventFilter`

This class describes an event filter.

| Property | Type | Description |
|----------|------|-------------|
| `busId` | string | Event bus ID / |
| `param1` | string | First event param. Optional. Depends on event type. |
| `param2` | string | Second event param. Optional. Depends on event type. |
| `type` | string | Event type. This must be one of the predefined event types or an application defined type with a larger value than EventBusC.EVENT_TYPE_MAX_SYSTEM. |

#### `EventListener`

This class describes an event bus listener.

| Property | Type | Description |
|----------|------|-------------|
| `filters` | array | Array of event filters. / |

#### `Exception`

Type: object

#### `ExecuteScriptParams`

This class is used to specify which script has to be executed in function executeScript. The script has to be an ELO Windows CLIENT OLE-Automation script. /

| Property | Type | Description |
|----------|------|-------------|
| `functionName` | string | Call this function in the script code. A function defined in script code that was supplied in a previsious call can be invoked too, as long as this ob |
| `functionParams` | array | Function parameters. / |
| `scriptCode` | FileData | Constructor / |
| `scriptEngine` | string | This value defines the scripting engine to be used to execute the script. Currently, this value must be null or empty or "EloixAuto". If the value is  |
| `scriptObjId` | string | If the script to be executed is available in the ELO archive, this member can specify the object ID (or ARCPATH: - see checkoutSord) of the script doc |
| `scriptString` | string | This object contains the script code to be executed as a string object. The string must either start with "javascript:" or "vbscript:". The maximum sc |

#### `ExecuteScriptResult`

The function executeScript returns an object of this class to provide returned information or error information. /

| Property | Type | Description |
|----------|------|-------------|
| `errorColumn` | integer | Column where the error occured. / |
| `errorLine` | integer | Line where the error occured. / |
| `errorMessage` | string | Error message. / |
| `returnedString` | string | Return value as string. / |

#### `ExportDesc`

Descriptor for an Export. This class should be the first Entity in an Export/Import-File and provides extra informationen about the Export

| Property | Type | Description |
|----------|------|-------------|
| `exportRefPath` | array | The path of the exported element or when multiple sords are exported the computed common path / |
| `sourceArchive` | string | The name of the source repository of the export / |

#### `ExportExtOptions`

Options for extended export.

| Property | Type | Description |
|----------|------|-------------|
| `dateEndIso` | string | @param dateEndIso the dateEndIso to set / |
| `dateStartIso` | string | @param dateStartIso the dateStartIso to set / |
| `dateType` | integer | @param dateType the dateType to set / |
| `exportAttachments` | boolean | @param exportAttachments the exportAttachments to set / |
| `exportDocs` | boolean | @param exportDocs the exportDocs to set / |
| `exportDocsVersions` | boolean | @param exportDocsVersions the exportDocsVersions to set / |
| `exportEncrytedDocs` | boolean | @param exportEncrytedDocs the exportEncrytedDocs to set / |
| `exportKeywords` | boolean | @param exportKeywords the exportKeywords to set / |
| `exportReminders` | boolean | @param exportReminders the exportReminders to set / |
| `exportStructure` | boolean | @param exportStructure the exportStructure to set |
| `ignoreEmptyFolders` | boolean | @param ignoreEmptyFolders |
| `masksList` | array | @param masksList the masksList to set / |
| `replaceRefWithOriginal` | boolean | @param replaceRefWithOriginal the replaceRefWithOriginal to set / |
| `searchId` | string | @param searchId the searchId to set / |
| `srcList` | array | @param srcList the srcList to set / |
| `srcType` | integer | @param srcType the srcType to set / |

#### `ExportExtOptionsC`

Constant class for the ExportExtOptions class. (The default value are always 0)

| Property | Type | Description |
|----------|------|-------------|
| `EXPORT_DATE_TYPE_DEPOT` | integer | Export filtered according depot date |
| `EXPORT_DATE_TYPE_DOC` | integer | Export filtered according document date |
| `EXPORT_SRC_TYPE_ARCHIVE` | integer | Objects from archive are exported |
| `EXPORT_SRC_TYPE_SEARCH` | integer | Search results are exported |

#### `ExportFileC`

@since 11.00.000.005 /

| Property | Type | Description |
|----------|------|-------------|
| `CONTENT_TYPE` | string | Content Type for export data files |
| `FILE_EXTENSION` | string | Filename Extension for export data files |
| `FILE_VERSION` | string | The export file version this IX creates. |
| `MAGIC` | integer | Identifier for Export files |

#### `ExportOptions`

Options to import/export archive data for the replication.

| Property | Type | Description |
|----------|------|-------------|
| `compressionLevel` | integer | Enables compression mode. -1=no compression, 0/1=low compression, 9=strong compression. / |
| `includeMasterData` | SetOfMasterDataE | Specifies which master data to export. |
| `packageGuids` | ListOfString | EIX-2032: List of names or GUIDs of packages to export. |
| `timeStampEnd` | string | This value applies to exports only. Objects modified after this timestamp will not be processed. / |
| `timeStampStart` | string | This value applies to exports only. Objects modified before this timestamp will not be processed. / |

#### `ExportOptionsC`

Constants class for the ExportOptions class. Contains constants used when exporting objects from the ELO archive. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `EXPORT_ALL_VERSIONS` | string | Include other versions in the export. The default is to only export the current active document. / |
| `EXPORT_DOCUMENTS` | string | Include the document-files in the export. / |
| `EXPORT_KEYWORDS` | string | Include the used keyword-lists in the export. / |
| `EXPORT_REFERENCED_DOCUMENTS` | string | Include refereced documents in the export. / |

#### `Feed`

This class represents a document feed. Each Sord can have at most one Feed object. A Feed contains of a list of Action objects which can be user comments, comments generated by scripts and actions generated by the system. The Feed object acts like a header for the list of actions. Its main purpose is the mapping between feed actions and a Sord object. In order to receive a feed of a Sord object inclusive all actions, call function `FeedService#findFirstActions(de.elo.ix.client.ClientInfo, FindAc

| Property | Type | Description |
|----------|------|-------------|
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `createDateIso` | string | Create date. It holds the ISO formatted create date in the time zone of the client application. In order to convert this value into a date object, inv |
| `guid` | string | This class represents a document feed. Each Sord can have at most one Feed object. A Feed contains of a list of Action objects which can be user comme |
| `objGuid` | string | GUID of the associated Sord object. |
| `tStamp` | string | Time stamp. Time stamp of creation or modification. |

#### `FeedC`

Constants for class Feed.

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | FeedZ | @since 9.00.014.005 / |

#### `FeedDataC`

<p>Bit constants for members of Feed</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO 

#### `FeedNotification`

Callback interface for notifications about a document feed. The client application can register an implementation of this interface in order to be notified if an action is created or modified.

#### `FeedPost`

A FeedPost contains a parent action (an action where action.parentGuid is empty) and all subactions (actions where action.parentGuid = parent action's guid). From all actions their information (e.g. hashtags, mentions) are accumulated into lists.

| Property | Type | Description |
|----------|------|-------------|
| `creatorIds` | HashSetOfInteger | List of all user IDs which created any action / |
| `feedGuid` | string | GUID of corresponding feed (read from parentAction.feedGuid) / |
| `hashTags` | HashSetOfString | List of all hashtags of actions if action.type == EActionType.UserComment / |
| `lastChanged` | string | Date of last change of any action / |
| `linkedGuids` | HashSetOfString | List of GUIDs which are linked in any action if action.type == EActionType.UserComment / |
| `mentions` | HashSetOfString | List of all mentions (UserNames) of actions if action.type == EActionType.UserComment / |
| `parentAction` | Action | an action where action.parentGuid is empty / |
| `sordGuid` | string | GUID of corresponsing Sord / |
| `subActions` | ListOfAction | List of all subActions (action.parentGuid = parentAction.guid) / |
| `text` | string | Text of all actions, separated by a whitespace / |
| `textList` | ListOfString | List of all texts of all actions / |
| `versionComment` | string | Version comment of corresponding DocVersion if parentAction.getDocVersionGuid() is set. / |
| `versionName` | string | Name of corresponding DocVersion if parentAction.getDocVersionGuid() is set. / |

#### `FeedService`

This interface provides functions to access document feeds.

#### `FeedZ`

Type safe element selector for class Feed.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Type safe element selector for class Feed. |

#### `FieldTypeE`

This enum defines how should be searched for query terms. It can, for example, be used with `QueryFilter#fieldType` For every `SearchFieldE` it is defined, which `FieldTypeE` can be used and, therefore, which data classes (e.g. `StringSingleValue`) can be used.

#### `FileData`

Class for the data contained in a file. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `contentType` | string | MIME-Type/document extension, for example text/xml or image/tiff or txt. / |
| `data` | string | File data as byte array. / |
| `stream` | BStreamReference | File data as input stream. This member can only be used if the FileData object is a member of `MapValue` or `DocVersion`. |

#### `FileDataC`

Member constants for class FileData.

| Property | Type | Description |
|----------|------|-------------|
| `CONTENT_TYPE_IMAGE_BMP` | string | Mime type image/bmp. |
| `CONTENT_TYPE_IMAGE_JPEG` | string | Mime type image/jpeg. |
| `CONTENT_TYPE_IMAGE_PNG` | string | Mime type image/png. |
| `CONTENT_TYPE_IMAGE_SVG` | string | Mime type image/svg. |
| `CONTENT_TYPE_IMAGE_X_ICO` | string | Mime type image/x-ico. |
| `CONTENT_TYPE_IMAGE_X_ICON` | string | Mime type image/x-icon. |
| `MAX_BLOB_LENGTH` | string | Maximum length of BLOB fields. This value is set to 1MB. / |
| `lnContentType` | integer | @since 10.00.020.007 / |
| `mbContentType` | string |  |
| `mbData` | string |  |
| `mbDataArray` | FileDataZ |  |
| `mbDataStream` | FileDataZ |  |
| `mbStream` | string |  |

#### `FileDataZ`

Member selector for class FileData.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the DocMaskC class. / |

#### `FilterAggregationQueryParams`

Defines parameters to run an aggregation of type "Filter" (a single-bucket-aggregation). This aggregation query allows sub-aggregations and this is the main use case.

| Property | Type | Description |
|----------|------|-------------|
| `queryOperator` | QueryOperator | Only selected parameters and no sub-aggregations. / |
| `subAggregations` | MapToAggregationQuery | Inner aggregations of this aggregation. / |

#### `FilterAggregationResult`

The result object of a filter aggregation. It consists mainly of inner aggregations results (sub-aggregations).

| Property | Type | Description |
|----------|------|-------------|
| `aggregations` | MapToAggregationResult | This Map contains the results of all defined sub-aggregations within this filter. / |
| `docCount` | string | Number of documents belonging to the filter's criteria. / |

#### `FilterValue`

Deliver a value for QueryFilter.

#### `FindActionsInfo`

Describes search criteria for `FeedService#findFirstActions(de.elo.ix.client.ClientInfo, FindActionsInfo, int, ActionZ)`. If only objId is set, userId and createDateIso is empty, the entire document feed of the given object is returned. The (main) actions are sorted descending by create date. The answers (child actions) follow immediately their associated main action. Answers are sorted ascending by create date. If any other member is also set, or if objId is combined with another member, the se

| Property | Type | Description |
|----------|------|-------------|
| `actionTypes` | ListOfEActionType | Search by action types. If this element is empty, actions of all types are returned. |
| `createDateIso` | string | Search by create date. A date range can be specified by using the default range delimiter "..." or the one defined in `de.elo.ix.client.FindOptions#ge |
| `findHashTags` | boolean | Search for HashTags If this member is true, all HashTags within the action will be returned |
| `findNotifications` | boolean | Search for notifications. If this member is true, only those actions are found for which the user was notified. |
| `findResultAccessMode` | FindResultAccessMode | Describes how the client application will access the results. |
| `findSubscriptions` | boolean | If true a Map&lt;String, Subscription&gt; will be set in the FindResult |
| `objId` | string | Describes search criteria for `FeedService#findFirstActions(de.elo.ix.client.ClientInfo, FindActionsInfo, int, ActionZ)`. If only objId is set, userId |
| `sordZ` | SordZ | Sord element selector. If this member is not null or empty, the returned FindResult object contains the associated Sord objects in FindResult.sords. |
| `spaceGuid` | string | Collect feed actions of all items in a teamspace or workspace. This option contains the `Sord#getGuid()` of a teamspace or workspace and can only be c |
| `userId` | string | Search by user ID, GUID, name. / |

#### `FindActionsInfoC`

Constants for FindActionInfo and findFirstActions.

#### `FindActivityInfo`

This class specifies constraints for the API function `IXServicePortIF#findFirstActivities(ClientInfo, FindActivityInfo, int, ActivityZ)`. By default, the members of this class are combined by AND. If `#senderOrReceiver` is set, senderId and receiverId are combined by OR. If neither senderId nor receiverId is set, the function findFirstActivities collects all activities that can be read by the current session.

| Property | Type | Description |
|----------|------|-------------|
| `inclDeleted` | boolean | Find activities for deleted folders and documents too. |
| `inclDeputy` | boolean | Search for the activities of the deputized users too. / |
| `inclGroup` | boolean | Search for all groups of sender and receiver too. / |
| `objId` | string | This class specifies constraints for the API function `IXServicePortIF#findFirstActivities(ClientInfo, FindActivityInfo, int, ActivityZ)`. By default, |
| `receiverId` | string | Find activities created for this receiver. Can be set to a user ID, user GUID or user name. Optional. |
| `senderId` | string | Find activities created by this user. Can be set to a user ID, user GUID or user name. Optional. |
| `senderOrReceiver` | boolean | Search for sender or receiver. Combine the senderId and receiverId by logical OR operation. / |

#### `FindActivityProjectsInfo`

This class defines the options for IXServicePortIF.findActivityProjects.

| Property | Type | Description |
|----------|------|-------------|
| `projectName` | string | Project name. This value can contain wildcards. / |

#### `FindAlertInfo`

Find criterias for selecting alerts. RESERVED /

| Property | Type | Description |
|----------|------|-------------|
| `destId` | string | Find alerts sendet to this user, ID or name. Only main administrators can set this value to an arbitary user ID. Other users can only set one of her o |
| `inclAlam` | boolean | Find alarm notifications. Ignored, if inclAll is true. / |
| `inclAll` | boolean | Find all notification types. If this member is set, the other members related to notification types are ignored. / |
| `inclInTray` | boolean | Find notifications related to the In Tray. Ignored, if inclAll is true. / |
| `inclOthers` | boolean | Find all other notifications that are not explicitly listed here. Ignored, if inclAll is true. / |
| `inclReminder` | boolean | Find reminder notifications. Ignored, if inclAll is true. / |
| `inclSubs` | boolean | Find notifications related to substitution rules. Ignored, if inclAll is true. / |
| `inclWorkFlow` | boolean | Find workflow notifications. Ignored, if inclAll is true. / |
| `objId` | string | Find notifications related to this object. For valid values see checkoutSord . |
| `sourceId` | string | Find alerts created by this user, ID or name. / |
| `timeIso` | string | Find notifiations with this create date or in this date range. A date range must be separated by "...". / |

#### `FindBackgroundThreadOptions`

/ package de.elo.ix.client; import java.io.Serializable; import java.util.Arrays;

| Property | Type | Description |
|----------|------|-------------|
| `dateAfter` | string | Filter jobs started after this date. / |
| `dateBefore` | string | Filter jobs started before this date. / |
| `guids` | array | Filter jobs with specific Job-GUIDs. / |
| `inclActiveJobs` | boolean | Includes running Jobs in the result. Defaults to true. / |
| `inclFinishedJobs` | boolean | Includes finished Jobs in the result. Defaults to false. / |
| `inclFullInfo` | boolean | enables extended result information in the ProcessInfo member (if available) / |
| `sortOrder` | integer | The order in which the results has to be sorted. |
| `userInfo` | array | Filter jobs of specific users; Ignored if the caller is no admin. / |

#### `FindByAcl`

Find objects by ACL

| Property | Type | Description |
|----------|------|-------------|
| `acls` | array | Find objects that are protected by one of this ACLs. For access checking, the order of the ACL items is irrelevant. That means, two ACL lists with the |
| `distinctAcl` | boolean | Return a list of unique ACL entries. The ACL entries are wrapped in arbitary Sord objects which are returned in FindResult.sords. This functionality c |

#### `FindByAspectValue`

This class contains disjunct conditions to search for aspect data in the database. Used as value in `FindByIndex#aspects`.

| Property | Type | Description |
|----------|------|-------------|
| `condition` | IndexSearchValue | A single `IndexSearchValue` condition. This field is for convenience in case you only have a single disjunct condition for the same aspect index line. |
| `disjunctConditions` | ListOfIndexSearchValue | `List` of disjunct conditions to filter aspect data in the database. The server will evaluate all conditions in this list with logical OR. / |

#### `FindByESearch`

Use this class to search by iSearch with API functionality starting with ELO 11.

| Property | Type | Description |
|----------|------|-------------|
| `searchOptions` | ESearchOptions | This options must match the called function. |
| `searchParams` | ESearchParams | Deliver the query and where to search with this parameters. |

#### `FindByFulltext`

Performs a fulltext search. This class is deprecated. The fulltext search is performed via iSearch. Therefore, use `de.elo.ix.client.esearch.FindByESearch` instead. The `#term` should be replaced by the actual query term and additional filters (e.g. DocMask) should be submitted by `de.elo.ix.client.esearch.ESearchParams#queryOperator`. The areas in which should be search should be set in `de.elo.ix.client.esearch.ESearchParams#searchIn`. Searches using this class are still executed but internall

| Property | Type | Description |
|----------|------|-------------|
| `term` | string | Search term to be located in the fulltext database. Can be a single word or a number of words. Wildcard * is allowed, it matches any number of charact |

#### `FindByFulltextCtrl`

This class is used to search for objects that have to be indexed by the fulltext database engine. The selected objects are ordered by their timestamp. If the search process is interrupted because of a timeout or because the FindOptions.totalCount limit is reached, all the Objects of the lates timestamp second are discarded. If the search process is terminated due to breakTotalCount and the array of results is empty, the search should be repeated with a greater value for totalCount. Access checki

| Property | Type | Description |
|----------|------|-------------|
| `endTStamp` | string | Find objects from this date or older. If the value is null or empty, the time range has no upper limit. / |
| `onlyDocs` | boolean | Find next documents for textreader. Note: this field is currently unused |
| `profileKeyPrefix` | string | Key prefix for loop state. |
| `reindex` | boolean | Re-index processing. If this member is true, a search returns objects from the largest object ID to 2. If this member is false, a search returns the n |
| `startTStamp` | string | Find objects from this date or newer. This value can be null or empty in which case the time range has no lower limit. / |

#### `FindByFulltextCtrlC`

Constants for `FindByFulltextCtrl`. EIX-2773

| Property | Type | Description |
|----------|------|-------------|
| `KEY_FT_PLUGIN` | string | ELOftPlugin uses this value as `FindByFulltextCtrl#profileKeyPrefix`. / |
| `KEY_TR` | string | Textreader uses this value as `FindByFulltextCtrl#profileKeyPrefix`. / |

#### `FindByFulltextCtrlResultItem`

A search using FindByFulltextCtrl returns this result items in addition to findResult.sords.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp of the last change of either indexing information, note data, fulltext content or attachment fulltext content. / |
| `note` | Note | Note object. If this member is set, member sord can be ignored. |
| `selectType` | integer | Corresponds to the table from which the Sord/ Note was selected. Note: For internal use only. |
| `sord` | Sord | Sord object. Same as in findResult.sords[.] / |

#### `FindByFulltextResultItem`

Additional information for an item found by fulltext search. /

| Property | Type | Description |
|----------|------|-------------|
| `fieldNames` | array | List of index field names that contain the query text. / |
| `relevance` | integer | Relevance in per mill. / |
| `resultFields` | ArrayListOfSearchFieldE | @since 10.99.999.006 / |
| `sord` | Sord | Sord object. / |
| `summaryDesc` | string | Textpart from memo text. / |
| `summaryFulltext` | string | Textpart from document. / |

#### `FindByIndex`

Finds an object according to the object's index properties. The search terms are concatinated by the operator specified with FindOptions.searchMode. If FindOptionsC.OPERATOR_OR is the specified searchMode the members of this class are concatinated in the search string with the boolean operator "OR". Any other searchMode concatinates with "AND". Exception: userId and maskId are always used as "AND" terms. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string | Constrain results to objects with this access control list. |
| `aspectSortOrder` | ListOfFindResultSortSpecification | This parameter controls an aspect-search's sorting of its results. You can leave this parameter empty or null to get the results from the database's d |
| `aspects` | MapToFindByAspectValue | Find objects according to this filter for aspect objects. The filter is a map of lists that uses a `String` as key and `List` of `IndexSearchValue` as |
| `confidentiality` | string | Find objects with this confidentiality level. If the confidentiality is to be ignored this value must be set to `null`. To get the list of available c |
| `delDateIso` | string | Find objects with this due date. It is a single date value or a date range in ISO format. |
| `deleteDateIso` | string | Find objects with this externalId. |
| `deleteUser` | string | Find objects with this referenceId. |
| `desc` | string | Find objects with this term included in the description of the object (case insensitive). This value can be a list of terms separated by blanks. The t |
| `exactName` | boolean | If this option is false, all objects are found that contain the term specified in name anywhere in their short description (Sord.name). In other words |
| `externalId` | string | Find objects with this externalId. |
| `iDateIso` | string | Find objects with this internal date. It is a single date value or a date range in ISO format. |
| `includeChildMasks` | boolean | Set this flag to `true` if you want to include masks that inherit from the specified masks in `#maskId` and `#maskIds`. |
| `kind` | string | Colour. If the colour is to be ignored this value must be set to null. |
| `lockId` | string | Set this value to an user's id or name to search for objects currently locked by that user. To ignore this option, set this value to null (default). |
| `maskId` | string | Find objects related to this mask ID or name. If the mask relation is to be ignored this value must be set to an empty string or null. |
| `maskIds` | array | Array of maskIds. Find objects associated to one of this keywording forms. Currently this option does not work in combination with `#aspects`. |
| `name` | string | Find objects with this term(s) included in the name of the object (case insensitive). This value can be a list of terms separated with blanks. They ar |
| `objKeys` | array | Find objects with this indexing attributes. The values of the attributes can contain a value range. The wildcard * is allowed in ObjKey.name and ObjKe |
| `ownerId` | string | Find objects owned by the user with this user ID or name. If the owner is to be ignored this value must be set to null. |
| `pathId` | string | Storage path ID or name |
| `referenceId` | string | Find objects with this referenceId. |
| `regionId` | integer | Find objects with this regionId |
| `spaceGuids` | ListOfString | List of spaceGuids. Find objects that contain these spaceGuids. |
| `xDateIso` | string | Find objects with this external date. It is a single date value or a date range in ISO format. IX versions from 9.00.060 support relative date values. |

#### `FindByNotes`

Finds an object according to the objects notes (sticky notes) content.

| Property | Type | Description |
|----------|------|-------------|
| `term` | string | The search term to be found within the notes. / |
| `type` | integer | Find notes of this type. Use TYPE_NONE (=0) to find all notes. |

#### `FindByPreviewCtrl`

This class can be used to find the documents for which preview files have to be created. The main purpose is to control the automatic preview generation in a server process.

| Property | Type | Description |
|----------|------|-------------|
| `fileExtensions` | array | Select only those documents with one of this extension. |
| `previewAvailable` | boolean | Finds all documents with previews. / |
| `previewError` | boolean | Finds all documents for which the preview generation failed. / |

#### `FindByRegisteredFunction`

@since 7.00.040.020 /

| Property | Type | Description |
|----------|------|-------------|
| `args` | Any |  |
| `functionName` | string | @since 7.00.040.020 / |

#### `FindBySordHist`

| Property | Type | Description |
|----------|------|-------------|
| `histKeys` | array |  |

#### `FindByType`

This class holds additional information for FindInfo, in order to restrict a search using document types. The default resolving sequence is ordered by the grade of restriction: 1. typeIDs, typeNames, typeExtensions is the most specialised information, 2. typeDocuments containing all document types (IDs, Names, Extensions), 3. and typeStructures including all levels of structure elements. 4. If none of the parameters above is valid, the complete restriction FindByType is omitted. Copyright: Copyr

| Property | Type | Description |
|----------|------|-------------|
| `typeDocuments` | boolean | Include all document types / |
| `typeExtensions` | array | Associated document extensions; must be resolved to typeIDs / |
| `typeIDs` | array | Type identifiers; a direct mapping of objtype / |
| `typeNames` | array | Type names; must be resolved to typeIDs / |
| `typeStructures` | boolean | Include all structure elements / |

#### `FindByVersion`

This class holds additional information for FindInfo, in order to restrict a search using the document history (version). Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `versionComment` | string | User defined version description. The wildcard * is allowed, it matches any number of characters. / |
| `versionMD5` | string | The md5 Hash value for the file. / |
| `versionNumber` | string | User defined version number or version id. The wildcard * is allowed, it matches any number of characters. / |
| `workVersionOnly` | boolean | Optional flag to restrict the search to active versions only. / |

#### `FindChildren`

This class controls the search for child objects of an archive entry. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `endLevel` | integer | Search child objects up to this level below parentId. A value of 0 or 1 means, that only the sub entries directly under the parent are included. Set t |
| `mainParent` | boolean | Include only main parent relations. / |
| `parentId` | string | Search child objects of the parent entry with this object ID or GUID. / |

#### `FindConfigFileInfo`

This class describes the files to select from a postbox directory or from a configuration directory.

| Property | Type | Description |
|----------|------|-------------|
| `inclDeputy` | boolean | Find files in the in-tray folder of all deputized users. This member is ignored, if names is set. |
| `names` | array | Find files with this names or in this directory. To specify a directory, put the directory name into names[.] and append "/*". If this member is set,  |
| `postboxUserId` | string | Find files in the in-tray of the user specified by ID or name. This member is ignored, if names is set. If neither names nor postboxUserId is set, the |

#### `FindDirect`

Search query for locating text in the archive. The fulltext search is performed via iSearch. Therefore, use `de.elo.ix.client.esearch.FindByESearch` instead. The `#query` should be replaces by the actual query term and additional filters (e.g. DocMask) should be submitted by `de.elo.ix.client.esearch.ESearchParams#queryOperator`. The areas in which should be search should be set in `de.elo.ix.client.esearch.ESearchParams#searchIn`. Searches using this class are still executed but internally mapp

| Property | Type | Description |
|----------|------|-------------|
| `query` | string | Search query. |
| `searchInFulltext` | boolean |  |
| `searchInIndex` | boolean |  |
| `searchInMemo` | boolean | Is ignored, reserved for future use / |
| `searchInNotes` | boolean | Is ignored, reserved for future use / |
| `searchInSordName` | boolean |  |
| `searchInVersions` | boolean |  |

#### `FindDirectC`

Constants used in class FindDirect

| Property | Type | Description |
|----------|------|-------------|
| `FIELD_DELDATE` | string | ELO iSearch field: ISO formatted delete date, UTC (Sord.delDateIso) / |
| `FIELD_DELDATE_MONTH` | string | ELO iSearch field: Month of delete date, UTC (Sord.delDateIso), always 2 characters, e.g. 01 for January. / |
| `FIELD_DELDATE_YEAR` | string | ELO iSearch field: Year of delete date, UTC (Sord.delDateIso) / |
| `FIELD_DESC` | string | Constants used in class FindDirect |
| `FIELD_DOC_SIZE` | string | Document size |
| `FIELD_EXT` | string | ELO iSearch field: document file extension without leading dot (DocVersion.ext) / |
| `FIELD_GUID` | string | ELO iSearch field: GUID (Sord.guid) / |
| `FIELD_ID` | string | ELO iSearch field: ID (Sord.id) / |
| `FIELD_IDATE` | string | ELO iSearch field: ISO formatted archiving date, UTC (Sord.iDateIso) / |
| `FIELD_IDATE_MONTH` | string | ELO iSearch field: Month of archiving date, UTC (Sord.iDateIso), always 2 characters, e.g. 01 for January. / |
| `FIELD_IDATE_YEAR` | string | ELO iSearch field: Year of archiving date, UTC (Sord.iDateIso) / |
| `FIELD_MASK_ID` | string | ELO iSearch field: Keywording form ID, (Sord.mask) / |
| `FIELD_MASK_NAME` | string | ELO iSearch field: Keywording form name, (Sord.maskName) / |
| `FIELD_NAME` | string | ELO iSearch field: short description (Sord.name) / |
| `FIELD_OBJ_KEY` | string | ELO iSearch field: group name of index field (Sord.objKey[.].name, DocMask.line[.].key) / |
| `FIELD_OBJ_KEY_DATE` | string | Date Indexfields (dLINE) |
| `FIELD_OBJ_KEY_NUMERIC` | string | Numeric Indexfields (nLINE) |
| `FIELD_OBJ_KEY_TOKENIZED` | string | ELO iSearch field: group name of index field (Sord.objKey[.].name, DocMask.line[.].key) This field contains tokenized content (linguistic processing a |
| `FIELD_OWNER` | string | ELO iSearch field: owner name (Sord.ownerName) / |
| `FIELD_OWNER_ID` | string | ELO iSearch field: owner ID (Sord.ownerId) / |
| `FIELD_TSTAMP` | string | ELO iSearch field: last modified time stamp, UTC (Sord.tStamp) / |
| `FIELD_TYPE` | string | ELO iSearch field: folder or document type (Sord.type) / |
| `FIELD_VERSION_COMMENT` | string | DocVersion.comment |
| `FIELD_VERSION_NUMBER` | string | DocVersion.version |
| `FIELD_VERSION_OWNER` | string | DocVersion.ownerId |
| `FIELD_XDATE` | string | ELO iSearch field: ISO formatted document date, UTC (Sord.xDateIso) / |
| `FIELD_XDATE_MONTH` | string | ELO iSearch field: Month of document date, UTC (Sord.xDateIso), always 2 characters, e.g. 01 for January. / |
| `FIELD_XDATE_YEAR` | string | ELO iSearch field: Year of document date, UTC (Sord.xDateIso) / |

#### `FindDocMaskInfo`

This class describes the search criteria for `IXServicePortIF#findFirstDocMasks`. The wildcards defined by `SessionOptionsC#DB_WILDCARDS` can be used for `#maskIdsOrNames`, `#packageLevelGuids` and `#packageGuid`.

| Property | Type | Description |
|----------|------|-------------|
| `maskIdsOrNames` | ListOfString | Find by mask ids, names or guids. Search over `DocMask#id`, `DocMask#name` or `DocMask#guid` |
| `packageGuid` | string | Find by packageGuids. Search over `DocMask#packageName` |
| `packageLevelGuids` | ListOfString | Find by packageLevelGuids. Search over `DocMask#packageName` |

#### `FindForKeywordingRelation`

Criteria for searching sords for keywording relation.

| Property | Type | Description |
|----------|------|-------------|
| `aspectLine` | AspectLine | Keywording field definition for which Sord relations should be found. This object must contain `AspectLine#allowedMaskIdsForKeywordingRelation`. A sor |
| `docMaskLine` | DocMaskLine | Keywording field definition for which Sord relations should be found. This object must contain `DocMaskLine#allowedMaskIdsForKeywordingRelation`. A so |
| `filter` | string | Filter string applied to short description of Sords. This filter has to match `Sord#name` to append the Sord to the result. The filter can have one wi |

#### `FindHashTagInfo`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `actionZ` | ActionZ | Action element selector. |
| `createDateIso` | string | Search by create date. A date range can be specified by using the default range delimiter "..." or the one defined in `de.elo.ix.client.FindOptions#ge |
| `findFeeds` | boolean | If true a Map&lt;String, Feed&gt; will be set in the FindResult. by default true |
| `findHashTags` | boolean | @since 9.00.030.020 / |
| `findResultAccessMode` | FindResultAccessMode | Describes how the client application will access the results. |
| `findSubscriptions` | boolean | If true a Map&lt;String, Subscription&gt; will be set in the FindResult |
| `hashtagGuidOrName` | string | HashTag Guid or Name / |
| `lastUsedIso` | string | Search by last used. A date range can be specified by using the default range delimiter "..." or the one defined in `de.elo.ix.client.FindOptions#getR |
| `minCount` | integer | Filter the result by number of use. Only HashTags with >= minCount will be returned |
| `sordZ` | SordZ | Sord element selector. |

#### `FindIcon`

This class describes the search criteria for `IXServicePortIF#findFirstIcons`. The wildcards defined by `SessionOptionsC#DB_WILDCARDS` can be used for `#name` and `#packageName`. Members `#name`, `#packageName` and `#contentType` are combined by OR.

| Property | Type | Description |
|----------|------|-------------|
| `contentType` | string | Find by content type. Search over `Icon#contentType`. |
| `name` | string | Find by icon name. Search over `Icon#name`. |
| `packageName` | string | Find by package. Search over `Icon#packageName`. |

#### `FindInfo`

This class controls the search function findFirstSords. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `findByAcl` | FindByAcl | Find sords by ACL. |
| `findByESearch` | FindByESearch | If not null, the new ElasticSearch API (as of ELO 11) is used. |
| `findByFulltext` | FindByFulltext | If not null the results are constrained to documents including this fulltext term (or terms). / |
| `findByFulltextCtrl` | FindByFulltextCtrl | Find the sords that have to be indexed by the fulltext engine. |
| `findByIndex` | FindByIndex | If not null the function searches through the indexing information. / |
| `findByNotes` | FindByNotes | If not null the function searches through the notes. (NOT CURRENTLY IMPLEMENTED!) / |
| `findByPreviewCtrl` | FindByPreviewCtrl | Find sords by preview control information. |
| `findByRegisteredFunction` | FindByRegisteredFunction | @since 7.00.040.020 / |
| `findBySordHist` | FindBySordHist | If not null the function searches in versioning history of indexing information. / |
| `findByType` | FindByType | If not null the function searches using objtype. / |
| `findByVersion` | FindByVersion | If not null the function searches using histversion and histcomment. / |
| `findChildren` | FindChildren | If not null, the results are constrained to child entries of the specified parent in this object. To retrieve child lists for an archive entry this me |
| `findDirect` | FindDirect | Terms for google-like search in Java-Client. |
| `findForKeywordingRelation` | FindForKeywordingRelation | Find Sord objects to be used in keywording relation. |
| `findLinks` | FindLinks | If not null, the results are constrained to entries linked to the specified object in findLinks. |
| `findOptions` | FindOptions | This member controls several options, e. g. sorting, time limitation. / |

#### `FindInfoAsInternalSQL`

SQL command that is built from a FindInfo object. This class contains the elements of an internal SQL statement for finding Sord objects. Modifying this elements might cause errors or wrong results in subsequent versions of IX.

| Property | Type | Description |
|----------|------|-------------|
| `fromTables` | string | Comma separated list of table names. / |
| `groupByClause` | string | SQL GROUP BY clause. / |
| `orderByClause` | string | SQL ORDER BY clause. / |
| `whereClause` | string | SQL WHERE clause. / |

#### `FindLinks`

Finds the links of an object.

| Property | Type | Description |
|----------|------|-------------|
| `objectId` | string | The Object to search for its links. |

#### `FindNotificationInfo`

FindInfo for FindFirstNotifications.

| Property | Type | Description |
|----------|------|-------------|
| `actionZ` | ActionZ | Action element selector. |
| `createDateIso` | string | Search by create date. A date range can be specified by using the default range delimiter "..." or the one defined in `de.elo.ix.client.FindOptions#ge |
| `findFeeds` | boolean | If true a Map&lt;String, Feed&gt; will be set in the FindResult. by default true |
| `findHashTags` | boolean | If true a List&lt;HashTagRelation&gt; and a Map&lt;String, HashTag&gt; will be set in the FindResult |
| `findSubscriptions` | boolean | If true a Map&lt;String, Subscription&gt; will be set in the FindResult |
| `inclImportant` | boolean | If true and createDateIso is set, it will also return all Notifications marked as Important even if they are not in the specified createDate range. If |
| `sordZ` | SordZ | Sord element selector. / |
| `userGuidOrID` | string | GUID or ID or Name of the User. If null, current user will be set. If GUID/ID is not the current user, admin rights are needed to preform the search / |
| `what` | integer | Reserved. / |

#### `FindOptions`

This class contains several options to control the search process of findFirstSords.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Return objects that were last modified at this time or in this time range. The time stamp is an ISO formatted value in the UTC timezone. It might incl |
| `docMaskZ` | DocMaskZ | @since 12.00.000.024 / |
| `escapeChar` | string | SQL escape character. Overwrites the character that can be specified by setSessionOptions. |
| `evalCount` | boolean | Compute the number of results. The number of results are returned in FindResult.count. Be aware of the fact that this option needs to read all databas |
| `excludeSummary` | boolean | Do not generate summary information. Retrieving summaries is very expensive for the iSearch module. |
| `findResultAccessMode` | FindResultAccessMode | Describes how the client application will access the results. |
| `inclDeleted` | boolean | Include logically deleted objects. |
| `lockZ` | LockZ | Lock all result Sords. If at least one of the sords cannot be locked, an exception is thrown from findFirstSords. Be aware of the fact that this optio |
| `objIds` | array | Restricts the results to objects with these IDs or GUIDs. / |
| `onlyDeleted` | boolean | Only logically deleted objects. If this member is true, inclDeleted is ignored. |
| `orderBy` | string | An SQL ORDER BY clause can be provided here, if required. / |
| `rangeDelimiter` | string | Range values can be used to search many index and date attribute values. The delimiter between the lower limit and upper limit value is defined by ran |
| `replSet` | ReplSet | Results are returned only for objects that reside in this replication set. / |
| `reserved` | string | This value is reserved for internal testing purposes and must be set to 0 in all cases. / |
| `searchId` | string | Restricts the results to objects returned by a previous search. / |
| `searchLifetimeSeconds` | integer | Lifetime of cached search results. This value overrides the ELOix configuration option searchLifetimeSeconds. The value determines the time in seconds |
| `searchMode` | SearchModeZ | The searchMode describes how search terms are concatinated with the boolean operators AND or OR. / |
| `sortOrder` | integer | Defines the sort order of the results. If sortOrder is 0 and the search process searches for child objects (FindInfo.findChildren!=null), the objects  |
| `timeoutSeconds` | integer | Specifies the time limit for the search. If the limit is exceeded, the search is interruped. If the search is not to have a time limit timeoutSeconds= |
| `totalCount` | integer | The search is terminated if this number of objects are found. If the number of results should not be constrained, set this value to 2^32-1 = 214748364 |
| `wildcards` | string | This characters are used as wildcards in search terms. The first wildcard is used for zero or more characters. The second wildcard is used for exactly |

#### `FindReportInfo`

Objects of this class specify the selection criteria for report entries in findReport . Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `endDateIso` | string | End date (UTC) / |
| `erpCodes` | array | Constrained to this ERP codes. |
| `extra1` | string | Specifies the extra1 value. Only Integer values are allowed for this element. |
| `findLastEntryBeforeEndDate` | boolean | Find the last entry before the given `#endDateIso`. This option e.g. allows to find the user permissions at the given `#endDateIso`. Therefore, set er |
| `objId` | string | Object ID or GUID / |
| `orderBy` | string | Can contain an SQL ORDER BY clause. |
| `searchId` | string | reserved. / |
| `startDateIso` | string | Start date (UTC) / |
| `timeoutSeconds` | integer | Specifies the time limit for the search. If the limit is exceeded, the search is interruped. timeoutSeconds=0 means that the search has no time limit. |
| `totalCount` | integer | The search is ended once this number of objects have been found. A value of 0 sets no constraint to the number of objects. / |
| `userId` | string | User ID or name. / |

#### `FindResult`

This class contains the search results of a call to IXServicePortIF.findFirstSords or IXServicePortIF.findNextSords . Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `actions` | array | Document feed actions. This array is filled by findFirst/findNextActions of the interface FeedService. The associated Feed objects are returned in the |
| `aggregations` | MapToAggregationResult | Result for findAggregations(). |
| `breakTimeout` | boolean | Constructor / |
| `breakTotalCount` | boolean | The search is breaked because the total number of results are reached. / |
| `completions` | ListOfString | Type-as-you-search Results. |
| `configFiles` | array | Array of configuration files. / |
| `contextTerms` | ListOfContextTermResults | Result for findContextTerms(). |
| `corrections` | ListOfString | Corrections suggestions. |
| `count` | integer | Number of results. This member is only valid, if FindInfo.findOptions.evalCount is true. |
| `docMasks` | ListOfDocMask | Result for findDocMasks. |
| `dynamicFolder` | string | String representation of FindInfo used to define a dynamic register. Function `IXServicePortIF#findFirstSords(ClientInfo, FindInfo, int, SordZ)` retur |
| `estimatedCount` | integer | Estimated number of hits that can be found by the query. This number cannot be computed for any search and is usually -1. Only if the search engine su |
| `feeds` | MapToFeed | Document feeds. Feed objects mapped to their GUID. |
| `fulltextCtrlResultItems` | array | Result items returned from a seach for new information to be added into the fulltext database. |
| `fulltextResultItems` | array | Additional information from the fulltext database. This member can be null, if the fulltext engine does not support additional information. |
| `hashTagRelations` | ListOfHashTagRelation | HashTag Relations. |
| `hashTags` | MapToHashTag | HashTags. HashTag Objects mapped to their HashTagGuid |
| `icons` | ListOfIcon | Icons. This member returns the icon objects found by findFirstIcons/findNextIcons. |
| `ids` | array | Array of IDs or GUIDs found. / |
| `jobStates` | array | Result items returned from a search for background threads. |
| `masks` | MapToDocMask | Keywording forms related to `#getSords()`. This member is set, if `FindOptions#docMaskZ` is not null and not empty. |
| `moreResults` | boolean | Is true if there are more results. / |
| `notes` | ListOfNote | Notes. This member returns the note objects found by findFirstNotes/findNextNotes. |
| `notifications` | MapToNotification | Notifications. Notification objects mapped to their Notification.watchGuid |
| `reportInfos` | array | Report entries. |
| `searchId` | string | Identifier to get more results. / |
| `sords` | array | Array of sord objects. This member is set if sordC / |
| `sortedResult` | ListOfValueClass | List of result objects ordered by the given sort order. If this member is not null, it repeats the list of result objects in sorted order. This member |
| `subscriptions` | MapToSubscription | Subscriptions. Subscription objects mapped to their Subscription.watchGuid. |
| `synonyms` | ListOfString | Thesaurus Resluts. |
| `tasks` | array | Array of user tasks. |
| `translateTerms` | array | Array of terms translated into different languages. |
| `userInfos` | MapToUserInfo | User objects. Map of user ID to user object. |
| `userNames` | MapToUserName | Lean user objects. Map of user ID to user object. |
| `workflows` | array | Get member workflows. |

#### `FindResultAccessMode`

This constants are used to control the caching of find results.

#### `FindResultSortSpecification`

This class specifies the sorting criteria of a search for aspect data.

| Property | Type | Description |
|----------|------|-------------|
| `key` | string | This key specifies the `AspectLine` as sorting criteria. The string must be in the same syntax as the key in `FindByIndex#aspects`: `AspectAssoc¶Aspec |
| `sortOrderSequence` | SortOrderSequenceE | Specify the sequence of the results (e.q. ascending or descending). Defaults to `SortOrderSequenceE#ASCENDING` / |

#### `FindSubscriptionInfo`

Find criteria for function findFirstSubscriptions.

| Property | Type | Description |
|----------|------|-------------|
| `feedZ` | FeedZ | Element selector for Feed objects. If this member is not null or empty, FindResult.feeds contains the Feed objects associated to FindResult.subscripti |
| `sordZ` | SordZ | Element selector for Sord objects. If this member is not null or empty, FindResult.sords contains the Sord objects associated to FindResult.subscripti |
| `userId` | string | Find subscriptions of this user. If this member is empty, the current users subscriptions are returned. This member is ignored for non-administrators. |

#### `FindTasksInfo`

This class contains the search criteria that are required for locating a task (reminders, workflow tasks or activity). /

| Property | Type | Description |
|----------|------|-------------|
| `allUsers` | boolean | Collect tasks from all users. This member is ignored, if the current user does not have administrator privileges `AccessC#FLAG_ADMIN`. If set to true, |
| `endDateIso` | string | Collect tasks up to this date. / |
| `findResultAccessMode` | FindResultAccessMode | Describes how the client application will access the results. |
| `highestPriority` | integer | Collect tasks of this or lower priority. |
| `inclActivities` | boolean | Collect activities. / |
| `inclActivityTypes` | ListOfString | Only select activities of the given types |
| `inclDeleted` | boolean | Select tasks for deleted folders and documents too. |
| `inclDeputy` | boolean | Collect tasks received from users for which the current user is a substitute. ELO 12+: `#inclGroup` must be set to true to enable this option. / |
| `inclGroup` | boolean | Collect tasks of the users groups. / |
| `inclHidden` | boolean | Inlcude hidden tasks. Currently this only affects workflows. |
| `inclOverTimeForSuperior` | boolean | Collect tasks for a superior as defined in the escalation options. When a workflow task exceeds its time limit, and the current user is assigned in th |
| `inclReminders` | boolean | Collect reminders. / |
| `inclWorkflows` | boolean | Collect workflows. / |
| `lowestPriority` | integer | Collect tasks of this or higher priority. |
| `objId` | string | Collect tasks for this Sord (ID or GUID). / |
| `overTimeLimit` | boolean | Collect nodes that exceeded the time limit. Workflow only |
| `sordZ` | SordZ | Return the associated Sord objects to the selected Tasks. If this member is not null, the Sord objects to the selected Tasks are read from the databas |
| `sortOrder` | UserTaskSortOrderZ | Controls the sort order or returned arrays. If null, PRIORITY_DATE_NAME is used. |
| `startDateIso` | string | Collect tasks beginning at this date. / |
| `taskName` | string | Select tasks with this name. The task name of a Reminder is Reminder.name. The task name of an Activity is Activity.name. The task name of a workflow  |
| `timeLimitBias` | integer | Time limit bias. This value added to each `WFNode#timeLimit` before evaluating whether the node is over time. It is measured in minutes. Indexserver u |
| `updateInUseDate` | boolean | Update WFNode.inUseDateIso for selected tasks. |
| `userIds` | array | IDs of the users which tasks can be collected by the administrator. This member is ignored, if the current user does not have administrator privileges |

#### `FindTranslateTermInfo`

This class is used to find translations of terms. Localization information is stored in two kinds of storage: in the database and in property files in the repository. The former kind use the database table translations which has a column for each language. This localization data can be modified or extended via API function `IXServicePortIF#checkinTranslateTerms(ClientInfo, TranslateTerm[], LockZ)`. The latter kind stores localization as property files under /Administration/Localization. This dat

| Property | Type | Description |
|----------|------|-------------|
| `disableFallback` | boolean | Disable fallback to default language if a key in `#translationKeyPrefixes` is not found. If there is no translation term associated to a key for a lan |
| `inclDeleted` | boolean | Reserved - Find deleted terms too (currently not implemented). / |
| `inclToBeTranslated` | boolean | Return those terms too, that should be translated into other languages: e.g. Keywording form names (DocMask.name), index value lables (DocMaskLine.nam |
| `includeAllLevels` | boolean | Find terms of lower or equal the level. |
| `langs` | array | Return the terms specified by element terms for which translations exist in this languages. If a term is not found in one of the languages, an empty s |
| `level` | integer | Find terms of this priority level. If 0 (default), return the terms with the highest level. |
| `packageName` | string | Package GUID. |
| `terms` | array | Terms for which translations should be selected. The given terms have to be in the language specified in langs[0] object. If langs is null or empty, t |
| `translationKeyPrefixes` | array | Find terms by translation keys. Collect the localized text for all keys with the given prefixes in the database or in the localization property files. |

#### `FindTranslateTermInfoC`

Constants for `FindTranslateTermInfo`.

| Property | Type | Description |
|----------|------|-------------|
| `ALL_TRANSLATIONS_FROM_PROPERY_FILES` | array | Use this constant to return the entire content of property files used for translation. / |

#### `FindUserInfo`

This class describes the search criteria for `IXServicePortIF#findFirstUsers`. The wildcards defined by `SessionOptionsC#DB_WILDCARDS` can be used for `#name`, `#desc`, `#property`, and `#ldapProperty`. Members `#name`, `#desc`, `#property`, and `#ldapProperty` are combined by OR. Other members are combinded by AND.

| Property | Type | Description |
|----------|------|-------------|
| `checkoutUsersZ` | CheckoutUsersZ | Filter users as in `IXServicePortIF#checkoutUsers(ClientInfo, String[], CheckoutUsersZ, LockZ)`. |
| `desc` | string | Find by user description. Search over `UserInfo#desc`. / |
| `findResultAccessMode` | FindResultAccessMode | Describes how the client application will access the results. |
| `group` | array |  |
| `groupLicenseKey` | string | Group License Key. Use {@link UserInfoC#NO_GROUP_LICENSE_KEY} to select all users that are not (a member of) a  group with mandatory licensing. |
| `groupRecursive` | boolean | If set, {@link FindUserInfo#group} will look for the group recursively. Equivalent to {@link CheckoutUsersC#MEMBERS_OF_GROUP_RECURSIVE_RAW} |
| `hasFlags` | integer | Select only users that have all of this `UserInfo#flags` set. A value of 0 is ignored. The selected users are found by testing (UserInfo#flags &amp; h |
| `hasFlags2` | integer | Select only users that have all of this `UserInfo#flags2` set. A value of 0 is ignored. The selected users are found by testing (UserInfo#flags2 &amp; |
| `hasNotFlags` | integer | Select only users that have non this `UserInfo#flags` set. The selected users are found by testing (UserInfo#flags &amp; hasNotFlags) == 0. |
| `hasNotFlags2` | integer | Select only users that have none this `UserInfo#flags2` set. The selected users are found by testing (UserInfo#flags2 &amp; hasNotFlags2) == 0. |
| `inverseGroup` | boolean | If set, {@link FindUserInfo#group} will look for all users and groups not members of the group Equivalent to {@link CheckoutUsersC#NOT_MEMBERS_OF_GROU |
| `inverseSubadmin` | boolean | If set, {@link FindUserInfo#subadmin} will look for all users and groups not managed by the given user.  Equivalent to {@link CheckoutUsersC#NOT_USERS |
| `ldapProperty` | KeyValue | Find by a LDAP property. Search over all `UserInfo#ldapProperties`. The key element in property is the key in the map `UserInfo#ldapProperties`. / |
| `name` | string | Find by user name. Search over `UserInfo#name`. / |
| `onlyGroups` | boolean | Search for groups only. If this member is set to true , flags provided by `#checkoutUsersZ` are ignored. / |
| `onlyUsers` | boolean | Zurückgestellt / * Last login time in ISO format, timezone UTC. / * A time range can be specified in brackets. / * / * Examples: / * / * String range  |
| `orgUnit` | string | Selects all members of a given OrgUnit. The {@link OrgUnitInfo#id} is expected as input. Equivalent to {@link CheckoutUsersC#MEMBERS_OF_ORGUNIT} |
| `packageName` | array |  |
| `property` | KeyValue | Find by an user property. Search over all `UserInfo#userProps`. The key element in property is the index in the array `UserInfo#userProps`. Example: F |
| `returnUserInfoMap` | boolean | Return entire information about each user. If true, `UserInfo` objects are returned in `FindResult#userInfos`. If false, `UserName` objects are return |
| `sortOrder` | integer | Specify how the results should be ordered. Valid values are `SortOrderC#USERNAME` and `SortOrderC#IUSERNAME`. Sorted results are returned in FindResul |
| `subadmin` | array |  |
| `translateGroupName` | boolean | Includes translated groupnames. The language of the connection is used. |
| `userIds` | array | User IDs related to `#checkoutUsersZ`. |
| `userProductClientType` | UserProductClientType | User product client type. {@link UserInfo#userProductFeatures} |
| `workspaceInfo` | string | Workspace related data. Use `UserInfoC#EMPTY_WORKSPACE_INFO` to select all empty workspaceInfos |

#### `FindWorkflowInfo`

This class contains the search criteria for selecting workflows. Copyright: Copyright (c) 2008, 2010 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `activeUserIds` | array | List with userIds. If not null and not empty only the workflows with this active users will be returned. ActiveUsers are the users of the active workf |
| `completionDateIso` | string | Completion date. If not null and not empty, workflows completed at this date or in this date range are returned. Only valid if wfType=FINISHED . A tim |
| `excludeUserGroups` | boolean | If true, only select workflows of the users. The group workflows are excluded. |
| `findResultAccessMode` | FindResultAccessMode | If true, only select workflows of the users. The group workflows are excluded. |
| `inclDeleted` | boolean | Only template workflows: include deleted templates. |
| `inclHidden` | boolean | If true, include hidden/technical workflows with the result. |
| `name` | string | Workflow name. If not null and not empty, it the search is restricted to workflows named like this value. It may contain wildcards, e. g. *bill*. |
| `objId` | string | Object ID. Active and finished workflows only. If not null and not empty, only workflows assigned to this object are returned. |
| `overTimeLimit` | boolean | Collect only WFs that exceeded the time limit. The entire WF or one of its nodes must be over time. |
| `ownerIds` | array | List with ownerIds. If not null and not empty only the workflows with these owners will be returned. |
| `sordZ` | SordZ | Return the associated Sord objects to the selected workflows. If this member is not null, the Sord objects to the selected workflows are read from the |
| `startDateIso` | string | Start date. If not null and not empty, workflows started at this date or in this date range are returned. It can be a single date value or a time span |
| `templateId` | string | Workflow template ID or name. If not null and not empty, the result is constrained to workflows based on this workflow template. |
| `type` | WFTypeZ | Workflow type. This parameter controls the search for nodes of either active or finished workflows. If this parameter is null, the search is performed |
| `userIds` | array | Construktor / |

#### `FioFinishOptions`

@since 11.00.000.005 /

| Property | Type | Description |
|----------|------|-------------|
| `jobState` | JobState | @since 11.00.000.045 / |

#### `FioResult`

@since 11.00.000.005 /

| Property | Type | Description |
|----------|------|-------------|
| `downloadStream` | BStreamReference | @since 11.00.000.034 / |
| `jobState` | JobState | This object represents the state of the export. Use `de.elo.ix.client.IXServicePortIF#queryJobState(de.elo.ix.client.ClientInfo, String, boolean, bool |

#### `FioService`

Reserved.

#### `FixedPointNumberListValue`

A list of fixed-point number values which is joined by AND or OR depending on andOperator . Defaults to an OR-disjunction.

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Connective of list elements (default is OR (=false) ). / |
| `valueList` | ListOfFixedPointNumberValue | A list of fixed-point number values which is joined by AND or OR depending on andOperator . / |

#### `FixedPointNumberRangeValue`

Class to commit a range filter of fixed-point number values or specify a range aggregation. To perform an open range query (e.g. from now to infinite), only submit either a value for from or to To perform a range aggregation, submit both from/to or at least from or to for each requested bucket (e.g. [from 3.14 to 6.28] or [from 3.14 to infinite]). Note that this aggregation includes the "from"-value and excludes the "to"-value for each range.

| Property | Type | Description |
|----------|------|-------------|
| `from` | FixedPointNumberSingleValue |  |
| `to` | FixedPointNumberSingleValue |  |

#### `FixedPointNumberSingleValue`

Represents a single fixed-point number value for search via ESearch.

| Property | Type | Description |
|----------|------|-------------|
| `value` | string | String representation of FixdPointNumber value / |

#### `FixedPointNumberValue`

Class to commit a numeric fixed-point number value to iSearch via QueryFilter.

#### `FontInfo`

This class describes a font.

| Property | Type | Description |
|----------|------|-------------|
| `RGB` | integer | Read-green-blue value. On byte each color. Read is at the lowest significant byte. / |
| `bold` | boolean | Bold / |
| `escapement` | integer | Specifies the angle, in tenths of degrees, between the escapement vector and the x-axis of the device. The escapement vector is parallel to the base l |
| `faceName` | string | Font face name / |
| `height` | integer | Font heigth. / |
| `heightPerCell` | boolean | The font height is related to the cell height of the font rather than the character heigth. / |
| `italic` | boolean | Italic / |
| `strikeOut` | boolean | Strike out / |
| `underline` | boolean | Underline / |

#### `ForwardSubstitutionInfo`

Forward a substitution from the its current substitute to a new substitute. A substitution can either be forwarded or transfered. Forward a substitution : The original substitution is not altered. An additional `Substitution` object is created by copying the original one and setting the new substitute. If `SubstitutionSettings#canBeActivatedManually` is set to true , an arbitrary number of SubstitutionPeriods (also 0) can be provided. The original ones are replaced with the new ones. If `Substit

| Property | Type | Description |
|----------|------|-------------|
| `newSubstituteId` | integer | Id of the new substitute. This value is ignored if `#newSubstituteName` is set. / |
| `newSubstituteName` | string | User name of the new substitute. `#newSubstituteId` is ignored if this member is set. / |
| `substitutionGuid` | string | GUID of substitution to be forwarded or transfered. / |
| `substitutionPeriods` | ListOfSubstitutionPeriod | New substitution periods is a substitution if forwarded. Must be set if a substitution is forwarded (set `#transferSubstitution` to false) and is igno |
| `transferSubstitution` | boolean | Define if the substitution should be forwarded or transfered. / |

#### `ForwardWorkflowNodeInfo`

This class controls workflow node forwarding in `IXServicePortIF#forwardWorkflowNode(ClientInfo, int, int, ForwardWorkflowNodeInfo, LockZ)`.

| Property | Type | Description |
|----------|------|-------------|
| `node` | WFNode | Workflow node to forward. The following members of this value are taken into account and update the related database values: `WFNode#name`, `WFNode#co |
| `successorNodesToActivate` | ListOfInteger | List of successor nodes to be activated. Set this member as null, if only node data should be changed. In this case, the the workflow is not forwarded |
| `terminateWorkflow` | boolean | Terminate the workflow instead of forwarding. If this member is true, `#successorNodesToActivate` and `#node` are ignored. / |

#### `ForwardWorkflowNodeResult`

@since 9.99.009.005 /

#### `FulltextConfig`

This class provides information about the configuration of the fulltext database.

| Property | Type | Description |
|----------|------|-------------|
| `flags` | integer | A combination of FulltextConfigC.FLAG_* constants. |
| `indexerConfig` | SearchIndexerConfig | @since 9.99.009.010 / |
| `knowlegeMapUrl` | string | URL of the Knowlege Map service. Only valid for iSearch. / |
| `source` | integer | One of the FulltextConfigC.SOURCE_* constants. |

#### `FulltextConfigC`

Constants for class FulltextConfig.

| Property | Type | Description |
|----------|------|-------------|
| `FLAG_ISEARCH_COMPANY_THESAURUS` | integer | Use the thesaurus of the company. / |
| `FLAG_ISEARCH_DID_YOU_MEAN` | integer | Evaluate suggestions for similar terms (= corrections) / |
| `FLAG_ISEARCH_ELO_THESAURUS` | integer | Use thesaurus provided by ELO (= synonyms) |
| `FLAG_ISEARCH_FEED` | integer | @since 11.00.000.009 / |
| `FLAG_ISEARCH_KNOWLEGE_MAP` | integer | Use the extension "Knowlege Map". / |
| `FLAG_ISEARCH_ONTOLOGY_NET` | integer | Use the extension "Ontology Net". / |
| `FLAG_ISEARCH_OPTIONSOFF` | integer | Turn off all search options (if 0 or not in db, a default set of search options (correction, synonyms, search terms) is turned on). If combined with o |
| `FLAG_ISEARCH_SEARCH_AS_YOU_TYPE` | integer | Perform a search for each pressed key (= completion) / |
| `FLAG_ISEARCH_SUMMARY` | integer | Retrieve a summary text for each word. / |
| `SOURCE_CLASSIC` | integer | Use fulltext information from inverse index stored in the archive database. / |
| `SOURCE_ELASTICSEARCH` | integer | Use fulltext information from Elasticsearch. |
| `SOURCE_FTCAT` | integer | Use fulltext information from Microsoft SQL-Server fulltext catalog. / |
| `SOURCE_ISEARCH` | integer | Use fulltext information from iSearch. / |

#### `GetWebDAVPathOptions`

Parameter class for the function `IXServicePortIF#getWebDAVPathFromObjID2`

| Property | Type | Description |
|----------|------|-------------|
| `objId` | string | ObjectId or GUID of the sord to get the path. / |
| `tickketInPath` | boolean | If true, the ticket is inserted in the path. / |
| `useShortPath` | boolean | From now on the option is no longer considered and is implicitly evaluated as true. |

#### `GetWebDAVPathResult`

Class for the result of the IX function `IXServicePortIF#getWebDAVPathFromObjID2`

| Property | Type | Description |
|----------|------|-------------|
| `path` | string | The generated WEBDAV path. / |

#### `GroupingType`

`ConfigService#checkoutConfigurations(de.elo.ix.client.ClientInfo, ConfigInfo, ConfigResultOptions)` maps the returned configuration entries on this value types.

#### `HashMapToHashTag`

Type: object

#### `HashMapToInteger`

Type: object

#### `HashSetOfHashTag`

Type: array

#### `HashSetOfInteger`

Type: array

#### `HashSetOfString`

Type: array

#### `HashTag`

This class represents a HashTag

| Property | Type | Description |
|----------|------|-------------|
| `counter` | integer | HashTag GUID. Unique identifier. / / {{elm: HstgGuid String hstgguid}} protected String hstgGuid; HashTag Name. / / {{elm: HstgName String hstgname}}  |
| `createDateIso` | string | Create date. It holds the ISO formatted create date in the time zone of the client application. In order to convert this value into a date object, inv |
| `hstgGuid` | string | HashTag GUID. Unique identifier. |
| `hstgName` | string | HashTag Name. |
| `lastUsedIso` | string | Last used. It holds the ISO formatted date of the last use of this HashTag In order to convert  this value into a date object, invoke function {@link  |
| `status` | integer | Status. |
| `tStamp` | string | Timestamp for replication. |

#### `HashTagC`

Constants for class HashTag

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | HashTagZ |  |
| `mbGuid` | HashTagZ | @since 9.00.030.012 / |
| `mbLastUsed` | HashTagZ | @since 9.00.030.012 / |

#### `HashTagDataC`

<p>Bit constants for members of HashTag</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `HashTagRelation`

This class represents the relation between HashTags and Actions.

| Property | Type | Description |
|----------|------|-------------|
| `actionGuid` | string | Guid of the Action in which the HashTag is used. |
| `hashtagGuid` | string | Guid of the HashTag. / / {{elm: HashtagGuid String hashtagguid} protected String hashtagGuid; Guid of the Action in which the HashTag is used. / / {{e |
| `status` | integer | Status. |
| `tStamp` | string | Timestamp for replication. |

#### `HashTagRelationC`

Constants for class HashTag

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | HashTagRelationZ |  |

#### `HashTagRelationDataC`

<p>Bit constants for members of HashTagRelation</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organis

#### `HashTagRelationZ`

@since 9.00.022.011 /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string |  |

#### `HashTagZ`

@since 9.00.022.011 /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string |  |

#### `HealthCheckInfo`

This class represents one value for health check evaluation.

| Property | Type | Description |
|----------|------|-------------|
| `doubleValue` | number | Numeric value. Either this value or {@link HealthCheckInfo#stringValue} has to be set. |
| `maxValue` | string | Maximaler Wert für mean values. EIX-1408 |
| `minValue` | string | String value. Either this or `HealthCheckInfo#doubleValue` has to be set. / / {{elm: StringValue String stringValue}} protected String stringValue; Nu |
| `name` | string | Constructor for a HCI of the type MinMaxAvg EIX-1408 |
| `operation` | HealthCheckValueOperation | Operation to process when updating the value. |
| `sampleSize` | string | Sample size for mean values. If {@link HealthCheckInfo#doubleValue} is a arithmetic mean, this value gives the  number of the underlying samples. If { |
| `stringValue` | string | String value. Either this or {@link HealthCheckInfo#doubleValue} has to be set. |
| `timeStamp` | string | Value name. / / {{elm: Name String name}} protected String name; |
| `type` | HealthCheckInfoType | EIX-1408 added HealthCheckInfoType. Ich denke hier sollte der Type zurückgegeben werden... |

#### `HealthCheckInfoC`

<p>Bit constants for members of HealthCheckInfo</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organis

#### `HealthCheckInfoType`

Defines the type of the HealthCheck values. Depending on the type the evaluation differs. Either MMA, CNT or MSG.

#### `HealthCheckInfos`

This class holds the values for health check evaluation.

| Property | Type | Description |
|----------|------|-------------|
| `archiveGuid` | string | Archive GUID. / |
| `customerLicenseKeyHash` | string | MD5 hash of license key. The part of the license key used to compute this hash can be obtained by conn.getServerInfo().getLicense().getSerno(); / |
| `infos` | ListOfHealthCheckInfo | Health check data. If returned from `HealthCheckService#read(de.elo.ix.client.ClientInfo, List)`, this list is sorted by `HealthCheckInfo#getName()`.  |

#### `HealthCheckService`

Functions for health check.

#### `HealthCheckValueNameC`

Predefined value names for HealthCheckInfo objects.

| Property | Type | Description |
|----------|------|-------------|
| `DURATION_OF_CHECKINSORD` | string | Duration of checkinSord calls. |
| `DURATION_OF_CHECKOUTSORD` | string | Duration of checkoutSord calls. |
| `DURATION_OF_IX_METHOD_CALLS` | string | Duration of IX-method calls. |
| `DURATION_OF_SEARCH_QUERY` | string | Search Task duration. |
| `DURATION_OF_SQL_QUERY` | string | Duration of SQL queries. |
| `DURATION_OF_WORKFLOW_FORWARDING` | string | Duration of Workflow forwarding. |
| `DYNAMIC` | string | Name of dynamically evaluated values starts with this prefix. / |
| `FREE_SPACE_OF_SQL_SERVER` | string | Freier Speicher SQL Server. |
| `NB_OF_CHECKINSORD` | string | Number of checkinSord calls. |
| `NB_OF_CHECKOUTSORD` | string | Number of checkoutSord calls. |
| `NB_OF_DOCUMENTS` | string | Number of logically documents. / |
| `NB_OF_DOCUMENT_FILES` | string | Number of document files (resp. number of document versions). / |
| `NB_OF_DOCUMENT_FILES_WITHOUT_BACKUP` | string | Number of logically documents without backup. / |
| `NB_OF_DOCUMENT_FILES_WITH_BACKUP` | string | Number of document files with backup. / |
| `NB_OF_FAILED_LOGINS` | string | Number of failed logins. Due to wrong name or password. / |
| `NB_OF_GARBAGE_COLLECTIONS` | string | Number of Garbage Collections. |
| `NB_OF_IX_METHOD_CALLS` | string | Number of IX-method calls. |
| `NB_OF_SESSIONS` | string | Number of current sessions. |
| `NB_OF_SUCCESSFUL_LOGINS` | string | Number of successful logins. the full number of attempted logins, whether successful or not is the sum of successful and failed logins. |
| `SIZE_OF_USED_JAVA_HEAP` | string | Java Heap Size. |
| `STATUS_OF_VERSIONS` | string | Version status. |
| `TOTAL_SIZE_OF_DOCUMENT_FILES` | string | Total size of document files (resp. document versions). / |

#### `HealthCheckValueOperation`

Defines the operation to process when updating a value.

#### `HistogramAggregationQueryParams`

Defines parameters to run an aggregation of type "Histogram" on numeric values (a multi-bucket-aggregation). This aggregation query allows sub-aggregations.

| Property | Type | Description |
|----------|------|-------------|
| `extendedBounds` | DoubleRangeValue | Sets optional extended bounds if parameter minDocCount equals to zero. Explanation: By default the histogram returns all the buckets within the range  |
| `hardBounds` | DoubleRangeValue | The optional hard_bounds is a counterpart of extended_bounds and can limit the range of buckets in the histogram. It is particularly useful in the cas |
| `interval` | DoubleSingleValue | Specifies the width of generated buckets. The interval must be greater than zero. Important: The generated buckets include the lower bound and exclude |
| `minDocCount` | integer | If minDocCount = 0, the response will fill gaps in the histogram with empty buckets. It is possible to change that and request buckets with a higher m |
| `missingValue` | DoubleSingleValue | The optional missingValue parameter defines how documents that are missing a value should be treated. By default they will be ignored but it is also p |
| `offset` | DoubleSingleValue | Provides an optional offset to change the start value of each bucket by the specified positive offset. For example, when using an interval of 10, buck |
| `order` | AggregationOrderE | The optional order buckets are retrieved. By default, the histogram aggregation orders buckets by their key ascending. If this value is omitted, the d |
| `subAggregations` | MapToAggregationQuery | Inner aggregations of this aggregation. / |

#### `HistogramAggregationResult`

The result object of a histogram aggregation on numeric values. It consists mainly of buckets and within its inner aggregations results (sub-aggregations).

| Property | Type | Description |
|----------|------|-------------|
| `buckets` | ListOfBucket | The result buckets. / |

#### `HtCloudData`

@since 11.00.000.006 /

| Property | Type | Description |
|----------|------|-------------|
| `hashTagNameCloud` | HashMapToInteger |  |

#### `HtCloudInfo`

Currently unused.

#### `HttpRequestInfo`

This class contains information from the HttpServletRequest received by the Indexserver servlet

| Property | Type | Description |
|----------|------|-------------|
| `cookies` | array | HTTP Cookies / |
| `headers` | array | This class contains information from the HttpServletRequest received by the Indexserver servlet |
| `requestParams` | array | Request parameters. / |
| `requestURI` | string | Value of the request URI. HttpServletRequest.getRequestURI() / |
| `requestURL` | string | Value of the request URL. HttpServletRequest.getRequestURL() / |

#### `HttpResponseInfo`

This class contains information for the HttpServletResponse object to be sent by the Indexserver servlet.

| Property | Type | Description |
|----------|------|-------------|
| `contentType` | string | This class contains information for the HttpServletResponse object to be sent by the Indexserver servlet. |
| `responseString` | string | Response text. Written to HttpServletResponse.getOutputStream() / |

#### `IXEventBusHandler`

Handler interface for event bus events.

#### `IXExceptionC`

This class contains constant definitions for Indexserver error numbers used in Indexserver exceptions. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `ACCESS_DENIED` | integer | Access to the specified object was denied, there are rights missing. / |
| `ALREADY_EXISTS` | integer | Specified object to be created already exists. / |
| `AUTHENTICATION_FAILED` | integer | User authentication failed |
| `FAILED_TO_DELETE_PACKAGE` | integer | EIX-2040: Specified package can not be deleted. |
| `FAILED_TO_DELETE_PACKAGE_LEVEL` | integer | EIX-2647: Specified package level can not be deleted. |
| `INTERNAL` | integer | Internal error. / |
| `INVALID_CRYPT_KEY` | integer | Encryption key must be set before documents can be encrypted. / |
| `INVALID_LICENSE` | integer | License key is invalid. |
| `INVALID_PARAM` | integer | Invalid parameter was given. / |
| `INVALID_SESSION` | integer | Session is not (or no longer) valid. / |
| `LICENSE_LIMITATION` | integer | EIX-3418: Error related to the limits imposed by the license. |
| `LOCKED` | integer | Specified data is locked. / |
| `NOT_EMPTY` | integer | Specified data could not be found. / |
| `NOT_FOUND` | integer | Specified data could not be found. / |
| `NOT_IX` | integer | Not a ELO IX Exception / |
| `PASSWORD_DENIED` | integer | The given password violates the password rules. The passord rules are stored in the user profile value `UserProfileC#KEY_PASSWORD_RULES`. |
| `PROHIBITED_OPERATION` | integer | The called function cannot be executed on this object |
| `SCRIPT_ERROR` | integer | An error thrown in a script file is passed to the client application with this error code. E.g. [ELOIX:6000] "Message text thrown in script". / |
| `SERVER_ERROR` | integer | Problem in the server configuration. / |
| `SYNTAX_ERROR` | integer | Syntax error e.g. in search request. / |
| `TEMP_PROBLEM` | integer | Temporarily problem, a later try should succeed. / |
| `TEMP_PROBLEM_OLD` | integer | Temporarily problem, a later try should succeed. The value of TEMP_PROBLEM must be changed in IX 8.00.054, because the current client libraries recogn |
| `TIMEOUT` | integer | Request timed out. EIX-3140 |
| `UNABLE_TO_TAKE_OVER_ASPECT_OBJECTS` | integer | Can not take over aspect objects. |
| `UNSUPPORTED_FUNCTION` | integer | Function is not currently supported. / |
| `UNSUPPORTED_FUNCTION_SINCE` | integer | Since version x, the function is no longer supported. |
| `UNSUPPORTED_PROTOCOL_VERSION` | integer | Unsupported protocol version. This error is thrown, if the protocol version cannot be negotiated. A reason for this can be different major release ver |

#### `IXExceptionData`

This class describes an exception that can occur during the execution of an Index server function. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `callId` | string | String containing the ClientInfo.callId for the ClientInfo object. This is given to the function which triggered/caused the error. / |
| `details` | string | Detail text for the exception. / |
| `exceptionType` | integer | This is the type of exception. This is one of the constants from IXExceptionC. |
| `message` | string | The error message text for the exception. / |
| `ticket` | string | Ticket given to the function. / |

#### `IXServerEvents`

The Indexserver fires this events while processing API calls. Event handler functions can be written in JavaScript and their script files have to be stored below the archive folder "Administration/Indexserver Scripting Base". The first level of entries in "Administration/Indexserver Scripting Base" consists of the mandatory folder "_ALL" and optional folders that are named like the Indexserver instances. An Indexserver instance name is usually the computer name on which the Indexserver is runnin

#### `IXServerEventsC`

| Property | Type | Description |
|----------|------|-------------|
| `STREAM_VERSION` | string | Version information used in serialization with IxDataStream / |

#### `IXServerEventsContext`

Execution context of server events. An object of this class is passed to every server event and registered function. On the server side, it can be casted to IObjectFactory to retrieve helper objects for access checking, conversion of date values and numeric values, etc. /

| Property | Type | Description |
|----------|------|-------------|
| `ADMIN_CONTEXT` | IXServerEventsContext | This constant can be used in plugins to obtain a ScriptObjectFactory for the internal Indexserver session. |
| `ci` | ClientInfo | ClientInfo object including session ticket / |
| `clientComputer` | string | Parameter clientComputer from login function. |
| `sessionOptions` | MapToString | SessionOptions associated to this connection. |
| `url` | string | Constructor with initialization. Used to create ADMIN_CONTEXT. |
| `user` | UserInfo | Current user / |

#### `IXServicePortC`

Constants for options and classes used by Indexserver. /

| Property | Type | Description |
|----------|------|-------------|
| `ACCESS` | AccessC | Constants for access rights. |
| `ACL_ITEM` | AclItemC | Constants for access control lists. |
| `ACTION` | ActionC | Constants for feed actions. |
| `ACTIVITY` | ActivityC | Constants for Activities |
| `ACTIVITY_PROJECT` | ActivityProjectC | Constants for Activity project options. / |
| `ADMIN_MODE` | AdminModeC | Constants for the administration mode. |
| `ALERT` | AlertC | Constants for Alerts (messages). |
| `ANY` | AnyC | Constants for class Any. |
| `ARCHIVE_STATISTICS_OPTIONS` | ArchiveStatisticsOptionsC | Constants for getArchiveStatistics |
| `ARCHIVING_MODE` | ArchivingModeC | Archiving modes like version controlled, read-only,... / |
| `ASPECT` | AspectC | Constants for aspects. |
| `ASPECT_ASSOC` | AspectAssocC | Constants for aspect associations. |
| `ASPECT_LINE` | AspectLineC | Constants for aspect index lines. |
| `CHECKIN_USERS` | CheckinUsersC | Options for the checkinUsers function. |
| `CHECKOUT_USERS` | CheckoutUsersC | Options for the checkoutUsers function. |
| `CLIENT_INFO` | ClientInfoC | Constants (options) for {@link ClientInfo#options}. |
| `COLOR` | ColorDataC | Constants (options) for `ClientInfo#options`. |
| `CONFIG_FILE` | ConfigFileC | Constanst for ConfigFile. |
| `COPY_SORD` | CopySordC | Constants (options) for the copySord function. |
| `COUNTER_INFO` | CounterInfoC | Constants for CounterInfo. |
| `CRYPT_INFO` | CryptInfoC | Constants for CryptInfo. |
| `DOCMASK_INHERIT` | DocMaskInheritC | Constants for storage mask inheritance info. |
| `DOC_MASK` | DocMaskC | Constants for storage masks. |
| `DOC_MASK_LINE` | DocMaskLineC | Constants for storage mask index lines. |
| `DOC_MASK_LINE_TEMPLATE` | DocMaskLineTemplateC | Constants for storage mask index line templates. |
| `DOC_VERSION` | DocVersionC | Constants for document or attachment version history. |
| `EDIT_INFO` | EditInfoC | Constants for editing indexing information and documents. |
| `ELO_IX_OPT` | EloIxOptC | Constants for Indexserver options. |
| `EVENT_BUS` | EventBusC | Constants for event busses. |
| `EXPORT_OPTIONS` | ExportOptionsC | Export options constants. / |
| `E_SEARCH_PARAMS` | ESearchParamsC | Constants for ESearchParams.searchIn |
| `FEED` | FeedC | Constants for document feed. |
| `FILE_DATA` | FileDataC | Constants for FileDataC. |
| `FIND_ACTIONS_INFO` | FindActionsInfoC | Constants for `de.elo.ix.client.feed.FeedService#findFirstActions(ClientInfo, de.elo.ix.client.feed.FindActionsInfo, int, de.elo.ix.client.feed.Action |
| `FIND_DIRECT` | FindDirectC | Constants for the class FindDirect. |
| `FULLTEXT_CONFIG` | FulltextConfigC | Constanst for the fulltext configuration. |
| `ICON` | IconC | Constants for the icons. |
| `IMPORT_OPTIONS` | ImportOptionsC | Import options constants. / |
| `INDEXVALUE` | IndexValueC | Constants for IndexValues. |
| `INVALIDATE_CACHE` | InvalidateCacheC | Constants for function invalidateCache. |
| `IXEXCEPTION` | IXExceptionC | Error numbers used in Indexserver exceptions. / |
| `KEYWORD` | KeywordC | Keyword constants. |
| `LINK_SORD` | LinkSordC | Constants for linkSords |
| `LOCK` | LockC | Constants to lock and unlock data against concurrent modification. |
| `MAP_CONFIG` | MapDomainC | Constants for MapDomain, checkoutMap etc. |
| `MAP_DATA` | MapDataC | Constants for MapData |
| `MAP_DOMAIN` | MapDomainC | Constants for MapDomain, checkoutMap etc. |
| `MAP_HIST` | MapHistC | Constants for class MapHist. |
| `NAV_INFO` | NavigationInfoC | Constants for navigation information. |
| `NOTE` | NoteC | Note. |
| `NOTE_FREEHAND` | NoteFreehandC | Constants for NoteFreehand |
| `NOTE_TEMPLATE` | NoteTemplateC | Constants for NoteTemplate |
| `OBJ_KEY` | ObjKeyC | Change information for the replication module. |
| `OCR_INFO` | OcrInfoC | Constants for OcrInfoC. |
| `ORG_UNIT_INFO` | OrgUnitInfoC | Constants for OrgUnitInfo. |
| `PACKAGE` | PackageC | Constants for the package. |
| `PACKAGE_DATA` | PackageDataC | Constants for the packages. |
| `PACKAGE_LEVEL` | PackageLevelDataC | Constants for the package level. |
| `PREVIEW_IMAGE_INFO` | PreviewImageInfoC | Constants for preview image info. |
| `PROCESS_INFO` | ProcessInfoC | Constants for process information |
| `PUBLIC_DOWNLOAD` | PublicDownloadC | Constants for public download. |
| `REMINDER` | ReminderC | Relations. |
| `REPL_SET_NAME` | ReplSetNameC | Replication history. |
| `REPORT` | ReportC | Constants for report. / |
| `REPORT_INFO` | ReportInfoC | ReportInfo constants including report action codes. |
| `REPORT_MODE` | ReportModeC | Constants for report modes (no, limited, verbose, full). / |
| `REPORT_OPTIONS` | ReportOptionsC | Constants for report options containing report erp codes |
| `RESOLVE_RIGHTS` | ResolveRightsResultC | Constants for resolving rights. |
| `SEARCH_MODE` | SearchModeC | Constants for find options. |
| `SEARCH_TERMS` | SearchTermsC | Constants for `IXServicePortIF#getSearchTerms(ClientInfo, FindInfo, int)`. |
| `SERVER_INFO_DM` | ServerInfoDMC | Constants for the class ServerInfoDM. |
| `SERVER_STATE` | ServerStateC | Constants for server state providing the status of server modules. / |
| `SESSION_OPTIONS` | SessionOptionsC | Constants for session options. |
| `SORD` | SordC | Constants for the indexing information (Sord object). |
| `SORD_HIST` | SordHistC | Constants for sord history. |
| `SORD_HIST_KEY` | SordHistKeyC | Constants for sord history entries. |
| `SORD_TYPE` | SordTypeC | Constants for sord type. |
| `SORT_ORDER` | SortOrderC | Sort orders like manually, alphabetically, ... / |
| `STORE_INFO` | StoreInfoC | Constants for store info. |
| `STREAM_VERSION` | string | Version information used in binary serialization. / |
| `SUBSCRIPTION` | SubscriptionC | Constants for Subscription |
| `SUBSTITUTION` | SubstitutionC | Constants for Substitution |
| `SUBS_INFO` | SubsInfoC | Constants for SubsInfo. |
| `TAKE_NODE` | WFTakeNodeC | Constants for take node. / |
| `THESAURUS` | ThesaurusC | Constants for thesaurus. / |
| `TRANSLATE_TERM` | TranslateTermC | Constants for translate term. |
| `USER_INFO` | UserInfoC | Constants for user information. |
| `USER_PROFILE` | UserProfileC | Constants for user profile. |
| `USER_TASK_PRIORITY` | UserTaskPriorityC | Priority constants. / |
| `USER_TASK_SORT_ORDER` | UserTaskSortOrderC | Sort order used when collecting tasks. / |
| `VT_DOC` | VtDocC | Constants for the control of the fulltext service. / |
| `WORKFLOW` | WFDiagramC | Constants for Workflows |
| `WORKFLOW_EXPORT_OPTIONS` | WorkflowExportOptionsC | Constants for function `IXServicePortIF#exportWorkflow(ClientInfo, WorkflowExportOptions)`. |
| `WORKFLOW_NODE` | WFNodeC | Constants for workflow nodes |
| `WORKFLOW_NODE_ASSOC_TYPE` | WFNodeMatrixC | Constants for workflow node association types used by WFNodeMatrix |
| `WORKFLOW_NODE_HISTORY` | WFNodeHistoryC | Constants for workflow history. |
| `WORKFLOW_TYPE` | WFTypeC | Constants for workflows / |
| `WORKFLOW_VERSION` | WFVersionC | Constants for WFVersion. |

#### `IXServicePortIF`

#### `Icon`

This class defines an icon.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | TStamp |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `contentType` | string | Content Type |
| `data` | FileData | Icon data. |
| `deleted` | boolean | TStamp / / {{elm: TStamp String tstamp}} protected String TStamp; Timestamp of this object's last export by the replication. / / {{elm: TStampSync Str |
| `guid` | string | GUID |
| `id` | integer | GUID / / {{elm: Guid String guid}} protected String guid; User ID that holds a lock on this object. If -1, the object is unlocked. / / {{elm: LockId i |
| `lockId` | integer | User ID that holds a lock on this object. If -1, the object is unlocked. |
| `maxEdgeLength` | integer | Edge length in pixels. 0 would then correspond to scalable. |
| `name` | string | Icon name / |
| `packageName` | string | Package name. |

#### `IconC`

Constants related to class Icon .

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | IconZ | Read or write all elements. / |
| `mbOnlyLock` | IconZ | Only lock or unlock / |

#### `IconDataC`

<p>Bit constants for members of Icon</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO 

#### `IconZ`

This class encapsulates the constants of the IconC class.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the IconC class. / |

#### `IdName`

Contains an numeric ID value, a GUID value in string format and a name. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `displayName` | string | Localized name. |
| `guid` | string | GUID. / |
| `id` | integer | Numeric ID. / |
| `name` | string | Name. / |

#### `ImportOptions`

Internal class.

| Property | Type | Description |
|----------|------|-------------|
| `conflictHandling` | ConflictHandlingE |  |
| `packagesImported` | boolean | Import packages. |
| `uploadStream` | BStreamReference |  |

#### `ImportOptionsC`

Defines the Options of an Import. Each Option is represented by one bit. Several Options can be put together by a bit-logic and. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `CREATE_SEPARATE_STRUCTURE` | string | Import all data in a new structure. / |
| `GUIDS_KEEP` | string | Keep guids on import, generate new guid if guid is already used. / |
| `GUIDS_KEEP_AND_SKIP` | string | import only guids that are not already used. / |
| `GUIDS_NEW` | string | generate new guids during import. / |
| `GUIDS_SCRIPT` | string | Return constant GUIDS_SCRIPT. |
| `IMPORT_KEYWORDS` | string | Import keywords |
| `KEEP_FILING_DATE` | string | Reserved |
| `USE_EXPORTED_PATH` | string | Use original filing-path for import (original path of exporting archive was saved during export) / |
| `USE_PARENT_ACL` | string | Use parent's ACL in archive |

#### `IndexSearchDoubleValue`

This class represents a condition to filter aspect data of type `IndexValueC#TYPE_DOUBLE` in the database.

| Property | Type | Description |
|----------|------|-------------|
| `operand` | number | Value on the right side of the operation. The left side implicitly is the value in the database. / |
| `operator` | IndexSearchOperator | Operator for this search condition |

#### `IndexSearchFixedPointNumberValue`

This class represents a condition to filter aspect data of type `IndexValueC#TYPE_FIXED_POINT_NUMBER` in the database.

| Property | Type | Description |
|----------|------|-------------|
| `operand` | string | Value on the right side of the operation (representation as String). The left side implicitly is the value in the database. / |
| `operator` | IndexSearchOperator | Operator for this search condition |

#### `IndexSearchIntegerValue`

This class represents a condition to filter aspect data of type `IndexValueC#TYPE_INT` in the database.

| Property | Type | Description |
|----------|------|-------------|
| `operand` | integer | Value on the right side of the operation. The left side implicitly is the value in the database. / |
| `operator` | IndexSearchOperator | Operator for this search condition |

#### `IndexSearchOperator`

The constants in this class define the supported operations for conditions when searching for aspect objects in the database.

#### `IndexSearchStringValue`

This class represents a condition to filter aspect data that is not of type `IndexValueC#TYPE_INT` or `IndexValueC#TYPE_DOUBLE` or `IndexValueC#TYPE_FIXED_POINT_NUMBER` in the database.

| Property | Type | Description |
|----------|------|-------------|
| `operand` | string | Value on the right side of the operation. The left side implicitly is the value in the database. / |
| `operator` | IndexSearchOperator | Operator for this search condition |

#### `IndexSearchValue`

This class is used to search for index values in aspect objects. Regardless of whether the search-mode is set to `SearchModeC#OR`, all of the conditions defined in this class must be met. Please not that you must use the correct field according to the aspect's line type. The Indexserver will not evaluate other fields. That means that if the aspect's line type is `AspectLineC#TYPE_DOUBLE`, the Indexserver will look at `#doubleValue` and `#doubleValues` only.

| Property | Type | Description |
|----------|------|-------------|
| `doubleValue` | IndexSearchDoubleValue | A single `IndexSearchDoubleValue`. Set this field if you only have a single condition for this line. This field is for convenience only. The Indexserv |
| `doubleValues` | ListOfIndexSearchDoubleValue | `List` of conditions that all must be fulfilled when searching for double values in aspect objects. The Indexserver will evaluate this field only if t |
| `fixedPointNumberValue` | IndexSearchFixedPointNumberValue | A single `IndexSearchFixedPointNumberValue`. Set this field if you only have a single condition for this line. This field is for convenience only. The |
| `fixedPointNumberValues` | ListOfIndexSearchFixedPointNumberValue | `List` of conditions that all must be fulfilled when searching for fixedPointNumber values in aspect objects. The Indexserver will evaluate this field |
| `intValue` | IndexSearchIntegerValue | A single `IndexSearchIntegerValue`. Set this field if you only have a single condition for this line. This field is for convenience only. The Indexser |
| `intValues` | ListOfIndexSearchIntegerValue | `List` of conditions that all must be fulfilled when searching for integer values in aspect objects. The Indexserver will evaluate this field only if  |
| `stringValue` | IndexSearchStringValue | A single `IndexSearchStringValue`. Set this field if you only have a single condition for this line. This field is for convenience only. The Indexserv |
| `stringValues` | ListOfIndexSearchStringValue | `List` of conditions that all must be fulfilled when searching for string values in aspect objects. The Indexserver will evaluate this field only if t |

#### `IndexServerForArchive`

Association between Indexserver URL and archive name. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `arcName` | string | Archive name. / |
| `url` | string | Index Server URL. / |

#### `IndexValue`

This class is a container for one value of a serializable type. It represents the value of an index line in aspect objects.

| Property | Type | Description |
|----------|------|-------------|
| `colorId` | integer | Value of an existing `ColorData#id`. This field is read-only and valid only for `IndexValue`s of type `IndexValueC#TYPE_STATUS`. The Indexserver sets  |
| `displayData` | string | Human readable representation of value. This member is read-only and might not be set in server-side events. For index fields of type `DocMaskLineC#TY |
| `doubleValue` | number | Double value. |
| `iconId` | integer | Value of an existing `Icon#id`. This field is read-only and valid only for `IndexValue`s of type `IndexValueC#TYPE_STATUS`. The Indexserver sets this  |
| `intValue` | integer | Integer value. |
| `stringValue` | string | String value. This internal field is shared between several types. |
| `type` | integer | Sets the type to `IndexValueC#TYPE_STRING`. If you want to get another value type, use the constructor with type parameter. |

#### `IndexValueC`

This class defines the constants for the type member in IndexValue.

| Property | Type | Description |
|----------|------|-------------|
| `TYPE_DOUBLE` | integer |  |
| `TYPE_FIXED_POINT_NUMBER` | integer | @since 23.02.000.005 / |
| `TYPE_INT` | integer |  |
| `TYPE_ISO_DATE_ONLY` | integer | @since 21.00.000.000 / |
| `TYPE_ISO_DATE_TIME` | integer | @since 21.00.000.000 / |
| `TYPE_RELATION` | integer | @since 21.00.000.019 / |
| `TYPE_STATUS` | integer | @since 21.00.000.010 / |
| `TYPE_STRING` | integer |  |
| `TYPE_TIME` | integer | @since 23.02.000.002 / |
| `TYPE_USER` | integer | @since 21.02.000.007 / |

#### `InheritKeywordingResult`

Return values for server event `IXServerEvents#onInheritKeywording`.

#### `IntListValue`

A list of integer values which is joined by AND or OR depending on andOperator . Defaults to an OR-disjunction.

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Connective of list elements (default is OR (=false) ). / |
| `valueList` | ListOfIntValue | A list of integer values which is joined by AND or OR depending on andOperator . / |

#### `IntRangeValue`

Class to commit a range filter of integer values. To perform an open range query (e.g. from now to infinite), only submit either a value for from or to

| Property | Type | Description |
|----------|------|-------------|
| `from` | IntSingleValue |  |
| `to` | IntSingleValue |  |

#### `IntSingleValue`

@since 10.99.999.023 /

| Property | Type | Description |
|----------|------|-------------|
| `value` | integer | integer value / |

#### `IntValue`

Class to commit a numeric int value to iSearch via QueryFilter.

#### `InvalidateCacheC`

Constants for cache invalidation. This constans can be used as bit combination in function invalidateCache.

| Property | Type | Description |
|----------|------|-------------|
| `ALL` | integer | Flag used to specify that all cached objects are invalid. / |
| `ASPECTS` | integer | Flag used to specify that the cached Aspect objects are invalid. |
| `CRYPT_INFO` | integer | Flag used to specify that the cached crypt keys are invalid. / |
| `DOCUMENT` | integer | Flag used to specify that a cached document (script) has changed. |
| `HASHTAGCOUNT` | integer | Flag used to specify that the hashtag count cache is invalid. |
| `ICONS` | integer | Invalidate cache of icons. |
| `INDEXFIELD_DISPLAY_DATA` | integer | Reserved. EIX-4119 / /public static final int VERIFY_FILE_UPLOAD = (1 << 21); Flag used to specify that the display data of references in index fields |
| `KEYS` | integer | Flag used to specify that the cached keys are invalid. / |
| `KEYWORD_LISTS` | integer | Notify about modified keyword lists. |
| `MARKERS` | integer | Flag used to specify that the cached ColorData objects are invalid. / |
| `MASKS` | integer | Flag used to specify that the cached DocMask objects are invalid. / |
| `NOTE_AND_COLD_IMAGES` | integer | Flag used to specify that the note and cold background images are invalid. / |
| `NO_FORWARD_TO_OTHER_IXS` | integer | Do not invalidate the caches of the other servers. |
| `OBJKEY_DISPLAY_DATA` | integer | Flag used to specify that the display data of references in ObjKeys have changed. Note: there is a newer name for this constant flag: INDEXFIELD_DISPL |
| `PATHS` | integer | Flag used to specify that the cached Path objects are invalid. / |
| `REPL_NAMES` | integer | Flag used to specify that the cached ReplName objects are invalid. / |
| `SESSION` | integer | Notify about modified session options or permissions. Reserved for internal usage. |
| `SORD_TYPES` | integer | Flag used to specify that the cached SordType objects are invalid. / |
| `SUBSCRIPTIONS` | integer | Flag used to specify that the subscription cache is invalid. |
| `TRANSLATE_TERMS` | integer | Flag used to specify that the translate terms are invalid. / |
| `USERS` | integer | Flag used to specify that the cached users are invalid. / |
| `WORKFLOWS` | integer | Flag used to specify that the workflow cache is invalid. |
| `WORKSPACE_ACLS` | integer | Invalidate cache of workspace/teamspace ACLs. |

#### `InvalidateCacheInfo`

This class contains the parameters for the API function invalidateCache2

| Property | Type | Description |
|----------|------|-------------|
| `flags` | integer | @since 11.00.000.056 |
| `guid` | string | A GUID to specify the modified object. |
| `id` | integer | A numeric ID to specify an object, workflow etc. If flags contains InvalidateC.WORKFLOWS this element defines the ID of the active workflow to be upda |
| `parameters` | ListOfInvalidateCacheInfoParam | @since 9.00.030.015 / |
| `ticket` | string | Refresh options of this session. |
| `value` | string | Optional value related to `#flags` member. If flags specifies `InvalidateCacheC#OBJKEY_DISPLAY_DATA`, this value contains the |
| `workflowCacheSyncInfos` | ListOfWFCacheSyncInfo | Data for workflow cache synchronisation. |

#### `InvalidateCacheInfoParam`

ParamObject for InvalidateCacheInfo.

| Property | Type | Description |
|----------|------|-------------|
| `count` | integer | Parameter, depends on the purpose of this object. In case of InvalidateCacheC.HASHTAGCOUNT: Case 1: Increases count of corresponding Hashtag Case -1:  |
| `flag` | integer | Parameter, depends on the purpose of this object. Set flag to InvalidateCacheC.HASHTAGCOUNT to use for HashtagCountCache. In case of InvalidateCacheC. |
| `guid` | string | Default constructor. / |
| `objectValue` | ValueClass | Modified object. |

#### `InvalidateCacheResult`

This class contains the result of a invalidateCache2 call.

#### `JobState`

Objects of this class provide information on the state of any background processes. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `countErrors` | string | Error status information. / |
| `countEstimatedMax` | string | Estimated maximum amount. / |
| `countProcessed` | string | Progress status information. / |
| `countResult` | CountResult | Result of the count process. |
| `doCancelJob` | boolean | Tell the Indexserver to cancel the job. |
| `expires` | string | When the information expires (milliseconds): (jobEnd + expires &lt; current-date). / |
| `jobEnd` | string | End or termination of the job. |
| `jobGuid` | string | Job identifier. / |
| `jobName` | string | Thread name. / |
| `jobRunning` | boolean | Set to true while the job is being executed. / |
| `jobStart` | string | Start of job. |
| `lastGuid` | string | Status information for GUIDs. / |
| `lastID` | integer | Status information for integer IDs. / |
| `procInfo` | ProcessInfo | The standard process-by-SORD job list. / |
| `strMsg` | string | Job-defined message string. / |

#### `KeyInfo`

Contains information about a key object: ID and name. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | Key ID. / |
| `name` | string | Key name. / |

#### `KeyValue`

This class contains a name and an associated value. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `key` | string | Key or identifying name. / |
| `value` | string | Associated value. / |

#### `Keyword`

| Property | Type | Description |
|----------|------|-------------|
| `add` | boolean | Prefix the text of a child keyword with the text of this keyword. This member is interpreted in cookKeywords . The following relationship exists betwe |
| `children` | array | Child array. / |
| `colorId` | integer | Used to set the color of the Keyword. |
| `displayValue` | string | Only used in keywords for aspect lines with type = `AspectLineC#TYPE_STATUS`. This field contains the translated text of the status value (field `text |
| `enabled` | boolean | If true, this keyword can be used as a value for an index property. Otherwise its only purpose is to structure the keyword hierachy. |
| `iconId` | integer | Id of an icon for this `Keyword`. The id should have a representation at `IXServicePortIF#checkoutIcon(ClientInfo, CheckoutIconInfo, IconZ, LockZ)`. I |
| `id` | string | Keyword ID. Consists of: groupid + orderid, orderid begins with a ".". / |
| `raw` | boolean | The function cookKeyword() must be called for this keyword in order to use it for an index property. This is because it contains placeholders that mus |
| `text` | string | Keyword text. This term is assigned to an index property. The member raw should be checked before this term is used. This text can be translated into  |
| `textTranslationKey` | string | Translation key for text. |

#### `KeywordC`

| Property | Type | Description |
|----------|------|-------------|
| `KWID_CONFIDENTIALITY` | string | Root ID of keyword list used for confidentiality levels. |
| `KWID_STANDARD_LIST` | string | Root ID of standard keyword list. / |
| `KWID_USER_LIST` | string | Root ID of user keyword list. / |
| `KWID_VERSION` | string | Root ID of keyword list used for version numbers. / |
| `KWID_VERSION_COMMENT` | string | Root ID of keyword list used for version comments. / |
| `KWID_WORKFLOW` | string | Root ID of keyword list used for workflows. / |
| `MAX_CHILDREN` | integer | The maximum number of children per keyword. This value is valid for all keyword lists except the user keyword list ( KWID_USER_LIST ). The user keywor |
| `MAX_TREE_DEPTH` | integer | Maximum depth of a keyword tree. This value is valid for all keyword lists except the user keyword list ( KWID_USER_LIST ). The user keyword list migh |
| `PLACEHOLDER_COUNTER_BEGIN` | string | Placeholder for the value of the specified counter name. The counter name follows the place holder and is suffixed with an extra "%". E. g. text=PLACE |
| `PLACEHOLDER_COUNTER_END` | string | End of placeholder for counter name. |
| `PLACEHOLDER_DATE` | string | Root ID of keyword list used for confidentiality levels. |
| `PLACEHOLDER_DAY` | string | Placeholder for day of month (2 digits). |
| `PLACEHOLDER_MONTH` | string | Placeholder for month (2 digits). |
| `PLACEHOLDER_USER_NAME` | string | Placeholder for current user name. |
| `PLACEHOLDER_YEAR` | string | Placeholder for year (4 digits). |
| `SEPARATOR_ASPECTID_LINEKEY` | string | Do no longer use this field. |
| `SEPARATOR_GROUPID_FOR_ASPECTLINES` | string | Do no longer use this field. |
| `lnId` | integer | Maximum length of keyword ID. / |
| `lnRootId` | integer | Maximum length of a root keyword ID. If a new keyword list is checked in, the ID of the root keyword must not exceed this length. / |
| `lnText` | integer | Maximum length of keyword text. / |
| `mbEdit` | KeywordZ | The purpose of this constant object is to control the behavior of checkoutKeywords . Supplying it, checkoutKeywords will return the raw text (includin |
| `mbPreCookedText` | string | Return raw text in checkoutKeywords . Placeholders except counters are substituted. |
| `mbRawText` | string | Return raw text in checkoutKeywords . Placeholders are not substituted. |
| `mbView` | KeywordZ | The purpose of this constant object is to control the behavior of checkoutKeywords . Supplying it, checkoutKeywords will return substituted placeholde |

#### `KeywordList`

This class provides general informations for a keyword list.

| Property | Type | Description |
|----------|------|-------------|
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `children` | array | The keyword list entries. / |
| `deleted` | boolean | ID / / {{elm: Id String swlgroupid}} protected String id; GUID / / {{elm: Guid String swlguid}} protected String guid; Last modified, ISO - UTC Read-o |
| `displayName` | string | The display name of the keyword. This value is displayed in the label before the edit field. It  can be translated into reps. from the users language: |
| `guid` | string | GUID |
| `id` | string | ID |
| `lockId` | integer | ID of the user who holds a lock on the keyword list. |
| `nameTranslationKey` | string | Translation-keyword for {@link KeywordList#displayName}. |
| `packageName` | string | Package name of KeywordList |
| `tStamp` | string | Last modified, ISO - UTC Read-only. |
| `userId` | integer | ID of the user that has written the keyword list at last. Read-only. |
| `userName` | string | ID of the user that has written the keyword list at last. Read-only. / / {{elm: UserId int swluser}} protected int userId; Name of the user that has w |

#### `KeywordListC`

<p>Bit constants for members of KeywordList</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `KeywordZ`

This class encapsulates the constants of KeywordC. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from KeywordC class. / |

#### `KeywordsDynamicInfo`

This Class contains parameters for the IX call `IXServicePortIF#checkoutKeywordsDynamic(ClientInfo, KeywordsDynamicInfo)` . There are two ways to execute the script for dynamic keyword lists. According to the parameter in this class, the one way or the other is chosen. The first way is to specify `KeywordsDynamicInfo#sord` and `KeywordsDynamicInfo#maskLineFocus`. Then, the IX passes these parameters to the script via the script-function open(ec, sord, fieldName). The other parameters will be ove

| Property | Type | Description |
|----------|------|-------------|
| `aspectAssocFocus` | AspectAssoc | Only for sords with data organization based on aspects. At the client, set this value to the aspect association being currently in focus. This value d |
| `aspectLineFocus` | AspectLine | Only for sords with data organization based on aspects. At the client, set this value to the aspect line being currently in focus. This value determin |
| `mapData` | MapToString | Represents the input data of a form. The script to execute uses the values in this map to filter the resulting data set. |
| `mapLineFocus` | string | Represents the id of a field in a form. |
| `mapScriptName` | string | Determines the script to execute. This value has only an effect if sord and maskLineFocus are set to null. Setting this value requires to set the valu |
| `maskLineFocus` | DocMaskLine | Only for sords with data organization based on objkeys. At the client, set this value to the mask line that currently has the focus. This value determ |
| `ordinalFocus` | integer | Only for sords with data organization based on aspects. If aspectAssocFocus has a cardinality of `Cardinality#MANDATORY_MANY` or `Cardinality#OPTIONAL |
| `sord` | Sord | This value contains data gathered by the client. The contents of sord will be given to the script to execute. / |

#### `KeywordsDynamicResult`

The class KeywordsDynamicResult defines the return value of the IX call `IXServicePortIF#checkoutKeywordsDynamic(ClientInfo, KeywordsDynamicInfo)` .

| Property | Type | Description |
|----------|------|-------------|
| `columnProperties` | ListOfMapToString | List of column properties. The size of this list equals to header . If the value at position i is null, the client will use a default value for the pr |
| `header` | ListOfString | This list contains the column descriptions to be displayed as the header of the table at the client. The size of this list matches the amount of colum |
| `keyNames` | ListOfString | List of key names. The size of this list equals to header . In this list, columns without a key name are represented by null or an empty String. / |
| `message` | string | The executed script may provide additional informations to the client such as "Please fill field XYZ". Such informations are stored in the value messa |
| `moreResults` | boolean | Is true if there are more results. / |
| `table` | ListOfListOfString | This value contains the result set as a table. Each entry of the outer list represents a row in the table. Thus, the entry i of an inner list represen |
| `title` | string | A brief and succinctly description about the represented data. The script developer must provide a title, otherwise an exception is thrown. |

#### `LanguageConfig`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `allowedLangs` | string |  |
| `archiveLang` | string | @since 10.00.020.021 / |
| `languages` | string |  |
| `mapLanguageNames` | MapToString | @since 10.17.010.003 / |
| `nbOfLangs` | integer | @since 10.00.020.022 / |

#### `LdapConfig`

Configuration data for LDAP plugin.

| Property | Type | Description |
|----------|------|-------------|
| `READ_AUTO_CONFIG` | LdapConfig | Create a configuration. This symbol used as parameter for `LdapService#configure(de.elo.ix.client.ClientInfo, LdapConfig)` to create a configuration b |
| `READ_CONFIG` | LdapConfig | Read configuration. This symbol used as paramter for `LdapService#configure(de.elo.ix.client.ClientInfo, LdapConfig)` to read the current configuratio |
| `assignGroups` | boolean | If authentication succeeds, update the user's memberships in ELO groups. / |
| `createNewUser` | boolean | If authentication succeeds, create a new ELO user if she does not already exist. / |
| `domains` | ListOfDomain | List of configuration data for each domain. / |
| `enabled` | boolean | Enable/disable authentication via LDAP. |
| `name` | string | Configuration name. Optional configuration name. / |
| `notResponsibleForUserOrGroupIds` | SetOfString | List of user IDs, or user GUIDs, or group IDs (not group GUIDs) that cannot be authenticated by this UserDirectory. If the user passed in UserDirector |

#### `LdapService`

Configure access to LDAP server.

#### `License`

This class contains license information. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `backup` | boolean | Backup enabled. / |
| `cloud` | boolean | True when licensed for cloud |
| `cold` | boolean | COLD / |
| `demoVersion` | boolean | Demo version. / |
| `dispatchFolder` | boolean | Dispatch folder (Versendemappe) / |
| `domea` | boolean | DOMEA / |
| `emailOnly` | boolean | EMail / |
| `features` | array | Binary coded license information / |
| `fultext` | boolean | Fulltext enabled. / |
| `httpServer` | boolean | HTTP DocServer / |
| `indexServer` | boolean | Indexserver / |
| `licenseFileContent` | string | License file content. |
| `licenseOptions` | MapToString | License options as name-value pairs. |
| `licenseValid` | boolean | True, if license is valid. |
| `limitedIg` | boolean | Limited Internet Gateway / |
| `limitedVersion` | boolean | Limited version. / |
| `nbOfFulltextLangs` | integer | Number of languages for which linguistic processing can be used during fulltext indexing. |
| `nbOfIgLicenses` | integer | Number of ELO Internet Gateway users. / |
| `nbOfServerLicenses` | integer | Number of server licenses. / |
| `professional` | boolean | True for ELOprofessional / |
| `publicLicenseKey` | string | Public part of key pair supplied for license download. |
| `replication` | boolean | Replication enabled. / |
| `sapALink` | boolean | SAPALINK interface / |
| `serno` | string | License key. / |
| `signature` | boolean | SIGNATURE / |
| `stack` | boolean | STACK / |
| `tobid` | boolean | Tobit / |
| `validityDate` | string | License is valid until this date. This valid is null if the license does not expire. |
| `xmlImport` | boolean | XML-Import / |

#### `LicenseC`

Constants related to licensing. EIX-4671

| Property | Type | Description |
|----------|------|-------------|
| `ALLOWED_CHARS_GROUP_LICENSE_KEY` | string | Pattern for allowed characters within a group license key. EIX-5035 Note: A comma is explicitly not allowed because it is used as a delimiter in DB fi |
| `CONFIGURE_LICENSE_DOWNLOAD` | string | Control value used to download the license again. Pass this value to `IXServicePortIF#configureLicense(ClientInfo, String)` to download the license fr |
| `MAX_LENTGH_GROUP_LICENSE_KEY` | integer | Maximum allowed length of a single local group license key. |

#### `LicenseCounter`

License counters of a user.

| Property | Type | Description |
|----------|------|-------------|
| `DELETED_USER` | integer |  |
| `FREE_USER` | integer |  |
| `FULL_USER` | integer |  |
| `IX_USER` | integer |  |
| `JAVA_CLIENT` | integer |  |
| `WINWOS_CLIENT` | integer |  |
| `accessMap` | HashMapToInteger | License counters. Counter 0 contains the number of writes from a full client. / |
| `countType` | integer |  |
| `disabled` | boolean | True, if the user has been inactive for 30 days. / |
| `sumAccess` | integer |  |
| `userInfo` | UserInfo | User object. / |

#### `LicenseInfo`

License information to be checked with `IXServicePortIF#checkLicense(ClientInfo, LicenseInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `customerName` | string | Customer name. / |
| `licenseKey` | string | License key. / |
| `moduleName` | string | Module name. / |

#### `LicenseReport`

License report data evaluated by AdminConsole.

| Property | Type | Description |
|----------|------|-------------|
| `counterList` | ListOfLicenseCounter | list of counter delegated from am / |
| `deletedUser` | integer |  |
| `freeUser` | integer |  |
| `fullUser` | integer |  |
| `ixUser` | integer |  |
| `licenseType` | LicenseType | License type. |
| `nbOfIgLicenses` | integer | Number of ELO Internet Gateway users. This field is not used anymore. / |
| `nbOfServerLicenses` | integer | Number of server licenses. This field is not used anymore. / |
| `reportMode` | integer | report period / access mode. |
| `serno` | string | License key. This field is not used anymore. / |

#### `LicenseResult`

Result of license check. An object of this class is returned by `IXServicePortIF#checkLicense(ClientInfo, LicenseInfo)` if the given license information is valid.

#### `LicenseType`

This enumeration defines constants for the license type. The license type is set during installation as production, test or development.

#### `LinkSordC`

Constants for linkSord(...). Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `CROSS_LINK` | LinkSordZ | Link each Sord to each other Sord. |
| `NOTHING` | LinkSordZ | Used as standard in linkSord(...). |
| `PAIR` | LinkSordZ | Link Sord objects in PAIR. |

#### `LinkSordInfo`

Additional parameters for function `IXServicePortIF#linkSords2`

| Property | Type | Description |
|----------|------|-------------|
| `linkPermanent` | boolean | If true, Sords will be linked permanently. The new links between the provided Sords cannot be deleted. / |

#### `LinkSordZ`

This class encapsulates the constants of LinkSordC. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the LinkSordC class. / |

#### `ListOfAclItem`

Type: array

#### `ListOfAction`

Type: array

#### `ListOfActionHistory`

Type: array

#### `ListOfArchivValue`

Type: array

#### `ListOfAspect`

Type: array

#### `ListOfAspectAssoc`

Type: array

#### `ListOfAspectInfo`

Type: array

#### `ListOfAspectLine`

Type: array

#### `ListOfBucket`

Type: array

#### `ListOfConfigRecord`

Type: array

#### `ListOfContextTerm`

Type: array

#### `ListOfContextTermQuery`

Type: array

#### `ListOfContextTermResults`

Type: array

#### `ListOfDateValue`

Type: array

#### `ListOfDocMask`

Type: array

#### `ListOfDocMaskInherit`

Type: array

#### `ListOfDomain`

Type: array

#### `ListOfDoubleRangeValue`

Type: array

#### `ListOfDoubleValue`

Type: array

#### `ListOfEActionType`

Type: array

#### `ListOfESNodeObj`

Type: array

#### `ListOfFeedPost`

Type: array

#### `ListOfFindResultSortSpecification`

Type: array

#### `ListOfFixedPointNumberValue`

Type: array

#### `ListOfHashTagRelation`

Type: array

#### `ListOfHealthCheckInfo`

Type: array

#### `ListOfIcon`

Type: array

#### `ListOfIndexSearchDoubleValue`

Type: array

#### `ListOfIndexSearchFixedPointNumberValue`

Type: array

#### `ListOfIndexSearchIntegerValue`

Type: array

#### `ListOfIndexSearchStringValue`

Type: array

#### `ListOfIndexSearchValue`

Type: array

#### `ListOfIntValue`

Type: array

#### `ListOfInteger`

Type: array

#### `ListOfInvalidateCacheInfoParam`

Type: array

#### `ListOfLicenseCounter`

Type: array

#### `ListOfListOfString`

Type: array

#### `ListOfLong`

Type: array

#### `ListOfMapToIndexValue`

Type: array

#### `ListOfMapToString`

Type: array

#### `ListOfNote`

Type: array

#### `ListOfObject`

Type: array

#### `ListOfPackageData`

Type: array

#### `ListOfPackageLevelData`

Type: array

#### `ListOfPluginInfo`

Type: array

#### `ListOfPublicDownload`

Type: array

#### `ListOfQueryObject`

Type: array

#### `ListOfResolveRightsResult`

Type: array

#### `ListOfServer`

Type: array

#### `ListOfSord`

Type: array

#### `ListOfSordPath`

Type: array

#### `ListOfSordType`

Type: array

#### `ListOfString`

Type: array

#### `ListOfStringValue`

Type: array

#### `ListOfSubsInfo`

Type: array

#### `ListOfSubstitution`

Type: array

#### `ListOfSubstitutionPeriod`

Type: array

#### `ListOfUserName`

Type: array

#### `ListOfUserProductClientType`

Type: array

#### `ListOfValueClass`

Type: array

#### `ListOfWFCacheSyncInfo`

Type: array

#### `LockC`

Constants to lock data against concurrent modification.

| Property | Type | Description |
|----------|------|-------------|
| `DOC` | LockZ | Lock or unlock document versions. Works like `LockC#YES` but is only valid at check*Sord() and check*Doc() respectively. |
| `FORCE` | LockZ | Lock or unlock regardless of whether the data is locked by another user. This requires main administration privileges in most cases. / |
| `IF_FREE` | LockZ | A lock is only set, if the record is unlocked. A lock request is refused too, if the record is already a lock by the current user. |
| `NO` | LockZ | Do not lock the requested record(s). / |
| `SORD` | LockZ | Lock or unlock the indexing information. Works like `LockC#YES` but is only valid at check*Sord() and check*Doc() respectively. |
| `YES` | LockZ | Lock or unlock. The lock is set, if the record is unlocked or locked by the current user. With respect to locking the indexing information (LockC.SORD |
| `bsetDOC` | string | @since 9.99.009.001 / |
| `bsetFORCE` | string |  |
| `bsetIF_FREE` | string |  |
| `bsetNO` | string |  |
| `bsetSORD` | string | @since 9.99.009.001 / |
| `bsetYES` | string |  |

#### `LockZ`

This class encapsulates the constants of the LockC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the LockC class. / |

#### `LoginResult`

Object returned when logging in to the IX. This class contains the information required after the login has been carried out. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `activeSubstitutions` | ListOfSubstitution | The current user's active substitution rules. This list contains substitution rules where the user substitutes someone as well as those where the user |
| `clientInfo` | ClientInfo | Constructor / |
| `ticketLifetime` | integer | Contains the lifetime of the ticket in seconds. The connection is terminated once this lifetime has expired. / |
| `user` | UserInfo | Contains the data detailling the user used to login to the IX. / |

#### `LoginScriptOptions`

Options for function `IXServerEvents#onBeforeLogin(IXServerEventsContext, String, LoginScriptOptions)`

| Property | Type | Description |
|----------|------|-------------|
| `clientName` | string | Unified Name for the client application. The value of this field must be one value of {`LoginScriptOptionsC`.CLIENT_NAME_*}. / |
| `techUser` | string | User name used for authentication. This member is only valid for run-as logins. It contains the name of the technical user used for authentication. |

#### `LoginScriptOptionsC`

Constants for `LoginScriptOptions`.

| Property | Type | Description |
|----------|------|-------------|
| `CLIENT_NAME_DESKTOP_LIGHT` | string | Desktop Plus. |
| `CLIENT_NAME_DESKTOP_PLUS` | string | Desktop Plus. |
| `CLIENT_NAME_DMS_DESKTOP` | string | DMS Desktop |
| `CLIENT_NAME_ELOAPP` | string | Constant for the name ELO applications. |
| `CLIENT_NAME_FULLCLIENT` | string | Constant for the name of the Windows/Java Client. |
| `CLIENT_NAME_INTEGRATION` | string | Integration client. |
| `CLIENT_NAME_LIMITED_WEB_CLIENT_D` | string | Web Client with limited access for special customer project. |
| `CLIENT_NAME_MOBILE_CLIENT` | string | Mobile client (Android, iOS) |
| `CLIENT_NAME_PARTNERAPP` | string | Constant for the name of partner applications. |
| `CLIENT_NAME_TASK` | string | Task client (a.k.a. Workflow Client). |
| `CLIENT_NAME_UNKNOWN` | string | Constant for the name of unknown type. |
| `CLIENT_NAME_WEBCLIENT` | string | Constant for the name of the Web and Mobile Client. |
| `CLIENT_NAME_WINDOWS_CLIENT` | string | Windows Client |
| `CLIENT_NAME_WORKFLOW_SAP` | string | Workflow Client für SAP ECM. |

#### `MapData`

This class represents a map which contains user defined key-value pairs.

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp / |
| `TStampSync` | string | EIX-3097 TimestampSync |
| `domainName` | string | Map domain name. An arbitary name or one of the predefined names in MapDomainC. |
| `guid` | string | GUID |
| `id` | string | Map ID. If the map belongs to a Sord ID, this value is equal to the member objId. |
| `items` | array | Map items. Since stream version 10.00.020.007, the items of this array can be cased to `MapValue`, in order to access BLOB data. |
| `lockId` | integer | User ID of the user that owns the lock on the map. If the map is not locked, this value is -1. / |
| `lockName` | string | User name of the user that owns the lock no the map. If the map is not locked, this value is an empty string. / |
| `mapItems` | MapToMapValue | Map items represented by class MapValue which gives access to BLOB values. |
| `objId` | integer | Object ID. The ID of the associated Sord object or 0, if the map does not belong to a Sord object. |

#### `MapDataC`

Constant class for MapData

| Property | Type | Description |
|----------|------|-------------|
| `lnBlob` | integer | Maximum length of blob value. 1048576 Bytes |
| `lnId` | integer | Maximum length of map id. / |
| `lnKey` | integer | Maximum length of map item key. / |
| `lnValue` | integer | Maximum length of map item value. / |

#### `MapDomain`

This class contains the information of a map domain. A map is a set of key value pairs and can be addressed by a map domain name and a map ID. All maps with the same domain name are stored in the same database tables. These maps are distinguished by their ID, which can be an arbitary string. A map can be attached to a Sord object by setting the map ID to the Sord ID. Attached maps are deleted, when the Sord object is finally deleted. Furthermore they can be copied with the Sord object.

| Property | Type | Description |
|----------|------|-------------|
| `copy` | boolean | This value is true, if the map items should be copied when the associated Sord object is copied. / |
| `history` | boolean | This value is true, if a history should be maintained for map items. A history is always available for `MapDomainC#DOMAIN_SORD` and `MapDomainC#DOMAIN |
| `name` | string | Map domain name. This can be a user definined name or one of the predefined names in MapDomainC. The value is internally used as part of a database ta |
| `replicate` | boolean | This value is true, if the map items should be replicated with the associated Sord object. / |

#### `MapDomainC`

This class defines constants for the predefined map tables.

| Property | Type | Description |
|----------|------|-------------|
| `DOMAIN_AL_OPTIONS` | string | Smart Link configuration map domain name. |
| `DOMAIN_AM_OPTIONS` | string | Map domain name for reading AM options. EIX-2061 |
| `DOMAIN_DM_OPTIONS` | string |  |
| `DOMAIN_ELOXC` | string | ELOxc configuration data. |
| `DOMAIN_FORM_BLOB_DOMAIN` | string | Form data map domain name. |
| `DOMAIN_FT_OPTIONS` | string |  |
| `DOMAIN_IX_OPTIONS` | string |  |
| `DOMAIN_SORD` | string |  |
| `DOMAIN_WORKFLOW_ACTIVE` | string |  |
| `DOMAIN_WORKFLOW_FINISHED` | string |  |

#### `MapDomainDataC`

<p>Bit constants for members of MapDomain</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `MapHead`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp. / |
| `TStampSync` | string | EIX-3097: TimeStampSync |
| `guid` | string | EIX-3097: TimeStampSync |
| `id` | string | Map id. / |
| `lockId` | integer | Lock status. -1: unlocked, &gt;=0 user-ID. / |
| `objId` | integer | Associated object ID or 0. / |

#### `MapHeadC`

<p>Bit constants for members of MapHead</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `MapHist`

Version history for maps. /

| Property | Type | Description |
|----------|------|-------------|
| `histGuid` | string | GUID of the SordHist object. / |
| `histItems` | array | An array of the keywording changes. / |
| `histSource` | integer | Identifies the application with which changes were made to the keywording. / |
| `mapGuid` | string | GUID of the map object. / |
| `mapId` | string | ID of the map object. / |
| `timeStampLocal` | string | Timestamp of the change in the timezone of the client. The format is JJJJ.MM.DD.hh.mm.ss / |
| `timeStampUTC` | string | Timestamp of the change in the timezone of the client, in UTC form. The format is JJJJ.MM.DD.hh.mm.ss / |
| `userId` | integer | The user who carried out the changes. / |
| `userName` | string | The name of the user who carried out the changes. / |
| `workStation` | string | The name of the computer from which the change was carried out. This is the parameter clientComputer which is provided by the ix.login function. / |

#### `MapHistC`

Element selectors for class MapHist.

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | MapHistZ | All members. / |
| `mbAllMembers` | string |  |
| `mbAllMembersNoItems` | string |  |
| `mbAllNoItems` | MapHistZ | All members but without `MapHist#histItems`. / |
| `mbHistItems` | string | Element selectors for class MapHist. |

#### `MapHistHeadC`

<p>Bit constants for members of MapHist</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `MapHistItem`

This class provides the version information for a map attribute that has been modified. /

| Property | Type | Description |
|----------|------|-------------|
| `blobValue` | FileData | BLOB value. |
| `histGuid` | string | @since 10.00.020.011 / / {{elm: protected ContentType String mapcontenttype}} |
| `key` | string | Map key. / |
| `value` | string | Map value. An empty value means, that the map item has been deleted. / |

#### `MapHistItemC`

<p>Bit constants for members of MapHistItem</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `MapHistZ`

Type: object, Properties: bset

#### `MapItem`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `blobData` | BStreamReference | Blob data. |
| `contentType` | string | Content Type. |
| `id` | string | Map id. / |
| `key` | string | Map key. / |
| `value` | string | Map value. / |

#### `MapItemC`

<p>Bit constants for members of MapItem</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `MapToAggregationQuery`

Type: object

#### `MapToAggregationResult`

Type: object

#### `MapToArrayListOfWFDiagram`

Type: object

#### `MapToArrayListOfWFNodeHistory`

Type: object

#### `MapToArrayOfbyte`

Type: object

#### `MapToAspectAssoc`

Type: object

#### `MapToAspectLine`

Type: object

#### `MapToBStreamReference`

Type: object

#### `MapToBValueClass`

Type: object

#### `MapToDocMask`

Type: object

#### `MapToFeed`

Type: object

#### `MapToFindByAspectValue`

Type: object

#### `MapToHashTag`

Type: object

#### `MapToIndexValue`

Type: object

#### `MapToInteger`

Type: object

#### `MapToListOfConfigRecord`

Type: object

#### `MapToListOfMapToIndexValue`

Type: object

#### `MapToListOfString`

Type: object

#### `MapToMapValue`

Type: object

#### `MapToNotification`

Type: object

#### `MapToOrgUnitInfo`

Type: object

#### `MapToString`

Type: object

#### `MapToSubscription`

Type: object

#### `MapToUserInfo`

Type: object

#### `MapToUserName`

Type: object

#### `MapToWFDiagram`

Type: object

#### `MapValue`

This class represents map values. A map value is either a string, stored in member `KeyValue#value` of the super class. Or a map value is a BLOB available in `#blobValue`.

| Property | Type | Description |
|----------|------|-------------|
| `blobValue` | FileData | BLOB value. / |

#### `MaskName`

Mask name object. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | Access mode for the current user. A combination of AccessC.LUR_* constants. |
| `barcodeMask` | boolean | Mask has a barcode definition. |
| `dataOrganisation` | integer | This member specifies how the index values are stored in database. |
| `displayName` | string | Translated name of this mask. This value is read-only and therefore ignored when changed and checked-in. Furthermore, the Indexserver always translate |
| `documentMask` | boolean | Mask can be used as storage mask for indexing. / |
| `folderMask` | boolean | Mask can be used as storage mask for folders. |
| `guid` | string | GUID |
| `id` | integer | Mask ID. / |
| `keywordingRelationAllowed` | boolean | Mask can be referenced from a DocMaskLine of type `DocMaskLineC#TYPE_RELATION`. If this mask has a data organisation `DocMaskC#DATA_ORGANISATION_ASPEC |
| `name` | string | Mask name. / |
| `nameTranslationKey` | string | Translation-keyword for `MaskName#name`. |
| `packageName` | string | Package name. |
| `region` | boolean | Sords of this mask establish a region within the repository tree. This flag is only valid for masks of data organisation `DocMaskC#DATA_ORGANISATION_A |
| `searchMask` | boolean | Mask can be used for searching. / |

#### `MasterDataE`

Enumeration for the master data

#### `MoveDocumentsInfo`

Parameter class of the function `IXServicePortIF#moveDocuments(ClientInfo, MoveDocumentsInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `endDate` | string | End date. |
| `sourcePathId` | string | ID of the source storage path. / |
| `startDate` | string | Start date. |
| `targetPathId` | string | ID of the target storage path. / |

#### `MyELOContent`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `actions` | array | Document feed actions. This array is filled by findFirst/findNextActions of the interface FeedService. The associated Feed objects are returned in the |
| `feeds` | MapToFeed | Document feeds. Feed objects mapped to their GUID. |
| `hashTagRelations` | ListOfHashTagRelation | HashTag Relations. / |
| `hashTags` | MapToHashTag | HashTags. HashTag Objects mapped to their HashTagGuid / |
| `notifications` | MapToNotification | Notifications. Notification objects mapped to their Notification.watchGuid / |
| `sords` | array | Array of sord objects. This member is set if sordC / |
| `subscriptions` | MapToSubscription | Subscriptions. Subscription objects mapped to their Subscription.watchGuid. / |
| `tasks` | array | Array of user tasks. |
| `workflows` | array | Array of WorkflowDiagrams |

#### `MyELOInfo`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `date` | string | Return Results only newer than the given date. / |
| `max` | integer | Maximum number of Results that should be returned by this call. |
| `notificationInfo` | FindNotificationInfo | FindInfo for FindFirstNotifications. `FindNotificationInfo`. / |
| `taskInfo` | FindTasksInfo | Info Object with search criteria that are required for locating a task (reminders, workflow tasks or activity). `FindTasksInfo`. / |
| `workflowInfo` | FindWorkflowInfo | Info Object with search criteria for selecting workflows. `FindWorkflowInfo`. / |

#### `MyELOService`

This interface provides functions to MyELO page.

#### `MyELOState`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `newFeed` | boolean | / |
| `newTask` | boolean | / |
| `newWorkflow` | boolean | / |
| `userGuid` | string | / |

#### `NavigationInfo`

NavigationInfo is used as traversal information for structured bulk operations restricting specific processsing, e.g. pooled jobs, to scalable amounts. It provides parameters controlling the traversal. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `findInfo` | FindInfo | Specify additional filters for the tree walk. Please note that specifying a custom findInfo always leads to a second search for each directory decreas |
| `ignoreDocuments` | boolean | ignore the navigation of documents / |
| `maxCount` | integer | maxCount is the overall maximum amount of visited nodes and is independent of successful processing. maxCount does not depend on successful processing |
| `maxDepth` | integer | The maximum depth of the tree walk. Passing maxDepth &lt; 1 turns off this limit. / |
| `maxSiblings` | integer | The maximum number of siblings for one tree level. This limit is most useful for ignoring the contents of large folders. Passing maxSiblings &lt; 1 wi |
| `startIDs` | array | The starting points for the tree walk. Interdepending nodes will only be traversed once. Providing null causes an invalid parameter exception, while u |

#### `NavigationInfoC`

Constants class for the NavigationInfo class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `MIN_NAV_DEPTH` | integer | The minimum depth for tree walks. / |
| `MIN_NAV_MAX_COUNT` | integer | The overall limit for any visited element. / |
| `MIN_NAV_SIBLINGS` | integer | The minimum amount of collected siblings. / |
| `SKIP_NAV_LIMIT` | integer | This constant is used to override the navigation limit. / |

#### `NotOperator`

This operator contains a single QueryObject which is excluded from the search. This means, a document is returned if the QueryObject is not present in the document.

| Property | Type | Description |
|----------|------|-------------|
| `queryFilter` | QueryFilter | A negated QueryObject. |

#### `Note`

This helper class inherits all members from NoteData and adds a static member to access the bit constants for the NoteData members. /

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp of the last change to the note. The format is JJJJ.MM.DD.hh.mm.ss / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `XPos` | integer | The position in the x axis when the note is displayed on a document in ELO. Taken from the top left corner of the document. For NoteC.TYPE_ANNOTATION_ |
| `YPos` | integer | The position in the Y axis when the note is displayed on a document in ELO. Taken from the top left corner of the document. |
| `access` | integer | Access rights for the current user. Read-only. |
| `acl` | string | Access control list. Only used for notes of type TYPE_ANNOTATION_MARKER. Set member aclItems=null on check in otherwise it is ignored. / |
| `aclItems` | array | The Note is deleted at this date. ClientInfo determines the Timezone. Is undefined if isDeleted() returns false. |
| `color` | integer | RGB value. Undefined for notes of type TYPE_ANNOTATION_STAMP and TYPE_ANNOTATION_NOTE_WITHFONT. |
| `createDateIso` | string | ISO encoded external (user defined) date. / |
| `deleteDateIso` | string | The Note is deleted at this date. ClientInfo determines the Timezone. <p>  Is undefined if isDeleted() returns false.  </p> |
| `deleted` | boolean | True if the note is deleted, otherwise false. / |
| `desc` | string | The text for the note. |
| `guid` | string | The GUID for the note. / |
| `height` | integer | The height of the note (y axis), when displayed on a document in ELO. |
| `id` | integer | The unique id for the note. / |
| `lockId` | integer | The ID of the user that holds the lock or -1, if the note is not locked. / |
| `lockName` | string | The user name that holds the lock or an empty string if the note is not locked. / |
| `noteFreehand` | NoteFreehand | Point information for a freehand line. Valid only for notes of type TYPE_ANNOTATION_FREEHAND and TYPE_ANNOTATION_HORIZONTAL_LINE. Either desc, noteTex |
| `noteImage` | NoteImage | Additional information for image stamps. Valid only for notes of type TYPE_ANNOTATION_STAMP. Either desc, noteText, noteImage or noteFreehand can be s |
| `noteText` | NoteText | Additional information for textual stamps. Valid only for notes of type TYPE_ANNOTATION_NOTE, TYPE_ANNOTATION_STAMP and TYPE_ANNOTATION_NOTE_WITHFONT. |
| `objId` | string | Object ID of the associated Sord object or any of the ID specifiers that are valid for checkoutSord too. Functions createNote and checkoutNotes return |
| `ownerId` | integer | The ID of the user who created the note. Administrators can set the ownerId to an arbitary user ID in checkinNotes. Set ownerName=&quot;&quot; in this |
| `ownerName` | string | The name of the user that has created the note. Administrators can set the ownerName to an arbitary user name in checkinNotes. Set ownerId=-1 in this  |
| `pageNo` | integer | The page number to which the note is attached. / |
| `type` | integer | The note type. |
| `width` | integer | Width ( x axis) of the note when displayed on a document in ELO. |

#### `NoteC`

Constants for notes. /

| Property | Type | Description |
|----------|------|-------------|
| `COLOR_ANNOTATION_MARKER_DM` | integer | This color is used for notes of type TYPE_ANNOTATION_MARKER to specify a black rectangle that is painted on the document by Document Manager. |
| `TYPE_ANNOTATION_FILETEXT` | integer | Note type: reserved / |
| `TYPE_ANNOTATION_FILLEDRECTANGLE` | integer | Note type: draws a filled coloured box on the document, over the existing document. / |
| `TYPE_ANNOTATION_FREEHAND` | integer | Note type: freehand line. |
| `TYPE_ANNOTATION_HOLLOWRECTANGLE` | integer | Note type: draws a hollow rectangle (frame) on a document. / |
| `TYPE_ANNOTATION_HORIZONTAL_LINE` | integer | Note type: horizontal line. |
| `TYPE_ANNOTATION_LINE` | integer | Note type: reserved / |
| `TYPE_ANNOTATION_MARKER` | integer | Note type: highlighting rectange (filled) on the document. If the note is assigned the colour 0xC0C0C0 the note will be interpreted by ELODM. In this  |
| `TYPE_ANNOTATION_NOTE` | integer | Note type: annotation text |
| `TYPE_ANNOTATION_NOTE_WITHFONT` | integer | Draws a filled rectangular box on a document and displays text in the box. |
| `TYPE_ANNOTATION_RECTANGLE` | integer | Note type: reserved / |
| `TYPE_ANNOTATION_STAMP` | integer | Adds a stamp, such as a received date for example, to a document. The font size in the client application has to be computed by FontInfo.height * 3.7  |
| `TYPE_ANNOTATION_STAMP_NEW` | integer | Note type: adds a stamp, such as a received date for example, to a document. The font size in the client application has to be computed by FontInfo.he |
| `TYPE_ANNOTATION_STRIKEOUT` | integer | Note type: strike out text |
| `TYPE_ANNOTATION_TEXT` | integer | Annotation with text but without a rectangle. The font size in the client application has to be computed by FontInfo.height * 3.7 * resolution_in_dpi/ |
| `TYPE_ANOTEWG_NOTE` | integer | Use TYPE_ANNOTATION_NOTE |
| `TYPE_ANOTEW_MARKER` | integer | Use TYPE_ANNOTATION_MARKER |
| `TYPE_NONE` | integer | Note type: needed in FindByNotes to indicate typeless filtering / |
| `TYPE_NORMAL` | integer | Note type: standard yellow note / |
| `TYPE_NORMAL_ACL` | integer | Note type: standard ACL |
| `TYPE_PERSONAL` | integer | Note type: standard green note / |
| `TYPE_STAMP` | integer | Note type: standard red note / |
| `mbAclItems` | string |  |
| `mbAll` | NoteZ | All members. / |
| `mbCreateDateIso` | string |  |
| `mbDeleted` | string |  |
| `mbLockId` | string | Member lockId / |
| `mbNoDesc` | NoteZ | All members but without note text. / |
| `mbNoteFreehand` | string | Member noteFreehand / |
| `mbNoteImage` | string | Member noteImage / |
| `mbNoteText` | string | Member noteText / |
| `mbObjId` | string | Member objId. / |
| `mbOnlyLock` | NoteZ | Only remove or set lock. / |

#### `NoteDataC`

<p>Bit constants for members of Note</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO 

#### `NoteFreehand`

This class describes a freehand line annotation.

| Property | Type | Description |
|----------|------|-------------|
| `points` | array | Points. |
| `strikeoutColor` | integer | Color for strikeout pen (only TYPE_ANNOTATION_STRIKEOUT). |
| `strikeoutWidth` | integer | Line width for strikeout pen (only TYPE_ANNOTATION_STRIKEOUT). |
| `width` | integer | Line width. / |

#### `NoteFreehandC`

Constants for NoteFreehand

| Property | Type | Description |
|----------|------|-------------|
| `MAX_POINTS` | integer | Maximum number of points in NoteFreehand. |

#### `NoteImage`

This class contains additional information for image stamps.

| Property | Type | Description |
|----------|------|-------------|
| `fileData` | FileData | Image file content. Read only. / |
| `fileName` | string | Image file name. / |

#### `NoteTemplate`

This class describes the template information for a stamp.

| Property | Type | Description |
|----------|------|-------------|
| `acl` | string | ACL. Member aclItems has preceedence on checkin. |
| `aclItems` | array | Note that no GUID is set for the AND groups of the ACL items. / |
| `id` | integer | Stamp ID. / |
| `name` | string | Stamp name. / |
| `noteImage` | NoteImage | Image information, if this is stamp is an image. Either noteText or noteImage can be set. |
| `noteText` | NoteText | Text information, if this is a textual stamp. The text information can contain the placeholders defined in NoteTemplateC. Either noteText or noteImage |
| `userId` | string | User ID or name. NoteTemplate objects can be defined for all users and for a specific user. |

#### `NoteTemplateC`

Constants for class NoteTemplate

| Property | Type | Description |
|----------|------|-------------|
| `PLACEHOLDER_DATE` | string | Placeholder for date. This constant can be used in NoteTemplate.textInfo.text as a placeholder for the current date. |
| `PLACEHOLDER_TIME` | string | Placeholder for time. This constant can be used in NoteTemplate.textInfo.text as a placeholder for the current time. |
| `PLACEHOLDER_USERNAME` | string | Placeholder for user name. This constant can be used in NoteTemplate.textInfo.text as a placeholder for the current user name. |
| `RAW_ITEM_SEPARATOR` | string | Separates the values in the raw data representation. / |
| `RAW_STAMPINFO_SEPARATOR` | string | Separates the values of the name and text in the raw data representation. / |
| `RAW_SUBITEM_SEPARATOR` | string | Separates the values of the subitems in the raw data representation. / |
| `USERID_ALL` | string | Read/write note template visible for all users / |
| `lnName` | integer | Length of note template name. |
| `lnText` | integer | Length of text in class NoteText. |
| `mbAcl` | string | Member bit: acl, aclItems |
| `mbAll` | NoteTemplateZ | Elementselector: mbAllMembers / |
| `mbAllMembers` | string | Member bit: all members / |
| `mbId` | string | Member bit: id / |
| `mbMin` | NoteTemplateZ | Elementselector: mbId / |
| `mbName` | string | Member bit: name / |
| `mbNoteImage` | string | Member bit: noteImage / |
| `mbNoteText` | string | Member bit: noteText / |
| `mbUserId` | string | Member bit: UserId / |

#### `NoteTemplateDataC`

<p>Bit constants for members of NoteTemplate</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `NoteTemplateZ`

Type: object, Properties: bset

#### `NoteText`

This class conatins additional information for textual notes. NoteText objects can be used in NoteTemplate and Note objects.

| Property | Type | Description |
|----------|------|-------------|
| `fontInfo` | FontInfo | Font. This member is null for type NoteC.TYPE_ANNOTATION_NOTE. / |
| `text` | string | Stamp text. The maximum length is NoteDataC.lnDesc - 50, if the NoteText object is used in a Note object. The length for a text of a NoteTemplate obje |

#### `NoteZ`

This class encapsulates the constants of the NoteC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the NoteC class. / |

#### `Notification`

Objects of this class represent a change notification. This class is used internally. /

| Property | Type | Description |
|----------|------|-------------|
| `createDateIso` | string | Create date of the notification. |
| `prio` | integer | Indicates if the Notification is marked as important |
| `userGuid` | string | GUID of user who should receive this notification. |
| `watchGuid` | string | GUID of changed Object. |
| `what` | integer | Indicates the type of the watched Element. 0 - Action. 1 - HashTag. |

#### `NotificationC`

Constants for class Notification. This class is used internally. /

#### `NotificationDataC`

<p>Bit constants for members of Notification</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `NotificationZ`

This class encapsulates the constants of NotificationC Copyright: Copyright (c) 2015 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the NotificationC class. / |

#### `NotifyServerInfo`

This class is used in IXServicePortIF.notifyServer to describe which operation(s) has (have) been processed by the client application.

| Property | Type | Description |
|----------|------|-------------|
| `ocrCount` | integer | The number of documents for which OCR was processed. / |
| `reserved` | string | Reserved for internal usage. EIX-2770 |
| `scanCount` | integer | The number of scanned documents. / |

#### `NotifyServerResult`

This class is used as a return value of IXServicPortIF.notifyServer. /

#### `ObjChange`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `code` | integer | DB column: chgcode / |
| `objId` | string | DB column: chgobjid / |
| `param` | integer | DB column: chgparam / |
| `param2` | string | DB column: chgparam2 / |
| `tStamp` | string | DB column: chgtstamp / |
| `user` | integer | DB column: chguser / |

#### `ObjChangeC`

<p>Bit constants for members of ObjChange</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `ObjDataC`

<p>Bit constants for members of Sord</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO 

#### `ObjHistC`

<p>Bit constants for members of SordHist</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `ObjHistKeyC`

<p>Bit constants for members of SordHistKey</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `ObjKey`

This class wraps the ObjKeyData class to provide a convenient way to access the index lines that have multiple columns. Unlike ObjKeyData the getData and setData functions work with String arrays inspite of single String objects. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `data` | array | Data array. The values can be translated into resp. from the system language, if SessionOptionsC.TRANSLATE_TERMS is set and the corresponding DocMaskL |
| `displayData` | array | Human readable representation of `#data`. This member is read-only and might not be set in server-side events. For index lines of type `DocMaskLineC#T |
| `id` | integer | ID of the index line / |
| `name` | string | The group name of the index line / |
| `objId` | integer | The ELO object ID this object belongs to / |

#### `ObjKeyC`

Constants for the ObjKey class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `DUMMY_KEY_ID` | integer | This ID marks an ObjKey as Dummy. |

#### `ObjKeyData`

Internal use. /

| Property | Type | Description |
|----------|------|-------------|
| `data` | string | DB column: okeydata / |
| `id` | integer | DB column: okeyno / |
| `name` | string | DB column: okeyname / |
| `objId` | integer | DB column: parentid / |
| `odouble` | number | DB column: odouble |
| `sdata` | string | @param sdata |
| `udata` | string | DB column: okeyudata / |

#### `ObjKeyDataC`

<p>Bit constants for members of ObjKeyData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation

#### `ObjLinkC`

<p>Bit constants for members of SordLink</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `OcrInfo`

This class defines the properties of an OCR request.

| Property | Type | Description |
|----------|------|-------------|
| `busId` | string | This class defines the properties of an OCR request. |
| `eventId` | string | OCR result should be sent in an event with this event ID. This member helps to map the OCR request to the OCR result. Optional. / |
| `messagesLanguage` | integer | Language of error messages produced by the OCR engine. One of the OcrInfoC.MESSAGES_LANGUAGE_ constants. Optional. / |
| `queryLanguages` | OcrInfoQueryLanguages | This member is set in order to query the languages supported by the OCR engine. Optional. / |
| `recognizeFile` | OcrInfoRecognizeFile | Recognize file information. Set this member in order to process OCR on a file or an archive document. Optional. / |

#### `OcrInfoC`

Constants for OCR processing.

| Property | Type | Description |
|----------|------|-------------|
| `ALL_PAGES` | integer | OCR will process all pages of the given document. |
| `CHAR_AND_RECT` | integer | Compute character positions. The OCR result is a binary stream of subsequent records of this layout. Character record UTF-16 Character 2 Bytes Horizon |
| `CHAR_AND_RECT_EX` | integer | Compute character positions. The OCR result is a binary stream as defined in `#CHAR_AND_RECT` prefixed by a header of this layout: Header Magic 4 Byte |
| `CHAR_AND_RECT_XML` | integer | Compute character positions and return XML format. |
| `ENCODING_UTF16` | integer | @since 10.17.080.003 / |
| `ENCODING_UTF16LE` | integer | @since 10.17.080.003 / |
| `ENCODING_UTF8` | integer | @since 10.17.080.003 / |
| `EVEN_PAGES` | integer | Internal Use only. OCR will process all even pages of the given document. |
| `MESSAGES_LANGUAGE_BULGARIAN` | integer |  |
| `MESSAGES_LANGUAGE_CZECH` | integer |  |
| `MESSAGES_LANGUAGE_DUTCHSTANDARD` | integer |  |
| `MESSAGES_LANGUAGE_ENGLISH` | integer |  |
| `MESSAGES_LANGUAGE_ESTONIAN` | integer |  |
| `MESSAGES_LANGUAGE_FRENCH` | integer |  |
| `MESSAGES_LANGUAGE_GERMAN` | integer |  |
| `MESSAGES_LANGUAGE_HUNGARIAN` | integer |  |
| `MESSAGES_LANGUAGE_ITALIAN` | integer |  |
| `MESSAGES_LANGUAGE_LATVIAN` | integer |  |
| `MESSAGES_LANGUAGE_LITHUANIAN` | integer |  |
| `MESSAGES_LANGUAGE_POLISH` | integer |  |
| `MESSAGES_LANGUAGE_PORTUGUESE` | integer |  |
| `MESSAGES_LANGUAGE_RUSSIAN` | integer |  |
| `MESSAGES_LANGUAGE_SLOVAK` | integer |  |
| `MESSAGES_LANGUAGE_SPANISH` | integer |  |
| `MESSAGES_LANGUAGE_UKRAINIAN` | integer |  |
| `ODD_PAGES` | integer | Internal Use only. OCR will process all odd pages of the given document. |
| `PDF` | integer | PDF output. OCR will convert the output in a PDF format. |
| `PDF_COMPLIANCE_NONE` | integer | Compliance with PDF/A standard is not necessary. |
| `PDF_COMPLIANCE_PDFA_1A` | integer | The recognized text should be exported to PDF/A-1a format. |
| `PDF_COMPLIANCE_PDFA_1B` | integer | The recognized text should be exported to PDF/A-1b format. |
| `PDF_COMPLIANCE_PDFA_2A` | integer | The recognized text should be exported to PDF/A-2a format. |
| `PDF_COMPLIANCE_PDFA_2U` | integer | The recognized text should be exported to PDF/A-2u format. |
| `PDF_COMPLIANCE_PDFA_3A` | integer | The recognized text should be exported to PDF/A-3a format. |
| `PDF_COMPLIANCE_PDFA_3U` | integer | The recognized text should be exported to PDF/A-3u format. |
| `PDF_QUALITY_BALANCED` | integer | The PDF (PDF/A) export will be balanced between the quality of the resulting file, its size and the time of processing. |
| `PDF_QUALITY_MAXQUALITY` | integer | Optimize the PDF (PDF/A) export in order to receive the best quality of the resulting file. |
| `PDF_QUALITY_MAXSPEED` | integer | Optimize the PDF (PDF/A) export in order to receive the highest speed of processing. |
| `PDF_QUALITY_MINSIZE` | integer | Optimize the PDF (PDF/A) export in order to receive the minimum size of the resulting file. |
| `SPACES_EXACT` | integer | Used in SingleCoulmnMode. The OCR tries to insert the correct number of blanks. |
| `SPACES_NORMAL` | integer | Used in SingleCoulmnMode. All words are separated by one blank. |
| `SPACES_TWOSPACES` | integer | Used in SingleCoulmnMode. If the words are separated by a larger distance, a second blank is inserted. |
| `TEXT` | integer | Text output. The OCR result is a UTF-16LE character stream. |
| `UNIT_INCH` | integer |  |
| `UNIT_MILLIMETER` | integer |  |
| `UNIT_PER_THOUSAND` | integer |  |
| `UNIT_POINT` | integer |  |
| `WHITESPACE_DEFAULT` | integer | Let the OCR Whitespace characters as they are. |
| `WHITESPACE_REPLACE` | integer | OCR Whitespace characters will be replaced: Line break and Paragraph break -> '\n' Tabulation -> '\t' Object replacement character -> ' ' Soft hyphen  |
| `XML` | integer | XML output. The OCR result is a xml style layout. |

#### `OcrInfoQueryLanguages`

This class describes a request for querying the supported languages of the OCR.

| Property | Type | Description |
|----------|------|-------------|
| `ctrl` | integer | This class describes a request for querying the supported languages of the OCR. |

#### `OcrInfoRecognizeFile`

This class describes an OCR analysis request.

| Property | Type | Description |
|----------|------|-------------|
| `accuracy` | integer | Recognition accuracy. A value of 0 activates the fast mode, a value of 1 activates the exact mode. / |
| `encoding` | integer | OcrInfoC.ENCODING_UTF8 / _UTF16 / _UTF16LE |
| `imageData` | FileData | This class describes an OCR analysis request. |
| `minCharConfidence` | integer | Minimum confidence of character recognition in percent. Characters that are recognized with a lower confidence are replaced by `#replaceChar`. Optiona |
| `objId` | string | Object ID of an archived document to be analyzed. Either imageData or objId must be set. / |
| `originalFileName` | string | Original Filename. allows tracking through the log files of the different modules. |
| `outputFormat` | integer | Output format. Must be one of the following: `OcrInfoC#TEXT`, `OcrInfoC#CHAR_AND_RECT`, `OcrInfoC#CHAR_AND_RECT_EX` `OcrInfoC#PDF`, `OcrInfoC#XML` / |
| `pageNo` | integer | Page number. The first page number is 0. If all pages should be analyzed, set pageNo = -1. / |
| `pageNumbers` | array | Array of page numbers which should be analysed by the OCR. The first page number is 0. The following constants can be used: `OcrInfoC#ALL_PAGES`, `Ocr |
| `pageTimeout` | integer | Recognition timeout for a single page. Cancel recognition if it least longer than this number of seconds. Optional. |
| `pdfCompliance` | integer | OcrInfoC.COMPLIANCE_PDFA_3U / _3A / _2U / _2A / _1B / _1A / _NONE |
| `pdfQuality` | integer | OcrInfoC.PDF_QUALITY_MAXQUALITY / _BALANCED / _MINSIZE / _MAXSPEED |
| `recognizeLangs` | array | The image data is of this language(s). The supported languages can be requested by a call to `IXServicePortIF#processOcr(ClientInfo, OcrInfo)`. The Oc |
| `recognizeRects` | array | Constrain recognition to this rectangles. Optional. / |
| `rectUnit` | integer | Rectangle coordinates are based on this unit. Use on of the constants OcrInfoC.UNIT_*. Optional. |
| `replaceChar` | integer | Replacement for characters. Characters that are recognized with a lower confidence than `#minCharConfidence` are replaced this character. Optional. / |
| `singleColumnMode` | boolean | Disable table recognition. Set this member to true, if the OCR should not try to recognized columns and rows of tables. Optional. / |
| `spaces` | integer | OcrInfoC.NORMAL/TWOSPACES/EXACT |
| `timeoutSeconds` | integer | Recognition timeout. Cancel recognition if it least longer than this number of seconds. Optional. / |
| `whitespace` | integer | OCR returns whitespace characters. Must be one of the following: `OcrInfoC#WHITESPACE_DEFAULT`, `OcrInfoC#WHITESPACE_REPLACE` |

#### `OcrRect`

This class contains the coordinates of a rectangle and is used by the `OcrInfoRecognizeFile` class.

| Property | Type | Description |
|----------|------|-------------|
| `bottom` | integer |  |
| `left` | integer | This class contains the coordinates of a rectangle and is used by the `OcrInfoRecognizeFile` class. |
| `right` | integer |  |
| `top` | integer |  |

#### `OcrResult`

This class contains the informations about an OCR result.

| Property | Type | Description |
|----------|------|-------------|
| `eventId` | string | Event ID. The same value as submitted in `OcrInfo#eventId`. / |
| `exception` | string | Error message. Null or empty, if no error has occurred. This value is used only in asynchronous processing in order to inform the client application,  |
| `exceptionID` | integer | Error id. 0, if no error has occurred |
| `queryLanguages` | OcrResultQueryLanguages | Supported languages. This member is returned, if `OcrInfo#queryLanguages` was set. / |
| `recognizeFile` | OcrResultRecognizeFile | Recognize file result. This member is returned, if `OcrInfo#recognizeFile` was set. / |

#### `OcrResultQueryLanguages`

This class contains the result of a OcrInfoQueryLanguages request.

| Property | Type | Description |
|----------|------|-------------|
| `externalLangs` | array | / |
| `internalLangs` | array |  |

#### `OcrResultRecognizeFile`

This class contains the result of an OCR analysis.

| Property | Type | Description |
|----------|------|-------------|
| `height` | integer | Page height. Only valid if a single page was analyzed, see `OcrInfoRecognizeFile#pageNo`. / |
| `skewAngle` | number | Skew angle. Only valid if a single page was analyzed, see `OcrInfoRecognizeFile#pageNo`. / |
| `text` | string | Recognized text. This member is set, if `OcrInfoRecognizeFile#outputFormat` was set to `OcrInfoC#TEXT`. / |
| `textData` | FileData | Binary data. This member is set, if `OcrInfoRecognizeFile#outputFormat` was set to `OcrInfoC#CHAR_AND_RECT`. / |
| `width` | integer | Page width. Only valid if a single page was analyzed, see `OcrInfoRecognizeFile#pageNo`. / |

#### `OcrWorker`

This class is used to describe an OCR worker process.

| Property | Type | Description |
|----------|------|-------------|
| `busId` | string | This class is used to describe an OCR worker process. |
| `lastUsed` | string | Reserved. / |
| `reserved` | string | Reserved. |
| `state` | integer | Worker state. |
| `subsId` | string | The worker process is identified by this subscriber ID on the event bus. / |

#### `OcrWorkerC`

@since 8.00.020.001 /

| Property | Type | Description |
|----------|------|-------------|
| `BUSY` | integer |  |
| `DEAD` | integer |  |
| `IDLE` | integer |  |
| `REGISTERED` | integer | @since 8.00.020.001 / |
| `UNREGISTERED` | integer |  |

#### `OperatorType`

Operator type to combine search terms.

#### `OptimizerConfig`

Configuration and status of optimizer process.

| Property | Type | Description |
|----------|------|-------------|
| `intervalHours` | integer |  |
| `ixid` | string | This Indexserver instance is processing the optimization. / |
| `lastException` | string | Last exception occured during processing. / |
| `lockName` | string | Process runs under this user account. |
| `nextRunAt` | string |  |
| `status` | SearchIndexerStatus |  |

#### `OrOperator`

This operator contains a list of QueryObjects and concatenates them with an "OR" operation. This means, a document is returned if at least one of the QueryObjects is present in the document. For REST calls, use class QueryOperator and set the operator type in `QueryOperator#operatorType`.

| Property | Type | Description |
|----------|------|-------------|
| `queryObjectList` | ListOfQueryObject | List of QueryObjects which are or combined. / |

#### `OrgUnitInfo`

Data class containing organizational unit information data. Information includes ID, name, etc. Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `desc` | string | OU description. / |
| `guid` | string | GUID / |
| `id` | integer | OU identifier / |
| `name` | string | OU name / |
| `ouProps` | array | Additional OU properties Index this array with constants named PROP_* in class OrgUnitInfoC. |
| `tStamp` | string | Timestamp The format is JJJJ.MM.DD.hh.mm.ss / |

#### `OrgUnitInfoC`

Constants related to organizational unit information. Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `MAX_ORG_UNITS` | integer | Maximum number of OUs. / |
| `MAX_OU_PROP` | integer | Maximum number of OU properties. / |
| `lnDesc` | integer | Maximum OU desc length / |
| `lnName` | integer | Maximum OU name length / |
| `lnOuProp` | integer | Maximum OU property length / |
| `mbDesc` | string | Member bit `OrgUnitInfo#desc` |
| `mbGuid` | string | Member bit `OrgUnitInfo#guid` |
| `mbId` | string | Member bit `OrgUnitInfo#id` |
| `mbName` | string | Member bit `OrgUnitInfo#name` |
| `mbOuProps` | string | Member bit `OrgUnitInfo#ouProps` |
| `mbTStamp` | string | Member bit `OrgUnitInfo#tStamp` |

#### `OrgUnitName`

Data class containing some organizational unit information data: name and ID Copyright: Copyright (c) 2013 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | OU identifier / |
| `name` | string | OU name / |

#### `PackageC`

Constants for the class PackageDataC

| Property | Type | Description |
|----------|------|-------------|
| `defaultGuid` | string | Package default guid. |
| `mbAll` | PackageDataZ | All PackageData members. |
| `mbAllMembers` | string | All valid member bits. |
| `mbLevels` | string | Constants for the class PackageDataC |
| `mbOnlyLock` | PackageDataZ | Only remove or set lock. / |

#### `PackageCheckoutInfo`

Describes checkout criteria for `PackageService#checkoutPackages(ClientInfo ci, PackageCheckoutInfo checkoutInfo, PackageDataZ packageZ, LockZ lockZ)`. EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `nameOrGuids` | ListOfString | Describes checkout criteria for `PackageService#checkoutPackages(ClientInfo ci, PackageCheckoutInfo checkoutInfo, PackageDataZ packageZ, LockZ lockZ)` |

#### `PackageContent`

Export aller Daten im Repository zu einem Package EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `contents` | ListOfObject | All objects belonged to the expected packages. EIX-2118 |
| `dependencies` | ListOfObject | This list contains objects referenced by elements in the requested list of packages. Objects in this list may or may not be assigned to a package. If  |

#### `PackageData`

This class defines a package. EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `contentType` | string | Content type of the icon |
| `description` | string | Package description. |
| `guid` | string | Package GUID. |
| `icon` | FileData | Icon of package. |
| `levels` | ListOfPackageLevelData | Maintainer of package |
| `lockId` | integer | The ID of the user that holds the lock or -1, if the note is not locked. |
| `lockName` | string | Package GUID. / / {{elm: Guid String pkguid}} protected String guid; Name of the package, which is displayed. / / {{elm: Name String pkname}} protecte |
| `maintainer` | string | Maintainer of package |
| `name` | string | Name of the package, which is displayed. |
| `namespace` | string | Name of the package, which can be used (as technical name). |
| `pkgVersion` | string | Optional version name of the package. This field can be used as a user-defined version scheme (f.e. 1.0 or First Version). Maximum length for the  pac |
| `tStamp` | string | Timestamp of last modification. |

#### `PackageDataC`

<p>Bit constants for members of PackageData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `PackageDataZ`

Type safe element selector for class PackageData.

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string |  |

#### `PackageDeleteInfo`

Describe delete criteria for `PackageService#deletePackages(ClientInfo ci, PackageDeleteInfo deleteInfo, LockZ unlockZ)`. EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `deletePackageContent` | boolean | if true then archive elements belonging to that package will be deleted as well |
| `nameOrGuids` | ListOfString | List of names or GUIDs of packages to be deleted. It must be filled with at least one value. / |

#### `PackageDeletedEventInfo`

| Property | Type | Description |
|----------|------|-------------|
| `packageDataList` | ListOfPackageData | Parameter for the onAfterPackageDeleted event. |
| `packageLevelDataList` | ListOfPackageLevelData | List of deleted package levels. |

#### `PackageDependency`

Represents a package dependency in an export file. EIX-3462

| Property | Type | Description |
|----------|------|-------------|
| `level` | integer | The level. / |
| `levelGuid` | string | Level GUID. / |
| `levelName` | string | Level name. / |
| `packageGuid` | string | Package GUID. / |
| `packageName` | string | Name of the package, which is displayed. / |

#### `PackageExportInfo`

Describe export criteria for `PackageService#exportPackageContent(ClientInfo ci, PackageExportInfo exportInfo)`. EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `nameOrGuids` | ListOfString | List of names or GUIDs of packages to export. / |

#### `PackageImportEventInfo`

Describe event info for onAfterPackageImport. EIX-3085

| Property | Type | Description |
|----------|------|-------------|
| `packageData` | PackageData |  |

#### `PackageLevelData`

This class defines a package level. EIX-2606

| Property | Type | Description |
|----------|------|-------------|
| `guid` | string | Level GUID. |
| `level` | integer | The level. |
| `name` | string | Level name. |
| `packageGuid` | string | Package GUID. |
| `packageLicenseKey` | string | Optional license of the package level. This field cannot be modified via the function <code>checkinPackage</code>. If the field is set during an impor |
| `pkgVersion` | string | Optional version name of the package level. This field can be used as a user-defined version scheme (f.e. 1.0 or First Version). Maximum length for th |

#### `PackageLevelDataC`

<p>Bit constants for members of PackageLevelData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organi

#### `PackageResult`

Result of the function `PackageService#checkoutPackages(ClientInfo ci, PackageCheckoutInfo checkoutInfo, PackageDataZ packageZ, LockZ lockZ)` EIX-1895

| Property | Type | Description |
|----------|------|-------------|
| `packageDataList` | ListOfPackageData | List of PackageData objects. / |

#### `PackageService`

This interface provides functions to access packages. EIX-1895

#### `PhysDel`

This class represents one row in the database table physdel. This table contains the guids of physically deleted objects. Those objects can be any objects with a guid: e.g. folders, documents, versions, users, workflows... /

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | The object is deleted at this timestamp. Measured in the UTC time-zone. / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `guid` | string | GUID of deleted object. / |
| `type` | integer | Type of deleted object. |

#### `PhysDelC`

Constants for the PhysDel.type member. /

| Property | Type | Description |
|----------|------|-------------|
| `ACTIVITY` | integer | Activity deleted. / |
| `COLOR` | integer | Color deleted. / |
| `ERROR` | integer | Unknown object type deleted. / |
| `KEYWORDLIST` | integer | Keyword list deleted. / |
| `LINK` | integer | Link deleted. |
| `MAP` | integer | Map deleted. / |
| `MASK` | integer | Keywording form deleted. / |
| `NOTE` | integer | Note or annotation deleted. / |
| `RELATION` | integer | Relation deleted. / |
| `SORD` | integer | Folder or document deleted. / |
| `USER` | integer | User deleted. / |
| `VERSION` | integer | Document version or attachment deleted. / |
| `WORKFLOW` | integer | Workflow deleted. / |

#### `PhysDelDataC`

<p>Bit constants for members of PhysDel</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: E

#### `PhysDelDocs`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `objId` | integer | DB column: objid / |

#### `PhysDelDocsC`

<p>Bit constants for members of PhysDelDocs</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `PluginHistory`

OSGi plugin history.

| Property | Type | Description |
|----------|------|-------------|
| `jsonText` | string | The text in form of a json object. / |
| `plainText` | string | The raw text contained in the version file (e.g. version.txt). / |

#### `PluginInfo`

OSGi plugin information.

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Plugin ID. This value is transient and might change after Indexserver has re-loaded or re-started. / |
| `serviceNames` | ListOfString | List of service names provides by this plugin. A list of full qualified class names, e.g. IXServerEvents.class.getName(), WorkflowNodeEvents.class.get |
| `state` | PluginState | Plugin state. / |
| `symbolicName` | string | Plugin name. Symbolic name of OSGi plugin. / |

#### `PluginMessage`

A message that can be sent to or received from a plugin.

| Property | Type | Description |
|----------|------|-------------|
| `bytes` | MapToArrayOfbyte | Get member `#bytes` |
| `id` | string | Message ID. / |
| `objects` | MapToBValueClass | Get member `#objects` |
| `parameters` | MapToString | Get member `#parameters` |
| `source` | PluginMessageSource | Message source. Read only. / |
| `status` | integer | Message response status code. In case of a HTTP request, this element specifies the response status code. A value of 0 is implicitly mapped to 200. / |
| `streams` | MapToBStreamReference | Get member `#streams` |
| `uri` | string | Get member `#uri` |

#### `PluginMessageC`

Constants related to `PluginMessage`.

| Property | Type | Description |
|----------|------|-------------|
| `BODY` | string |  |

#### `PluginMessageSource`

Source of plugin message.

#### `PluginService`

This service allows to start and stop OSGi plugins.

#### `PluginState`

State of OSGi plugin.

#### `PointInfo`

This class describes a 2D point. /

| Property | Type | Description |
|----------|------|-------------|
| `x` | integer | X coordinate / |
| `y` | integer | Y coordinate / |

#### `PreviewImageInfo`

@since 9.00.000.011 /

| Property | Type | Description |
|----------|------|-------------|
| `documentId` | string | Id of the document(-version) to query preview images for. If set, objectId is ignored. / |
| `endPage` | integer | Last page number of the document to process a preview image for. If this value is &le; 0, all pages of the document &ge; startPage are process. If 0 & |
| `objectId` | string | ID of the objects to query preview images for. The ID must point to a document. Otherwise, an exception is thrown. / |
| `previewSize` | integer | Desired size of the preview images. Valid values are defined in `PreviewImageInfoC`. / |
| `processDocument` | boolean | If processDocument is true, not only the URLs for each page are generated but also preview images are processed for the pages (startPage+1) to endPage |
| `renderAnnotations` | boolean | Enables rendering of annotations. If renderAnnotations is true , the preview images will also contain the annotations. If the preview images should co |
| `renderAnnotationsData` | boolean | Does only has an effect, if renderAnnotations is true . If set to true there will be details rendered near the annotations. Details are the annotation |
| `renderAnnotationsOnly` | boolean | Does only has an effect, if renderAnnotations is true . If set to true the annotations will be rendered but the rendering of document pages will be om |
| `startPage` | integer | First page number of the document to process a preview image for. The number of the first page of a document is 1. If this value is &le; 0, 1 is assum |

#### `PreviewImageInfoC`

@since 9.00.000.011 /

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT_DPI` | integer | Default dots per inch for scalable vector graphics. / |
| `SIZE_LARGE` | integer | Flag that signalizes the server to scale down preview images to a size suitable for most browser's canvas element. Choosing this settings will scale d |
| `SIZE_MEDIUM` | integer | Flag that signalizes the server to process preview images in a medium size. Images of this size are optimized in memory usage. They lack readability o |
| `SIZE_ORIGINAL` | integer | Flag that signalizes the server to process preview images in the size of the original document. In case scalable documents sources like PDF, `PreviewI |
| `SIZE_TINIER` | integer | Flag that signalizes the server to process preview images in a size for tiny thumbnails. The maximum length of an edge will be 100 pixels. |
| `SIZE_TINY` | integer | Flag that signalizes the server to process preview images in a size for thumbnails. / |

#### `PreviewImageResult`

@since 9.00.000.011 /

| Property | Type | Description |
|----------|------|-------------|
| `dimensionHeight` | integer | Height of the first page. Please consider the hints at `PreviewImageResult#dimensionWidth` with respect to multi-page documents. / |
| `dimensionWidth` | integer | Width of first page. Use this value to get an idea about the dimensions of the preview image in general. While this value is exact for the first page, |
| `dpi` | integer | Dots per inch of the requested preview images. If the document source is a multi-page file, this value holds for every requested pages. / |
| `pages` | integer | Number of pages. / |
| `progress` | integer | Current progress of processing at the server. Processing is finished at server side when this value equals `PreviewImageResult#progressMax`. / |
| `progressMax` | integer | Estimated value about the workload at the server. There is a chance that the server is finished with the processing of the request when progress reach |
| `statusMessage` | string | Status message about the current processing of preview images at the server. / |
| `urls` | ListOfString | List of URLs pointing to the requested preview images. The URL at the first index in the list points to the lexicographic ordered first requested page |

#### `ProcessAcl`

This class is used to assign or remove ACLs to an object. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `addAcl` | string | ACL to be added in raw database format. Ignored, if addAclItems is not null. |
| `addAclItems` | array | ACL to be added. / |
| `andAcl` | string | ACL to be added in raw database format. Ignored, if andAclItems is not null. |
| `andAclItems` | array | ACL to be intersected with. / |
| `setAcl` | string | ACL to be added in raw database format. Ignored, if setAclItems is not null. |
| `setAclItems` | array | ACL to be set directly overriding any former settings. / |
| `subAcl` | string | ACL to be added in raw database format. Ignored, if subAclItems is not null. |
| `subAclItems` | array | ACL to be subtracted. / |

#### `ProcessCopyElements`

Copy archive elements in other position in the archive. Copyright: Copyright (c) 2009 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `copyOptions` | CopyOptions | Sets the options for the copy-process. |
| `copyResult` | CopyResult | Sets the result for the copy-process. |
| `createMapping` | boolean | @param createMapping the createMapping to set / |

#### `ProcessCountElements`

This class make possible the count of the archive elements. Copyright: Copyright (c) 2008 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `countResult` | CountResult | Constructor for the class "ProcessCountElements". / |

#### `ProcessFulltext`

Fulltext-Property to be added to/removed from an object. Copyright: Copyright (c) 2008 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `addToFulltext` | boolean | Constructor. / |

#### `ProcessInfo`

Specific processing information for each node of processTrees(...) or processFindResults(...). The operations will be for existence (not null) in order of their appearance in ProcessInfo. Some of the underlying structures may allow toggling between prefix and postfix processing when used with processTrees. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `delStatus` | integer | pass 0 for valid (undeleted) nodes, &gt;0 otherwise. / |
| `desc` | string | Holds the user defined description of a specific call. This member must not be null or empty. / |
| `errorMode` | integer | From ProcessInfoC: ERRORMODE_ALL, ERRORMODE_SKIP_SUBTREE, ERRORMODE_SKIP_PROCINFO or ERRORMODE_CRITICAL_ONLY. / |
| `forceOperation` | boolean | Defines, if the data allways have to be written |
| `ignoreDocuments` | boolean | processing flag for documents. / |
| `ignoreStructures` | boolean | processing flag for structure elements. / |
| `inclReferences` | boolean | Process references (logical copies) too. |
| `lockZ` | LockZ | Use this parameter to access potentially locked nodes. / |
| `procAcl` | ProcessAcl | Prefix processing, valid ProcessAcl data. / |
| `procCopyElements` | ProcessCopyElements | Copy the elements into other archive location. |
| `procCountElem` | ProcessCountElements | Prefix processing count all elements |
| `procFulltext` | ProcessFulltext | Prefix processing, valid ProcessFulltext data. |
| `procInheritKeywording` | ProcessInheritKeywording | Inherit keywording. |
| `procMoveDocumentsToStoragePath` | ProcessMoveDocumentsToStoragePath | Move documents to storage path. |
| `procMsgMax` | integer | Maximum amount of recorded errors in procMsgs; from ProcessInfoC: PROCMSGMAX. / |
| `procMsgs` | array | Recorded error messages; specify their amount using procMsgMax. / |
| `procRegion` | ProcessRegion | Process region of sub-trees. |
| `procReleaseLock` | ProcessReleaseLock | Release the locks on processed elements. |
| `procReplSet` | ProcessReplSet | Prefix processing, valid ProcessReplSet data. / |
| `procScript` | ProcessScript | Either prefix or postfix processing. / |
| `procSpaceGuid` | ProcessSpaceGuid | Workspace GUID processing. |

#### `ProcessInfoC`

Constants class for the ProcessInfo class. Errors: The error modes are ordered by increasing failure tolerance. In most cases a tree walk will traverse nodes in prefix mode except scripts, that may have an user defined processing position, so the operational success of a given node directly influences further processing. ERRORMODE_ALL, the zero failure tolerance, stops the job (nearly) immediately, while ERRORMODE_SKIP_SUBTREE just skips subtree traversals, but continues with lists or siblings. 

| Property | Type | Description |
|----------|------|-------------|
| `DELSTATUS_ALL` | integer | Do not filter by SORD status. / |
| `DELSTATUS_DELETED` | integer | filter ony deleted SORDs. / |
| `DELSTATUS_VALID` | integer | Filter only undeleted SORDs. / |
| `ERRORMODE_ALL` | integer | Processing will be stopped when an error occurs, regardless of the error type. / |
| `ERRORMODE_CRITICAL_ONLY` | integer | Stop only on non-recoverable errors. / |
| `ERRORMODE_SKIP_PROCINFO` | integer | Stop the ProcessInfo sequence for the current Node. / |
| `ERRORMODE_SKIP_SUBTREE` | integer | Stop the subtree processing (processTrees only), but continue with list elements respectively siblings. / |
| `PROCMSGMAX` | integer | Maximum allowed amount of error messages. / |

#### `ProcessInheritKeywording`

This class of keywording.

#### `ProcessMoveDocumentsToStoragePath`

This class specifies the options for moving a document into another storage path. It is used as member in ProcessInfo and is interpreted in the functions processFindResult and processTrees .

| Property | Type | Description |
|----------|------|-------------|
| `pathId` | string | Name or ID of the storage path / |

#### `ProcessRegion`

This class specifies the options for setting a sord's `Sord#regionId` (i.e. ID of the region it belongs to) for sub-trees of sords. It is used as member in `ProcessInfo` and defines a respective operation. Copyright: Copyright (c) 2022 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `isNewRegion` | boolean | Determines if the root sord has changed from "is no region" to "is region". This can only happen during checkin of a sord (flag `SordDetails#isRegion( |
| `regionId` | integer | The resulting regionId of the root sord which has to be passed to its sub-tree. / |
| `rootObjId` | integer | The id of the root sord for which its sub-tree has to be adapted according to its region. / |

#### `ProcessReleaseLock`

Releases the locks on archive elements.

#### `ProcessReplSet`

Replication sets to be added to/removed from an object. The replication set parameter must refer to existing objects that may contain empty lists. Null values are not allowed. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `addReplSets` | array | Replication sets to be added. / |
| `andReplSets` | array | Replication sets to be intersected with. / |
| `setReplSets` | array | Replication sets to be set directly overriding any former settings. / |
| `subReplSets` | array | Replication sets to be subtracted. / |

#### `ProcessScript`

NOT CURRENTLY SUPPORTED Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Script name. / |
| `processPostfix` | boolean | execution position in tree walks. / |
| `tag` | string | user defined tag. / |

#### `ProcessSpaceGuid`

This class specifies the options for setting a sord's spaceGuid (i.e. GUID of the workspace it belongs to). It is used as member in ProcessInfo and is interpreted in the functions processFindResult and processTrees .

| Property | Type | Description |
|----------|------|-------------|
| `spaceGuid` | string | New spaceGuid / |
| `spaceGuids` | ListOfString | New spaceGuids |

#### `PublicDownload`

This class describes the public download information. Internal use. /

| Property | Type | Description |
|----------|------|-------------|
| `attachmentCode` | string | Indicates whether the download is inline or as attachment. this field is ignored in ELO 11. 03  and ongoing versions. |
| `docId` | integer | The document ID. / |
| `expiration` | string | Get the expiration. If expiration is null, there is no expiration for this download. |
| `fileName` | string | The fileName in the download url. It is readonly. |
| `id` | string | The download ID. / |
| `objId` | integer | The object ID. |
| `remaining` | integer | The fileName in the download url. It is readonly. |
| `timeStamp` | string | The time stamp. / |
| `url` | string | The download URL |
| `userId` | integer | The user ID. / |

#### `PublicDownloadC`

Constants for class PublicDownload.

#### `PublicDownloadDataC`

<p>Bit constants for members of PublicDownload</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisa

#### `PublicDownloadOptions`

This class contains several options that are used to get the public downloads. Copyright: Copyright (c) 2014 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `contentDispositionAttachment` | boolean | If true, the document is downloaded as an attachment. Otherwise it content is shown in-line in the browser. |
| `docId` | string | The doc id. |
| `downloadIds` | array | The download IDs to retrieve the public downloads. / |
| `expiration` | string | The expired time. |
| `fileNameFromSordName` | boolean | If true, the short description of the sord is used as file name in the download URL. Otherwise the original file name is used. |
| `objId` | string | The obj id. |
| `remaining` | integer | The remaining download. |

#### `PurgeSettings`

This class represents the purge settings of the ELOdm purge task

| Property | Type | Description |
|----------|------|-------------|
| `dayLimit` | integer | This class represents the purge settings of the ELOdm purge task |
| `excludePathIds` | ListOfInteger | List of path ids to exclude from purging if pathId=0 is set. |
| `fileCheckMode` | integer | The original and the backup document can be compared before cleanup. Possible values (1 to 3) are defined in PurgeSettingsC. / |
| `pathId` | integer | Possible path restriction for filing paths: 0: include all paths 1 and higher: only include a path with this ID where documents should be deleted / |
| `startHour` | integer | When processing should take place: START_EVERY_HOUR: when the purge task is starting and then every 60 minutes 0 to 23: hour of the day, such as 8:00  |

#### `PurgeSettingsC`

Constants for class PurgeSettings

| Property | Type | Description |
|----------|------|-------------|
| `COMPARE_CONTENT` | integer | for fileCheckMode: file comparision by file content / |
| `COMPARE_OFF` | integer | for fileCheckMode: no file comparison (not recommended) / |
| `COMPARE_SIZE` | integer | for fileCheckMode: file comparison by file size / |
| `START_EVERY_HOUR` | integer | Constants for class PurgeSettings |

#### `PurgeStatus`

This class represents the status of the ELOdm purge task

| Property | Type | Description |
|----------|------|-------------|
| `errorMessage` | string | an error message, if an error occured, else an empty String / |
| `isRunning` | boolean | This class represents the status of the ELOdm purge task |
| `lastPurgeTime` | string | last purge work time (ISO UTC date and time without dots) If no purge has been done yet, the variable is empty. / |
| `numberOfDocsPurged` | integer | number of purged documents / |

#### `QueryFilter`

A QueryFilter is used to describe a value to search for in a document. It references a field in which should be searched and its value. There are other usecases, in which a QueryFilter is used to describe a certain field and its value is not needed and therefore ignored: To retrieve context terms and completions. Usage: Define where to search for the value by the parameters searchField and indexFieldKey. If the field you want to search in is defined in SearchFieldC, use one of the constants. In 

| Property | Type | Description |
|----------|------|-------------|
| `boost` | number | Boost for calculated relevance. A field can be boosted and therefore has a higher influence on the calculated relevance. For more information, refere  |
| `docMaskLine` | string | Provide the name of the index field here. If searchField != SearchFieldC.INDEXFIELD, this value is ignored. |
| `fieldType` | FieldTypeE | Define how to search for a value. Options are tokenized, not tokenized, numeric, date. The delivered FilterValue must match this fieldType, if not, an |
| `indexFieldKey` | string | Provide the name of the index field here. If searchField != SearchFieldC.INDEXFIELD, this value is ignored. If the associated docmask is of type DocMa |
| `searchField` | SearchFieldE | Provide the constant of the field to search in. To search in a index field, set this to SearchFieldC.INDEXFIELD and provide its name in indexFieldKey. |
| `value` | FilterValue | The value for the QueryFilter. |

#### `QueryJobProtocolC`

Constants for querying log messages of background jobs.

| Property | Type | Description |
|----------|------|-------------|
| `LOG_LEVEL_ERROR` | integer | Return only errors. / |
| `LOG_LEVEL_INFO` | integer | Return only normal informations. / |
| `LOG_LEVEL_WARN` | integer | Return only warnings. / |
| `OBJID_NOT_SET` | integer | This value indicates that the object-ID is not set. / |

#### `QueryJobProtocolEvent`

A `QueryJobProtocolEvent` represents a event

| Property | Type | Description |
|----------|------|-------------|
| `date` | string | The time of generating this event. / |
| `eventId` | integer | The id of this QueryJobProtocolEvent. The eventId's value is unique for one background thread. The value of a background thread's first eventId is 0.  |
| `level` | integer | The level of log messages to query. Use the \| operator to select multiple levels. |
| `message` | string | Message of this LogRow. / |
| `objId` | integer | The id of the object currently being processed at the time of this events creation. If the objId is not known/available, its value is set to `QueryJob |

#### `QueryJobProtocolInfo`

/ package de.elo.ix.client; This class contains the parameters for the interface function `IXServicePortIF#queryJobProtocol(ClientInfo, QueryJobProtocolInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `jobGuid` | string | The GUID of the background thread to query the log informations. Mandatory. / |
| `level` | integer | Filter for the level of log messages. If set, it has to be one of `QueryJobProtocolC#LOG_LEVEL_ERROR`, `QueryJobProtocolC#LOG_LEVEL_WARN`, or `QueryJo |
| `startDateISO` | string | Marks the earliest date at which log information has to be reported. As only cached values are returned, the value is ignored, if the oldest cached lo |
| `startEventId` | integer | If the value of startEventId is &ge;0, only eventIds &ge; that value will be returned. Optional. |

#### `QueryJobProtocolResult`

This class contains the results from querying the protocol of a background thread.

| Property | Type | Description |
|----------|------|-------------|
| `downloadUrl` | string | This String contains a URL where the whole protocol can be downloaded. Empty, if no protocol file exists. / |
| `events` | array | Contains the all events by a background job that are cached at the Indexserver. / |

#### `QueryObject`

A QueryObject is used to build a search query. It can either be a QueryOperator, which is a either a list of concatenated QueryObjects or a negated QueryObject, or a QueryFilter which describes an actual value of a document.

#### `QueryOperator`

A QueryOperator is used to include or exclude QueryObjects from a search and to concatenate QueryObjects. Like this, complex queries can be build.

| Property | Type | Description |
|----------|------|-------------|
| `operatorType` | OperatorType | Operator to be used to combine the objects. This field is required in REST calls to distinguish between the operators `AndOperator` and `OrOperator`. |

#### `RangeAggregationQueryParams`

Defines parameters to run an aggregation of type "Range" (a multi-bucket-aggregation). This aggregation query allows sub-aggregations.

| Property | Type | Description |
|----------|------|-------------|
| `ranges` | ListOfDoubleRangeValue | Only selected parameters and no sub-aggregations. / |
| `subAggregations` | MapToAggregationQuery | Inner aggregations of this aggregation. / |

#### `RangeAggregationResult`

The result object of a range aggregation. It consists mainly of buckets and within its inner aggregations results (sub-aggregations).

| Property | Type | Description |
|----------|------|-------------|
| `buckets` | ListOfBucket | The result buckets. / |

#### `RawStreamService`

This service helps to support the upload and download functions in IXConnection.

#### `ReindexerConfig`

Configuration and status of Re-indexer process.

| Property | Type | Description |
|----------|------|-------------|
| `ixid` | string | This Indexserver instance is processing the update. / |
| `lastException` | string | Last exception occured during processing. / |
| `lockName` | string | Process runs under this user account. |
| `objIdRange` | string | Lower and upper limit of object IDs processed by re-indexing process. / |
| `progressInPercent` | integer |  |
| `startedAt` | string |  |
| `status` | SearchIndexerStatus |  |

#### `Relation`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `deleteDateIso` | string | The Relation is deleted at this date. ClientInfo determines the Timezone. <p>  Is undefined if status==0.  </p> |
| `guid` | string | GUID |
| `mainRelation` | boolean | This Relation represents the main relation of an object, if this value is <code>true</code>. |
| `objGuid` | string | GUID |
| `objId` | integer | DB column: objectid / |
| `ordinal` | integer | DB column: ordinal / |
| `parentGuid` | string | GUID of the parent object. |
| `parentId` | integer | DB column: parentid / |
| `status` | integer | DB column: relstatus / |
| `tStamp` | string | DB column: reltstamp / |

#### `RelationC`

<p>Bit constants for members of Relation</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `Reminder`

| Property | Type | Description |
|----------|------|-------------|
| `createDateIso` | string | Reminder was created at this date. / |
| `deleted` | boolean | Reminder is deleted logically if set. Read-only. / |
| `desc` | string | Memo text / |
| `dueDateIso` | string | On this date the receiver has seen the reminder. / |
| `id` | integer | Reminder ID / |
| `lockId` | integer | ID of user who has locked the reminder record in DB / |
| `lockName` | string | Reminder is locked by this user. / |
| `name` | string | Short description visible in the task list. / |
| `notifyOnDelete` | boolean | Notify sender if receiver deletes the reminder. / |
| `notifyOnView` | boolean | Notify sender if receiver views the reminder. / |
| `objEntryType` | SordTypeEnum | Sord type of the associated folder or document. |
| `objGuid` | string | Sord GUID. / |
| `objId` | integer | Reminder is linked to this Sord. / |
| `objType` | integer | Sord type. / |
| `prio` | integer | Priority: 0...high, 1...medium, 2...low / |
| `promptDateIso` | string | At this Date the reminder should be made visible to the receiver. / |
| `receiverDisplayName` | string | Locale specific name of this reminder's receiver. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `receiverId` | integer | Reminder was created for this user. / |
| `receiverName` | string | Reminder was created for this user. / |
| `senderDisplayName` | string | Locale specific name of this reminder's sender. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `senderId` | integer | Reminder was created by this user. / |
| `senderName` | string | Reminder was created by this user. / |

#### `ReminderC`

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | string | All valid member bits. / |
| `mbCreateDateIso` | string |  |
| `mbDeleted` | string |  |
| `mbDueDateIso` | string |  |
| `mbLockName` | string |  |
| `mbNotifyOnDelete` | string |  |
| `mbNotifyOnView` | string |  |
| `mbObjGuid` | string | Sord guid. / |
| `mbPromptDateIso` | string |  |
| `mbReceiverName` | string |  |
| `mbSenderName` | string |  |

#### `ReminderDataC`

<p>Bit constants for members of Reminder</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `ReplCode`

Constants for replication codes.

| Property | Type | Description |
|----------|------|-------------|
| `ARCR_ACTION` | integer | Change code: Insert, modify, delete activities. / |
| `ARCR_ACTION_S` | string |  |
| `ARCR_ATTACHMENT_DATA` | integer | Change code: Insert or change an attachment. / |
| `ARCR_ATTACHMENT_DATA_S` | string |  |
| `ARCR_BASEDATA_VERIFY` | integer | Change code: Master data. Exports the names of storage masks, keys, users. / |
| `ARCR_BASEDATA_VERIFY_S` | string |  |
| `ARCR_BROKER` | integer | Change flag: This flag marks a change record to be a control record for the broker. / |
| `ARCR_BROKER_S` | string |  |
| `ARCR_CODE_SEP` | string |  |
| `ARCR_CONTROL_VDS` | integer | Change code: A VDS has been created / |
| `ARCR_CONTROL_VDS_S` | string |  |
| `ARCR_DOCMASKS_DATA` | integer | Change code: Exports the storage masks. / |
| `ARCR_DOCMASKS_DATA_S` | string |  |
| `ARCR_DOCMASK_DELETE` | integer | Change code: Insert or modify storage mask data. (reserved) / / public static final int ARCR_DOCMASK_DATA = ARCR_SET2 \| 4; // Dokumentmaske / geänder |
| `ARCR_DOCMASK_DELETE_S` | string |  |
| `ARCR_DOCUMENT_DATA` | integer | Change code: Insert a document and change the work version of the associated archive entry. |
| `ARCR_DOCUMENT_DATA_S` | string |  |
| `ARCR_DOCUMENT_FEED` | integer |  |
| `ARCR_DOCUMENT_FEED_S` | string |  |
| `ARCR_DOCUMENT_INSERT` | integer | Change code: Insert a document but do not change the work version of the associated archive entry. |
| `ARCR_DOCUMENT_INSERT_S` | string |  |
| `ARCR_DOCUMENT_STATUS` | integer | Change code: Document flags and/or document delete status have been changed / |
| `ARCR_DOCUMENT_STATUS_S` | string |  |
| `ARCR_DOCUMENT_SWITCH` | integer | Change code: Select another work version from the document history. / |
| `ARCR_DOCUMENT_SWITCH_S` | string |  |
| `ARCR_EXTENDED_SET` | integer | Change flags: Bits of this value are contained in some change codes to extend the number of possible change codes. / |
| `ARCR_EXT_CODE_UNDEF_S` | string |  |
| `ARCR_IGNORE_BROKER_OPTZ` | integer | Change code: Ignore the optional broker optimization anyway a) selective export b) VDS / |
| `ARCR_IGNORE_BROKER_OPTZ_S` | string |  |
| `ARCR_INITIAL_DATA` | integer | Change flag: This flag is added to ARCR_OBJECT_DATA if replication performs a full export. / |
| `ARCR_INITIAL_DATA_S` | string |  |
| `ARCR_LINK` | integer |  |
| `ARCR_LINK_S` | string |  |
| `ARCR_MAP_CHANGED` | integer | Change code: map changed / |
| `ARCR_MAP_CHANGED_S` | string |  |
| `ARCR_MARKER` | integer | Change code: Set a replication marker. / |
| `ARCR_MARKER_S` | string |  |
| `ARCR_NOTE_DATA` | integer | Change code: Create or modify a note. |
| `ARCR_NOTE_DATA_S` | string |  |
| `ARCR_NOTE_DELETE` | integer | Change code: Delete a note. |
| `ARCR_NOTE_DELETE_S` | string |  |
| `ARCR_OBJECT_DATA` | integer | Change code: Modify the indexing information (without Sord.getObjKeys() ) of an archive entry ( Sord ). |
| `ARCR_OBJECT_DATA_S` | string |  |
| `ARCR_OBJECT_DELETE_PHYS` | integer | Change code: Delete object finally. / |
| `ARCR_OBJECT_DELETE_PHYS_S` | string |  |
| `ARCR_OBJECT_DELETE_REF` | integer | Change code: Delete a (logical) reference inside an archive entry. / |
| `ARCR_OBJECT_DELETE_REF_S` | string |  |
| `ARCR_OBJECT_HIST` | integer | Change code: Create a new entry for the object history / |
| `ARCR_OBJECT_HIST_S` | string |  |
| `ARCR_OBJECT_INSERT_REF` | integer | Change code: Insert a (logical) reference inside an archive entry. |
| `ARCR_OBJECT_INSERT_REF_S` | string |  |
| `ARCR_OBJECT_KEYS` | integer | Change code: Modify the indexing information (only Sord.getObjKeys() ) of an archive entry ( Sord ). |
| `ARCR_OBJECT_KEYS_S` | string |  |
| `ARCR_OBJECT_RELATIONS` | integer | Change code: Change all references to children. |
| `ARCR_OBJECT_RELATIONS_S` | string |  |
| `ARCR_OBJECT_REPLSET` | integer | Change code: Change the replication sets of an archive entry. / |
| `ARCR_OBJECT_REPLSET_S` | string |  |
| `ARCR_SET16` | integer | Change flag: This flag is contained in some change codes to extend the number of possible change codes. |
| `ARCR_SET2` | integer | Change flag: This flag is contained in some change codes to extend the number of possible change codes. |
| `ARCR_SIGNATURE_DATA` | integer | Change code: Create a document signature / |
| `ARCR_SIGNATURE_DATA_S` | string |  |
| `ARCR_SWL_DATA` | integer | Change code: A keyword list has been modified Param: 1 für Stichwortliste geändert, 2 für Stichwortliste gelöscht / |
| `ARCR_SWL_DATA_S` | string |  |
| `ARCR_TRAFO` | integer | Change code: Transformation table for master data (broker-to-broker replication). / |
| `ARCR_TRAFO_S` | string |  |
| `ARCR_TRANSLATION` | integer | Change code: Insert or modify storage mask data. (reserved) |
| `ARCR_TRANSLATION_S` | string |  |
| `ARCR_USER_DATA` | integer | Change code: Insert or modify user data. / |
| `ARCR_USER_DATA_S` | string |  |
| `ARCR_USER_DELETE` | integer | Change code: Delete a user. / |
| `ARCR_USER_DELETE_S` | string |  |
| `ARCR_VERSION_COMMENT` | integer | Change code: Changed document comment / |
| `ARCR_VERSION_COMMENT_S` | string |  |
| `ARCR_WORKFLOW_DATA` | integer | Change code: Change a workflow. / |
| `ARCR_WORKFLOW_DATA_S` | string |  |
| `PARAM_SWL_DELETED` | integer |  |
| `PARAM_SWL_UPDATED` | integer |  |

#### `ReplSet`

Objects of this class store the replication information of archive entries. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp of the last alteration of replication sets for the corresponding archive entry. The format is JJJJ.MM.DD.hh.mm.ss |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `combiGuid` | string | Timestamp of this object's last export by the replication. |
| `dw` | array | Bitset of replication IDs. / |
| `dwSync` | array | Bitset of synchronized replication IDs. |
| `objId` | integer | This replication information belongs to the archive entry with ID objId / |

#### `ReplSetCombination`

Internal class.

| Property | Type | Description |
|----------|------|-------------|
| `combi` | string |  |
| `guid` | string |  |

#### `ReplSetCombinationC`

<p>Bit constants for members of ReplSetCombination</p> <p>Copyright: Copyright (c) 2003</p>  <p>Orga

#### `ReplSetName`

Properties of a replication set. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp of the last change. The format is JJJJ.MM.DD.hh.mm.ss / |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `desc` | string | Descriptive text for the replication set. / |
| `id` | integer | Identifier for the replication set. / |
| `image` | integer | Image used for the replication set in list function in the client application. / |
| `mobile` | integer | Replication set is used for archive synchronisation(ELO MOBIL). / |
| `name` | string | Name of the replication set. / |
| `priority` | integer | Priority of this replication set. |

#### `ReplSetNameC`

<p>Bit constants for members of ReplSetName</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `RepliHist`

Internal class /

| Property | Type | Description |
|----------|------|-------------|
| `arcDesc` | string | DB column: rharcdesc / |
| `arcGuid` | string | DB column: rharcguid / |
| `arcPriorityLocal` | integer |  |
| `arcPriorityRemote` | integer |  |
| `arcShort` | string | DB column: rharcshort / |
| `id` | integer | DB column: rhrowid / |
| `imEx` | integer | DB column: rhimex / |
| `succ` | integer | DB column: rhsucc / |
| `tSBegin` | string | DB column: rhtsbegin / |
| `tSDate` | string | DB column: rhtsdate / |
| `tSEnd` | string | DB column: rhtsend / |

#### `RepliHistC`

<p>Bit constants for members of RepliHist</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `ReportC`

<p>Bit constants for members of ReportInfo</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation

#### `ReportErpCode`

This class describes an ERP code - a filter code number in the ELO report. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `id` | integer | ERP code / |
| `limited` | boolean | This code is wirtten in limited report / |
| `name` | string | ERP name / |
| `verbose` | boolean | This code is written in verbose report / |

#### `ReportInfo`

This class describes a report/protocol entry for an action carried out in the archive. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `actTime` | integer | Reserved - internal function. / |
| `actTimeISO` | string | Time of the action in ISO format. / |
| `action` | string | ActionNo as name. / |
| `actionNo` | integer | Action number in numeric form. / |
| `comment` | string | Descriptive text or details. / |
| `extra1` | integer | Reserved - internal, dependant on actionNo. / |
| `extra2` | integer | Reserved - internal, dependant on actionNo / |
| `extra3` | string | Reserved. |
| `extraInfo` | string | Reserved. |
| `id` | string | Identifier / |
| `objId` | integer | Id of the object for which the action is entered in the protocoll. / |
| `sessionNo` | integer | Id of the session which carried out the action. / |
| `text` | string | Reserved - internal, dependant on actionNo / |
| `userId` | integer | Id of the user who carried out the action. / |
| `userName` | string | Name of the user who carried out the action. / |

#### `ReportInfoC`

Report information. Indexserver writes the following report entries: Report Entries ReportInfo.action ReportInfo.objId ReportInfo.extra1 ReportInfo.extra2 ReportInfo.comment ACT_IX_LOGIN 0 SSO User ID [EXTRA2_SSO_LOGIN] Computer name ACT_IX_LOGOUT 0 0 0 &nbsp; ACT_IX_LOCK_ARCHIVE 0 Key ID 0 Key name ACT_IX_CREATE_USER 0 User ID User Flags User name ACT_IX_CHECKIN_USER 0 User ID User Flags User name ACT_IX_DELETE_USER 0 User ID User Flags User name ACT_IX_CREATE_KEY 0 Key ID 0 Key name ACT_IX_CHE

| Property | Type | Description |
|----------|------|-------------|
| `ACT_CLIENT_ADDREF` | integer | unused / |
| `ACT_CLIENT_CHANGEATTACH` | integer | unused / |
| `ACT_CLIENT_CHANGEDOC` | integer | unused / |
| `ACT_CLIENT_CHANGEKEY` | integer | unused / |
| `ACT_CLIENT_CHANGEKIND` | integer | unused / |
| `ACT_CLIENT_CHANGESOR` | integer | unused / |
| `ACT_CLIENT_CHECKIN` | integer | Checkin a new document file. ReportInfo.extra1 ist set to the new document ID |
| `ACT_CLIENT_CHECKOUT` | integer | Get document file for editing. This report information is written, if IXServicePortIF.checkoutDoc is called with lock. |
| `ACT_CLIENT_COLORCHANGED` | integer | unused / |
| `ACT_CLIENT_COMPLAIN` | integer | unused / |
| `ACT_CLIENT_CONVERT_FORMAT` | integer | unused / |
| `ACT_CLIENT_CREATEDOC` | integer | Create a new document entry (for indexing information) in the archive database. ReportInfo.text contains the document name (short description). |
| `ACT_CLIENT_CREATEFLOWTEMPL` | integer | unused / |
| `ACT_CLIENT_CREATENOTE` | integer | Create note. / |
| `ACT_CLIENT_CREATESOR` | integer | Create new Sord object / |
| `ACT_CLIENT_DELETEDOCS` | integer | unused / |
| `ACT_CLIENT_DELETENOTE` | integer | Delete note. / |
| `ACT_CLIENT_DELFLOWACTIVE` | integer | unused / |
| `ACT_CLIENT_DELFLOWTEMPL` | integer | unused / |
| `ACT_CLIENT_DELVERSION` | integer |  |
| `ACT_CLIENT_DELVERT` | integer | unused / |
| `ACT_CLIENT_EDITDOC` | integer | Write the indexing information of a document. |
| `ACT_CLIENT_EDITFLOWACTIVE` | integer | unused / |
| `ACT_CLIENT_EDITFLOWTEMPL` | integer | unused / |
| `ACT_CLIENT_EDITNOTE` | integer | Overwrite note. / |
| `ACT_CLIENT_EDITSOR` | integer | Edited new Sord object / |
| `ACT_CLIENT_ELOEND` | integer | Logout. |
| `ACT_CLIENT_ELOSTART` | integer | Login. |
| `ACT_CLIENT_ERASEDOC` | integer | Delete/undelete document. ReportInfo values ReportInfo.extra1 parent ID. ReportInfo.extra2 0 if deleted, 1 if undeleted. ReportInfo.text sord name. |
| `ACT_CLIENT_ERASEREF` | integer | Delete/undelete document. ReportInfo values ReportInfo.extra1 parent ID. ReportInfo.extra2 0 if deleted, 1 if undeleted. |
| `ACT_CLIENT_ERASESOR` | integer | Delete/undelete document. ReportInfo values ReportInfo.extra1 parent ID. ReportInfo.extra2 0 if deleted, 1 if undeleted. ReportInfo.text sord name. |
| `ACT_CLIENT_FLOWERRORYESNO` | integer | unused / |
| `ACT_CLIENT_FLOWTIMELIMIT` | integer | unused / |
| `ACT_CLIENT_FORWARDFLOW` | integer | unused / |
| `ACT_CLIENT_FREEVERT` | integer | unused / |
| `ACT_CLIENT_KEYCHANGED` | integer | unused / |
| `ACT_CLIENT_MASKCHANGED` | integer | unused / |
| `ACT_CLIENT_MASKTEXTTOOLONG` | integer | unused / |
| `ACT_CLIENT_MOVEDOC` | integer | unused / |
| `ACT_CLIENT_MOVEREF` | integer | unused / |
| `ACT_CLIENT_MOVESOR` | integer | unused / |
| `ACT_CLIENT_NEWVERT` | integer | unused / |
| `ACT_CLIENT_NONE` | integer |  |
| `ACT_CLIENT_PATHCHANGED` | integer | unused / |
| `ACT_CLIENT_PICKPOST` | integer | unused / |
| `ACT_CLIENT_POSTCOLLECT` | integer | unused / |
| `ACT_CLIENT_POSTCOPYTO` | integer | unused / |
| `ACT_CLIENT_POSTDELETE` | integer | unused / |
| `ACT_CLIENT_POSTDOCBUILD` | integer | unused / |
| `ACT_CLIENT_POSTEDIT` | integer | unused / |
| `ACT_CLIENT_POSTEXPAND` | integer | unused / |
| `ACT_CLIENT_POSTFIRST` | integer | unused / |
| `ACT_CLIENT_POSTIMPORT` | integer | unused / |
| `ACT_CLIENT_POSTLAST` | integer | unused / |
| `ACT_CLIENT_POSTMOVE` | integer | unused / |
| `ACT_CLIENT_POSTMOVETO` | integer | unused / |
| `ACT_CLIENT_POSTNEWOLE` | integer | unused / |
| `ACT_CLIENT_POSTRECEIVE` | integer | unused / |
| `ACT_CLIENT_POSTSCHLAGWORT` | integer | unused / |
| `ACT_CLIENT_PWDCHANGED` | integer | unused / |
| `ACT_CLIENT_RECEIVEFLOW` | integer | unused / |
| `ACT_CLIENT_REFDOC` | integer | unused / |
| `ACT_CLIENT_REFSOR` | integer | unused / |
| `ACT_CLIENT_REMOVEVERT` | integer | unused / |
| `ACT_CLIENT_REPORTCHANGED` | integer | unused / |
| `ACT_CLIENT_RESETVERT` | integer | unused / |
| `ACT_CLIENT_SEARCH` | integer | Used to report search completed / |
| `ACT_CLIENT_SETVERT` | integer | unused / |
| `ACT_CLIENT_SHOWDOC` | integer | Get document file to display (not to edit). This report information is written, if IXServicePortIF.checkoutDoc is called without lock. |
| `ACT_CLIENT_SHOWSOR` | integer | unused / |
| `ACT_CLIENT_STARTFLOW` | integer | unused / |
| `ACT_CLIENT_USERCHANGED` | integer | unused / |
| `ACT_CLIENT_VIEWDOC` | integer | Read the indexing information of a document. / |
| `ACT_CLIENT_VIEWSOR` | integer | Checkout Sord object without lock / |
| `ACT_CLIENT_WVCHANGE` | integer | unused / |
| `ACT_CLIENT_WVCHANGESEND` | integer | unused / |
| `ACT_CLIENT_WVDELETE` | integer | unused / |
| `ACT_CLIENT_WVFIRST` | integer | unused / |
| `ACT_CLIENT_WVLAST` | integer | unused / |
| `ACT_CLIENT_WVNEW` | integer | unused / |
| `ACT_CLIENT_WVNEWSEND` | integer | unused / |
| `ACT_CLIENT_WVRECEIVE` | integer | unused / |
| `ACT_CLIENT_WVSEND` | integer | unused / |
| `ACT_CUSTOM_FIRST` | integer | Custom client specific report codes are higher than ACT_CUSTOM_FIRST |
| `ACT_CUSTOM_LAST` | integer | Custom client specific report codes are lower than ACT_CUSTOM_LAST |
| `ACT_DM_READDOC` | integer | Read document file from DM. / |
| `ACT_ISWRITESESSION` | integer | Used to report a write access session. / |
| `ACT_IX_CHANGE_ACL` | integer |  |
| `ACT_IX_CHANGE_DELDATE` | integer | @since 9.00.000.025 / |
| `ACT_IX_CHANGE_RS` | integer |  |
| `ACT_IX_CHECKIN_ASPECT` | integer | @since 20.00.000.100 / |
| `ACT_IX_CHECKIN_COLOR` | integer |  |
| `ACT_IX_CHECKIN_CONFIG_FILE` | integer |  |
| `ACT_IX_CHECKIN_COUNTER` | integer |  |
| `ACT_IX_CHECKIN_DOCVERSION` | integer |  |
| `ACT_IX_CHECKIN_DOC_MASK` | integer |  |
| `ACT_IX_CHECKIN_ICON` | integer | @since 23.04.000.009 / |
| `ACT_IX_CHECKIN_KEY` | integer |  |
| `ACT_IX_CHECKIN_NOTE` | integer |  |
| `ACT_IX_CHECKIN_REPL_NAME` | integer |  |
| `ACT_IX_CHECKIN_REPORT_OPTIONS` | integer |  |
| `ACT_IX_CHECKIN_SORD` | integer |  |
| `ACT_IX_CHECKIN_SORD_TYPE` | integer |  |
| `ACT_IX_CHECKIN_USER` | integer |  |
| `ACT_IX_CHECKIN_USER_PROFILE` | integer |  |
| `ACT_IX_CHECKIN_WORKFLOW` | integer |  |
| `ACT_IX_CHECKOUT_DOCVERSION` | integer |  |
| `ACT_IX_CHECKOUT_NOTE` | integer |  |
| `ACT_IX_CHECKOUT_SORD` | integer |  |
| `ACT_IX_COPY_SORD` | integer |  |
| `ACT_IX_CREATE_ASPECT` | integer | @since 20.00.000.100 / |
| `ACT_IX_CREATE_DOCUMENT` | integer |  |
| `ACT_IX_CREATE_DOC_MASK` | integer |  |
| `ACT_IX_CREATE_KEY` | integer |  |
| `ACT_IX_CREATE_NOTE` | integer |  |
| `ACT_IX_CREATE_SORD` | integer |  |
| `ACT_IX_CREATE_USER` | integer |  |
| `ACT_IX_CREATE_WORKFLOW` | integer |  |
| `ACT_IX_DELEGATE_WORKFLOW` | integer | @since 9.00.000.022 / |
| `ACT_IX_DELETE_ASPECT` | integer | @since 20.00.000.100 / |
| `ACT_IX_DELETE_CONFIG_FILE` | integer |  |
| `ACT_IX_DELETE_COUNTER` | integer |  |
| `ACT_IX_DELETE_DOC_MASK` | integer |  |
| `ACT_IX_DELETE_ICON` | integer | @since 23.04.000.009 / |
| `ACT_IX_DELETE_KEY` | integer |  |
| `ACT_IX_DELETE_NOTE` | integer |  |
| `ACT_IX_DELETE_REFERENCE` | integer |  |
| `ACT_IX_DELETE_REPORT` | integer |  |
| `ACT_IX_DELETE_SORD` | integer |  |
| `ACT_IX_DELETE_SORD_TYPE` | integer |  |
| `ACT_IX_DELETE_USER` | integer |  |
| `ACT_IX_DELETE_USER_PROFILE` | integer |  |
| `ACT_IX_DELETE_WORKFLOW` | integer |  |
| `ACT_IX_DELVERT` | integer |  |
| `ACT_IX_EDIT_WORKFLOW_NODE` | integer |  |
| `ACT_IX_FIRST` | integer | Indexserver specific report codes are higher than ACT_IX_FIRST / |
| `ACT_IX_FREEVERT` | integer |  |
| `ACT_IX_INCREMENT_COUNTER` | integer |  |
| `ACT_IX_LAST` | integer |  |
| `ACT_IX_LINK_SORD` | integer |  |
| `ACT_IX_LOCK_ARCHIVE` | integer |  |
| `ACT_IX_LOGIN` | integer |  |
| `ACT_IX_LOGOUT` | integer |  |
| `ACT_IX_MINI_APP_LOGIN` | integer | Reporteintrag für Mini-App-Login. RID11587 |
| `ACT_IX_MOVE_SORD` | integer |  |
| `ACT_IX_NEWVERT` | integer |  |
| `ACT_IX_REFERENCE_SORD` | integer |  |
| `ACT_IX_REMOVEVERT` | integer |  |
| `ACT_IX_RESETVERT` | integer |  |
| `ACT_IX_RESTORE_ICON` | integer | @since 23.04.000.009 / |
| `ACT_IX_SETVERT` | integer |  |
| `ACT_IX_START_ADHOC_WORKFLOW` | integer |  |
| `ACT_IX_START_WORKFLOW` | integer |  |
| `ACT_IX_SUBSTITUTION_ACTIVATE` | integer | A substitution is activated with `IXServicePortIF#activateSubstitution(ClientInfo, String, LockZ)`. The following values in `ReportInfo` are set: `Rep |
| `ACT_IX_SUBSTITUTION_CHANGE` | integer | An existing substitution is changed with `IXServicePortIF#checkinSubstitutions(ClientInfo, de.elo.ix.client.subs.CheckinSubstitutionsInfo, de.elo.ix.c |
| `ACT_IX_SUBSTITUTION_DEACTIVATE` | integer | A substitution is deactivated with `IXServicePortIF#deactivateSubstitution(ClientInfo, String, LockZ)` The following values in `ReportInfo` are set: ` |
| `ACT_IX_SUBSTITUTION_DELETE` | integer | A substitution is deleted with `IXServicePortIF#deleteSubstitutions(ClientInfo, de.elo.ix.client.subs.DeleteSubstitutionsInfo, LockZ)` The following v |
| `ACT_IX_SUBSTITUTION_FORWARD` | integer | A substitution is forwarded with `IXServicePortIF#forwardSubstitution(ClientInfo, de.elo.ix.client.subs.ForwardSubstitutionInfo, LockZ)`. The followin |
| `ACT_IX_SUBSTITUTION_NEW` | integer | A new substitution is checked in with `IXServicePortIF#checkinSubstitutions(ClientInfo, de.elo.ix.client.subs.CheckinSubstitutionsInfo, de.elo.ix.clie |
| `ACT_IX_SUBSTITUTION_TRANSFER` | integer | A substitution is transfered with `IXServicePortIF#forwardSubstitution(ClientInfo, de.elo.ix.client.subs.ForwardSubstitutionInfo, LockZ)`. The followi |
| `ACT_IX_TAKE_WORKFLOW_NODE` | integer |  |
| `ACT_IX_TERMINATE_WORKFLOW` | integer |  |
| `ACT_IX_UNLINK_SORD` | integer | @since 9.00.000.022 / |
| `EXTRA2_ALL_NOTES_OF_SORD` | integer | Extra2 value used when all notes of a Sord are read. |
| `EXTRA2_ANNOTATION_MARKER` | integer |  |
| `EXTRA2_ANNOTATION_NOTE` | integer |  |
| `EXTRA2_ATTACHMENT` | integer |  |
| `EXTRA2_DOCVERSION` | integer |  |
| `EXTRA2_FINALLY` | integer |  |
| `EXTRA2_FORCE` | integer |  |
| `EXTRA2_INDEXSEARCH` | integer |  |
| `EXTRA2_LOCK` | integer |  |
| `EXTRA2_NOTE_NORMAL` | integer |  |
| `EXTRA2_NOTE_PERSONAL` | integer |  |
| `EXTRA2_NOTE_STAMP` | integer |  |
| `EXTRA2_PREVIEW` | integer |  |
| `EXTRA2_REPORT_AS_LOGIN` | integer |  |
| `EXTRA2_SIGNATURE` | integer |  |
| `EXTRA2_SSO_LOGIN` | integer |  |
| `EXTRA2_WF_ACTIVE` | integer |  |
| `EXTRA2_WF_CANCEL` | integer |  |
| `EXTRA2_WF_FINISHED` | integer |  |
| `EXTRA2_WF_TEMPLATE` | integer |  |
| `EXTRA2_WF_TERMINATE` | integer |  |
| `mbActTimeISO` | string |  |
| `mbAction` | string |  |
| `mbComment` | string |  |
| `mbUserName` | string |  |

#### `ReportInfoUserModified`

Additional report information for modified user.

| Property | Type | Description |
|----------|------|-------------|
| `newProps` | ReportInfoUserProps | Modified properties. / |
| `oldProps` | ReportInfoUserProps | Properties before modification. This member is null for new users and for deleted users. / |

#### `ReportInfoUserProps`

Additional report information for user modifications.

| Property | Type | Description |
|----------|------|-------------|
| `idsToNames` | MapToString | Map of user IDs to user names. This map contains all users referred by `#userInfo`, `#userInfoEff`, and `#subsInfos`. / |
| `subsInfos` | ListOfSubsInfo | Substitution information. Replaced by `#substitutions` |
| `substitutions` | ListOfSubstitution | List of active Substitution where the user or any of his groups is set as `Substitution#substituteId`. |
| `userInfo` | UserInfo | UserInfo object. / |
| `userInfoEff` | UserInfo | UserInfo object with effective permissions. / |

#### `ReportModeC`

| Property | Type | Description |
|----------|------|-------------|
| `FULL` | ReportModeZ | Write full report. / |
| `LIMITED` | ReportModeZ | Write limited report. / |
| `NO` | ReportModeZ | Do not write report. / |
| `VERBOSE` | ReportModeZ | Write verbose report. / |
| `bsetFULL` | string |  |
| `bsetLIMITED` | string |  |
| `bsetNO` | string |  |
| `bsetVERBOSE` | string |  |

#### `ReportModeZ`

This class encapsulates the constants of ReportModeC Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from ReportModeC class. / |

#### `ReportOptions`

This class contains the codes for the activities/processes that are to be protocolled in a report. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `erpCodes` | array | ERP codes / |
| `mode` | ReportModeZ | A ReportOptionsZ constant / |

#### `ReportOptionsC`

Constants for report mode Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH An ERP code is assigned to one or more action codes.

| Property | Type | Description |
|----------|------|-------------|
| `ERP_CHECKIN` | integer |  |
| `ERP_CHECKOUT` | integer |  |
| `ERP_CONVERT_FORMAT` | integer |  |
| `ERP_CREATEFLOWTEMPL` | integer |  |
| `ERP_CUSTOM` | integer | @since 9.00.016.006 / |
| `ERP_DELFLOWACTIVE` | integer |  |
| `ERP_DELFLOWTEMPL` | integer |  |
| `ERP_DELVERSION` | integer |  |
| `ERP_DELVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_DM_READDOC` | integer |  |
| `ERP_EDITFLOWACTIVE` | integer |  |
| `ERP_EDITFLOWTEMPL` | integer |  |
| `ERP_ERROR` | integer |  |
| `ERP_FLOWERRORYESNO` | integer |  |
| `ERP_FLOWTIMELIMT` | integer |  |
| `ERP_FORWARDFLOW` | integer |  |
| `ERP_FREEVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_LOGASPECTDATA` | integer | @since 20.00.000.100 / |
| `ERP_LOGATTACHMENT` | integer |  |
| `ERP_LOGCHANGEKEY` | integer |  |
| `ERP_LOGCHANGEKIND` | integer |  |
| `ERP_LOGCHANGEPWD` | integer |  |
| `ERP_LOGCLOSEARC` | integer |  |
| `ERP_LOGCOLORDATA` | integer |  |
| `ERP_LOGCOMPLAIN` | integer |  |
| `ERP_LOGCREATEDOC` | integer |  |
| `ERP_LOGCREATESOR` | integer |  |
| `ERP_LOGDELDOCS` | integer |  |
| `ERP_LOGEDITDATA` | integer |  |
| `ERP_LOGEDITDOC` | integer |  |
| `ERP_LOGERADOC` | integer |  |
| `ERP_LOGERAREF` | integer |  |
| `ERP_LOGERASOR` | integer |  |
| `ERP_LOGFIRSTMESSAGE` | integer |  |
| `ERP_LOGKEYDATA` | integer |  |
| `ERP_LOGLASTMESSAGE` | integer |  |
| `ERP_LOGMASKDATA` | integer |  |
| `ERP_LOGMOVEDOC` | integer |  |
| `ERP_LOGMOVESOR` | integer |  |
| `ERP_LOGOPENARC` | integer |  |
| `ERP_LOGPATHDATA` | integer |  |
| `ERP_LOGREFDOC` | integer |  |
| `ERP_LOGREFSOR` | integer |  |
| `ERP_LOGUSERDATA` | integer |  |
| `ERP_LOGVIEWDOC` | integer |  |
| `ERP_NEWVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_NOREPDATA` | integer |  |
| `ERP_PICKPOST` | integer |  |
| `ERP_POSTBARCODE` | integer |  |
| `ERP_POSTBOX` | integer |  |
| `ERP_RECEIVEFLOW` | integer |  |
| `ERP_REMOVEVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_RESETVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_SEARCH` | integer |  |
| `ERP_SETVERT` | integer | @deprecated Use `ReportOptionsC#ERP_SUBSTITUTIONS` instead / |
| `ERP_SHOWDOC` | integer |  |
| `ERP_SHOWSOR` | integer |  |
| `ERP_STARTFLOW` | integer |  |
| `ERP_SUBSTITUTIONS` | integer | All substitution actions are combined into this code: `ReportInfoC#ACT_IX_SUBSTITUTION_NEW` `ReportInfoC#ACT_IX_SUBSTITUTION_CHANGE` `ReportInfoC#ACT_ |
| `ERP_VERSCHIEDEN` | integer |  |
| `ERP_WRITESESSION` | integer |  |
| `ERP_WV` | integer |  |

#### `ResolveRightsInfo`

Parameter Class for `IXServicePortIF#resolveRights(ClientInfo, UserInfo, ResolveRightsInfo)` .

#### `ResolveRightsResult`

Class for the result of the IX-Function `IXServicePortIF#resolveRights(ClientInfo, UserInfo, ResolveRightsInfo)` .

| Property | Type | Description |
|----------|------|-------------|
| `members` | ListOfString | Path of members that explains why the user got this right. The first item in this list is the name of the object directly assigned to the user. The la |
| `right` | integer | @since 12.00.000.027 / |
| `right2` | integer | The right the user got by `ResolveRightsResult#type`. Values will be of `AccessC`.FLAG2_*. / |
| `type` | integer | The kind of way the user got this right. See `ResolveRightsResultC` for valid values. / |

#### `ResolveRightsResultC`

Constants for `ResolveRightsResult`.

| Property | Type | Description |
|----------|------|-------------|
| `DIRECT` | integer | Indicates that the user got the right directly. / |
| `INHERITED` | integer | Indicates that the user got the right by inheritance of a group. / |
| `SUBSTITUTION` | integer | Indicates that the user got the right by a substitution rule. / |

#### `RestoreIconInfo`

| Property | Type | Description |
|----------|------|-------------|
| `iconId` | string | Describes recovery criteria for `IXServicePortIF#restoreIcon(ClientInfo ci, RestoreIconInfo iconInfo, LockZ unlockZ)`. |

#### `RestoreOptions`

This class contains several options for undeleting archive SORDs by restoreSord Copyright: Copyright (c) 2004-2006 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `minDeleteDate` | string | Restore only document versions that are deleted after minDeleteDate . Its String representation is the ISO format in the client's time zone. |
| `minIDate` | string | minIDate ist the ISO representation of the local date used to mark the lower limit for restoring. / |
| `parentId` | string | Since references also got a delete date, they can be restored independently from their main reference. To restore a reference selectively, set parentI |
| `singleObject` | boolean | singleObject=true restricts the operation to the specified object not traversing sub trees. / |

#### `SearchFieldE`

Use this class of constants to define in which field should be searched or aggregated. For every option, allowed `FieldTypeE` is given which is also the fallback type if provided type is incorrect.

#### `SearchIndexerConfig`

@since 9.99.009.010 /

| Property | Type | Description |
|----------|------|-------------|
| `languageConfig` | LanguageConfig | @since 10.00.000.005 / |
| `optimizerConfig` | OptimizerConfig |  |
| `reindexerConfig` | ReindexerConfig |  |
| `updaterConfig` | UpdaterConfig |  |

#### `SearchIndexerStatus`

@since 9.99.009.010 /

#### `SearchModeC`

This class defines options used in FindOptions.searchMode . Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `AND` | SearchModeZ | The search terms are concatinated with the boolean AND operator. / |
| `EXPRESSION` | SearchModeZ | The value of FindByIndex.name or FindByIndex.desc contains the operators "AND" (&amp;), "OR" (\|), "NOT" (!) for concatination. |
| `ONE_TERM` | SearchModeZ | A blank separated list in FindByIndex.name or FindByIndex.desc is used as a single term. / |
| `OR` | SearchModeZ | The search terms are concatinated with the boolean OR operator. / |
| `bsetAND` | string |  |
| `bsetEXPRESSION` | string |  |
| `bsetONE_TERM` | string |  |
| `bsetOR` | string |  |

#### `SearchModeZ`

This class encapsulates the constants of SearchModeC Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from SearchModeC class. / |

#### `SearchTermOptions`

Use this class if alternative search terms should be retrieved by `de.elo.ix.client.IXServicePortIF#findSearchTerms(de.elo.ix.client.ClientInfo, de.elo.ix.client.FindInfo, int)`. Deliver query by `de.elo.ix.client.esearch.ESearchParams`.

| Property | Type | Description |
|----------|------|-------------|
| `correction` | boolean | Return correction suggestion for search query. Example for a correction: tets -> test / |
| `synonyms` | boolean | Return synonyms for search query. / |

#### `SearchTermsC`

Type: object, Properties: CORRECTION, SYNONYMS, TERMS

#### `Server`

This class represents a LDAP server.

| Property | Type | Description |
|----------|------|-------------|
| `lastException` | string | An exception message if connection to `#ldapUrl` failed. / |
| `lastLoginDurationMillis` | string | Duration of last login. Read only. / |
| `ldapUrl` | string | URL to access the LDAP directory. / |
| `priority` | number | Priority for using this URL compared to others. Higher value means more preferred. / |

#### `ServerInfo`

License key, version and list of other Indexservers Copyright: Copyright (c) 2003 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `databaseEngine` | string | Database engine name. E. g. MSSQL, ORACLE, DB2 If connected to DB2, the character set UTF-8 is assumed for database columns that store Strings. In thi |
| `indexServers` | array | List of other Index Servers. Read only. / |
| `instanceName` | string | Indexserver name. This is the name configured in config.xml or web.xml as "ixid". |
| `license` | License | License key for the Index Server. Read only. / |
| `postboxDisabled` | boolean | Serverside inbox is disabled. The serverside inbox is disabled in cloud installations. |
| `replProcessOnServerId` | string | This value defines the local replication server ID. It must match to an existing `ReplSetName#name` in the replication configuration. It is also used  |
| `serverStreamVersion` | string | API stream version. EIX-2519 |
| `serverTime` | string | Server time. EIX-2519 |
| `version` | string | The version of the Index Server. Read only. / |

#### `ServerInfoDM`

This class contains infomation about the filing paths of the document manager (DM).

| Property | Type | Description |
|----------|------|-------------|
| `backupStoreIds` | array | reserved. / |
| `basisStoreIds` | array | This class contains infomation about the filing paths of the document manager (DM). |
| `blackeningEnabled` | boolean | DM is enabled for blackening of document parts. |
| `proxyMode` | integer | DM proxy mode. Read-only. Values -1 Proxy mode is not active 0 Main instance &gt;0 Branch instance / |
| `restoreStoreId` | integer | ID of restore path. / |
| `storeMode` | integer | Mode to be used to fill the filing paths. This value is a bitset of the ServerInfoDMC.STOREMODE_* constants. |

#### `ServerInfoDMC`

Constants used by the members of the class ServerInfoDM.

| Property | Type | Description |
|----------|------|-------------|
| `STOREMODE_BASEPATH_FILL_UP` | integer | Fill up base paths subsequently. |
| `STOREMODE_BASEPATH_MASK` | integer | This bitmask selects the lower two bits of the ServerInfoDM.storeMode. This bits are equal to one of the STOREMODE_BASEPATH_* constants. / |
| `STOREMODE_BASEPATH_ROUNDROBIN` | integer | Fill base paths by round robin algorithm. |

#### `ServerState`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `action` | string | DB column: action / |
| `actionId` | integer | DB column: actionid / |
| `subKey` | integer | DB column: subkey / |

#### `ServerStateC`

<p>Bit constants for members of ServerState</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisatio

#### `SessionInfo`

Provides details of the current session with the Index Server Copyright: Copyright (c) 2003 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `appName` | string | The name of the client's application connected with the Index Server. |
| `appType` | string | The type of the client's application connected with the Index Server. |
| `appVersion` | string | The version of the client's application connected with the Index Server. |
| `bestBefore` | string | The time stamp of the session best before date. |
| `clientComputer` | string | The client computer connected with the Index Server. / |
| `loginName` | string | The name of the user who initialized the runAs connection |
| `runAs` | string | Session is constrained to this account |
| `sessionOptions` | MapToString | Session options assigned by `IXServicePortIF#setSessionOptions(ClientInfo, SessionOptions)`. |
| `ticket` | string | The ticket of this session within the Index Server. |
| `userId` | integer | The id of the user used for the connection. / |
| `userName` | string | The name of the user used for the connection. |
| `validSeconds` | integer | The length of time the connection is valid for. / |

#### `SessionInfoParams`

#### `SessionOptions`

Objects of this class hold an array of options that are used to manipulate the current Indexserver session. /

| Property | Type | Description |
|----------|------|-------------|
| `options` | array | Array containing options used for the Index Server session. |

#### `SessionOptionsC`

Constants of SessionOptions.

| Property | Type | Description |
|----------|------|-------------|
| `ACTIVE_ROLES` | string | Comma separated list of active role IDs. |
| `APPLY_ALL_BLACKENINGS` | string | Apply all blackenings on documents regardless of their ACL. ELOtr sets this option as "true" to receive documents with all blackenings. This ensures t |
| `APP_TYPE_MINI_CLIENT` | string | Reserved. This value is reserved for ELO applications. Unauthorized usage violates the ELO licensing terms. |
| `CLIENT_APP_NAME` | string | Client application name. Optional. / |
| `CLIENT_APP_TYPE` | string | Client application type. Mandatory. The appropriate value for partner applications is TYPE_PARTNER_APPLICATION unless a special type is arranged. / |
| `CLIENT_APP_VERSION` | string | Client application version. Optional. / |
| `COPY_OBJKEYS_IN_BACKGROUND` | string | Control the synchronicity of copying objkeys to child entries. |
| `DB_ESCAPE_CHAR` | string | This character is used in the SQL statement, if the search criterias contain one of the SQL wildcard characters: &quot;%&quot;, &quot;_&quot;. It defa |
| `DB_WILDCARDS` | string | This characters are used as wildcards in search terms. The first wildcard is used for zero or more characters. The second wildcard is used for exactly |
| `DECRYPT_DOCUMENTS` | string | Set this option to decrypt documents on checkout. A secure connection (HTTPS) is required to use this option. / |
| `DIRECT_DM_ACCESS` | string | This option specifies which application is addressed in URLs to upload and download documents. If direct access is true, the URLs address the DM direc |
| `DISABLE_CHANGE_INFO_PROTECTION` | string | If set, this option disables the protection of change information. Disabling the writing of changes information causes the Indexserver to not update t |
| `DISABLE_LOGGING_API_CALLS` | string | Disable logging of API calls for this session. EIX-3303 |
| `DOC_URL_BASE` | string | Define the first part of the document URLs generated from Indexserver. See configuration option documentUrlBase on the Indexserver option page. |
| `DOWNLOAD_URL_TYPE` | string | Define the download URL type. IX can generate several types of URLs to download documents. Possible values are the constants DOWNLOAD_URL_TYPE_*. The  |
| `DOWNLOAD_URL_TYPE_PERSISTENT` | string | Generate URLs that do not expire. IX generates URLs that can be used without time limitation. The URL includes a strongly encrypted ID of the document |
| `DOWNLOAD_URL_TYPE_PUBLIC` | string | Generate public download URLs for the actual working version, that expire after a given time. Only a given number of downloads is allowed. IX generate |
| `DOWNLOAD_URL_TYPE_PUBLIC_VERSION` | string | Generate public download URLs for the document version, that expire after a given time.. Only a given number of downloads is allowed. IX generates URL |
| `DOWNLOAD_URL_TYPE_TEMPORARY` | string | Generate URLs that expire after a given time. The lifetime can be specified with the option "documentUrlLifetimeSeconds". By default, all URLs are cre |
| `ENCRYPT_DOCUMENTS` | string | Set this option to encrypt documents on checkin. A secure connection (HTTPS) is required to use this option. / |
| `HANDLE_IX_SERVER_EVENTS` | string | This session option declares that the IXConnection handles server events declared in `IXServerEvents`. |
| `HTTP_SESSION_IX_CONNECTION` | string | Attribute name to which Indexserver maps an IXConnection in the HTTP Session |
| `HTTP_SESSION_TICKET` | string | Attribute name to which Indexserver maps a Ticket in the HTTP Session |
| `INTEGRATION_SESSION` | string | Diese SessionOption kennzeichnet eine Sitzung für den Integration Client. EIX-3705 |
| `ISO_DATE_WITH_DELIMS` | string | Format ISO date values with delimiter characters defined in ISO 8601. / |
| `IX_URL_BASE` | string | Define the first part of the URLs generated from Indexserver. See configuration option ixUrlBase on the Indexserver option page. / |
| `PUBLIC_DOWNLOAD_COUNT` | string | Define the allowed number of public downloads. |
| `PUBLIC_DOWNLOAD_EXPIREDTIME` | string | Define the expired time of public downloads. |
| `SESSION_ADD` | integer | Function getSessionFromTicket: used in combination with SESSION_FROM_AM. Add the session into the internal session management. |
| `SESSION_FROM_AM` | integer | Function getSessionFromTicket: any active session known by the AccessManager can be requested. The session is not inserted into the session management |
| `SESSION_FROM_AM_ADD` | integer | Function getSessionFromTicket: any active session can be requested and is inserted into the session management of this Indexserver instance. If the se |
| `SESSION_FROM_IX` | integer | Function getSessionFromTicket: session must be known by this Indexserver instance. An exception is thrown, if the session is not known by this Indexse |
| `START_DOCMASK_WORKFLOWS` | string | If this option is set to "true", the Indexserver starts the workflow defined in DocMask.flowId and DocMask.flowId2 when an associated document is crea |
| `TICKET_FROM_COOKIE` | string | This value can be used as `ClientInfo#ticket` or in IXConnFactory#createFromTicket() if the server should use the session cookie as authentication tok |
| `TRANSLATE_TERMS` | string | Translate keywording forms names, index names, index values and keyword lists into resp. from the language given in ClientInfo.language . |
| `TYPE_PARTNER_APPLICATION` | string | This option value has to be used for option CLIENT_APP_TYPE if a partner application connects to IX. / |

#### `SetOfMasterDataE`

Type: array

#### `SetOfObject`

Type: array

#### `SetOfString`

Type: array

#### `SingleValueMetricsAggregationQueryParams`

Defines parameters to run an aggregation of one of the types Min, Max, Sum, Avg (single-value-metrics-aggregations). This aggregation query doesn't allow sub-aggregations. Note: The value_count aggregation gets an an own query params class although it is a single-value-metrics-aggregation, because it has a different return value type (long).

| Property | Type | Description |
|----------|------|-------------|
| `missingValue` | string | The missing parameter defines how documents that are missing a value should be treated. By default they will be ignored but it is also possible to tre |

#### `SingleValueMetricsAggregationResult`

The result object of a single-value-metrics aggregation. It consists mainly of a result value.

| Property | Type | Description |
|----------|------|-------------|
| `value` | number | The result of the metrics aggregation. / |

#### `Sord`

Indexing information of an archive entry. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `IDateIso` | string | ISO encoded internal (archive defined) date. / |
| `SReg` | string | Version numer of the current work version. / |
| `TStamp` | string | Timestamp of the last change. The format is JJJJ.MM.DD.hh.mm.ss / |
| `TStampAcl` | string | Timestamp of the last ACL change. The format is JJJJ.MM.DD.hh.mm. ss |
| `TStampAclSync` | string | Timestamp of this object's ACLs last export by the replication. |
| `TStampLocal` | string | Timestamp that indicates the next iSearch Index run The format is JJJJ.MM.DD.hh.mm. ss |
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `XDateIso` | string | ISO encoded external (user defined) date. / |
| `access` | integer | The current users access rights for this Sord. Returns a combination of AccessC.LUR_ constants. Read-only. Is returned when SordC.mbAcl is set in chec |
| `acl` | string | Access control language in coded form. The checkInSord method must set either acl or aclItems. aclItems has priority. / |
| `aclItems` | array | Timestamp that indicates the next iSearch Index run The format is JJJJ.MM.DD.hh.mm.ss |
| `aspects` | MapToListOfMapToIndexValue | Timestamp of this object's last export by the replication. |
| `aspectsIntern` | MapToListOfMapToIndexValue | Internal use of `Sord#aspects`. Will be converted into `Sord#aspects` when used externally. |
| `att` | integer | Id of the current attachment version. Read-only. / |
| `attVersion` | DocVersion | Work version of the attachment. |
| `childCount` | integer | Estimated sum of the sub-entries in a directory. This does not take account of any access rights assigned to the entries. This property should only be |
| `confidentiality` | string | Confidentiality level of the sord. Levels are defined via the keyword list ELO.CONFIDENTIALITY. The Indexserver  does not check the validity of the va |
| `delDateIso` | string | ISO encoded expiry date. Only users having right AccessC.FLAG_EDITDUEDATE are allowed to set the expiry date. Once the expiry date is set, it cannot b |
| `deleteDateIso` | string | The Sord is deleted at this date. ClientInfo determines the Timezone. <p>  Is undefined if isDeleted() returns false.  </p> |
| `deleteUser` | integer | The Sord is deleted at this user. <p>  Is undefined if isDeleted() returns false.  </p> |
| `deleted` | boolean | Indicates whether the sord has been deleted or not. / |
| `desc` | string | The (visible) memo text. If the value starts with a "!" this member can define a dynamic folder. This is a folder which contents are filled by an arbi |
| `details` | SordDetails | Object encapsulates flags. / |
| `doc` | integer | Read-only. Id of the current document version. / |
| `docVersion` | DocVersion | Version information of current document work version. Read-only. / |
| `externalId` | string | Unique IDs, e.g. from third-party systems, can be stored here. If there is an entry here, it must be unique within ELO. |
| `guid` | string | GUID. / |
| `hiddenText` | string | Hidden text that must not be displayed to the user. / |
| `histCount` | integer | Number of document versions. / |
| `id` | integer | Numeric ID. / |
| `info` | integer | RESERVED / |
| `key` | integer | RESERVED / |
| `kind` | integer | Colour / |
| `linksComeIn` | array | Links pointing from other archive entries to this. Read-only. / |
| `linksGoOut` | array | Links starting from this to other archive entries. Read-only. |
| `lockId` | integer | This is the id of the user who has a lock on the object. To know whether the Sord or the Document is locked, see lockIdSord or lockIdDoc respectively. |
| `lockIdDoc` | integer | This is the id of the user who has a lock on the document (not the object). The object is  locked using checkoutSord with the LOCK.DOC parameter. Read |
| `lockIdSord` | integer | This is the id of the user who has a lock on the object (not the document). The object is  locked using checkoutSord with the LOCK.SORD parameter. Rea |
| `lockName` | string | The name of the user who has locked the object. Read-only. |
| `lockNameDoc` | string | The name of the user who has locked the document. Read-only. |
| `lockNameSord` | string | The Sord is deleted at this date. ClientInfo determines the Timezone. Is undefined if isDeleted() returns false. |
| `mask` | integer | The id of the filing mask used to archive the sord. Read-only. / |
| `maskDisplayName` | string | Display name of the keywording form. This value is translated into the language given by `ClientInfo#language`. It cannot be used as a parameter in In |
| `maskName` | string | Name of keywording form. This value always equals the name specified in the database and will not be translated into the language given by the client. |
| `name` | string | The short description/name for the object. / |
| `objKeys` | array | Index values. This array is only valid, if the associated keywording form `DocMask` is organized as `DocMask#dataOrganisation` = `DocMaskC#DATA_ORGANI |
| `ownerId` | integer | The id of the owner of the object. Main-administrators can assign an owner ID for new Sords in `IXServicePortIF#checkinSord(ClientInfo, Sord, SordZ, L |
| `ownerName` | string | Name of the owner (read-only). / |
| `packageName` | string | Package name of sord |
| `parentId` | integer | Id of the parent object(archive heirachy) of the sord object. Read-only / |
| `parentIds` | array | GUIDs of archive entries that contain a reference to this . The first element of the array is the GUID of the main parent, where this is physically pl |
| `path` | integer | Filing path for the document manager. Only valid for documents. Read-only. If this Sord object is obtained by a call to checkoutSord or checkoutDoc wi |
| `refPaths` | array | Archive paths to this Sord. The first path, refPaths[0], contains the path to the original Sord. The other paths contain references to this Sord. The  |
| `referenceId` | string | This field can be set arbitrarily, so the sord can be found again quickly. |
| `regionId` | integer | The region id of a sord. <br>  If the sord is contained in a region (i.e. lies below an object in archive tree that has an associated keywording  form |
| `replNames` | array | Replication set names. The replication set information of an object is binary encoded in the database. The Class ReplNameMap provides functions to con |
| `replSet` | ReplSet | Replication sets. Binary encoded information. Both replNames and replSet contain the information determining in which replications sets the object is  |
| `spaceGuid` | string | If the sord belongs to a workspace, this value contains the GUID of that workspace. |
| `spaceGuids` | ListOfString | If the sord belongs to a workspace, this value contains the GUID of that workspace. |
| `type` | integer | The type of sord object. For old Sord.type values: Folder objects: 0 &lt;= type &lt; 255 (SordC.LBT_FOLDER) Document objects: 255 &lt;= type &lt;= 100 |
| `vtRep` | integer | RESERVED / |

#### `SordC`

Constants for indexing information. Each member of this class with prefix "mb" has a corresponding member in class Sord

| Property | Type | Description |
|----------|------|-------------|
| `ATTACHMENT_FLAG_IN_DOCHISTORY` | integer | Implementation detail: This flag is added to the object ID in the table "dochistory" to differentiate between documents and attachments. |
| `DESC_DELIM` | string | The objdesc column in the database is splitted into a visible and an invisible part. This constant is the delimiter between them. / |
| `ELOINDEX_USER_FOLDER_DATA` | string | Index value ELOINDEX of sub-folder "data" of a users folder. The "data" sub-folder of a user folder can be read as follows: String objId = "OKEY:ELOIN |
| `ELOINDEX_USER_FOLDER_DATA_PROFILE` | string | Index value ELOINDEX of sub-folder "data/elo.profile" of a users folder. |
| `ELOINDEX_USER_FOLDER_INBOX` | string | Index value ELOINDEX of sub-folder "inbox" of a users folder. |
| `ELOINDEX_USER_FOLDER_PRIVATE` | string | Index value ELOINDEX of sub-folder "private" of a users folder. |
| `GUID_ADMINISTRATION_BASE` | string | GUID of folder "Administration". This folder contains "Replication Base", "Scripting Base" etc. / |
| `GUID_APPS_FOLDER` | string | GUID of folder "/Administration/ELO-Apps". |
| `GUID_COLD_BACKGROUND_IMAGES` | string | Archive folder /Administration/COLD Background Images |
| `GUID_IX_SCRIPTING_BASE` | string | GUID of folder "IndexServer Scripting Base" |
| `GUID_REPLICATION_BASE` | string | GUID of folder "Replication Base" / |
| `GUID_SAP_SMART_LINK` | string | @return the GUID_SAP_SMART_LINK / |
| `GUID_SCRIPTING_BASE` | string | GUID of folder "Scripting Base" / |
| `GUID_SPACE_ADMINISTRATION_FOLDER` | string | GUID of administration folder for spaces. EIX-2987 |
| `GUID_SPACE_BASE_FOLDER` | string | GUID of base folder for spaces. EIX-2987 |
| `GUID_TEAMROOM_BASE_FOLDER` | string | GUID of base folder for team room folders. EIX-2138 |
| `GUID_TEXTREADER_FOLDER` | string | Object-GUID of ELO Textreader folder. |
| `GUID_TRNOTCONV_FOLDER` | string | Object-GUID of ELO Textreader not converted documents folder. |
| `GUID_USERS_FOLDER` | string | Object-GUID of users folder. |
| `GUID_WFNODE_ICON_BEGINNODE` | string | @param gUID_SAP_SMART_LINK the GUID_SAP_SMART_LINK to set by the SAP Module. / |
| `GUID_WFNODE_ICON_COLLECTNODE` | string | Object-GUID of icon file for collect node. |
| `GUID_WFNODE_ICON_CYCLE_BEGIN` | string | Object-GUID of icon file for cycle node. |
| `GUID_WFNODE_ICON_CYCLE_END` | string | Object-GUID of icon file for cycle node. |
| `GUID_WFNODE_ICON_IFNODE` | string | Object-GUID of icon file for decision node. |
| `GUID_WFNODE_ICON_PERSONNODE` | string | Object-GUID of icon file for person node. |
| `GUID_WFNODE_ICON_PLUGINNODE` | string | Object-GUID of icon file for plugin node. This node is intended to trigger external events or to address external systems. OnEnter is handled synchron |
| `GUID_WFNODE_ICON_SET_SERVER_ID` | string | Object-GUID of icon file for server node. |
| `GUID_WFNODE_ICON_SPLITNODE` | string | Object-GUID of icon file for split node. |
| `GUID_WFNODE_ICON_TERMINATE` | string | reserved |
| `GUID_WIN_SCRIPTING_BASE` | string | Archive folder /Administration/ELOscripts, VB scripts for Windows Client. |
| `GUID_WORKFLOW_ICONS_BASE` | string | Archive folder that contains the icons for the workflow nodes. |
| `LBT_ARCHIVE` | integer | There is one Sord object inside the archive database with ID 1. It contains some archive configuration and has this type: |
| `LBT_DOCUMENT` | integer | Sord objects with type greater or equal than LBT_DOCUMENT are documents. Sord objects with type greater than LBT_DOCUMENT_MAX can be documents or fold |
| `LBT_DOCUMENT_MAX` | integer | Sord objects with type greater or equal than LBT_DOCUMENT are documents. Sord objects with type greater than LBT_DOCUMENT_MAX can be documents or fold |
| `LBT_FOLDER` | integer | Sord objects with a type between 1 and LBT_DOCUMENT -1 are folders. Sord objects with type greater than LBT_DOCUMENT_MAX can be documents or folders.  |
| `TYPE_USER_FOLDER` | integer | Sord type of user folder. User folders are stored under folder Administration/Users and this value is used as `Sord#type`. |
| `lnDesc` | integer | Length of description + hidden text / |
| `mbAclItems` | string | ACL in a human readable format. / |
| `mbAll` | SordZ | All members without mbSmallDocumentContent mbPreview Since 12.00.000.046, this selector will provide `Sord#refPaths` for lazy loading. / |
| `mbAllIndex` | SordZ | All members without mbSmallDocumentContent mbPreview mbDocVersionMembers mbRefPaths mbAttVersionMembers / |
| `mbAllMembers` | string | All members - without mbSmallDocumentContent / |
| `mbAllMembersLazy` | string | As `#mbAllMembers` but provides `Sord#refPaths` for lazy loading. |
| `mbAspectObjects` | string | If `DocMask#dataOrganisation` = `DocMaskC#DATA_ORGANISATION_ASPECT` then the data of index lines is contained in aspect objects (Map values of arbitra |
| `mbAttVersionMembers` | string | Member bit for Sord.attVersion |
| `mbCheckout` | SordZ | Includes: mbAllMembers, mbSmallDocumentContent without mbPreview / |
| `mbCheckoutPreview` | SordZ | Includes: mbAllMembers, mbSmallDocumentContent, mbPreview |
| `mbContentStream` | string | Document file content is supplied in `FileData#stream`. |
| `mbDelDateIso` | string |  |
| `mbDeleted` | string |  |
| `mbDesc` | string | Description and Hidden Text / |
| `mbDetails` | string |  |
| `mbDocVersion` | string |  |
| `mbDocVersionMembers` | string | Version information of the current document work version. / |
| `mbHiddenText` | string |  |
| `mbIDateIso` | string |  |
| `mbLean` | SordZ | Lean members |
| `mbLeanMembers` | string | Includes: ObjDataC.mbAllMembers with mbAclItems, mbObjKeys |
| `mbLinks` | string | GUIDs of linked archive entries. / |
| `mbLinksComeIn` | string |  |
| `mbLinksGoOut` | string |  |
| `mbMin` | SordZ | Minimum members. |
| `mbMinDocVersion` | SordZ | Includes: mbMinMembers, mbDocVersionMembers, mbPreview |
| `mbMinMembers` | string | Includes: mbLeanMembers without mbObjKeys |
| `mbObjKeys` | string | Index lines. / |
| `mbOnlyGuid` | SordZ | Includes only Sord.guid / |
| `mbOnlyId` | SordZ | Includes only Sord.id / |
| `mbOnlyLock` | SordZ | Do not store/read any members. Evaluate the lock flag only. / |
| `mbOnlyUnlock` | SordZ | Same as mbOnlyLock / |
| `mbOwnerName` | string |  |
| `mbParentIds` | string | GUIDs of parents that reference this / |
| `mbPhysPath` | string | Set this option to return the physical path of the document in the DocVersion object. This Option requires always a request to Document Manager. / |
| `mbPreview` | string | Return mbPreview |
| `mbReadOnlyMembers` | string | This members are read-only and ignored in checkinSord / |
| `mbRefPaths` | string | Reference paths. / |
| `mbReplMembers` | string | Includes: ObjDataC.mbAllMembers with mbObjKeys |
| `mbReplNames` | string | Replication set names. / |
| `mbReplSet` | string | Replication set. / |
| `mbSmallDocumentContent` | string | Return the content of a "small" document in DocVersion.fileData . Reading small documents is up to 3 times faster this way. The IX configuration defin |
| `mbWriteOnlyMembers` | string | This members are write-only and were not read in checkoutSord, checkoutDoc, findFirstSords. mbSDesc, mbSName / |
| `mbXDateIso` | string |  |

#### `SordDetails`

Objects of this class are data elements and control the values assigned to certain boolean properties(yes/no attributes). /

| Property | Type | Description |
|----------|------|-------------|
| `arcReplEnabled` | boolean | True, if replication is enabled for this archive. / |
| `archivingMode` | integer | Archiving mode. The possible values are version controlled ArchivingModeC.VERSION read-only ArchivingModeC.READONLY read/write ArchivingModeC.READWRIT |
| `documentContainer` | boolean | Folders can be marked as a document container by this flag. If true, clients are advised to preview the first document in this folder on selection. |
| `encryptionSet` | integer | Encryption set number. / |
| `fulltext` | boolean | Document is or should be containted in the fultext database. / |
| `fulltextDone` | boolean | Document is indexed in the fultext database. / |
| `incomplete` | boolean | True, if a document or attachment version has been deleted. |
| `inheritAclDisabled` | boolean | Do not inherit permissions from parent Sord. |
| `isDynamicFolder` | boolean | Is true iff the current sord is a dynamic folder. |
| `limitedReleaseDocument` | boolean | Documents using this mask may be used as release notes |
| `linked` | boolean | True, if this object has links to other Sords. This member is read-only and is ignored in checkinSord and checkinDocEnd. |
| `linkedPermanent` | boolean | True, if this object has permanent links to other Sords. This member is read-only and is ignored in checkinSord and checkinDocEnd. |
| `region` | boolean | If this sord is a folder, it establishes a region within the repository tree. This flag is only valid for sords with a mask of data organisation `DocM |
| `replRoot` | boolean | True, if this object is a root folder for replication. / |
| `sortOrder` | integer | Sort order of child entries. This value is only valid for folder objects. |
| `translateSordName` | boolean | If true translate the sord's short description into or from the user language. |
| `type` | SordTypeEnum | The type of sord object. |
| `workspace` | boolean | If true the sord is a workspace folder. |

#### `SordHist`

Version history for the keywording from an object. A version history is created for a sord object when the keywording is changed for the first time (a newly created sord has no version history). Once created only one SordHist object exist for the sord object and is assigned to the sord object via the Sord.guid = SordHist.objGuid relationship. The keywording properties that were altered in the change process are saved in an array of SordHistKey objects. Copyright: Copyright (c) 2004 Organisation:

| Property | Type | Description |
|----------|------|-------------|
| `aspectObjects` | MapToListOfMapToIndexValue | Index values. This member is only valid, if the associated keywording form is organized as `DocMask#dataOrganisation` = `DocMaskC#DATA_ORGANISATION_AS |
| `histGuid` | string | Name of the replication server |
| `histKeys` | array | An array of the keywording changes. / |
| `histSource` | integer | Identifies the application with which changes were made to the keywording. / |
| `objGuid` | string | GUID of the sord object. / |
| `replServerId` | string | The name of the replication server from which this change for this sord was made. Corresponds to `ServerInfo#replProcessOnServerId` |
| `timeStampLocal` | string | Timestamp of the change in the timezone of the client. The format is JJJJ.MM.DD.hh.mm.ss / |
| `timeStampUTC` | string | Timestamp of the change in the timezone of the client, in UTC form. The format is JJJJ.MM.DD.hh.mm.ss / |
| `userName` | string | The name of the user who carried out the changes. / |
| `userNo` | integer | The user who carried out the changes. / |
| `workStation` | string | The name of the computer from which the change was carried out. This is the parameter clientComputer which is provided by the ix.login function. / |

#### `SordHistC`

Constanst for class SordHist.

| Property | Type | Description |
|----------|------|-------------|
| `SRC_CLIENT` | integer | History entry created by ELO Windows Client. / |
| `SRC_IGW` | integer | History entry created by ELO Internet Gateway. / |
| `SRC_IX` | integer | History entry created by Indexserver. / |
| `SRC_NONE` | integer | History entry created by unknown program. / |
| `SRC_OLE` | integer | History entry created by ELO Automation Interface. / |
| `SRC_REPL` | integer | History entry created by ELO Replication. / |
| `SRC_SAP` | integer | History entry created by ELO SAPALINK. / |
| `SRC_SYNC` | integer | History entry created by ELO Archive Synchronisation. / |
| `SRC_XML` | integer | History entry created by ELO XML Importer / |

#### `SordHistKey`

This class provides the version information for a keywording attribute that has been modified. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `histGuid` | string | Internal helper column for memo text. |
| `keyData` | string | Value of dat of the attribute. / |
| `keyId` | integer | External ID of the attribute, serves as an identifier for keyNames. |
| `keyIndex` | integer | Index of the attribute within an array of attributes. |
| `keyName` | string | Name of the attribute. / |
| `keyNo` | integer | ID of the attribute. / |

#### `SordHistKeyC`

@author Imig /

| Property | Type | Description |
|----------|------|-------------|
| `ID_DOCMASK_NAME` | integer | Entry ID for Sord.mask. / |
| `ID_RESERVED_MIN` | integer | Entry IDs greater or equal of this value are used for Sord.name, Sord.xDate etc. / |
| `ID_SORD_ACL` | integer | Entry ID for Sord.acl |
| `ID_SORD_CONFIDENTIALITY` | integer | Entry ID for Sord.confidentiality. |
| `ID_SORD_DELDATE` | integer | Entry ID for Sord.delDate. |
| `ID_SORD_DESC` | integer | Entry ID for Sord.desc. / |
| `ID_SORD_EXTERNALID` | integer | Entry ID for Sord.externalId. |
| `ID_SORD_NAME` | integer | Entry ID for Sord.name. / |
| `ID_SORD_REFERENCEID` | integer | Entry ID for Sord.referenceId. |
| `ID_SORD_XDATE` | integer | Entry ID for Sord.xDate. / |
| `NAME_DOCMASK_NAME` | string | Entry mame for Sord.name. / |
| `NAME_SORD_ACL` | string | Entry ID for Sord.acl |
| `NAME_SORD_CONFIDENTIALITY` | string | Entry name for Sord.confidentiality. |
| `NAME_SORD_DELDATE` | string | Entry name for Sord.delDate. |
| `NAME_SORD_DESC` | string | Entry name for Sord.desc. / |
| `NAME_SORD_EXTERNALID` | string | Entry name for Sord.externalId. |
| `NAME_SORD_NAME` | string | Entry name for Sord.name. / |
| `NAME_SORD_REFERENCEID` | string | Entry name for Sord.referenceId. |
| `NAME_SORD_XDATE` | string | Entry name for Sord.xDate. / |

#### `SordLink`

This class represents a link to an archive entry. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Numerical ID or GUID of referenced Sord. / |
| `linkId` | string | Link ID. / |
| `permanent` | boolean | True, if this SordLink is permanent. Permanent links between Sords cannot be deleted. |

#### `SordLinkC`

Constants-class for the table links.

| Property | Type | Description |
|----------|------|-------------|
| `FLAG_PERMANENT` | string |  |

#### `SordPath`

Type: object, Properties: sords

#### `SordPaths`

Type: object, Properties: sordPaths

#### `SordType`

Each file structure element is assigned a SordType. This SordType has three icons , which are used in the different view in the client: a standard icon, a disabled icon (empty folders or references) and a workflow icon. The icons are available in BMP, ICO and JPEG format. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH see@ SordTypeC SordTypeC

| Property | Type | Description |
|----------|------|-------------|
| `disabledIcon` | FileData | File data of disabled icon. / |
| `displayName` | string | Package name of SordType |
| `extensions` | array | For document types, this array lists the associated file extensions. / |
| `guid` | string | GUID of SordType EIX-2032 |
| `icon` | FileData | File data of normal icon. / |
| `id` | integer | Sord type ID. / |
| `name` | string | Type name. / |
| `nameTranslationKey` | string | Translation-keyword for {@link SordType#name}. |
| `packageName` | string | Package name of SordType |
| `type` | SordTypeEnum | Type of SordType |
| `workflowIcon` | FileData | File data of workflow icon. / |

#### `SordTypeC`

Constants for folder or document types.

| Property | Type | Description |
|----------|------|-------------|
| `GUID_ACCESS` | string | access |
| `GUID_ADRESSE` | string | adresse |
| `GUID_AKTENKOFFER` | string | aktenkoffer |
| `GUID_AKTEN_SCHUBLADE` | string | akten_schublade |
| `GUID_AKTEN_SCHUBLADE_ROT` | string | akten_schublade_rot |
| `GUID_AKTIVITAETEN` | string | aktivitaeten |
| `GUID_AUDIO` | string | audio |
| `GUID_AUFTRAGSBEARBEITUNG` | string | auftragsbearbeitung |
| `GUID_AUTOCAD_DWF` | string | autocad_dwf |
| `GUID_AUTOCAD_DWG` | string | autocad_dwg |
| `GUID_AUTOCAD_DXF` | string | autocad_dxf |
| `GUID_BESUCHSBERICHTE` | string | besuchsberichte |
| `GUID_BILD` | string | bild |
| `GUID_BMP` | string | bmp |
| `GUID_CALC` | string | calc |
| `GUID_CHM_HILFE` | string | chm_hilfe |
| `GUID_DOKUMENT` | string | dokument |
| `GUID_DRAW` | string | draw |
| `GUID_EBENE_32` | string | ebene_32 |
| `GUID_EBENE_4` | string | ebene_4 |
| `GUID_EBENE_5` | string | ebene_5 |
| `GUID_EBENE_6` | string | ebene_6 |
| `GUID_EINZELPERSON` | string | einzelperson |
| `GUID_EMAIL` | string | EMAIL |
| `GUID_EXCEL` | string | excel |
| `GUID_FIRMA` | string | firma |
| `GUID_FORMULARORDNER` | string | formularordner |
| `GUID_GIF` | string | gif |
| `GUID_IMPRESS` | string | impress |
| `GUID_JAVASCRIPT` | string | javascript |
| `GUID_KUNDEN` | string | kunden |
| `GUID_KUNDENGRUPPE` | string | kundengruppe |
| `GUID_ORDNER` | string | ordner |
| `GUID_ORDNER_BLAU` | string | ordner_blau |
| `GUID_ORDNER_GELB` | string | ordner_gelb |
| `GUID_ORDNER_GRUEN` | string | ordner_gruen |
| `GUID_ORDNER_ROT` | string | ordner_rot |
| `GUID_PDF` | string | pdf |
| `GUID_PNG` | string | png |
| `GUID_POWERPOINT` | string | powerpoint |
| `GUID_PROJEKTARBEIT` | string | projektarbeit |
| `GUID_REGISTER` | string | register |
| `GUID_REGISTER_BLAU` | string | register_blau |
| `GUID_REGISTER_GELB` | string | register_gelb |
| `GUID_REGISTER_GRUEN` | string | register_gruen |
| `GUID_REGISTER_ROT` | string | register_rot |
| `GUID_SCAN_DOKUMENT` | string | scan_dokument |
| `GUID_SCHRANK` | string | schrank |
| `GUID_SCHRIFTVERKEHR` | string | schriftverkehr |
| `GUID_SORD_TYPE_ICONS` | string | GUID for folder "/Administration/Sord Type Icons" |
| `GUID_SUPPORT` | string | support |
| `GUID_TELEFON` | string | telefon |
| `GUID_TXT` | string | txt |
| `GUID_VIDEO` | string | video |
| `GUID_VISIO` | string | visio |
| `GUID_WEB_ARCHIV` | string | web_archiv |
| `GUID_WEB_DOKUMENT` | string | web_dokument |
| `GUID_WORD` | string | word |
| `GUID_WORKFLOWORDNER` | string | workflowordner |
| `GUID_WRITER` | string | writer |
| `GUID_XML` | string | xml |
| `GUID_ZIP` | string | zip |
| `MAX_DOCUMENT_TYPES` | integer | Maximum number of document types (=746). |
| `MAX_FOLDER_TYPES` | integer | Maximum number of folder types (=253). |
| `mbAllBMP` | SordTypeZ |  |
| `mbAllICO` | SordTypeZ |  |
| `mbAllJPG` | SordTypeZ | Return file data of normal, workflow and disabled icon in checkoutSordType . / |
| `mbAllMembers` | string | @since 21.00.000.011 / |
| `mbAllPNG` | SordTypeZ | @since 9.00.022.001 / |
| `mbAllSVG` | SordTypeZ | Return file data of normal, workflow and disabled SVG icons in checkoutSordType . |
| `mbBMP` | string |  |
| `mbDisabledIconMember` | string | Return file data of disabled icon in checkoutSordType . / |
| `mbICO` | string |  |
| `mbIconBMP` | SordTypeZ |  |
| `mbIconICO` | SordTypeZ |  |
| `mbIconJPG` | SordTypeZ | Return icon file data in checkoutSordType . / |
| `mbIconMember` | string | Return icon file data in checkoutSordType . / |
| `mbIconPNG` | SordTypeZ | @since 9.00.022.001 / |
| `mbIconSVG` | SordTypeZ | Return SVG icon file data in checkoutSordType . |
| `mbIconsBMP` | SordTypeZ |  |
| `mbIconsICO` | SordTypeZ |  |
| `mbIconsJPG` | SordTypeZ | Return file data of normal icon and disabled icon in checkoutSordType . / |
| `mbIconsPNG` | SordTypeZ | @since 9.00.022.001 / |
| `mbIconsSVG` | SordTypeZ | Return file data of normal and disabled SVG icons in checkoutSordType . |
| `mbIdNameExt` | string | ID, name, extension. / |
| `mbJPG` | string |  |
| `mbNoIcons` | SordTypeZ | Return only ID, name, extension - no icon data. / |
| `mbPNG` | string | @since 9.00.022.001 / |
| `mbPackageName` | string | Package level. |
| `mbSVG` | string | @since 23.02.000.007 / |
| `mbType` | string | Return the type in checkoutSordType . |
| `mbWorkflowIconMember` | string | Return file data of workflow icon in checkoutSordType . / |

#### `SordTypeCheckinResult`

Object returned by `IXServicePortIF#checkinSordTypes2`. It contains the identifier list of checked-in sord types.

| Property | Type | Description |
|----------|------|-------------|
| `sordTypeIds` | ListOfInteger | Contains the identifier list of checked-in sord types. The order of the items in this list corresponds to the order of the SordTypes when they were ch |

#### `SordTypeCheckoutResult`

This object contains the sord type information returned by `IXServicePortIF#checkoutSordTypes2`. Contains the SortTypes according to the parameter sordTypeZ passed to the function checkoutSordTypes2.

| Property | Type | Description |
|----------|------|-------------|
| `sordTypes` | ListOfSordType |  |

#### `SordTypeDataC`

<p>Bit constants for members of SordType</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: 

#### `SordTypeEnum`

Enum to differentiate between folders and documents. `SordType#type`.

#### `SordTypeZ`

This class encapsulates the constants of SordTypeC Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from SordTypeC class. / |

#### `SordZ`

This class encapsulates the constants of SordC Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from SordC class. / |

#### `SortOrderC`

This class contains constants for sorting of archive entries and search results.

| Property | Type | Description |
|----------|------|-------------|
| `ALPHA` | integer | Subitems are sorted by name. / |
| `DEFAULT` | integer |  |
| `EXTERNALID` | integer | Used for ascending ordering of Sords by externalId. Can only be used for searches. |
| `IALPHA` | integer | Subitems are sorted by name descending. / |
| `ID` | integer | Used for ascending ordering of users by id. This value can be used for  {@link FindUserInfo#sortOrder} |
| `IDATE` | integer | Subitems are sorted by internal date. / |
| `IEXTERNALID` | integer | Used for descending ordering of Sords by externalId. Can only be used for searches. |
| `IID` | integer | Used for descending ordering of users by id. This value can be used for  {@link FindUserInfo#sortOrder} |
| `IIDATE` | integer | Subitems are sorted by internal date descending. / |
| `INAME` | integer | Used for descending ordering of users by username. This value can be used for  {@link FindUserInfo#sortOrder}  As opposed to {@link SortOrderC#IALPHA} |
| `IREFERENCEID` | integer | Used for descending ordering of Sords by referenceId. Can only be used for searches. |
| `IUSERNAME` | integer | Used for the descending ordering of threads by username. This value can be used for `FindBackgroundThreadOptions#sortOrder`. |
| `IXDATE` | integer | Subitems are sorted by external date descending. / |
| `MANUAL` | integer | Subitems are sorted manually. / |
| `NAME` | integer | Used for ascending ordering of users by username. This value can be used for  {@link FindUserInfo#sortOrder}  As opposed to {@link SortOrderC#ALPHA} a |
| `NONE` | integer |  |
| `REFERENCEID` | integer | Used for ascending ordering of Sords by referenceId. Can only be used for searches. |
| `USERNAME` | integer | Used for the ascending ordering of threads by username. This value can be used for `FindBackgroundThreadOptions#sortOrder`. |
| `XDATE` | integer | Subitems are sorted by external date. / |
| `dummy` | integer |  |

#### `SortOrderSequenceE`

Possible sorting sequences of database searches for aspect data.

#### `StartAdHocWorkflowInfo`

This class contains several options that are used to start the AdHocWorkflow

| Property | Type | Description |
|----------|------|-------------|
| `acceptMessage` | string | This message is shown if the workflow is accepted by a person. |
| `actionRejectMessage` | string | This message is shown if the workflow is rejected. |
| `breakWorkflowMessage` | string | This message is send to the user who started the workflow if the workflow is canceled. / |
| `cancelMessage` | string | The message that is send to the user specified with cancelUserId , if the workflow is canceled. / |
| `cancelUserId` | string | If the workflow is canceled, this user receives a message, cancelMessage . / |
| `deactivateNodes` | boolean | If true, all person nodes are deactivated when the workflow is canceled. This option is only used for "parallel for validation" workflow. Otherwise th |
| `finishedMessage` | string | The message that is send to the user specified with finishedUserId , if the workflow is finished. / |
| `finishedScript` | string | This script is executed, when the workflow is finished. / |
| `finishedUserId` | string | If the workflow is finished, this user receives a message, finishedMessage . / |
| `flags` | integer | Control flags for the node, a combination of WFNode.C.FLAG_* constants. |
| `forValidation` | boolean | If true, the workflow comes back to the user who started it. / |
| `nodeInfos` | ListOfValueClass | The information of all nodes in the workflow. |
| `nodeName` | string | Start node name. / |
| `noticeMessage` | string | This message is shown if the a person was informed about the workflow. |
| `serialFlow` | boolean | If true, the workflow routes the object from user to user. The workflow finishes when the last user has edited their node. If serialFlow is false, the |
| `successMessage` | string | This message is shown if the workflow is successfully processed. |
| `timeLimit` | WFTimeLimit | Time-limit for the entire workflow. |
| `timeLimitEscalations` | array | Additional definitions for time limits. |
| `userIdsToDeactivate` | array | The list of the person nodes to be deactivated when the workflow is canceled. This option is only used for "parallel for validation" workflow. Otherwi |
| `workflowRepeatMessage` | string | This message is send to the user who started the workflow if the workflow is repeated. / |

#### `StartWorkflowInfo`

This class is used as a parameter in the function `IXServicePortIF#startWorkFlow2(ClientInfo, String, StartWorkflowInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `flowName` | string | Name of the new workflow. / |
| `flowOwner` | string | The flow owner ID. / |
| `templFlowId` | string | Name or ID of the workflow template. / |

#### `StoreInfo`

This class represents a storage path. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH Usage for Bucket Storages (S3 and Azure) Amazon S3 For Amazon S3 the following attributes must be specified: name: any string scatter: 13 for normal path, 14 for backup path; see `de.elo.ix.storeext.ScatterInfoE` cloudType: 0 for MinIO; see `de.elo.ix.storeext.StorageTypeE` endpoint: URL to S3 account accessKey: from S3 account secretKey: from S3 account bucket: bucket name region: from S3 a

| Property | Type | Description |
|----------|------|-------------|
| `accessKey` | string | AccessKey for Cloud Storage. |
| `bucket` | string | Bucket name for Cloud Storage. Bucket names must be unique across all existing bucket names in Amazon S3 / Azure. |
| `cloudType` | integer | Type of Cloud Storage. |
| `createDateISO` | string | Create date (UTC). / |
| `dir` | string | Physical directory where the documents of this path are stored. Length of the field in database: 255byte. / |
| `encryptionKey` | string | Encryption key for Cloud Storage. |
| `endpoint` | string | Endpoint (URL/IP/PORT) for Cloud Storage. |
| `flags` | integer | Bitset of options. |
| `fulltextDir` | string | Physical directory where fulltext content is stored. Length of the field in database: 255byte. |
| `id` | integer | Path ID Set this value to -1 in order to create a new storage path. / |
| `name` | string | Path name. Length of the field in database: 16byte. / |
| `previewDir` | string | Physical directory where previews stored. Length of the field in database: 255byte. |
| `region` | string | Region for Amazon S3 Cloud Storage. |
| `retentionMode` | integer | RetentionMode for S3 Storage |
| `scatter` | integer | Granularity of subdirectories in the physical directory. |
| `secretKey` | string | SecretKey for Cloud Storage. |
| `stdPath` | boolean | standard path? read-only / |
| `updateDateISO` | string | Update date (UTC). / |

#### `StoreInfoC`

Definition of a document path. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `CLOUD_AZURE` | integer | Azure Blob Storage. |
| `CLOUD_GOOGLE` | integer | Google Cloud Storage. not yet implemented. |
| `CLOUD_MINIO` | integer | Minio Cloud Storage. |
| `CLOUD_S3` | integer | Amazon S3 Cloud Storage. |
| `DMPATH_ELOSYS` | string | Reserved path name. Documents stored within DMPATH_ELOSYS will not be purged. |
| `FLAG_BACKUP` | integer | Backup path. / |
| `FLAG_ELO5_NO_NT_SECURITY` | integer | Only ELO 5.0: no NT security. / |
| `FLAG_ELO5_PATH_CHANGED` | integer | Only ELO 5.0: path has been changed. / |
| `FLAG_ELO5_PATH_PROTECTED` | integer | Only ELO 5.0: path is protected. / |
| `FLAG_NO_RESTORE` | integer | Used with FLAG_BACKUP, document files are not restored in a normal path. / |
| `FLAG_READONLY` | integer | Path is read-only. / |
| `FLAG_WORM` | integer | Path can only be written once. DM does not use temporary files. / |
| `NO_FILE_ENCRYPTION` | string | Cloud storage encryption is set by default. If this constant is set in field StoreInfo.encryptionKey there will be no encryption. |
| `RETENTION_AZURE_IMMUTABLE_LOCKED` | integer | Retention Mode AZURE_IMMUTABLE_LOCKED |
| `RETENTION_AZURE_IMMUTABLE_UNLOCKED` | integer | Retention Mode AZURE_IMMUTABLE_UNLOCKED |
| `RETENTION_COMPLIANCE` | integer | Retention Mode COMPLIANCE |
| `RETENTION_GOVERNANCE` | integer | Retention Mode GOVERNANCE |
| `RETENTION_NONE` | integer | Retention Mode NONE |
| `SP_16` | integer | 16k documents per sub directory |
| `SP_1K` | integer | 1k documents per sub directory |
| `SP_4K` | integer | 4k documents per sub directory |
| `SP_64K` | integer | 64k documents per sub directory |
| `SP_ACTIVATOR` | integer | Store in KGS Activator. |
| `SP_AZURE` | integer | Use Azure Blob Storage |
| `SP_AZURE_EXTERNAL` | integer | Use Azure Blob Storage as backup device |
| `SP_CENTERA` | integer | Store on CENTERA device. |
| `SP_FLAT` | integer | No sub directories. |
| `SP_FULL` | integer | 256 folders with 256 documents |
| `SP_MD5_HASH` | integer | Store using MD5 hash. |
| `SP_REL_FILE_PATH` | integer | External storage definition. A physical (relative) path is specified for each document. |
| `SP_S3` | integer | Store on S3 Cloud Storage |
| `SP_S3_EXTERNAL` | integer | Use S3 Cloud Storage as Backup Device |
| `SP_TSM` | integer | Store on TSM device. |

#### `StringListValue`

A list of strings which is joined by AND or OR depending on andOperator . Defaults to an OR-disjunction.

| Property | Type | Description |
|----------|------|-------------|
| `andOperator` | boolean | Connective of list elements (default is OR (=false) ). / |
| `valueList` | ListOfStringValue | A list of strings which is joined by AND or OR depending on andOperator . / |

#### `StringRangeValue`

Class to commit a range filter of String values. To perform an open range query (e.g. from now to infinite), only submit either a value for from or to

| Property | Type | Description |
|----------|------|-------------|
| `from` | StringSingleValue |  |
| `to` | StringSingleValue |  |

#### `StringSingleValue`

@since 10.99.999.023 /

| Property | Type | Description |
|----------|------|-------------|
| `value` | string | text value Do not escape any special characters, this is done by IX. Exception: if value starts with "=" (PowerSearch), nothing is escaped by IX If a  |

#### `StringValue`

Class to commit a text value to iSearch via QueryFilter.

#### `SubsInfo`

This class contains information about a user that is being deputized by another user.

| Property | Type | Description |
|----------|------|-------------|
| `active` | boolean | The deputy relationship is applied if this member is true. If false, the deputy does not currently act as the user but may activate the relationship b |
| `inheritRights` | boolean | The deputy inherits the rights of the user if this member is true. / |
| `subsId` | integer | Deputy: the user that deputizes userId . / |
| `subsName` | string | Deputy name. If this member is set subsId is ignored. / |
| `userId` | integer | The user that is being deputized by subsId / |
| `userName` | string | User name. If this member is set userId is ignored. / |

#### `SubsInfoC`

Constants for class SubsInfo.

| Property | Type | Description |
|----------|------|-------------|
| `mbActiveId` | string |  |
| `mbInheritRights` | string |  |
| `mbSubsId` | string |  |
| `mbSubsName` | string |  |
| `mbUserId` | string |  |
| `mbUserName` | string |  |

#### `Subscription`

This class describes a subscription. A user can subscribe for changes to an object. Currently, the only supported object type is a document feed. If the feed receives new comments, notification information is inserted into the database for the user. By calling FeedService.findFirstActions and setting FindActionsInfo.findNotifications=true, the user can search for her notifications.

| Property | Type | Description |
|----------|------|-------------|
| `createDateIso` | string | Create date of the subscription. |
| `userGuid` | string | GUID of user who registered the subscription. |
| `watchGuid` | string | GUID of Object to be watched. This is either a {@link de.elo.ix.client.feed.Feed#getGuid()},  {@link de.elo.ix.client.feed.Action#getGuid()} or  {@lin |

#### `SubscriptionC`

Type: object, Properties: mbAll

#### `SubscriptionDataC`

<p>Bit constants for members of Subscription</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `SubscriptionZ`

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the SubscriptionC class. / |

#### `Substitution`

A Substitution is used to create, update and read substitutions.

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | The current users access rights for this Substitution. Returns a combination of AccessC.LUR_ constants. Read-only. |
| `creatorDisplayName` | string | Locale specific user name of the user that has created the Substitution Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `creatorId` | integer | User who created the Substitution. Read-only. / |
| `creatorName` | string | User who created the Substitution. Read-only. / |
| `forwardedBy` | ListOfInteger | If the substitution was forwarded by `IXServicePortIF#forwardSubstitution`, the original substitutes (`#substituteId` are saved here. Read-only |
| `forwardedFrom` | string | If a substitution was forwarded to an other one, this references the `#guid` of the substitution it was forwarded from. Read-only. / |
| `forwardedTo` | string | If a substitution was forwarded to an other one, this references the `#guid` of the substitution it was forwarded to. Read-only. / |
| `groupsToInheritRights` | ListOfInteger | List of groups of which the substitute inherits the rights. It is not possible to inherit rights from a user, only from groups. Every group needs to h |
| `guid` | string | GUID of substitution A new substitution is saved if guid is empty on checkin. An existing substitution is updated if a guid is provided. / |
| `lockDisplayName` | string | Locale specific user name of the user that has locked the Substitution If null, no lock is held. Read-only. This value is the resolved `UserInfo#nameT |
| `lockId` | integer | User ID of the user that has locked the Substitution If -1, no lock is held. Read-only, ignored in `IXServicePortIF#checkinSubstitutions` / |
| `lockName` | string | Name of the user that has locked the Substitution Read-only, ignored in `IXServicePortIF#checkinSubstitutions` / |
| `message` | string | Message to add to the substitution. / |
| `settings` | SubstitutionSettings | Contains all boolean settings for a Substitution / |
| `status` | SubstitutionStatus | Returns the status of the substitution. In case of checking in a substitution, this variable is ignored. / |
| `substituteDisplayName` | string | Locale specific user name of the user or group to whom the substitution is directed. Read-only. This value is the resolved `UserInfo#nameTranslationKe |
| `substituteId` | integer | User or group to whom the substitution is directed. This variable is ignored when calling `IXServicePortIF#checkinSubstitutions` if `#substituteName`  |
| `substituteName` | string | User or group to whom the substitution is directed. `#substituteId` is ignored if this member is set when calling `IXServicePortIF#checkinSubstitution |
| `substituteType` | integer | Type of the substitute. Read-only, refers to `UserInfoC#TYPE_GROUP` or `UserInfoC#TYPE_USER` / |
| `substitutionPeriods` | ListOfSubstitutionPeriod | List of time periods in which the substitution is activated automatically if `SubstitutionSettings#activatePeriodsAutomatically` is set to true. / |
| `tstamp` | string | Timestamp of last update. Read-only. / |
| `tstampsync` | string | Timestamp of last update. Read-only. / |
| `userDisplayName` | string | Locale specific user name of the user or group which is substituted by this object. Read-only. This value is the resolved by the property `UserInfo#na |
| `userId` | integer | The user or group which is substituted by this object. This variable is ignored when calling `IXServicePortIF#checkinSubstitutions` if `#userName` is  |
| `userName` | string | The user or group which is substituted by this object. `#userId` is ignored if this member is set when calling `IXServicePortIF#checkinSubstitutions`. |

#### `SubstitutionC`

Bit constants for members of `Substitution`

| Property | Type | Description |
|----------|------|-------------|
| `mbAll` | SubstitutionZ | All Substitution members. / |
| `mbAllMembers` | string | Select all members / |
| `mbCreatorName` | string | Member bit to select `Substitution#creatorName` / |
| `mbLockName` | string | Member bit to select `Substitution#lockName` / |
| `mbStatus` | string | Member bit to select `Substitution#status` / |
| `mbSubstituionPeriods` | string | Member bit to select `Substitution#substitutionPeriods` / |
| `mbSubstituteName` | string | Member bit to select `Substitution#substituteName` / |
| `mbSubstituteType` | string | Member bit to select `Substitution#substituteType` / |
| `mbUserName` | string | Member bit to select `Substitution#userName` / |

#### `SubstitutionDataC`

Bit constants which mirror the database classes. For internal use only. Use `SubstitutionC` instead.

| Property | Type | Description |
|----------|------|-------------|
| `lnForwardedBy` | integer | Max length of DB column `#mbForwardedBy` |
| `lnForwardedFrom` | integer | Max length of DB column `#mbForwardedFrom` / |
| `lnForwardedTo` | integer | Max length of DB column `#mbForwardedTo` / |
| `lnGroupsToInheritRights` | integer | Max length of DB column `#mbGroupsToInheritRights` / |
| `lnGuid` | integer | Max length of DB column `#mbGuid` / |
| `lnMessage` | integer | Max length of DB column `#mbMessage` / |
| `lnTstamp` | integer | Max length of DB column `#mbTstamp` / |
| `lnTstampsync` | integer | Max length of DB column `#mbTstampsync` / |
| `mbAllMembersDB` | string | For internal use only / |
| `mbCreatorId` | string | DB column referenced by `Substitution#creatorId` and `Substitution#creatorName` / |
| `mbForwardedBy` | string | DB column referenced by `Substitution#forwardedBy` |
| `mbForwardedFrom` | string | DB column referenced by `Substitution#forwardedFrom` / |
| `mbForwardedTo` | string | DB column referenced by `Substitution#forwardedTo` / |
| `mbGroupsToInheritRights` | string | DB column referenced by `Substitution#groupsToInheritRights` / |
| `mbGuid` | string | DB column referenced by `Substitution#guid` / |
| `mbLockId` | string | DB column referenced by `Substitution#lockId` and `Substitution#lockName` / |
| `mbMessage` | string | DB column referenced by `Substitution#message` / |
| `mbSettings` | string | DB column referenced by `Substitution#settings` / |
| `mbSubstituteId` | string | DB column referenced by `Substitution#substituteId` and `Substitution#substituteName` / |
| `mbTstamp` | string | DB column referenced by `Substitution#tstamp` / |
| `mbTstampsync` | string | DB column referenced by `Substitution#tstampsync` / |
| `mbUserId` | string | DB column referenced by `Substitution#userId` and `Substitution#userName` / |

#### `SubstitutionPeriod`

A substitution period is used to define time periods for substitutions. A substitution is automatically activated during a time period if `SubstitutionSettings#activatePeriodsAutomatically` is set to true. A time period always needs a start date, this date must not be in the past. The earliest start date is the current day to start a substitution immediately. The end date can be set, then the last day of the substitution is the end date (inclusive). It can also be left empty to have an open end 

| Property | Type | Description |
|----------|------|-------------|
| `endIsodate` | string | End date of a substitution period (inclusive). If this value if empty, the substitution never ends. Date format must be either 'yyyyMMdd' or 'yyyyMMdd |
| `startIsodate` | string | Start date of a substitution period (inclusive) A start date must always be set. Date format must be either 'yyyyMMdd' or 'yyyyMMddHHmmss'. If only a  |
| `substitutionGuid` | string | GUID of the corresponding `Substitution`. Read-only. |

#### `SubstitutionSettings`

This class wraps various boolean settings and parameters for `Substitution`

| Property | Type | Description |
|----------|------|-------------|
| `activatePeriodsAutomatically` | boolean | Define if substitution is activated automatically during a `SubstitutionPeriod`. / |
| `canAccessPersonalTasks` | boolean | Define if the substitute is allowed to find and access tasks (e.g. `WFDiagram`, `Activity`, `Reminder`) which are assigned to the user (`Substitution# |
| `canAccessPostbox` | boolean | Define if the substitute can access the user's postbox. / |
| `canBeActivatedManually` | boolean | Define if the substitution can be activated manually. / |
| `canBeForwarded` | boolean | Define if the the substitution can be forwarded to an other user. / |
| `inheritEffectivePrincipalRights` | boolean | If set to true, the principals effective rights (with all groups and so on) are inherited to the substitute. The substitute then is able to do everyth |
| `isActivatedManually` | boolean | Is the substitution activated manually by calling `IXServicePortIF#activateSubstitution(de.elo.ix.client.ClientInfo, String, de.elo.ix.client.LockZ)`  |
| `superiorSubstitution` | boolean | Defines if a substitution was created as a superior substitution with all rights set. This flag cannot be set by a user himself, but the superior and  |

#### `SubstitutionStatus`

The substitution status is used to inform if a substitution is currently deactivated or activated. If activated, it also informs how it was activated (either by a `SubstitutionPeriod` or manually)

#### `SubstitutionZ`

This class encapsulates the constants of `SubstitutionC`

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from `SubstitutionC`. / |

#### `SubstitutionsResult`

Object returned by `IXServicePortIF#checkinSubstitutions`() and `IXServicePortIF#checkoutSubstitutions`().

| Property | Type | Description |
|----------|------|-------------|
| `substitutionGuids` | ListOfString | List of substitution GUIDs / |
| `substitutions` | ListOfSubstitution | List of substitutions / |

#### `SystemInfo`

This class controls the report functions `SystemInformation#countDocsInStorePath(de.elo.ix.client.ClientInfo, SystemInfo)` and `SystemInformation#userReport(de.elo.ix.client.ClientInfo, SystemInfo)`.

| Property | Type | Description |
|----------|------|-------------|
| `endDate` | string | Select documents created before or on this date. This is an ISODate in UTC. / |
| `reportMode` | UserReportZ | Report mode for `SystemInformation#userReport(de.elo.ix.client.ClientInfo, SystemInfo)` to determine which information should be reported. |
| `startDate` | string | Select documents created on or after this date. This is an ISODate in UTC. / |
| `storePathID` | integer | ID of the `StoreInfo` where the documents should be counted. / |
| `userReportMode` | string | @deprecated use `SystemInfo#setReportMode(UserReportZ)` instead. / |

#### `SystemInformation`

Provides functions for AdminConsole to give an overview over the whole System (e.g. number of Documents or information about all users)

#### `SystemReport`

@author Rypalla

| Property | Type | Description |
|----------|------|-------------|
| `doccount` | string |  |
| `docsize` | string |  |
| `ftsize` | string |  |
| `previewsize` | string |  |

#### `TaskNotifyType`

Type: string

#### `TermsAggregationQueryParams`

Defines parameters to run an aggregation of type "Terms" (a multi-bucket-aggregation). This aggregation query allows sub-aggregations.

| Property | Type | Description |
|----------|------|-------------|
| `missingValue` | string | The missing parameter defines how documents that are missing a value should be treated. By default they will be ignored but it is also possible to tre |
| `order` | AggregationOrderE | The optional order buckets are retrieved. By default, the terms aggregation orders terms by descending document count. If this value is omitted, the d |
| `shardSizeMultiplier` | integer | Each aggregation will run separately on each requested shard. The shardSize parameter indicates the number of term buckets each shard will return to t |
| `size` | integer | Only selected parameters and no sub-aggregations. / |
| `subAggregations` | MapToAggregationQuery | Inner aggregations of this aggregation. / |
| `useShardSizeMultiplier` | boolean | Each aggregation will run separately on each requested shard. The terms aggregations shardSize parameter indicates the number of term buckets each sha |

#### `TermsAggregationResult`

The result object of a terms aggregation. It consists mainly of buckets and within its inner aggregations results (sub-aggregations).

| Property | Type | Description |
|----------|------|-------------|
| `buckets` | ListOfBucket | The buckets (main part of a terms aggregation). / |
| `docCountErrorUpperBound` | string | If you set the show_term_doc_count_error parameter to true, the terms aggregation will include doc_count_error_upper_bound, which is an upper bound to |
| `sumOtherDocCount` | string | Number of documents that didn’t make it into the the top size terms. If this is greater than 0, you can be sure that the terms agg had to throw away s |

#### `Thesaurus`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `compare` | string | DB column: compare / |
| `data` | string | DB column: data / |
| `groupId` | integer | DB column: groupid / |
| `listId` | integer | DB column: listid / |
| `prio` | integer | DB column: prio / |

#### `ThesaurusC`

<p>Bit constants for members of Thesaurus</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation:

#### `Throwable`

Type: object

#### `TranslateTerm`

Objects of this class represent one term in different languages.

| Property | Type | Description |
|----------|------|-------------|
| `deleted` | boolean | True, if this entry is logically deleted. / |
| `guid` | string | GUID / |
| `langs` | array | The languages of the terms in termLangs . Each of the items have to be a language tag of a registered language. Otherwise, the corresponding term in ` |
| `level` | integer | Priority level of this entry. |
| `packageName` | string | Configuration package. |
| `tStamp` | string | Last modified. ISO date with seaparator "." measured in UTC. / |
| `tStampSync` | string | Timestamp of this object's last export by the replication. |
| `termLangs` | array | Term in its languages. The Term termLangs[i] is in Language langs[i] . If a translation does not exist, the corresponding termLangs[.] is an empty str |
| `translationKey` | string | Optional language independent translation key. This value must match the regular expression `TranslateTermC#TRANSLATION_KEY_REGEX`. |

#### `TranslateTermC`

Constants for class TranslateTerm.

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT_LANGUAGES` | array | List of initially supported languages. EIX-3037 For `TranslateTerm#langs` and `ClientInfo#language`, languages have to be specified by their language  |
| `GUID_SYSTEM_LANGUAGES` | string | Use this value in parameter termIds[.] to retrieve the system languages. |
| `OPT_LANGUAGES` | string | This user profile key stores the registered languages. The items are separated by dot and the order corresponds to the langN-fields in table translati |
| `TASKIDS_FOR_SYSTEM_LANGUAGES` | array | Use this value as parameter termIds to retrieve the system languages. |
| `TRANSLATION_KEY_REGEX` | string | Allowed characters for `TranslateTerm#translationKey`. Only a-z, A-Z, 0-9 and forward slash, hyphen, underscore and colon are allowed. |
| `lnTermLang` | integer | Maximum term length; / |

#### `TranslateTermData`

| Property | Type | Description |
|----------|------|-------------|
| `TStamp` | string | Timestamp. Last mofified time, ISO date with dots measured in UTC The format is  JJJJ.MM.DD.hh.mm.ss |
| `TStampSync` | string | Timestamp. Timestamp of this object's last export by the replication. The format is  JJJJ.MM.DD.hh.mm.ss |
| `guid` | string | GUID |
| `lang1` | string | Language 1. System language. |
| `lang10` | string | Language 10 |
| `lang11` | string | Language 11 |
| `lang12` | string | Language 12 |
| `lang13` | string | Language 13 |
| `lang14` | string | Language 14 |
| `lang15` | string | Language 15 |
| `lang16` | string | Language 16 |
| `lang17` | string | Language 17 |
| `lang18` | string | Language 18 |
| `lang19` | string | Language 19 |
| `lang2` | string | Language 2 |
| `lang20` | string | Language 20 |
| `lang21` | string | Language 21 |
| `lang22` | string | Language 22 |
| `lang23` | string | Language 23 |
| `lang24` | string | Language 24 |
| `lang25` | string | Language 25 |
| `lang26` | string | Language 26 |
| `lang27` | string | Language 27 |
| `lang28` | string | Language 28 |
| `lang29` | string | Language 29 |
| `lang3` | string | Language 3 |
| `lang30` | string | Language 30 |
| `lang4` | string | Language 4 |
| `lang5` | string | Language 5 |
| `lang6` | string | Language 6 |
| `lang7` | string | Language 7 |
| `lang8` | string | Language 8 |
| `lang9` | string | Language 9 |
| `level` | integer | Priority level of this entry. |
| `packageName` | string | Configuration package. |
| `status` | integer | Status. The object is not deleted, if <code>status</code> is -1. |
| `translationKey` | string | Language independent translation key. |

#### `TranslateTermDataC`

<p>Bit constants for members of TranslateTermData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organ

#### `UpDownloadEventInfo`

This class describes a document stream (version, attachment, preview, fulltext, signature) being uploaded or downloaded in an event of `DocumentEvents`.

| Property | Type | Description |
|----------|------|-------------|
| `docId` | integer | Document version ID. Only valid for `DocumentEvents#beginDownload(de.elo.ix.client.IXServerEventsContext, UpDownloadEventInfo)`. / |
| `kind` | UpDownloadKind | Kind of document related stream. / |
| `length` | string | Number of bytes to download from a document related stream. Only valid for `DocumentEvents#beginDownload(de.elo.ix.client.IXServerEventsContext, UpDow |
| `offset` | string | Document related stream should be downloaded starting at this position. Only valid for `DocumentEvents#beginDownload(de.elo.ix.client.IXServerEventsCo |
| `preliminaryTest` | boolean | A preliminary test for a later uploaded stream. While uploading a content stream for a new document via `de.elo.ix.client.IXConnectionIF#upload(String |
| `sord` | Sord | Sord object. Check `Sord#getChangedMembers()` to find out, which members of the Sord object are valid. Usually, only `Sord#getId()` is set. This membe |
| `usage` | UpDownloadUsage | From where an event is called. / |

#### `UpDownloadKind`

This enum defines constants to distinguish between different kinds of file data assigned to a document.

#### `UpDownloadUsage`

This enumeration defines constants that describe, from where an event in `DocumentEvents` is called.

#### `UpdaterConfig`

Configuration and status of updater process.

| Property | Type | Description |
|----------|------|-------------|
| `intervalMinutes` | integer |  |
| `ixid` | string | This Indexserver instance is processing the update. / |
| `lastException` | string | Last exception occured during processing. / |
| `lockName` | string | Process runs under this user account. |
| `nextRunAt` | string |  |
| `progressInPercent` | integer |  |
| `status` | SearchIndexerStatus |  |
| `updateNewerThan` | string |  |

#### `UrlParams`

This class describes additional params for an upload or download URL.

| Property | Type | Description |
|----------|------|-------------|
| `highlightTerms` | string | Highlight this terms. This value is only valid for fulltext URLs. Many terms have to be separated by space character. Each term is enclosed in the HTM |
| `length` | string | This class describes additional params for an upload or download URL. |
| `offset` | string | Download bytes beginning from this offset. / |

#### `UserInfo`

Data class containing the user information data for the user logged in to the Index server. User information includes ID, name, rights, parent, etc. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `availableRoles` | ListOfUserName | The user can activate this roles. |
| `desc` | string | User description. / |
| `displayName` | string | Translation-keyword for `UserInfo#name`. |
| `flags` | integer | User rights. Possible values are combinations of AccessC.FLAG_* constants. |
| `flags2` | integer | Second bitset of user rights. |
| `groupList` | array | The groups the user is a member of. It contains all groups the user inherits the rights because of active substitutions (groups which are set in `Subs |
| `guid` | string | GUID |
| `id` | integer | Constructor / |
| `internalUser` | boolean | The flag for a group which will not be removed by LDAP replication. |
| `keylist` | array | User keys. Array of key access rights. Each item is a combination of the access constants AccessC.LUR_* . The key ID corresponds to the index of the k |
| `lastLoginIso` | string | Last login timestamp (in timezone UTC). This value is read-only and undefined for groups. Only the date part is valid. |
| `ldapProperties` | MapToString | Reserved (LDAP user properties). Keys of this map named LDAP_PROP_* in class UserInfoC. All keys are lower case. Mandatory properties - For user: obje |
| `name` | string | User name / |
| `nameTranslationKey` | string | Translation-keyword for {@link UserInfo#name}. |
| `orgUnitIds` | array | Organisation unit IDs. A user or group can be assigned to at most one organization unit. But due to its group membership a user or group can actually  |
| `packageName` | string | The package name of UserInfo |
| `parent` | integer | User ID of the users parent (users adminstrator). / |
| `pwd` | string | User password / |
| `sessions` | array | The currently active tickets for the user / |
| `superiorId` | integer | ID of the users superior. If the user does not have a superior, this value is equal to id . |
| `tStamp` | string | Timestamp The format is JJJJ.MM.DD.hh.mm.ss |
| `tStampSync` | string | Timestamp of this object's last export by the replication. |
| `type` | integer | User type. TYPE_USER for user, TYPE_GROUP for group. |
| `userProductFeatures` | UserProductFeatures | @return `UserProductFeatures` object containing the user's enabled product features. |
| `userProps` | array | Reserved (Additional user properties). Index this array with constants named PROP_* in class UserInfoC. |
| `workspaceInfo` | string | Workspace related data. |

#### `UserInfoC`

Constants related to user information. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `EMPTY_WORKSPACE_INFO` | string | Constant to use to search for all {@link UserInfo} without {@link UserInfo#workspaceInfo} See {@link FindUserInfo#workspaceInfo}  See {@link de.elo.ut |
| `GUID_ADMINISTRATOR` | string | GUID of main administrator |
| `GUID_ELOSERVICE` | string | GUID of the default service user. |
| `GUID_EVERYONE_EXTERNAL_GROUP` | string | GUID of group "Everyone External" |
| `GUID_EVERYONE_GROUP` | string | GUID of group "Everybody" |
| `GUID_USER_DIFFERENTORGUNIT` | string | Constant to use to search for all `UserInfo` without `UserInfo#workspaceInfo` See `FindUserInfo#workspaceInfo` See `de.elo.utils.GUID#EMPTY_WORKSPACE_ |
| `ID_ADMINISTRATOR` | integer | User ID of main administrator. |
| `ID_ADMINISTRATORS_GROUP` | integer | Group ID of administrators. |
| `ID_EVERYONE_GROUP` | integer | Every user is in the group "Everyone". This is the internal ID for this group. |
| `LDAP_KEY_ADMIN_DISPLAY_NAME` | string | adminDisplayName. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_CN` | string | LDAP properties / Common name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_DISPLAY_NAME` | string | Display name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_DISTINGUISHED_NAME` | string | Distinguished name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_DOMAIN` | string | Domain. |
| `LDAP_KEY_EXCH_DELEGATE_LIST_LINK` | string | msExchDelegateListLink. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_HIDE_FROM_ADDRESS_LISTS` | string | msExchHideFromAddressLists. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_JOURNAL_RCPT` | string | msExchMessageJournalRecipient. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_OWNING_SERVER` | string | msExchOwningServer. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_PUBFOLDER_MAILBOX` | string | msExchPublicFolderMailbox. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_RECIPIENT_DISPLAY_TYPE` | string | msExchRecipientDisplayType. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_EXCH_RECIPIENT_TYPE_DETAILS` | string | msExchRecipientTypeDetails. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_FQDN` | string | Full Qualified Domain Name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_GROUP_TYPE` | string | Group type. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_LEGACY_EXCHANGE_DN` | string | LegacyExchangeDN. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_MAIL` | string | Mail. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_MAIL_NICK_NAME` | string | Mail nick name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_MANAGER` | string | Manager. |
| `LDAP_KEY_MEMBER_OF` | string | Member of. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_MS_EXCHANGE_MAILBOX_GUID` | string | Mailbox globally unique identifier. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_NAME` | string | Name. Key to access the map UserInfo.ldapProperties. |
| `LDAP_KEY_OBJECT_CATEGORY` | string | Object category. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_OBJECT_CLASS` | string | Object class. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_OBJECT_GUID` | string | The unique identifier for an object. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_OBJECT_SID` | string | A binary value that specifies the security identifier (SID) of the user. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_ONLINE` | string | Online. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_ONLINE_GUID` | string | Guid. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_ONLINE_MAIL` | string | PrimarySmtpAddress. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_ONLINE_MAILBOX_ENABLED` | string | IsMailboxEnabled. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_ONLINE_RECIPIENT_TYPE_DETAILS` | string | RecipientTypeDetails. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_PROXY_ADDRESSES` | string | Proxy addresses. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_SAM_ACCOUNT_NAME` | string | NT account name. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_SAM_ACCOUNT_TYPE` | string | Contains information about every account type object. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_USER_ACCOUNT_CONTROL` | string | Flags that control the behavior of the user account. Key to access the map UserInfo.ldapProperties |
| `LDAP_KEY_USER_PRINCIPAL_NAME` | string | User principal name. Key to access the map UserInfo.ldapProperties |
| `LDAP_PROP_ADMIN_DISPLAY_NAME` | string | adminDisplayName |
| `LDAP_PROP_CN` | string | Deprecated LDAP properties / Common name |
| `LDAP_PROP_DISPLAY_NAME` | string | Display name |
| `LDAP_PROP_DISTINGUISHED_NAME` | string | Distinguished name |
| `LDAP_PROP_EXCH_DELEGATE_LIST_LINK` | string | msExchDelegateListLink |
| `LDAP_PROP_EXCH_HIDE_FROM_ADDRESS_LISTS` | string | msExchHideFromAddressLists |
| `LDAP_PROP_EXCH_JOURNAL_RCPT` | string | msExchMessageJournalRecipient |
| `LDAP_PROP_EXCH_OWNING_SERVER` | string | msExchOwningServer |
| `LDAP_PROP_EXCH_PUBFOLDER_MAILBOX` | string | msExchPublicFolderMailbox |
| `LDAP_PROP_EXCH_RECIPIENT_DISPLAY_TYPE` | string | msExchRecipientDisplayType |
| `LDAP_PROP_EXCH_RECIPIENT_TYPE_DETAILS` | string | msExchRecipientTypeDetails |
| `LDAP_PROP_FQDN` | string | Full Qualified Domain Name |
| `LDAP_PROP_GROUP_TYPE` | string | Group type |
| `LDAP_PROP_LEGACY_EXCHANGE_DN` | string | LegacyExchangeDN |
| `LDAP_PROP_MAIL` | string | Mail |
| `LDAP_PROP_MAIL_NICK_NAME` | string | Mail nick name |
| `LDAP_PROP_MEMBER_OF` | string | Member of |
| `LDAP_PROP_MS_EXCHANGE_MAILBOX_GUID` | string | Mailbox globally unique identifier |
| `LDAP_PROP_NAME` | string | Name |
| `LDAP_PROP_OBJECT_CATEGORY` | string | Object category |
| `LDAP_PROP_OBJECT_CLASS` | string | Object class |
| `LDAP_PROP_OBJECT_GUID` | string | The unique identifier for an object |
| `LDAP_PROP_OBJECT_SID` | string | A binary value that specifies the security identifier (SID) of the user. |
| `LDAP_PROP_ONLINE` | string | Online |
| `LDAP_PROP_ONLINE_GUID` | string | Guid |
| `LDAP_PROP_ONLINE_MAIL` | string | PrimarySmtpAddress |
| `LDAP_PROP_ONLINE_MAILBOX_ENABLED` | string | IsMailboxEnabled |
| `LDAP_PROP_ONLINE_RECIPIENT_TYPE_DETAILS` | string | RecipientTypeDetails |
| `LDAP_PROP_PROXY_ADDRESSES` | string | Proxy addresses |
| `LDAP_PROP_SAM_ACCOUNT_NAME` | string | NT account name |
| `LDAP_PROP_SAM_ACCOUNT_TYPE` | string | Contains information about every account type object |
| `LDAP_PROP_USER_ACCOUNT_CONTROL` | string | Flags that control the behavior of the user account |
| `LDAP_PROP_USER_PRINCIPAL_NAME` | string | User principal name |
| `MAX_GROUPS` | integer | Maximum number of groups per user. / |
| `MAX_KEY` | integer | Maximum number of keys. / |
| `MAX_NAME` | integer | Maximum user name length. / |
| `MAX_PERSISTENT_GROUPS` | integer | Maximum number of persistent groups per user. / |
| `MAX_USERPROP` | integer | Maximum number of user properties. / |
| `MAX_USERS` | integer | Maximale number of users and groups. / |
| `NO_GROUP_LICENSE_KEY` | string | Constant to use to search for all {@link UserInfo} that do not have a {@link UserProductFeatures#groupLicenseKey} or are an effective member of a grou |
| `PROP_ACTION` | integer | This user property is used to trigger actions in the client application. The value of the property is found at UserInfo.userProps[UserInfoC.PROP_ACTIO |
| `PROP_ACTION_END_PASSWORD_DATE` | string | The password expires. |
| `PROP_ACTION_USER_MUST_CHANGE_PASSWORD` | string | The user must change the password. |
| `PROP_ACTION_USER_SHOULD_CHANGE_PASSWORD` | string | The user should change the password. |
| `PROP_GUID` | integer | Get propety index of GUID |
| `PROP_NAME_EMAIL` | integer |  |
| `PROP_NAME_OS` | integer |  |
| `PROP_USERDEFINED_1` | integer | User property defined by user Constant to access array `UserInfo#userProps`. |
| `PROP_USERDEFINED_2` | integer | User property defined by user Constant to access array `UserInfo#userProps`. |
| `PROP_USERDEFINED_3` | integer | User property defined by user Constant to access array `UserInfo#userProps`. |
| `PROP_USERDEFINED_4` | integer | User property defined by user Constant to access array `UserInfo#userProps`. |
| `PROP_USERDEFINED_5` | integer | User property defined by user Constant to access array `UserInfo#userProps`. |
| `PWD_VALUE_IGNORE` | string | This value can be set for UserInfo.pwd to / |
| `TYPE_GROUP` | integer | Type value for a group. |
| `TYPE_USER` | integer | Type value for an user. |
| `TYPE_USERID_OWNER` | integer | Type value for the current user |
| `UNLOCK_ARCHIVE` | string | Pass this value to unlock the archive. |
| `UPDATE_USER_DATA_BACKGROUND_JOB_NAME` | string | Background job name that updates a large number of user objects. |
| `lnDesc` | integer | Maximum user desc length |
| `lnLdapPropKey` | integer | Maximum length of LDAP property key. |
| `lnLdapPropValue` | integer | Maximum length of LDAP property value. |
| `lnName` | integer | Maximum user name length |
| `lnPwd` | integer | Maximum user password length. The password converted to UTF-8 shall not be longer than this value. |
| `lnUserProp` | integer | Maximum user property length |
| `mbDesc` | string | Member bit `UserInfo#desc` |
| `mbFlags` | string | Member bit `UserInfo#flags` |
| `mbFlags2` | string | Member bit `UserInfo#flags2` |
| `mbGroupList` | string | Member bit `UserInfo#groupList` |
| `mbGuid` | string | Member bit `UserInfo#guid` |
| `mbId` | string | Member bit `UserInfo#id` |
| `mbInternalUser` | string | Member bit `UserInfo#internalUser` |
| `mbKeylist` | string | Member bit `UserInfo#keylist` |
| `mbLastLoginIso` | string | Member bit `UserInfo#lastLoginIso` |
| `mbLdapProperties` | string | Member bit `UserInfo#ldapProperties` |
| `mbName` | string | Member bit `UserInfo#name` |
| `mbNameTranslationKey` | string | Member bit `UserInfo#nameTranslationKey`. |
| `mbOrgUnitIds` | string | Member bit `UserInfo#orgUnitIds` |
| `mbPackageName` | string | Member bit `UserInfo#packageName` |
| `mbParent` | string | Member bit `UserInfo#parent` |
| `mbPwd` | string | Member bit `UserInfo#pwd` |
| `mbSessions` | string | Member bit `UserInfo#sessions` |
| `mbSuperiorId` | string | Member bit `UserInfo#superiorId` |
| `mbTStamp` | string | Member bit `UserInfo#tStamp` |
| `mbTStampSync` | string | Member bit `UserInfo#tStampSync` |
| `mbType` | string | Member bit `UserInfo#type` |
| `mbUserProps` | string | Member bit `UserInfo#userProps` |
| `mbWorkspaceInfo` | string | Member bit `UserInfo#workspaceInfo`. |

#### `UserName`

Contains user name, ID and type (group or user). Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `displayName` | string | Locale specific name. Readonly. This value is the resolved `UserInfo#nameTranslationKey`. |
| `flags` | integer | User rights. To detect a suspended user, test bit AccessC.FLAG_NOLOGIN. |
| `flags2` | integer | User rights, second set. This member is a bit set of AccessC.FLAGS2_* constants. |
| `guid` | string | User GUID. |
| `id` | integer | Constructor with initial values. |
| `name` | string | User name. / |
| `type` | integer | User type. |

#### `UserNodeInfo`

This class contains the information of a user node using to create a AdHocWorkflow. This class is used by the method IXServicePortIF.startAdHocWorkFlow2.

| Property | Type | Description |
|----------|------|-------------|
| `flags` | integer | Control flags for the node, a combination of WFNode.C.FLAG_* constants. |
| `nodeName` | string |  |
| `timeLimit` | integer | The time-limit to process the node. This member is only valid for person nodes. |
| `timeLimitEscalations` | array | Additional definitions for time limits. This member is only valid for person nodes. |
| `timeLimitIso` | string | After this date the node exceeds the time-limit for processing. This member is only valid for person nodes. |
| `userId` | string |  |

#### `UserProductClientType`

This enumeration defines the type of the client software the user is allowed to use. The definition of allowed features for each of the client types is subject to change and may vary between different versions of the software. For non-default values, the server will enforce that the user's client software suits the assigned `UserProductClientType`.

#### `UserProductFeatures`

The class `UserProductFeatures` is used to define product features that are allowed or enabled for a user.

| Property | Type | Description |
|----------|------|-------------|
| `USER_TYPE_KEY` | string |  |
| `allowedClientType` | UserProductClientType | Sets the value of `#allowedClientType` |
| `allowedClientTypes` | ListOfUserProductClientType | Sets the list of effective client types for the user or group. This method is intended to be used by the server. Setting this property on the client s |
| `groupLicenseKey` | string | Holds the group license key for groups requiring a license to be used. |

#### `UserProfile`

User profile options Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `defaultOptions` | array | Options as name-value-pairs. This array contains the default options valid for all users. Read-only. |
| `excludeDefaultValues` | boolean | Do not read values for all users. Only valid for checkoutUserProfile. |
| `excludeGroupValues` | boolean | Do not read values of option groups. Only valid for checkoutUserProfile. |
| `groupId` | integer | The users option group ID. This value is -1, if the user is not member of an option group. Read-only. |
| `groupOptions` | array | Options as name-value-pairs. This array contains the options defined for the users option group. Read-only. |
| `includeAllGroupAndDefaultOptions` | boolean | Include all group and default options. Set this member as true, if all group and default options shall be returned. If the value is false, only those  |
| `options` | array | Options as name-value-pairs. This array contains the sum of default options, group options and user options. |
| `userId` | string | The user name or UserProfileC.USERID_ALL, if the options for all users are represented by this object. The values null or empty are equal to UserProfi |
| `userOptions` | array | Options as name-value-pairs. This array contains the options defined for the given user. Read-only. |

#### `UserProfileC`

The constants in this class exist due to compatibility requirements with older Index Server versions, which gave back formatted data (Sord.xDataDispl). Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `DATE_FORMAT` | string |  |
| `DOC_VERSION_ACCESS_FORMAT` | string |  |
| `DOC_VERSION_CREATE_FORMAT` | string |  |
| `DOC_VERSION_DATE_FORMAT` | string |  |
| `DOC_VERSION_UPDATE_FORMAT` | string |  |
| `KEY_ARCHIVE_LANGUAGE` | string | Give the archive's language (set by a new installation since Server Setup 9.00.004). |
| `KEY_DEFAULT_DOCMASK_DOC` | string | Default mask for new document. |
| `KEY_DEFAULT_DOCMASK_FOLDER` | string | Default mask for new structure element. |
| `KEY_EXTEND_DOCUMENT_ACCESS_IN_WORKFLOW` | string | Extended access control for documents or folders used in workflows. There are two concepts of extending access control for folders and documents route |
| `KEY_FEED_SUBSCRIBE_MYDOC` | string | Automatically subscribe Feed if the User creates a new Document |
| `KEY_FEED_SUBSCRIBE_MYFOLDER` | string | Automatically subscribe Feed if the User creates a new Folder |
| `KEY_FEED_SUBSCRIBE_NEWCOMMENT` | string | Automatically subscribe Feed if the User adds a comment to a Feed |
| `KEY_FEED_SUBSCRIBE_NEWVERSION` | string | Automatically subscribe Feed if the User creates a new Version of a Document |
| `KEY_PASSWORD_RULES` | string | Password rules. The password rules are stored as a comma separated list of 5 Integers, e.g. "7,1,1,0,0". 1. Minimum password length 2. Is != 0, if pas |
| `KEY_PASSWORD_STRENGTH` | string | Indicates the strength a password has to achieve to be valid. Password strength is measured from 0 to 4, where 0 is very weak and 4 is very strong. |
| `KEY_PASSWORD_VALID_DAYS` | string | The password has to be changed after this number of days. The value corresponds to UserInfo.userProps[UserInfoC.PROP_ACTION]. |
| `KEY_PREFIX_FULLTEXT_SEARCH_OPTIONS` | string | Prefix for fulltext search options. |
| `KEY_PREFIX_SYSTEM_ENCRYPTION_PASSWORD` | string | Prefix for system encryption password options. |
| `KEY_SERVER_ID` | string | Server-ID for WF-Replication |
| `SORD_DATE_FORMAT` | string |  |
| `SORD_DELDATE_FORMAT` | string |  |
| `SORD_IDATE_FORMAT` | string |  |
| `SORD_XDATE_FORMAT` | string |  |
| `USERID_ALL` | string | Read/write user profile options for all users. |
| `lnKey` | integer | Maximum length of key |
| `lnValue` | integer | Maximum length of value |

#### `UserProfileData`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `key` | string | Option key. DB column: optkey / |
| `user` | integer | User ID. DB column: userid / |
| `value` | string | Option value. DB column: optvalue / |

#### `UserProfileDataC`

<p>Bit constants for members of UserProfileData</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organis

#### `UserReport`

User report for AdminConsole.

| Property | Type | Description |
|----------|------|-------------|
| `childIds` | ListOfInteger | List of child IDs. |
| `counterGroup` | integer | Count of groups. |
| `counterNoLogin` | integer | Count of users without login flag. |
| `counterTotal` | integer | Total count of all users. |
| `counterUser` | integer | Count of users. |
| `dmsDesktopUserIds` | ListOfInteger | List of DMS Desktop user IDs. |
| `optionGroupIds` | ListOfInteger | List of option group IDs. |
| `subadminIds` | ListOfInteger | List of subadmin IDs. |
| `userNames` | ListOfUserName | All user names. |

#### `UserReportC`

Constants for user report information. Each member of this class with prefix "mb" has a corresponding member in class ReportInfo

| Property | Type | Description |
|----------|------|-------------|
| `COUNT_DOCUMENTS_OVER_ALL_REPOSITORIES` | UserReportZ | Count documents over all repositories. EIX-3356 |
| `FULL_USERREPORT` | UserReportZ |  |
| `NONE` | UserReportZ |  |
| `mbINCLUDE_COUNTER` | string | The counter / |
| `mbINCLUDE_RIGHTS` | string | Rights in numerical form / |
| `mbINCLUDE_USERNAMES` | string | The user names. / |
| `mbNOTHING` | string | nothing / |

#### `UserReportZ`

This class encapsulates the constants of UserReportC

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string |  |

#### `UserTask`

Describes the tasks assigned to a user. ix.findFirstTasks returns the tasks for a user in the form of UserTask objects. Either activity, reminder or workflow is set depending upon whether the task is an activity, reminder or workflow task. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `activity` | Activity | Task is an activity. / |
| `reminder` | Reminder | Task is a reminder item. / |
| `sord` | Sord | Associated Sord object. This member is set, if `IXServicePortIF#findFirstTasks(ClientInfo, FindTasksInfo, int)` is called with `FindTasksInfo#sordZ` ! |
| `wfNode` | WFCollectNode | Task is a workflow task. / |

#### `UserTaskPriorityC`

| Property | Type | Description |
|----------|------|-------------|
| `HIGHEST` | integer | Highest priority. / |
| `LOWEST` | integer | Lowest priority. / |
| `MAX` | integer | Maximum value = lowest priority of reminder and activity / |
| `MIN` | integer | Minimum value = highest priority of reminder and activity / |

#### `UserTaskSortOrderC`

| Property | Type | Description |
|----------|------|-------------|
| `DATE_PRIORITY_NAME` | UserTaskSortOrderZ | Order collected tasks by date, priority and NAME. / |
| `DATE_PRIORITY_NAME_INV` | UserTaskSortOrderZ | Inverse order collected tasks by date, priority and NAME. |
| `NAME_PRIORITY_DATE` | UserTaskSortOrderZ | Order collected tasks by NAME, priority, date. / |
| `NAME_PRIORITY_DATE_INV` | UserTaskSortOrderZ | Inverse order collected tasks by NAME, priority, date. |
| `PRIORITY_DATE_NAME` | UserTaskSortOrderZ | Order collected tasks by priority, date and NAME. / |
| `PRIORITY_DATE_NAME_INV` | UserTaskSortOrderZ | Inverse order collected tasks by priority, date and NAME. |
| `bsetDATE_PRIORITY_NAME` | string |  |
| `bsetDATE_PRIORITY_NAME_INV` | string | @since 9.00.014.006 |
| `bsetFLAG_SORT_ORDER_INV` | string | @since 9.00.014.006 |
| `bsetNAME_PRIORITY_DATE` | string |  |
| `bsetNAME_PRIORITY_DATE_INV` | string | @since 9.00.014.006 |
| `bsetPRIORITY_DATE_NAME` | string |  |
| `bsetPRIORITY_DATE_NAME_INV` | string | @since 9.00.014.006 |

#### `UserTaskSortOrderZ`

This class encapsulates the constants of the UserTaskSortOrderC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the UserTaskSortOrderC class. / |

#### `ValueClass`

Type: object

#### `ValueCountAggregationResult`

The result object of a value_count aggregation. It consists mainly of a result value.

| Property | Type | Description |
|----------|------|-------------|
| `value` | string | The result of the value_count aggregation. / |

#### `ValuesOfObjKey`

Objects of this class contain the returned data from IXServicePortIF.getDistinctValuesOfObjKey.

| Property | Type | Description |
|----------|------|-------------|
| `totalCount` | integer | The sum of all usageCounts. / |
| `usageCounts` | array | For each entry values[i] the corresponding usageCount[i] tells how often the value is used. / |
| `values` | array | Constructor / |

#### `ValuesOfObjKeyOptions`

Type: object

#### `VtDoc`

Internal class.

| Property | Type | Description |
|----------|------|-------------|
| `code` | integer | DB column: vtcode / |
| `docId` | integer | DB column: objdoc / |
| `objId` | integer | DB column: objid / |

#### `VtDocC`

<p>Bit constants for members of VtDoc</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisation: ELO

#### `WClientC`

Type: object, Properties: NEW_VERSION, WORK_VERSION_CHANGED

#### `WFCacheSyncInfo`

This class is used to synchronize the workflow cache.

| Property | Type | Description |
|----------|------|-------------|
| `flowId` | integer | Workflow ID. / |
| `hash` | integer | Checksum on workflow data. / |
| `tstamp` | string | Workflow timestamp. / |

#### `WFCollectNode`

Data used to display a workflow node int the task view. This class bundles the data which is required for displaying a workflow node. The class is used by findFirstTasks

| Property | Type | Description |
|----------|------|-------------|
| `access` | integer | Access rights to the active workflow for the current user. A combination of LUR_* constants. Read-only. |
| `activateDateIso` | string | Date the node was activated / |
| `activateDateWorkflowIso` | string | Workflow start date. |
| `active` | boolean | Is the node active or not? / |
| `callNodeId` | integer | @param callNodeId the callNodeId to set / |
| `completionDateIso` | string | Date the workfow was completed |
| `designDepartmentId` | integer | ID of the user that was assigned to the node when the workflow started. |
| `designDepartmentName` | string | Name of the user that was assigned to the node when the workflow started. |
| `flowId` | integer | Workflow id / |
| `flowName` | string | Workflow name / |
| `flowNameTranslationKey` | string | Translation-keyword for workflow name. |
| `flowStatus` | string | Workflow status. This member is only valid when this object is returned by the findFirstTasks or findNextTasks functions. |
| `formSpec` | string | Same as `WFNode#formSpec`. |
| `hidden` | boolean | Indicates whether this workflow is hidden. |
| `inUseDateIso` | string | Date the node was set to In Use / |
| `label` | string | Display name by forwarding |
| `labelTranslationKey` | string | Translation-keyword for `WFCollectNode#label`. |
| `nodeComment` | string | Node description. |
| `nodeCommentTranslationKey` | string | Translation-keyword for nodeComment. |
| `nodeId` | integer | Node identifier / |
| `nodeName` | string | Description/processing instructions for the workflow node / |
| `nodeNameTranslationKey` | string | Translation-keyword for nodeName. |
| `objEntryType` | SordTypeEnum | Sord type of the associated folder or document. |
| `objGuid` | string | Object GUID of the object for which the workflow is started. This member will be set only if a search is run via findFirstTasks or findNextTasks . In  |
| `objId` | integer | Object id of the object for which the workflow is started. / |
| `objName` | string | Sord name. |
| `objType` | integer | Object type of the object for which the workflow is started. (1 for cabinet, 2 for folder, etc.) / |
| `overTimeLimit` | boolean | True, if the node exceeds the time limit. |
| `overTimeLimitAny` | boolean | Indicates whether the workflow is an escalation. |
| `parentFlowId` | integer | ID of the parent workflow. |
| `prio` | integer | Node priority / |
| `processOnServerId` | string | Allows the clients to decide whether the workflow is editable or not without loading the WFDiagram. |
| `properties` | string | Node properties |
| `terminateDateIso` | string | Date the node was completed/terminated / |
| `timeLimit` | integer | Time limit in minutes. |
| `timeLimitEscalations` | array | Additional definitions for time limits. |
| `timeLimitIso` | string | Node must be completed until this date. This member is only valid when this object is returned by the findFirstTasks or findNextTasks functions. |
| `timeLimitUserId` | integer | The ID of the user that should be informed, if the time-limit is exceeded. The Indexserver does not send any notification to the user. The client appl |
| `timeLimitUserName` | string | User name for timeLimitUserId; When writing a workflow with checkinWorkFlow, this value has preceedence before timeLimitUserId. Set timeLimitUserName  |
| `timeLimitsWorkflow` | array | Time limits and time limit escalation of the entire workflow. This array holds 3 time limit states of the entire workflow. The first item is filled fr |
| `userDelayDateIso` | string | The workflow node is deferred until this date. Not valid for template workflows. Only valid for person nodes. ELO date format. |
| `userDisplayName` | string | Locale specific name of this node's user. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `userId` | integer | User number of the user for whom the workflow node is intended. / |
| `userName` | string | User name of the user for whom the workflow node is intended. / |
| `workflowOwnerDisplayName` | string | Locale specific name of the workflow's owner user. Read-only. This value is the resolved `UserInfo#nameTranslationKey`. |
| `workflowOwnerId` | integer | Workflow owner ID. This member is only valid when this object is returned by the findFirstTasks or findNextTasks functions. |
| `workflowOwnerName` | string | Workflow owner name. This member is only valid when this object is returned by the findFirstTasks or findNextTasks functions. |

#### `WFDelegateNodeInfo`

This class is used as a parameter in the function `IXServicePortIF#delegateWorkFlowNode(ClientInfo, WFDelegateNodeInfo, LockZ)`.

| Property | Type | Description |
|----------|------|-------------|
| `backNodeComment` | string | Description of the back node. / |
| `backNodeMoveX` | integer | Horizontal distance between the active node and the back node. Recommended value is 0. / |
| `backNodeMoveY` | integer | Vertical distance between the active node and the back node. Recommended value is 80. / |
| `backNodeName` | string | Name of the back node. / |
| `copyMembersToBackNodeZ` | WFNodeZ | This selector defines which members of the current node are copied to the node that leads back to the current user. If this value is null, the followi |
| `copyMembersToDelegateNodeZ` | WFNodeZ | This selector defines which members of the node specified by nodeId are copied to the delegated node. If this value is null, all node members are copi |
| `delegateNodeComment` | string | Description of the new node / |
| `delegateNodeMoveX` | integer | Horizontal distance between the active node and the delegation node. Recommended value is 240. / |
| `delegateNodeMoveY` | integer | Vertical distance between the active node and the delegation node. Recommended value is 0. / |
| `delegateNodeName` | string | Name of the new node / |
| `delegateParallel` | boolean | Delegate parallel or serial to the list of users. if `#delegateToUserIds` is not null or empty, this member describes how the nodes created for delega |
| `delegateToUserId` | string | Name or ID of user or group to whom the workflow is delegated. |
| `delegateToUserIds` | ListOfString | Names or IDs of users or groups to whom the workflow is delegated. The delegation nodes are organized serial or parallel as defined by member `#delega |
| `flowId` | string | Constructor / |
| `nodeId` | integer | Node ID / |

#### `WFDiagram`

This class represents an active or finished workflow or a workflow template /

| Property | Type | Description |
|----------|------|-------------|
| `TStampSync` | string | Timestamp of this object's last export by the replication. |
| `access` | integer | Access rights to the workflow template for the current user. A combination of LUR_* constants. Read-only. |
| `acl` | string | Access control list in the internal format. It defines who is able to edit the workflow. This member is only valid for workflow templates. / |
| `aclItems` | array | Note that no GUID is set for the AND groups of the ACL items. / |
| `activeAcl` | string | Access control list in the internal format. It defines who is able to edit the workflow. This member is only valid for active workflows. |
| `activeAclItems` | array | Note that no GUID is set for the AND groups of the ACL items. / |
| `callNodeId` | integer | @param callNodeId the callNodeId to set / |
| `completionDateIso` | string | Date of completion in ISO format. / |
| `deleted` | boolean | Flag that indicates whether the workflow template is deleted. Only valid for template workflows. / |
| `flags` | integer | Flags of the begin node. This value is a combination of the node flags suitable to begin nodes, e. g. WFNodeC.FLAG_WORKINGDAYS. To ensure compatibilit |
| `guid` | string | GUID |
| `hidden` | boolean | Indicates whether this workflow is hidden. |
| `id` | integer | Workflow ID. / |
| `lockId` | integer | The ID of the user who has currently locked the workflow. / |
| `lockName` | string | The name of the user who has currently locked the workflow. / |
| `matrix` | WFNodeMatrix | Node matrix. / |
| `name` | string | Workflow name. / |
| `nameTranslationKey` | string | Translation-keyword for `WFDiagram#name`. |
| `nodes` | array | Array of nodes. / |
| `objEntryType` | SordTypeEnum | Sord type of the associated folder or document. |
| `objId` | string | ID or GUID of the associated folder or document object. checkoutWorkFlow will always return the numeric object ID in this field. checkinWorkFlow is ab |
| `objName` | string | Sord name. Readonly. |
| `objType` | integer | Sord type of the associated folder or document. / |
| `overTimeLimit` | boolean | True, if the workflow exceeds the time limit. Read-only. |
| `ownerId` | integer | ID of the user who has started the workflow. / |
| `ownerName` | string | Name of the user who has started the workflow. / |
| `packageName` | string | Package name of WFDiagram |
| `parentFlowId` | integer | ID of the parent workflow. |
| `prio` | integer | Workflow priortiy: 0...high, 1...medium, 2...low. / |
| `processOnServerId` | string | This value determines on which replication server a workflow is allowed to be continued. If not empty, the workflow can only be modified and continued |
| `startDateIso` | string | Date of start in ISO format. / |
| `subWorkflows` | MapToWFDiagram | Sub workflows. |
| `tStamp` | string | TStamp |
| `templateId` | integer | The workflow was started based on this workflow template. This member is only valid for active and finished workflows. |
| `templateName` | string | The workflow was started based on the workflow template with this name. This member is only valid for active and finished workflows. |
| `timeLimit` | integer | Time-limit for the entire workflow in minutes. |
| `timeLimitEscalations` | array | Additional definitions for time limits. |
| `timeLimitIso` | string | The entire workflow should be finished by this date. Otherwise the time-limit is exceeded. This member is only valid for active and finished workflows |
| `timeLimitUserId` | integer | The ID of the user that should be informed,if the time-limit for the workflow is exceeded. The Indexserver does not send any notification to the user. |
| `timeLimitUserName` | string | The name of the user that should be informed, if the time-limit is exceeded. When writing a workflow with checkinWorkFlow, this value has preceedence  |
| `type` | WFTypeZ | Typeof template: template, active or finished. / |
| `version` | WFVersion | Only templates: version information. |

#### `WFDiagramC`

Constants for workflows.

| Property | Type | Description |
|----------|------|-------------|
| `ADHOC_WF_FINISH_SCRIPT_PREFIX` | string | Prefix of all scripts selectable as finish scripts for adhoc workflows |
| `MAX_SUBNODES` | integer | Maximum number of subnodes. / |
| `TEMPLATE_ID_ADHOC` | integer | Compare this value to WFDiagram.templateId to check whether the workflow was started as an adhoc workflow. This member is for convenience. You can als |
| `lnGuid` | integer | Maximum length of workflow GUID. |
| `lnName` | integer | Maximum length of workflow name. / |
| `lnNameTranslationKey` | integer | Maximum length of the name's translation key. |
| `lnProcessOnServerId` | integer | Maximum length of processOnServerId. |
| `lnTStamp` | integer | Maximum length of workflow TStamp. |
| `mbAccess` | string | Member bit: access |
| `mbAcl` | string | Member bit: acl and aclItems. / |
| `mbAclItems` | string |  |
| `mbActiveAcl` | string | Member bit: `WFDiagram#activeAcl`. |
| `mbActiveAclItems` | string | @since 11.0.0.23 / |
| `mbAll` | WFDiagramZ |  |
| `mbAllMembers` | string | All elements. / |
| `mbCallNodeId` | string | Member bit: `WFDiagram#callNodeId`. |
| `mbCompletionDate` | string | Completed at this date. / |
| `mbCompletionDateIso` | string |  |
| `mbDeleted` | string | Member bit: deleted / |
| `mbFlags` | string | Member bit: flags |
| `mbGuid` | string | Member bit: Guid |
| `mbId` | string | ID / |
| `mbLean` | WFDiagramZ |  |
| `mbLeanMembers` | string |  |
| `mbLockId` | string | Member bit: lockId and lockName / |
| `mbMatrix` | string | Node matrix. / |
| `mbName` | string | Name / |
| `mbNameTranslationKey` | string | Member bit: nameTranslationKey |
| `mbNodes` | string | Nodes. / |
| `mbNodesOverview` | string | Nodes required for worfklow overview in ELO Java Client. Includes begin node, active nodes, exceeded nodes. |
| `mbObjId` | string | Object ID / |
| `mbObjName` | string | Member bit: objName |
| `mbObjType` | string | Object type. / |
| `mbOnlyLock` | WFDiagramZ |  |
| `mbOwnerId` | string | Member bit: ownerId and ownerName / |
| `mbOwnerName` | string |  |
| `mbPackageName` | string | Member bit: `WFDiagram#packageName`. |
| `mbPrio` | string | Member bit: prio / |
| `mbProcessOnServerId` | string | Member bit: processOnServerId |
| `mbStartDate` | string | Member bit: StartDate. / |
| `mbStartDateIso` | string |  |
| `mbSubWorkflows` | string | Member bit: `WFDiagram#subWorkflows`. |
| `mbTStamp` | string | Member bit: TStamp |
| `mbTStampSync` | string | Member bit: TStampSync |
| `mbTemplateId` | string | Member bit: templateId / |
| `mbTemplateName` | string |  |
| `mbTimeLimit` | string | Member bit: Time-limit. / |
| `mbTimeLimitEscalations` | string | Member bit: timeLimitEscalation |
| `mbTimeLimitIso` | string |  |
| `mbTimeLimitUserId` | string | Member bit: Alert user. / |
| `mbTimeLimitUserName` | string |  |
| `mbType` | string |  |
| `mbVersion` | string | Member bit: access |

#### `WFDiagramZ`

This class encapsulates the constants of the WFDiagramC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the WFDiagramC class. / |

#### `WFEditNode`

Data required for processing a workflow person node. /

| Property | Type | Description |
|----------|------|-------------|
| `flowId` | integer | Workflow identifier / |
| `node` | WFNode | The node to be processed / |
| `nodeId` | integer | Node identifier / |
| `succNodes` | array | Choice of following nodes. Array of ELOWorkFlowNode objects. / |

#### `WFMarkAsRead`

| Property | Type | Description |
|----------|------|-------------|
| `action` | WFMarkAsReadEnum | Action: mark as read or unread / |
| `nodeId` | integer | This class marks a workflow as read or unread. |

#### `WFMarkAsReadEnum`

Enum for WFMarkAsRead

#### `WFNode`

Objects of this class represent a workflow node. /

| Property | Type | Description |
|----------|------|-------------|
| `allowActivate` | boolean | Can this node be activated? A script can set this value to prevent the activation of the node. This member is valid for all node types. / |
| `comment` | string | Comment text for the node. This member is valid for all node types. / |
| `commentTranslationKey` | string | Translation-keyword for `WFNode#comment`. |
| `delayDateIso` | string | The node is displayed to the user at this date. This date is computed by enterDateIso + delayDays. This member is only valid for person nodes. Read-on |
| `delayDays` | integer | An active person node (Activate is set) might be displayed to the user delayed by this number of days. Only valid for person nodes. / |
| `department2` | integer | A group ID to constrain access to the node. Only members of this group are allowed to see and process the node. Only valid for person nodes. / |
| `departmentGroup` | integer | Grouping of nodes for function takeWorkFlowNode. A non-zero value binds nodes with the same value to a group of nodes that is evaluated in `IXServiceP |
| `designDepartment` | integer | A group ID or user ID that was originally assigned in the designer. Only valid for person nodes. If a template is checked in, designDepartment is alwa |
| `enterDateIso` | string | The node was activated on this date. This member is valid for all node types. / |
| `exitDateIso` | string | The node was exited/completed on this date. This member is valid for all node types. / |
| `flags` | integer | Control flags for the node, a combination of WFNodeC.FLAG_* constants. For start nodes (TYPE_BEGINNODE), the flags should be specified in WFDiagram.fl |
| `formSpec` | string | Multipurpose field. If the node is a collect node (type=`WFNodeC#TYPE_COLLECTNODE`), formSpec contains a comma separated list of node IDs. This nodes  |
| `iconId` | string | Object-GUID of an icon file that is displayed in the designer. |
| `id` | integer | Node ID. This member is valid for all node types. / |
| `inUseDateIso` | string | The date when the node was last used(activated or completed). This member is valid for all node types. / |
| `isNext` | integer | The activation state of the node. This member is valid for all node types. / |
| `label` | string | Display name by forwarding. |
| `labelTranslationKey` | string | Translation-keyword for `WFNode#label`. |
| `moveCyclePosX` | integer | If a cycle is re-entered, the nodes in the cycle are duplicated. The copied nodes will be placed in the designer moved by this value to the right. If  |
| `name` | string | The node description (work instruction). This member is valid for all node types. / |
| `nameTranslationKey` | string | // * The ID of the user that should be informed, / * if the time-limit is exceeded. / * The Indexserver does not send any notification to the / * user |
| `nbOfDonesToExit` | integer | The number of predecessor nodes that must be processed to forward this collector node. A value of -1 means that all predecessor nodes must be processe |
| `objKeyNames` | array | Group names of index values (DocMaskLine.key resp. ObjKey.name) for which an edit box is to be displayed when forwarding a person node. This member is |
| `onEnter` | string | A script or plugin name that is called, if a workflow node is entered. In order to capture this workflow event in JavaScript, store a script file that |
| `onEnterHandleRollback` | string | A script or plugin name that is called when an error occurs inside a workflow script. All onEnterHandleRollback scripts, from one person node to the n |
| `onExit` | string | A script or plugin name that is called, if a workflow node is exited. In order to capture this workflow event in JavaScript, store a script file that  |
| `onExitHandleRollback` | string | A script or plugin name that is called when an error occurs inside a workflow script. All onExitHandleRollback scripts, from one person node to the ne |
| `overTimeLimit` | boolean | True, if the node exceeds the time limit. This member is only valid for person nodes in active or finished workflows. Read-only. |
| `posX` | integer | The X position in the designer view. This member is valid for all node types. / |
| `posY` | integer | The Y position in the designer view. This member is valid for all node types. / |
| `prio` | integer | Node priortiy: 0...high, 1...medium, 2...low. Only valid for person nodes, type==`WFNodeC#TYPE_PERSONNODE`. The user assigned to the person node can c |
| `processOnServerId` | string | Server ID (resp. replication branch). This member is only valid for nodes of type `WFNodeC#TYPE_SET_SERVER_ID`. and should be set to the name of a exi |
| `properties` | string | Node properties. Maximum byte size of this string in UTF-8 encoding is constrained to `FileDataC#MAX_BLOB_LENGTH`. |
| `retVal` | integer | @deprecated Use `#setReturnValue(String)`. |
| `returnValue` | string | Return value of a sub-workflow. The value defines the name of the successor node of the call-node `WFNodeC#TYPE_CALL_SUB_WORKFLOW` that will be activa |
| `scriptNames` | array | Script names used as action scripts in buttons when forwarding a person node. Script files for the Windows CLIENT have to be named as ELOWF_ + scriptN |
| `subFlowId` | integer | Id of the active sub-workflow. Only valid for TYPE_CALL_SUB_WORKFLOW. |
| `subTemplateId` | integer | ID, GUID or name of the sub-workflow template. |
| `tag` | integer | reserved. DB column: wf_tag / |
| `timeLimit` | integer | The time-limit to process the node. Measured in minutes. This member is only valid for person nodes. / |
| `timeLimitEscalations` | array | Additional definitions for time limits. This member is only valid for person nodes. |
| `timeLimitIso` | string | After this date the node exceeds the time-limit for processing. This member is only valid for person nodes. Read-only. / |
| `type` | integer | The node type. This member is set to one of the TYPE_* constants in WFNodeC. |
| `userDelayDateIso` | string | The workflow node is deferred until this date. This member is only valid for person nodes in active or finished workflows. ISO date format. |
| `userDisplayName` | string | Locale specific name. Readonly. This value is the resolved `#nameTranslationKey`. |
| `userId` | integer | This user has to edit the node. This member is only valid for person nodes. / |
| `userName` | string | The name of the user that has the ID userId This member is only valid for person nodes. |
| `userTerminate` | string | The ID of the user who has forwarded the node. Not valid for template workflows. This member is only valid for person nodes. / |
| `yesNoCondition` | string | A value depending on the type of the node. `WFNodeC#TYPE_IFNODE`: test condition. Numeric values must be formatted according to the servers locale. Da |

#### `WFNodeAssoc`

Represents a bridge (connection) in a workflow diagram Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `done` | boolean | Indicates whether the bridge has been passed through/over (used). For a condition node, this member is true for both paths (TRUE and FALSE) if either  |
| `nodeFrom` | integer | Start node (starting location) / |
| `nodeTo` | integer | Destination (end) node / |
| `type` | integer | Type of bridge (connection). `WFNodeMatrixC#ALWAYS`, `WFNodeMatrixC#IF_TRUE`, `WFNodeMatrixC#IF_FALSE`. / |

#### `WFNodeC`

Constants for WorkFlowNode .

| Property | Type | Description |
|----------|------|-------------|
| `DEACTIVATE_ALL_PREDS` | string | Indicates that all predecessor of the collect node should be terminated. |
| `FLAG_COPY_CHILDREN` | integer | Node flag: This flag indicates that all nodes in the cycle should be copied when entering the begin cycle node. This flag is only used for the begin c |
| `FLAG_CYCLE_END` | integer | Node flag: This flag denotes, whether a cycle node (TYPE_CYCLE) is the end of a cycle. |
| `FLAG_CYCLE_X` | integer | Node flag: This is a copied start node of a cylce. Do not use this flag in workflow templates. The workflow engine will mark copied cycle. nodes with  |
| `FLAG_DELEGATED` | integer | Node flag: This flag indicates whether the person node was delegated. This flag is only used for the person node. |
| `FLAG_DO_NOT_START_MANUALLY` | integer | Node flag: This flag indicates whether the sub workflow can be started manually. The sub workflow of. This flag is used for sub workflows. |
| `FLAG_ERROR` | integer | Node flag: This flag indicates that this node is an error node, which is generated after an error occurred while executing the plugin node. |
| `FLAG_HIDDEN` | integer | Node flag: Hide this workflow from default searches and listings. |
| `FLAG_NOT_VALID` | integer | Node flag: Not released. A personal node of an Adhoc workflow has this flag set, if the user has not released the node. The Indexserver does not use t |
| `FLAG_ONE_SUCCESSOR` | integer | Node flag: Only one user can receive this node. / |
| `FLAG_RESETADHOCNODE` | integer | Node flag: Reset all person nodes. This flag is only used for parallel for validation workflow. |
| `FLAG_RESET_CHILDREN` | integer | Node flag: Reset the ExitDate of the following nodes, if this node is activated. / |
| `FLAG_ROOT_ADHOC` | integer | Node flag: The start node of an Adhoc workflow has this flag. / |
| `FLAG_TERMINATE_USER` | integer | Node flag: End of workflow. This flag is set to the end node of an Adhoc workflow. The Indexserver does not need this flag but maybe the ELO Windows C |
| `FLAG_WORKINGDAYS` | integer | Node flag: This flag indicates that weekend days should be skipped when evaluating time limits. / |
| `TYPE_BEGINNODE` | integer | Node type: Start of workflow. / |
| `TYPE_CALL_SUB_WORKFLOW` | integer | Note type: Call sub workflow. |
| `TYPE_COLLECTNODE` | integer | Node type: Collects many workflow paths. / |
| `TYPE_CYCLE` | integer | Node type: Cycle Cycle nodes are contained in pairs in a workflow. One cycle node denotes the beginning of a cycle and an associated cycle node marks  |
| `TYPE_ENDNODE` | integer | Node type: End of workflow. |
| `TYPE_IFNODE` | integer | Node type: Decision node. / |
| `TYPE_NOTHING` | integer | Node type: undefined or deleted / |
| `TYPE_PERSONNODE` | integer | Node type: Personal node. A user must edit the node to continue the workflow. / |
| `TYPE_PLUGINNODE` | integer | Note type: Plugin node. This node is intended to trigger external events or to address external systems. OnEnter is handled synchronously. It waits fo |
| `TYPE_SET_SERVER_ID` | integer | Note type: Set the server ID where the WF can be continued. This node is used in replicated workflows. / |
| `TYPE_SPLITNODE` | integer | Node type: Distribute to many following nodes. / |
| `USERID_IGNORE` | integer | This value can be used in Node.department2 to make clear, that Node.department2 has to be ignored. / |
| `USERID_OWNER` | integer | Set WFNode.userId to this value, if a workflow node should belong to the user who starts the workflow. / |
| `USERID_SUPERIOR` | integer | This ID is a placeholder for the superior of the workflow owner. / |
| `lnComment` | integer | Maximum length of comment. / |
| `lnCommentTranslationKey` | integer | Maximum length of the comment's translation key. |
| `lnCondition` | integer |  |
| `lnFormSpec` | integer | Maximum length of form spec. |
| `lnLabel` | integer | Maximum length of the label. |
| `lnLabelTranslationKey` | integer | Maximum length of the labelTranslationKey. |
| `lnName` | integer | Maximum length of node name. / |
| `lnNameTranslationKey` | integer | Maximum length of the name's translation key. |
| `lnOnEnter` | integer |  |
| `lnOnEnterHandleRollback` | integer | @since 21.02.000.005 |
| `lnOnExit` | integer |  |
| `lnOnExitHandleRollback` | integer | @since 21.02.000.005 |
| `lnProcessOnServerId` | integer | Maximum length of processOnServerId. |
| `lnProperties` | integer | Maximum length of the properties. |
| `lnYesNoCondition` | integer |  |
| `mbAll` | WFNodeZ | All members. / |
| `mbAllMembers` | string | All members. / |
| `mbComment` | string | Member bit: Node comment. / |
| `mbCommentTranslationKey` | string | Member bit: CommentTranslationKey |
| `mbCondition` | string | Member bit: condition, is only internally used / |
| `mbDelayDate` | string | Member bit: DelayDaye. Not valid for template workflows. Only valid for person nodes. DB column: wf_duedate / |
| `mbDelayDateIso` | string |  |
| `mbDelayDays` | string | Member bit: An active person node (Activate is set) might be displayed to the user delayed by this number of days. Only valid for person nodes. DB col |
| `mbDepartment2` | string | Member bit: A group ID to constrain access to the node. Only members of this group are allowed to see and process the node. Only valid for person node |
| `mbDepartmentGroup` | string | Member bit: departmentGroup |
| `mbDesignDepartment` | string | Member bit: A group ID or user ID that was originally assigned in the designer. DB column: wf_designdepartment / |
| `mbEnterDate` | string | Member bit: Activated at this date. / |
| `mbEnterDateIso` | string |  |
| `mbExitDate` | string | Member bit: Leaved at this date. / |
| `mbExitDateIso` | string |  |
| `mbFlags` | string | Member bit: control flags. / |
| `mbFormSpec` | string | Member bit: FormSpec. |
| `mbIconId` | string | Member bit: Icon GUID. |
| `mbId` | string | Member bit: Node ID / |
| `mbInUseDate` | string | Member bit: In use at this date. / |
| `mbInUseDateIso` | string |  |
| `mbIsNext` | string | Member bit: (to be defined) / |
| `mbLabel` | string | Member bit: label |
| `mbLabelTranslationKey` | string | Member bit: labelTranslationKey |
| `mbLockId` | string | Member bit: locked from user. / |
| `mbMoveCyclePosX` | string | Member bit: If a cycle is re-entered, the nodes in the cycle are duplicated. The copied nodes will be placed in the designer moved by this value to th |
| `mbName` | string | Member bit: Name / |
| `mbNameTranslationKey` | string | Member bit: NameTranslationKey |
| `mbNbOfDonesToExit` | string | Member bit: number of predecessor nodes that must be processed to forward this node. / |
| `mbObjKeyNames` | string | Member bit: objKeyNames |
| `mbOnEnter` | string | Member bit: script to execute when node is activated. / |
| `mbOnEnterHandleRollback` | string | Member bit: script to execute when node encounters an error. |
| `mbOnExit` | string | Member bit: script to execute when node is leaved. / |
| `mbOnExitHandleRollback` | string | Member bit: script to execute when node encounters an error. |
| `mbPosX` | string | Member bit: x position in designer view. / |
| `mbPosY` | string | Member bit: y position in designer view. / |
| `mbPrio` | string | Member bit: returnValue |
| `mbProcessOnServerId` | string | Member bit: processOnServerId; / |
| `mbProperties` | string | Member bit: properties |
| `mbResult` | string | Member bit: Condition result. / |
| `mbRetVal` | string | Member bit: retVal |
| `mbReturnValue` | string | Member bit: returnValue |
| `mbScriptNames` | string | Member bit: scriptNames |
| `mbSubFlowId` | string | Member bit: subFlowId |
| `mbSubTemplateId` | string | Member bit: subTemplateId |
| `mbSubTemplateName` | string | reserved. |
| `mbTag` | string | Member bit: reserved. DB column: wf_tag / |
| `mbTimeLimit` | string | Member bit: (to be defined) / |
| `mbTimeLimitEscalations` | string | Member bit: timeLimitEscalation |
| `mbTimeLimitIso` | string |  |
| `mbType` | string | Member bit: Type / |
| `mbUserDelayDate` | string | Member bit: UserDelayDate. Not valid for template workflows. Only valid for person nodes. DB column: wf_duedate / |
| `mbUserDelayDateIso` | string |  |
| `mbUserId` | string | Member bit: User ID / |
| `mbUserName` | string |  |
| `mbUserTerminate` | string | Member bit: The ID of the user who has forwarded the node. Not valid for template workflows. Only valid for person nodes. DB column: wf_userterminate  |
| `mbYesNoCondition` | string | Member bit: yes/no condition / |

#### `WFNodeHistory`

Version history for a workflow node. A version history is created while leaving a workflow node. Copyright: Copyright (c) 2015 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `enterDateIso` | string | The node was activated on this date. This member is valid for all node types. / |
| `exitDateIso` | string | The node was exited/completed on this date. This member is valid for all node types. / |
| `flowGuid` | string | GUID of the workflow. DB column: wfguid / |
| `histGuid` | string | GUID of the WorkflowHist object. DB column: wfhistguid / |
| `nodeId` | integer | Node ID. DB column: wf_nodeid / |
| `succ_0` | integer | Successor node(s) succ_0 ... Succ 19 DB column: wf_succ_0 / |
| `succ_1` | integer | DB column: wf_succ_1 / |
| `succ_10` | integer | DB column: wf_succ_10 / |
| `succ_11` | integer | DB column: wf_succ_11 / |
| `succ_12` | integer | DB column: wf_succ_12 / |
| `succ_13` | integer | DB column: wf_succ_13 / |
| `succ_14` | integer | DB column: wf_succ_14 / |
| `succ_15` | integer | DB column: wf_succ_15 / |
| `succ_16` | integer | DB column: wf_succ_16 / |
| `succ_17` | integer | DB column: wf_succ_17 / |
| `succ_18` | integer | DB column: wf_succ_18 / |
| `succ_19` | integer | DB column: wf_succ_19 / |
| `succ_2` | integer | DB column: wf_succ_2 / |
| `succ_3` | integer | DB column: wf_succ_3 / |
| `succ_4` | integer | DB column: wf_succ_4 / |
| `succ_5` | integer | DB column: wf_succ_5 / |
| `succ_6` | integer | DB column: wf_succ_6 / |
| `succ_7` | integer | DB column: wf_succ_7 / |
| `succ_8` | integer | DB column: wf_succ_8 / |
| `succ_9` | integer | DB column: wf_succ_9 / |
| `userId` | integer | ID of user who has to process the node. Might be a group ID too. Only valid for person nodes. DB column: wf_userid / |
| `userName` | string | Name of user who has to process the node. Might be a group name too. Only valid for person nodes. DB column: wf_username / |

#### `WFNodeHistoryC`

<p>Bit constants for members of WFNodeHistory</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisat

#### `WFNodeMatrix`

Stores the relationship between workflow nodes Administers the bridges(connections) in a workflow diagram. These are objects of type WorkFlowNodeAssoc. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office

| Property | Type | Description |
|----------|------|-------------|
| `assocs` | array | Array of the edges. Since 9.00.030, IX stores the order of the items in the database. When reading a workflow, the saved element order is restored. / |

#### `WFNodeMatrixC`

These constants describe the type of connection between two nodes. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `ALWAYS` | integer | Connection type for non-decision nodes. The connection will always be utilised to reach the next node. No conditions have to be fulfilled. |
| `IF_FALSE` | integer | This connection is the FALSE connection following a decision node. This connection will be utilised when the IF requirement is not fulfilled. |
| `IF_OVERTIME` | integer | This connection is only for the case of overtime. |
| `IF_TRUE` | integer | This connection is the TRUE connection following a decision node. This connection will be utilised when the IF requirement is fulfilled. |

#### `WFNodeZ`

This class encapsulates the constants of the WFNodeC class. Copyright: Copyright (c) 2011 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the WFNodeC class. / |

#### `WFTakeNodeC`

Constant class for controlling the taking over(passing to another user) of a workflow object. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `DEFAULT` | integer | Standard action. Neither WFNode.department2 nor WFNode.inUseDateIso are returned. / |
| `RESET_DEPARTMENT2` | integer | WFNode.department2 is set when the node is taken over by another user. / |
| `RESET_IN_USE_DATE` | integer | WFNode.inUseDateIso is set when the node is taken over by another user. / |

#### `WFTimeLimit`

This class describes a time limit for a workflow or for a person node of a workflow.

| Property | Type | Description |
|----------|------|-------------|
| `overTimeLimit` | boolean | True, if the workflow exceeds the time limit. Read-only. |
| `timeLimit` | integer | Time-limit in minutes. |
| `timeLimitIso` | string | After this date the node exceeds the time-limit for processing. Read-only. |
| `userId` | integer | The ID of the user that should be informed, if the time-limit is exceeded. The Indexserver does not send any notification to the user. The client appl |
| `userName` | string | User name for timeLimitUserId; When writing a workflow with checkinWorkFlow, this value has preceedence before timeLimitUserId. Set timeLimitUserName  |

#### `WFTypeC`

Constants class for WFType. This class describes the workflow type/status. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `ACTIVE` | WFTypeZ | The workflow is active. / |
| `FINISHED` | WFTypeZ | The workflow is finished (completed). / |
| `TEMPLATE` | WFTypeZ | The workflow is a template workflow. / |
| `bsetACTIVE` | string |  |
| `bsetFINISHED` | string |  |
| `bsetTEMPLATE` | string |  |

#### `WFTypeZ`

This class encapsulates the constants of the WFTypeC class. Copyright: Copyright (c) 2004 Organisation: ELO Digital Office GmbH /

| Property | Type | Description |
|----------|------|-------------|
| `bset` | string | Bitset field for constants from the WFTypeC class. / |

#### `WFUpdateInfo`

| Property | Type | Description |
|----------|------|-------------|
| `flowId` | string | Workflow ID. / |
| `markAsRead` | WFMarkAsRead | This class is used as a parameter in the function `IXServicePortIF#updateWorkflow(ClientInfo, WFUpdateInfo, LockZ)`. |

#### `WFVersion`

Version information for a workflow template.

| Property | Type | Description |
|----------|------|-------------|
| `comment` | string | Version comment. |
| `createDateIso` | string | Create date in ISO format. |
| `id` | integer | Version ID. Set this member -1, to check in a new workflow template version. A value of 0 indicates the current working version. |
| `userId` | integer | ID of the user who created the version. |
| `userName` | string | Name of the user who created the version. |
| `version` | string | Version number. |

#### `WFVersionC`

Constants for WFVersion

| Property | Type | Description |
|----------|------|-------------|
| `lnComment` | integer | Length of WFVersion.comment. / |
| `lnVersion` | integer | Length of WFVersion.version. |

#### `WorkFlowActiveDoc`

Internal class. /

| Property | Type | Description |
|----------|------|-------------|
| `activate` | integer | ELO-date when the node was entered. DB column: wf_activate / |
| `activeAcl` | string | Contains the ACL of the workflow. Only valid for begin nodes. |
| `alertFromBegin` | integer | Time-limt for the entire workflow in minutes. This value is only valid for the begin node. DB column: wf_alert_from_begin / |
| `alertTo` | integer | ID of user who should be informed, if a time-limit exceeds. It might be the time-limit for the entire workflow or for a signle person node. DB column: |
| `alertTo2` | integer | ID of user who should be informed, if the time-limit alertWait2 exceeds. |
| `alertTo3` | integer | ID of user who should be informed, if the time-limit alertWait2 exceeds. |
| `alertWait` | integer | Time-limit for a single node. This value is only valid for person nodes. DB column: wf_alert_wait / |
| `alertWait2` | integer | Second Time-limit for a person node or begin node. |
| `alertWait3` | integer | Third Time-limit for a person node or begin node. |
| `comment` | string | Comment, only valid for person nodes. DB column: wf_comment / |
| `commentTranslationKey` | string | Translation-keyword for {@link WFNode#comment}. |
| `completionDate` | integer | ELO-date when the workflow was finished. All nodes contain the same value. DB column: wf_completion_date / |
| `condition` | string | Contains the ACL of the workflow template. Only valid for begin nodes. DB column: wf_condition / |
| `delayDate` | integer | Activate + DelayDays. Not valid for template workflows. Only valid for person nodes. DB column: wf_duedate / |
| `delayDays` | integer | An active person node (Activate is set) might be displayed to the user delayed by this number of days. Only valid for person nodes. DB column: wf_dela |
| `deleted` | integer | Flag that indicates whether the workflow template is deleted. If the value is not 0, the workflow template is deleted. Only valid for template workflo |
| `department` | integer | ID of user who has to process the node. Might be a group ID too. Only valid for person nodes. DB column: wf_department / |
| `department2` | integer | A group ID to constrain access to the node. Only members of this group are allowed to see and process the node. Only valid for person nodes. DB column |
| `departmentGroup` | integer | Grouping of nodes for function takeWorkFlowNode. |
| `designDepartment` | integer | A group ID or user ID that was originally assigned in the designer. DB column: wf_designdepartment / |
| `eloObjId` | integer | Associated object ID. Only valid for non-template workflows. DB column: wf_eloobjid / |
| `flowId` | integer | Workflow ID. DB column: wf_flowid / |
| `flowName` | string | Workflow name. DB column: wf_flow_name / |
| `flowNameTranslationKey` | string | Translation-keyword for {@link WFDiagram#name}. |
| `formSpec` | string | User defined data to be stored in the database. |
| `iconId` | string | Object-GUID of an icon file that is displayed in the designer. |
| `inUseDate` | integer | ELO-date when the node was visited the last time. DB column: wf_in_use_date / |
| `isNext` | integer | Contains 1, if this node is active. DB column: wf_is_next / |
| `label` | string | Display name by forwarding. |
| `labelTranslationKey` | string | Translation-keyword for {@link WorkFlowActiveDoc#label}. |
| `lockId` | integer | User ID of the owner of the lock. DB column: wf_locked_owner / |
| `locked` | integer | If node is locked, it contains 1 otherwise 0 DB column: wf_locked / |
| `moveCyclePosX` | integer | If a cycle is re-entered, the nodes in the cycle are duplicated. The copied nodes will be placed in the designer moved by this value to the right. If  |
| `name` | string | Node name (work instruction). DB column: wf_name / |
| `nameTranslationKey` | string | Translation-keyword for {@link WFNode#name}. |
| `nextServerId` | string | Next server name. This value is used in replication environments and defines the ID of the next  server (resp. replication branch) where the workflow  |
| `nodeFlags` | integer | Name of script to be executed when the node encounters an error (exception). DB column: wf_ev_on_exception_after_enter |
| `nodeId` | integer | Node ID. DB column: wf_nodeid / |
| `nodeType` | integer | Node type (begin node, split node, etc.). DB column: wf_node_type / |
| `onActivate` | string | Name of script to be executed, if the node is activated (entered). DB column: wf_ev_on_activate / |
| `onEnterHandleRollback` | string | Name of script to be executed when the node encounters an error (exception). DB column:  wf_ev_on_exception_after_enter |
| `onExitHandleRollback` | string | Name of script to be executed when the node encounters an error (exception). DB column:  wf_ev_on_exception_after_exit |
| `onTerminate` | string | Name of script to be executed, if the node is leaved (exited). DB column: wf_ev_on_terminate / |
| `packageName` | string | PackageName of a Workflow, only used for workflow templates |
| `posX` | integer | Node X position in designer view. DB column: pos_x / |
| `posY` | integer | Node Y position in designer view. DB column: pos_y / |
| `prio` | integer | Workflow priority: 0...high, 1...medium, 2...low. DB column: wf_prio / |
| `properties` | string | Properties field of node. |
| `retVal` | integer | The workflow node is deferred until this date. ELO date format. DB column: wf_user_delaydate |
| `returnValue` | string | Return value of an end node. |
| `subWorkflow` | integer | ID of the active sub-workflow. |
| `subWorkflowTemplate` | integer | ID of the sub-workflow template. |
| `succType` | integer | This value depends on the node type and is not processed anymore by Indexserver. It is written for compability with workflows of older CLIENT versions |
| `succ_0` | integer | Successor node(s) succ_0 ... Succ 19 DB column: wf_succ_0 This mebers are moved into WorkFlowNodeMatrix. They are still here due to compatibiltiy with |
| `succ_1` | integer | DB column: wf_succ_1 / |
| `succ_10` | integer | DB column: wf_succ_10 / |
| `succ_11` | integer | DB column: wf_succ_11 / |
| `succ_12` | integer | DB column: wf_succ_12 / |
| `succ_13` | integer | DB column: wf_succ_13 / |
| `succ_14` | integer | DB column: wf_succ_14 / |
| `succ_15` | integer | DB column: wf_succ_15 / |
| `succ_16` | integer | DB column: wf_succ_16 / |
| `succ_17` | integer | DB column: wf_succ_17 / |
| `succ_18` | integer | DB column: wf_succ_18 / |
| `succ_19` | integer | DB column: wf_succ_19 / |
| `succ_2` | integer | DB column: wf_succ_2 / |
| `succ_3` | integer | DB column: wf_succ_3 / |
| `succ_4` | integer | DB column: wf_succ_4 / |
| `succ_5` | integer | DB column: wf_succ_5 / |
| `succ_6` | integer | DB column: wf_succ_6 / |
| `succ_7` | integer | DB column: wf_succ_7 / |
| `succ_8` | integer | DB column: wf_succ_8 / |
| `succ_9` | integer | DB column: wf_succ_9 / |
| `tag` | integer | reserved. DB column: wf_tag / |
| `templateId` | integer | Workflow template ID. Not valid for template workflows. For active and finished workflows this member specifies the template ID that was used to start |
| `terminate` | integer | ELO-date when the node was exited. DB column: wf_terminate / |
| `userDelayDate` | integer | The workflow node is deferred until this date. ELO date format. DB column: wf_user_delaydate |
| `userTerminate` | string | The ID of the user who has forwarded the node. Not valid for template workflows. Only valid for person nodes. DB column: wf_userterminate / |
| `versionCreateDate` | integer | ID of the user who created the workflow version. |
| `versionId` | integer | Version ID. |
| `versionName` | string | Version comment. |
| `versionTag` | string | Version number. |
| `versionUserId` | integer | ID of the user who created the workflow version. |
| `yNCondition` | string | IF-Nodes: test condition, person nodes: index values or scripts, split nodes: workflow status. DB column: wf_yesnocondition / |

#### `WorkFlowActiveDocC`

<p>Bit constants for members of WorkFlowActiveDoc</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organ

#### `WorkFlowHead`

Helperclass to access the DB table workflowtemplhead, workflowactivedochead, ...

| Property | Type | Description |
|----------|------|-------------|
| `actServerId` | string | The current sever ID (resp. replication branch) where the workflow can be condinued. |
| `callNodeId` | integer | @param callNodeId the callNodeId to set / |
| `flowId` | integer | Workflow ID |
| `guid` | string | GUID |
| `parentWorkflow` | integer | Id of the main workflow. |
| `status` | integer | Status, != 0 means deleted |
| `tStamp` | string | Timestamp The format is JJJJ.MM.DD.hh.mm. ss |
| `tStampSync` | string | Timestamp of this object's last export by the replication. |
| `type` | integer | Workflow type. |

#### `WorkFlowHeadC`

<p>Bit constants for members of WorkFlowHead</p> <p>Copyright: Copyright (c) 2003</p>  <p>Organisati

#### `WorkFlowNodeMatrix`

Helperclass to access the node matrix.

| Property | Type | Description |
|----------|------|-------------|
| `flowId` | integer | Workflow ID |
| `isNext` | integer | Contains 1, if this node is active. DB column: wf_is_next |
| `nodeId` | integer | Node ID |
| `succOvertime` | integer | Id of successor node, which should be activated by the escalation. |
| `succType` | integer | Type of successor node. |
| `succ_0` | integer |  |
| `succ_1` | integer |  |
| `succ_10` | integer |  |
| `succ_11` | integer |  |
| `succ_12` | integer |  |
| `succ_13` | integer |  |
| `succ_14` | integer |  |
| `succ_15` | integer |  |
| `succ_16` | integer |  |
| `succ_17` | integer |  |
| `succ_18` | integer |  |
| `succ_19` | integer |  |
| `succ_2` | integer |  |
| `succ_3` | integer |  |
| `succ_4` | integer |  |
| `succ_5` | integer |  |
| `succ_6` | integer |  |
| `succ_7` | integer |  |
| `succ_8` | integer |  |
| `succ_9` | integer |  |
| `terminate` | integer | ELO-date when the node was exited. DB column: wf_terminate |
| `versionId` | integer | Version ID. |

#### `WorkFlowNodeMatrixC`

<p>Bit constants for members of WorkFlowNodeMatrix</p> <p>Copyright: Copyright (c) 2003</p>  <p>Orga

#### `WorkflowExchangeInfo`

This class represents a workflow export data.

| Property | Type | Description |
|----------|------|-------------|
| `subWorkflowMap` | MapToWFDiagram | Map contains the all direct und indirect subworkflows. The workflow ID is the key. |
| `subWorkflowVersionMap` | MapToArrayListOfWFDiagram | Map contains the workflow verions of the sub workflows. |
| `userNames` | MapToUserName | The users associated with the workflow / |
| `workflow` | WFDiagram | The exchanged workflow. / |
| `workflowVersions` | array | The workflow version. / |

#### `WorkflowExportOptions`

Structure for the options for the workflow-export. Copyright: Copyright (c) 2009 Organisation: ELO Digital Office GmbH

| Property | Type | Description |
|----------|------|-------------|
| `characterSet` | string | Sets the character set for the export-data. |
| `flowId` | string | Sets the id of the workflow, that will be exported. |
| `flowVersId` | string | Sets the id of the workflow-version, that will be exported. |
| `format` | integer | Sets the export format. |
| `wordWrap` | string | Sets the word wrap for the export-data. |

#### `WorkflowExportOptionsC`

Contants related to the workflow export.

| Property | Type | Description |
|----------|------|-------------|
| `FORMAT_JSON` | integer | JSON format. / |
| `FORMAT_PLAIN_TABLE` | integer | Workflow table format for compatibility with Windows Client. |

#### `WorkflowImportOptions`

Options for the workflow import.

| Property | Type | Description |
|----------|------|-------------|
| `collisionSuffix` | string | The content of this variable is extended to the name of the imported Workflow as a suffix, if the Workflow already exists inside ELO |
| `replaceMissingUserByUserId` | string | If this variable is set, the missing user is replaced by this user. Otherwise the missing user will be created using a random password. / |

#### `WorkflowNodeInfo`

@author Nguyen

| Property | Type | Description |
|----------|------|-------------|
| `flags` | integer | Control flags for the node, a combination of WFNode.C.FLAG_* constants. / |
| `nodeName` | string | The node name / |
| `workflow` | string | The template ID of the subworkflow to start. / |


### Request Schemas (414)

Request body schemas prefixed with `BRequest_` — 414 total.

### Result Schemas (141)

Response body schemas prefixed with `BResult_` — 141 total.
