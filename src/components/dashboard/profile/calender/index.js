import Calendar from 'components/utils/field/calendar'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
    USER_CALENDER_INFO as calenderEntity,
} from 'tools/utils/entities'
import { getUserCalenderInfo } from 'store/actions/profile'
import Table from 'components/utils/table'
import CreateWorkDay from './CreateWorkDay'

const columns = [
    {
        title: "ردیف",
        key: "index",
        width: "5%",
        render: (text, record, index) => index + 1,
    }, {
        title: "ارسال کننده",
        key: "postType",
        width: "5%",
    }, {
        title: "فعال",
        key: "isDeactive",
        width: "5%",
        render: (f, r) => (
            (f) ? "خیر" : "بله"
        )
    }, {
        title: "تعداد سفارش",
        key: "orderCount",
        width: "5%",
    }, {
        title: "تاریخ",
        key: "dateString",
        width: "10%",
    }
]

export default function WorkCalendar() {
    const [createVisible, setCreateVisible] = useState(false)
    const [calenderDate, setCalenderDate] = useState({})
    const { data, loading } = useSelector(
        (s) => s[calenderEntity.name]
    )

    useEffect(() => {
        getUserCalenderInfo("")
    }, [createVisible])

    const handleDateClick = (e) => {
        setCalenderDate({ date: e.dateStr, jData: e.date })
        setCreateVisible(true)
    };
    return (
        <>
            {createVisible && <CreateWorkDay show={createVisible} change={setCreateVisible} data={calenderDate} />}
            <div className='work-calendar'>
                <div className='profile-tab-title'>
                    <h3>تقویم کاری</h3>
                </div>
                <Calendar
                    dateClick={(e) => handleDateClick(e)}
                />
                <Table
                    dataList={data}
                    loading={loading}
                    columns={columns}
                />
            </div>
        </>
    )
}
