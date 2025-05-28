# Get All Help Scout Mailboxes

## Use cases
*   Retrieve a list of all mailboxes in your Help Scout account for auditing purposes.
*   Use the mailbox data to create a dashboard displaying mailbox information.
*   Automate the process of fetching mailbox data for regular reporting.

## How it works
1.  The workflow is manually triggered by clicking the "execute" button in n8n.
2.  The `HelpScout` node then uses the Help Scout API to retrieve all mailboxes associated with the configured Help Scout account. The `mailbox` resource and `getAll` operation are used for this purpose.
3.  The retrieved mailbox data is then available for further processing in subsequent nodes (not included in this workflow example).

## Services
*   Help Scout

## Hashtags
#n8n #HelpScout #Automation #Mailbox #API
