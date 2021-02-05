# Bot

Manifest definition:

```json
{
      "botId": "919cb135-21b2-41f0-87bc-86313157543c",
      "scopes": [
        "personal",
        "team",
        "groupchat"
      ],
      "commandLists": [
        {
          "scopes": [
            "personal"
          ],
          "commands": [
            {
              "title": "Help",
              "description": "Show help information"
            }
          ]
        },
        {
          "scopes": [
            "team"
          ],
          "commands": [
            {
              "title": "Help",
              "description": "Show help information"
            }
          ]
        },
        {
          "scopes": [
            "groupchat"
          ],
          "commands": [
            {
              "title": "Help",
              "description": "Show help information"
            }
          ]
        }
      ],
      "supportsFiles": true,
      "isNotificationOnly": false,
      "supportsCalling": true,
      "supportsVideo": true
    }
```

```src/app/loanManagerBot``` defines the bot. The decorator has the authentication and the associated route for the express server.

```typescript
@BotDeclaration(
    "/api/messages",
    new MemoryStorage(),
    process.env.MICROSOFT_APP_ID,
    process.env.MICROSOFT_APP_PASSWORD)
```

Conversation chat @mentions are directed to "/api/messages". ```onMessage``` is triggered. Inside this implementation, there is a switch statement that uses the message to determine the response.

**Possible capabilities:**

* Echo: ```"@Loan Manager Hello"``` The bot will echo back with a greeting response

* Help: ```"@Loan Manager Help"``` The bot will respond with a message tailored to help

* Anything else: ```"@Loan Manager Are you alive?"``` The bot will respond that its developer has not trained it to do anything

* New member added: When a new member has been added to the team, it will respond with a welcome adaptive card. ```onConversationUpdate``` is triggered when events like these occur.

NOTE: The heart of getting the bot to run locally is making the ngrok tunneling addess correct in the ```.env``` HOSTNAME and in the manifest.json.
