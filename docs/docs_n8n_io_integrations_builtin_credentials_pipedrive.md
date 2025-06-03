[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/credentials/pipedrive.md "Edit this page")

# Pipedrive credentials[#](#pipedrive-credentials "Permanent link")

You can use these credentials to authenticate the following nodes:

*   [Pipedrive](../../app-nodes/n8n-nodes-base.pipedrive/)
*   [Pipedrive Trigger](../../trigger-nodes/n8n-nodes-base.pipedrivetrigger/)

## Supported authentication methods[#](#supported-authentication-methods "Permanent link")

*   API token
*   OAuth2

## Related resources[#](#related-resources "Permanent link")

Refer to [Pipedrive's developer documentation](https://pipedrive.readme.io/docs/getting-started) for more information about the service.

## Using API token[#](#using-api-token "Permanent link")

To configure this credential, you'll need a [Pipedrive](https://pipedrive.com/) account and:

*   An **API Token**

To get your API token:

1.  Open your [**API Personal Preferences**](https://app.pipedrive.com/settings/api).
2.  Copy **Your personal API token** and enter it in your n8n credential.

If you have multiple companies, you'll need to select the correct company first:

1.  Select your account name and be sure you're viewing the correct company.
2.  Then select **Company Settings**.
3.  Select **Personal Preferences**.
4.  Select the **API** tab.
5.  Copy **Your personal API token** and enter it in your n8n credential.

Refer to [How to find the API token](https://pipedrive.readme.io/docs/how-to-find-the-api-token) for more information.

## Using OAuth2[#](#using-oauth2 "Permanent link")

To configure this credential, you'll need a [Pipedrive developer sandbox account](https://developers.pipedrive.com/) and:

*   A **Client ID**
*   A **Client Secret**

To get both, you'll need to register a new app:

1.  Select your profile name in the upper right corner.
2.  Find the company name of your sandbox account and select **Developer Hub**.
    
    No Developer Hub
    
    If you don't see **Developer Hub** in your account dropdown, sign up for a [developer sandbox account](https://developers.pipedrive.com/).
    
3.  Select **Create an app**.
    
4.  Select **Create public app**. The app's **Basic info** tab opens.
5.  Enter an **App name** for your app, like `n8n integration`.
6.  Copy the **OAuth Redirect URL** from n8n and add it as the app's **Callback URL**.
7.  Select **Save**. The app's **OAuth & access scopes** tab opens.
8.  Turn on appropriate **Scopes** for your app. Refer to [Pipedrive node scopes](#pipedrive-node-scopes) and [Pipedrive Trigger node scopes](#pipedrive-trigger-node-scopes) below for more guidance.
9.  Copy the **Client ID** and enter it in your n8n credential.
10.  Copy the **Client Secret** and enter it in your n8n credential.

Refer to [Registering a public app](https://pipedrive.readme.io/docs/marketplace-registering-the-app) for more information.

### Pipedrive node scopes[#](#pipedrive-node-scopes "Permanent link")

The scopes you add to your app depend on which node(s) you want to use it for in n8n and what actions you want to complete with those.

Scopes you may need for the [Pipedrive](../../app-nodes/n8n-nodes-base.pipedrive/) node:

**Object**

**Node action**

**UI scope**

**Actual scope**

Activity

Get data of an activity  
Get data of all activities

**Activities: Read only** or  
**Activities: Full Access**

`activities:read` or  
`activities:full`

Activity

Create  
Delete  
Update

**Activities: Full Access**

`activities:full`

Deal

Get data of a deal  
Get data of all deals  
Search a deal

**Deals: Read only** or  
**Deals: Full Access**

`deals:read` or  
`deals:full`

Deal

Create  
Delete  
Duplicate  
Update

**Deals: Full Access**

`deals:full`

Deal Activity

Get all activities of a deal

**Activities: Read only** or  
**Activities: Full Access**

`activities:read` or  
`activities:full`

Deal Product

Get all products in a deal

**Products: Read Only** or  
**Products: Full Access**

`products:read` or  
`products:full`

File

Download  
Get data of a file

Refer to note below

Refer to note below

File

Create  
Delete

Refer to note below

Refer to note below

Lead

Get data of a lead  
Get data of all leads

**Leads: Read only** or  
**Leads: Full access**

`leads:read` or  
`leads:full`

Lead

Create  
Delete  
Update

**Leads: Full access**

`leads:full`

Note

Get data of a note  
Get data of all notes

Refer to note below

Refer to note below

Note

Create  
Delete  
Update

Refer to note below

Refer to note below

Organization

Get data of an organization  
Get data of all organizations  
Search

**Contacts: Read Only** or  
**Contacts: Full Access**

`contacts:read` or  
`contacts:full`

Organization

Create  
Delete  
Update

**Contacts: Full Access**

`contacts:full`

Person

Get data of a person  
Get data of all persons  
Search

**Contacts: Read Only** or  
**Contacts: Full Access**

`contacts:read` or  
`contacts:full`

Person

Create  
Delete  
Update

**Contacts: Full Access**

`contacts:full`

Product

Get data of all products

**Products: Read Only**

`products:read`

Files and Notes

The scopes for Files and Notes depend on which object they relate to:

*   Files relate to Deals, Activities, or Contacts.
*   Notes relate to Deals or Contacts.

Refer to those objects' scopes.

The Pipedrive node also supports Custom API calls. Add relevant scopes for whatever custom API calls you intend to make.

Refer to [Scopes and permissions explanations](https://pipedrive.readme.io/docs/marketplace-scopes-and-permissions-explanations) for more information.

### Pipedrive Trigger node scopes[#](#pipedrive-trigger-node-scopes "Permanent link")

The [Pipedrive Trigger](../../trigger-nodes/n8n-nodes-base.pipedrivetrigger/) node requires the **Webhooks: Full access** (`webhooks:full`) scope.