import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Radio from 'components/utils/field/radio'
import "components/utils/form/items/formItem.scss"

export function FormRadioButton({ name, label, required, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            name={name}
            label={label}
            rules={[{ required, message: `انتخاب ${label} اجباری است` }]}
        >
            <Radio
                className="form-item-radio"
                optionType="button"
                buttonStyle="solid"
                {...props}
            />
        </AntForm.Item>
    )
}

export default ACL(FormRadioButton)