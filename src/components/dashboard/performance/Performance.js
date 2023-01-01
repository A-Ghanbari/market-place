import { Col, ColumnGrid, Row } from "components/utils/grid"
import useWindowSize from "hooks/useWindowSize"
import User from "components/dashboard/performance/User"
import Rating from "components/dashboard/performance/Rating"
import InventoryManagement from "components/dashboard/performance/InventoryManagement"
import OrderManagement from "components/dashboard/performance/OrderManagement"
import PricingManagement from "components/dashboard/performance/PricingManagement"
import Wallet from "components/dashboard/performance/Wallet"
import ProductManagement from "components/dashboard/performance/ProductManagement"
import Promotions from "components/dashboard/performance/Promotions"
import Banner from "components/dashboard/performance/Banner"
import SalesStatus from "components/dashboard/performance/SalesStatus"
import SalesNumber from "components/dashboard/performance/SalesNumber"
import ShipmentsStatus from "components/dashboard/performance/ShipmentsStatus"
import SalesRecords from "components/dashboard/performance/SalesRecords"
import BestSelling from "components/dashboard/performance/BestSelling"
import "components/dashboard/performance/performance.scss"

export default function Dashboard() {
    const { width } = useWindowSize()

    const asideCol = { sm: 24, md: 24, lg: 24, xl: width > 1400 ? 6 : 24, xxl: 6 }
    const asideCardCol = { sm: 24, md: 24, lg: 24, xl: width > 1400 ? 24 : 8, xxl: 24 }
    const mainCol = { sm: 24, md: 24, lg: 24, xl: width > 1400 ? 18 : 24, xxl: 18 }
    const mainCardCol = { sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }
    const fullWidthCol = { sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
    const threeColumns = { sm: 24, md: 24, lg: 8, xl: 8, xxl: 8 }

    return (
        <div>
            <Row gutter={[16, 16]} className="dashboard-section" >
                <Col {...asideCol} className="aside">
                    <ColumnGrid col={asideCardCol}>
                        <User isDashboard={true} />
                        <Rating isDashboard={true} />
                        <Wallet />
                    </ColumnGrid>
                </Col>
                <Col {...mainCol} className="main">
                    <ColumnGrid col={fullWidthCol} >
                        <div className="main-cols">
                            <ColumnGrid col={mainCardCol} >
                                <InventoryManagement />
                                <OrderManagement />
                                <PricingManagement />
                            </ColumnGrid>
                            <ColumnGrid col={fullWidthCol} >
                                <ProductManagement />
                                <div className="main-cols">
                                    <Promotions />
                                </div>
                            </ColumnGrid>
                        </div>
                    </ColumnGrid>
                </Col>
            </Row>
            <Row gutter={[16, 16]} className="dashboard-section" >
                <Col {...fullWidthCol} >
                    <ColumnGrid col={fullWidthCol}>
                        <Banner />
                    </ColumnGrid>
                    <ColumnGrid col={threeColumns}>
                        <SalesStatus />
                        <SalesNumber />
                        <ShipmentsStatus />
                    </ColumnGrid>
                    <ColumnGrid col={fullWidthCol}>
                        <SalesRecords />
                        <BestSelling />
                    </ColumnGrid>
                </Col>
            </Row>
        </div >
    )
}