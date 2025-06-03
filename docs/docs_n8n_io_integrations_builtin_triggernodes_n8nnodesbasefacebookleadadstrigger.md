[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/trigger-nodes/n8n-nodes-base.facebookleadadstrigger.md "Edit this page")

# Facebook Lead Ads Trigger node[#](#facebook-lead-ads-trigger-node "Permanent link")

Use the Facebook Lead Ads Trigger node to respond to events in [Facebook Lead Ads](https://www.facebook.com/business/ads/lead-ads/) and integrate Facebook Lead Ads with other applications. n8n has built-in support for responding to new leads.

On this page, you'll find a list of events the Facebook Lead Ads Trigger node can respond to, and links to more resources.

Credentials

You can find authentication information for this node [here](../../credentials/facebookleadads/).

Examples and templates

For usage examples and templates to help you get started, refer to n8n's [Facebook Lead Ads Trigger integrations](https://n8n.io/integrations/facebook-lead-ads-trigger/) page.

## Events[#](#events "Permanent link")

*   New lead

## Related resources[#](#related-resources "Permanent link")

View [example workflows and related content](https://n8n.io/integrations/facebook-lead-ads-trigger/) on n8n's website.

Refer to [Facebook Lead Ads' documentation](https://developers.facebook.com/docs/marketing-api/guides/lead-ads/) for details about their API.

## Common issues[#](#common-issues "Permanent link")

Here are some common errors and issues with the Facebook Lead Ads Trigger node and steps to resolve or troubleshoot them.

### Workflow only works in testing or production[#](#workflow-only-works-in-testing-or-production "Permanent link")

Facebook Lead Ads only allows you to register a single webhook per app. This means that every time you switch from using the testing URL to the production URL (and vice versa), Facebook Lead Ads overwrites the registered webhook URL.

You may have trouble with this if you try to test a workflow that's also active in production. Facebook Lead Ads will only send events to one of the two webhook URLs, so the other will never receive event notifications.

To work around this, you can disable your workflow when testing:

Halts production traffic

This workaround temporarily disables your production workflow for testing. Your workflow will no longer receive production traffic while it's deactivated.

1.  Go to your workflow page.
2.  Toggle the **Active** switch in the top panel to disable the workflow temporarily.
3.  Test your workflow using the test webhook URL.
4.  When you finish testing, toggle the **Inactive** toggle to enable the workflow again. The production webhook URL should resume working.