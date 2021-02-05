# Message Extension: Look Application

Manifest definition:

```json
"composeExtensions": [
    {
      "botId": "919cb135-21b2-41f0-87bc-86313157543c",
      "canUpdateConfiguration": true,
      "commands": [
        {
          "id": "lookupApplication",
          "type": "query",
          "title": "Look Application",
          "description": "Find an application by the id",
          "initialRun": true,
          "fetchTask": false,
          "context": [
            "commandBox",
            "compose"
          ],
          "parameters": [
            {
              "name": "applicationId",
              "title": "Application ID",
              "description": "Application Id",
              "inputType": "text"
            }
          ]
        }
      ]
    }
  ],
```

Associated with a bot in the manifest. It is a query type extension that takes input and returns options.

```src/app/loanManagerBot``` defines the bot. The decorator has the authentication and the associated route for the express server.

```typescript
@BotDeclaration(
    "/api/messages",
    new MemoryStorage(),
    process.env.MICROSOFT_APP_ID,
    process.env.MICROSOFT_APP_PASSWORD)
```

The bot class declares the messaging extension.

```typescript
   @MessageExtensionDeclaration("lookupApplication")
    private _lookupApplicationMessageExtension: LookupApplicationMessageExtension;
```

The bots constructor creates an internal reference.

```typescript
this._lookupApplicationMessageExtension = new LookupApplicationMessageExtension();
```

At this point, the message extension is wired into the ecosystem by way of the middleware (IMessagingExtensionMiddlewareProcessor).

```typescript
// src/app/lookupApplicationMessageExtension
export default class LookupApplicationMessageExtension implements IMessagingExtensionMiddlewareProcessor {}
```

When the bot receives a message to 'api/messages', it determines that the source is of type ```ActivityTypes.Invoke``` and looks to route to the messaging extension that was called. The context and the query are forwarded. Since the user chose the "Look Application" extension, the commandId "lookupApplication" (id in the manifest) is passed along. A switch statement can be used to direct the flow further to reach the proper implementation.

```typescript
// src/app/lookupApplicationMessageExtension
public async onQuery(context: TurnContext, query: MessagingExtensionQuery): Promise<MessagingExtensionResult> {}
```

```onQuery``` fields the request and ultimately returns a Promise with the AdapterCard inside it.

```typescript
    return Promise.resolve({
        type: "result",
        attachmentLayout: "list",
        attachments
    } as MessagingExtensionResult);
```

The ```attachmentLayout``` determines the format of the UI view. It will show a list of ```attachments``` as the result set in the interface for the user to choose. In this case, the user inputs an application Id. A list or a single item is returned to select. ```attachments``` are the array of the results to show in the list pane.

```typescript
// generateUserCard
   const thumbnailCard = CardFactory.adaptiveCard(
                    {
                        type: "AdaptiveCard",
                        body: [
                            {
                                type: "Image",
                                url: user.picture.medium
                            },
                            {
                                type: "TextBlock",
                                size: "Large",
                                text: name
                            },
                            {
                                type: "TextBlock",
                                text: email
                            },
                            {
                                type: "TextBlock",
                                text: applicationId
                            }
                        ],
                        actions: [
                            {
                                type: "Action.OpenUrl",
                                title: "More details",
                                url: encodeURI(`https://teams.microsoft.com/l/entity/${process.env.APPLICATION_ID}/LoanManagerTab?msLaunch=true&enableMobilePage=true&suppressPrompt=true&webUrl=${process.env.HOSTNAME}/LoanManagerTab/?application=61946618-44c0-4ce9-a914-c2e342aa8a0c`)
                            }
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.2"
                    });
                const preview = {
                    contentType: "application/vnd.microsoft.card.thumbnail",
                    content: {
                        title: name,
                        text: applicationId,
                        images: [
                            {
                                url: user.picture.thumbnail
                            }
                        ]
                    }
                };

        return { ...thumbnailCard, preview }; 
```

An attachment consists of a card generated by a factory. This "thumbnailCard" is what is shown in the conversation when the message is sent. The "preview" is a slim card shown in the result set to be selected by the user. ```actions``` defines the type of button to be placed on the card. "Action.OpenUrl" opens a link. This implementation opens a tab inside of teams. External links are also possible.

Alternatively, "Action.Submit" can be used to trigger a response callback. ```onCardButtonClicked``` would be called. Logic to perform a further task based on user action can be added here.

