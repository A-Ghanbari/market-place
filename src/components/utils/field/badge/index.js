import { Badge as AntBadge } from 'antd'
import "components/utils/field/badge/badge.scss"

export default function Badge({ children, count, ...props }) {
    return (
        <AntBadge
            count={count}
            {...props}
        >
            {children}
        </AntBadge>
    )
}
