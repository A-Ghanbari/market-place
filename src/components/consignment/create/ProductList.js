import Card from 'components/utils/card'
import Icon from 'components/utils/field/Icon'
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
            title: "ماهیت کالا",
            key: "size",
            width: "5%",
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
            title: "موجودی",
            key: "inventory",
            width: "5%",
        },
        {
            title: "سقف مجاز ارسال ",
            key: "max",
            width: "10%",
        },
        {
            title: "تعداد ارسالی",
            key: "send",
            width: "10%",
        },
        {
            key: "actions",
            width: "5%",
            render: (f, r) => (
                <div className="actions">
                    <Icon type="delete" />
                </div>
            ),
        }
    ]
    const dataList = [
        {
            ID: 1,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 50 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54545,
            size: "کوچک",
            sellerID: 0,
            num: 1,
            inventory: 1,
            max: 1,
            send: 1,
        },
        {
            ID: 2,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 100 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54545,
            size: "کوچک",
            sellerID: 0,
            num: 1,
            inventory: 1,
            max: 1,
            send: 1,
        },
        {
            ID: 3,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 200 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54545,
            size: "کوچک",
            sellerID: 0,
            num: 2,
            inventory: 2,
            max: 2,
            send: 2,
        },
    ]
    return (
        <Card
            title={
                <div className='flex-row'>
                    <h4>لیست نهایی محموله</h4>
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
