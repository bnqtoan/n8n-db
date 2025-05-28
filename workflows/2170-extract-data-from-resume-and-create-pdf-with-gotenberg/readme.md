# Resume Extractor

## Use cases

-   **Automated Resume Parsing:** Automatically extract and structure data from resumes submitted via Telegram, saving time and effort for recruiters.
-   **Candidate Profile Creation:**  Populate candidate profiles in HR systems or databases with structured information extracted from resumes.
-   **Skill Inventory Management:** Build a searchable database of skills and experience based on the parsed resume data.

## How it works

1.  **Telegram Trigger:** The workflow starts when a user sends a message (specifically a file) to a Telegram bot.
2.  **Authentication:** Checks if the Telegram chat ID is authorized. If not, the workflow stops.
3.  **Start Message Check:**  Ignores the initial `/start` message.
4.  **Get File:** Downloads the resume file (PDF) from Telegram using the file ID.
5.  **Extract Text from PDF:** Extracts the text content from the PDF resume.
6.  **Parse Resume Data:** Uses OpenAI's `gpt-4-turbo-preview` model to parse the extracted text and structure it into a JSON format according to a predefined schema. The JSON schema defines the structure for personal information, employment history, education, projects, volunteering, programming languages, and foreign languages. The `Auto-fixing Output Parser` and `Structured Output Parser` nodes are used to ensure the output is in the correct JSON format.
7.  **Convert Sections to HTML:** Converts the structured data for employment history, education, projects and volunteering experience into HTML. This makes it easier to format and display the information in the final PDF.
8.  **Set parsed fields:** Stores parsed data into n8n variables
9.  **Format HTML:** Formats the extracted data, combining it into sections like "Personal Info," "Technologies," "Employment History," "Education," "Projects," and "Volunteering," using HTML tags for better presentation.
10. **Merge data:** Merges all previously setted variables to single object
11. **Create HTML File:** Generates an `index.html` file containing all the formatted information.
12. **Convert to PDF:** Converts the `index.html` file into a PDF document using Gotenberg.
13. **Send PDF to User:** Sends the generated PDF document back to the user via Telegram.

## Services

-   Telegram: Used to receive the resume file and send the processed PDF.
-   OpenAI: Used to parse the resume text and extract structured data.
-   Gotenberg: Used to convert the HTML file to a PDF.

## Hashtags

#n8n #automation #resumeParsing #telegram #openai #gotenberg
