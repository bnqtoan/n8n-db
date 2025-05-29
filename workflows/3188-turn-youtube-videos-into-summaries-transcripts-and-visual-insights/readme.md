# Turn YouTube Videos into Summaries, Transcripts, and Visual Insights

## Use Cases
1. **Content Repurposing**: Quickly generate transcripts, timestamps, and AI summaries of YouTube videos for blog posts, social media captions, or newsletter content.
2. **Educational Analysis**: Automatically extract scene descriptions and visual details from tutorials/documentaries to create study guides or training materials.
3. **Social Media Creation**: Identify viral-worthy video clips with engagement-focused rationales and ready-to-use timestamps for short-form content platforms.

## How It Works
1. **Manual Trigger**: Starts the workflow (can be replaced with automated triggers like webhooks).
2. **Initial Setup**: Defines API credentials, YouTube URL, and processing type (`transcript`, `timestamps`, `summary`, `scene`, or `clips`).
3. **Prompt Selection**: Uses a Switch node to route to specific AI prompts based on the requested output format.
4. **AI Processing**: Sends video data to Google's Generative Language API (Gemini 1.5 Flash model) with tailored prompts for each use case.
5. **Response Handling**: Merges AI output with original context and formats results with clear metrics (token usage, model version).

Key nodes include:
- Multiple `Set` nodes for prompt customization
- HTTP Request node for Gemini API integration
- Error handling through response parsing
- Merge node to combine execution data

## Services
- **YouTube**: Provides video input via public URLs
- **Google Generative AI**: Processes video analysis through Gemini 1.5 Flash model
- **Google Cloud**: Hosts the API endpoint for AI interactions

## Hashtags
#n8n #AIautomation #YouTubeProcessing #ContentCreation #WorkflowAutomation
