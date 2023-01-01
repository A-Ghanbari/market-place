import RenderRoutes from 'routes/RenderRoutes'
import List from 'components/consignment/list'
import Detail from 'components/consignment/list/detail'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    },
    {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    },
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
