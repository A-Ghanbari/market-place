import Radio from 'components/utils/field/radio'
import Table from 'components/utils/table'

export default function Vacation() {

    const items = [
        {
            label: 'پیش رو',
            value: 'پیش رو',
        },
        {
            label: 'گذشته',
            value: 'گذشته',
        },
        {
            label: 'پاک شده',
            value: 'پاک شده',
        },
    ]

    const columns = [
        {
            title: "تاریخ تعطیلی کاری",
            width: "10%",
        },
        {
            title: "وضعیت",
            width: "10%",
        },
        {
            title: "تعهد ارسال	",
            width: "10%",
        },
        {
            title: "عملیات",
            width: "10%",
        }
    ]

    return (
        <div>
            <div className='calendar-table-filter'>
                <h5>وضعیت تعطیلات :</h5>
                <Radio optionType="button" buttonStyle="solid" options={items} />
            </div>
            <Table columns={columns} />
        </div>
    )
}
