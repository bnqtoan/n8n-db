# TopSourcer - Finds LinkedIn Profiles Using Natural Language

## Use Cases
1. **Recruitment Automation**: Source qualified candidates by automatically generating LinkedIn profile search strings from job descriptions and aggregating results in a spreadsheet.
2. **Lead Generation**: Identify potential business contacts on LinkedIn based on specific criteria (e.g., industry, skills, or experience).
3. **Market Research**: Collect LinkedIn profile data at scale for talent pool analysis or competitor benchmarking.

## How It Works
1. **Chat Input**: Users provide a job description or candidate requirements via an n8n chat interface.
2. **AI-Powered Search Generation**: OpenAI's GPT-4 analyzes the input and creates a Google Boolean search string targeting LinkedIn profiles (`site:linkedin.com/in [optimized query]`).
3. **Google Sheets Setup**: 
   - Creates a new timestamped sheet
   - Prepares columns for LinkedIn profile data
4. **Automated Search Loop**:
   - Executes paginated Google searches (10 results/page) using authenticated requests
   - Extracts LinkedIn URLs from search results using regex patterns
   - Appends clean profile URLs to Google Sheets
   - Repeats until 50 results are collected (configurable) with 5-second delays to avoid rate limiting

## Services
- **OpenAI API**: Generates optimized Boolean search strings
- **Google Sheets**: Stores extracted LinkedIn profiles
- **Google Search**: Performs authenticated profile searches via HTTP requests

## Hashtags
#n8n #recruitment-automation #linkedin-sourcing #workflow #openai
