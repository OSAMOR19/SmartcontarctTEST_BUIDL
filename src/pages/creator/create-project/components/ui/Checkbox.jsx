import { Form } from "react-bootstrap";

const Checkbox = ({ checkBoxLabel, id, onChange, checked }) => {
  return (
      <Form style={{}}>
        <Form.Check
          type={"checkbox"}
          label={
            <span
              style={{
                cursor: "pointer",
              }}
            >
              {checkBoxLabel}
            </span>
          }
          id={id}
          onChange={onChange}
          checked={checked}
        />
      </Form>
  );
};

export default Checkbox;
