import { useParams } from 'react-router-dom'
import Card from 'components/utils/card'
import { ColumnGrid, Row } from 'components/utils/grid'
import PageHeader from 'components/utils/pageHeader'
import Pagination from 'components/utils/pagination'
import Table from 'components/utils/table'
import Form from 'components/utils/form'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormInput from 'components/utils/form/items/FormInput'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import testImg from 'assets/images/test.png'

export default function Detail() {
    const fieldCol = { sm: 24, md: 12, lg: 8, xl: 8, xxl: 6 }
    const { ID } = useParams()
    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "کد فروشنده",
            key: "sellerID",
            width: "5%",
        },
        {
            title: "شماره سفارش ",
            key: "orderID",
            width: "10%",
        },
        {
            title: "تاریخ ثبت سفارش ",
            key: "orderDate",
            width: "10%",
        },
        {
            title: " تاریخ نهایی شدن سفارش",
            key: "orderFinalDate",
            width: "10%",
        },
        {
            title: "تعداد سفارش",
            key: "orderNum",
            width: "5%",
        },
        {
            title: "تاریخ تعهد ارسال به شاواز",
            key: "postDate",
            width: "10%",
        },
        {
            title: "قیمت فروش",
            key: "price",
            width: "10%",
        },
        {
            title: "تخفیف شگفت انگیز ",
            key: "discont",
            width: "10%",
        },
        {
            title: "قیمت کل",
            key: "totalPrice",
            width: "10%",
        },
    ]
    const dataList = [
        {
            ID: 1,
            sellerID: 0,
            orderID: 411545,
            orderDate: "۱۴۰۱/۰۴/۰۱",
            orderFinalDate: "۱۴۰۱/۰۴/۰۱",
            postDate: "۱۴۰۱/۰۴/۰۱",
            orderNum: 1,
            price: 13000,
            discont: 0,
            totalPrice: 13000,
        },
    ]
    return (
        <div className='order-detail'>
            <PageHeader
                title="جزییات سفارش "
                subTitle="اطلاعات و جزییات مربوط به سفارش"
            />
            <Row>
                <Card>
                    <div className='product-info flex-row'>
                        <img src={testImg} width={70} height={70} />
                        <h3>تینت لب مایع گیلاسی اتود مدل Dear Darling </h3>
                        <span>کد محصول : 0</span>
                        <span>کد تنوع : {ID}</span>
                        <span>کد کالا نزد فروشنده : 0</span>
                    </div>
                    <Form >
                        <ColumnGrid col={fieldCol}>
                            <FormRadioButton
                                label="فیلتر محصولات"
                                options={[
                                    {
                                        value: 1,
                                        label: "گذشته و امروز"
                                    },
                                    {
                                        value: 2,
                                        label: "فردا به بعد"
                                    }
                                ]}
                            />
                            <FormSelect
                                label="وضعیت سفارش "
                                items={[
                                    {
                                        value: 1,
                                        text: "همه موارد"
                                    },
                                    {
                                        value: 2,
                                        text: "در حال پردازش"
                                    },
                                    {
                                        value: 3,
                                        text: "آماده پردازش"
                                    },
                                    {
                                        value: 4,
                                        text: "در حال بررسی"
                                    }
                                ]}
                            />
                            <FormInput
                                label="جستجوی شماره سفارش"
                                text="شماره سفارش را وارد کنید..."
                            />
                        </ColumnGrid>
                        <ActionButton position="center">
                            <Button
                                label="جستجو"
                                type="primary-success"
                            />
                        </ActionButton>
                    </Form>
                </Card>
                <Card
                    title={
                        <div className='flex-row'>
                            <Pagination />
                        </div>
                    }
                    actions={[
                        <Pagination />
                    ]}
                >
                    <Table
                        columns={columns}
                        dataList={dataList}
                    />
                </Card>
            </Row>
        </div>
    )
}
