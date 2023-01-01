import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Switch from 'components/utils/field/switch'
import "components/utils/form/items/formItem.scss"

export function FormSwitch({ label, name, ...props }) {
    return (
        <AntForm.Item
            className='form-item'
            valuePropName="checked"
            initialValue={false}
            name={name}
            label={label}
        >
            <Switch className="form-item-switch" {...props} />
        </AntForm.Item>
    )
}

export default ACL(FormSwitch)