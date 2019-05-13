import * as React from "react";
import { shallow } from "enzyme";

import Select from "../Select";
import Option from "../Option";

// select
it("Select", () => {
  const wrapper = shallow(
    <Select>
      <Option />
    </Select>
  );
  expect(wrapper).toMatchSnapshot();
});

// props: defaultValue 체크
it("Select:defaultValue", () => {
  const wrapper = shallow(
    <Select defaultValue="1">
      <Option value="1" />
      <Option value="2" />
    </Select>
  );
  expect(
    wrapper
      .render()
      .find("option[value='1']")
      .prop("selected")
  ).toEqual(true);
});
