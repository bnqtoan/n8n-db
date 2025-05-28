# Smart Factory Data Generator

## Use cases:

- **Simulating sensor data for testing:** Generate realistic temperature and uptime data for a virtual machine to test monitoring systems or data analytics pipelines without real hardware.
- **Populating a dashboard with dummy data:** Feed a dashboard or visualization tool with synthetic data to demonstrate its functionality or create sample reports.
- **Load testing AMQP infrastructure:** Simulate a high volume of machine data to evaluate the performance and scalability of an AMQP message broker setup.

## How it works:

The workflow starts with an **Interval** node that triggers the workflow execution repeatedly at a defined interval (default is every second but not defined on this workflow).
Then, a **Set** node creates a JSON object containing simulated machine data. This includes:
  - `machine_id.name`: A fixed machine ID ("n8n_cr8").
  - `temperature_celsius`: A random temperature value between 0 and 99 degrees Celsius.
  - `machine_id.uptime`: A random uptime value between 0 and 99.
  - `time_stamp`: The current timestamp.
Finally, the **AMQP Sender** node publishes this JSON object to an AMQP exchange named "berlin_factory_01".

## Services:

- AMQP (Advanced Message Queuing Protocol) - Used for message queuing.

## Hashtags:

#n8n #automation #factory #dataGeneration #AMQP
