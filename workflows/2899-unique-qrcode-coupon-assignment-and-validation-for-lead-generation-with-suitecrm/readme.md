# Unique QRcode coupon assignment and validation for Lead Generation system

## Use cases:

- **Lead Generation with Coupon Incentives:** Automatically assign unique QR code coupons to new leads generated through online forms, encouraging engagement and providing a measurable incentive for conversion.
- **Offline to Online Conversion:** Use QR codes on marketing materials (e.g., flyers, posters) to drive traffic to online forms, track campaign effectiveness, and provide targeted discounts.
- **Event-Based Promotions:** Distribute unique QR code coupons at events, track redemption rates, and gather lead information for follow-up marketing efforts.

## How it works:

1.  **Form Submission:** The workflow starts when a user submits a form on a landing page. The "On form submission" node captures the data (Name, Surname, Email, Phone).
2.  **Check Duplicate:** The "Duplicate Lead?" node checks if the lead (email) already exists in Google Sheets.
3.  **Assign Unique Coupon:** If the lead is new:
    *   The "Get Coupon" node retrieves an unassigned coupon from a Google Sheet.
    *   **SuiteCRM Integration:**
        *   Authentication: "Token SuiteCRM" retrieves an access token from SuiteCRM using client credentials.
        *   Create Lead: "Create Lead SuiteCRM" creates a new lead in SuiteCRM, including the assigned coupon code.
        *   The "Update Sheet" node marks the coupon as assigned in the Google Sheet, and also writes the Lead ID
4.  **Generate QR Code:** The "Get QR" node generates a QR code using the coupon code and URL.
5.  **Send Email:** The "Send Email" node sends an email to the lead, including the generated QR code with a link to a webhook URL.
6.  **QR code usage**
    *   **Webhook trigger**: the webhook is triggered by scanning the QR code.
    *   **Check validity** the workflow checks if the coupon exists and is not used yet.
    *   **Update Lead to used**: the workflow update the lead to used coupon with API call on SuiteCRM and Google Sheet
    *   **Returns positive Feedback**: returns the "Qr valid!" string.

## Services:

-   **Google Sheets:** Used for storing lead data, managing coupon codes, and tracking coupon assignments.
-   **SuiteCRM:** Used for CRM (Customer Relationship Management).
-   **QuickChart.io:** Used for generating QR codes.
-   **SMTP:** Used to send email with coupons.

## Hashtags:

#n8n #automation #leadgeneration #CRM #coupon #qrcode
