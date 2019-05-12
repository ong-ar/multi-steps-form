import * as React from "react";
import Checkbox from "./Checkbox";

interface IProps {
  name?: string;
  defaultValues?: string[];
  onChange?: (checkedValue: string[]) => void;
}

const CheckboxGroup: React.FC<IProps> = ({
  name,
  defaultValues,
  onChange,
  children
}) => {
  const [values, setValues] = React.useState<string[]>(defaultValues || []);

  // Checkbox Change handler
  const onCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    let changedValues: string[] = [];
    if (e.target.checked) {
      changedValues = [...values, e.target.value];
    } else {
      changedValues = values.filter(value => value !== e.target.value);
    }

    // set state
    setValues(changedValues);

    // CheckboxGroup onChange
    if (onChange) {
      onChange(changedValues);
    }
  };

  const checkboxGroup = {
    name,
    onChange: onCheckboxChange
  };

  const customedChildren = React.Children.map(
    children,
    (child: React.ReactElement) => {
      if (child && child.type === Checkbox) {
        // defaultValues 적용
        if (defaultValues && defaultValues.includes(child.props.value)) {
          return React.cloneElement(child, {
            ...checkboxGroup,
            checked: true
          });
        } else {
          return React.cloneElement(child, {
            ...checkboxGroup,
            checked: false
          });
        }
      } else {
        return child;
      }
    }
  );
  return <div>{customedChildren}</div>;
};

export default CheckboxGroup;