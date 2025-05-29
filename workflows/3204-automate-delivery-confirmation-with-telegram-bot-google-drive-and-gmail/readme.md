# LogiGreenTrack Delivery Tracking Workflow

## Use Cases
1. **Driver Shipment Tracking**  
   Enable delivery drivers to submit shipment details (number, GPS location, photo proof) via Telegram, creating an auditable trail in Google Sheets while sending real-time confirmations.

2. **Automated Proof of Delivery**  
   Automatically compile delivery evidence (location data + photo) into a Google Drive folder and send HTML-formatted confirmation emails to logistics teams upon shipment completion.

3. **Multi-step Field Data Collection**  
   Guide drivers through sequential data entry using state management, preventing incomplete submissions and reducing training needs for field staff.

## How It Works
1. **Telegram Initiation**  
   - Triggered by messages containing commands like `/addShipment`
   - Routes inputs using Switch nodes to appropriate handling blocks

2. **Stateful Data Collection**  
   - Maintains conversation state using workflow static data (waitingShipmentNumber/waitingGPS/waitingPhoto flags)
   - Stores interim data like GPS coordinates (51.5074, -0.1278) and shipment numbers in memory

3. **Evidence Handling**  
   - Saves shipment photos to specified Google Drive folder
   - Generates public image links for email confirmations
   - Logs complete shipment data to Google Sheets with timestamps

4. **Notifications**  
   - Sends driver confirmations via Telegram with formatted shipment details
   - Emails logistics teams with embedded GPS data + photo preview

## Services
- **Telegram** (Trigger & Messaging)  
- **Google Sheets** (Delivery Log Storage)  
- **Google Drive** (Photo Storage & Sharing)  
- **Gmail** (Team Notifications)

## Hashtags
#n8n #SupplyChainAutomation #TelegramBots #GoogleWorkspace #LogisticsTech
