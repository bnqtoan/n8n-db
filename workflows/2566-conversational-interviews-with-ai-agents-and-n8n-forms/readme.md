# AI Interviewer

## Use cases:

- **Automated User Research:** Conduct user interviews at scale to gather insights on user preferences, pain points, and needs for product development or service improvement.
- **Candidate Screening:** Use the workflow to screen potential job candidates by asking a series of dynamic questions based on their responses, saving time for human recruiters.
- **Market Research:** Automate the collection of feedback from potential customers on new product ideas or marketing campaigns.

## How it works:

1.  **Start Interview:** The workflow begins with a Form Trigger node that initiates the interview process when a user accesses the form.
2.  **Set Interview Topic:**  Sets the interview topic using the data collected from the initial form.
3.  **AI Researcher:** Uses an AI Agent (powered by a Groq Chat Model) to generate interview questions dynamically based on the user's previous answers and the defined interview topic. It formats the response in JSON, including a "stop\_interview" boolean and the "question" string.
4.  **Parse Response:** Parses the JSON output from the AI Agent to extract the next question or determine if the interview should stop.
5.  **Stop Interview?:** Checks the "stop\_interview" boolean. If true, the workflow proceeds to end the interview. Otherwise, it asks the next question.
6.  **Get Answer:** Presents the generated question to the user via a Form node and captures their answer.
7.  **Record Answers:** The workflow creates rows with the timestamp, question and answer and saves the data to Redis session to build our transcript before continuing the loop with the agent.
8.  **Clear Memory:** Ends the session and displays the interview completion screen

## Services:

-   **Upstash (Redis):** Used for session storage to maintain the interview context and transcript.
-   **Groq API:** Provides access to the Groq LLM for generating interview questions.
-   **Google Sheets:** Stores the interview transcripts for analysis.

## Hashtags:

#n8n #automation #workflow #AI #interviews #userresearch
