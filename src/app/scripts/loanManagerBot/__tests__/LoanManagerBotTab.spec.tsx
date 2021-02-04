import * as React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { LoanManagerBotTab } from "../LoanManagerBotTab";

describe("LoanManagerBot Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<LoanManagerBotTab />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<LoanManagerBotTab />);
        const divResult = component.containsMatchingElement(<Header content="Welcome to the Loan Manager Bot bot page" />);
        expect(divResult).toBeTruthy();
    });
});
