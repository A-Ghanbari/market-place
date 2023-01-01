import Card from 'components/utils/card'
import { ColumnGrid, Row } from 'components/utils/grid'
import PageHeader from 'components/utils/pageHeader'
import { useParams } from 'react-router-dom'
import Filter from 'components/consignment/list/detail/Filter'
import ProductList from 'components/consignment/list/detail/ProductList'
import Button from 'components/utils/field/button'

const fieldCol = { sm: 24, md: 24, lg: 8, xl: 8, xxl: 4 }
export default function Detail() {
    const { ID } = useParams()

    const items = [
        {
            title: "نوع محموله :",
            text: "کوچک"
        },
        {
            title: "روش تحویل :",
            text: "توسط فروشنده"
        },
        {
            title: "محل تحویل :",
            text: "انبار زرین"
        },
        {
            title: "تاریخ دریافت :",
            text: "1401/4/7"
        },
        {
            title: "ساعت دریافت :",
            text: "11 - 12"
        },
        {
            title: "وضعیت :",
            text: "دریافت شده"
        },
    ]
    return (
        <>
            <PageHeader
                title="جزییات محموله"
                subTitle="جزییات محموله، تاریخ، روش تحویل و وضعیت آن را در این قسمت پیگیری کنید.‌‌‌"
            />
            <Row>
                <Card
                    title={`جزییات محموله شماره ${ID}`}
                    actions={[
                        <Button
                            label="رسید تحویل محموله"
                            type="primary-fail"
                        />
                    ]}
                >
                    <ColumnGrid col={fieldCol}>
                        {items.map(item => (
                            <div key={item.title} className='fail-box flex-row'>
                                <span>{item.title}</span>
                                <span className='fail'>{item.text}</span>
                            </div>
                        ))}
                    </ColumnGrid>
                </Card>
                <Filter />
                <ProductList />
            </Row>
        </>
    )
}
