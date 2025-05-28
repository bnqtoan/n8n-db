# Call analyzer with AssemblyAI transcription and OpenAI assistant integration

## Use cases:

- **Sales Call Analysis:** Automatically transcribe and analyze sales calls to identify customer needs, assess agent performance, and discover upselling opportunities.
- **Customer Support Improvement:** Analyze customer support calls to evaluate agent empathy, identify common customer issues, and improve overall service quality.
- **Market Research:** Transcribe and analyze focus group discussions or customer interviews to extract key insights, preferences, and pain points for market research purposes.

## How it works:

This workflow automates the process of transcribing audio recordings and analyzing the transcripts with AI, then storing the results in a database. Here’s a step-by-step breakdown:

1.  **Manual Trigger:** The workflow is initiated manually, simulating a trigger from an external event or system.
2.  **Set Audio Link:**  A direct URL to the audio file (e.g., an MP3 file stored in cloud storage) is assigned to a variable.
3.  **AssemblyAI Transcription:** The audio file is sent to AssemblyAI for transcription. The `audio_url`, `language_code`, `speaker_labels`, `speakers_expected`, and `webhook_url` parameters are configured:
    *   `audio_url`: Link to audio file
    *   `language_code`: `en_us`
    *   `speaker_labels`: `true`
    *   `speakers_expected`: `2`
    *   `webhook_url`: For AssemblyAI to POST the result.
4.  **Webhook Listener:** n8n listens for AssemblyAI to POST the transcription result.
5.  **Check Transcription Status:** Once the transcription is complete, the workflow checks if the status is "completed".
6.  **Get Full Transcription from AssemblyAI:** If the transcription is complete, it retrieves the full transcription from AssemblyAI using the `transcript_id` received in the webhook.
7.  **Set analysis prompt and schema:**  A prompt with clear instructions for call analysis, focusing on key sales performance metrics, upselling opportunities, objection handling, and actionable insights for agent improvement. This prompt leverages sales best practices to highlight rapport building, product presentation, and strategies for favorable outcomes.  Includes a JSON schema for OpenAI to return output.
8.  **OpenAI Analysis:** The transcription text is sent to OpenAI's Chat Completions API, along with a predefined prompt and JSON schema, for analysis. The prompt instructs OpenAI to analyze the call transcript, extract key metrics related to sales performance, and identify upselling opportunities. The `gpt-4o-2024-08-06` model is used for its JSON schema support.
9.  **Supabase Storage:** The results from OpenAI, along with the original transcription text, audio URL, and transcription ID, are stored in a Supabase database. This allows for easy access and further processing of the analyzed data.

## Services:

-   AssemblyAI
-   OpenAI
-   Supabase

## Hashtags:

#n8n #automation #salescallanalysis #AI #workflow
