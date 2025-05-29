# Generate Exam Questions

## Use cases:
- **Automated Exam Creation:** Generate multiple-choice and open-ended questions from educational content in Google Docs.
- **Curriculum Alignment:** Ensure assessments are aligned with specific learning objectives and article content.
- **Training Material Enhancement:** Quickly create quizzes and knowledge checks to reinforce learning concepts in training programs.

## How it works:

1.  **Trigger:** The workflow is manually triggered.
2.  **Collection Handling:** The workflow refresh the Qdrant collection to ensure no outdated data is present.
3.  **Document Retrieval:** A Google Docs document is fetched using its URL.
4.  **Markdown Conversion:** The document content is converted to Markdown format.
5.  **Question Generation (Open-Ended):** The Markdown content is fed into an LLM (Google Gemini) to generate open-ended questions. The LLM is instructed to create 10 questions covering key facts, concepts, and implications from the article.
6.  **Question Generation (Multiple-Choice):** The same Markdown content is also used to generate multiple-choice questions. The LLM is instructed to create 10 multiple-choice questions with one correct answer and three plausible distractors.
7.  **Question Answering (Open-Ended):** The generated open questions are iterated. A second Google Gemini model retrieves the context from the Qdrant database and try to give an answer to the current question
8.  **Question Answering and options generation (Multiple-Choice):**The generated multiple-choice questions are iterated. A second Google Gemini model retrieves the context from the Qdrant database and try to give an correct answer and 3 wrong options to the current question
9.  **Data Storage:** The open-ended questions, and the answers created are then written to a Google Sheets document. Also the closed-ended question with their options are saved on a different sheet.

## Services:

-   Google Docs
-   Google Sheets
-   Qdrant Vector Database
-   OpenAI API
-   Google Gemini API (formerly PaLM)

## Hashtags:

#n8n #automation #examgeneration #AI #workflow
