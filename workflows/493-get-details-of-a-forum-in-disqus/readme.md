## n8n Workflow: Get Details of a Forum in Disqus

This workflow retrieves information about a specific forum from Disqus.

**Use cases:**

*   **Forum Monitoring:** Automatically gather forum details (name, description, etc.) to monitor its status and changes.
*   **Reporting:** Include forum information in regular reports about online community engagement.
*   **Data Synchronization:** Keep forum metadata synchronized between Disqus and other systems (e.g., a database or CRM).

**How it works:**

1.  The workflow is triggered manually by clicking the "execute" button in n8n.
2.  The "Disqus" node then uses the Disqus API to retrieve information about the forum with the ID "hackernoon".  It utilizes the credentials stored in the `disqusApi` credential.
3.  The workflow outputs the forum details, which can then be used in subsequent nodes (not shown in this example).

**Services:**

*   Disqus

**Hashtags:**

#n8n #Disqus #Automation #Forum #API
