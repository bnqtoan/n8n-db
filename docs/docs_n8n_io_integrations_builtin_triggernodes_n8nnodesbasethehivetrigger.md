[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.thehivetrigger.md "Edit this page")

# TheHive Trigger node[#](#thehive-trigger-node "Permanent link")

On this page, you'll find a list of events the TheHive Trigger node can respond to and links to more resources.

TheHive and TheHive 5

n8n provides two nodes for TheHive. Use this node (TheHive Trigger) if you want to use TheHive's version 3 or 4 API. If you want to use version 5, use [TheHive 5 Trigger](../n8n-nodes-base.thehive5trigger/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [TheHive Trigger integrations](https://n8n.io/integrations/thehive-trigger/) page.

## Events[#](#events "Permanent link")

*   Alert
    *   Created
    *   Deleted
    *   Updated
*   Case
    *   Created
    *   Deleted
    *   Updated
*   Log
    *   Created
    *   Deleted
    *   Updated
*   Observable
    *   Created
    *   Deleted
    *   Updated
*   Task
    *   Created
    *   Deleted
    *   Updated

## Related resources[#](#related-resources "Permanent link")

n8n provides an app node for TheHive. You can find the node docs [here](../../app-nodes/n8n-nodes-base.thehive/).

View [example workflows and related content](https://n8n.io/integrations/thehive-trigger/) on n8n's website.

Refer to TheHive's documentation for more information about the service:

*   [Version 3](https://docs.thehive-project.org/thehive/legacy/thehive3/api/)
*   [Version 4](https://docs.thehive-project.org/cortex/api/api-guide/)

## Configure a webhook in TheHive[#](#configure-a-webhook-in-thehive "Permanent link")

To configure the webhook for your TheHive instance:

1.  Copy the testing and production webhook URLs from TheHive Trigger node.
2.  Add the following lines to the `application.conf` file. This is TheHive configuration file:
    
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    13
    14
    15
    16
    17
    18
    
    `notification.webhook.endpoints = [ 	{ 		name: TESTING_WEBHOOK_NAME 		url: TESTING_WEBHOOK_URL 		version: 0 		wsConfig: {} 		includedTheHiveOrganisations: ["ORGANIZATION_NAME"] 		excludedTheHiveOrganisations: [] 	}, 	{ 		name: PRODUCTION_WEBHOOK_NAME 		url: PRODUCTION_WEBHOOK_URL 		version: 0 		wsConfig: {} 		includedTheHiveOrganisations: ["ORGANIZATION_NAME"] 		excludedTheHiveOrganisations: [] 	} ]`
    
3.  Replace `TESTING_WEBHOOK_URL` and `PRODUCTION_WEBHOOK_URL` with the URLs you copied in the previous step.
    
4.  Replace `TESTING_WEBHOOK_NAME` and `PRODUCTION_WEBHOOK_NAME` with your preferred endpoint names.
5.  Replace `ORGANIZATION_NAME` with your organization name.
6.  Execute the following cURL command to enable notifications:
    
     1
     2
     3
     4
     5
     6
     7
     8
     9
    10
    11
    12
    13
    14
    15
    
    `curl -XPUT -uTHEHIVE_USERNAME:THEHIVE_PASSWORD -H 'Content-type: application/json' THEHIVE_URL/api/config/organisation/notification -d ' { 	"value": [ 		{ 		"delegate": false, 		"trigger": { "name": "AnyEvent"}, 		"notifier": { "name": "webhook", "endpoint": "TESTING_WEBHOOK_NAME" } 		}, 		{ 		"delegate": false, 		"trigger": { "name": "AnyEvent"}, 		"notifier": { "name": "webhook", "endpoint": "PRODUCTION_WEBHOOK_NAME" } 		} 	] }'`