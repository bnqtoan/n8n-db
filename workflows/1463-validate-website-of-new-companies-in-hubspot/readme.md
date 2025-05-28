# New Company Domain Checker and Slack Notifier

## Use cases:

- Automatically notify a Slack channel when a new company is created in HubSpot with a potentially invalid or suspicious domain.
- Alert sales or marketing teams to review new companies in HubSpot that might have domain issues, such as deliverability problems or disposable email addresses.
- Filter new HubSpot company creations based on domain validity and notify relevant teams for further investigation.

## How it works:

1.  **On new company created (HubSpot Trigger):** This workflow starts when a new company is created in HubSpot.
2.  **Get company information (HubSpot):** Retrieves detailed information about the newly created company from HubSpot using the `companyId` obtained from the trigger.
3.  **Try to load the domain (HTTP Request):** Attempts to load the company's domain using an HTTP request and retrieves the full response.
4.  **Check Result (IF):** Evaluates if the HTTP request was successful (status code 200). If the domain is not valid or the HTTP request fails, the workflow proceeds to the next step.
5.  **Post to Slack (Slack):** Sends a notification to a specified Slack channel, including the company's name, domain, and HubSpot ID, indicating a potentially suspicious domain.

## Services:

-   HubSpot
-   Slack

## Hashtags:

#n8n #automation #HubSpot #Slack #domainvalidation
