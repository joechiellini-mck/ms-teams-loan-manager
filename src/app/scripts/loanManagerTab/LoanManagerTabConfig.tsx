import * as React from "react";
import { Provider, Flex, Header, Input } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";

/**
 * Implementation of Loan Manager configuration page
 */
export const LoanManagerTabConfig = () => {
  const [{ inTeams, theme, context }] = useTeams({});
  const [customSetting, setCustomSetting] = useState<string>("");

  useEffect(() => {
    if (context) {
      setCustomSetting(context.entityId);

      microsoftTeams.settings.registerOnSaveHandler(
        (saveEvent: microsoftTeams.settings.SaveEvent) => {
          const host = "https://" + window.location.host;
          microsoftTeams.settings.setSettings({
            contentUrl:
              host +
              "/loanManagerTab/?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}",
            websiteUrl:
              host +
              "/loanManagerTab/?name={loginHint}&tenant={tid}&group={groupId}&theme={theme}",
            suggestedDisplayName: "Loan Manager",
            removeUrl: host + "/loanManagerTab/remove.html?theme={theme}",
            entityId: customSetting,
          });
          saveEvent.notifySuccess();
        }
      );

      microsoftTeams.settings.setValidityState(true);
      microsoftTeams.appInitialization.notifySuccess();
    }
  }, [context]);

  return (
    <Provider theme={theme}>
      <Flex fill={true}>
        <Flex.Item>
          <div>
            <Header content="Configure your tab" />
            <Input
              placeholder="Enter a value here"
              defaultValue={"6f6b9cc0-66fb-11eb-aa24-ebd8fcacd213"}
              fluid
              clearable
              value={customSetting}
              onChange={(e, data) => {
                if (data) {
                  setCustomSetting(data.value);
                }
              }}
              required
            />
          </div>
        </Flex.Item>
      </Flex>
    </Provider>
  );
};
