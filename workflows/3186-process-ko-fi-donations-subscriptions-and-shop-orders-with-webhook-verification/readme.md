# Ko-fi Payment Webhook Handler

## Use cases
1. **Process donations** - Automatically capture donor information, messages, and payment details when supporters make one-time contributions
2. **Manage subscriptions** - Handle recurring subscription payments with tracking for first-time subscribers and tiered membership levels
3. **Fulfill shop orders** - Process e-commerce transactions from Ko-fi shops including item details and customer information

## How it works
The workflow receives payment notifications from Ko-fi through a webhook:
1. **Webhook initialization**: Receives POST requests from Ko-fi's payment system
2. **Security verification**: Validates requests using a verification token to ensure authenticity
3. **Payment type routing**: Distributes events to appropriate handlers based on payment type (Donation/Subscription/Shop Order)
4. **Data processing**: 
   - Extracts relevant details for each payment type (amount, currency, customer info, timestamps)
   - For subscriptions: Checks if it's a first payment using `is_first_subscription_payment` flag
   - For shop orders: Processes product/item arrays and customer contact information

## Services
- Ko-fi (Payment platform/webhook source)

## Hashtags
#n8n #automation #ko-fi #webhooks #payments
