# Spot Workplace Discrimination Patterns with AI

## Use cases:
- **HR Department Analysis:** Identifies potential biases in employee ratings across different demographic groups to improve workplace equity.
- **Company Reputation Management:** Monitors and analyzes employee reviews to proactively address negative perceptions and improve company image.
- **DE&I Initiatives:** Measures the effectiveness of diversity, equity, and inclusion programs by tracking changes in employee ratings and experiences over time.

## How it works:

This workflow automates the process of identifying potential workplace discrimination patterns by analyzing employee reviews on Glassdoor. Here's a step-by-step breakdown:

1.  **Data Input:** The workflow starts with a manual trigger that initiates the process.
2.  **Company Name Setup:** You provide the name of the company you wish to analyze.
3.  **Web Scraping (ScrapingBee & Glassdoor):**
    *   Uses ScrapingBee to search Glassdoor for the specified company's profile.
    *   Extracts the URL of the company's review page.
    *   Uses ScrapingBee again to retrieve the content of the reviews page.
4.  **Data Extraction (HTML Parsing):**
    *   Parses the HTML content to extract overall review summaries and demographic data.
5.  **AI-Powered Analysis (OpenAI):**
    *   Leverages OpenAI's language models to extract key metrics from the review summaries, such as average ratings and star distribution percentages.
    *   Uses OpenAI to extract demographic distributions from the demographics module.
6.  **Statistical Analysis:**
    *   Calculates variance and standard deviation based on the review rating distributions.
    *   Computes Z-scores and effect sizes to determine the statistical significance and magnitude of differences in ratings across demographic groups.
    *   Calculates P-Scores to validate the statistical significance and likelihood of disparities due to randomness.
7.  **Data Formatting:** Formats datasets for generating visualizations.
8.  **Data Visualization (QuickChart):**
    *   Generates a bar chart visualizing the effect sizes of different demographic groups.
    *   Creates a scatterplot showing the relationship between Z-scores and effect sizes, highlighting potential biases.
9.  **AI-Powered Text Analysis:**
    *   Uses OpenAI to analyze the calculated metrics and provide key takeaways about potential disparities in workplace experiences.

## Services:
-   Glassdoor
-   ScrapingBee
-   OpenAI
-   QuickChart

## Hashtags:

#n8n #automation #HR #AI #DEI
