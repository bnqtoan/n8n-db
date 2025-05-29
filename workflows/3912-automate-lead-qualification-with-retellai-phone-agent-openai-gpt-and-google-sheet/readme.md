# Build a Phone Agent to qualify outbound leads and inbound calls with RetellAI -vide

## Use cases:

- **Automated Lead Qualification:** Automatically call new leads added to a Google Sheet and qualify them based on a RetellAI phone conversation.
- **Inbound Call Appointment Scheduling:** Receive inbound calls via RetellAI, check if the caller exists in a Google Sheet, and schedule appointments based on the conversation.
- **Post-Call Analysis and Reporting:** Analyze call transcripts using OpenAI, update lead records in Google Sheets with qualification data, and send email summaries to relevant personnel.

## How it works:

This workflow automates lead qualification and appointment scheduling using RetellAI and integrates it with Google Sheets, Twilio (for SMS), OpenAI, and Gmail. It's divided into outbound and inbound call handling:

**Outbound Call Workflow:**
1. **Detect new lead in Google Sheets:** Triggers when a new lead is added to a specified Google Sheet.
2. **Send SMS reminder to call lead in 5 minutes:** Sends an SMS reminder to the sales rep to call the lead shortly using Twilio.
3. **Wait 5 minutes before making call:** Pauses the workflow for 5 minutes to allow the sales rep time to prepare.
4. **Call new lead using RetellAI:** Initiates an automated phone call to the lead using the RetellAI API.

**Inbound Call Workflow:**
1. **Receive inbound call from RetellAI (webhook):** Listens for inbound calls to a RetellAI phone number.
2. **Check if phone number exists in Google Sheets:** Checks if the inbound caller's phone number exists in the Google Sheet.
3. **Send response to inbound webhook call:** Sends a response back to the RetellAI webhook, potentially including dynamic variables from the Google Sheet (if the number exists).

**Post-Call Workflow:**
1. **Receive post-call data from RetellAI (webhook):** Receives data from RetellAI after the call has ended.
2. **Filter for analyzed calls only:** Filters the data to only process events where the call has been analyzed.
3. **Check if call was outbound:** Determines if the call was outbound or inbound.
   - **If Outbound:**
      - **Update lead record in Google Sheets:** Updates the corresponding lead record in the Google Sheet with qualification information from the RetellAI call analysis.
      - **Send call summary email:** Sends an email summary of the call to a specified email address using Gmail.
   - **If Inbound:**
      - **Generate call summary with OpenAI:** Creates a summary of call and improvement suggestions for the prompt.
      - **Send confirmation email to lead:** Sends a confirmation email to a specified email address using Gmail.

## Services:

- **RetellAI:** For automated phone calls and call analysis.
- **Google Sheets:** For storing and managing lead data.
- **Twilio:** For sending SMS messages.
- **OpenAI:** For generating call summaries and prompt improvement ideas.
- **Gmail:** For sending email notifications and summaries.

## Hashtags:

#n8n #automation #leadqualification #retellai #inboundcalls
