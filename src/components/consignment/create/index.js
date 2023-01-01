import Form from "components/utils/form"
import { Row } from "components/utils/grid"
import PageHeader from "components/utils/pageHeader"
import Fields from "components/consignment/create/Fields"
import ProductList from "components/consignment/create/ProductList"

export default function Create() {
    return (
        <>
            <PageHeader
                title="ایجاد محموله برای سفارش ها"
                subTitle="در این قسمت می‌توانید برای ارسال محصولاتی که از آنها سفارش داشته‌اید محموله بسازید."
            />
            <Form>
                <Row>
                    <Fields />
                    <ProductList />
                </Row>
            </Form>
        </>
    )
}
