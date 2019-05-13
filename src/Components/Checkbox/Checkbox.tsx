import * as React from "react";

interface IProps {
  name?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.SFC<IProps> = ({
  name,
  value,
  disabled,
  checked,
  defaultChecked,
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
    <div>
      <label style={labelStyle}>
        <input
          type="checkbox"
          name={name}
          value={value}
          disabled={disabled}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          style={inputStyle}
        />
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
