import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { Input } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputEmail({ name, label, text, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            label={label}
            rules={[{ required, message: `وارد کردن ${label} اجباری است` }, { type: 'email', message: "آدرس ایمیل صحیح نمی‌باشد" },]}
        >
            <Input {...props} placeholder={text} />
        </AntForm.Item>
    )
}

export default ACL(FormInputEmail)