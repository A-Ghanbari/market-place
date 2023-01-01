import ACL from "components/ACL"
import { useSelector } from "react-redux";
import { Pagination as AntPagination } from "antd"
import "components/utils/pagination/pagination.scss"
import { PAGE_SIZE } from "tools/shared/constants";
import { addCommaToNumber } from "tools/utils";

function PaginationWithRedux({ entity, ...props }) {
    const { pageIndex, pageSize, totalRecords } = useSelector(
        (s) => s[entity]
    );

    return (
        <div className="pagination">
            <h4>تعداد نتایج : {addCommaToNumber(totalRecords)} مورد</h4>
            <AntPagination
                pageSizeOptions={["10", "20", "30", "50"]}
                size="small"
                showSizeChanger={true}
                current={pageIndex}
                pageSize={pageSize}
                total={totalRecords}
                defaultPageSize={PAGE_SIZE}
                {...props}
            />
        </div>
    );
}

export default ACL(PaginationWithRedux);