# Automate Job Search with AI Resume Scoring & Tailoring using OpenAI, Apify, and Airtable

## Use cases:

- **Personalized Job Search:** Automatically search for job postings based on your specific preferences (location, job title, industry) and save them in Airtable.
- **AI-Powered Resume Optimization:** Tailor your resume to specific job descriptions by using AI to identify key skills and experience.
- **Prioritized Job Application:** Score each job based on resume relevance and create a prioritized application list.

## How it works:

1.  **Trigger:** The workflow starts with a `🕒 Trigger: Daily Job Fetch` node, which initiates the process on a daily schedule.
2.  **Fetch Job Preferences:** `📄 Fetch Job Preferences (Google Sheets)` retrieves your desired job search criteria (e.g., job titles, locations) from a Google Sheets document.
3.  **Split Job Preferences:** `Split Job Preferences` splits the job preferences into individual items to be processed in a loop.
4.  **Search for Jobs:** `🔄 Loop: Search Jobs per Preference` iterates through each job search criterion and scrapes job postings using `🔍 Apify: Scrape Jobs`.
5.  **Clean & Extract Job Data:** `🧹 Clean & Extract Job Data` extracts relevant information from the scraped job postings.
6.  **Filter Recent Jobs:** `Filter: Recent Jobs (<48h)` filters to extract recent jobs (<48h) for scoring, and archive the old jobs to Airtable.
7.  **Archive Old Jobs:** `🗂️ Archive: Old Jobs (Airtable)` saves older job postings to Airtable.
8.  **Score New Jobs:** `🔄 Loop: Score New Jobs` iterates through jobs to be scored, and calls `🤖 AI: Score CV vs Job` to rank.
9.  **AI Score CV vs Job:** `🤖 AI: Score CV vs Job` uses an AI agent to score the fit between your CV and the job description, using the `OpenAI Chat Model`.
10. **Parse AI Score Output:** `📄 Parse AI Score Output` extract the scoring parameters of the AI output.
11. **AI Revamp CV Based on Job:** `✍️ AI: Revamp CV Based on Job` uses an AI model to adapt your CV to the job description.
12. **Loop Generate CV Suggestions:** `🔄 Loop: Generate CV Suggestions` iterates through the extracted AI output to generate CV suggestions.
13. **Extract Job with revamped scoring:** `Job Extract with revamped scoring` Extracts the content and scoring of the CV.
14. **Save Final Job Data:** `🗂️ Save: Final Job Data (Airtable)` Saves jobs to Airtable.

## Services:

-   **Google Sheets:** Used to store job search preferences.
-   **Apify:** Used to scrape job postings from the web.
-   **OpenAI:** Used to score CVs against job descriptions and to tailor CV based on job description.
-   **Airtable:** Used to store job postings and application data.

## Hashtags:

#n8n #automation #jobsearch #ai #resume
