import RenderRoutes from 'routes/RenderRoutes'
import Find from 'components/content/find'
import ProductRouter from 'components/content/product/Router'
import ProductConfig from 'components/content/productConfig'
import Create from 'components/content/create'

const ROUTES = [
    {
        key: 'find',
        path: '/find',
        private: true,
        component: <Find />,
    }, {
        key: 'product',
        path: '/product/*',
        private: true,
        component: <ProductRouter />,
    }, {
        key: 'product-config',
        path: '/product-config',
        private: true,
        component: <ProductConfig />,
    }, {
        key: 'create',
        path: '/create',
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
