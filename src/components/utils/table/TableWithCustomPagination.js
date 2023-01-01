import PaginationWithRedux from "components/utils/pagination/PaginationWithRedux";
import TableWithRedux from "components/utils/table/TableWithRedux";

export default function TableWithCustomPagination({ entity, handlerChange, ...props }) {
    return (
        <>
            <PaginationWithRedux entity={entity} onChange={handlerChange} />
            <TableWithRedux {...props} entity={entity} />
            <PaginationWithRedux entity={entity} onChange={handlerChange} />
        </>
    );
}