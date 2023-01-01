import RenderRoutes from 'routes/RenderRoutes'
import List from 'components/order/list'
import Detail from 'components/order/list/shavazPost/action/Detail'

const ROUTES = [
    {
        key: 'list',
        path: '/*',
        private: true,
        component: <List />,
    }, {
        key: 'detail',
        path: '/detail/:ID',
        private: true,
        component: <Detail />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
