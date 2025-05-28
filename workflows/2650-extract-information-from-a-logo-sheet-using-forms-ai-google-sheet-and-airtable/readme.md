# AI Logo Sheet Extractor to Airtable

## Use cases:

- **Competitive Analysis:** Automatically extract and categorize tools/products mentioned in a logo sheet, identifying competitors and their attributes.
- **Market Research:** Populate a database with information extracted from visual data, enabling trend analysis and market understanding.
- **Knowledge Base Building:** Automatically create and update an Airtable base with AI tools, their features, and relationships based on logo sheets from various sources.

## How it works:

1. **Form Submission:** The workflow starts when a user uploads an image of a logo sheet via a web form.
2. **AI-Powered Information Extraction:**
    - The image is sent to an AI Agent (using `n8n-nodes-langchain.agent` and `langchain.lmChatOpenAi` with the `gpt-4o` model) which analyzes the image and associated prompt to identify tools, their attributes, and similar tools. The prompt guides the AI in extracting structured information.
    - The AI Agent returns a JSON output containing a list of tools, their attributes, and similar tools identified in the image.
3. **Data Structuring and Preparation:**
    - The `JSON it` node converts the AI Agent's output into a usable JSON format.
    - The `Split Out Tools` node splits the JSON array into individual tool entries.
    - The `Loop Over Attributes` node further breaks down each tool entry into individual attributes.
4. **Attribute Management:**
    - The workflow checks if each attribute already exists in the Airtable "Attributes" table using the `Check if Attribute exists` node.
    - If an attribute doesn't exist, it's created in the Airtable "Attributes" table.
    - The `Wait for Attribute Creation` node waits until the attribute creation is finished.
5. **Tool Management:**
    - The workflow generates a unique hash for each tool name using the `Generate Unique Hash for Name` node.
    - It checks if the tool already exists in the Airtable "Tools" table using the `Create if not Exist` node. If the tool doesn't exist, it's created.
6. **Similar Tool Mapping:**
    - The workflow extracts similar tools and processes them in a similar way as attributes, generating hashes and checking for their existence in the "Tools" table.
7. **Data Association and Saving:**
    - The workflow associates the extracted attributes and similar tools with the corresponding tool record in Airtable using record IDs.
    - Finally, the `Save all this juicy data` node updates the Airtable "Tools" table with the extracted information, including attributes and similar tools.

## Services:

- **Airtable:** Used as a database to store and manage the extracted information about AI tools and their attributes.
- **OpenAI (gpt-4o):** Powers the AI agent for image analysis and information extraction.

## Hashtags:

#n8n #automation #AITools #Airtable #LogoAnalysis
