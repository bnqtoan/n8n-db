# Raw Materials Inventory Management with Google Sheets and Supabase using n8n Webhooks

## Use cases:
- Automate inventory updates when new raw materials are received, ensuring stock levels are always accurate.
- Streamline the material request and approval process, reducing delays and improving resource allocation.
- Automatically notify stock managers when material levels fall below predefined thresholds, preventing shortages.

## How it works:
The workflow consists of two main flows:
1.  **Raw Materials Receiving and Stock Update:**
    -   A webhook (`Receive Raw Materials Webhook`) receives data when new raw materials are received (e.g., from a form submission).
    -   The data is standardized (`Standardize Raw Material Data`) and the total price is calculated (`Calculate Total Price`).
    -   The received materials are added to a Google Sheet (`Append Raw Materials`).
    -   The workflow checks if the product already exists in the stock (`Lookup Existing Stock`).
    -   If the product exists, the current stock is updated in Google Sheets (`Update Current Stock`). If it doesn't exist, a new row is created (`Initialize New Product stock`).
    -   The workflow updates the Supabase database tables with the new raw materials details.
    -   A low stock detection code (`Low stock Detection2`) checks the current stock level, and if it's below the minimum, a low stock alert email is sent (`Send Low Stock Email Alert`).

2.  **Material Issue Request and Approval:**
    -   A webhook (`Receive Issue Request`) receives material issue requests.
    -   The request data is standardized (`Standardize Data`) and validated.
    -   The workflow adds the request to a "Materials Issued" Google Sheet (`Append Material Request`) and Supabase table.
    -   The workflow verifies the existing stock for issue (`Check Available Stock for Issue`) and prepares data for approval.
    -   An approval request is sent via Gmail (`Send Approval Request`) with Approve/Reject buttons.
    -   Upon approval/rejection (captured by `Get Approvals` webhook), the workflow updates the "Materials Issued" sheet with the status and adjusts the stock level in Google Sheets (`Update Stock After Issue`) and Supabase.

## Services:
-   Google Sheets
-   Supabase
-   Gmail

## Hashtags:
#n8n #automation #inventorymanagement #googleSheets #Supabase
