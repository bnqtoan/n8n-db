# Automated LinkedIn Job Hunter_READY

## Use cases:

- **Automated Job Application:** Automatically find and filter jobs on LinkedIn that match the skills and experience listed in your resume, then receive a curated list of top recommendations via email.
- **Proactive Job Search:** Schedule the workflow to run periodically (e.g., daily, weekly) to stay updated on new job opportunities that align with your profile.
- **Career Transition:**  Quickly identify relevant job openings when transitioning to a new role or industry, leveraging AI to match your resume to suitable positions.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule.
2.  **Input & DownloadResume:** Reads from an input and downloads your resume from Google Drive.
3.  **Extract Information from Resume PDF:** Extracts relevant information (skills, experience) from your resume using the "Extract from File" node.
4.  **SetResumeField:** Sets the extracted resume content to be used in the next nodes.
5.  **ScrapeLinkedin:** Scrapes job postings from LinkedIn using an HTTP request based on predefined search criteria (e.g., job title, location).
6.  **Aggregate all returned items:** Combines the information of all jobs obtained from Linkedin.
7.  **Combine all job information into a single text string:** Formats the job postings into a single text string.
8.  **Google Gemini Chat Model & Google Gemini Chat Model1:** Uses a Google Gemini Chat Model to process output.
9.  **Structured Output Parser & Auto-fixing Output Parser:** Parses the output into a structured format.
10. **AI Agent: Find Best-matched jobs:**  An AI Agent leverages the resume data and scraped job postings to identify the best-matched jobs.
11. **Email the top job recommendations:** Sends an email containing the top job recommendations to your specified Gmail address.

## Services:

*   Google Drive
*   LinkedIn
*   Gmail
*   Google Gemini

## Hashtags:

#n8n #automation #linkedin #jobsearch #ai
