import ACL from 'components/ACL'
import { Form as AntForm } from 'antd'
import Upload from 'components/utils/upload'
import "components/utils/form/items/formItem.scss"

export function FormUpload({ name, label, required, children, ...props }) {
    const normFile = (e) => {
        if (Array.isArray(e)) return e
        return e?.fileList
    };

    return (
        <AntForm.Item
            className='form-item'
            valuePropName="fileList"
            name={name}
            getValueFromEvent={normFile}
            rules={[{ required, message: `${label} اجباری است` }]}
        >
            <Upload {...props} >
                {children}
            </Upload>
        </AntForm.Item>
    )
}

export default ACL(FormUpload)