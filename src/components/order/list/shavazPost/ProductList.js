import {
    ORDER_PRODUCT_DELIVERY_LIST as orderProductEntity,
} from 'tools/utils/entities'
import { useEffect, useState } from 'react'
import { getConfirmedOrderProductList } from 'store/actions/order'
import TableWithCustomPagination from 'components/utils/table/TableWithCustomPagination'
import { PAGE_SIZE } from 'tools/shared/constants'
import testImg from 'assets/images/test.png'

export default function ProductList() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    useEffect(() => {
        getConfirmedOrderProductList(`PageIndex=${pageIndex}&PageSize=${pageSize}`)
    }, [pageIndex, pageSize])

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            width: "10%",
            key: "image",
            render: (r) => <img src={testImg} alt="product" width={80} height={80} />
        }, {
            title: "نام کالا",
            key: "productName",
            width: "10%",
        }, {
            title: "گروه کالا",
            key: "categoryName",
            width: "10%",
        }, {
            title: "کد حواله",
            key: "commerceID",
            width: "5%",
        }, {
            title: "SPC",
            key: "spc",
            width: "5%",
        }, {
            title: "تعداد سفارش",
            key: "itemCount",
            width: "5%",
        }, {
            title: "موجودی",
            key: "availableCount",
            width: "5%",
        }
    ]

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
    }

    return (
        <div className='section-card'>
            <TableWithCustomPagination
                entity={orderProductEntity.name}
                rowSelection={{ type: "checkbox" }}
                columns={columns}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}
