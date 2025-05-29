# AI Proposal Generator System

## Use cases:

*   **Automated Proposal Generation:** Quickly generate customized proposals for potential clients based on information gathered from a form submission.
*   **Sales Process Efficiency:** Streamline the sales process by automating the creation and sending of proposals, saving time and resources.
*   **Consistent Branding:** Ensure all proposals adhere to a consistent format and messaging by using a Google Slides template and AI-driven content generation.

## How it works:

1.  **Form Submission:** The workflow starts when a form (e.g., a sales call logging form) is submitted. This form captures essential client information, including company name, problem, proposed solution, scope, cost, and timeframe.
2.  **AI Content Generation (OpenAI):** The information from the form is sent to OpenAI. The AI uses this data, along with predefined prompts and context, to generate the content for various sections of the proposal, such as the problem summary, solution descriptions, scope details, and milestones. The output is formatted as a JSON object containing all the necessary text elements.
3.  **Google Slides Duplication (Google Drive):** A pre-designed Google Slides template is duplicated. The template likely contains placeholders for the proposal content.
4.  **Text Replacement (Google Slides):** The generated content from OpenAI is used to replace the placeholders in the duplicated Google Slides presentation. This step customizes the proposal with the client-specific information.
5.  **Email Delivery (Gmail):** Finally, an email is sent to the potential client, including a link to the newly created Google Slides proposal and additional information, such as a personalized message and an invoice notification.

## Services:

*   **Google Slides:** Used as the proposal template and for generating the final proposal document.
*   **Google Drive:** Used to duplicate the Google Slides template.
*   **OpenAI:** Used to generate the proposal content based on the form data.
*   **Gmail:** Used to send the proposal to the client via email.

## Hashtags:

#n8n #automation #AI #proposalgeneration #salesautomation
