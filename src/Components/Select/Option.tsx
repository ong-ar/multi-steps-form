import * as React from "react";

interface IProps {
  value?: string;
  disabled?: boolean;
}

const Option: React.SFC<IProps> = ({ children, value, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
};

export default Option;
