# Tapfiliate Affiliate Management Workflow

## Use cases:

*   **Automated Affiliate Onboarding:** Automatically create and update affiliate profiles in Tapfiliate when a new user registers or meets certain criteria in another system.
*   **Affiliate Tagging:** Automatically tag new affiliates with relevant information (e.g., "n8n") for segmentation and reporting within Tapfiliate.
*   **Program Assignment:** Automatically assign affiliates to specific programs within Tapfiliate based on their profile information or other triggers.

## How it works:

1.  **Manual Trigger:** The workflow starts when the "On clicking 'execute'" node is manually triggered within n8n.
2.  **Create Affiliate (Tapfiliate):** The "Tapfiliate" node creates a new affiliate in Tapfiliate using the provided first name ("Jack"), last name ("Ryan"), and email address ("n8ndocsburner@gmail.com").
3.  **Update Affiliate Metadata (Tapfiliate1):** The "Tapfiliate1" node updates the metadata for the newly created affiliate (retrieved using an expression that pulls the ID from the previous Tapfiliate node's output). It adds a tag with the key "tag" and the value "n8n".
4.  **Assign Affiliate to Program (Tapfiliate2):** The "Tapfiliate2" node assigns the affiliate to the "testing-program-5" program within Tapfiliate.  It uses an expression to dynamically populate the affiliate ID based on the output of the "Tapfiliate" node.

## Services:

*   Tapfiliate

## Hashtags:

#n8n #automation #tapfiliate #affiliatemarketing #affiliatemanagement
