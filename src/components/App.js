import RenderRoutes from 'routes/RenderRoutes'
import ErrorBoundary from 'components/error'
import AuthRouter from 'components/auth/Router'
import Panel from 'components/panel/Panel'
import 'antd/dist/antd.min.css'
import "assets/sass/general.scss"

const ROUTES = [
    {
        key: 'auth',
        path: '/auth',
        private: false,
        component: <AuthRouter />,
    }, {
        key: 'panel',
        path: '/*',
        private: false,
        component: <Panel />,
    }
]

function App() {
    return (
        <ErrorBoundary>
            <RenderRoutes routes={ROUTES} />
        </ErrorBoundary>
    )
}

export default App;
