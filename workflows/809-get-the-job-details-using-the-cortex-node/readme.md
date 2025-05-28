# Analyze a URL and get the job details using the Cortex node

## Use cases:

- **URL Reputation Analysis:** Automatically analyze URLs submitted through a form or other input methods to determine their reputation and potential threats using Cortex analyzers. This helps in identifying malicious websites and preventing users from accessing them.
- **Automated Security Alerting:** Integrate this workflow with security monitoring tools to automatically analyze suspicious URLs and trigger alerts if threats are detected. This can expedite incident response and enhance security posture.
- **Phishing Detection:** Use the workflow to analyze URLs found in emails or messages for phishing indicators, helping to protect users from phishing attacks.

## How it works:

1. **Manual Trigger:** The workflow starts when manually executed within n8n, simulating an event that requires URL analysis.
2. **Cortex - Job Creation:** The "Cortex" node takes a URL (`https://n8n.io` in this example) and sends it to a Cortex analyzer ("Abuse_Finder_3_0" in this example) to perform an analysis. The URL is submitted as an observable, and the node retrieves the Job ID of the newly created analysis job.
3. **Cortex - Job Result Retrieval:** The "Cortex1" node uses the Job ID obtained from the previous node to retrieve the results of the analysis job from Cortex.  This provides detailed information about the URL's reputation and any detected threats.

## Services:

- **Cortex:** This workflow uses TheHive Project's Cortex, a powerful observable analysis and threat intelligence platform.

## Hashtags:

#n8n #automation #Cortex #security #URLanalysis
