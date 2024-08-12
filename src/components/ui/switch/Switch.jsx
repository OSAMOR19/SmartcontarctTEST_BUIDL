import { Form } from "react-bootstrap";

const Switch = ({ onChange, checked, ...props }) => {
  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        onChange={onChange}
        checked={checked}
        {...props}
      />
    </Form>
  );
};

export default Switch;
