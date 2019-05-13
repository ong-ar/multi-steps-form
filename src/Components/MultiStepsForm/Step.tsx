import * as React from "react";
import { Checkbox, CheckboxGroup } from "../Checkbox";
import { Radio, RadioGroup } from "../Radio";
import { TextInput } from "../TextInput";
import { Select, Option } from "../Select";
import { IInputItem } from "./types";

interface IProps {
  item: IInputItem;
  onChange: (value: string, itemId: number) => void;
  style?: React.CSSProperties;
}

// formtype
const CHECKBOX = 1;
const RADIO = 2;
const TEXTINPUT = 3;
const SELECTBOX = 4;

// items(json) -> component 변환 함수
const convertItemToStep = (
  item: IInputItem,
  handleChange: (value: string, itemId: number) => void
) => {
  switch (item.formType) {
    case CHECKBOX:
      return (
        <CheckboxGroup onChange={handleChange} groupId={item.itemId}>
          {item.options.map(option => (
            <Checkbox value={option.text} key={option.id}>
              {option.text}
            </Checkbox>
          ))}
        </CheckboxGroup>
      );
    case RADIO:
      return (
        <RadioGroup
          onChange={handleChange}
          name={"" + item.itemId}
          groupId={item.itemId}
        >
          {item.options.map(option => (
            <Radio value={option.text} key={option.id}>
              {option.text}
            </Radio>
          ))}
        </RadioGroup>
      );
    case TEXTINPUT:
      return <TextInput onChange={handleChange} itemId={item.itemId} />;
    case SELECTBOX:
      return (
        <Select onChange={handleChange} defaultValue="" itemId={item.itemId}>
          <Option value="" disabled={true}>
            선택해주세요.
          </Option>
          {item.options.map(option => (
            <Option value={option.text} key={option.id}>
              {option.text}
            </Option>
          ))}
        </Select>
      );
  }
  return null;
};

const stepStyle: React.CSSProperties = {
  height: 150
};

const Step: React.FC<IProps> = ({ item, onChange, style }) => {
  return (
    <div style={{ ...stepStyle, ...style }}>
      <div>{item.title}</div>
      {convertItemToStep(item, onChange)}
    </div>
  );
};

export default Step;
