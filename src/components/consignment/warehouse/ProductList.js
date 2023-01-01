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
            title: "ماهیت کالا",
            key: "size",
            width: "5%",
        },
        {
            title: "کد فروشنده",
            key: "sellerID",
            width: "10%",
        },
        {
            title: "موجودی در راه",
            key: "inventory",
            width: "10%",
        },
        {
            title: "موجودی در شاواز",
            key: "shavazInventory",
            width: "10%",
        },
        {
            title: "سقف مجاز برای ارسال",
            key: "max",
            width: "10%",
        },
    ]
    const dataList = [
        {
            ID: 1,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 50 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            variety: 54545,
            size: "کوچک",
            sellerID: 1685,
            inventory: 1,
            shavazInventory: 0,
            max: 10,
        }
    ]
    return (
        <Card
            title={
                <div className='flex-row'>
                    <Button label="ایجاد محموله" />
                    <Pagination />
                </div>
            }
            actions={[
                <Pagination />
            ]}
        >
            <Table
                rowSelection={{ type: "checkbox" }}
                columns={columns}
                dataList={dataList}
            />
        </Card>
    )
}