# Jira MCP Server

## Use cases:

- **Automated Jira Ticket Management:** Streamline the process of creating, updating, and managing Jira tickets based on specific triggers or events.
- **Jira Integration with External Systems:** Connect Jira with other systems to automatically create tickets when a new task is created in Asana, or update tickets when a payment is processed in Stripe.
- **Automated Notifications and Updates:** Keep stakeholders informed about changes to Jira tickets by automatically sending email or Slack notifications when a ticket's status changes or a new comment is added.

## How it works:

The workflow starts with a "Jira MCP Server" trigger, which initiates the workflow based on a specified event.
Once triggered, the workflow performs several Jira-related actions:
1. **Create Jira ticket:** Creates a new Jira ticket with predefined details.
2. **Add Comment to Jira Ticket:** Adds a comment to a specific Jira ticket.
3. **Get Ticket transitions:** Retrieves the available transitions for a given Jira ticket.
4. **Add Attachment to Jira Ticket:** Attaches a file to a specific Jira ticket.
5. **Change Jira Ticket Status:** Changes the status of a Jira ticket (e.g., from "Open" to "In Progress").
6. **Get Issue:** Retrieves the details of a specific Jira issue.
7. **Get Projects and Issue Types:** Retrieves the available projects and issue types from Jira.

## Services:

- Jira

## Hashtags:

#n8n #Jira #Automation #Ticketing #Workflow
