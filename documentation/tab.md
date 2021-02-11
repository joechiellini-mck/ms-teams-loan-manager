# Tab

Manifest definition:

```json
"configurableTabs": [
    {
      "configurationUrl": "https://5074b31c03d1.ngrok.io/loanManagerTab/config.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}",
      "canUpdateConfiguration": true,
      "scopes": ["team", "groupchat"],
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

#### React

It is possible to use React to build tabs in Teams. The yeoman generator gives a Node/Express server serving React. Since Teams' manifest only needs a URL this should enable any type of web stack, although the [recommended UI library](https://fluentsite.z22.web.core.windows.net/0.52.0) is a React library.

`src/app/scripts/loanManagerTab/LoanManagerTab.tsx` is the react entry point. `src/app/web/loanManagerTab/index.html` is where `render` is called (by way of `gulp-inject` in `gulpfile.js`).
Basic routing is possible with URL parsing and query params. It seems that `react-router` would work too.

#### Deep linking

Deep linking is [supported](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/build-and-test/deep-links), although we were not able to make it work in our demo.
