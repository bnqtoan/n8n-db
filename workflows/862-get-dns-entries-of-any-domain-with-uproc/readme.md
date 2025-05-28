# Get DNS entries

## Use cases

*   **Monitor DNS records:** Automatically check and record DNS entries for a specific domain on a schedule to track changes or ensure proper configuration.
*   **Troubleshooting DNS issues:** Quickly retrieve DNS records for a domain to diagnose potential problems with domain resolution or email delivery.
*   **Domain Information Gathering:** Gather DNS information as part of a broader reconnaissance or security assessment process.

## How it works

1.  The workflow starts with a **Manual Trigger** node, which is activated when you click the "Execute" button in the n8n editor.
2.  A **Function Item** node named "Create Domain Item" then sets the `domain` property of the item to "n8n.io".
3.  The **Uproc** node, "Get DNS records," utilizes the `getDomainRecords` tool from the internet group to retrieve DNS records for the domain specified in the previous node. The `domain` parameter dynamically pulls the domain value from the "Create Domain Item" node using an expression.

## Services

*   [Uproc](https://uproc.ai/): A tool that allows users to perform various OSINT tasks via API.

## Hashtags

#n8n #automation #DNS #uproc #domain
