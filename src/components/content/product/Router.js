import RenderRoutes from 'routes/RenderRoutes'
import Product from 'components/content/product'
import Variant from 'components/content/product/variant'
import Edit from 'components/content/product/edit'

const ROUTES = [
    {
        key: 'product',
        path: '/*',
        private: true,
        component: <Product />,
    },
    {
        key: 'variant',
        path: '/variant/:ID',
        private: true,
        component: <Variant />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: true,
        component: <Edit />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
