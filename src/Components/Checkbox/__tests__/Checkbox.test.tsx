import * as React from "react";
import { shallow } from "enzyme";

import Checkbox from "../Checkbox";

// checkbox
it("Checkbox", () => {
  const wrapper = shallow(<Checkbox />);
  expect(wrapper).toMatchSnapshot();
});

// props: name 체크
it("Checkbox:name", () => {
  const wrapper = shallow(<Checkbox name="checkbox" />);
  expect(wrapper.find("input").prop("name")).toEqual("checkbox");
});

// props: value 체크
it("Checkbox:value", () => {
  const wrapper = shallow(<Checkbox value="checkbox" />);
  expect(wrapper.find("input").prop("value")).toEqual("checkbox");
});

// props: disabled 체크
it("Checkbox:disabled", () => {
  const wrapper = shallow(<Checkbox disabled={true} />);
  expect(wrapper.find("input").prop("disabled")).toEqual(true);
});

// props: checked 체크
it("Checkbox:checked", () => {
  const wrapper = shallow(<Checkbox checked={false} />);
  expect(wrapper.find("input").prop("checked")).toEqual(false);
});

// props: defaultChecked 체크
it("Checkbox:defaultChecked", () => {
  const wrapper = shallow(<Checkbox defaultChecked={true} />);
  expect(wrapper.find("input").prop("defaultChecked")).toEqual(true);
});
