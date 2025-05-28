# Analyze Crowdstrike Detections, Search for IOCs in VirusTotal, Create a Ticket in Jira and Post a Message in Slack

## Use cases:

- **Automated Incident Response:** Automatically create Jira tickets for new CrowdStrike detections, ensuring timely investigation and resolution of security incidents.
- **Threat Intelligence Enrichment:** Enhance CrowdStrike detection data with VirusTotal information to gain a deeper understanding of potential threats and prioritize responses.
- **Real-time Security Team Notification:** Alert the security team via Slack about new CrowdStrike detections, ensuring immediate awareness of potential security breaches.

## How it works:

1.  **Schedule Trigger:** The workflow starts on a defined schedule (e.g., daily) using the "Schedule Trigger" node.
2.  **Get recent detections from Crowdstrike:** Fetch the detections from crowdstrike using a HTTP request node, querying the Crowdstrike API, by using the “CrowdStrikeOAuth2Api” credential.
3.  **Split out detections:** Split the array of detections into individual items by using the “Split out detections” node.
4.  **Get detection details:** Get the full detection details using the “Get detection details” node, querying the Crowdstrike API, by using the “CrowdStrikeOAuth2Api” credential.
5.  **Split In Batches:** Divide the detections into batches of one using the "Split In Batches" node to process each detection individually.
6.  **Split out behaviours:** Extract the individual behaviours associated with the detection.
7.  **Pause 1 second:** Delay the execution for one second, using the wait node, to avoid overloading the VirusTotal API.
8.  **Look up SHA in Virustotal:** Query VirusTotal for information about the SHA256 hash of the file associated with the behaviour, using the “virusTotalApi” credential.
9.  **Look up IOC in Virustotal:** Query VirusTotal for information about the Indicator of Compromise (IOC) linked to the behaviour, using the “virusTotalApi” credential.
10. **Set behaviour descriptions:**  Enrich the behaviour descriptions with links to Crowdstrike and VirusTotal, confidence scores, filenames, usernames, VT tags, IOC scores, and IOC sources, using the set node.
11. **Merge behaviour descriptions:** Concatenate the behavior descriptions into a single string.
12. **Create Jira issue:** Create a Jira ticket with details from CrowdStrike and VirusTotal for each detection, using the “jiraSoftwareCloudApi” credential.
13. **Post notification on Slack:** Send a Slack notification to a specified user (david) with a summary of the detection and a link to the newly created Jira ticket, using the “slackOAuth2Api” credential.
14. **Iterate Through Detection Events:** The "`Split In Batches`" node is configured with a batch size of one, ensuring that the array of detections from CrowdStrike is divided into individual items for processing.
15. **Further Dissection of Detections:** the "`Split out behaviours`" node further dissects each detection to extract and separately handle the array of behaviors associated with them.

## Services:

- CrowdStrike
- VirusTotal
- Jira
- Slack

## Hashtags:

#n8n #automation #security #crowdstrike #virustotal #jira #slack #secops
