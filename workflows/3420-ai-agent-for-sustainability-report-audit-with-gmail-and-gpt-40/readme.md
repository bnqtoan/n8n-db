# CSRD Reporting Audit Workflow

## Use cases:

- **Automated CSRD Report Validation:** Automatically analyze CSRD (Corporate Sustainability Reporting Directive) reports received via email to ensure they meet basic formatting and content requirements.
- **Streamlined Compliance Checks:** Simplify the initial audit process for CSRD reports, flagging potential issues like missing key performance indicators (KPIs) or structural errors.
- **AI-Powered Summary Generation:** Generate concise email summaries of CSRD report audits for sustainability teams, highlighting key findings and required actions.

## How it works:

1.  **Email Trigger:** The workflow starts when a new email arrives in a specified Gmail inbox (`Email Trigger` node).
2.  **CSRD Subject Check:** The workflow verifies if the email subject contains "CSRD Reporting" (`If` node).
3.  **Attachment Download:** The workflow extracts the attachment from the email (`Download Attachment` node).
4.  **HTML Conversion:** The workflow extracts the text data from the binary file of the attachment (`HTML from binary` node).
5.  **HTML Extraction:** The workflow extracts the HTML content from the file (`Extract the HTML` node).
6.  **Format Verification:** The workflow parses the xHTML content, and checks for common issues (`Check the format` node):
    *   Key tags like `<ix:header>`, `<ix:nonNumeric name="esrs:SustainabilityGovernance"`, and `<ix:nonNumeric name="esrs:StrategySustainability"` are present.
    *   Specific KPI tags (`esrs:GHGScope1Emissions`, `esrs:GHGScope2Emissions`, `esrs:GHGScope3Emissions`) are included.
    *   Empty `<ix:nonNumeric>` tags are identified.
    *   Duplicate text entries within `<ix:nonNumeric>` tags are detected.
7.  **AI Summary Generation:** The audit results are passed to an AI agent (`AI Agent` node) which formulates an email summary including the subject and the body, highlighting key findings (missing elements, duplicate entries, etc.). It leverages a chat model (`OpenAI Chat Model`) for text generation and a structured output parser (`Structured Output Parser`) to guarantee that the output is correctly formatted.
8.  **Email Reply:** The AI-generated summary is sent as a reply to the original email (`Reply` node).

## Services:

-   Gmail
-   OpenAI (or other LLM providers, depends on the selected Chat Model)

## Hashtags:

#n8n #automation #CSRD #ESG #AI #Reporting #Compliance