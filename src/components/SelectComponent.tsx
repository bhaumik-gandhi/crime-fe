import Form from 'react-bootstrap/Form';

type DropdownType = {
  options: string[],
  onChange: React.ChangeEventHandler<HTMLSelectElement>,
  value: string,
  dataTestId: string
}

export function SelectComponent({ options, onChange, value, dataTestId }: DropdownType) {
  return (
    <Form.Select onChange={onChange} value={value} data-testid={dataTestId}>
      {options.map((option: string, index) => <option key={index}>{option}</option>)}
    </Form.Select>
  );
}
