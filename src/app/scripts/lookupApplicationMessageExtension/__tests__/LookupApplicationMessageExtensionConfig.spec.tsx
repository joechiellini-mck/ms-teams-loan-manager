import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Header } from "@fluentui/react-northstar";

import { LookupApplicationMessageExtensionConfig } from "../LookupApplicationMessageExtensionConfig";

describe("LookupApplicationMessageExtensionConfig Component", () => {
    // Snapshot Test Sample
    it("should match the snapshot", () => {
        const wrapper = shallow(<LookupApplicationMessageExtensionConfig />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Component Test Sample
    it("should render the tab", () => {
        const component = shallow(<LookupApplicationMessageExtensionConfig />);
        const divResult = component.containsMatchingElement(<Header content="Lookup Application configuration" />);

        expect(divResult).toBeTruthy();
    });
});


