**Name:** OpenSea AI-Powered Insight System via Telegram

---

### **Use Cases**
1. **Real-Time NFT Market Analysis**  
   Track live NFT prices, sales trends, and market movements for collections like Bite the Ape Yacht Club or Azuki to identify undervalued assets or sudden price shifts.  
2. **Portfolio Monitoring**  
   Automate tracking of NFT ownership and transaction history for specific wallets, providing alerts for sales, purchases, or significant transfers.  
3. **Market Intelligence for Traders**  
   Compare historical data (e.g., 7-day vs. 30-day sales volume) to predict market trends and inform investment strategies.  

---

### **How It Works**  
The workflow uses a **Telegram bot** to receive user queries (e.g., "Find the cheapest Azuki NFT"). The **AI Supervisor (GPT-4o)** processes the request and routes it to the appropriate agent:  
- **Marketplace Agent:** Fetches live listings, offers, and order details for specific NFTs.  
- **Analytics Agent:** Retrieves historical sales data and transaction metrics for collections.  
- **NFT Agent:** Gathers metadata, ownership history, and payment token details.  

Results are aggregated, formatted, and sent back to the user via Telegram. The system maintains session tracking to handle multi-step queries.  

---

### **Services**  
- **Telegram API** (for bot interaction)  
- **OpenSea API** (NFT data, market analytics)  
- **OpenAI GPT-4o** (AI processing)  

---

### **Hashtags**  
`#n8n` `#nftautomation` `#marketinsights` `#workflowautomation` `#telegrambot`  

--- 

**Note:** This workflow requires valid API keys for Telegram, OpenSea, and OpenAI. Ensure proper session tracking and pagination for large datasets.