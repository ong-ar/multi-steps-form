import * as React from "react";
import { MultiStepForm, IOutput } from "../../Components/MultiStepForm";
import input from "../../assets/input.json";

const HomePresenter: React.SFC = () => {
  const onSubmit = (output: IOutput) => console.log(output);
  return (
    <div>
      <MultiStepForm input={input} onSubmit={onSubmit} />
    </div>
  );
};

export default HomePresenter;
