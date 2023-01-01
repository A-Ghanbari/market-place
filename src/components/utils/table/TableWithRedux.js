import { useRef, useState } from "react"
import { Table as AntTable } from "antd"
import { useSelector } from "react-redux"
import useDraggableScroll from 'hooks/useDraggableScroll'
import Notification from 'components/utils/notification'
import "components/utils/table/table.scss"


const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

export default function TableWithRedux({ entity, columns, rowKey = "ID", ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))

    const { dataList, loading } = useSelector(
        (s) => s[entity]
    )

    const ref = useRef(null)
    const { onMouseDown } = useDraggableScroll(ref)

    const doubleClickHandler = (e) => {
        navigator.clipboard.writeText(e.target.innerText)
        Notification.success(`کپی شد : ${e.target.innerText}`)
    }

    return (
        <div>
            <div
                className='table scroll-x'
                ref={ref}
                onMouseDown={onMouseDown}
                onDoubleClick={doubleClickHandler}
            >
                <AntTable
                    className="table"
                    dataSource={dataList}
                    columns={tableColumns}
                    rowKey={rowKey}
                    pagination={false}
                    loading={loading}
                    {...props}
                />
            </div>
        </div>

    )
}