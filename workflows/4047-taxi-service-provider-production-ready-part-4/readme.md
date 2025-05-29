# 🤖 Taxi Service Provider

## Use cases:

- **Intelligent Taxi Booking:** Automate taxi bookings by using AI to understand customer requests, validate provider availability, and handle booking confirmations.
- **Provider Data Caching and Retrieval:** Efficiently manage taxi service provider data by caching it in Redis, reducing database load and improving response times for frequent queries.
- **Dynamic Pricing and Scoring:** Determine ride prices based on AI analysis of provider data, demand, and other factors, incorporating a scoring system for optimal pricing.

## How it works:

1.  **Trigger:** The workflow is initiated by either a "Flow Trigger" or a "Test Trigger".
2.  **Input & Test Fields:** Sets initial data for provider and service numbers, respectively.
3.  **Provider Cache:** Checks if provider data is cached in Redis.
    *   **Provider Cache Switch:** Based on configuration, retrieves the provider data from cache or skips cache and goes to database
4.  **Load Provider Data:** If not cached, the workflow retrieves provider data from a Postgres database.
5.  **Parse Provider:** Parses the data to use it for other operation
6.  **If Active:** A conditional node that checks if the provider is active.
    *   **Save Provider Cache:** If active, saves the provider data in the Redis cache.
7.  **Provider Number:** Stores the provider number in Redis with a TTL of 5 minutes.
8.  **AI Agent:** Uses an AI Agent (powered by Langchain) to process the request, likely including the provider number and booking details. It uses two tool nodes **Calculator** and **Create Booking Data** to fulfill the request. It uses **xAI @grok-2-1212** as language model
9. **Code:** Evaluates the AI Agent output and route the true and false output.
10. **If Valid?:** Checks if the result is valid.
11. **If Score:** Conditional node checks if a score is available.
12. **Error Output1:** If any error occurs during the process, calls another workflow called **Demo Call Back**
13. **Call Back:** Another workflow is called to provide a callback

## Services:

-   **Postgres:** Database for storing provider data.
-   **Redis:** In-memory data structure store for caching provider data.
-   **Langchain:** Framework for building applications powered by language models.
-   **xAI @grok-2-1212:** Language Model to generate the output
-   **Calculator:** Langchain Tool
-   **Create Booking Data:** Langchain Tool

## Hashtags:

#n8n #automation #workflow #taxi #AI #Langchain
