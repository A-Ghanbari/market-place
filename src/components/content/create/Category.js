import Collapse from 'components/utils/collapse'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormCascader from 'components/utils/form/items/FormCascader'


export default function Category({ onFinish, categoryData }) {
    return (
        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header'>
                    <h4>انتخاب گروه کالا</h4>
                    <div className='collapse-line' />
                </div>
            }
        >
            <Form
                onFinish={onFinish}
            >
                <FormCascader
                    name="category"
                    label="گروه کالا"
                    options={categoryData}
                    required={true}
                />
                <Button
                    label="ادامه"
                    htmlType='submit'
                />
            </Form>
        </Collapse>)
}
