import * as debug from "debug";
import { PreventIframe } from "express-msteams-host";
import { TurnContext, CardFactory, MessagingExtensionQuery, MessagingExtensionResult } from "botbuilder";
import { IMessagingExtensionMiddlewareProcessor } from "botbuilder-teams-messagingextensions";

// Initialize debug logging module
const log = debug("msteams");

@PreventIframe("/lookupApplicationMessageExtension/config.html")
export default class LookupApplicationMessageExtension implements IMessagingExtensionMiddlewareProcessor {

    public async onQuery(context: TurnContext, query: MessagingExtensionQuery): Promise<MessagingExtensionResult> {
        console.log('context', context);
        switch (query.commandId) {
            case 'lookupApplication':
                return await this.handleGetUser(query);
            default:
                return Promise.resolve({
                    type: "result",
                    attachmentLayout: "list",
                    attachments: []
                } as MessagingExtensionResult);
                break;
        }
    }

    async handleGetUser(query): Promise<MessagingExtensionResult> {
        const data = await fetch("https://randomuser.me/api");
        const parsedData = await data.json();
        let attachments: any[] = [];
        console.log('USER', parsedData);

        if (parsedData && parsedData.results) {
            const user = parsedData.results[0];
            const card = this.generateUserCard(user);
            console.log('USER', user);
            attachments.push(card);
        }  
        return Promise.resolve({
            type: "result",
            attachmentLayout: "list",
            attachments
        } as MessagingExtensionResult);
    }

    generateUserCard(user): any {
        const name = `${user.name.first} ${user.name.last}`;
        const email = `Email: ${user.email}`;
        const applicationId = `Application Id: ${user.login.uuid}`;
        const images = [user.picture.thumbnail];

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


        // let thumbnailCard = CardFactory.thumbnailCard(title, text, images);
        // let preview = CardFactory.thumbnailCard(title, text, images);
        // preview.content.tap = { type: 'invoke', value: { title, text, images } };
        return { ...thumbnailCard, preview }; 
    }

    public async onCardButtonClicked(context: TurnContext, value: any): Promise<void> {
        // Handle the Action.Submit action on the adaptive card
        if (value.action === "moreDetails") {
            log(`I got this ${value.id}`);
        }
        return Promise.resolve();
    }






    // this is used when canUpdateConfiguration is set to true
    public async onQuerySettingsUrl(context: TurnContext): Promise<{ title: string, value: string }> {
        return Promise.resolve({
            title: "Lookup Application Configuration",
            value: `https://${process.env.HOSTNAME}/lookupApplicationMessageExtension/config.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}`
        });
    }

    public async onSettings(context: TurnContext): Promise<void> {
        // take care of the setting returned from the dialog, with the value stored in state
        const setting = context.activity.value.state;
        log(`New setting: ${setting}`);
        return Promise.resolve();
    }

}
