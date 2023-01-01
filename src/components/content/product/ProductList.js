import Card from 'components/utils/card'
import testImg from 'assets/images/test.png'
import Link from 'components/utils/link'
import Icon from 'components/utils/field/Icon'
import { useLocation } from 'react-router-dom'
import TableWithCustomPagination from 'components/utils/table/TableWithCustomPagination'
import { PAGE_SIZE } from 'tools/shared/constants'
import { PRODUCT_SUPPLIER_SALES_LIST as productSupplierSalesList } from 'tools/utils/entities'
import { useEffect, useState } from 'react'

export default function ProductList({ setFilters }) {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
    }
    useEffect(() => {
        setFilters((prev) => ({ ...prev, pageIndex, pageSize }))
    }, [pageIndex, pageSize])

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "عنوان",
            key: "productPersianName",
            width: "20%",
            render: (r) => <div className='table-title'>{r}</div>
        },
        {
            title: "گروه کالایی",
            key: "categoryName",
            width: "10%",
        },
        {
            title: "برند کالا",
            key: "brandName",
            width: "10%",
        },
        {
            title: "وضعیت",
            key: "status",
            width: "10%",
        },
        {
            title: "تعداد تنوع",
            key: "commercesCount",
            width: "10%",
        },
        {
            key: "actions",
            width: "5%",
            render: (f, r) => (
                <div className="actions">
                    <Link to={`./variant/${r.saleRequestID}`} title="افزودن تنوع">
                        <Icon key="add" type="add" />
                    </Link>
                    <Link to={`./edit/${r.saleRequestID}`} title=" ویرایش محصول">
                        <Icon key="edit" type="edit" />
                    </Link>
                </div >
            ),
        }
    ]
    return (
        <Card>
            <TableWithCustomPagination
                entity={productSupplierSalesList.name}
                columns={columns}
                handlerChange={paginationChangeHandler}
            />
        </Card>
    )
}
