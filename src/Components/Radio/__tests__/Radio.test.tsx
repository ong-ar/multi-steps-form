import * as React from "react";
import { shallow } from "enzyme";

import Radio from "../Radio";

// radio
it("Radio", () => {
  const wrapper = shallow(<Radio />);
  expect(wrapper).toMatchSnapshot();
});

// props: name 체크
it("Radio:name", () => {
  const wrapper = shallow(<Radio name="radio" />);
  expect(wrapper.find("input").prop("name")).toEqual("radio");
});

// props: value 체크
it("Radio:value", () => {
  const wrapper = shallow(<Radio value="radio" />);
  expect(wrapper.find("input").prop("value")).toEqual("radio");
});

// props: disabled 체크
it("Radio:disabled", () => {
  const wrapper = shallow(<Radio disabled={true} />);
  expect(wrapper.find("input").prop("disabled")).toEqual(true);
});

// props: checked 체크
it("Radio:checked", () => {
  const wrapper = shallow(<Radio checked={false} />);
  expect(wrapper.find("input").prop("checked")).toEqual(false);
});

// props: defaultChecked 체크
it("Radio:defaultChecked", () => {
  const wrapper = shallow(<Radio defaultChecked={true} />);
  expect(wrapper.find("input").prop("defaultChecked")).toEqual(true);
});
