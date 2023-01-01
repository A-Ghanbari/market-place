import Card from 'components/utils/card'
import Pagination from 'components/utils/pagination'
import Table from 'components/utils/table'
import Icon from 'components/utils/field/Icon'

export default function ProductList() {

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "عنوان",
            key: "title",
            width: "10%",
        },
        {
            title: "کد تنوع",
            key: "ID",
            width: "5%",
        },
        {
            title: "کد فروشنده",
            key: "sellerID",
            width: "5%",
        },
        {
            title: "ارسال توسط",
            key: "post",
            width: "5%",
        },
        {
            title: "بازه زمانی ارسال",
            key: "postTime",
            width: "5%",
        },
        {
            title: "کانال فروش",
            key: "platform",
            width: "5%",
        },
        {
            title: "قیمت مرجع",
            key: "referencePrice",
            width: "10%",
        },
        {
            title: "قیمت فروش",
            key: "price",
            width: "10%",
        },
        {
            title: "موجودی",
            key: "num",
            width: "5%",
        },
        {
            title: " حداکثر سفارش در سبد",
            key: "max",
            width: "5%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "5%",
            render: (r) => r ? <span className='approved' /> : <span className='unapproved' />
        },
        {
            title: "ابعاد",
            key: "size",
            width: "10%",
        },
        {
            title: "وزن",
            key: "weight",
            width: "5%",
        },
        {
            key: "actions",
            width: "5%",
            render: (f, r) => (
                <div className="actions">
                    <Icon key="edit" type="edit" />
                </div>
            ),
        }
    ]
    const dataList = [
        {
            ID: 454532,
            title: "سفید",
            platform: "شاواز",
            status: true,
            num: 1,
            sellerID: 10,
            post: "شاواز",
            postTime: 1,
            referencePrice: 10000,
            price: 10000,
            max: 2,
            size: 10 * 10 * 2,
            weight: 20,
        },
        {
            ID: 40032,
            title: "زرد",
            platform: "شاواز",
            status: false,
            num: 1,
            sellerID: 10,
            post: "شاواز",
            postTime: 1,
            referencePrice: 15000,
            price: 10000,
            max: 3,
            size: 12 * 13 * 5,
            weight: 22,
        },
    ]
    
    return (
        <Card
            title={
                <div className='flex-row'>
                    <h3>لیست تنوع ها</h3>
                    <Pagination />
                </div>
            }
            actions={[
                <Pagination />
            ]}
        >
            <Table columns={columns} dataList={dataList} />
        </Card>
    )
}
