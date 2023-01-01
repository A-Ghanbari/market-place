import AttributeMaker from 'components/utils/attributeMarker'
import Collapse from 'components/utils/collapse'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import { ColumnGrid } from 'components/utils/grid'


const fieldsTwoCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
export default function Property({ onFinish, data }) {
    return (
        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header'>
                    <h4>درج ویژگی‌های کالا</h4>
                    <div className='collapse-line' />
                </div>
            }
        >
            <Form onFinish={onFinish}>
                <ColumnGrid col={fieldsTwoCol}>
                    {data.map((item) => <AttributeMaker key={item.id} type={item.selectType} item={item} />)}</ColumnGrid>
                <Button
                    label="ادامه"
                    htmlType="submit"
                />
            </Form>
        </Collapse >
    )
}
