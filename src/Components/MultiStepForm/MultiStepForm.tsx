import * as React from "react";
import { Checkbox, CheckboxGroup } from "../Checkbox";
import { Radio, RadioGroup } from "../Radio";
import { TextInput } from "../TextInput";
import { Select, Option } from "../Select";
import input from "../../assets/input.json";

interface IOption {
  id: string | number;
  text: string;
}

interface IInputItem {
  itemId: string | number;
  title: string;
  formType: string | number;
  options: IOption[];
}

const CHECKBOX = 1;
const RADIO = 2;
const TEXTINPUT = 3;
const SELECTBOX = 4;

const getButtonsState = (indx: number, length: number) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
      showSubmitBtn: false
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
      showSubmitBtn: false
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
      showSubmitBtn: true
    };
  }
};

const MainForm: React.FC = () => {
  const multiStepId = input.formId;
  const multiStepTitle = input.title;
  const stepItems: IInputItem[] = input.items;
  const stepCount = stepItems.length;

  const [currentStep, setCurrentStep] = React.useState(0);
  const [buttonState, setButtonState] = React.useState(
    getButtonsState(0, stepCount)
  );

  // output 초기화
  const [output, setOutput] = React.useState({
    id: multiStepId,
    items: Array.from(new Array(stepCount), (v, k) => {
      return { id: stepItems[k].itemId, answer: "" };
    })
  });

  const updateOutput = (itemId: string | number, value: string) => {
    const updatedOutput = output;
    updatedOutput.items = updatedOutput.items.map(item => {
      if (item.id === itemId) {
        return { id: itemId, answer: value };
      } else {
        return item;
      }
    });

    setOutput(updatedOutput);
  };

  // checkboxgroup onchange
  const checkboxGroupChangeHandler = (
    values: string[],
    itemId: string | number
  ) => {
    updateOutput(itemId, values.join());
  };

  // radiogroup onchange
  const radioGroupChangeHandler = (value: string, itemId: string | number) => {
    updateOutput(itemId, value);
  };

  // textinput onchange
  const textInputChangeHandler = (value: string, itemId: string | number) => {
    updateOutput(itemId, value);
  };

  // select onchange
  const SelectChangeHandler = (value: string, itemId: string | number) => {
    updateOutput(itemId, value);
  };

  // items(json) -> component 변환 함수
  const convertItemToStep = (item: IInputItem) => {
    switch (item.formType) {
      case CHECKBOX:
        return (
          <CheckboxGroup
            onChange={checkboxGroupChangeHandler}
            groupId={item.itemId}
          >
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
            onChange={radioGroupChangeHandler}
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
        return (
          <TextInput onChange={textInputChangeHandler} itemId={item.itemId} />
        );
      case SELECTBOX:
        return (
          <Select
            onChange={SelectChangeHandler}
            defaultValue=""
            itemId={item.itemId}
          >
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

  const next = () => {
    if (output.items[currentStep].answer === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const changedStep = currentStep >= stepCount ? stepCount : currentStep + 1;
    setCurrentStep(changedStep);
    setButtonState(getButtonsState(changedStep, stepCount));
  };

  const prev = () => {
    const changedStep = currentStep <= 0 ? 0 : currentStep - 1;
    setCurrentStep(changedStep);
    setButtonState(getButtonsState(changedStep, stepCount));
  };

  const submit = () => {
    const emptyItems = output.items.filter(item => item.answer === "");
    if (emptyItems.length > 0) {
      alert(
        emptyItems.map(item => item.id).join() +
          "번째 폼의 값 입력이 필요합니다."
      );
      return;
    }
    console.log(output);
  };

  return (
    <div>
      <div>{multiStepTitle}</div>
      {stepItems.map((stepItem: IInputItem, index) => {
        return (
          <div key={index}>
            <div style={currentStep === index ? {} : { display: "none" }}>
              <div>{stepItem.title}</div>
              {convertItemToStep(stepItem)}
            </div>
          </div>
        );
      })}
      <div>
        <button
          onClick={prev}
          style={buttonState.showPreviousBtn ? {} : { display: "none" }}
        >
          prev
        </button>
        <button
          onClick={next}
          style={buttonState.showNextBtn ? {} : { display: "none" }}
        >
          next
        </button>
        <button
          onClick={submit}
          style={buttonState.showSubmitBtn ? {} : { display: "none" }}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default MainForm;
