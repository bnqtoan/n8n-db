# Typeform KlickTipp Integration

## Use cases:

- **Automated Lead Capture and Segmentation:** Automatically capture leads from Typeform quizzes and segment them in KlickTipp based on their quiz responses.
- **Personalized Marketing Campaigns:** Trigger personalized marketing campaigns in KlickTipp based on quiz answers, ensuring relevant content for each subscriber.
- **Efficient Contact Management:** Streamline contact management by automatically adding new quiz respondents to KlickTipp and tagging them based on their interests and characteristics.

## How it works:

1.  **Typeform Trigger:** The workflow starts when a new quiz is submitted via Typeform.
2.  **Convert and Set Quiz Data:** The data from Typeform is transformed and formatted to match KlickTipp's requirements. Specifically, phone numbers are converted to a numeric-only format, and dates are converted to UNIX timestamps.
3.  **Subscribe contact in KlickTipp:** Adds the contact to KlickTipp using the transformed quiz data.
4.  **Define Array of tags from Typeform:** Extracts answers from specific questions in Typeform and creates an array of tags based on these answers.
5.  **Split Out Typeform tags:** Split the created array again into items so we can merge them with the existing tags we request from KlickTipp.
6.  **Get list of all existing tags:** Fetches all tags that already exist in KlickTipp.
7.  **Merge:** Combines tags from Typeform with existing KlickTipp tags to identify new tags that need to be created.
8.  **Tag creation check:** The result of the tag comparison and branches the workflow accordingly in order to directly tag the contact or to create the tag first and to then follow through with the tagging.
9.  **Create the tag in KlickTipp:** Creates a new tag in KlickTipp if it does not already exist.
10. **Aggregate tags to add to contact:** Aggregates all IDs of the existing tags to a list.
11. **Tag contact directly in KlickTipp:** Applies existing tags to a subscriber in KlickTipp.
12. **Aggregate array of created tags:** Aggregates all IDs of the newly created tags to a list.
13. **Tag contact KlickTipp after trag creation:** Associates a specific tag with a subscriber in KlickTipp using their email address.

## Services:

-   Typeform
-   KlickTipp

## Hashtags:

#n8n #automation #Typeform #KlickTipp #leadgeneration
