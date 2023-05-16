import { useSelector } from 'react-redux';
import { USER as entity } from "tools/utils/entities"

function ACL(Component) {
    return function MyComponent({ permission, ...props }) {
        // const { permissions } = useSelector(
        //     (s) => s[entity.name]
        // )

        return (
            // (!permission || permissions[permission]) ? <Component {...props} /> : null
            <Component {...props} />
        )
    }
}

export default ACL;