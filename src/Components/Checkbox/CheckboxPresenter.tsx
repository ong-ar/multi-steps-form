import * as React from "react";

interface IProps {
  name: string;
  disabled?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxPresenter: React.SFC<IProps> = ({
  name,
  disabled = false,
  checked = false,
  onChange,
  children
}) => {
  const inputStyle: React.CSSProperties = {
    marginLeft: -20,
    position: "absolute"
  };

  const labelStyle: React.CSSProperties = {
    cursor: "pointer",
    paddingLeft: 20
  };

  return (
    <label style={labelStyle}>
      <input
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        style={inputStyle}
      />
      {children}
    </label>
  );
};

export default CheckboxPresenter;
