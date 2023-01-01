import { useSelector } from 'react-redux'
import useWindowSize from 'hooks/useWindowSize'
import RenderRoutes from 'routes/RenderRoutes'
import { Layout } from 'antd'
import Header from 'components/generic/Header'
import Content from 'components/generic/Content'
import Footer from 'components/generic/Footer'
import DashboardRouter from 'components/dashboard/Router'
import ContentRouter from 'components/content/Router'
import OrderRouter from 'components/order/Router'
import ConsignmentRouter from 'components/consignment/Router'
import Sidebar from 'components/generic/Sidebar'

const ROUTES = [
    {
        key: 'dashboard',
        path: '/*',
        private: true,
        component: <DashboardRouter />,
    },
    {
        key: 'content',
        path: '/content/*',
        private: true,
        component: <ContentRouter />,
    },
    {
        key: 'order',
        path: '/order/*',
        private: true,
        component: <OrderRouter />,
    },
    {
        key: 'consignment',
        path: '/consignment/*',
        private: true,
        component: <ConsignmentRouter />,
    }
]

export default function Panel() {
    const collapsed = useSelector(s => s.collapsedMenu)
    const { width } = useWindowSize()
    return (
        <div>
            <Layout>
                <Sidebar />
                <Layout
                    style={{
                        marginRight: width > 767 ? collapsed ? 107 : 262 : null,
                        transition: "all 0.5s"
                    }}
                >
                    <Header />
                    <Content>
                        <RenderRoutes routes={ROUTES} />
                    </Content>
                    <Footer />
                </Layout>
            </Layout>
        </div>
    )
}
