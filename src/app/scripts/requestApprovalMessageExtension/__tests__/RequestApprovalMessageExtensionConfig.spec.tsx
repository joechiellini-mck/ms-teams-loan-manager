import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { RequestApprovalMessageExtensionConfig } from "../RequestApprovalMessageExtensionConfig";

describe("RequestApprovalMessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<RequestApprovalMessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<RequestApprovalMessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<Header content="Request Approval configuration" />);

        expect(divResult).toBeTruthy();
    });
});


