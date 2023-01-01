import { Row } from "components/utils/grid"
import PageHeader from "components/utils/pageHeader"
import ConsignmentList from "components/consignment/list/ConsignmentList"
import Filter from "components/consignment/list/Filter"

export default function List() {
    return (
        <>
            <PageHeader
                title="لیست محموله "
                subTitle="لیستی از محموله ها ، تاریخ و روش تحویل و وضعیت آن ها را در این قسمت پیگیری کنید.‌‌‌"
            />
            <Row>
                <Filter />
                <ConsignmentList />
            </Row>
        </>
    )
}
