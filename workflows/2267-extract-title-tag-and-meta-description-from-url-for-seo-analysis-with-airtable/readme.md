# SEO Meta Data Updater

## Use cases:

- **Automatically update missing SEO meta data:** Populates missing title tags and meta descriptions in an Airtable database by extracting them from the corresponding URLs.
- **SEO Audit Automation:** Periodically check a list of URLs for missing or outdated meta data and update them accordingly.
- **Content Migration Enhancement:** When migrating content to a new platform, automatically extract meta data from the original URLs and populate the new system.

## How it works:

1.  **Trigger:** The workflow starts when you manually click "Test workflow".
2.  **Get Records from Airtable:** Retrieves records from an Airtable base and table where the "title tag" and "meta desc" fields are empty and the "url" field is not empty.
3.  **Get URL Content:** For each record, fetches the HTML content of the URL specified in the "url" field.
4.  **Extract Title Tag and Meta Description:** Extracts the content of the `<title>` tag and the `content` attribute of the `<meta name="description">` tag from the HTML content.
5.  **Update Original Record in Airtable:** Updates the original Airtable record with the extracted "title tag" and "meta desc" values.

## Services:

-   Airtable
-   HTTP Request

## Hashtags:

#n8n #automation #SEO #Airtable #metadata
