import RenderRoutes from 'routes/RenderRoutes'
import Warehouse from 'components/consignment/warehouse'
import ListRouter from 'components/consignment/list/Router'
import Create from 'components/consignment/create'

const ROUTES = [
    {
        key: 'warehouse',
        path: '/warehouse',
        private: true,
        component: <Warehouse />,
    },
    {
        key: 'list',
        path: '/list/*',
        private: true,
        component: <ListRouter />,
    },
    {
        key: 'create',
        path: '/create/*',
        private: true,
        component: <Create />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
