import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { InputNumber } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputNumber({ name, min = 0, label, text, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            label={label}
            rules={[{ required, message: `وارد کردن ${label} اجباری است` }, { min, message: `${label} باید  ${min} رقم باشد` }]}
        >
            <InputNumber {...props} placeholder={text} />
        </AntForm.Item>
    )
}

export default ACL(FormInputNumber)