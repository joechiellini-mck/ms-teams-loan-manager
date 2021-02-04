import * as React from "react";
import {
  Provider,
  Flex,
  Text,
  Header,
  Segment,
  Breadcrumb,
} from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import ApplicationsTable from "./ApplicationsTable";
import ApplicationView from "./ApplicationView";
import state, { Person, formatName } from "../../state";

const getUser = (uuid: string): Person | undefined => {
  return state.find((person) => person.login.uuid === uuid);
};

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

  const queryParams: any = new URLSearchParams(window.location.search);
  const person = getUser(queryParams.get("application"));

  let content: React.ReactNode = null;
  if (person) {
    content = <ApplicationView person={person} />;
  } else {
    content = <ApplicationsTable />;
  }
  /**
   * The render() method to create the UI of the tab
   */
  return (
    <Provider theme={theme}>
      <Flex column fill={true}>
        <Segment
          color="brand"
          content={<Header as="h2" content="Loan Manager" />}
        />
        <Segment
          style={{ minHeight: "calc(100vh - 8em)" }}
          content={
            <>
              <Flex.Item>
                <div>
                  <div>
                    {/* <Text content={entityId} /> */}
                    <Breadcrumb aria-label="breadcrumb">
                      <Breadcrumb.Item>Home</Breadcrumb.Item>
                      <Breadcrumb.Divider />
                      <Breadcrumb.Item>
                        <Breadcrumb.Link href="/LoanManagerTab">
                          Applications
                        </Breadcrumb.Link>
                      </Breadcrumb.Item>
                      <Breadcrumb.Divider />
                      {person && (
                        <Breadcrumb.Item aria-current="page">
                          {formatName(person.name)}'s Loan
                        </Breadcrumb.Item>
                      )}
                    </Breadcrumb>
                  </div>
                  {content}
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
