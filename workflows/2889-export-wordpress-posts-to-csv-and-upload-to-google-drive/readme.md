# Export WordPress Posts to CSV and Upload to Google Drive

## Use cases:

- **Backup WordPress Content:** Regularly export your WordPress posts to a CSV file and store them in Google Drive as a backup.
- **Content Migration:** Export posts from one WordPress site to CSV, making it easier to import into another platform or manipulate for migration purposes.
- **Reporting and Analysis:** Extract specific post data (ID, Title, Link, Content) for reporting or analysis in spreadsheet software.

## How it works:

1.  **Trigger:** The workflow is initiated manually using the "When clicking ‘Test workflow’" node.
2.  **Get WordPress Posts:** The "Get Wordpress Posts" node fetches all published posts from your WordPress site using the provided credentials. It retrieves post details like ID, title, link, and content.
3.  **Adjust Fields:** The "Adjust Fields" node refines the data from each post, selecting only the 'id', 'title', 'link', and 'content.rendered' fields and assigning them to new properties with the same name.
4.  **Convert to CSV File:** The "Convert to CSV File" node transforms the structured post data into a CSV file format.
5.  **Upload to Google Drive:** The "Upload to Google Drive" node uploads the generated CSV file to a specified folder (root by default) in your Google Drive using a service account. The file is named "Wordpress-Posts.csv".

## Services:

-   WordPress
-   Google Drive

## Hashtags:

#n8n #automation #wordpress #googledrive #csv
