[](https://github.com/n8n-io/n8n-docs/edit/main/docs/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatollama/common-issues.md "Edit this page")

# Ollama Chat Model node common issues[#](#ollama-chat-model-node-common-issues "Permanent link")

Here are some common errors and issues with the [Ollama Chat Model node](../) and steps to resolve or troubleshoot them.

## Processing parameters[#](#processing-parameters "Permanent link")

The Ollama Chat Model node is a [sub-node](../../../../../../glossary/#sub-node-n8n). Sub-nodes behave differently than other nodes when processing multiple items using expressions.

Most nodes, including [root nodes](../../../../../../glossary/#root-node-n8n), take any number of items as input, process these items, and output the results. You can use expressions to refer to input items, and the node resolves the expression for each item in turn. For example, given an input of five name values, the expression `{{ $json.name }}` resolves to each name in turn.

In sub-nodes, the expression always resolves to the first item. For example, given an input of five name values, the expression `{{ $json.name }}` always resolves to the first name.

## Can't connect to a remote Ollama instance[#](#cant-connect-to-a-remote-ollama-instance "Permanent link")

The Ollama Chat Model node is only designed to connect to a locally hosted Ollama instance. It doesn't include the authentication features you'd need to connect to a remotely hosted Ollama instance.

To use the Ollama Chat Model, follow the [Ollama credentials instructions](../../../../credentials/ollama/) to set up Ollama locally and configure the instance URL in n8n.

## Can't connect to a local Ollama instance when using Docker[#](#cant-connect-to-a-local-ollama-instance-when-using-docker "Permanent link")

The Ollama Chat Model node connects to a locally hosted Ollama instance using the base URL defined by [Ollama credentials](../../../../credentials/ollama/). When you run either n8n or Ollama in Docker, you need to configure the network so that n8n can connect to Ollama.

Ollama typically listens for connections on `localhost`, the local network address. In Docker, by default, each container has its own `localhost` which is only accessible from within the container. If either n8n or Ollama are running in containers, they won't be able to connect over `localhost`.

The solution depends on how you're hosting the two components.

### If only Ollama is in Docker[#](#if-only-ollama-is-in-docker "Permanent link")

If only Ollama is running in Docker, configure Ollama to listen on all interfaces by binding to `0.0.0.0` inside of the container (the official images are already configured this way).

When running the container, [publish the ports](https://docs.docker.com/get-started/docker-concepts/running-containers/publishing-ports/) with the `-p` flag. By default, Ollama runs on port 11434, so your Docker command should look like this:

1

`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`

When configuring [Ollama credentials](../../../../credentials/ollama/), the `localhost` address should work without a problem (set the **base URL** to `http://localhost:11434`).

### If only n8n is in Docker[#](#if-only-n8n-is-in-docker "Permanent link")

If only n8n is running in Docker, configure Ollama to listen on all interfaces by binding to `0.0.0.0` on the host.

If you are running n8n in Docker on **Linux**, use the `--add-host` flag to map `host.docker.internal` to `host-gateway` when you start the container. For example:

1

`docker run -it --rm --add-host host.docker.internal:host-gateway --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n docker.n8n.io/n8nio/n8n`

If you are using Docker Desktop, this is automatically configured for you.

When configuring [Ollama credentials](../../../../credentials/ollama/), use `host.docker.internal` as the host address instead of `localhost`. For example, to bind to the default port 11434, you could set the base URL to `http://host.docker.internal:11434`.

### If Ollama and n8n are running in separate Docker containers[#](#if-ollama-and-n8n-are-running-in-separate-docker-containers "Permanent link")

If both n8n and Ollama are running in Docker in separate containers, you can use Docker networking to connect them.

Configure Ollama to listen on all interfaces by binding to `0.0.0.0` inside of the container (the official images are already configured this way).

When configuring [Ollama credentials](../../../../credentials/ollama/), use the Ollama container's name as the host address instead of `localhost`. For example, if you call the Ollama container `my-ollama` and it listens on the default port 11434, you would set the base URL to `http://my-ollama:11434`.

### If Ollama and n8n are running in the same Docker container[#](#if-ollama-and-n8n-are-running-in-the-same-docker-container "Permanent link")

If Ollama and n8n are running in the same Docker container, the `localhost` address doesn't need any special configuration. You can configure Ollama to listen on localhost and configure the base URL in the [Ollama credentials in n8n](../../../../credentials/ollama/) to use localhost: `http://localhost:11434`.

## Error: connect ECONNREFUSED ::1:11434[#](#error-connect-econnrefused-111434 "Permanent link")

This error occurs when your computer has IPv6 enabled, but Ollama is listening to an IPv4 address.

To fix this, change the base URL in your [Ollama credentials](../../../../credentials/ollama/) to connect to `127.0.0.1`, the IPv4-specific local address, instead of the `localhost` alias that can resolve to either IPv4 or IPv6: `http://127.0.0.1:11434`.