# Passport Photo Validator

## Use cases:

- **Automated Passport Photo Validation:** Automatically check if user-submitted photos meet passport requirements, reducing manual review time for passport agencies or application services.
- **Photo Booth Integration:** Integrate with photo booths to provide real-time feedback on photo suitability, ensuring users get compliant photos on the spot.
- **Online Application Assistance:** Help users validate their passport photos before submitting online applications, minimizing rejection rates and improving user experience.

## How it works:

1.  **Trigger:** The workflow is initiated manually via the "When clicking ‘Test workflow’" node.
2.  **Photo URLs:** A list of portrait URLs is defined in the "Photo URLs" node.  These URLs point to images stored in Google Drive.
3.  **Split Photo URLs:** The "Photos To List" node splits the array of photo URLs into individual items.
4.  **Download Photos:**  The "Download Photos" node downloads each photo from Google Drive using the provided URL.
5.  **Resize For AI:** The "Resize For AI" node resizes the image to 1024x1024 if it's larger than this dimension, ensuring a consistent input size for the AI model.
6.  **AI Validation:** The "Passport Photo Validator" node uses a Langchain Chain LLM to assess if the image meets UK government passport photo criteria. It uses Google Gemini Chat Model to validate the image.
7.  **Structure Output:** The "Structured Output Parser" node takes the AI's response and structures it into a JSON format with fields for `is_valid`, `photo_description`, and `reasons`. This makes the AI's assessment easily usable in subsequent steps.

## Services:

-   **Google Drive:** Used to store and retrieve the sample passport photos.
-   **Google Gemini Chat Model:** AI model to analyze and validate the photos against passport criteria.

## Hashtags:

#n8n #automation #workflow #passportphoto #AI #VisionModel #GoogleGemini
