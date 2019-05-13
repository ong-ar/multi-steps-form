import * as React from "react";
import { shallow } from "enzyme";

import Radio from "../Radio";
import RadioGroup from "../RadioGroup";

// radiogroup
it("RadioGroup", () => {
  const wrapper = shallow(<RadioGroup name="radiogroup" />);
  expect(wrapper).toMatchSnapshot();
});

// props: name 체크
it("RadioGroup:name", () => {
  const wrapper = shallow(
    <RadioGroup name="radio">
      <Radio />
    </RadioGroup>
  );
  expect(wrapper.find("Radio").prop("name")).toEqual("radio");
});

// props: defaultValue 체크
it("RadioGroup:defaultValue", () => {
  const wrapper = shallow(
    <RadioGroup name="radio" defaultValue="1">
      <Radio value="1" />
    </RadioGroup>
  );
  expect(wrapper.find("Radio").prop("defaultChecked")).toEqual(true);
});
