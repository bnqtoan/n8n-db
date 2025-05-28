# Create a coupon on Paddle

## Use cases:

- Automatically create a coupon code in Paddle when a specific event occurs, such as a new user signing up on your platform.
- Generate a coupon code for promotional campaigns and instantly make it available within your Paddle account.

## How it works:

This workflow starts with a manual trigger ("On clicking 'execute'"), meaning it will run when you manually execute the workflow in n8n. Upon execution, the workflow creates a coupon in Paddle using the Paddle node. The `discountAmount` is set to 2 and the `couponCode` is set to "n8n-docs". The Paddle node uses credentials stored under the name "paddleApi" to authenticate with your Paddle account.

## Services:

- Paddle

## Hashtags:

#n8n #Paddle #automation #coupon #ecommerce
