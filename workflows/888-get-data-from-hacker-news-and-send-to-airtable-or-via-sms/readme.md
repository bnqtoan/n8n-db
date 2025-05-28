# Daily Language Learning

## Use cases:

*   **Daily Vocabulary Enrichment:** Users can automatically receive a set of new words and their translations every day to expand their vocabulary in a target language.
*   **Language Learning Reinforcement:** Integrate daily word learning with a news reading habit, reinforcing vocabulary encountered in real-world contexts.
*   **Personalized Language Tutoring:** Create a customized daily language learning experience by filtering and tailoring the words based on specific interests or learning goals.

## How it works:

This workflow automates the process of delivering a daily dose of new vocabulary words in a target language.

1.  **Daily Trigger:** The workflow starts with a "Daily trigger" node, configured to run every day at 8 AM.
2.  **Get top 3 articles:** Retrieves the top 3 articles from Hacker News, focusing on "front_page" tags.
3.  **Extract words:** Extracts all unique words from the titles of the retrieved articles and then removes any words which contain numbers.
4.  **Translate:** Translates the extracted words into German (de_DE) using the LingvaNex API.
5.  **Filter data:** Extracts the original English word and the translated German word.
6.  **Save today's words:** Saves each original English word and translated German word pair to an Airtable base.
7.  **Craft message:**  Combines the first 5 translated words into a comma-separated string.
8.  **Send SMS:** Sends an SMS message to a specified phone number with a greeting and the translated words for the day.

## Services:

*   **Hacker News API:** Used to retrieve top articles.
*   **LingvaNex API:** Used for translating words from English to German.
*   **Airtable:** Used to save the translated word pairs.
*   **Vonage API:** Used to send the daily words via SMS.

## Hashtags:

#n8n #automation #languagelearning #vocabulary #dailytips
