# Social Media Analysis and Automated Email Generation

## Use cases:

*   **Personalized Lead Generation:** Automatically generate personalized email cover letters for potential leads based on their recent LinkedIn and Twitter activity.
*   **Efficient Outreach:** Streamline the outreach process by using AI to identify common interests and tailor communication, saving time and improving engagement.
*   **Marketing Automation:** Automate the creation of targeted marketing emails by analyzing social media data and crafting relevant messages.

## How it works:

1.  **Google Sheets Trigger:** The workflow starts with a Google Sheets Trigger node that monitors a Google Sheet for new entries. The sheet should contain columns for LinkedIn URL, name, Twitter handle, email, and a "done" column.
2.  **Check "done" field**: The workflow checks if the field "done" is empty. If that's the case, proceed to the next step.
3.  **Set your company's variables:** Sets predefined variables such as company name, activity, and personal email address.
4.  **Get Twitter ID:** Uses the Twitter API via RapidAPI to retrieve the Twitter user ID based on the Twitter handle provided in the Google Sheet.
5.  **Get Tweets:** Fetches recent tweets from the user's timeline using the Twitter API and the previously obtained user ID.
6.  **Extract and limit X:** Extracts the text content of the tweets and limits the number of extracted posts to a maximum of 10.
7.  **Get LinkedIn Posts:** Uses the LinkedIn API via RapidAPI to retrieve the user's recent posts based on their LinkedIn profile URL from the Google Sheet.
8.  **Extract and limit Linkedin:** Extracts the title and text content from the LinkedIn posts and limits the number of extracted posts to a maximum of 10.
9.  **Generate Subject and cover letter based on match:** Uses the OpenAI Chat Model to analyze the extracted LinkedIn and Twitter posts and compare them to your company's activity and generate a personalized subject and cover letter, formatted in HTML.
10. **Send Cover letter and CC me:** Sends the generated email to the lead's email address specified in the Google Sheet, with a copy (CC) to your email address.
11. **Google Sheets:** Updates the "done" column in the Google Sheet for the corresponding row to "X" to indicate that the email has been sent.

## Services:

*   Google Sheets
*   Twitter API (via RapidAPI)
*   LinkedIn API (via RapidAPI)
*   OpenAI
*   SMTP (Email)

## Hashtags:

#n8n #automation #leadgeneration #socialmedia #emailmarketing
