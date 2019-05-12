import * as React from "react";
import { shallow } from "enzyme";

import Checkbox from "../Checkbox";
import CheckboxGroup from "../CheckboxGroup";

// CheckboxGroup
it("CheckboxGroup", () => {
  const wrapper = shallow(
    <CheckboxGroup>
      <Checkbox />
    </CheckboxGroup>
  );
  expect(wrapper).toMatchSnapshot();
});

// length 체크
it("CheckboxGroup:Checkbox:length", () => {
  const wrapper = shallow(
    <CheckboxGroup name="checkboxgroup">
      <Checkbox />
      <Checkbox />
    </CheckboxGroup>
  );
  expect(wrapper.find("Checkbox").length).toEqual(2);
});

// props: name 체크
it("CheckboxGroup:name", () => {
  const wrapper = shallow(
    <CheckboxGroup name="checkboxgroup">
      <Checkbox />
    </CheckboxGroup>
  );
  expect(wrapper.find("Checkbox").prop("name")).toEqual("checkboxgroup");
});

// props: value (Checkbox) 체크
it("CheckboxGroup:Checkbox:value", () => {
  const wrapper = shallow(
    <CheckboxGroup>
      <Checkbox value="checkboxgroup" />
    </CheckboxGroup>
  );
  expect(wrapper.find("Checkbox").prop("value")).toEqual("checkboxgroup");
});

// props: defaultValues 체크
it("CheckboxGroup:defaultValues", () => {
  const wrapper = shallow(
    <CheckboxGroup defaultValues={["checkboxgroup"]}>
      <Checkbox value="checkboxgroup" />
    </CheckboxGroup>
  );
  expect(wrapper.find("Checkbox").prop("defaultChecked")).toEqual(true);
});
