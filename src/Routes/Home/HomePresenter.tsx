import * as React from "react";
import { Checkbox, CheckboxGroup } from "../../Components/Checkbox";
import { Radio, RadioGroup } from "../../Components/Radio";
import { TextInput } from "../../Components/TextInput";

const HomePresenter: React.SFC = () => {
  const onCheckboxChange = (values: string[]) => {
    console.log(values);
  };

  const onRadioChange = (value: string) => {
    console.log(value);
  };

  const onTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      멀티 스텝 폼
      <div>
        <CheckboxGroup
          name="abc"
          onChange={onCheckboxChange}
          defaultValues={["a", "b"]}
        >
          <Checkbox value="a">a</Checkbox>
          <Checkbox value="b">b</Checkbox>
          <Checkbox value="c">c</Checkbox>
          <Checkbox value="d">d</Checkbox>
          <Checkbox value="e">e</Checkbox>
        </CheckboxGroup>

        <RadioGroup name="abc" onChange={onRadioChange} defaultValue="a">
          <Radio value="a">a</Radio>
          <Radio value="b">b</Radio>
          <Radio value="c">c</Radio>
          <Radio value="d">d</Radio>
        </RadioGroup>

        <TextInput placeholder="test" onChange={onTextInputChange} />
      </div>
    </div>
  );
};

export default HomePresenter;
