# Search LinkedIn companies and add them to Airtable CRM

## Use cases:

- Automatically build a CRM database of potential leads from LinkedIn, focusing on companies that meet specific criteria like industry, size, and follower count.
- Enrich an existing CRM with detailed company information (website, tagline, description) gathered from LinkedIn profiles using Ghost Genius API.
- Identify and add new, relevant companies to a CRM while avoiding duplicates, ensuring data accuracy and efficiency in lead generation efforts.

## How it works:

1.  **Manual Trigger:** The workflow starts when you manually trigger it via the "When clicking ‘Test workflow’" node.
2.  **Set Variables:** You define the target company criteria (e.g., "Growth Marketing Agency", company size "11-50 employees", and location) using the "Set Variables" node. This allows you to customize your LinkedIn search.
3.  **Search Companies:** The "Search Companies" node uses the Ghost Genius API to search LinkedIn for companies matching the defined criteria.  It handles pagination to retrieve multiple pages of results with a 2-second delay between requests.
4.  **Extract Company Data:** The "Extract Company Data" node splits the returned data into individual company entries for further processing.
5.  **Process Each Company:** This node splits the data into individual items to be processed.
6.  **Get Company Info:**  For each company, the "Get Company Info" node uses the Ghost Genius API to retrieve detailed information based on the company's LinkedIn URL.
7.  **Filter Valid Companies:** The "Filter Valid Companies" node checks if the company meets certain criteria: the `website` field is not empty and the follower count is greater than 200.
8.  **Check If Company Exists:** Before adding a company to the CRM, the "Check If Company Exists" node searches the Airtable CRM to see if a record with the same LinkedIn ID already exists.
9.  **Is New Company?:** Condition to check whether a company is new
10. **Add Company to CRM:** If the company is new (doesn't exist in Airtable), the "Add Company to CRM" node adds a new record to the Airtable CRM with the company's name, website, LinkedIn URL, tagline, description, and a predefined category ("Growth Marketing Agency 11-50 🌍") and country ("🇺🇸 United States").

## Services:

-   **Ghost Genius API:** Used to search for companies on LinkedIn and retrieve detailed company information.
-   **Airtable:** Used as a CRM to store and manage the company data.

## Hashtags:

#n8n #automation #CRM #LinkedIn #Airtable
