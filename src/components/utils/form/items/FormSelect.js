import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Select from 'components/utils/field/select'
import "components/utils/form/items/formItem.scss"

export function FormSelect({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            label={label}
            name={name}
            rules={[{ required, message: `انتخاب یکی از فیلد ها اجباری است` }]}
        >
            <Select {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormSelect)