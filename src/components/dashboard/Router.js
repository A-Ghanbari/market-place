import RenderRoutes from 'routes/RenderRoutes'
import Performance from 'components/dashboard/performance/Performance'
import MyRating from 'components/dashboard/myRating'
import Profile from 'components/dashboard/profile'
import Wallet from 'components/dashboard/wallet'
import Messages from 'components/dashboard/messages'
import Questions from 'components/dashboard/questions'

const ROUTES = [
    {
        key: 'performance',
        path: '/*',
        private: true,
        component: <Performance />,
    }, {
        key: 'myRating',
        path: '/rating',
        private: true,
        component: <MyRating />,
    }, {
        key: 'profile',
        path: '/profile',
        private: true,
        component: <Profile />,
    }, {
        key: 'wallet',
        path: '/wallet',
        private: true,
        component: <Wallet />,
    }, {
        key: 'messages',
        path: '/messages',
        private: true,
        component: <Messages />,
    }, {
        key: 'questions',
        path: '/questions',
        private: true,
        component: <Questions />,
    }
]

function Router() {
    return (
        <RenderRoutes routes={ROUTES} />
    )
}

export default Router;
