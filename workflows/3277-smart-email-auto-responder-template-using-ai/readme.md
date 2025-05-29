# Email Classification and Response Automation

## Use Cases
1. **Customer Inquiry Handling**  
Automatically categorize and respond to common business inquiries about guest posts, YouTube collaboration requests, or Udemy course information.

2. **Lead Management System**  
Process incoming outreach emails from potential partners/customers while maintaining a clean inbox by labeling messages and creating contact records.

3. **Educational Content Promotion**  
Automate responses to course inquiries with personalized email templates containing curated learning resources and platform links.

## How It Works
This AI-powered workflow:
1. **Triggers** every hour checking a Gmail inbox for new messages
2. **Filters** messages using two checks:
   - Excludes emails from `@syncbricks.com` domains
   - Skips email threads with `Re:` subjects (prevents reply loops)
3. **Classifies** email content using Google Gemini AI into 3 categories:
   - Guest post requests
   - YouTube video collaboration inquiries
   - Udemy course-related questions
4. **Sends tailored responses** using pre-built HTML email templates with:
   - Service-specific pricing/guidelines
   - Platform links
   - Submission instructions
5. **Post-processing**:
   - Marks emails as read
   - Applies labels for organization
   - Creates/updates Brevo contact records

## Services
- **Gmail** (Email triggering/label management)
- **SMTP** (Email sending)
- **Google Gemini** (AI classification)
- **Brevo/SendInBlue** (CRM contact management)

## Hashtags
#EmailAutomation #CustomerSupport #WorkflowAutomation #n8n #AI
