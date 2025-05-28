# Google Slides Thumbnail Extractor

## Use cases:

- **Content Management:** Automatically extract thumbnails from Google Slides presentations for use in a content management system or website, providing visual previews of your slides.
- **Educational Material Generation:** Generate thumbnails of slides for educational platforms, online courses, or study guides, making it easier for students to navigate and review content.
- **Presentation Archiving:** Create a visual archive of your Google Slides presentations by extracting and storing thumbnails of each slide.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually execute it within n8n.
2.  **Get Slides:** The "Google Slides" node retrieves all slides from a specified Google Slides presentation using its ID.
3.  **Get Thumbnail:** The "Google Slides1" node iterates through each slide and downloads its thumbnail image. The presentation ID is dynamically retrieved from the previous node, and the page object ID is used to identify the slide.

## Services:

-   Google Slides API

## Hashtags:

#n8n #GoogleSlides #Automation #Thumbnail #Workflow
