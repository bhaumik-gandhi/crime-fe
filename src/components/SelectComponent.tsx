import Form from 'react-bootstrap/Form';

type DropdownType = {
  options: string[],
  onChange: React.ChangeEventHandler<HTMLSelectElement>
  value: string
}

export function SelectComponent({ options, onChange, value }: DropdownType) {
  return (
    <Form.Select onChange={onChange} value={value}>
      {options.map((option: string, index) => <option key={index}>{option}</option>)}
    </Form.Select>
  );
}
