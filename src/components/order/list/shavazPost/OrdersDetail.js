import {
    ORDER_DELIVERY_LIST as orderDeliveryEntity,
} from 'tools/utils/entities'
import { getConfirmedOrderList } from 'store/actions/order'
import testImg from 'assets/images/test.png'
import TableWithCustomPagination from 'components/utils/table/TableWithCustomPagination'
import { useEffect, useState } from 'react'
import { PAGE_SIZE } from 'tools/shared/constants'
import { addCommaToNumber } from 'tools/utils'

export default function OrdersDetail() {
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)

    useEffect(() => {
        getConfirmedOrderList(`PageIndex=${pageIndex}&PageSize=${pageSize}`)
    }, [pageIndex, pageSize])

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            width: "5%",
            key: "image",
            render: (r) => <img src={testImg} alt="product" width={80} height={80} />
        }, {
            title: "نام کالا",
            key: "productName",
            width: "10%",
            render: (r) => <div className='table-title'>{r}</div>
        }, {
            title: "نام گروه",
            key: "categoryName",
            width: "5%",
        }, {
            title: "کد حواله",
            key: "commerceID",
            width: "5%",
        }, {
            title: "SPC",
            key: "spc",
            width: "5%",
        }, {
            title: "شماره سفارش",
            key: "customerOrderID",
            width: "5%",
        }, {
            title: "تاریخ ثبت سفارش",
            key: "orderDate",
            width: "5%",
        }, {
            title: "تعداد سفارش",
            key: "itemCount",
            width: "5%",
        }, {
            title: "قیمت فروش (تومان)",
            key: "originalPrice",
            width: "5%",
            render: (r) => <span>{addCommaToNumber(r / 10)}</span>
        }, {
            title: "تخفیف‌ حواله (تومان)",
            key: "commerceDiscount",
            width: "5%",
            render: (r) => <span>{addCommaToNumber(r / 10)}</span>
        }, {
            title: "قیمت کل (تومان)",
            key: "price",
            width: "5%",
            render: (r) => <span>{addCommaToNumber(r / 10)}</span>
        },
    ]

    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
    }

    return (
        <div className='section-card'>
            <TableWithCustomPagination
                entity={orderDeliveryEntity.name}
                columns={columns}
                handlerChange={paginationChangeHandler}
            />
        </div>
    )
}
