# Generate a clean hiring brief and interview scorecards in 1 minute

## Use cases:

- **Automated Hiring Brief Generation:** Quickly convert raw transcripts from hiring kickoff meetings into well-structured hiring briefs, saving recruiters significant time.
- **Interview Scorecard Creation:** Automatically generate interview scorecards tailored to each stage of the hiring process, ensuring consistent and focused evaluations.
- **Streamlined Recruiting Workflow:** Integrate this workflow into your recruitment process to reduce manual effort, improve efficiency, and accelerate time-to-hire.

## How it works:

1.  **Form Trigger:** The workflow starts with a `Sending raw hiring brief transcript` node, which is a Form trigger that allows you to upload a raw hiring brief in PDF format and provide a document name.
2.  **Text Extraction:** The `Extracting text` node extracts the text content from the uploaded PDF file.
3.  **Hiring Brief Summarization:** The `Summarizing raw transcript` node uses an OpenAI model (o3-mini) to analyze the extracted text and generate a concise and recruiter-friendly hiring brief in Markdown format, following predefined guidelines and output requirements.
4.  **Scorecards Generation:**  The `Generating scorecards` node takes the output from the summarization node and, using an OpenAI model (o3-mini), creates compact interview scorecards for each stage of the hiring process detailed in the brief. These scorecards include the primary focus of each stage and a list of hard and soft skills to probe, along with sample questions.
5.  **Hiring Brief File Creation:** The `Creating hiring brief file` node creates a new Google Docs document with the name provided in the initial form.
6.  **Adding Brief to File:** The `Adding brief to file` node inserts the generated hiring brief content into the newly created Google Docs document.
7.  **Scorecards File Creation:** The `Creating Scorecards file` node creates another Google Docs document for the scorecards, named accordingly.
8.  **Adding scorecards to File:** The `Adding scorecards to File` node inserts the generated scorecards content into its corresponding Google Docs file.

## Services:

-   OpenAI (for text summarization and scorecard generation)
-   Google Docs (for creating and updating documents)

## Hashtags:

#n8n #automation #recruiting #AI #HR
