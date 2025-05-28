# SSL Expiry Alert

## Use cases:

- **Proactive SSL Certificate Management:**  Automatically monitor SSL certificates of critical websites and receive alerts before they expire, preventing service disruptions.
- **Compliance Monitoring:** Ensure that all websites within an organization maintain valid SSL certificates, adhering to security and compliance standards.
- **Automated Security Audits:**  Regularly check the SSL status of websites and generate reports for security audits.

## How it works:

1.  **Weekly Trigger:** The workflow starts with a "Weekly Trigger" that runs every week on Monday at 8:00 AM (Asia/Kolkata timezone).
2.  **Fetch URLs:**  It retrieves a list of URLs to monitor from a Google Sheet ("Fetch URLs" node). The Google Sheet should contain a column with the URLs to check.
3.  **Check SSL:** For each URL, the workflow uses the `ssl-checker.io` API ("Check SSL" node) to verify the SSL certificate.  It extracts the host, validity period, and remaining days until expiry.
4.  **Update Google Sheets:** Updates another Google Sheets Document ("URLs to Monitor" node) with the host and validity of the SSL certificate
5.  **Expiry Alert:**  An "If" node ("Expiry Alert") checks if the SSL certificate expires within 7 days.
6.  **Send Alert Email:** If the certificate is expiring soon, the workflow sends an email alert ("Send Alert Email" node) to `phanineeraj@quantana.com` with details like the host and the number of days remaining.

## Services:

-   Google Sheets
-   ssl-checker.io API
-   Gmail

## Hashtags:

#n8n #automation #SSLCertificate #monitoring #DevOps
