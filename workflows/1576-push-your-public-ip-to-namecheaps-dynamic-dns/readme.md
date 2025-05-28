# NameCheap Dynamic DNS (DDNS)

## Use cases:

*   **Automatically update your NameCheap DNS records:** If you have a dynamic IP address, this workflow ensures your domain name always points to the correct IP, keeping your website or services accessible.
*   **Host services at home:**  Allows you to host personal websites, game servers, or other services from your home network, even with a changing IP address.
*   **Remote access to your home network:**  Maintain a stable domain name that resolves to your home IP, enabling reliable remote access to your devices and services.

## How it works:

1.  **Cron Trigger:** The workflow starts every 15 minutes, triggering the IP update check.
2.  **Get Public IP address:** Retrieves your current public IP address from `https://api.ipify.org?format=json`.
3.  **Checks IP if new:** Compares the current IP with the previously stored IP. If the IP has changed, it proceeds to the next step. This prevents unnecessary updates.
4.  **Set yourdomain.com:**  Sets the domain name (`yourdomain.com`) and your Namecheap Dynamic DNS password, which is **important to configure**.
5.  **subdomains:** Defines a list of subdomains (`subdomain1`, `subdomain2`, `subdomain3`) to be updated in Namecheap.
6.  **Loops trough Subdomain list:** Iterates through the list of subdomains.
7.  **Send data to Namecheap:**  Sends an HTTP request to Namecheap's Dynamic DNS update URL, including the subdomain, domain, password, and current IP address.

## Services:

*   **NameCheap:** Used for Dynamic DNS updates.
*   **ipify.org:**  Provides a simple API to retrieve the current public IP address.

## Hashtags:

#n8n #NameCheap #DDNS #DynamicDNS #Automation
