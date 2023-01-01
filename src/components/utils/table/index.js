import { useRef, useState } from "react"
import { Table as AntTable } from "antd"
import "components/utils/table/table.scss"
import useDraggableScroll from 'hooks/useDraggableScroll'
import Notification from 'components/utils/notification'


const convertColumns = (columns) =>
    columns.map((c) => ({ ...c, dataIndex: c.key }))

function Table({ entity, dataList, loading, columns, rowKey = "ID", ...props }) {
    const [tableColumns] = useState(() => convertColumns(columns))
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

export default Table