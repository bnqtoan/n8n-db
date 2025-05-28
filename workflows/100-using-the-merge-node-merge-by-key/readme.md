# n8n Workflow Readme

## Use cases:

*   **Matching Interview Data with Employee Records:** This workflow can be used to automatically enrich interview data with corresponding employee information from a directory or database, based on a shared identifier like an employee ID. This would allow cross-referencing candidate feedback with employee profiles.
*   **HR Data Integration:** Integrating data about scheduled interviews (pointer, panel, subject) with personnel records (name, job title, department) is useful for reporting and analysis related to the hiring process.
*   **Onboarding Automation:** Automatically pre-populate employee profiles with details gathered during the interview process to streamline onboarding.

## How it works:

The workflow combines two sets of data using a common identifier. Here's a step-by-step breakdown:

1.  **Data 1 & Data 2 (Function Nodes):** These nodes define the two datasets to be merged. Data 1 contains information about interviews, including interviewer details and scheduled time, while Data 2 contains employee records with fields like name, job title, and contact information.  These nodes simulate fetching data from two different sources.
2.  **Convert Data 1 & Convert Data 2 (Function Nodes):** These nodes transform the structure of the data from the initial function nodes into a format suitable for the Merge node. Each record is wrapped inside a `{ json: ... }` structure.
3.  **Merge (Merge Node):** The Merge node combines the two datasets based on a key. The "Merge by Key" mode is used with `"interviewers[0].id"` from Data 1 and `"fields.eid"` from Data 2 as the keys. The first interviewer id is taken from data 1.  This assumes there will always be at least one interviewer and that the first one is the right one.

## Services:

This workflow simulates data that *could* come from the following services, but doesn't *actually* connect to them. If this was a real workflow, it would connect to the services, which would be:

*   **HR Database/System:** (Potentially simulated by the `Data 2` node).
*   **Interview Scheduling Platform:** (Potentially simulated by the `Data 1` node).
*   **Employee Directory (e.g., Active Directory, Google Workspace):** (Potentially simulated by the `Data 2` node).

## Hashtags:

#n8n #automation #HR #dataIntegration #workflow
