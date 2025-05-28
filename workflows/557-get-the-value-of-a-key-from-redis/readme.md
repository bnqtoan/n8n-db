# Get Value From Redis

## Use cases

- Retrieve configuration settings stored in Redis for dynamic application behavior.
- Fetch cached data from Redis to improve the performance of web applications.
- Get session data from Redis to authenticate users.

## How it works

This workflow starts with a manual trigger. When executed, it connects to a Redis server, retrieves the value associated with the key "hello", and outputs the result.  The "On clicking 'execute'" node initiates the workflow, and the "Redis" node performs the `get` operation using the provided Redis credentials.

## Services

- Redis

## Hashtags

#n8n #automation #redis #cache #database
