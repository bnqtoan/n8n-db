# YouTube New Video Notifier

### Use cases
1. **Content Aggregation**: Automatically track and receive notifications for new uploads from subscribed YouTube channels, ideal for staying updated with creators without manual checks.
2. **Personalized Notifications**: Get tailored email alerts with video thumbnails and direct links, avoiding platform algorithms that might hide content.
3. **Short Filtering**: Skip YouTube Shorts (videos <60 seconds) to focus on long-form content from subscribed channels.

### How it works
1. **Trigger**: Runs every hour via the [Schedule Trigger] node.
2. **Subscription Fetching**: Retrieves your YouTube subscriptions via [YouTube Data v3 API], checking for API errors.
3. **Channel Filtering**: 
   - Removes channels with no unwatched videos
   - Optional filter to block specific channels via channel IDs
4. **Video Processing**:
   - Gets 15 latest videos per channel via RSS (to save API quota)
   - Filters videos published since last workflow run
   - Adds thumbnails/duration via YouTube API calls
   - Excludes videos shorter than 61 seconds
5. **Notification**: Sends HTML email with thumbnail preview and video link.

### Services
- YouTube Data API v3 (Google APIs)
- SMTP email service
- YouTube RSS feeds

### Hashtags
#n8n #YouTubeAutomation #EmailNotifications #WorkflowOptimization
