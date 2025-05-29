# Breach Monitoring and Alert Workflow

**Use Cases:**
1. **Security Monitoring:** Automatically check for new data breaches listed on Have I Been Pwned and trigger alerts (e.g., Slack/Discord) when new breaches are detected.
2. **Audit Logging:** Maintain a historical log of breaches for compliance or incident response purposes.
3. **Testing Workflow Logic:** Demonstrate how to cache data between workflow executions to avoid redundant alerts.

---

**How It Works:**
1. **Scheduled Checks:** A **Schedule Trigger** runs every 15 minutes to check for new breaches via the **Have I Been Pwned API**.
2. **Data Retrieval:** The **HTTP Request** node fetches the latest breach data from the API.
3. **Local Cache Check:** The workflow reads a local `cache.json` file to check the last recorded breach using the **Read/Write File** node.
4. **Comparison Logic:** 
   - If the latest breach is **new** (not in `cache.json`), the workflow triggers an alert (e.g., via Slack/Discord) and updates `cache.json` with the new breach name.
   - If no new breach is found, the workflow exits without action.
5. **Cache Reset:** A manual trigger (clicking "Test Workflow") resets the `cache.json` file to test the alerting system.

---

**Services:**
- **Have I Been Pwned API** (for breach data)
- **Local file storage** (to cache breach history in `cache.json`)

---

**Hashtags:**
#n8n #security #automation #monitoring #workflow

---

**Notes:**
- This workflow includes a **support message** for the creator (xqus) in one of the nodes. Remove or modify this section if deploying in a professional environment.
- To test the workflow manually, use the **"Test Workflow"** button to reset the cache and simulate a new breach detection.