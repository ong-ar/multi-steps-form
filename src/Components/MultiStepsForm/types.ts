interface IInput {
  formId: number;
  title: string;
  items: IInputItem[];
}

interface IOption {
  id: number;
  text: string;
}

interface IInputItem {
  itemId: number;
  title: string;
  formType: number;
  options: IOption[];
}

interface IOutput {
  id: number;
  items: IOutputItem[];
}

interface IOutputItem {
  id: string | number;
  answer: string;
}

export { IInput, IOption, IInputItem, IOutput, IOutputItem };
