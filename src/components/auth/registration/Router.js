import RenderRoutes from 'routes/RenderRoutes'
import InitialRegistration from 'components/auth/registration/InitialRegistration'
import EmailRegistration from 'components/auth/registration/EmailRegistration'
import BusinessDetails from 'components/auth/registration/BusinessDetails'
import Success from 'components/auth/registration/Success'
import Documents from 'components/auth/registration/Documents'
// import Training from 'components/auth/registration/Training'

const ROUTES = [
    {
        key: 'registration',
        path: '/*',
        private: false,
        component: <InitialRegistration />,
    }, {
        key: 'email',
        path: '/email',
        private: false,
        component: <EmailRegistration />,
    }, {
        key: 'business-details',
        path: '/business-details',
        private: false,
        component: <BusinessDetails />,
    }, {
        key: 'documents',
        path: '/documents',
        private: false,
        component: <Documents />,
    }, {
        key: 'success',
        path: '/success',
        private: false,
        component: <Success />,
    },
    // {
    //     key: 'training',
    //     path: '/training',
    //     private: false,
    //     component: <Training />,
    // }, 
]

export default function RegistrationRouter() {
    return (
        <div>
            <RenderRoutes routes={ROUTES} />
        </div>
    )
}
