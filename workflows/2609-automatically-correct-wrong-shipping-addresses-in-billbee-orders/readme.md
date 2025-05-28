# Address Validation

## Use cases:

- **Automated Address Correction:** Automatically validates and corrects customer shipping addresses in Billbee, reducing shipping errors and delivery issues.
- **Preventing Failed Deliveries:** Identifies potentially incorrect addresses before shipping, allowing for manual review and correction, thereby minimizing failed delivery attempts and associated costs.
- **Improved Customer Satisfaction:** Ensures accurate and timely deliveries by validating addresses, leading to enhanced customer satisfaction and loyalty.

## How it works:

1.  The workflow starts when a new order is imported into Billbee, triggering a **Webhook** that sends the order ID to n8n.
2.  The **HTTP Request** node ("get order data") uses the order ID to retrieve the order's shipping address from the Billbee API. It uses Basic Auth and retrieves the Billbee Developer API key and User API Key from the config node.
3.  The **Split Out** node ("Split Out Order Data") extract different data from the shipping address.
4.  The **Set Address Fields** node formats and maps the address data into a structure suitable for the Endereco API, this includes using "Webhook" to get the Billbee ID and also removes "/" from the housenumber.
5.  The workflow checks if there is a PickUpShop in the street name using the node **Filter Out PickUpShops**.
6.  The workflow checks if the housenumber is not empty using the node **check if housenumer is not empty**.
7.  The workflow checks if `AddressLine2` contains a number or a number and a letter, if so this value will be use as housenumber, after that the node **Check Address endereco api** is triggered
8.  The **HTTP Request** node ("Check Address endereco api") sends the formatted address to the Endereco API for validation, it uses X-Auth-Key from the config node.
9.  The **If** node ("check if new address is not empty") checks if Endereco API returned suggestions.
10. If suggestions exist the workflow updates the address in billbee using the node **set new delivery address to billbee** and adds a success tag to the order using the node **set billbee success**.
11. If no suggestions exist the workflow adds a failure tag to the order using the node **set billbee tag**.

## Services:

-   **Billbee:** An order and inventory management platform.
-   **Endereco:** An address validation and correction service.

## Hashtags:

#n8n #automation #addressvalidation #billbee #endereco
