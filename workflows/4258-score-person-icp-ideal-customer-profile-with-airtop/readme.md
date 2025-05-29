# Person ICP Scoring with Linkedin

## Use cases:

- **Lead Qualification:** Automatically score LinkedIn profiles of potential leads to prioritize outreach efforts based on their alignment with the Ideal Customer Profile (ICP).
- **Market Research:** Analyze LinkedIn profiles of individuals in a specific target market to understand their interests, seniority, and technical depth.
- **Talent Acquisition:** Evaluate candidates' LinkedIn profiles to assess their suitability for specific roles based on their AI interest, technical skills, and seniority level.

## How it works:

The workflow automates the process of extracting information from a LinkedIn profile, assessing specific criteria, and calculating an ICP score.

1.  **Trigger:** The workflow starts either upon form submission (using the "On form submission" trigger, using the Linkedin URL and Airtop Profile) or when executed by another workflow (using the "When Executed by Another Workflow" trigger), both requiring a LinkedIn profile URL and an Airtop profile connected to LinkedIn as input.
2.  **Parameter Assignment:** The "Parameters" node assigns the input values from the trigger to variables (`Linkedi_URL` and `Airtop_profile`) to be used in subsequent nodes.
3.  **Airtop Profile Data Extraction and Scoring:** The "Calculate ICP PersonScoring" node uses the Airtop API to extract information from the provided LinkedIn profile, such as full name, job title, employer, location, number of connections, "About" section text, and more. It then evaluates the profile based on AI interest, seniority level, and technical depth, assigning points according to a predefined scoring system. The final ICP score is calculated by summing up the points.
4.  **Output Formatting:** The "Edit Fields" node formats the output, extracting the model response data.

## Services:

-   **LinkedIn:** The workflow extracts data from LinkedIn profiles.
-   **Airtop:** The workflow utilizes Airtop to interact with LinkedIn, extract data, and perform the ICP scoring based on a prompt.

## Hashtags:

#n8n #automation #linkedin #icp #leadgeneration
