# Query List of Sign-in IPs

## Use cases:

- **Security Monitoring:** Automatically generate and email a daily report of successful login IPs, helping security teams identify unusual activity or potential breaches.
- **Compliance Reporting:** Provide a log of user login activity for auditing and compliance purposes, demonstrating adherence to security policies.
- **Troubleshooting:** Assist IT support in diagnosing login issues by providing a detailed list of IPs used by a specific user or customer.

## How it works:

1.  The workflow is triggered by a **Form**. It collects the user's name, email, and API key.
2.  The workflow uses the **Set Date and Form Variables** node to define the timeframe (last 24 hours) and store the API key and user's information.
3.  The workflow retrieves authentication event data from the SaaS Alerts API using three **HTTP Request** nodes, each querying for a specific event type: successful logins, OAuth authentications, and Office365 Shell logins. These nodes use the API key provided in the form.
4.  The results from the three API calls are combined using the **Merge** node.
5.  The **Filter IP Information** node selects specific fields (customer name, user full name, IP address, location details) from the combined data.
6.  The **Remove Duplicate IPs** node removes duplicate IP addresses from the filtered data.
7.  The **Convert to CSV** node converts the data into a CSV file.
8.  The **Convert CSV to Base64** node converts the CSV file to Base64 encoding.
9.  Finally, the **Send Email Upon Completion (SMTP2Go)** node sends an email containing the CSV file as an attachment to the user who submitted the form, using the SMTP2Go service.

## Services:

-   SaaS Alerts API: Used to retrieve authentication event data.
-   SMTP2Go: Used to send the email with the generated CSV file.

## Hashtags:

#n8n #automation #security #API #reporting
