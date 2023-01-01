import PageHeader from 'components/utils/pageHeader'
import Create from 'components/order/delivery/Create'
import List from 'components/order/delivery/List'
import { Row } from 'components/utils/grid'

export default function Delivery() {
    return (
        <>
            <PageHeader
                title="تنظیمات ارسال توسط فروشنده"
                subTitle="در این قسمت می‌توانید تنظیمات مورد نظرتان را در خصوص کالاهایی که تحویل آنها به مشتری بر عهده شماست اعمال نمایید"
            />
            <Row>
                <Create />
                <List />
            </Row>
        </>
    )
}
