import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import { InputPassword } from 'components/utils/field/input'
import "components/utils/form/items/formItem.scss"

export function FormInputPassword({ name, text, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            rules={[{ required, message: `وارد کردن ${label} اجباری است` }]}
        >
            <InputPassword {...props} placeholder={text} />
        </AntForm.Item>
    )
}

export default ACL(FormInputPassword)