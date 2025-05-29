# Extract person data and calculate ICP

## Use cases:

- **Lead Qualification:** Automatically enrich lead data with LinkedIn information and calculate an ICP score to prioritize high-potential leads.
- **Contact Research:** Quickly gather comprehensive professional details about individuals for targeted outreach and personalized communication.
- **Data Augmentation:** Enhance existing customer or prospect data with up-to-date LinkedIn profiles and ICP scores for improved segmentation and analysis.

## How it works:

1.  **Trigger:** The workflow starts either via a web form submission ("On form submission" node) or when executed by another workflow ("When Executed by Another Workflow" node). Both options require "Person Name", "Work Email", and an "Airtop Profile (connected to LinkedIn)" as input.
2.  **Unify Parameters:** The "Unify Parameters" node standardizes the input parameters, whether from the form or another workflow.
3.  **Is corporate email?:** This filter node checks if the provided work email is a corporate email, filtering out common free email domains (gmail.com, qq.com, hotmail, etc.).
4.  **Find Person Linkedin URL:** The workflow uses the provided name, email, and Airtop profile to find the person's LinkedIn profile URL. It utilizes another workflow ("AIRTOP — LinkedIn Profile Discovery w Verification") to perform this task.
5.  **Is valid Linkedin URL?:** The filter node "Is valid Linkedin URL?" checks if a valid Linkedin URL was returned in the previous step
6.  **Extract Person Data:** If a valid Linkedin URL was found, then information from this Linkedin Profile is extracted by calling the workflow "AIRTOP — Extract LinkedIn Profile Information"
7.  **ICP Scoring:** Using the same Linkedin URL, an ICP score is calculated using the "AIRTOP — Person ICP Scoring with Linkedin" Workflow.
8.  **Merge:** The "Merge" node combines the extracted person data and the ICP score into a single output.

## Services:

-   **Airtop:** Used for LinkedIn profile discovery, data extraction, and ICP scoring. (Requires an Airtop Profile connected to LinkedIn)

## Hashtags:

#n8n #automation #linkedin #leadgeneration #icp
