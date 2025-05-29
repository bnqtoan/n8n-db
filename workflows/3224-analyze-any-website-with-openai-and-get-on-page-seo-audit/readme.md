# 🤖 On-Page SEO Audit

### Use Cases
1. **Website optimization**  
Automatically audit landing pages for technical SEO issues and content quality to improve Google rankings.

2. **Digital agency workflows**  
Scale SEO audits for client websites by processing multiple URLs and generating structured reports.

3. **Content team collaboration**  
Provide marketers with actionable insights to improve page structure, keywords, and readability scores.

---

### How It Works
1. **Collect URL**: Users submit a landing page URL through an input form.
2. **Scrape Content**: The workflow fetches the webpage's HTML content.
3. **AI Analysis**:
   - **Technical Audit**: OpenAI evaluates code structure, HTML elements, and technical SEO factors.
   - **Content Audit**: OpenAI assesses content quality, keywords, and readability metrics.
4. **Report Generation**: Combines both audits into a formatted Markdown document.
5. **Delivery**: Sends the SEO audit report via Gmail to a specified address.

Key Nodes: Form Trigger (input), HTTP Request (scraping), OpenAI Agents (audits), Merge/Aggregate (data processing), Gmail (delivery).

---

### Services
- **OpenAI** (GPT-4o-mini model for content/technical analysis)
- **Gmail** (email delivery of reports)
- **HTTP Requests** (webpage scraping)

---

### Hashtags
#SEO #n8n #Automation #OpenAI #Workflow
