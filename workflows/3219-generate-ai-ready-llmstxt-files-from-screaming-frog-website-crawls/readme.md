# Generate AI-Ready llms.txt Files from Screaming Frog Website Crawls

## Use Cases
1. **SEO-Optimized AI Content Preparation**  
   Convert website crawl data into structured `llms.txt` files to train language models (LLMs) on high-quality, indexable content while filtering out low-value pages like pagination or error pages.

2. **Multilingual Website Analysis**  
   Process Screaming Frog exports from websites in English, French, Italian, German, or Spanish with automatic column name normalization for consistent processing.

3. **Content Quality Filtering (AI-Powered)**  
   Use optional LLM classification to prioritize pages containing valuable content for AI training while excluding thin/duplicate content.

## How It Works
1. **Form Input**: Users provide:
   - Website name
   - Website description
   - Screaming Frog CSV export (`internal_html.csv` preferred)
   
2. **Data Extraction**:  
   The workflow processes the CSV file and maps columns to standardized fields (URL, title, meta description) with multilingual support.

3. **Filtering**:  
   Keeps only indexable pages with:
   - HTTP 200 status
   - `text/html` content type
   - "Indexable" status (supports multiple languages)

4. **AI Classification (Optional)**:  
   Disabled by default. When activated, uses OpenAI to classify URLs as `useful_content` or `other_content` based on URL/title/description analysis.

5. **File Generation**:  
   Creates an `llms.txt` file in the format:  
   ```markdown
   - [Page Title](https://example.com): Meta description text
   ```
   Includes website name/description as header. File can be downloaded directly or sent to cloud storage.

## Services
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/)
- [OpenAI GPT](https://openai.com) (optional classification)
- Google Drive/OneDrive (optional file upload - node not implemented by default)

## Hashtags
#AI #SEO #n8n #automation #contentcuration
