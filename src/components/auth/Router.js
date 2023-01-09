import RenderRoutes from 'routes/RenderRoutes'
import Login from 'components/auth/Login'
import ForgetPassword from 'components/auth/password/ForgetPassword'
import RegistrationRouter from 'components/auth/registration/Router'
import ForgetPasswordSuccess from 'components/auth/password/ForgetPasswordSuccess'
import ChangePassword from 'components/auth/password/ChangePassword'
import Camera from 'components/auth/camera'

const ROUTES = [
    {
        key: 'login',
        path: '/*',
        private: false,
        component: <Login />,
    }, {
        key: 'camera',
        path: '/auth/camera',
        private: false,
        component: <Camera />,
    }, {
        key: 'forgot-password',
        path: '/auth/forgot-password',
        private: false,
        component: <ForgetPassword />,
    }, {
        key: 'forgot-password-success',
        path: '/auth/forget-password/success',
        private: false,
        component: <ForgetPasswordSuccess />,
    }, {
        key: 'registration',
        path: '/registration/*',
        private: false,
        component: <RegistrationRouter />,
    }, {
        key: 'change-password-email',
        path: '/auth/change-password-email',
        private: false,
        component: <ChangePassword />,
    }
]

export default function AuthRouter() {
    return (
        <div>
            <RenderRoutes routes={ROUTES} />
        </div>
    )
}
