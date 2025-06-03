[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/tools-agent.md "Edit this page")

# Tools AI Agent node[#](#tools-ai-agent-node "Permanent link")

The Tools Agent uses external [tools](../../../../../../glossary/#ai-tool) and APIs to perform actions and retrieve information. It can understand the capabilities of different tools and determine which tool to use depending on the task. This agent helps integrate LLMs with various external services and databases.

This agent has an enhanced ability to work with tools and can ensure a standard output format.

The Tools Agent implements [Langchain's tool calling](https://js.langchain.com/docs/concepts/tool_calling/) interface. This interface describes available tools and their schemas. The agent also has improved output parsing capabilities, as it passes the parser to the model as a formatting tool.

Refer to [AI Agent](../) for more information on the AI Agent node itself.

You can use this agent with the [Chat Trigger](../../../../core-nodes/n8n-nodes-langchain.chattrigger/) node. Attach a memory sub-node so that users can have an ongoing conversation with multiple queries. Memory doesn't persist between sessions.

This agent supports the following chat models:

*   [OpenAI Chat Model](../../../sub-nodes/n8n-nodes-langchain.lmchatopenai/)
*   [Groq Chat Model](../../../sub-nodes/n8n-nodes-langchain.lmchatgroq/)
*   [Mistral Cloud Chat Model](../../../sub-nodes/n8n-nodes-langchain.lmchatmistralcloud/)
*   [Anthropic Chat Model](../../../sub-nodes/n8n-nodes-langchain.lmchatanthropic/)
*   [Azure OpenAI Chat Model](../../../sub-nodes/n8n-nodes-langchain.lmchatazureopenai/)

The Tools Agent can use the following tools...

*   [Call n8n Workflow](../../../sub-nodes/n8n-nodes-langchain.toolworkflow/)
*   [Code](../../../sub-nodes/n8n-nodes-langchain.toolcode/)
*   [HTTP Request](../../../sub-nodes/n8n-nodes-langchain.toolhttprequest/)
*   [Action Network](../../../../app-nodes/n8n-nodes-base.actionnetwork/)
*   [ActiveCampaign](../../../../app-nodes/n8n-nodes-base.activecampaign/)
*   [Affinity](../../../../app-nodes/n8n-nodes-base.affinity/)
*   [Agile CRM](../../../../app-nodes/n8n-nodes-base.agilecrm/)
*   [Airtable](../../../../app-nodes/n8n-nodes-base.airtable/)
*   [APITemplate.io](../../../../app-nodes/n8n-nodes-base.apitemplateio/)
*   [Asana](../../../../app-nodes/n8n-nodes-base.asana/)
*   [AWS Lambda](../../../../app-nodes/n8n-nodes-base.awslambda/)
*   [AWS S3](../../../../app-nodes/n8n-nodes-base.awss3/)
*   [AWS SES](../../../../app-nodes/n8n-nodes-base.awsses/)
*   [AWS Textract](../../../../app-nodes/n8n-nodes-base.awstextract/)
*   [AWS Transcribe](../../../../app-nodes/n8n-nodes-base.awstranscribe/)
*   [Baserow](../../../../app-nodes/n8n-nodes-base.baserow/)
*   [Bubble](../../../../app-nodes/n8n-nodes-base.bubble/)
*   [Calculator](../../../sub-nodes/n8n-nodes-langchain.toolcalculator/)
*   [ClickUp](../../../../app-nodes/n8n-nodes-base.clickup/)
*   [CoinGecko](../../../../app-nodes/n8n-nodes-base.coingecko/)
*   [Compression](../../../../core-nodes/n8n-nodes-base.compression/)
*   [Crypto](../../../../core-nodes/n8n-nodes-base.crypto/)
*   [DeepL](../../../../app-nodes/n8n-nodes-base.deepl/)
*   [DHL](../../../../app-nodes/n8n-nodes-base.dhl/)
*   [Discord](../../../../app-nodes/n8n-nodes-base.discord/)
*   [Dropbox](../../../../app-nodes/n8n-nodes-base.dropbox/)
*   [Elasticsearch](../../../../app-nodes/n8n-nodes-base.elasticsearch/)
*   [ERPNext](../../../../app-nodes/n8n-nodes-base.erpnext/)
*   [Facebook Graph API](../../../../app-nodes/n8n-nodes-base.facebookgraphapi/)
*   [FileMaker](../../../../app-nodes/n8n-nodes-base.filemaker/)
*   [Ghost](../../../../app-nodes/n8n-nodes-base.ghost/)
*   [Git](../../../../core-nodes/n8n-nodes-base.git/)
*   [GitHub](../../../../app-nodes/n8n-nodes-base.github/)
*   [GitLab](../../../../app-nodes/n8n-nodes-base.gitlab/)
*   [Gmail](../../../../app-nodes/n8n-nodes-base.gmail/)
*   [Google Analytics](../../../../app-nodes/n8n-nodes-base.googleanalytics/)
*   [Google BigQuery](../../../../app-nodes/n8n-nodes-base.googlebigquery/)
*   [Google Calendar](../../../../app-nodes/n8n-nodes-base.googlecalendar/)
*   [Google Chat](../../../../app-nodes/n8n-nodes-base.googlechat/)
*   [Google Cloud Firestore](../../../../app-nodes/n8n-nodes-base.googlecloudfirestore/)
*   [Google Cloud Realtime Database](../../../../app-nodes/n8n-nodes-base.googlecloudrealtimedatabase/)
*   [Google Contacts](../../../../app-nodes/n8n-nodes-base.googlecontacts/)
*   [Google Docs](../../../../app-nodes/n8n-nodes-base.googledocs/)
*   [Google Drive](../../../../app-nodes/n8n-nodes-base.googledrive/)
*   [Google Sheets](../../../../app-nodes/n8n-nodes-base.googlesheets/)
*   [Google Slides](../../../../app-nodes/n8n-nodes-base.googleslides/)
*   [Google Tasks](../../../../app-nodes/n8n-nodes-base.googletasks/)
*   [Google Translate](../../../../app-nodes/n8n-nodes-base.googletranslate/)
*   [Google Workspace Admin](../../../../app-nodes/n8n-nodes-base.gsuiteadmin/)
*   [Gotify](../../../../app-nodes/n8n-nodes-base.gotify/)
*   [Grafana](../../../../app-nodes/n8n-nodes-base.grafana/)
*   [GraphQL](../../../../core-nodes/n8n-nodes-base.graphql/)
*   [Hacker News](../../../../app-nodes/n8n-nodes-base.hackernews/)
*   [Home Assistant](../../../../app-nodes/n8n-nodes-base.homeassistant/)
*   [HubSpot](../../../../app-nodes/n8n-nodes-base.hubspot/)
*   [Jenkins](../../../../app-nodes/n8n-nodes-base.jenkins/)
*   [Jira Software](../../../../app-nodes/n8n-nodes-base.jira/)
*   [JWT](../../../../core-nodes/n8n-nodes-base.jwt/)
*   [Kafka](../../../../app-nodes/n8n-nodes-base.kafka/)
*   [LDAP](../../../../core-nodes/n8n-nodes-base.ldap/)
*   [Line](../../../../app-nodes/n8n-nodes-base.line/)
*   [LinkedIn](../../../../app-nodes/n8n-nodes-base.linkedin/)
*   [Mailcheck](../../../../app-nodes/n8n-nodes-base.mailcheck/)
*   [Mailgun](../../../../app-nodes/n8n-nodes-base.mailgun/)
*   [Mattermost](../../../../app-nodes/n8n-nodes-base.mattermost/)
*   [Mautic](../../../../app-nodes/n8n-nodes-base.mautic/)
*   [Medium](../../../../app-nodes/n8n-nodes-base.medium/)
*   [Microsoft Excel 365](../../../../app-nodes/n8n-nodes-base.microsoftexcel/)
*   [Microsoft OneDrive](../../../../app-nodes/n8n-nodes-base.microsoftonedrive/)
*   [Microsoft Outlook](../../../../app-nodes/n8n-nodes-base.microsoftoutlook/)
*   [Microsoft SQL](../../../../app-nodes/n8n-nodes-base.microsoftsql/)
*   [Microsoft Teams](../../../../app-nodes/n8n-nodes-base.microsoftteams/)
*   [Microsoft To Do](../../../../app-nodes/n8n-nodes-base.microsofttodo/)
*   [Monday.com](../../../../app-nodes/n8n-nodes-base.mondaycom/)
*   [MongoDB](../../../../app-nodes/n8n-nodes-base.mongodb/)
*   [MQTT](../../../../app-nodes/n8n-nodes-base.mqtt/)
*   [MySQL](../../../../app-nodes/n8n-nodes-base.mysql/)
*   [NASA](../../../../app-nodes/n8n-nodes-base.nasa/)
*   [Nextcloud](../../../../app-nodes/n8n-nodes-base.nextcloud/)
*   [NocoDB](../../../../app-nodes/n8n-nodes-base.nocodb/)
*   [Notion](../../../../app-nodes/n8n-nodes-base.notion/)
*   [Odoo](../../../../app-nodes/n8n-nodes-base.odoo/)
*   [OpenWeatherMap](../../../../app-nodes/n8n-nodes-base.openweathermap/)
*   [Pipedrive](../../../../app-nodes/n8n-nodes-base.pipedrive/)
*   [Postgres](../../../../app-nodes/n8n-nodes-base.postgres/)
*   [Pushover](../../../../app-nodes/n8n-nodes-base.pushover/)
*   [QuickBooks Online](../../../../app-nodes/n8n-nodes-base.quickbooks/)
*   [QuickChart](../../../../app-nodes/n8n-nodes-base.quickchart/)
*   [RabbitMQ](../../../../app-nodes/n8n-nodes-base.rabbitmq/)
*   [Reddit](../../../../app-nodes/n8n-nodes-base.reddit/)
*   [Redis](../../../../app-nodes/n8n-nodes-base.redis/)
*   [RocketChat](../../../../app-nodes/n8n-nodes-base.rocketchat/)
*   [S3](../../../../app-nodes/n8n-nodes-base.s3/)
*   [Salesforce](../../../../app-nodes/n8n-nodes-base.salesforce/)
*   [Send Email](../../../../core-nodes/n8n-nodes-base.sendemail/)
*   [SendGrid](../../../../app-nodes/n8n-nodes-base.sendgrid/)
*   [SerpApi (Google Search)](../../../sub-nodes/n8n-nodes-langchain.toolserpapi/)
*   [Shopify](../../../../app-nodes/n8n-nodes-base.shopify/)
*   [Slack](../../../../app-nodes/n8n-nodes-base.slack/)
*   [Spotify](../../../../app-nodes/n8n-nodes-base.spotify/)
*   [Stripe](../../../../app-nodes/n8n-nodes-base.stripe/)
*   [Supabase](../../../../app-nodes/n8n-nodes-base.supabase/)
*   [Telegram](../../../../app-nodes/n8n-nodes-base.telegram/)
*   [Todoist](../../../../app-nodes/n8n-nodes-base.todoist/)
*   [TOTP](../../../../core-nodes/n8n-nodes-base.totp/)
*   [Trello](../../../../app-nodes/n8n-nodes-base.trello/)
*   [Twilio](../../../../app-nodes/n8n-nodes-base.twilio/)
*   [urlscan.io](../../../../app-nodes/n8n-nodes-base.urlscanio/)
*   [Vector Store](../../../sub-nodes/n8n-nodes-langchain.toolvectorstore/)
*   [Webflow](../../../../app-nodes/n8n-nodes-base.webflow/)
*   [Wikipedia](../../../sub-nodes/n8n-nodes-langchain.toolwikipedia/)
*   [Wolfram|Alpha](../../../sub-nodes/n8n-nodes-langchain.toolwolframalpha/)
*   [WooCommerce](../../../../app-nodes/n8n-nodes-base.woocommerce/)
*   [Wordpress](../../../../app-nodes/n8n-nodes-base.wordpress/)
*   [X (Formerly Twitter)](../../../../app-nodes/n8n-nodes-base.twitter/)
*   [YouTube](../../../../app-nodes/n8n-nodes-base.youtube/)
*   [Zendesk](../../../../app-nodes/n8n-nodes-base.zendesk/)
*   [Zoho CRM](../../../../app-nodes/n8n-nodes-base.zohocrm/)
*   [Zoom](../../../../app-nodes/n8n-nodes-base.zoom/)

## Node parameters[#](#node-parameters "Permanent link")

Configure the Tools Agent using the following parameters.

### Prompt[#](#prompt "Permanent link")

Select how you want the node to construct the prompt (also known as the user's query or input from the chat).

Choose from:

*   **Take from previous node automatically**: If you select this option, the node expects an input from a previous node called `chatInput`.
*   **Define below**: If you select this option, provide either static text or an expression for dynamic content to serve as the prompt in the **Prompt (User Message)** field.

### Require Specific Output Format[#](#require-specific-output-format "Permanent link")

This parameter controls whether you want the node to require a specific output format. When turned on, n8n prompts you to connect one of these output parsers to the node:

*   [Auto-fixing Output Parser](../../../sub-nodes/n8n-nodes-langchain.outputparserautofixing/)
*   [Item List Output Parser](../../../sub-nodes/n8n-nodes-langchain.outputparseritemlist/)
*   [Structured Output Parser](../../../sub-nodes/n8n-nodes-langchain.outputparserstructured/)

## Node options[#](#node-options "Permanent link")

Refine the Tools Agent node's behavior using these options:

### System Message[#](#system-message "Permanent link")

If you'd like to send a message to the agent before the conversation starts, enter the message you'd like to send.

Use this option to guide the agent's decision-making.

### Max Iterations[#](#max-iterations "Permanent link")

Enter the number of times the model should run to try and generate a good answer from the user's prompt.

Defaults to `10`.

### Return Intermediate Steps[#](#return-intermediate-steps "Permanent link")

Select whether to include intermediate steps the agent took in the final output (turned on) or not (turned off).

This could be useful for further refining the agent's behavior based on the steps it took.

### Automatically Passthrough Binary Images[#](#automatically-passthrough-binary-images "Permanent link")

Use this option to control whether binary images should be automatically passed through to the agent as image type messages (turned on) or not (turned off).

## Templates and examples[#](#templates-and-examples "Permanent link")

Refer to the main AI Agent node's [Templates and examples](../#templates-and-examples) section.

## Dynamic parameters for tools with `$fromAI()`[#](#dynamic-parameters-for-tools-with-fromai "Permanent link")

To learn how to dynamically populate parameters for app node tools, refer to [Let AI specify tool parameters with `$fromAI()`](../../../../../../advanced-ai/examples/using-the-fromai-function/).

## Common issues[#](#common-issues "Permanent link")

For common questions or issues and suggested solutions, refer to [Common issues](../common-issues/).

## AI glossary[#](#ai-glossary "Permanent link")

*   **completion**: Completions are the responses generated by a model like GPT.
*   **hallucinations**: Hallucination in AI is when an LLM (large language model) mistakenly perceives patterns or objects that don't exist.
*   **vector database**: A vector database stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.
*   **vector store**: A vector store, or vector database, stores mathematical representations of information. Use with embeddings and retrievers to create a database that your AI can access when answering questions.