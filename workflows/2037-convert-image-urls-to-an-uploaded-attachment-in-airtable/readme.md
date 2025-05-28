# Airtable Image Uploader

## Use cases:

- **Automated Product Image Import:** Automatically import product images from a list of URLs into an Airtable database for e-commerce or inventory management.
- **Content Curation:** Collect image URLs from various sources and automatically attach them to corresponding records in Airtable for content curation or research purposes.
- **Social Media Archiving:** Archive images from social media posts by storing the image URLs and automatically attaching them to records in an Airtable database.

## How it works:

1.  The workflow starts when you manually click "Execute Workflow".
2.  It uses the "Get all records with an image URL" Airtable node to search your specified Airtable table ("Frogs" in "N8N Image Automation" base) for records where the "Image source URL" field is not empty.
3.  For each record found, the "Update attachment field with images" Airtable node updates the attachment field ("Image attachment") with the image located at the URL in the "Image source URL" field.

## Services:

-   Airtable

## Hashtags:

#n8n #airtable #automation #imageupload #workflow
