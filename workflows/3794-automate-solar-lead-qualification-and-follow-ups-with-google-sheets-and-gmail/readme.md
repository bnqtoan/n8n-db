# Solar Lead Qualification

## Use cases:

- **Automated Lead Capture and Qualification:** Automatically capture leads from a web form, process their utility bills, and save their information to a spreadsheet for further sales actions.
- **Streamlined Qualification Process:** Automatically evaluates leads based on predefined qualification criteria and updates the lead status in real-time.
- **Instant Lead Response:** Automatically send tailored emails to potential customers based on whether they qualify for solar panel installation, improving customer engagement.

## How it works:

1. **Receive Form Submission:** The workflow begins when a potential customer submits a form. ([STEP 1] Receive Form Submission node using a webhook).
2. **Upload Utility Bill:** The utility bill provided in the form is uploaded to Google Drive ([STEP 2] Upload Utility Bill node).
3. **Make Bill Viewable:** The Google Drive file is made viewable to retrieve its link ([STEP 3] Make Bill Viewable node).
4. **Create Bill Link:** A function node creates a link to the uploaded utility bill ([STEP 4] Create Bill Link).
5. **Save Lead to Spreadsheet:** The lead data, including the bill link, is saved to a Google Sheet ([STEP 5] Save Lead to Spreadsheet).
6. **Detect New Leads:** A Google Sheets trigger detects new leads added to the spreadsheet ([STEP 6] Detect New Leads).
7. **Check Qualification Criteria:** The workflow checks if a lead meets the predefined qualification criteria using a code node ([STEP 7] Check Qualification Criteria).
8. **Update Qualification Status:** The qualification status is updated in the Google Sheet ([STEP 8] Update Qualification Status).
9. **Check Qualification Status:** An If node checks the lead qualification status ([STEP 9] Check Qualification Status).
10. **Send Acceptance/Rejection Email:** Based on the qualification status, an email is sent to the lead, either accepting them or rejecting them. ([STEP 10A] Send Acceptance Email and [STEP 10B] Send Rejection Email using Gmail).

## Services:

- Google Drive
- Google Sheets
- Gmail

## Hashtags:

#n8n #automation #solar #leadgeneration #googlesheets
