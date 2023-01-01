import useAuth from "hooks/useAuth";
import Panel from "components/panel/Panel";

function PublicRoute({ children }) {
    const isAuth = useAuth()
    if (isAuth) {
        return <Panel />
    }
    return children
}

export default PublicRoute;
