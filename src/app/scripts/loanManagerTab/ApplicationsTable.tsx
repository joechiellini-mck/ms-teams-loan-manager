import * as React from "react";
import {
  ShorthandCollection,
  Table,
  TableRowProps,
  Header,
} from "@fluentui/react-northstar";
import state, { formatName, formatAddress, Location, Name } from "../../state";

const header = {
  items: ["Address", "Applicant", "Start Date"],
};

const rows: ShorthandCollection<TableRowProps> = state
  .sort((a, b) => a.registered.date.localeCompare(b.registered.date))
  .map((person) => ({
    key: person.login.uuid,
    items: [
      formatAddress(person.location),
      formatName(person.name),
      new Date(person.registered.date).toLocaleDateString(),
    ],
    onClick: () => {
      window.location.search = `?application=${person.login.uuid}`;
    },
  }));

const ApplicationsTable = () => (
  <div>
    <Header as="h3" content="Current Applications" />
    <Table header={header} rows={rows} aria-label="Static table" />
  </div>
);

export default ApplicationsTable;
