import * as React from "react";
import { Checkbox, CheckboxGroup } from "../../Components/Checkbox";

const HomePresenter: React.SFC = () => {
  const onChange = (values: string[]) => {
    console.log(values);
  };
  return (
    <div>
      멀티 스텝 폼
      <div>
        <CheckboxGroup
          name="abc"
          onChange={onChange}
          defaultValues={["a", "b"]}
        >
          <Checkbox value="a">a</Checkbox>
          <Checkbox value="b">b</Checkbox>
          <Checkbox value="c">c</Checkbox>
          <Checkbox value="d">d</Checkbox>
          <Checkbox value="e">e</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default HomePresenter;
