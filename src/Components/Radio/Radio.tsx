import * as React from "react";

interface IProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.SFC<IProps> = ({
  name,
  value,
  disabled,
  checked,
  onChange,
  children
}) => {
  const inputStyle: React.CSSProperties = {
    marginLeft: -20,
    position: "absolute"
  };

  const labelStyle: React.CSSProperties = {
    cursor: "pointer",
    paddingLeft: 20,
    paddingRight: 10
  };
  return (
    <label style={labelStyle}>
      <input
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        onChange={onChange}
        style={inputStyle}
      />
      {children}
    </label>
  );
};

export default Radio;
