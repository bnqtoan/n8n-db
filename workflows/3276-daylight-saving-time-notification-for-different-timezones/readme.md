### Daylight Saving Time Notification

**Use Cases**  
1. **Automated DST Reminders for Teams**: Notify team members via Slack and email about upcoming Daylight Saving Time changes to ensure schedules and meetings are adjusted.  
2. **Global Team Coordination**: Alert international teams to time zone shifts during DST transitions to avoid scheduling conflicts.  
3. **Event Management**: Trigger reminders for event organizers to update timings when DST affects participants in specific regions.  

**How It Works**  
The workflow checks a list of time zones for upcoming Daylight Saving Time (DST) transitions and sends alerts:  
1. **Time Zone List**: The "Timezones List" node defines time zones to monitor (e.g., New York, Warsaw).  
2. **Date Conversion**: The "Calculate Zone Date and Time" node converts the current time to each zone’s local time.  
3. **DST Check**: The "Check If Daylight Saving Time" node verifies if the current or next day’s date is affected by DST.  
4. **Condition Check**: The "Check If Change Tomorrow" node triggers if a DST transition is detected.  
5. **Notifications**: Alerts are sent via Slack and email to remind users to adjust schedules.  

**Services**  
- **Slack**: Sends channel notifications.  
- **SMTP Email**: Delivers email reminders via an SMTP server.  
- **Time Zone Database**: Validates DST transitions.  

**#n8n #automation #timezone #DST #reminder**