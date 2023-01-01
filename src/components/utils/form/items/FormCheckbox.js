import ACL from "components/ACL";
import { Form as AntForm } from "antd";
import "components/utils/form/items/formItem.scss";
import Checkbox from "components/utils/checkbox";

export function FormCheckbox({ name, label, ...props }) {
  return (
    <AntForm.Item className="form-item" name={name} valuePropName="checked">
      <Checkbox label={label} {...props} />
    </AntForm.Item>
  );
}

export default ACL(FormCheckbox);
