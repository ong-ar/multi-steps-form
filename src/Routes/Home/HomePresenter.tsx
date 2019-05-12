import * as React from "react";
import MultiStepForm from "../../Components/MultiStepForm";
import input from "../../assets/input.json";

const HomePresenter: React.SFC = () => {
  return (
    <div>
      멀티 스텝 폼
      <div>
        <MultiStepForm input={input} />
      </div>
    </div>
  );
};

export default HomePresenter;
