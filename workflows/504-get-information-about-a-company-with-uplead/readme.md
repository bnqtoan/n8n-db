## n8n Workflow: Get Company Information with UpLead

This workflow retrieves information about a specific company using the UpLead API.

**Use cases:**

*   **Sales Lead Generation:** Automatically gather company details like industry, employee count, and contact information to identify potential leads.
*   **Market Research:** Quickly obtain company profiles for market analysis and competitive intelligence.
*   **Data Enrichment:** Enhance existing CRM or database records with up-to-date company information from UpLead.

**How it works:**

1.  The workflow starts with a **"On clicking 'execute'"** node, which is a manual trigger. This means the workflow is initiated when a user clicks the "Execute Workflow" button in n8n.
2.  The **"Uplead"** node then uses the UpLead API to search for information about a company.  The `company` parameter is set to "Apple", so the workflow specifically searches for information about Apple.  You'll need to configure the `upleadApi` credential to provide authentication for the UpLead API.
3.  The workflow then outputs the information retrieved from UpLead.

**Services:**

*   UpLead API

**Hashtags:**

#n8n #automation #uplead #leadgeneration #marketresearch
