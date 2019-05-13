import * as React from "react";
import Radio from "./Radio";

interface IProps {
  name: string;
  defaultValue?: string;
  onChange?: (checkedValue: string, groupId?: string | number) => void;
  groupId?: string | number; // 부모노드에서 ID가 필요할 경우 사용
}

const RadioGroup: React.FC<IProps> = ({
  name,
  defaultValue,
  onChange,
  children,
  groupId
}) => {
  // Radio Change handler
  const onRadioChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    // RadioGroup onChange
    if (onChange) {
      onChange(e.target.value, groupId);
    }
  };

  const radioGroup = {
    name,
    onChange: onRadioChange
  };

  const customedChildren = React.Children.map(
    children,
    (child: React.ReactElement) => {
      if (child && child.type === Radio) {
        // defaultValues 적용
        if (defaultValue === child.props.value) {
          return React.cloneElement(child, {
            ...radioGroup,
            defaultChecked: true
          });
        } else {
          return React.cloneElement(child, {
            ...radioGroup,
            defaultChecked: false
          });
        }
      } else {
        return child;
      }
    }
  );
  return <div>{customedChildren}</div>;
};

export default RadioGroup;
