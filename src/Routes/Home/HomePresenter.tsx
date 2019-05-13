import * as React from "react";
import { MultiStepsForm, IOutput } from "../../Components/MultiStepsForm";
import input from "../../assets/input.json";

const HomePresenter: React.SFC = () => {
  const onSubmit = (output: IOutput) => console.log(output);
  return (
    <div>
      <MultiStepsForm input={input} onSubmit={onSubmit} />
    </div>
  );
};

export default HomePresenter;
