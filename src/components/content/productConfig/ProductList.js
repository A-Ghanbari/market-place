import Card from 'components/utils/card'
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
            title: "کد فروشنده",
            key: "sellerID",
            width: "10%",
        },
        {
            title: "کد محصول",
            key: "ID",
            width: "10%",
        },
        {
            title: "گروه کالایی",
            key: "category",
            width: "10%",
        },
        {
            title: "پلتفرم نمایش",
            key: "platform",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "10%",
        },
        {
            title: "فعال/غیرفعال",
            width: "10%",
        }
    ]
    const dataList = [
        {
            ID: 14545,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 50 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            sellerID: 25,
            category: "مراقبت از پوست",
            platform: "شاواز",
            status: "تایید شده",
            infoData: [{
                post: "shavaz",
                referencePrice: "1000",
                price: "500",
                maxOrder: "2",
                sendInterval: "2",
                sellerInventory: "2",
                shavazInventory: "0",
                delivery: "1",
                deliveryTime: "1",
                inventory: "1",
                warehouse: "0",
            }]
        },
        {
            ID: 54642,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 100 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            sellerID: 25,
            category: "مراقبت از پوست",
            platform: "شاواز",
            status: "تایید شده",
            infoData: [{
                post: "shavaz",
                referencePrice: "5000",
                price: "200",
                maxOrder: "2",
                sendInterval: "3",
                sellerInventory: "5",
                shavazInventory: "0",
                delivery: "1",
                deliveryTime: "1",
                inventory: "1",
                warehouse: "0",
            }]
        },
        {
            ID: 35422,
            title: "کرم مرطوب کننده ویت یو مدل Juicy Grapes ظرفیت 200 میلی لیتر",
            image: <img src={testImg} width={80} height={80} />,
            sellerID: 25,
            category: "مراقبت از پوست",
            platform: "شاواز",
            status: "تایید شده",
            infoData: [{
                post: "shavaz",
                referencePrice: "3000",
                price: "100",
                maxOrder: "3",
                sendInterval: "3",
                sellerInventory: "3",
                shavazInventory: "0",
                delivery: "1",
                deliveryTime: "1",
                inventory: "1",
                warehouse: "0",
            }]
        },
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
            <Table columns={columns} dataList={dataList} expandable={{ expandedRowRender }} />
        </Card>
    )
}

const expandedRowRender = (record) => {
    const columns = [
        {
            title: 'ارسال توسط',
            key: 'post',
        },
        {
            title: 'قیمت مرجع (ریال)',
            key: 'referencePrice',
        },
        {
            title: 'قیمت کالا (ریال)',
            key: 'price',
        },
        {
            title: 'حداکثر سفارش در سبد',
            key: 'maxOrder',
        },
        {
            title: 'بازه ارسال (روز)',
            key: 'sendInterval',
        },
        {
            title: 'موجودی نزد فروشنده',
            key: 'sellerInventory',
        },
        {
            title: 'موجودی نزد شاواز',
            key: 'shavazInventory',
        },
        {
            title: 'بازه ارسال به مشتری',
            key: 'delivery',
        },
        {
            title: 'مدت زمان تحویل از ثبت سفارش',
            key: 'deliveryTime',
        },
        {
            title: 'مانده قابل فروش',
            key: 'inventory',
        },
        {
            title: 'سقف انبارش',
            key: 'warehouse',
        },
    ]

    return <Table columns={columns} dataList={record.infoData} />
}
