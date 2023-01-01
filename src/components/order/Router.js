import RenderRoutes from 'routes/RenderRoutes'
import ListRouter from 'components/order/list/Router'
import Delivery from 'components/order/delivery'

const ROUTES = [
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    }, {
        key: 'delivery',
        path: '/delivery/*',
        private: true,
        component: <Delivery />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
