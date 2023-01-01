import { Col, ColumnGrid, Row } from 'components/utils/grid'
import User from 'components/dashboard/performance/User'
import Filter from 'components/dashboard/messages/Filter'
import Messages from 'components/dashboard/messages/Messages'
import Rating from 'components/dashboard/performance/Rating'
import useWindowSize from 'hooks/useWindowSize'
import "components/dashboard/messages/messages.scss"

const asideCol = { sm: 24, md: 24, lg: 24, xl: 6, xxl: 6 }
const asideCardCol = { sm: 24, md: 24, lg: 12, xl: 24, xxl: 24 }
const mainCol = { sm: 24, md: 24, lg: 24, xl: 18, xxl: 18 }
const mainCardCol = { sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
export default function Index() {
    const { width } = useWindowSize()

    return (
        <Row gutter={[16, 16]} className="dashboard-section notification" >
            <Col {...asideCol} className="aside">
                <ColumnGrid col={asideCardCol}>
                    <User />
                    {width > 767 && <Rating />}
                </ColumnGrid>
            </Col>
            <Col {...mainCol}>
                <ColumnGrid col={mainCardCol}>
                    <Filter />
                    <Messages />
                </ColumnGrid>
            </Col>
        </Row>
    )
}
