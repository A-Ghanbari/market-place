import Card from 'components/utils/card'
import Pagination from 'components/utils/pagination'
import Table from 'components/utils/table'
import Link from 'components/utils/link'

export default function ConsignmentList() {
    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "شماره محموله",
            width: "10%",
            key: "ID",
            render: (f, r) => (
                <Link className="fail" to={`./detail/${r.ID}`} title="جزییات">
                    {r.ID}
                </Link>
            ),
        },
        {
            title: "محموله برای",
            key: "consignmentFor",
            width: "10%",
        },
        {
            title: "تحویل توسط",
            key: "sender",
            width: "10%",
        },
        {
            title: "ماهیت محموله",
            key: "size",
            width: "10%",
        },
        {
            title: "تاریخ ایجاد",
            key: "createDate",
            width: "10%",
        },
        {
            title: "تاریخ پیش‌بینی تحویل",
            key: "forecastDate",
            width: "10%",
        },
        {
            title: "تاریخ تحویل به انبار",
            key: "deliveryDate",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "10%",
        },
        {
            title: "انبار تحویل",
            key: "warehouse",
            width: "10%",
        },
        {
            title: "عملیات",
            width: "5%",
        },
    ]
    const dataList = [
        {
            ID: 1000002,
            consignmentFor: "سفارش",
            sender: "",
            size: "کوچک",
            createDate: "۱۴۰۱/۰۴/۰۷ ۱۱ - ۱۲",
            forecastDate: "۱۴۰۱/۰۴/۰۷ ۱۱ - ۱۲",
            deliveryDate: "",
            status: "آماده ارسال",
            warehouse: "استاد معین",
        },
        {
            ID: 2999999,
            consignmentFor: "سفارش",
            sender: "",
            size: "کوچک",
            createDate: "۱۴۰۱/۰۴/۰۷ ۱۱ - ۱۲",
            forecastDate: "۱۴۰۱/۰۴/۰۷ ۱۱ - ۱۲",
            deliveryDate: "۱۴۰۱/۰۴/۰۷ ۱۱ - ۱۲",
            status: "دریافت شده",
            warehouse: "زرین",
        }
    ]
    return (
        <Card
            title={
                <Pagination />
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
    )
}