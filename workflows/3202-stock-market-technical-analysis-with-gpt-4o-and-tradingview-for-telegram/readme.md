# AI-Powered Telegram Chart Analysis Workflow

## Use Cases
1. **Customer Support Chatbot** - Handle user requests for specific charts/data visualization through Telegram messages with contextual AI responses  
2. **Automated Financial Updates** - Provide stock/crypto traders with on-demand market charts and AI-powered analysis via Telegram  
3. **Team Data Analysis** - Enable cross-workflow triggering to generate and share processed data visualizations with commentary

## How It Works
This workflow combines AI conversation handling with data processing through 2 main flows:

1. **Telegram Chat Flow:**
   - Starts with Telegram message trigger
   - Uses OpenAI's language model with memory buffer for contextual conversations
   - Integrates chart retrieval tool (GetChart) through AI Agent
   - Sends responses back via Telegram

2. **Workflow Execution Flow:**
   - Triggered by external workflows
   - Processes input data through code transformation
   - Fetches charts via HTTP requests (Get Chart -> Download Chart)
   - Analyzes results using OpenAI
   - Sends final analysis via Telegram

Key nodes maintain conversation context (Window Buffer Memory) and connect to external chart APIs through HTTP request nodes.

## Services
- **Telegram** (Messaging platform)
- **OpenAI** (AI language processing)
- **Custom HTTP Services** (Chart generation/data APIs through HTTP Request nodes)

## Hashtags
#n8n #automation #chatbot #OpenAI #Telegram
