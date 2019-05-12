import * as React from "react";

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
}

const Select: React.SFC<IProps> = ({ children, onChange, defaultValue }) => {
  return (
    <div>
      <select onChange={onChange} value={defaultValue}>
        {children}
      </select>
    </div>
  );
};

export default Select;
