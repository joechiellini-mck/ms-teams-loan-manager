import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { LoanManagerMessageExtensionConfig } from "../LoanManagerMessageExtensionConfig";

describe("LoanManagerMessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<LoanManagerMessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<LoanManagerMessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<Header content="Loan Manager configuration" />);

        expect(divResult).toBeTruthy();
    });
});


