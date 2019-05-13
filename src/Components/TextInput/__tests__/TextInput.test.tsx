import * as React from "react";
import { shallow } from "enzyme";

import TextInput from "../TextInput";

// textinput
it("TextInput", () => {
  const wrapper = shallow(<TextInput />);
  expect(wrapper).toMatchSnapshot();
});

// props: placeholder 체크
it("TextInput:placeholder", () => {
  const wrapper = shallow(<TextInput placeholder="textinput" />);
  expect(wrapper.find("input").prop("placeholder")).toEqual("textinput");
});
