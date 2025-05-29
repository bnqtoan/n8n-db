# Testimonial Extractor

## Use Cases

1.  **Automated Feedback Processing:** Automatically extract positive testimonials from customer feedback submitted through a Google Forms survey, saving time and effort in manually sifting through responses.
2.  **Real-time Social Proof:** Instantly identify and share impactful testimonials on social media or marketing materials to boost credibility and customer trust.
3.  **Proactive Customer Engagement:** Send personalized thank-you emails to customers whose feedback was extracted as a testimonial, fostering stronger relationships and encouraging further engagement.

## How it works

1.  **Google Sheets Trigger:** The workflow starts when a new row is added to a specified Google Sheet (Form Responses 1). This sheet is connected to a Google Form that collects user feedback.
2.  **Basic LLM Chain:** The "Feedback" column data from the new row is passed to a Language Model (LLM). The LLM is configured to extract a short, emotionally engaging testimonial quote from the feedback, ignoring neutral or irrelevant text.
3.  **Google Gemini Chat Model:** This node provides the LLM capabilities for the testimonial extraction. It uses the `models/gemini-2.0-flash` model for quick processing.
4.  **Google Sheets:** The extracted testimonial quote is then written back to the same Google Sheet in the "Testimony" column. The workflow uses "appendOrUpdate" so if a testimony already exists, it will update it, if not, it will append the data.
5.  **Gmail:** Finally, an email is sent to `nataylamesa@gmail.com` with the extracted testimonial quote in the body. The subject of the email is "New Testimonial Extracted".

## Services

*   Google Sheets
*   Gmail
*   Google Gemini Chat Model (via Langchain)

## Hashtags

#n8n #automation #googlesheets #llm #testimonial
