import { Dropdown as AntDropdown } from 'antd'
import "components/utils/dropdown/dropdown.scss"

export default function Dropdown({ items, children, ...props }) {

    return (
        <AntDropdown overlay={items} {...props}>
            {children}
        </AntDropdown>
    )
}
