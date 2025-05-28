# Webinar Registration Automation with JotForm and KlickTipp

## Use cases:

- **Automated Webinar Subscriber Management:** Automatically add new webinar registrants from JotForm to KlickTipp, ensuring all relevant contact information and webinar details are captured.
- **Dynamic Tagging for Personalized Communication:** Dynamically tag webinar registrants in KlickTipp based on their selections and preferences in the JotForm, enabling highly targeted email campaigns and follow-ups.
- **Streamlined Lead Generation and Nurturing:** Capture leads from webinar registrations, automatically add them to your KlickTipp contact list, and trigger automated email sequences to nurture them, leading to increased engagement and conversion.

## How it works:

1.  **JotForm Trigger:** The workflow starts when a new submission is received in the specified JotForm.
2.  **Data Conversion and Setting:** The "Convert and set webinar data" node transforms the data received from JotForm to ensure it is correctly formatted for KlickTipp. This includes converting the phone number, birthday to UNIX timestamp, validating the LinkedIn URL, multiplying the work experience and adding the webinar start date and time.
3.  **Add or Update Subscriber in KlickTipp:** The "Subscribe contact in KlickTipp" node adds the new contact to KlickTipp or updates their existing profile with the information from JotForm.
4.  **Define Array of Tags from JotForm:** This node creates an array of dynamic tags based on the webinar selection, date, and reminder interval chosen by the registrant in the JotForm.
5.  **Split Out JotForm Tags:** The array of tags is split into individual items for further processing.
6.  **Get List of All Existing Tags:** Fetches a list of all tags already existing in KlickTipp.
7.  **Merge JotForm Tags with Existing KlickTipp Tags:** This node merges the tags fetched from the JotForm submission with the existing tags from KlickTipp, to identify if the tag already exists.
8.  **Tag Creation Check:** This node checks if the tag already exists in KlickTipp and branches the workflow.
9.  **If Tag exists:** The "Aggregate tags to add to contact" node aggregates all IDs of the existing tags to a list.
10. **If Tag doesn't exist:** The "Create the tag in KlickTipp" node creates a new tag in KlickTipp with the name extracted from the JotForm submission. Then the "Aggregate array of created tags" node aggregates all IDs of the newly created tags to a list.
11. **Tag Contact Directly in KlickTipp:** This node applies the corresponding tags in KlickTipp.

## Services:

-   JotForm
-   KlickTipp

## Hashtags:

#n8n #automation #workflow #JotForm #KlickTipp #webinar
