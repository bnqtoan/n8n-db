[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.thehive5trigger.md "Edit this page")

# TheHive 5 Trigger node[#](#thehive-5-trigger-node "Permanent link")

Use the TheHive 5 Trigger node to respond to events in [TheHive](https://strangebee.com/thehive/) and integrate TheHive with other applications. n8n has built-in support for a wide range of TheHive events, including alerts, cases, comments, pages, and tasks.

On this page, you'll find a list of events the TheHive5 Trigger node can respond to and links to more resources.

TheHive and TheHive 5

n8n provides two nodes for TheHive. Use this node (TheHive 5 Trigger) if you want to use TheHive's version 5 API. If you want to use version 3 or 4, use [TheHive Trigger](../n8n-nodes-base.thehivetrigger/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [TheHive 5 Trigger integrations](https://n8n.io/integrations/thehive-5-trigger/) page.

## Events[#](#events "Permanent link")

*   Alert
    *   Created
    *   Deleted
    *   Updated
*   Case
    *   Created
    *   Deleted
    *   Updated
*   Comment
    *   Created
    *   Deleted
    *   Updated
*   Observable
    *   Created
    *   Deleted
    *   Updated
*   Page
    *   Created
    *   Deleted
    *   Updated
*   Task
    *   Created
    *   Deleted
    *   Updated
*   Task log
    *   Created
    *   Deleted
    *   Updated

## Related resources[#](#related-resources "Permanent link")

n8n provides an app node for TheHive 5. You can find the node docs [here](../../app-nodes/n8n-nodes-base.thehive5/).

Refer to TheHive's [documentation](https://docs.strangebee.com/) for more information about the service.

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