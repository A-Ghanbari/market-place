import Button from 'components/utils/field/button'
import Pagination from 'components/utils/pagination'
import Table from 'components/utils/table'
import ActionButton from 'components/utils/actionsButton'

export default function ProductList() {

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "شماره سفارش",
            key: "ID",
            width: "10%",
        },
        {
            title: "تاریخ سفارش",
            key: "ID",
            width: "10%",
        },
        {
            title: "تعهد ارسال به پست",
            width: "10%",
        },
        {
            title: "تعهد ارسال به مشتری ",
            width: "10%",
        },
        {
            title: "مقصد ارسال مرسوله ",
            width: "10%",
        },
        {
            title: "شیوه ارسال مرسوله ",
            width: "10%",
        },
        {
            title: "ماهیت مرسوله",
            width: "10%",
        },
        {
            title: "تعداد کالا مرسوله",
            width: "10%",
        },
        {
            title: "هزینه ارسال",
            width: "10%",
        },
        {
            title: "وضعیت مرسوله",
            width: "10%",
        }
    ]

    return (
        <div className='section-card'>
            <div className='flex-row'>
                <ActionButton>
                    <Button type="secondary-success" label="دریافت خروجی اکسل" />
                </ActionButton>
                <Pagination />
            </div>
            <Table
                rowSelection={{ type: "checkbox" }}
                columns={columns}
            />
            <Pagination />
        </div>
    )
}
