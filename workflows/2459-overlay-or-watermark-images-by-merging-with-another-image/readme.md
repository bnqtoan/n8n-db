# Image Watermark Workflow

## Use cases:

- **Automated Watermarking:** Automatically add a logo or watermark to images for branding or copyright protection.
- **Profile Picture Creation:** Generate profile pictures with a consistent overlay, such as a frame or badge, for all users.
- **Promotional Material Generation:** Create promotional images by overlaying product photos with discount codes or promotional messages.

## How it works:

1.  The workflow starts with a manual trigger ("When clicking "Test workflow"") to initiate the image processing.
2.  It fetches two images from URLs: one for the background ("Get the Image for Background") and one for the overlay or logo ("Get Logo for the Watermark").
3.  Metadata (size, dimensions) is extracted from both images ("Get Meta BG", "Get Meta Top") using the "Edit Image" node in information mode.
4.  The workflow renames the binary data of the images to `bg` and `top` and merges both images in one item using the "Rename Image Binary Background Image" and "Rename Image Binary Top Image" and the "Wait for both Images and merge Binary in one Item" node.
5.  A "Code" node ("Calculate Center") calculates the center position for the overlay image based on the dimensions of both images, ensuring it's placed in the middle.
6.  Finally, the "Edit Image" node in composite mode ("Let "top" overlay "bg"") overlays the logo onto the background image, using the calculated center position. The resulting watermarked image is then available in the `bg` binary property.

## Services:

-   [let the workf low](https://let-the-work-flow.com) (hosting images)

## Hashtags:

#n8n #automation #imagewatermark #imageprocessing #workflow
