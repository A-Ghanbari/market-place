import { Row } from "components/utils/grid"
import PageHeader from "components/utils/pageHeader"
import Filter from "components/content/product/Filter"
import ProductList from "components/content/product/ProductList"
import { useEffect, useState } from "react"
import { getSupplierSalesList } from "store/actions/product"

export default function Product() {
    const [filters, setFilters] = useState()
    useEffect(() => {
        filters && getSupplierSalesList(`PageIndex=${filters.pageIndex}
        &PageSize=${filters.pageSize}`)
    }, [filters])


    return (
        <>
            <PageHeader
                title="مدیریت محصولات"
                subTitle=" برای ویرایش و مدیریت مشخصات ، گروه ، تصویر محصولات و درج تنوع (گارانتی ، به همراه رنگ یا سایز) از این قسمت استفاده نمایید"
            />
            <Row>
                <Filter setFilters={setFilters} />
                <p className="warning-box">
                    محصول با وضعیت پیش نویس فقط برای شما قابل نمایش است و توسط مرکز فروشندگان قابل رویت نیست. محصول پیش نویس خود را انتشار داده و منتظر تأیید آن باشید.
                </p>
                <ProductList setFilters={setFilters} />
            </Row>
        </>
    )
}
