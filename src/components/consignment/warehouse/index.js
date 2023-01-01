import { Row } from 'components/utils/grid'
import Filter from 'components/consignment/warehouse/Filter'
import ProductList from 'components/consignment/warehouse/ProductList'
import PageHeader from 'components/utils/pageHeader'

export default function Warehouse() {
    return (
        <>
            <PageHeader
                title="ایجاد محموله برای انبار "
                subTitle="از این قسمت می‌توانید برای نگهداری محصولاتی که در یک‌ ماه گذشته از آنها سفارش داشته‌اید،‌ محموله ایجاد کرده و به انبار شاواز ارسال کنید."
            />
            <Row>
                <Filter />
                <ProductList />
            </Row>
        </>
    )
}
