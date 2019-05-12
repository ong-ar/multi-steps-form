import * as React from "react";

interface IProps {
  onChange?: (changedValue: string, itemId?: string | number) => void;
  defaultValue?: string;
  itemId?: string | number;
}

const Select: React.SFC<IProps> = ({
  children,
  onChange,
  defaultValue,
  itemId
}) => {
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = e => {
    // Select onChange
    if (onChange) {
      onChange(e.target.value, itemId);
    }
  };
  return (
    <div>
      <select onChange={onSelectChange} defaultValue={defaultValue}>
        {children}
      </select>
    </div>
  );
};

export default Select;
