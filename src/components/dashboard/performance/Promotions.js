import Card from 'components/utils/card'
import Calendar from 'components/utils/field/calendar'
import { Col, Row } from 'components/utils/grid'

const cardCol = { sm: 24, md: 24, lg: 24, xl: 8, xxl: 8 }
const calendarCol = { sm: 24, md: 24, lg: 24, xl: 16, xxl: 16 }
export default function Promotions() {
    const promotionList = [
        {
            title: "شگفت استایل",
            date: "25 خرداد تا 28 خرداد",
            color: "#000"
        },
        {
            title: "شگفت استایل",
            date: "26 خرداد تا 30 خرداد",
            color: "#0f0",
        },
        {
            title: "شگفت استایل",
            date: "30 خرداد تا 2 تیر",
            color: "#00f",
        },
        {
            title: "شگفت استایل",
            date: "1 تیر تا 1 تیر",
            color: "#ff0",
        },
        {
            title: "شگفت استایل",
            date: "2 تیر تا 5 تیر",
            color: "#ff1254"
        },
        {
            title: "شگفت استایل",
            date: "3 تیر تا 4 تیر",
            color: "#f0f"
        }
    ]

    const events = [
        {
            id: 1,
            start: new Date("2022, 6, 15"),
            end: new Date("2022, 6, 19"),
            color: "#000",
        },
        {
            id: 2,
            start: new Date("2022, 6, 16"),
            end: new Date("2022, 6, 21"),
            color: "#0f0",
        },
        {
            id: 3,
            start: new Date("2022, 6, 20"),
            end: new Date("2022, 6, 24"),
            color: "#00f",
        },
        {
            id: 4,
            start: new Date("2022, 6, 22"),
            end: new Date("2022, 6, 22"),
            color: "#ff0",
        },
        {
            id: 5,
            start: new Date("2022, 6, 23"),
            end: new Date("2022, 6, 27"),
            color: "#ff1254",
        },
        {
            id: 6,
            start: new Date("2022, 6, 24"),
            end: new Date("2022, 6, 26"),
            color: "#f0f",
        },
    ]

    return (
        <div className='promotion'>
            <Card>
                <Row gutter={[16, 16]}>
                    <Col {...cardCol}>
                        <div className='promotion-card'>
                            <Card title="پروموشن های پیش رو">
                                <div className='promotion-list'>
                                    {promotionList.map(item => (
                                        <div key={item.color} className='promotion-list-item'>
                                            <span style={{ borderRight: `3px solid ${item.color}` }}>{item.title}</span>
                                            <span>{item.date}</span>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col {...calendarCol}>
                        <div className='calendar'>
                            <Calendar
                                events={events}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}
