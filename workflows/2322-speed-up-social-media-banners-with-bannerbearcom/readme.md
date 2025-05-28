# BannerBear Clone

## Use cases:
- Generate social media banners for upcoming events automatically when a form is submitted.
- Create personalized marketing materials with AI-generated images and dynamic content based on user input.
- Automate the creation of visual content for meetups, conferences, or workshops using templates and data from a form.

## How it works:

1.  The workflow starts with an **n8n Form Trigger** node that listens for form submissions containing event details like the event title, location, date, and an image prompt.
2.  The **Set Parameters** node takes the form data and assigns values to variables, including the Bannerbear template ID based on the selected template in the form.
3.  The **Generate AI Banner Image** node uses the "Image Prompt" to generate an image via the OpenAI API.
4.  The **Upload to Cloudinary** node uploads the generated image to Cloudinary CDN for hosting.
5.  The **Send to Bannerbear Template** node uses the generated image and the data to generate the social media banner.
6.  The **Download Banner** node downloads the banner image from bannerbear to prepare it to send to discord.
7.  Finally the **Discord** node posts the newly created banner to a Discord channel.

## Services:

-   n8n Forms
-   OpenAI API
-   Cloudinary
-   BannerBear
-   Discord

## Hashtags:

#n8n #automation #bannerbear #socialmedia #ai
