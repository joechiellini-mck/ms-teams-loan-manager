import * as React from "react";
import {
  ExcelColorIcon,
  WordColorIcon,
  Attachment,
  PowerPointColorIcon,
  Card,
  Flex,
  Avatar,
  Text,
  CardHeader,
  Segment,
  Header,
  Grid,
} from "@fluentui/react-northstar";
import { Person, formatName } from "../../state";

interface IApplicationViewProps {
  person: Person;
}

const ApplicationView = (props: IApplicationViewProps) => {
  return (
    <Grid columns="repeat(2, 1fr)">
      <Segment
        content={
          <div>
            <Header as="h3" content="Contact" />
            <Card>
              <CardHeader>
                <Flex gap="gap.small">
                  <Avatar
                    image={props.person.picture.thumbnail}
                    label={props.person.cell}
                    name={formatName(props.person.name)}
                    status="unknown"
                  />
                  <Flex column>
                    <Text
                      content={formatName(props.person.name)}
                      weight="bold"
                    />
                    <Text content={props.person.cell} size="small" />
                  </Flex>
                </Flex>
              </CardHeader>
            </Card>
          </div>
        }
        styles={{
          gridColumn: "span 1",
          boxShadow: "none",
        }}
      />
      <Segment
        content={
          <div>
            <Header as="h3" content="Property" />
            <Text>
              {props.person.location.street.number}{" "}
              {props.person.location.street.name}
              <br />
              {props.person.location.city}, {props.person.location.state}{" "}
              {props.person.location.postcode}
              <br />
              {props.person.location.country}
            </Text>
          </div>
        }
        styles={{
          gridColumn: "span 1",
          boxShadow: "none",
        }}
      />
      <Segment
        content={
          <div>
            <Header as="h3" content="Documents" />
            <Attachment icon={<WordColorIcon />} header="MeetingNotes.docx" />
            <Attachment icon={<ExcelColorIcon />} header="Budget.xlsx" />
            <Attachment
              icon={<PowerPointColorIcon />}
              header="Presentation.pptx"
            />
          </div>
        }
        styles={{
          gridColumn: "span 3",
          boxShadow: "none",
        }}
      />
    </Grid>
  );
};

export default ApplicationView;
