# Syncro Status Update Clockify

## Use cases:

- **Automatically archive Clockify projects when a ticket in Syncro is resolved:** This workflow ensures that when a ticket in Syncro (a PSA/RMM platform) is marked as resolved, the corresponding project in Clockify is automatically archived, keeping your Clockify workspace tidy and relevant.
- **Unarchive Clockify projects when a ticket in Syncro is re-opened:** Conversely, if a resolved Syncro ticket is re-opened, the corresponding Clockify project can be unarchived, allowing time tracking to resume seamlessly.
- **Keep Clockify project names synchronized with Syncro ticket details:**  The workflow can be configured to update the Clockify project name based on ticket number and customer information from Syncro, maintaining consistency across platforms.

## How it works:

1.  **Webhook:** The workflow starts with a Webhook node, listening for POST requests from Syncro.  It's triggered when a ticket's status is updated in Syncro.  The webhook's path is `4500d16f-5d43-4ae7-887e-376eecaeec17`.
2.  **IF1 (Conditional Logic):** This node checks the `status` of the Syncro ticket.
    *   If the `status` is NOT "Resolved," the workflow proceeds to the "Clockify" node.
    *   If the `status` is "Resolved," the workflow proceeds to the "Clockify1" node.
3.  **Clockify & Clockify1:** Both nodes perform similar functions. They search for a Clockify project based on the ticket number, customer name, and ticket ID received from the Webhook. The difference is in the `archived` status.
    *   **Clockify:** This node sets the `archived` status to `true` as the ticket in syncro is not resolved.
    *   **Clockify1:** This node sets the `archived` status to `false` as the ticket in syncro is resolved.
4.  **HTTP Request & HTTP Request1:** These nodes take the project ID obtained from the Clockify nodes and use it to send a PUT request to the Clockify API to update the project.
    *   **HTTP Request:** Updates the project to `archived: false`.
    *   **HTTP Request1:** Updates the project to `archived: true`.

## Services:

-   Syncro (via Webhooks)
-   Clockify API

## Hashtags:

#n8n #automation #clockify #syncro #psa
