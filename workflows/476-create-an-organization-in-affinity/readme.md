## Workflow: Create an Organization in Affinity

This workflow automates the creation of new organizations within Affinity, a relationship intelligence platform.

### Use cases:

*   **New Client Onboarding:** Automatically create organization profiles in Affinity when a new client is added to your system, streamlining your onboarding process.
*   **Lead Enrichment:** When a promising lead is identified, automatically create a corresponding organization in Affinity to start tracking interactions.
*   **Database Synchronization:** Keep your Affinity organization data synchronized with other databases or CRM systems by automatically creating or updating organizations based on changes in those systems.

### How it works:

1.  The workflow is initiated manually using the "On clicking 'execute'" trigger node.
2.  The "Affinity" node then creates a new organization in Affinity using the provided name and domain.  Additional fields can also be configured within the Affinity node.
3.  The workflow uses credentials stored for the "AffinityApi" to authenticate with the Affinity API.

### Services:

*   Affinity

### Hashtags:

*   #n8n
*   #automation
*   #Affinity
*   #CRM
*   #OrganizationManagement
