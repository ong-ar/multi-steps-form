import * as React from "react";

interface IProps {
  onChange?: (changedValue: string, itemId?: string | number) => void;
  placeholder?: string;
  itemId?: string | number; // 부모 component 에서 ID가 필요할 경우 사용
}

const TextInput: React.SFC<IProps> = ({ onChange, placeholder, itemId }) => {
  const onTextInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // TextInput onChange
    if (onChange) {
      onChange(e.target.value, itemId);
    }
  };

  return (
    <input type="text" onChange={onTextInputChange} placeholder={placeholder} />
  );
};

export default TextInput;
