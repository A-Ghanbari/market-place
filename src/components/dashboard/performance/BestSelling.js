import Card from 'components/utils/card'
import Select from 'components/utils/field/select'
import Table from 'components/utils/table'

export default function BestSelling() {
    const columns = [
        {
            title: "ردیف",
            width: "10%",
        },
        {
            title: "تصویر",
            width: "10%",
        },
        {
            title: "نام کالا",
            width: "10%",
            render: (r) => <div className='table-title'>{r}</div>
        },
        {
            title: "تعداد فروش",
            width: "10%",
        },
        {
            title: "مبلغ فروش",
            width: "10%",
        },
        {
            title: "موجودی نزد شاواز",
            width: "10%",
        },
        {
            title: "موجودی نزد فروشنده",
            width: "10%",
        },
        {
            title: "وضعیت",
            width: "10%",
        }
    ]

    return (
        <Card
            title={
                <div className='card-title'>
                    <span>پرفروش‌ترین کالاها</span>
                    <Select defaultValue={0} items={[
                        { text: "روزانه", value: 0 },
                        { text: "هفتگی", value: 1 },
                        { text: "ماهانه", value: 2 }
                    ]} />
                </div>
            }
        >
            <Table columns={columns} />
        </Card >
    )
}
