import { Popconfirm as AntPopconfirm } from "antd"
import "components/utils/popconfirm/popconfirm.scss"

export default function Popconfirm({ title, onConfirm, children, ...props }) {
    return (
        <AntPopconfirm
            title={title}
            onConfirm={onConfirm}
            okText="تایید"
            cancelText="انصراف"
            getPopupContainer={(triggerNode) => triggerNode.parentElement}
            {...props}
        >
            <span>
                {children}
            </span>
        </AntPopconfirm>
    )
}
