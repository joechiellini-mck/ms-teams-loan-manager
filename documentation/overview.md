# Overview

This project is a POC for a MS Teams application. An "app" is an umbrella for several capabilities like a bot, messaging extension, and a tab. This project is a demonstration of a tab, 

## Capabilities

* Bot: Conversational bots can be applied to a chats in a number of contexts (meeting, team chat, personal conversations). They also can serve more complex functionality for a messaging extension
* Messaging extensions: Messaging extensions augment the chat conversation with the ability to do more complex routines supported by UI card known as adaptive cards. Think of it as a mini form that takes inputs and can use them to call an API to display a list of results in a card format. Ultimately, this results in a formatted panel in the chat window. A bot would handle the API call and event lifecycle.
* Webhooks: Notifications within the app are provided by webhooks
* Tab: Tabs are SPA in an iframe. There is a landing page for the app itself. Should you choose (with scoping options), they can be applied to a team's channel, privately, or even meetings.
* Adaptive card: View created by a factory or custom that is used as the interface for a web extension or bot that takes input or displays information in a conversational window. Supported by a bot or messaging extension
* Task module: A modal window used to capture information in the context of a chat or meeting. Like adaptive card, it is triggered and supported by bots/messaging extensions.

## Project structure

* Gulp is used to serve and build the application
    ```bash
    $ gulp serve // Run the project
    $ gulp build // Build the project
    $ gulp manifest // Zip and build the app for publishing
    ```
* The project code is all stored inside of ```src```.
* ```src/app``` has the code related to the project which is using React.Js
* ```src/manifest``` contains a JSON file that is the structure of the entire application. All configurations for the app's bots, tabs, and extensions exist are defined within it.

## Manifest

### Configurable Tabs

"configurableTabs" defines the tabs for the application. A tab is the React application that is creating all the views. The tab's config stored in ```src/app/scripts``` determines how the correct view is shown. It will also have to take into consideration the ```scopes``` and ```contexts``` defined in the object. ```configurationUrl``` refers to the static view that shows the settings that can be manipulated for the tab. Scopes handles where the tab can be installed. The context are the places where the tab can be opened. In this case, a team and group chat has the ability to install the app tab to its navigation. With that team, the app has capabilities to be opened in meetings, a personal chat conversation, and the channel's chat.

```json
"configurableTabs": [
    {
      "configurationUrl": "https://5074b31c03d1.ngrok.io/loanManagerTab/config.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}",
      "canUpdateConfiguration": true,
      "scopes": [
        "team",
        "groupchat"
      ],
      "context": [
        "channelTab",
        "privateChatTab",
        "meetingSidePanel",
        "meetingDetailsTab",
        "meetingChatTab"
      ]
    }
  ],
```

### Static tabs

Static pages used for informational purposes. In this case it is defining the "About" page for the bot's capabilities. ```entityId``` is a unique id used to refer to it for deep linking. ```name``` is the display name identifier. ```contentUrl``` is the view. ```scopes``` manages where the page is capable of being installed. In this case, it is a personal page that opens outside of a team context.

```json
"staticTabs": [
    {
      "entityId": "11f235d0-66fc-11eb-aa24-ebd8fcacd213",
      "name": "Loan Manager Bot",
      "contentUrl": "https://5074b31c03d1.ngrok.io/loanManagerBot/loanManagerBot.html",
      "scopes": [
        "personal"
      ]
    }
  ],
```

### Bots
A generated unique id is given to all bots to reference them. Scopes are granted like tabs. ```commandLists``` define the suggestion card in the list of actions the bot can perform within the chat window for specific scope. Actual responses are written within the bot code. ```@Loan Manager``` will pop up a list of defined actions sourced from this part of the manifest.

```json
"bots": [
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
  ],
```

## Messaging Extensions

```composeExtensions``` defines the messaging extensions used in the app. A bot id is associated with the extension to provide the actual processing when the route is called. ```commands``` are the configurations for the specific message extensions in the app. One app can contain several. ```id``` is the unique identifier. ```type``` is a "query" meaning it is a search extension as opposed to an "action" extension. Readable title and descriptions show in suggestion lists like the ```commands``` in a bot. They are very similar in their implementation within teams in this way. ```fetchTask``` determines if it will be a modal window or an inline chat interface to capture the inputs needed by the user. ```parameters``` defines the inputs that the extension is looking to capture and supply to the action.

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

## App

At the heart of the application, it is an express server displaying views written in React.js. ```scripts``` defines the views for the interface and configuration for each of the capabilities. ```clients.js``` defines the capabilities rolled into the application. ```web``` is the basic skeleton of the react app. Most of the views are light-weight and reference the components in the ```scripts``` folder.

Other directories store the implementation code for the specific capabilities. i.e. ```loanManagerBot``` and ```loanManagerTab```.

## Components

* [Loan Manager Tab]()
* [Loan Manager Bot](./bot.md)
* [Lookup Application Message Extension](./message-extension.md)