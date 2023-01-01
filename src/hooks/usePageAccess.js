import { useSelector } from 'react-redux'
import { USER as entity } from "tools/utils/entities"

function usePageAccess(path) {
    const [controller, action] = path.split('/')
    const { pageAccess } = useSelector(
        (s) => s[entity.name]
    )

    if (pageAccess) {
        for (const section of pageAccess) {
            if (controller === 'dashboard' || controller === '') {
                return true
            } else if (controller === 'null') {
                return false
            } else if (section.controller === controller && section.children.length) {
                for (const page of section.children) {
                    if (page.action === action) {
                        return true
                    }
                }
            }
        }
    }

    return false
}

export default usePageAccess