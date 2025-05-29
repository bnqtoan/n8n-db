# CallQualifiedLeadsAI

## Use cases:
- Automatically qualify leads from a Google Sheets spreadsheet by sending their data to a Voice AI platform.
- Update the qualification status of leads in Google Sheets based on the Voice AI platform's response.
- Process leads in batches to avoid overwhelming the Voice AI platform and manage API usage effectively.

## How it works:
1. **Read Leads:** Reads lead data from a specified Google Sheets spreadsheet.
2. **SplitInBatches:** Splits the leads into smaller batches for processing. This is likely done to manage API limits or improve performance.
3. **Set Variables:** Configures the necessary variables, such as API endpoints or lead information, for the Voice AI platform call. (Details on *what* variables and *how* they are configured are unavailable without further parameters)
4. **Trigger VAPI Call:** Makes an HTTP request to a Voice AI platform (VAPI) with the lead data, triggering the AI to call and qualify the lead.
5. **Update AI Call Status:** Updates the Google Sheets spreadsheet with the call status or qualification results received from the Voice AI platform.

## Services:
- Google Sheets
- Voice AI Platform (VAPI) via HTTP Request

## Hashtags:
#n8n #automation #leadqualification #voiceai #googlesheets
