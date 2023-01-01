import { useEffect } from "react";
import { Form as AntForm } from "antd";

function Form({ name, initialValues, onFinish, children, onReset, ...rest }) {
  const [form] = AntForm.useForm();
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  return (
    <AntForm
      form={form}
      name={name}
      initialValues={initialValues}
      onFinish={onFinish}
      onReset={onReset}
      {...rest}
    >
      {children}
    </AntForm>
  );
}

export default Form;
