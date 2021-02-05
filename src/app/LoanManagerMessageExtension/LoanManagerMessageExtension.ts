import * as debug from "debug";
import { PreventIframe } from "express-msteams-host";
import { TurnContext, CardFactory, MessagingExtensionQuery, MessagingExtensionResult } from "botbuilder";
import { IMessagingExtensionMiddlewareProcessor } from "botbuilder-teams-messagingextensions";

// Initialize debug logging module
const log = debug("msteams");

@PreventIframe("/loanManagerMessageExtension/config.html")
export default class LoanManagerMessageExtension implements IMessagingExtensionMiddlewareProcessor {

    public async onQuery(context: TurnContext, query: MessagingExtensionQuery): Promise<MessagingExtensionResult> {
        console.log('QQQQ', query);
        switch (query.commandId) {
            case 'getUser':
                return await this.handleGetUser(query);
            default:
                return Promise.resolve({
                    type: "result",
                    attachmentLayout: "list",
                    attachments: []
                } as MessagingExtensionResult);
                break;
        }

        // const card = CardFactory.adaptiveCard(
        //     {
        //         type: "AdaptiveCard",
        //         body: [
        //             {
        //                 type: "TextBlock",
        //                 size: "Large",
        //                 text: "Headline"
        //             },
        //             {
        //                 type: "TextBlock",
        //                 text: "Description"
        //             },
        //             {
        //                 type: "Image",
        //                 url: `https://${process.env.HOSTNAME}/assets/icon.png`
        //             }
        //         ],
        //         actions: [
        //             {
        //                 type: "Action.Submit",
        //                 title: "More details",
        //                 data: {
        //                     action: "moreDetails",
        //                     id: "1234-5678"
        //                 }
        //             }
        //         ],
        //         $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
        //         version: "1.2"
        //     });
        // const preview = {
        //     contentType: "application/vnd.microsoft.card.thumbnail",
        //     content: {
        //         title: "Headline",
        //         text: "Description",
        //         images: [
        //             {
        //                 url: `https://${process.env.HOSTNAME}/assets/icon.png`
        //             }
        //         ]
        //     }
        // };

        // if (query.parameters && query.parameters[0] && query.parameters[0].name === "initialRun") {
        //     // initial run

        //     return Promise.resolve({
        //         type: "result",
        //         attachmentLayout: "list",
        //         attachments: [
        //             { ...card, preview }
        //         ]
        //     } as MessagingExtensionResult);
        // } else {
        //     // the rest
        //     return Promise.resolve({
        //         type: "result",
        //         attachmentLayout: "list",
        //         attachments: [
        //             { ...card, preview }
        //         ]
        //     } as MessagingExtensionResult);
        // }
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
                                url: `${process.env.HOSTNAME}/LoanManagerTab/?application=${user.login.uuid}`
                            }
                        ],
                        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                        version: "1.2"
                    });
                const preview = {
                    contentType: "application/vnd.microsoft.card.thumbnail",
                    content: {
                        title: name,
                        text: email,
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
            title: "Loan Manager Configuration",
            value: `https://${process.env.HOSTNAME}/loanManagerMessageExtension/config.html?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}`
        });
    }

    public async onSettings(context: TurnContext): Promise<void> {
        // take care of the setting returned from the dialog, with the value stored in state
        const setting = context.activity.value.state;
        log(`New setting: ${setting}`);
        return Promise.resolve();
    }

}
