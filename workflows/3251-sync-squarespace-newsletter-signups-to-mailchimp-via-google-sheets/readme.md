# Squarespace to Mailchimp Newsletter Sync

## Use cases
1. **Automated subscriber migration** - Sync Squarespace newsletter signups to a specific Mailchimp audience automatically, bypassing Squarespace's native integration limitations.  
2. **Scheduled contact updates** - Maintain an updated Mailchimp audience by regularly importing new subscribers from a Google Sheets log (hourly/daily/weekly).  
3. **Custom audience management** - Use existing Mailchimp audiences instead of requiring new/empty ones when integrating with Squarespace forms.

## How it works
This workflow automates subscriber management between Squarespace and Mailchimp:
1. **Trigger Options**  
   - Manual: Run on demand using the "Test workflow" button  
   - Scheduled: Run automatically at intervals (schedule configured in Schedule Trigger node)

2. **Data Collection**  
   - Reads Squarespace newsletter submissions stored in a structured Google Sheet (emails, names, timestamps)

3. **Processing**  
   - Splits spreadsheet rows into individual entries  
   - Filters duplicates using the `row_number` identifier

4. **Mailchimp Integration**  
   - Creates subscribed contacts with:  
     - Email address + unique identifier (avoids conflicts)  
     - Subscriber name (first name mapping)  
     - Original signup timestamp (preserves submission dates)

## Services
- **Google Sheets**: Stores and provides access to Squarespace newsletter signup data  
- **Mailchimp**: Manages email marketing lists and subscriber profiles  

## Hashtags
#n8n #automation #Mailchimp #GoogleSheets #NewsletterSync  
