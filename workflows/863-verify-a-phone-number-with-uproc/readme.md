# Verify phone numbers

## Use cases:

*   **Lead Validation:** Automatically verify phone numbers collected from lead generation forms to ensure accuracy and prevent invalid entries in your CRM.
*   **Customer Data Cleaning:** Validate existing phone numbers in your database to identify and correct errors, improving the reliability of your customer communication channels.
*   **SMS Marketing Compliance:** Ensure phone numbers are valid before sending SMS messages, reducing wasted sends and improving campaign performance.

## How it works:

The workflow starts with a manual trigger. When executed:

1.  The "Create Phone Item" node creates a JSON item containing a phone number (hardcoded as +34605281220 in this example).
2.  The "Parse and Validate Phone" node uses the Uproc API to parse and validate the phone number from the previous node. The phone number is passed to the Uproc tool.
3.  The "Phone is Valid?" node checks the `valid` field in the JSON response from the Uproc API. If the phone number is valid (i.e., the `valid` field is "true"), the workflow proceeds down the "true" branch; otherwise, it goes down the "false" branch (although no further actions are defined in the JSON for either branch).

## Services:

*   **Uproc API:** Used for parsing and validating phone numbers.

## Hashtags:

#n8n #automation #phonevalidation #uproc #datacleaning
