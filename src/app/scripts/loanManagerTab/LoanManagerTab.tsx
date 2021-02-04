import * as React from "react";
import {
  Provider,
  Flex,
  Text,
  Button,
  Header,
  Segment,
  Grid,
} from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import ApplicationsTable from "./ApplicationsTable";

/**
 * Implementation of the Loan Manager content page
 */
export const LoanManagerTab = () => {
  const [{ inTeams, theme, context }] = useTeams();
  const [entityId, setEntityId] = useState<string | undefined>();

  useEffect(() => {
    if (inTeams === true) {
      microsoftTeams.appInitialization.notifySuccess();
    } else {
      setEntityId("Not in Microsoft Teams");
    }
  }, [inTeams]);

  useEffect(() => {
    if (context) {
      setEntityId(context.entityId);
    }
  }, [context]);

  /**
   * The render() method to create the UI of the tab
   */
  return (
    <Provider theme={theme}>
      <Flex column fill={true}>
        <Segment color="brand" content="Loan Manager" inverted />
        <Segment
          style={{ height: "calc(100vh - 4em)" }}
          content={
            <>
              <Flex.Item>
                <Header content="This is your tab" />
              </Flex.Item>
              <Flex.Item>
                <div>
                  <div>
                    <Text content={entityId} />
                  </div>
                  <div>
                    <ApplicationsTable />
                  </div>
                </div>
              </Flex.Item>
              <Flex.Item>
                <Text size="smaller" content="(C) Copyright Mck" />
              </Flex.Item>
            </>
          }
        />
      </Flex>
    </Provider>
  );
};
