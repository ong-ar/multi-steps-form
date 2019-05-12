import * as React from "react";

interface IProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const TextInput: React.SFC<IProps> = ({ onChange, placeholder }) => {
  return <input type="text" onChange={onChange} placeholder={placeholder} />;
};

export default TextInput;
