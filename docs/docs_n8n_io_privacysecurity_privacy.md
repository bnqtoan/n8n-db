data collection gdpr payment processor pid

[](https://github.com/n8n-io/n8n-docs/edit/main/docs/privacy-security/privacy.md "Edit this page")

# Privacy[#](#privacy "Permanent link")

This page describes n8n's data privacy practices.

## GDPR[#](#gdpr "Permanent link")

### Data processing agreement[#](#data-processing-agreement "Permanent link")

For Cloud versions of n8n, n8n is considered both a Controller and a Processor as defined by the GDPR. As a Processor, n8n implements policies and practices that secure the personal data you send to the platform, and includes a [Data Processing Agreement](https://n8n.io/legal/#data) as part of the company's standard [Terms of Service](https://n8n.io/legal/#terms).

The n8n Data Processing Agreement includes the [Standard Contractual Clauses (SCCs)](https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en). These clarify how n8n handles your data, and they update n8n's GDPR policies to cover the latest standards set by the European Commission.

You can find a list of n8n sub-processors [here](https://n8n.io/legal/#subprocessors).

Self-hosted n8n

For self-hosted versions, n8n is neither a Controller nor a Processor, as we don't manage your data

### Submitting a GDPR deletion request[#](#submitting-a-gdpr-deletion-request "Permanent link")

Email privacy@n8n.io to request data deletion.

### Sub-processors[#](#sub-processors "Permanent link")

This is a list of sub-processors authorized to process customer data for n8n's service. n8n audits each sub-processor's security controls and applicable regulations for the protection of personal data.

Sub-processor name

Contact details

Geographic location of processing

Microsoft Azure

Microsoft Azure  
1 Microsoft Way  
Redmond  
WA 98052  
USA  
Contact information: https://privacy.microsoft.com/en-GB/privacystatement#mainhowtocontactusmodule

Germany (West Central Region)

Hetzner Online

Hetzner Online GmbH  
Industriestr. 25  
91710 Gunzenhausen  
Germany  
data-protection@hetzner.com

Germany

Subscribe [here](https://n8n-community.typeform.com/to/FdeRxSkH?typeform-source=n8n.io) to receive updates when n8n adds or changes a sub-processor.

### GDPR for self-hosted users[#](#gdpr-for-self-hosted-users "Permanent link")

If you self-host n8n, you are responsible for deleting user data. If you need to delete data on behalf of one of your users, you can delete the respective execution. n8n recommends configuring n8n to prune execution data automatically every few days to avoid effortful GDPR request handling as much as possible. Configure this using the `EXECUTIONS_DATA_MAX_AGE` environment variable. Refer to [Environment variables](../../hosting/configuration/environment-variables/) for more information.

## Data collection[#](#data-collection "Permanent link")

n8n collects selected usage and performance data to help diagnose problems and improve the platform. Read about how n8n stores and processes this information in the [privacy policy](https://n8n.io/legal/#privacy).

The data gathered is different in self-hosted n8n and n8n Cloud.

### Data collection in self-hosted n8n[#](#data-collection-in-self-hosted-n8n "Permanent link")

n8n takes care to keep self-hosted data anonymous and avoids collecting sensitive data.

#### What n8n collects[#](#what-n8n-collects "Permanent link")

*   Error codes and messages of failed executions (excluding any payload data, and not for custom nodes)
*   Error reports for app crashes and API issues
*   The graph of a workflow (types of nodes used and how they're connected)
*   From node parameters:
    *   The 'resource' and 'operation' that a node is set to (if applicable)
    *   For HTTP request nodes, the domain, path, and method (with personal data anonymized)
*   Data around workflow executions:
    *   Status
    *   The user ID of the user who ran the execution
    *   The first time a workflow loads data from an external source
    *   The first successful production (non-manual) workflow execution
*   The domain of webhook calls, if specified (excluding subdomain).
*   Details on how the UI is used (for example, navigation, nodes panel searches)
*   Diagnostic information:
    *   n8n version
    *   Selected settings:
        *   DB\_TYPE
        *   N8N\_VERSION\_NOTIFICATIONS\_ENABLED
        *   N8N\_DISABLE\_PRODUCTION\_MAIN\_PROCESS
        *   [Execution variables](../../hosting/configuration/environment-variables/executions/)
    *   OS, RAM, and CPUs
    *   Anonymous instance ID
*   IP address

#### What n8n doesn't collect[#](#what-n8n-doesnt-collect "Permanent link")

n8n doesn't collect private or sensitive information, such as:

*   Personally identifiable information (except IP address)
*   Credential information
*   Node parameters (except 'resource' and 'operation')
*   Execution data
*   Sensitive settings (for example, endpoints, ports, DB connections, username/password)
*   Error payloads

#### How collection works[#](#how-collection-works "Permanent link")

Most data is sent to n8n as events that generate it occur. Workflow execution counts and an instance pulse are sent periodically (every 6 hours).

#### Opting out of telemetry[#](#opting-out-of-telemetry "Permanent link")

Telemetry collection is enabled by default. To disable it you can configure the following environment variables.

To opt out of telemetry events:

1

`export N8N_DIAGNOSTICS_ENABLED=false`

To opt out of checking for new versions of n8n:

1

`export N8N_VERSION_NOTIFICATIONS_ENABLED=false`

See [configuration](../../hosting/configuration/configuration-methods/) for more info on how to set environment variables.

### Data collection in n8n Cloud[#](#data-collection-in-n8n-cloud "Permanent link")

n8n Cloud collects everything listed in [Data collection in self-hosted n8n](#data-collection-in-self-hosted-n8n).

Additionally, in n8n Cloud, n8n uses [PostHog](https://posthog.com/) to track events and visualise usage, including using session recordings. Session recordings comprise the data seen by a user on screen, with the exception of credential values. n8n's product team uses this data to improve the product. All recordings are deleted after 21 days.

### AI in n8n[#](#ai-in-n8n "Permanent link")

To provide enhanced assistance, n8n integrates AI-powered features that leverage Large Language Models (LLMs).

#### How n8n uses AI[#](#how-n8n-uses-ai "Permanent link")

To assist and improve user experience, n8n may send specific context data to LLMs. This context data is strictly limited to information about the current workflow. n8n does not send any values from credential fields or actual output data to AI services. The data will not be incorporated, used, or retained to train the models of the AI services. Any data will be deleted after 30 days.

#### When n8n shares data[#](#when-n8n-shares-data "Permanent link")

Data is only sent to AI services if workspaces have opted in to use the assistant. The Assistant is enabled by default for n8n Cloud users. When a workspace opts in to use the assistant, node-specific data is transmitted only during direct interactions and active sessions with the AI assistant, ensuring no unnecessary data sharing occurs.

#### What n8n shares[#](#what-n8n-shares "Permanent link")

*   **General Workflow Information**: This includes details about which nodes are present in your workflow, the number of items currently in the workflow, and whether the workflow is active.
*   **Input & Output Schemas of Nodes**: This includes the schema of all nodes with incoming data and the output schema of a node in question. We do not send the actual data value of the schema.
*   **Node Configuration**: This includes the operations, options, and settings chosen in the referenced node.
*   **Code and Expressions**: This includes any code or expressions in the node in question to help with debugging potential issues and optimizations.

#### What n8n doesn't share[#](#what-n8n-doesnt-share "Permanent link")

*   **Credentials**: Any values of the credential fields of your nodes.
*   **Output Data**: The actual data processed by your workflows.
*   **Sensitive Information**: Any personally identifiable information or other sensitive data that could compromise your privacy or security that you have not explicitly mentioned in node parameters or your code of a [Code Node](../../integrations/builtin/core-nodes/n8n-nodes-base.code/).

### Documentation telemetry[#](#documentation-telemetry "Permanent link")

n8n's documentation (this website) uses cookies to recognize your repeated visits and preferences, as well as to measure the effectiveness of n8n's documentation and whether users find what they're searching for. With your consent, you're helping n8n to make our documentation better.

[Change cookie settings](#__consent)

## Retention and deletion of personal identifiable data[#](#retention-and-deletion-of-personal-identifiable-data "Permanent link")

PID (personal identifiable data) is data that's personal to you and would identify you as an individual.

### n8n Cloud[#](#n8n-cloud "Permanent link")

#### PID retention[#](#pid-retention "Permanent link")

n8n only retains data for as long as necessary to provide the core service.

For n8n Cloud, n8n stores your workflow code, credentials, and other data indefinitely, until you choose to delete it or close your account. The platform stores execution data according to the retention rules on your account.

n8n deletes most internal application logs and logs tied to subprocessors within 90 days. The company retains a subset of logs for longer periods where required for security investigations.

#### PID deletion[#](#pid-deletion "Permanent link")

If you choose to delete your n8n account, n8n deletes all customer data and event data associated with your account. n8n deletes customer data in backups within 90 days.

### Self-hosted[#](#self-hosted "Permanent link")

Self-hosted users should have their own PID policy and data deletion processes. Refer to [What you can do](../what-you-can-do/) for more information.

## Payment processor[#](#payment-processor "Permanent link")

n8n uses Paddle.com to process payments. When you sign up for a paid plan, Paddle transmits and stores the details of your payment method according to their security policy. n8n stores no information about your payment method.