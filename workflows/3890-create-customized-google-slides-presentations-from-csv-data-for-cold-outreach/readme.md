# Create Custom Presentations per Lead

## Use cases:

- **Personalized Sales Pitches:** Automatically generate customized presentations for each new lead, incorporating specific details like company name, contact person, and other relevant information. This ensures each lead receives a tailored pitch, increasing engagement and conversion rates.
- **Streamlined Lead Management:** Automatically update a lead list in Google Sheets with the presentation ID of the generated presentation. This allows sales teams to easily track which leads have received personalized presentations.
- **Efficient Onboarding Materials:** Create customized onboarding materials for new clients or customers by populating a template presentation with their specific data.

## How it works:

1.  **New Lead Detection:** The workflow starts when a new lead file (CSV or XLSX) is added to a specific folder in Google Drive ("New Leads Arrived" node using the Google Drive Trigger).
2.  **File Type Check**: Checks if file is .csv or .xlsx
3.  **Download and Extract Lead Data:** The workflow downloads the new lead file ("Download by ID" node using Google Drive) and extracts the lead data from the CSV file ("Extract Information from CSV file" node).
4.  **Create Google Sheet:** Creates a new Google Sheet to save the leads into it ("Create new Sheet" node).
5.  **Combine and Append Data:** Appends the data from the lead file to the new Google Sheet, and then append the data to the Google Sheet ("Merge Data for new Lead Document" node using Google Sheets).
6.  **Move Google Sheet to Lead List Folder:** Moves the Google Sheet to a Leads folder ("MoveToLeadListFolder" node using Google Drive).
7.  **Copy Presentation Template**: The workflow copies a presentation template for each lead ("Copy Presentation Template" node using Google Drive).  The new presentation is named after the lead's company and current date.
8.  **Customize Presentation**: Populates the copied presentation with the lead's data ("Create Custom Presentation" node using Google Slides). It replaces predefined placeholders within the template with information such as Company Name and Contact Names.
9.  **Update Lead List**: Finally, the workflow updates the lead list in the "sample_data" sheet, with the presentation ID of the newly created presentation ("Add Presentation ID to Lead List" node using Google Sheets).

## Services:

-   Google Drive
-   Google Sheets
-   Google Slides

## Hashtags:

#n8n #automation #googleworkspace #leadgeneration #customization
