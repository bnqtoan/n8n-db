# Real Estate Appointment Voice Reminder Workflow

**Automates voice reminders for real estate appointments using AI-generated scripts and text-to-speech**

---

## Use Cases  
1. **Automated Appointment Follow-Ups**  
   Send personalized voice reminders to clients 24 hours before scheduled property viewings.  
   
2. **Agent Productivity Tool**  
   Streamline communication for real estate professionals handling multiple daily appointments.  

3. **Multi-Channel Coordination**  
   Synchronize calendar data with automated voice message generation and email delivery.  

---

## How it Works  
1. **Trigger**: Two options  
   - Scheduled check every 24h (`Schedule Trigger`)  
   - Manual test (`Manual Trigger`)  

2. **Data Fetch**:  
   - Retrieves upcoming appointments from **Google Calendar** (next 2 days max)  

3. **Message Generation**:  
   - Uses **OpenAI GPT-4o-mini** to create:  
     ▸ Voice script with key appointment details (time, address)  
     ▸ Short email subject line  

4. **Audio Conversion**:  
   - Converts text to speech via **ElevenLabs API** (multilingual voice model)  

5. **Delivery**:  
   - Attaches generated MP3 to email via **Gmail**  
   - Sends to attendee email from calendar event  

Key Parsing Steps:  
- Structured Output Parser ensures consistent JSON formatting  
- Custom code node appends `.mp3` extension to audio file  

---

## Services  
- **Google Calendar** (Appointments source)  
- **OpenAI** (Message generation)  
- **ElevenLabs** (Text-to-speech conversion)  
- **Gmail** (Reminder delivery)  

---

## Hashtags  
#n8n #automation #realestate #voiceReminder #calendarIntegration
