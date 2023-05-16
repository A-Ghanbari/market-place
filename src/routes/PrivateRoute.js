import AuthRouter from 'components/auth/Router'
import useAuth from 'hooks/useAuth'
// import Dashboard from 'components/dashboard/Dashboard'
// import usePageAccess from 'hooks/usePageAccess'
// import { useLocation } from 'react-router-dom'
// import { cutString } from 'tools/utils'

function PrivateRoute({ children }) {
    const isAuth = useAuth()
    // const location = useLocation()
    // const path = cutString(location.pathname, 1, location.pathname.length)
    // const hasPageAccess = usePageAccess(path)

    // if (isAuth) {
        // if (hasPageAccess) {
        return children
        // } else {
        // return <Dashboard />
        // }
    // }
    // return <AuthRouter />
}

export default PrivateRoute
