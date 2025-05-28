# Strava Activity Analyzer and Personalized Coaching Workflow

## Use cases:

- **Personalized Fitness Coaching:** Automatically analyze Strava activity data (running, cycling, swimming) and receive tailored coaching advice via email to improve performance.
- **Progress Tracking and Goal Setting:** Use the workflow to monitor your fitness activities, identify trends, and get suggestions for setting realistic training goals.
- **Triathlon Training Optimization:** If you're a triathlete, this workflow can help you analyze your performance across all three disciplines (swim, bike, run) and get integrated coaching to optimize your training plan.

## How it works:

1.  **Strava Trigger:** The workflow starts when a new or updated activity is recorded on Strava (running, cycling, or swimming).
2.  **Code (Data Enrichment):** A code node enriches the activity data by adding a new field.
3.  **Combine Everything:** The "Combine Everything" node aggregates and flattens the incoming JSON data from Strava into a single string for easier processing by the AI.
4.  **Fitness Coach (LangChain Agent):** This is the core of the workflow. It uses the Google Gemini Chat Model to analyze the Strava data with a prompt that defines it as a Triathlon Coach. The agent provides personalized feedback, improvement plans, and motivational coaching tips based on your activity.
5.  **Structure Output:** This node structures the output from the Gemini Agent into paragraphs, headings, lists, and numbered lists for formatting.
6.  **Convert to HTML:** This node converts the structured data into HTML format, making it suitable for email display.
7.  **Send Email:** An email with the personalized coaching advice (in HTML format) is sent to your specified email address using an SMTP service.

## Services:

-   Strava: For tracking fitness activities.
-   Google Gemini Chat Model: For AI-powered analysis and coaching.
-   SMTP Service (e.g., Gmail, SendGrid): For sending emails.

## Hashtags:

#n8n #automation #strava #fitness #coaching #ai #langchain
