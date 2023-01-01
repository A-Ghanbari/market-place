import ACL from "components/ACL"
import { Pagination as AntPagination } from "antd"
import "components/utils/pagination/pagination.scss"
import { PAGE_SIZE } from "tools/shared/constants"

function Pagination({ pageIndex, pageSize, totalRecords, ...props }) {
    return (
        <div className="pagination">
            <h4>تعداد نتایج : 100 مورد</h4>
            <AntPagination
                pageSizeOptions={["10", "20", "30"]}
                size="small"
                showSizeChanger={true}
                current={pageIndex || 1}
                pageSize={pageSize || PAGE_SIZE}
                total={totalRecords || 0}
                defaultPageSize={PAGE_SIZE}
                {...props}
            />
        </div>
    )
}

export default ACL(Pagination)