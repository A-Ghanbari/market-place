import { Route, Routes } from 'react-router-dom'
import PrivateRoute from 'routes/PrivateRoute'
import PublicRoute from './PublicRoute';

export default function RenderRoutes({ routes }) {
    return (
        <Routes>
            {routes.map(route => (
                // (route.private) ?
                //     <Route
                //         key={route.key}
                //         path={route.path}
                //         element={<PrivateRoute>{route.component}</PrivateRoute>}
                //     /> :
                    <Route
                        key={route.key}
                        path={route.path}
                        element={<PublicRoute>{route.component}</PublicRoute>}
                    />
            ))}
        </Routes>
    )
}
