import * as React from "react";
import {
  ShorthandCollection,
  Table,
  TableRowProps,
} from "@fluentui/react-northstar";
import state, { Location, Name } from "../../state";

const header = {
  items: ["Address", "Applicant", "Start Date"],
};

const formatAddress = (location: Location) => {
  return `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}`;
};

const formatName = (name: Name) => {
  return `${name.title} ${name.first} ${name.last}`;
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
    onClick: () => alert(person.login.uuid),
  }));

const ApplicationsTable = () => (
  <Table header={header} rows={rows} aria-label="Static table" />
);

export default ApplicationsTable;
