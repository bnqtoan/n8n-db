# Luma AI Dream Machine - Simple v1 - AK

## Use cases
1. **Automated social media content generation**: Create AI-generated videos with randomized camera movements for platforms like TikTok/Instagram that require vertical (9:16) videos.
2. **Product demo automation**: Generate variations of product showcase videos with different dynamic camera angles for e-commerce or marketing campaigns.
3. **Batch video processing pipeline**: Systematically create and track AI video generations while storing metadata in Airtable for quality control and content management.

## How it works
1. Starts with a manual trigger (Test workflow button)
2. Loads global settings including prompt ("a superhero flying through a volcano"), aspect ratio (9:16), duration (5s), and tracking parameters
3. Randomizes camera motion from 15 possible options (e.g., "Orbit Left," "Zoom In")
4. Submits video generation request to Luma AI's Dream Machine API (ray-2 model)
5. Creates an Airtable record containing generation details (model, prompt, duration) and tracking ID for future reference

## Services
- **Luma AI Dream Machine API** (video generation)
- **Airtable** (database for tracking video generations)

## Hashtags
#LumaAI #Airtable #n8n #VideoAutomation #ContentCreation
