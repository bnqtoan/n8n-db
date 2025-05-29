# My Sub-Workflow 3

## Use cases:

- **Keyword Research Automation:** Automates the process of gathering keyword suggestions, related keywords, autocomplete suggestions, subtopics, and SERP data from various sources to build a comprehensive keyword list.
- **Content Optimization:** Helps in identifying relevant subtopics and "People Also Ask" (PAA) questions to create content that addresses user queries and improves search engine ranking.
- **SEO Analysis:** Streamlines the collection of search engine results page (SERP) data for keyword analysis, competitor research, and SEO strategy development.

## How it works:

1.  **Trigger:** The workflow starts when the "When clicking ‘Test workflow’" node is manually triggered.
2.  **Initial Setup:**
    -   It interacts with Google Sheets ("Google Sheets KW Research Template") and Google Drive ("Google Drive Create KW Folder", "Google Drive Copy KW Template") to set up a research template and folder structure.
    -   The main fields for the keyword research are set using the "Set Main Fields" node, with the data flow from Google drive
3.  **Data Collection:**
    -   Multiple "HTTP Request" nodes ("HTTP Related Keywords", "HTTP Keyword Suggestions", "HTTP Keyword Ideas", "HTTP Autocomplete", "HTTP Subtopics", "HTTP SERPs") send requests to external services to fetch keyword data like related keywords, suggestions, ideas, autocomplete options, subtopics, and SERP results.
4.  **Data Processing:**
    -   The data from the "HTTP Request" nodes are split using "Split Out" nodes ("Split Out Related KWs", "Split Out KW Suggestions", "Split Out KW Ideas", "Split Out Autocomplete", "Split Out Subtopics", "Split Out SERPs and PAA").
    -   "Set" nodes ("Set Related KW Fields", "Set KW Suggestion Fields", "Set KW Ideas Fields", "Set Autocomplete Fields", "Set Subtopics Fields", "Set SERP Fields", "Set PAA Fields") transform and structure the data.
    -   "Filter" nodes ("Filter SERPs", "Filter PAA") filter the SERP and PAA data based on specified criteria.
5.  **Data Storage:**
    -   The processed data is added to different Google Sheets using "Google Sheets" nodes:
        -   "Add Related KWs to Related KWs Sheet": Adds related keywords to a specific sheet.
        -   "Add KWs to Keyword Suggestions Sheet": Adds keyword suggestions to a specific sheet.
        -   "Add KWs to Keyword Ideas Sheet": Adds keyword ideas to a specific sheet.
        -   "Add Autocomplete to Autocomplete Sheet": Adds autocomplete suggestions to a specific sheet.
        -   "Add Subtopics to Subtopics Sheet": Adds subtopics to a specific sheet.
        -   "Add SERPs to SERP Sheet": Adds SERP data to a specific sheet.
        -   "Add PAA to PAA Sheet": Adds PAA data to a specific sheet.
    -   Data is also added to master sheets for comprehensive keyword analysis:
        -   "Add Related KWs to Master all KW Variations Sheet"
        -   "Add KWs to Master All KW Sheet"
        -   "Add KWs to Master All KW Sheet1"
        -   "Add Subtopics to Master KWs Sheet"
        -   "Add Subtopics to Master KW sheet"
        -   "Add PAA to Master KW Variations Sheet"

## Services:

-   Google Sheets
-   Google Drive
-   HTTP Request (Likely various keyword research/SEO APIs)

## Hashtags:

#n8n #automation #SEO #keywordresearch #googlesheets
