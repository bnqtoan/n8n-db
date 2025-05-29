# [template] IA Petshop v8

## Use cases:

- **Automated Customer Support:**  Handles initial inquiries from customers on various social media channels (WhatsApp, Instagram, Facebook) using AI to understand their needs and provide relevant information, such as product details or delivery estimates.
- **Lead Generation and Follow-up:** Captures new leads from social media interactions, registers them, and schedules automated follow-up messages based on predefined time intervals (10 minutes, 24 hours, 2 hours, 72 hours) to nurture them towards a sale.
- **Order Management and Delivery Calculation:** Processes orders received via webhooks, calculates delivery costs using external APIs (like Mapbox), and updates customer information in a database (Supabase).  Can also manage appointments and calendar events via Google Calendar.

## How it works:

1.  **Incoming Message Handling:** The workflow starts with webhooks (`START`, `Send Images`, `Check Stock`, `CPF`, `CEP`, `CalendarAgentAI`, `TriggerMapbox`, `WH Asaas`) that trigger based on incoming messages or events from various platforms.  The `START` webhook is the main entry point for social media messages.
2.  **Channel Identification and Initial Processing:** The `Channel` switch node determines the origin of the message (Instagram, Facebook, WhatsApp) and routes it accordingly. Initial nodes like `Data&Hora` and `Fixed Credentials` set up necessary data and credentials for subsequent steps.
3.  **AI-Powered Response Generation:**  The core of the workflow utilizes several Langchain nodes to create intelligent responses. `Best Agent AI` is central, using tools like a calculator (`Calculator`), web request tool (`calendarAgent`,`checar_cpf`, `checar_cep`, `e90ebee5-0c98-4132-89f8-50a4e79e6f10`), and vector stores (`n8n_chat_histories`,`instrucoes`) for knowledge retrieval. The agent interacts with a Postgres database (`Memory50`, `Postgres Memory`) to maintain chat history and context.
4.  **Follow-up Scheduling:** Based on defined rules, the workflow schedules follow-up messages using `Start Time`, `Loop`, and various `Filter` nodes (`10 Min`, `24 Horas`, `2 Horas`, `72 Horas`). These filters route leads to the `AI Agent FollowUP` node to re-engage with them.
5.  **Order Processing and Delivery Calculation:** The workflow handles order-related tasks, specifically using `WH Asaas` webhook. It can create customers and generate billing, validating CPF and CEP data. Uses tools like Mapbox to calculate delivery distances.
6.  **Data Storage and Updates:**  The workflow extensively uses Supabase nodes to store lead information, chat history, and other relevant data.  Supabase tools (`get_consumer`,`update_name`, and others) are used inside of AI Agents.
7.  **Google Drive Integration:**  Monitors Google Drive (`File Updated`) for new files. Processes PDFs, Text and Excel files, leveraging AI to summarize and update a vector store for RAG (Retrieval Augmented Generation).

## Services:

-   Supabase
-   Langchain (OpenAI)
-   Google Sheets
-   Google Drive
-   Mapbox
-   Asaas (billing)
-   Evolution API/ WAAPI
-   Instagram API
-   Facebook API

## Hashtags:

#n8n #automation #AI #customerSupport #leadGeneration