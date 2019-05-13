import * as React from "react";
import Step from "./Step";
import { IInput, IInputItem, IOutput } from "./types";

interface IProps {
  input: IInput;
  onSubmit?: (output: IOutput) => void;
}

const MultiStepsForm: React.FC<IProps> = ({ input, onSubmit }) => {
  const {
    title: multiStepTitle,
    formId: multiStepId,
    items: stepItems
  } = input;
  const stepCount = stepItems.length;

  const [currentStep, setCurrentStep] = React.useState(0);
  const [buttonState, setButtonState] = React.useState(
    getButtonsState(0, stepCount)
  );

  // output 초기화 (items 길이만큼 itemId 는 유지)
  const [output, setOutput] = React.useState({
    id: multiStepId,
    items: Array.from(new Array(stepCount), (v, k) => {
      return { id: stepItems[k].itemId, answer: "" };
    })
  });

  // output item 찾아 answer 값 변경
  const updateOutput = (itemId: string | number, value: string) => {
    const updatedOutput = output;
    updatedOutput.items = updatedOutput.items.map(item => {
      if (item.id === itemId) {
        return { id: itemId, answer: value };
      } else {
        return item;
      }
    });

    setOutput({ ...output, ...updatedOutput });
  };

  // change event handler
  const handleChange = (value: string, itemId: number) => {
    updateOutput(itemId, value);
  };

  // 다음 스텝 버튼
  const next = () => {
    // 해당 스텝 빈값일 경우
    if (output.items[currentStep].answer === "") {
      alert("값을 입력해주세요.");
      return;
    }
    const changedStep = currentStep >= stepCount ? stepCount : currentStep + 1;
    setCurrentStep(changedStep);
    setButtonState(getButtonsState(changedStep, stepCount));
  };

  // 이전 스텝 버튼
  const prev = () => {
    const changedStep = currentStep <= 0 ? 0 : currentStep - 1;
    setCurrentStep(changedStep);
    setButtonState(getButtonsState(changedStep, stepCount));
  };

  // 제출 버튼
  const submit = () => {
    // 제출 전 빈 값이 있는지 전체적으로 확인
    const emptyItems = output.items.filter(item => item.answer === "");
    if (emptyItems.length > 0) {
      alert(
        emptyItems.map(item => item.id).join() +
          "번째 폼의 값 입력이 필요합니다."
      );
      return;
    }
    // onSubmit 함수 props 가 있을 경우
    if (onSubmit) {
      onSubmit(output);
    }
  };

  // form css
  const formStyle: React.CSSProperties = {
    width: 500,
    height: 300,
    marginLeft: 10,
    paddingLeft: 20,
    border: "1px solid #EEE"
  };

  // title css
  const h2Style: React.CSSProperties = {
    fontSize: "2em",
    color: "#1dccaa"
  };

  return (
    <div style={formStyle}>
      <h2 style={h2Style}>{multiStepTitle}</h2>
      {stepItems.map((stepItem: IInputItem, index) => {
        return (
          <Step
            key={index}
            style={currentStep === index ? {} : { display: "none" }}
            item={stepItem}
            onChange={handleChange}
          />
        );
      })}
      <div>
        <button
          onClick={prev}
          disabled={buttonState.showPreviousBtn ? false : true}
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

// 버튼 노출 상태 계산 함수
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

export default MultiStepsForm;
