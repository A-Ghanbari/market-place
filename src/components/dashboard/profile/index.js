import Card from 'components/utils/card'
import { Col, ColumnGrid, Row } from 'components/utils/grid'
import Tabs from 'components/utils/tabs'
import Rating from 'components/dashboard/performance/Rating'
import User from 'components/dashboard/performance/User'
import Info from "components/dashboard/profile/Info"
import Bank from "components/dashboard/profile/Bank"
import Address from "components/dashboard/profile/address"
import Document from 'components/dashboard/profile/Document'
import WorkCalendar from 'components/dashboard/profile/calender'
import useWindowSize from 'hooks/useWindowSize'
import "components/dashboard/profile/profile.scss"

const asideCol = { sm: 24, md: 24, lg: 24, xl: 6, xxl: 6 }
const asideCardCol = { sm: 24, md: 24, lg: 12, xl: 24, xxl: 24 }
const mainCol = { sm: 24, md: 24, lg: 24, xl: 18, xxl: 18 }

function Profile() {
    const { width } = useWindowSize()

    const tabs = [
        {
            title: "اطلاعات فروشنده",
            render: <Info />
        }, {
            title: "اطلاعات حساب بانکی",
            render: <Bank />
        }, {
            title: "اطلاعات تماس و آدرس",
            render: <Address />
        }, {
            title: "بارگذاری مدارک",
            render: <Document />
        }, {
            title: "تقویم کاری",
            render: <WorkCalendar />
        }
    ]

    return (
        <Row gutter={[16, 16]} className="dashboard-section profile" >
            <Col {...asideCol} className="aside">
                <ColumnGrid col={asideCardCol}>
                    <User />
                    {width > 767 && <Rating />}
                </ColumnGrid>
            </Col>
            <Col {...mainCol}>
                <Card>
                    <Tabs tabs={tabs} />
                </Card>
            </Col>
        </Row>
    )
}

export default Profile