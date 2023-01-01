import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Pagination from 'components/utils/pagination'
import Table from 'components/utils/table'
import testImg from 'assets/images/test.png'

export default function ProductList() {

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            width: "10%",
            key: "image",
        },
        {
            title: "عنوان",
            key: "title",
            width: "20%",
            render: (r) => <div className='table-title'>{r}</div>
        },
        {
            title: "کد محصول",
            key: "ID",
            width: "10%",
        },
        {
            title: "کد تنوع",
            key: "variety",
            width: "10%",
        },
        {
            title: "کد فروشنده",
            key: "sellerID",
            width: "5%",
        },
        {
            title: "تعداد سفارش",
            key: "num",
            width: "5%",
        },
        {
            title: "تعداد ارسالی",
            key: "send",
            width: "5%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "10%",
        },
    ]
    const dataList = [
        {
            ID: 1,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 50 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54545,
            sellerID: 0,
            num: 5,
            send: 5,
            status: "دریافت شده",
        },
        {
            ID: 2,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 100 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54045,
            sellerID: 0,
            num: 1,
            send: 1,
            status: "دریافت شده",
        },
        {
            ID: 3,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 200 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54995,
            sellerID: 0,
            num: 2,
            send: 2,
            status: "دریافت شده",
        },
    ]

    return (
        <Card
            title={
                <div className='flex-row'>
                    <Button type="secondary-success" label="دریافت خروجی اکسل" />
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
    )
}
