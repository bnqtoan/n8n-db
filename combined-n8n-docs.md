## README.md

![Banner image][image1]

*Banner image*

# n8n \- Secure Workflow Automation for Technical Teams

n8n is a workflow automation platform that gives technical teams the flexibility of code with the speed of no-code. With 400+ integrations, native AI capabilities, and a fair-code license, n8n lets you build powerful automations while maintaining full control over your data and deployments.

![n8n.io - Screenshot][image2]

*n8n.io \- Screenshot*

## Key Capabilities

* **Code When You Need It**: Write JavaScript/Python, add npm packages, or use the visual interface

* **AI-Native Platform**: Build AI agent workflows based on LangChain with your own data and models

* **Full Control**: Self-host with our fair-code license or use our [cloud offering](https://app.n8n.cloud/login)

* **Enterprise-Ready**: Advanced permissions, SSO, and air-gapped deployments

* **Active Community**: 400+ integrations and 900+ ready-to-use [templates](https://n8n.io/workflows)

## Quick Start

Try n8n instantly with [npx](https://docs.n8n.io/hosting/installation/npm/) (requires [Node.js](https://nodejs.org/en/)):

npx n8n

Or deploy with [Docker](https://docs.n8n.io/hosting/installation/docker/):

docker volume create n8n\_data  
docker run \-it \--rm \--name n8n \-p 5678:5678 \-v n8n\_data:/home/node/.n8n docker.n8n.io/n8nio/n8n

Access the editor at http://localhost:5678

## Resources

* 📚 [Documentation](https://docs.n8n.io)

* 🔧 [400+ Integrations](https://n8n.io/integrations)

* 💡 [Example Workflows](https://n8n.io/workflows)

* 🤖 [AI & LangChain Guide](https://docs.n8n.io/langchain/)

* 👥 [Community Forum](https://community.n8n.io)

* 📖 [Community Tutorials](https://community.n8n.io/c/tutorials/28)

## Support

Need help? Our community forum is the place to get support and connect with other users: [community.n8n.io](https://community.n8n.io)

## License

n8n is [fair-code](https://faircode.io) distributed under the [Sustainable Use License](https://github.com/n8n-io/n8n/blob/master/LICENSE.md) and [n8n Enterprise License](https://github.com/n8n-io/n8n/blob/master/LICENSE_EE.md).

* **Source Available**: Always visible source code

* **Self-Hostable**: Deploy anywhere

* **Extensible**: Add your own nodes and functionality

[Enterprise licenses](mailto:license@n8n.io) available for additional features and support.

Additional information about the license model can be found in the [docs](https://docs.n8n.io/reference/license/).

## Contributing

Found a bug 🐛 or have a feature idea ✨? Check our [Contributing Guide](https://github.com/n8n-io/n8n/blob/master/CONTRIBUTING.md) to get started.

## Join the Team

Want to shape the future of automation? Check out our [job posts](https://n8n.io/careers) and join our team\!

## What does n8n mean?

**Short answer:** It means “nodemation” and is pronounced as n-eight-n.

**Long answer:** “I get that question quite often (more often than I expected) so I decided it is probably best to answer it here. While looking for a good name for the project with a free domain I realized very quickly that all the good ones I could think of were already taken. So, in the end, I chose nodemation. ‘node-’ in the sense that it uses a Node-View and that it uses Node.js and ‘-mation’ for ‘automation’ which is what the project is supposed to help with. However, I did not like how long the name was and I could not imagine writing something that long every time in the CLI. That is when I then ended up on ‘n8n’.” \- **Jan Oberhauser, Founder and CEO, n8n.io**

---

## cypress/README.md

## Debugging Flaky End-to-End Tests \- Usage

To debug flaky end-to-end (E2E) tests, use the following command:

pnpm run debug:flaky:e2e \-- \<grep\_filter\> \<burn\_count\>

**Parameters:**

* \<grep\_filter\>: (Optional) A string to filter tests by their it() or describe() block titles, or by tags if using the @cypress/grep plugin. If omitted, all tests will be run.

* \<burn\_count\>: (Optional) The number of times to run the filtered tests. Defaults to 5 if not provided.

**Examples:**

1. **Run all tests tagged with CAT-726 ten times:**

* pnpm run debug:flaky:e2e CAT-726 10

2. **Run all tests containing “login” five times (default burn count):**

* pnpm run debug:flaky:e2e login

3. **Run all tests five times (default grep and burn count):**

* pnpm run debug:flaky:e2e

---

## docker/images/n8n/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n \- Secure Workflow Automation for Technical Teams

n8n is a workflow automation platform that gives technical teams the flexibility of code with the speed of no-code. With 400+ integrations, native AI capabilities, and a fair-code license, n8n lets you build powerful automations while maintaining full control over your data and deployments.

![n8n.io - Screenshot][image2]

*n8n.io \- Screenshot*

## Key Capabilities

* **Code When You Need It**: Write JavaScript/Python, add npm packages, or use the visual interface

* **AI-Native Platform**: Build AI agent workflows based on LangChain with your own data and models

* **Full Control**: Self-host with our fair-code license or use our [cloud offering](https://app.n8n.cloud/login)

* **Enterprise-Ready**: Advanced permissions, SSO, and air-gapped deployments

* **Active Community**: 400+ integrations and 900+ ready-to-use [templates](https://n8n.io/workflows)

## Contents

* [n8n \- Workflow automation tool](#bookmark=id.v6b19q3ppjrb)

  * [Key Capabilities](#bookmark=id.he8n9ow1wxxn)

  * [Contents](#bookmark=id.aegdz6gjt6ta)

  * [Demo](#bookmark=id.379ubwkpw9js)

  * [Available integrations](#bookmark=id.wjbl9hhfgwyf)

  * [Documentation](#bookmark=id.ya6r5ps1gt16)

  * [Start n8n in Docker](#bookmark=id.thcirs7kdz5l)

  * [Start n8n with tunnel](#bookmark=id.gqu475jnv634)

  * [Use with PostgreSQL](#bookmark=id.fpisoevawe6)

  * [Passing sensitive data using files](#bookmark=id.xl0dpqex48i)

  * [Example server setups](#bookmark=id.sex219otskkx)

  * [Updating](#bookmark=id.7qxi1arjeckb)

    * [Pull latest (stable) version](#bookmark=id.iu5vtqc2r6gn)

    * [Pull specific version](#bookmark=id.75efp71e41uc)

    * [Pull next (unstable) version](#bookmark=id.a5pgpmj05ipd)

    * [Updating with Docker Compose](#bookmark=id.md3m7caqu4iq)

  * [Setting Timezone](#bookmark=id.io1mq5qsoilj)

  * [Build Docker-Image](#bookmark=id.17lwnbpxfpz)

  * [What does n8n mean and how do you pronounce it?](#bookmark=id.enayk4l6f3p)

  * [Support](#bookmark=id.jtuixobduaci)

  * [Jobs](#bookmark=id.l78rv324li0m)

  * [License](#bookmark=id.vobisz87pirh)

## Demo

This [:tv: short video (\< 4 min)](https://www.youtube.com/watch?v=RpjQTGKm-ok) goes over key concepts of creating workflows in n8n.

## Available integrations

n8n has 200+ different nodes to automate workflows. A full list can be found at [https://n8n.io/integrations](https://n8n.io/integrations).

## Documentation

The official n8n documentation can be found at [https://docs.n8n.io](https://docs.n8n.io).

Additional information and example workflows are available on the website at [https://n8n.io](https://n8n.io).

## Start n8n in Docker

In the terminal, enter the following:

docker volume create n8n\_data

docker run \-it \--rm \\  
 \--name n8n \\  
 \-p 5678:5678 \\  
 \-v n8n\_data:/home/node/.n8n \\  
 docker.n8n.io/n8nio/n8n

This command will download the required n8n image and start your container. You can then access n8n by opening: [http://localhost:5678](http://localhost:5678)

To save your work between container restarts, it also mounts a docker volume, n8n\_data. The workflow data gets saved in an SQLite database in the user folder (/home/node/.n8n). This folder also contains important data like the webhook URL and the encryption key used for securing credentials.

If this data can’t be found at startup n8n automatically creates a new key and any existing credentials can no longer be decrypted.

## Start n8n with tunnel

**WARNING**: This is only meant for local development and testing and should **NOT** be used in production\!

n8n must be reachable from the internet to make use of webhooks \- essential for triggering workflows from external web-based services such as GitHub. To make this easier, n8n has a special tunnel service which redirects requests from our servers to your local n8n instance. You can inspect the code running this service here: [https://github.com/n8n-io/localtunnel](https://github.com/n8n-io/localtunnel)

To use it simply start n8n with \--tunnel

docker volume create n8n\_data

docker run \-it \--rm \\  
 \--name n8n \\  
 \-p 5678:5678 \\  
 \-v n8n\_data:/home/node/.n8n \\  
 docker.n8n.io/n8nio/n8n \\  
 start \--tunnel

## Use with PostgreSQL

By default, n8n uses SQLite to save credentials, past executions and workflows. However, n8n also supports using PostgreSQL.

**WARNING**: Even when using a different database, it is still important to persist the /home/node/.n8n folder, which also contains essential n8n user data including the encryption key for the credentials.

In the following commands, replace the placeholders (depicted within angled brackets, e.g. \<POSTGRES\_USER\>) with the actual data:

docker volume create n8n\_data

docker run \-it \--rm \\  
 \--name n8n \\  
 \-p 5678:5678 \\  
 \-e DB\_TYPE=postgresdb \\  
 \-e DB\_POSTGRESDB\_DATABASE=\<POSTGRES\_DATABASE\> \\  
 \-e DB\_POSTGRESDB\_HOST=\<POSTGRES\_HOST\> \\  
 \-e DB\_POSTGRESDB\_PORT=\<POSTGRES\_PORT\> \\  
 \-e DB\_POSTGRESDB\_USER=\<POSTGRES\_USER\> \\  
 \-e DB\_POSTGRESDB\_SCHEMA=\<POSTGRES\_SCHEMA\> \\  
 \-e DB\_POSTGRESDB\_PASSWORD=\<POSTGRES\_PASSWORD\> \\  
 \-v n8n\_data:/home/node/.n8n \\  
 docker.n8n.io/n8nio/n8n

A full working setup with docker-compose can be found [here](https://github.com/n8n-io/n8n-hosting/blob/main/docker-compose/withPostgres/README.md).

## Passing sensitive data using files

To avoid passing sensitive information via environment variables, “\_FILE” may be appended to some environment variable names. n8n will then load the data from a file with the given name. This makes it possible to load data easily from Docker and Kubernetes secrets.

The following environment variables support file input:

* DB\_POSTGRESDB\_DATABASE\_FILE

* DB\_POSTGRESDB\_HOST\_FILE

* DB\_POSTGRESDB\_PASSWORD\_FILE

* DB\_POSTGRESDB\_PORT\_FILE

* DB\_POSTGRESDB\_USER\_FILE

* DB\_POSTGRESDB\_SCHEMA\_FILE

## Example server setups

Example server setups for a range of cloud providers and scenarios can be found in the [Server Setup documentation](https://docs.n8n.io/hosting/installation/server-setups/).

## Updating

Before you upgrade to the latest version make sure to check here if there are any breaking changes which may affect you: [Breaking Changes](https://github.com/n8n-io/n8n/blob/master/packages/cli/BREAKING-CHANGES.md)

From your Docker Desktop, navigate to the Images tab and select Pull from the context menu to download the latest n8n image.

You can also use the command line to pull the latest, or a specific version:

### Pull latest (stable) version

docker pull docker.n8n.io/n8nio/n8n

### Pull specific version

docker pull docker.n8n.io/n8nio/n8n:0.220.1

### Pull next (unstable) version

docker pull docker.n8n.io/n8nio/n8n:next

Stop the container and start it again:

1. Get the container ID:

docker ps \-a

2. Stop the container with ID container\_id:

docker stop \[container\_id\]

3. Remove the container (this does not remove your user data) with ID container\_id:

docker rm \[container\_id\]

4. Start the new container:

docker run \--name\=\[container\_name\] \[options\] \-d docker.n8n.io/n8nio/n8n

### Updating with Docker Compose

If you run n8n using a Docker Compose file, follow these steps to update n8n:

*\# Pull latest version*  
docker compose pull

*\# Stop and remove older version*  
docker compose down

*\# Start the container*  
docker compose up \-d

## Setting the timezone

To specify the timezone n8n should use, the environment variable GENERIC\_TIMEZONE can be set. One example where this variable has an effect is the Schedule node.

The system’s timezone can be set separately with the environment variable TZ. This controls the output of certain scripts and commands such as $ date.

For example, to use the same timezone for both:

docker run \-it \--rm \\  
 \--name n8n \\  
 \-p 5678:5678 \\  
 \-e GENERIC\_TIMEZONE="Europe/Berlin" \\  
 \-e TZ="Europe/Berlin" \\  
 docker.n8n.io/n8nio/n8n

For more information on configuration and environment variables, please see the [n8n documentation](https://docs.n8n.io/hosting/configuration/environment-variables/).

## Build Docker-Image

docker buildx build \--platform linux/amd64,linux/arm64 \--build-arg N8N\_VERSION=\<VERSION\> \-t n8n:\<VERSION\> .

*\# For example:*  
docker buildx build \--platform linux/amd64,linux/arm64 \--build-arg N8N\_VERSION=1.30.1 \-t n8n:1.30.1 .

## What does n8n mean and how do you pronounce it?

**Short answer:** It means “nodemation” and it is pronounced as n-eight-n.

**Long answer:** I get that question quite often (more often than I expected) so I decided it is probably best to answer it here. While looking for a good name for the project with a free domain I realized very quickly that all the good ones I could think of were already taken. So, in the end, I chose nodemation. “node-” in the sense that it uses a Node-View and that it uses Node.js and “-mation” for “automation” which is what the project is supposed to help with. However, I did not like how long the name was and I could not imagine writing something that long every time in the CLI. That is when I then ended up on “n8n”. Sure it does not work perfectly but neither does it for Kubernetes (k8s) and I did not hear anybody complain there. So I guess it should be ok.

## Support

If you need more help with n8n, you can ask for support in the [n8n community forum](https://community.n8n.io). This is the best source of answers, as both the n8n support team and community members can help.

## Jobs

If you are interested in working for n8n and so shape the future of the project check out our [job posts](https://jobs.ashbyhq.com/n8n).

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license).

---

## packages/@n8n/api-types/README.md

## @n8n/api-types

This package contains types and schema definitions for the n8n internal API, so that these can be shared between the backend and the frontend code.

---

## packages/@n8n/benchmark/README.md

# n8n benchmarking tool

Tool for executing benchmarks against an n8n instance.

## Directory structure

packages/@n8n/benchmark  
├── scenarios        Benchmark scenarios  
├── src              Source code for the n8n-benchmark cli  
├── Dockerfile       Dockerfile for the n8n-benchmark cli  
├── scripts          Orchestration scripts

## Benchmarking an existing n8n instance

The easiest way to run the existing benchmark scenarios is to use the benchmark docker image:

docker pull ghcr.io/n8n-io/n8n-benchmark:latest  
*\# Print the help to list all available flags*  
docker run ghcr.io/n8n-io/n8n-benchmark:latest run \--help  
*\# Run all available benchmark scenarios for 1 minute with 5 concurrent requests*  
docker run ghcr.io/n8n-io/n8n-benchmark:latest run \\  
    \--n8nBaseUrl\=https://instance.url \\  
    \--n8nUserEmail\=InstanceOwner@email.com \\  
    \--n8nUserPassword\=InstanceOwnerPassword \\  
    \--vus\=5 \\  
    \--duration\=1m \\  
    \--scenarioFilter\=single-webhook

### Using custom scenarios with the Docker image

It is also possible to create your own [benchmark scenarios](#bookmark=id.lhg0k6yjqs08) and load them using the \--testScenariosPath flag:

*\# Assuming your scenarios are located in \`./scenarios\`, mount them into \`/scenarios\` in the container*  
docker run \-v ./scenarios:/scenarios ghcr.io/n8n-io/n8n-benchmark:latest run \\  
    \--n8nBaseUrl\=https://instance.url \\  
    \--n8nUserEmail\=InstanceOwner@email.com \\  
    \--n8nUserPassword\=InstanceOwnerPassword \\  
    \--vus\=5 \\  
    \--duration\=1m \\  
    \--testScenariosPath\=/scenarios

## Running the entire benchmark suite

The benchmark suite consists of [benchmark scenarios](#bookmark=id.lhg0k6yjqs08) and different [n8n setups](#bookmark=id.k8ljuqayisu0).

### locally

pnpm benchmark-locally

### In the cloud

pnpm benchmark-in-cloud

## Running the n8n-benchmark cli

The n8n-benchmark cli is a node.js program that runs one or more scenarios against a single n8n instance.

### Locally with Docker

Build the Docker image:

*\# Must be run in the repository root*  
*\# k6 doesn't have an arm64 build available for linux, we need to build against amd64*  
docker build \--platform linux/amd64 \-t n8n-benchmark \-f packages/@n8n/benchmark/Dockerfile .

Run the image

docker run \\  
  \-e N8N\_USER\_EMAIL=user@n8n.io \\  
  \-e N8N\_USER\_PASSWORD=password \\  
  *\# For macos, n8n running outside docker*  
  \-e N8N\_BASE\_URL=http://host.docker.internal:5678 \\  
  n8n-benchmark

### Locally without Docker

Requirements:

* [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)

* Node.js v20 or higher

pnpm build

*\# Run tests against http://localhost:5678 with specified email and password*  
N8N\_USER\_EMAIL\=user@n8n.io N8N\_USER\_PASSWORD\=password ./bin/n8n-benchmark run

## Benchmark scenarios

A benchmark scenario defines one or multiple steps to execute and measure. It consists of:

* Manifest file which describes and configures the scenario

* Any test data that is imported before the scenario is run

* A [k6](https://grafana.com/docs/k6/latest/using-k6/http-requests/) script which executes the steps and receives API\_BASE\_URL environment variable in runtime.

Available scenarios are located in [./scenarios](http://./scenarios/).

## n8n setups

A n8n setup defines a single n8n runtime configuration using Docker compose. Different n8n setups are located in [./scripts/n8nSetups](http://./scripts/n8nSetups).

---

## packages/@n8n/codemirror-lang/README.md

# @n8n/codemirror-lang

Language support package for CodeMirror 6 in n8n

[n8n Expression Language support](http://./src/expressions/README.md)

---

## packages/@n8n/codemirror-lang/src/expressions/README.md

# n8n Expression language support

## Usage

**import** { parserWithMetaData **as** n8nParser } **from** '@n8n/codemirror-lang';  
**import** { LanguageSupport, LRLanguage } **from** '@codemirror/language';  
**import** { parseMixed } **from** '@lezer/common';  
**import** { parser **as** jsParser } **from** '@lezer/javascript';

**const** n8nPlusJsParser \= n8nParser.configure({  
    wrap: parseMixed((node) **\=\>** {  
        **if** (node.type.isTop) **return** **null**;

        **return** node.name \=== 'Resolvable'  
            ? { parser: jsParser, overlay: (node) **\=\>** node.type.name \=== 'Resolvable' }  
            : **null**;  
    }),  
});

**const** n8nLanguage \= LRLanguage.define({ parser: n8nPlusJsParser });

**export** **function** n8nExpressionLanguageSupport() {  
    **return** **new** LanguageSupport(n8nLanguage);  
}

## Supported Unicode ranges

* From Basic Latin up to and including Currency Symbols

* Miscellaneous Symbols and Pictographs

* CJK Unified Ideographs

---

## packages/@n8n/di/README.md

## @n8n/di

@n8n/di is a dependency injection (DI) container library, based on [typedi](https://github.com/typestack/typedi).

n8n no longer uses typedi because:

* typedi is no longer officially maintained

* Need for future-proofing, e.g. stage-3 decorators

* Small enough that it is worth the maintenance burden

* Easier to customize, e.g. to simplify unit tests

### Usage

*// from https://github.com/typestack/typedi/blob/develop/README.md*  
**import** { Container, Service } **from** 'typedi';

@Service()  
**class** ExampleInjectedService {  
  printMessage() {  
    console.log('I am alive\!');  
  }  
}

@Service()  
**class** ExampleService {  
  **constructor**(  
    *// because we annotated ExampleInjectedService with the @Service()*  
    *// decorator TypeDI will automatically inject an instance of*  
    *// ExampleInjectedService here when the ExampleService class is requested*  
    *// from TypeDI.*  
    **public** injectedService: ExampleInjectedService  
  ) {}  
}

**const** serviceInstance \= Container.get(ExampleService);  
*// we request an instance of ExampleService from TypeDI*

serviceInstance.injectedService.printMessage();  
*// logs "I am alive\!" to the console*

Requires enabling these flags in tsconfig.json:

{  
  "compilerOptions": {  
    "experimentalDecorators": **true**,  
    "emitDecoratorMetadata": **true**  
  }  
}

---

## packages/@n8n/extension-sdk/README.md

# @n8n/plugin-sdk

---

## packages/@n8n/json-schema-to-zod/README.md

# Json-Schema-to-Zod

A package to convert JSON schema (draft 4+) objects into Zod schemas in the form of Zod objects at runtime.

## Installation

npm install @n8n/json-schema-to-zod

### Simple example

**import** { jsonSchemaToZod } **from** "json-schema-to-zod";

**const** jsonSchema \= {  
  type: "object",  
  properties: {  
    hello: {  
      type: "string",  
    },  
  },  
};

**const** zodSchema \= jsonSchemaToZod(myObject);

### Overriding a parser

You can pass a function to the overrideParser option, which represents a function that receives the current schema node and the reference object, and should return a zod object when it wants to replace a default output. If the default output should be used for the node just return undefined.

## Acknowledgements

This is a fork of [json-schema-to-zod](https://github.com/StefanTerdell/json-schema-to-zod).

---

## packages/@n8n/nodes-langchain/README.md

![Banner image][image1]

*Banner image*

# n8n-nodes-langchain

This repo contains nodes to use n8n in combination with [LangChain](https://langchain.com/).

These nodes are still in Beta state and are only compatible with the Docker image docker.n8n.io/n8nio/n8n:ai-beta.

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/@n8n/nodes-langchain/nodes/vector\_store/shared/createVectorStoreNode/README.md

## Overview

createVectorStoreNode is a factory function that generates n8n nodes for vector store operations. It abstracts the common functionality needed for vector stores while allowing specific implementations to focus only on their unique aspects.

## Purpose

The function provides a standardized way to: 1\. Create vector store nodes with consistent UIs 2\. Handle different operation modes (load, insert, retrieve, update, retrieve-as-tool) 3\. Process documents and embeddings 4\. Maintain connection to LLM services

## Architecture

    /createVectorStoreNode/                      \# Create Vector Store Node  
    /constants.ts                    \# Constants like operation modes and descriptions  
    /types.ts                        \# TypeScript interfaces and types  
    /utils.ts                        \# Utility functions for node configuration  
    /createVectorStoreNode.ts        \# Main factory function  
    /processDocuments.ts             \# Document processing helpers  
    /operations/                     \# Operation-specific logic  
      /loadOperation.ts              \# Handles 'load' mode  
      /insertOperation.ts            \# Handles 'insert' mode  
      /updateOperation.ts            \# Handles 'update' mode  
      /retrieveOperation.ts          \# Handles 'retrieve' mode  
      /retrieveAsToolOperation.ts    \# Handles 'retrieve-as-tool' mode

## Usage

To create a new vector store node:

**import** { createVectorStoreNode } **from** './createVectorStoreNode';

**export** **class** MyVectorStoreNode {  
  **static** description \= createVectorStoreNode({  
    meta: {  
      displayName: 'My Vector Store',  
      name: 'myVectorStore',  
      description: 'Operations for My Vector Store',  
      docsUrl: 'https://docs.example.com/my-vector-store',  
      icon: 'file:myIcon.svg',  
      *// Optional: specify which operations this vector store supports*  
      operationModes: \['load', 'insert', 'update','retrieve', 'retrieve-as-tool'\],  
    },  
    sharedFields: \[  
      *// Fields shown in all operation modes*  
    \],  
    loadFields: \[  
      *// Fields specific to 'load' operation*  
    \],  
    insertFields: \[  
      *// Fields specific to 'insert' operation*  
    \],  
    retrieveFields: \[  
      *// Fields specific to 'retrieve' operation*  
    \],  
    *// Functions to implement*  
    getVectorStoreClient: **async** (context, filter, embeddings, itemIndex) **\=\>** {  
      *// Create and return vector store instance*  
    },  
    populateVectorStore: **async** (context, embeddings, documents, itemIndex) **\=\>** {  
      *// Insert documents into vector store*  
    },  
    *// Optional: cleanup function \- called in finally blocks after operations*  
    releaseVectorStoreClient: (vectorStore) **\=\>** {  
      *// Release resources such as database connections or external clients*  
      *// For example, in PGVector: vectorStore.client?.release();*  
    },  
  });  
}

## Operation Modes

### 1\. load Mode

* Retrieves documents from the vector store based on a query

* Embeds the query and performs similarity search

* Returns ranked documents with their similarity scores

### 2\. insert Mode

* Processes documents from input

* Embeds and stores documents in the vector store

* Returns serialized documents with metadata

* Supports batched processing with configurable embedding batch size

### 3\. retrieve Mode

* Returns the vector store instance for use with AI nodes

* Allows LLMs to query the vector store directly

* Used with chains and retrievers

### 4\. retrieve-as-tool Mode

* Creates a tool that wraps the vector store

* Allows AI agents to use the vector store as a tool

* Returns documents in a format digestible by agents

### 5\. update Mode (optional)

* Updates existing documents in the vector store by ID

* Requires the vector store to support document updates

* Only enabled if included in operationModes

* Uses addDocuments method with an ids array to update specific documents

* Processes a single document per item and applies it to the specified ID

* Validates that only one document is being updated per operation

## Key Components

### 1\. NodeConstructorArgs Interface

Defines the configuration and callbacks that specific vector store implementations must provide:

**Note:** In node version 1.1+, the populateVectorStore function must handle receiving multiple documents at once for batch processing.

**interface** VectorStoreNodeConstructorArgs\<T **extends** VectorStore\> {  
  meta: NodeMeta;                    *// Node metadata (name, description, etc.)*  
  methods?: { ... };                 *// Optional methods for list searches*  
  sharedFields: INodeProperties\[\];   *// Fields shown in all modes*  
  insertFields?: INodeProperties\[\];  *// Fields specific to insert mode*  
  loadFields?: INodeProperties\[\];    *// Fields specific to load mode*  
  retrieveFields?: INodeProperties\[\]; *// Fields specific to retrieve mode*  
  updateFields?: INodeProperties\[\];  *// Fields specific to update mode*  
    
  *// Core implementation functions*  
  populateVectorStore: Function;     *// Store documents in vector store (accepts batches in v1.1+)*  
  getVectorStoreClient: Function;    *// Get vector store instance*  
  releaseVectorStoreClient?: Function; *// Clean up resources*  
}

### 2\. Operation Handlers

Each operation mode has its own handler module with a well-defined interface:

*// Example: loadOperation.ts*  
**export** **async** **function** handleLoadOperation\<T **extends** VectorStore\>(  
  context: IExecuteFunctions,  
  args: VectorStoreNodeConstructorArgs\<T\>,  
  embeddings: Embeddings,  
  itemIndex: number  
): Promise\<INodeExecutionData\[\]\>

*// Example: insertOperation.ts (v1.1+)*  
**export** **async** **function** handleInsertOperation\<T **extends** VectorStore\>(  
  context: IExecuteFunctions,  
  args: VectorStoreNodeConstructorArgs\<T\>,  
  embeddings: Embeddings  
): Promise\<INodeExecutionData\[\]\>

### 3\. Document Processing

The processDocument function standardizes how documents are handled:

**const** { processedDocuments, serializedDocuments } \= **await** processDocument(  
  documentInput,  
  itemData,  
  itemIndex  
);

## Implementation Details

### Error Handling and Resource Management

Each operation handler includes error handling with proper resource cleanup. The releaseVectorStoreClient function is called in a finally block to ensure resources are released even if an error occurs:

**try** {  
  *// Operation logic*  
} **finally** {  
  *// Release resources even if an error occurs*  
  args.releaseVectorStoreClient?.(vectorStore);  
}

#### *When releaseVectorStoreClient is called:*

* After completing a similarity search in loadOperation

* As part of the closeFunction in retrieveOperation to release resources when they’re no longer needed

* After each tool use in retrieveAsToolOperation

* After updating documents in updateOperation

* After inserting documents in insertOperation

This design ensures proper resource management, which is especially important for database-backed vector stores (like PGVector) that need to return connections to a pool. Without proper cleanup, prolonged usage could lead to resource leaks or connection pool exhaustion.

### Dynamic Tool Creation

For the retrieve-as-tool mode, a DynamicTool is created that exposes vector store functionality:

**const** vectorStoreTool \= **new** DynamicTool({  
  name: toolName,  
  description: toolDescription,  
  func: **async** (input) **\=\>** {  
    *// Search vector store with input*  
    *// ...*  
  },  
});

## Performance Considerations

1. **Resource Management**: Each operation properly handles resource cleanup with releaseVectorStoreClient.

2. **Batched Processing**: The insert operation processes documents in configurable batches. In node version 1.1+, a single embedding operation is performed for all documents in a batch, significantly improving performance by reducing API calls.

3. **Metadata Filtering**: Filters can be applied during search operations to reduce result sets.

4. **Execution Cancellation**: The code checks for cancellation signals to stop processing when needed.

---

## packages/@n8n/utils/README.md

# @n8n/utils

A collection of utility functions that provide common functionality for both Front-End and Back-End packages.

## Table of Contents

* [Features](#bookmark=id.arg4vtox1f2o)

* [Contributing](#bookmark=id.50zqzlbci1z3)

* [License](#bookmark=id.vobisz87pirh)

## Features

* **Reusable Logic**: Build complex, stateful functionality using modular composable functions that you can easily reuse.

* **Consistent Patterns**: Enjoy a unified approach across n8n packages, making integration and maintenance a breeze.

* **Type-Safe & Reliable**: Benefit from TypeScript support, which improves the developer experience and code robustness.

* **Universal Functionality**: Designed to work seamlessly on both the front-end and back-end.

* **Easily Testable**: A modular design that simplifies testing, maintenance, and rapid development.

## Contributing

For more details, please read our [CONTRIBUTING.md](http://CONTRIBUTING.md).

## License

For more details, please read our [LICENSE.md](http://LICENSE.md).

---

## packages/@n8n/utils/src/search/snapshots/README.md

# Search snapshots

This directory contains snapshots containing real data fed into the sublimeSearch function.

These were obtained via console.log(items) right before the sublimeSearch call in editor-ui (currently in packages/frontend/editor-ui/src/components/Node/NodeCreator/utils.ts) Which is triggered by typing in the search bar in varying states of the application:

* toplevel: From an empty workflow (so missing e.g. tools)

After typing in the search bar you should see an object in the console you can copy via \`Right Click-\>Copy Object” which will cleanly paste to json.

**Please use Chrome for capturing these \- the recovered object in Chrome is about 3x larger than in Firefox due to Firefox dropping some nested values**

---

## packages/core/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n-core

Core components for n8n

npm install n8n-core

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/extensions/insights/README.md

# @n8n/n8n-extension-insights

---

## packages/frontend/@n8n/chat/README.md

# n8n Chat

This is an embeddable Chat widget for n8n. It allows the execution of AI-Powered Workflows through a Chat window.

**Windowed Example** ![n8n Chat Windowed][image4]

**Fullscreen Example** ![n8n Chat Fullscreen][image5]

## Prerequisites

Create a n8n workflow which you want to execute via chat. The workflow has to be triggered using a **Chat Trigger** node.

Open the **Chat Trigger** node and add your domain to the **Allowed Origins (CORS)** field. This makes sure that only requests from your domain are accepted.

[See example workflow](https://github.com/n8n-io/n8n/blob/master/packages/%40n8n/chat/resources/workflow.json)

Make sure the workflow is **Active.**

### How it works

Each Chat request is sent to the n8n Webhook endpoint, which then sends back a response.

Each request is accompanied by an action query parameter, where action can be one of: \- loadPreviousSession \- When the user opens the Chatbot again and the previous chat session should be loaded \- sendMessage \- When the user sends a message

## Installation

Open the **Webhook** node and replace YOUR\_PRODUCTION\_WEBHOOK\_URL with your production URL. This is the URL that the Chat widget will use to send requests to.

### a. CDN Embed

Add the following code to your HTML page.

\<**link** href\="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel\="stylesheet" /\>  
\<**script** type="module"\>  
    **import** { createChat } **from** 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

    createChat({  
        webhookUrl: 'YOUR\_PRODUCTION\_WEBHOOK\_URL'  
    });  
\</**script**\>

### b. Import Embed

Install and save n8n Chat as a production dependency.

npm install @n8n/chat

Import the CSS and use the createChat function to initialize your Chat window.

**import** '@n8n/chat/style.css';  
**import** { createChat } **from** '@n8n/chat';

createChat({  
    webhookUrl: 'YOUR\_PRODUCTION\_WEBHOOK\_URL'  
});

##### Vue.js

\<**script** lang\="ts" setup\>  
*// App.vue*  
**import** { onMounted } **from** 'vue';  
**import** '@n8n/chat/style.css';  
**import** { createChat } **from** '@n8n/chat';

onMounted(() **\=\>** {  
    createChat({  
        webhookUrl: 'YOUR\_PRODUCTION\_WEBHOOK\_URL'  
    });  
});  
\</**script**\>  
\<**template**\>  
    \<**div**\>\</**div**\>  
\</**template**\>

##### React

// App.tsx  
import { useEffect } from 'react';  
import '@n8n/chat/style.css';  
import { createChat } from '@n8n/chat';

export const App \= () \=\> {  
    useEffect(() \=\> {  
        createChat({  
            webhookUrl: 'YOUR\_PRODUCTION\_WEBHOOK\_URL'  
        });  
    }, \[\]);

    return (\<div\>\</div\>);  
};

## Options

The default options are:

createChat({  
    webhookUrl: '',  
    webhookConfig: {  
        method: 'POST',  
        headers: {}  
    },  
    target: '\#n8n-chat',  
    mode: 'window',  
    chatInputKey: 'chatInput',  
    chatSessionKey: 'sessionId',  
    loadPreviousSession: **true**,  
    metadata: {},  
    showWelcomeScreen: **false**,  
    defaultLanguage: 'en',  
    initialMessages: \[  
        'Hi there\! 👋',  
        'My name is Nathan. How can I assist you today?'  
    \],  
    i18n: {  
        en: {  
            title: 'Hi there\! 👋',  
            subtitle: "Start a chat. We're here to help you 24/7.",  
            footer: '',  
            getStarted: 'New Conversation',  
            inputPlaceholder: 'Type your question..',  
        },  
    },  
});

### webhookUrl

* **Type**: string

* **Required**: true

* **Examples**:

  * https://yourname.app.n8n.cloud/webhook/513107b3-6f3a-4a1e-af21-659f0ed14183

  * http://localhost:5678/webhook/513107b3-6f3a-4a1e-af21-659f0ed14183

* **Description**: The URL of the n8n Webhook endpoint. Should be the production URL.

### webhookConfig

* **Type**: { method: string, headers: Record\<string, string\> }

* **Default**: { method: 'POST', headers: {} }

* **Description**: The configuration for the Webhook request.

### target

* **Type**: string

* **Default**: '\#n8n-chat'

* **Description**: The CSS selector of the element where the Chat window should be embedded.

### mode

* **Type**: 'window' | 'fullscreen'

* **Default**: 'window'

* **Description**: The render mode of the Chat window.

  * In window mode, the Chat window will be embedded in the target element as a chat toggle button and a fixed size chat window.

  * In fullscreen mode, the Chat will take up the entire width and height of its target container.

### showWelcomeScreen

* **Type**: boolean

* **Default**: false

* **Description**: Whether to show the welcome screen when the Chat window is opened.

### chatInputKey

* **Type**: string

* **Default**: 'chatInput'

* **Description**: The key to use for sending the chat input for the AI Agent node.

### chatSessionKey

* **Type**: string

* **Default**: 'sessionId'

* **Description**: The key to use for sending the chat history session ID for the AI Memory node.

### loadPreviousSession

* **Type**: boolean

* **Default**: true

* **Description**: Whether to load previous messages (chat context).

### defaultLanguage

* **Type**: string

* **Default**: 'en'

* **Description**: The default language of the Chat window. Currently only en is supported.

### i18n

* **Type**: { \[key: string\]: Record\<string, string\> }

* **Description**: The i18n configuration for the Chat window. Currently only en is supported.

### initialMessages

* **Type**: string\[\]

* **Description**: The initial messages to be displayed in the Chat window.

### allowFileUploads

* **Type**: Ref\<boolean\> | boolean

* **Default**: false

* **Description**: Whether to allow file uploads in the chat. If set to true, users will be able to upload files through the chat interface.

### allowedFilesMimeTypes

* **Type**: Ref\<string\> | string

* **Default**: ''

* **Description**: A comma-separated list of allowed MIME types for file uploads. Only applicable if allowFileUploads is set to true. If left empty, all file types are allowed. For example: 'image/\*,application/pdf'.

## Customization

The Chat window is entirely customizable using CSS variables.

***:root*** {  
    \--chat--color-primary: \#e74266;  
    \--chat--color-primary-shade-50: \#db4061;  
    \--chat--color-primary-shade-100: \#cf3c5c;  
    \--chat--color-secondary: \#20b69e;  
    \--chat--color-secondary-shade-50: \#1ca08a;  
    \--chat--color-white: \#ffffff;  
    \--chat--color-light: \#f2f4f8;  
    \--chat--color-light-shade-50: \#e6e9f1;  
    \--chat--color-light-shade-100: \#c2c5cc;  
    \--chat--color-medium: \#d2d4d9;  
    \--chat--color-dark: \#101330;  
    \--chat--color-disabled: \#777980;  
    \--chat--color-typing: \#404040;

    \--chat--spacing: 1rem;  
    \--chat--border-radius: 0.25rem;  
    \--chat--transition-duration: 0.15s;

    \--chat--window--width: 400px;  
    \--chat--window--height: 600px;

    \--chat--header-height: auto;  
    \--chat--header--padding: var(\--chat--spacing);  
    \--chat--header--background: var(\--chat--color-dark);  
    \--chat--header--color: var(\--chat--color-light);  
    \--chat--header--border-top: none;  
    \--chat--header--border-bottom: none;  
    \--chat--header--border-bottom: none;  
    \--chat--header--border-bottom: none;  
    \--chat--heading--font-size: 2em;  
    \--chat--header--color: var(\--chat--color-light);  
    \--chat--subtitle--font-size: inherit;  
    \--chat--subtitle--line-height: 1.8;

    \--chat--textarea--height: 50px;

    \--chat--message--font-size: 1rem;  
    \--chat--message--padding: var(\--chat--spacing);  
    \--chat--message--border-radius: var(\--chat--border-radius);  
    \--chat--message-line-height: 1.8;  
    \--chat--message--bot--background: var(\--chat--color-white);  
    \--chat--message--bot--color: var(\--chat--color-dark);  
    \--chat--message--bot--border: none;  
    \--chat--message--user--background: var(\--chat--color-secondary);  
    \--chat--message--user--color: var(\--chat--color-white);  
    \--chat--message--user--border: none;  
    \--chat--message--pre--background: rgba(0, 0, 0, 0.05);

    \--chat--toggle--background: var(\--chat--color-primary);  
    \--chat--toggle--hover--background: var(\--chat--color-primary-shade-50);  
    \--chat--toggle--active--background: var(\--chat--color-primary-shade-100);  
    \--chat--toggle--color: var(\--chat--color-white);  
    \--chat--toggle--size: 64px;  
}

## Caveats

### Fullscreen mode

In fullscreen mode, the Chat window will take up the entire width and height of its target container. Make sure that the container has a set width and height.

html,  
body,  
\#n8n-chat {  
    **width**: 100%;  
    **height**: 100%;  
}

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/frontend/@n8n/composables/README.md

# @n8n/composables

A collection of Vue composables that provide common functionality across n8n’s Front-End packages.

## Table of Contents

* [Features](#bookmark=id.arg4vtox1f2o)

* [Contributing](#bookmark=id.50zqzlbci1z3)

* [License](#bookmark=id.vobisz87pirh)

## Features

* **Reusable Logic**: Encapsulate complex stateful logic into composable functions.

* **Consistency**: Ensure consistent patterns and practices across our Vue components.

* **Extensible**: Easily add new composables as our project grows.

* **Optimized**: Fully compatible with the Composition API.

## Contributing

For more details, please read our [CONTRIBUTING.md](http://CONTRIBUTING.md).

## License

For more details, please read our [LICENSE.md](http://LICENSE.md).

---

## packages/frontend/@n8n/design-system/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# @n8n/design-system

A component system for [n8n](https://n8n.io) using Storybook to preview.

## Project setup

pnpm install

### Compiles and hot-reloads for development

pnpm storybook

### Build static pages

pnpm build:storybook

### Run your unit tests

pnpm test:unit

### Lints and fixes files

pnpm lint

### Build css files

pnpm build:theme

### Monitor theme files and build any changes

pnpm watch:theme

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/frontend/@n8n/stores/README.md

# @n8n/stores

A collection of Pinia stores that provide common data-related functionality across n8n’s Front-End packages.

## Table of Contents

* [Features](#bookmark=id.arg4vtox1f2o)

* [Contributing](#bookmark=id.50zqzlbci1z3)

* [License](#bookmark=id.vobisz87pirh)

## Features

* **Composable State Management**: Share and reuse stateful logic across multiple Vue components using Pinia stores.

* **Consistent Patterns**: Promote uniform state handling and best practices throughout the front-end codebase.

* **Easy Extensibility**: Add or modify stores as project requirements evolve, supporting scalable development.

* **Composition API Support**: Designed to work seamlessly with Vue’s Composition API for modern, maintainable code.

## Contributing

For more details, please read our [CONTRIBUTING.md](http://CONTRIBUTING.md).

## License

For more details, please read our [LICENSE.md](http://LICENSE.md).

---

## packages/frontend/editor-ui/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n-editor-ui

The UI to create and update n8n workflows

npm install n8n \-g

## Project setup

pnpm install

### Compiles and hot-reloads for development

pnpm serve

### Compiles and minifies for production

pnpm build

### Run your tests

pnpm test

### Lints and fixes files

pnpm lint

### Run your end-to-end tests

pnpm test:e2e

### Run your unit tests

pnpm test:unit

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/frontend/editor-ui/src/plugins/i18n/docs/README.md

# i18n in n8n

## Scope

n8n allows for internalization of the majority of UI text:

* base text, e.g. menu display items in the left-hand sidebar menu,

* node text, e.g. parameter display names and placeholders in the node view,

* credential text, e.g. parameter display names and placeholders in the credential modal,

* header text, e.g. node display names and descriptions at various spots.

Currently, n8n does *not* allow for internalization of:

* messages from outside the editor-ui package, e.g. No active database connection,

* strings in certain Vue components, e.g. date time picker

* node subtitles, e.g. create: user or getAll: post below the node name on the canvas,

* new version notification contents in the updates panel, e.g. Includes node enhancements, and

* options that rely on loadOptionsMethod.

Pending functionality:

* Search in nodes panel by translated node name

* UI responsiveness to differently sized strings

* Locale-aware number formatting

## Locale identifiers

A **locale identifier** is a language code compatible with the [Accept-Language header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language), e.g. de (German), es (Spanish), ja (Japanese). Regional variants of locale identifiers, such as \-AT in de-AT, are *not* supported. For a list of all locale identifiers, see [column 639-1 in this table](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

By default, n8n runs in the en (English) locale. To have run it in a different locale, set the N8N\_DEFAULT\_LOCALE environment variable to a locale identifier. When running in a non-en locale, n8n will display UI strings for the selected locale and fall back to en for any untranslated strings.

export N8N\_DEFAULT\_LOCALE=de  
pnpm start

Output:

Initializing n8n process  
n8n ready on 0.0.0.0, port 5678  
Version: 0.156.0  
Locale: de

Editor is now accessible via:  
http://localhost:5678/

Press "o" to open in Browser.

## Base text

Base text is rendered with no dependencies, i.e. base text is fixed and does not change in any circumstances. Base text is supplied by the user in one file per locale in the /frontend/editor-ui package.

### Locating base text

The base text file for each locale is located at /packages/frontend/editor-ui/src/plugins/i18n/locales/ and is named {localeIdentifier}.json. Keys in the base text file can be Vue component dirs, Vue component names, and references to symbols in those Vue components. These keys are added by the team as the UI is modified or expanded.

{  
    "nodeCreator.categoryNames.analytics": "🇩🇪 Analytics",  
    "nodeCreator.categoryNames.communication": "🇩🇪 Communication",  
    "nodeCreator.categoryNames.coreNodes": "🇩🇪 Core Nodes"  
}

### Translating base text

1. Select a new locale identifier, e.g. de, copy the en JSON base text file with a new name:

cp ./packages/frontend/editor-ui/src/plugins/i18n/locales/en.json ./packages/frontend/editor-ui/src/plugins/i18n/locales/de.json

2. Find in the UI a string to translate, and search for it in the newly created base text file. Alternatively, find in /frontend/editor-ui a call to i18n.baseText(key), e.g. i18n.baseText('workflowActivator.deactivateWorkflow'), and take note of the key and find it in the newly created base text file.

**Note**: If you cannot find a string in the new base text file, either it does not belong to base text (i.e., the string might be part of header text, credential text, or node text), or the string might belong to the backend, where i18n is currently unsupported.

3. Translate the string value \- do not change the key. In the examples below, a string starting with 🇩🇪 stands for a string translated from English into German.

As an optional final step, remove any untranslated strings from the new base text file. Untranslated strings in the new base text file will trigger a fallback to the en base text file.

For information about **interpolation** and **reusable base text**, refer to the [Addendum](http://./ADDENDUM.md).

## Dynamic text

Dynamic text relies on data specific to each node and credential:

* headerText and nodeText in the **node translation file**

* credText in the **credential translation file**

### Locating dynamic text

#### *Locating the credential translation file*

A credential translation file is placed at /nodes-base/credentials/translations/{localeIdentifier}

credentials  
    └── translations  
        └── de  
            ├── githubApi.json  
            └── githubOAuth2Api.json

Every credential must have its own credential translation file.

The name of the credential translation file must be sourced from the credential’s description.name property:

**export** **class** GithubApi **implements** ICredentialType {  
    name \= 'githubApi'; *// to use for credential translation file*  
    displayName \= 'Github API';  
    documentationUrl \= 'github';  
    properties: INodeProperties\[\] \= \[

#### *Locating the node translation file*

A node translation file is placed at /nodes-base/nodes/{node}/translations/{localeIdentifier}

GitHub  
    ├── GitHub.node.ts  
    ├── GitHubTrigger.node.ts  
    └── translations  
        └── de  
            ├── github.json  
            └── githubTrigger.json

Every node must have its own node translation file.

For information about nodes in **versioned dirs** and **grouping dirs**, refer to the [Addendum](http://./ADDENDUM.md).

The name of the node translation file must be sourced from the node’s description.name property:

**export** **class** Github **implements** INodeType {  
    description: INodeTypeDescription \= {  
        displayName: 'GitHub',  
        name: 'github', *// to use for node translation file name*  
        icon: 'file:github.svg',  
        group: \['input'\],

### Translating dynamic text

#### *Translating the credential translation file*

**Note**: All translation keys are optional. Missing translation values trigger a fallback to the en locale strings.

A credential translation file, e.g. githubApi.json is an object containing keys that match the credential parameter names:

**export** **class** GithubApi **implements** ICredentialType {  
    name \= 'githubApi';  
    displayName \= 'Github API';  
    documentationUrl \= 'github';  
    properties: INodeProperties\[\] \= \[  
        {  
            displayName: 'Github Server',  
            name: 'server', *// key to use in translation*  
            type: 'string',  
            **default**: 'https://api.github.com',  
            description: 'The server to connect to. Only has to be set if Github Enterprise is used.',  
        },  
        {  
            displayName: 'User',  
            name: 'user', *// key to use in translation*  
            type: 'string',  
            **default**: '',  
        },  
        {  
            displayName: 'Access Token',  
            name: 'accessToken', *// key to use in translation*  
            type: 'string',  
            **default**: '',  
        },  
    \];  
}

The object for each node credential parameter allows for the keys displayName, description, and placeholder.

{  
    "server.displayName": "🇩🇪 Github Server",  
    "server.description": "🇩🇪 The server to connect to. Only has to be set if Github Enterprise is used.",  
    "user.placeholder": "🇩🇪 Hans",  
    "accessToken.placeholder": "🇩🇪 123"  
}

Only existing parameters are translatable. If a credential parameter does not have a description in the English original, adding a translation for that non-existing parameter will not result in the translation being displayed \- the parameter will need to be added in the English original first.

#### *Translating the node translation file*

**Note**: All keys are optional. Missing translations trigger a fallback to the en locale strings.

Each node translation file is an object that allows for two keys, header and nodeView, which are the *sections* of each node translation.

The header section points to an object that may contain only two keys, displayName and description, matching the node’s description.displayName and description.description.

**export** **class** Github **implements** INodeType {  
    description: INodeTypeDescription \= {  
        displayName: 'GitHub', *// key to use in translation*  
        description: 'Consume GitHub API', *// key to use in translation*  
        name: 'github',  
        icon: 'file:github.svg',  
        group: \['input'\],  
        version: 1,

{  
    "header": {  
        "displayName": "🇩🇪 GitHub",  
        "description": "🇩🇪 Consume GitHub API"  
    }  
}

Header text is used wherever the node’s display name and description are needed:


 

In turn, the nodeView section points to an object containing translation keys that match the node’s operational parameters, found in the \*.node.ts and also found in \*Description.ts files in the same dir.

**export** **class** Github **implements** INodeType {  
    description: INodeTypeDescription \= {  
        displayName: 'GitHub',  
        name: 'github',  
        properties: \[  
            {  
                displayName: 'Resource',  
                name: 'resource', *// key to use in translation*  
                type: 'options',  
                options: \[\],  
                **default**: 'issue',  
                description: 'The resource to operate on.',  
            },

{  
    "nodeView.resource.displayName": "🇩🇪 Resource"  
}

A node parameter allows for different translation keys depending on parameter type.

#### *string, number and boolean parameters*

Allowed keys: displayName, description, placeholder

{  
    displayName: 'Repository Owner',  
    name: 'owner', *// key to use in translation*  
    type: 'string',  
    required: **true**,  
    placeholder: 'n8n-io',  
    description: 'Owner of the repository.',  
},

{  
    "nodeView.owner.displayName": "🇩🇪 Repository Owner",  
    "nodeView.owner.placeholder": "🇩🇪 n8n-io",  
    "nodeView.owner.description": "🇩🇪 Owner of the repository"  
}

#### *options parameter*

Allowed keys: displayName, description, placeholder

Allowed subkeys: options.{optionName}.displayName and options.{optionName}.description.

{  
    displayName: 'Resource',  
    name: 'resource',  
    type: 'options',  
    options: \[  
        {  
            name: 'File',  
            value: 'file', *// key to use in translation*  
        },  
        {  
            name: 'Issue',  
            value: 'issue', *// key to use in translation*  
        },  
    \],  
    **default**: 'issue',  
    description: 'Resource to operate on',  
},

{  
    "nodeView.resource.displayName": "🇩🇪 Resource",  
    "nodeView.resource.description": "🇩🇪 Resource to operate on",  
    "nodeView.resource.options.file.name": "🇩🇪 File",  
    "nodeView.resource.options.issue.name": "🇩🇪 Issue"  
}

For nodes whose credentials may be used in the HTTP Request node, an additional option Custom API Call is injected into the Resource and Operation parameters. Use the \_\_CUSTOM\_API\_CALL\_\_ key to translate this additional option.

{  
    "nodeView.resource.options.file.name": "🇩🇪 File",  
    "nodeView.resource.options.issue.name": "🇩🇪 Issue",  
    "nodeView.resource.options.\_\_CUSTOM\_API\_CALL\_\_.name": "🇩🇪 Custom API Call"  
}

#### *collection and fixedCollection parameters*

Allowed keys: displayName, description, placeholder, multipleValueButtonText

Example of collection parameter:

{  
    displayName: 'Labels',  
    name: 'labels', *// key to use in translation*  
    type: 'collection',  
    typeOptions: {  
        multipleValues: **true**,  
        multipleValueButtonText: 'Add Label',  
    },  
    displayOptions: {  
        show: {  
            operation: \[  
                'create',  
            \],  
            resource: \[  
                'issue',  
            \],  
        },  
    },  
    **default**: { 'label': '' },  
    options: \[  
        {  
            displayName: 'Label',  
            name: 'label', *// key to use in translation*  
            type: 'string',  
            **default**: '',  
            description: 'Label to add to issue',  
        },  
    \],  
},

{  
    "nodeView.labels.displayName": "🇩🇪 Labels",  
    "nodeView.labels.multipleValueButtonText": "🇩🇪 Add Label",  
    "nodeView.labels.options.label.displayName": "🇩🇪 Label",  
    "nodeView.labels.options.label.description": "🇩🇪 Label to add to issue",  
    "nodeView.labels.options.label.placeholder": "🇩🇪 Some placeholder"  
}

Example of fixedCollection parameter:

{  
    displayName: 'Additional Parameters',  
    name: 'additionalParameters',  
    placeholder: 'Add Parameter',  
    description: 'Additional fields to add.',  
    type: 'fixedCollection',  
    **default**: {},  
    displayOptions: {  
        show: {  
            operation: \[  
                'create',  
                'delete',  
                'edit',  
            \],  
            resource: \[  
                'file',  
            \],  
        },  
    },  
    options: \[  
        {  
            name: 'author',  
            displayName: 'Author',  
            values: \[  
                {  
                    displayName: 'Name',  
                    name: 'name',  
                    type: 'string',  
                    **default**: '',  
                    description: 'Name of the author of the commit',  
                    placeholder: 'John',  
                },  
                {  
                    displayName: 'Email',  
                    name: 'email',  
                    type: 'string',  
                    **default**: '',  
                    description: 'Email of the author of the commit',  
                    placeholder: 'john@email.com',  
                },  
            \],  
        },  
    \],  
}

{  
    "nodeView.additionalParameters.displayName": "🇩🇪 Additional Parameters",  
    "nodeView.additionalParameters.placeholder": "🇩🇪 Add Field",  
    "nodeView.additionalParameters.options.author.displayName": "🇩🇪 Author",  
    "nodeView.additionalParameters.options.author.values.name.displayName": "🇩🇪 Name",  
    "nodeView.additionalParameters.options.author.values.name.description": "🇩🇪 Name of the author of the commit",  
    "nodeView.additionalParameters.options.author.values.name.placeholder": "🇩🇪 Jan",  
    "nodeView.additionalParameters.options.author.values.email.displayName": "🇩🇪 Email",  
    "nodeView.additionalParameters.options.author.values.email.description": "🇩🇪 Email of the author of the commit",  
    "nodeView.additionalParameters.options.author.values.email.placeholder": "🇩🇪 jan@n8n.io"  
}

For information on **reusable dynamic text**, refer to the [Addendum](http://./ADDENDUM.md).

# Building translations

## Base text

When translating a base text file at /packages/frontend/editor-ui/src/plugins/i18n/locales/{localeIdentifier}.json:

1. Open a terminal:

export N8N\_DEFAULT\_LOCALE\=de  
pnpm start

2. Open another terminal:

export N8N\_DEFAULT\_LOCALE\=de  
cd packages/frontend/editor-ui  
pnpm dev

Changing the base text file will trigger a rebuild of the client at http://localhost:8080.

## Dynamic text

When translating a dynamic text file at /packages/nodes-base/nodes/{node}/translations/{localeIdentifier}/{node}.json,

1. Open a terminal:

export N8N\_DEFAULT\_LOCALE\=de  
pnpm start

2. Open another terminal:

export N8N\_DEFAULT\_LOCALE\=de  
cd packages/nodes-base  
pnpm n8n-generate-translations  
pnpm watch

After changing the dynamic text file:

1. Stop and restart the first terminal.

2. Refresh the browser at http://localhost:5678

If a headerText section was changed, re-run pnpm n8n-generate-translations in /nodes-base.

**Note**: To translate base and dynamic text simultaneously, run three terminals following the steps from both sections (first terminal running only once) and browse http://localhost:8080.

---

## packages/node-dev/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n-node-dev

Currently very simple and not very sophisticated CLI which makes it easier to create credentials and nodes in TypeScript for n8n.

npm install n8n-node-dev \-g

## Contents

* [Usage](#bookmark=id.5c1v7wq6i54b)

* [Commands](#bookmark=id.haa4tdtm8ggm)

* [Create a node](#bookmark=id.o993ik17j53d)

  * [Node Type](#bookmark=id.d2iu082vzzmd)

  * [Node Type Description](#bookmark=id.1f12pj465qxv)

  * [Node Properties](#bookmark=id.5mu1dpb3rcro)

  * [Node Property Options](#bookmark=id.tq6g3be1u1br)

* [License](#bookmark=id.vobisz87pirh)

## Usage

The commandline tool can be started with n8n-node-dev \<COMMAND\>

## Commands

The following commands exist:

### build

Builds credentials and nodes in the current folder and copies them into the n8n custom extension folder (\~/.n8n/custom/) unless destination path is overwritten with \--destination \<FOLDER\_PATH\>

When “–watch” gets set it starts in watch mode and automatically builds and copies files whenever they change. To stop press “ctrl \+ c”.

### new

Creates new basic credentials or node of the selected type to have a first starting point.

## Create a node

The easiest way to create a new node is via the “n8n-node-dev” cli. It sets up all the basics.

A n8n node is a JavaScript file (normally written in TypeScript) which describes some basic information (like name, description, …) and also at least one method. Depending on which method gets implemented defines if it is a regular-, trigger- or webhook-node.

A simple regular node which:

* defines one node property

* sets its value to all items it receives

would look like this:

File named: MyNode.node.ts

**import** {  
    IExecuteFunctions,  
    INodeExecutionData,  
    INodeType,  
    INodeTypeDescription,  
} **from** 'n8n-workflow';

**export** **class** MyNode **implements** INodeType {  
    description: INodeTypeDescription \= {  
        displayName: 'My Node',  
        name: 'myNode',  
        group: \['transform'\],  
        version: 1,  
        description: 'Adds "myString" on all items to defined value.',  
        defaults: {  
            name: 'My Node',  
            color: '\#772244',  
        },  
        inputs: \['main'\],  
        outputs: \['main'\],  
        properties: \[  
            *// Node properties which the user gets displayed and*  
            *// can change on the node.*  
            {  
                displayName: 'My String',  
                name: 'myString',  
                type: 'string',  
                **default**: '',  
                placeholder: 'Placeholder value',  
                description: 'The description text',  
            }  
        \]  
    };

    **async** execute(**this**: IExecuteFunctions): Promise\<INodeExecutionData\[\]\[\]\> {

        **const** items \= **this**.getInputData();

        **let** item: INodeExecutionData;  
        **let** myString: string;

        *// Itterates over all input items and add the key "myString" with the*  
        *// value the parameter "myString" resolves to.*  
        *// (This could be a different value for each item in case it contains an expression)*  
        **for** (**let** itemIndex \= 0; itemIndex \< items.length; itemIndex\++) {  
            myString \= **this**.getNodeParameter('myString', itemIndex, '') **as** string;  
            item \= items\[itemIndex\];

            item.json\['myString'\] \= myString;  
        }

        **return** \[items\];

    }  
}

The “description” property has to be set on all nodes because it contains all the base information. Additionally all nodes have to have exactly one of the following methods defined which contains the actual logic:

**Regular node**

Method is called when the workflow gets executed

* execute: Executed once no matter how many items

By default, execute should always be used, especially when creating a third-party integration. The reason for this is that it provides much more flexibility and allows, for example, returning a different number of items than it received as input. This becomes crucial when a node needs to query data such as *return all users*. In such cases, the node typically receives only one input item but returns as many items as there are users. Therefore, when in doubt, it is recommended to use execute\!

**Trigger node**

Method is called once when the workflow gets activated. It can then trigger workflow runs and provide the necessary data by itself.

* trigger

**Webhook node**

Method is called when webhook gets called.

* webhook

### Node Type

Property overview

* **description** \[required\]: Describes the node like its name, properties, hooks, … see Node Type Description bellow.

* **execute** \[optional\]: Method is called when the workflow gets executed (once).

* **hooks** \[optional\]: The hook methods.

* **methods** \[optional\]: Additional methods. Currently only “loadOptions” exists which allows loading options for parameters from external services

* **trigger** \[optional\]: Method is called once when the workflow gets activated.

* **webhook** \[optional\]: Method is called when webhook gets called.

* **webhookMethods** \[optional\]: Methods to setup webhooks on external services.

### Node Type Description

The following properties can be set in the node description:

* **credentials** \[optional\]: Credentials the node requests access to

* **defaults** \[required\]: Default “name” and “color” to set on node when it gets created

* **displayName** \[required\]: Name to display users in Editor UI

* **description** \[required\]: Description to display users in Editor UI

* **group** \[required\]: Node group for example “transform” or “trigger”

* **hooks** \[optional\]: Methods to execute at different points in time like when the workflow gets activated or deactivated

* **icon** \[optional\]: Icon to display (can be an icon or a font awesome icon)

* **inputs** \[required\]: Types of inputs the node has (currently only “main” exists) and the amount

* **outputs** \[required\]: Types of outputs the node has (currently only “main” exists) and the amount

* **outputNames** \[optional\]: In case a node has multiple outputs, names can be set that users know what data to expect

* **maxNodes** \[optional\]: If an unlimited number of nodes of that type cannot exist in a workflow, the max-amount can be specified

* **name** \[required\]: Name of the node (for n8n to use internally, in camelCase)

* **properties** \[required\]: Properties which get displayed in the Editor UI and can be set by the user

* **subtitle** \[optional\]: Text which should be displayed underneath the name of the node in the Editor UI (can be an expression)

* **version** \[required\]: Version of the node. Currently always “1” (integer). For future usage, does not get used yet

* **webhooks** \[optional\]: Webhooks the node should listen to

### Node Properties

The following properties can be set in the node properties:

* **default** \[required\]: Default value of the property

* **description** \[required\]: Description that is displayed to users in the Editor UI

* **displayName** \[required\]: Name that is displayed to users in the Editor UI

* **displayOptions** \[optional\]: Defines logic to decide if a property should be displayed or not

* **name** \[required\]: Name of the property (for n8n to use internally, in camelCase)

* **options** \[optional\]: The options the user can select when type of property is “collection”, “fixedCollection” or “options”

* **placeholder** \[optional\]: Placeholder text that is displayed to users in the Editor UI

* **type** \[required\]: Type of the property. If it is for example a “string”, “number”, …

* **typeOptions** \[optional\]: Additional options for type. Like for example the min or max value of a number

* **required** \[optional\]: Defines if the value has to be set or if it can stay empty

### Node Property Options

The following properties can be set in the node property options:

All properties are optional. However, most only work when the node-property is of a specfic type.

* **alwaysOpenEditWindow** \[type: json\]: If set then the “Editor Window” will always open when the user tries to edit the field. Helpful if long text is typically used in the property

* **loadOptionsMethod** \[type: options\]: Method to use to load options from an external service

* **maxValue** \[type: number\]: Maximum value of the number

* **minValue** \[type: number\]: Minimum value of the number

* **multipleValues** \[type: all\]: If set the property gets turned into an Array and the user can add multiple values

* **multipleValueButtonText** \[type: all\]: Custom text for add button in case “multipleValues” were set

* **numberPrecision** \[type: number\]: The precision of the number. By default, it is “0” and will only allow integers

* **password** \[type: string\]: If a password field should be displayed (normally only used by credentials because all node data is not encrypted and gets saved in clear-text)

* **rows** \[type: string\]: Number of rows the input field should have. By default it is “1”

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/nodes-base/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n-nodes-base

The nodes which are included by default in n8n

npm install n8n-nodes-base \-g

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## packages/nodes-base/nodes/Stripe/README.md

All Stripe webhook events are taken from docs: [https://stripe.com/docs/api/events/types\#event\_types](https://stripe.com/docs/api/events/types#event_types)

To get the entire list of events as a JS array, scrape the website:

1. manually add the id \#event-types to \<ul\> that contains all event types

2. copy-paste the function in the JS console

3. the result is copied into in the clipboard

4. paste the prepared array in StripeTrigger.node.ts

types \= \[\];  
$$('ul\#event-types li').forEach((el) **\=\>** {  
    **const** value \= el.querySelector('.method-list-item-label-name').innerText;

    types.push({  
        name: value  
            .replace(/(\\.|\_)/, ' ')  
            .split(' ')  
            .map((s) **\=\>** s.charAt(0).toUpperCase() \+ s.substring(1))  
            .join(' '),  
        value,  
        description: el.querySelector('.method-list-item-description').innerText,  
    });  
});  
copy(types);

---

## packages/workflow/README.md

![n8n.io - Workflow Automation][image3]

*n8n.io \- Workflow Automation*

# n8n-workflow

Workflow base code for n8n

npm install n8n-workflow

## License

You can find the license information [here](https://github.com/n8n-io/n8n/blob/master/README.md#license)

---

## test-workflows/README.md

# test-workflows

n8n workflows used for testing nodes

---

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAisAAAM8CAYAAACWCuC/AACAAElEQVR4Xuydd7wV1bn33z/ez703770pJkZsKMUCimLDLooIMSbGGDXGGFNMN0YTr1FjNLH3HsUYe8WKFAVBkA4qReyoiIDSlaooCDzvfmbzbNd5ZmbvOZx99pkN39/n8/2cM2utWdNn/Wa1/X8EIYQQQijH+j8+ACGEEEIoT8KsIIQQQijXwqwghBBCKNfCrCCEEEIo18KsIIQQQijXwqwghBBCKNfKZFaGDBsLAAAAUDXemPqutxupqmhWJr30epTp3y+4VjbborNssulOAAAAAOtF124/iDyFegv1GFlU1qyY+/EbAgAAAGgKalrUYyxZsszbj5gqmhV1P34DAAAAAE1FPUaW5qCKZoWmHwAAAGgO1GM8+9w4bz9iqmhWfMYAAAAA1UK9RiVhVgAAAKDFwKwAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrAAAAECuwawAAABArsGsAAAAQK7BrABsQHTceT857LDDpHWbPWNxAAD1CmYFYAOiTfsu0vXg7tK9ew9pv/3esXgAgHoEswJQJ8x+eFdZ/sxe8tyVHeSg3XduELfVNnvINzfftbS8977dpGfPntK2YF58PgAA9QZmBaAO2HfXnWTVyANFxh8sK57pLB/c275B/A4d9pEDDzy01PzTasvOst/+h0q3bj1ky9Z7xPIDAKgnMCsAOWHnHXeV3ud2lAWPdJBRV7ZrENfrpFby6ZAuIuO6iozdT9aM3FMmXrq57NupYylN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>

[image5]: <data:image/png;base64,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>