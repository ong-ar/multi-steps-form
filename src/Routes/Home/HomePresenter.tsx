import * as React from "react";
import { MultiStepForm, IOutput } from "../../Components/MultiStepForm";
import input from "../../assets/input.json";

const HomePresenter: React.SFC = () => {
  const onSubmit = (output: IOutput) => console.log(output);
  return (
    <div>
      멀티 스텝 폼
      <div>
        <MultiStepForm input={input} onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default HomePresenter;
