import RenderRoutes from 'routes/RenderRoutes'
import Product from 'components/content/product'
import Variant from 'components/content/product/variant'
import Edit from 'components/content/product/edit'

const ROUTES = [
    {
        key: 'product',
        path: '/*',
        private: false,
        component: <Product />,
    },
    {
        key: 'variant',
        path: '/variant/:ID',
        private: false,
        component: <Variant />,
    },
    {
        key: 'edit',
        path: '/edit/:ID',
        private: false,
        component: <Edit />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router
