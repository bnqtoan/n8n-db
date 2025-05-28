# Slack Webhook - Verify Signature

## Use cases:
- **Enhanced Security:** Verify the authenticity of incoming webhooks from Slack to prevent malicious attacks or unauthorized data manipulation.
- **Data Integrity:** Ensure that data received from Slack is genuine and hasn't been tampered with during transmission.
- **Automated Workflows:** Implement secure automated processes triggered by Slack events, guaranteeing that only verified requests are processed.

## How it works:
1. **Trigger:** The workflow starts when a Slack Webhook sends a request to the "Execute Workflow Trigger" node.
2. **Extract Signature Details:** The "Make Slack Verif Token" code node extracts the timestamp, request body, and signature from the request headers. It then constructs the `sigBaseString` according to Slack's signing secret standards.
3. **Encode Secret String:** The "Encode Secret String" node takes the `sigBaseString` from the previous node and calculates an HMAC-SHA256 hash using your Slack Signing Secret as the key.  This produces a candidate signature.  **Important:** You must provide your Slack Signing Secret in this node.
4. **Verify Signature:** The "IF" node compares the signature received from Slack with the newly generated signature.
5. **Handle Outcome:**
   - **Signature Verified:** If the signatures match, the "Set Verified to True" node sets the `signature_verified` field to `true`. Then "Merge" node combines the output with the original webhook data.
   - **Signature Verification Failed:** If the signatures don't match, the "Stop and Error" node halts the workflow and returns an error message, indicating a potential security issue.

## Services:
- Slack API

## Hashtags:
#n8n #Slack #Webhook #Security #Automation
