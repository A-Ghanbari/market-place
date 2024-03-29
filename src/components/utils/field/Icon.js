import ACL from "components/ACL"
import getIcon from "tools/shared/lib/icons"

function Icon({ type, title, ...props }) {
    return (
        <span title={title} className>
            {getIcon(type, { ...props })}
        </span>
    )
}

export default ACL(Icon)
