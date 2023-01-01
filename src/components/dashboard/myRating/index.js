import CustomerRating from "components/dashboard/myRating/CustomerRating"
import ProductRating from "components/dashboard/myRating/ProductRating"
import { Col, Row } from 'components/utils/grid'
import Rating from "components/dashboard/performance/Rating"
import "components/dashboard/myRating/myRating.scss"

const asideCol = { sm: 24, md: 24, lg: 24, xl: 6, xxl: 6 }
const mainCol = { sm: 24, md: 24, lg: 24, xl: 18, xxl: 18 }
function MyRating() {
    return (
        <Row gutter={[16, 16]} className="dashboard-section" >
            <Col {...asideCol} className="aside">
                <Rating />
            </Col>
            <Col {...mainCol} className="main">
                <CustomerRating />
            </Col>
            <ProductRating />
        </Row>
    )
}

export default MyRating