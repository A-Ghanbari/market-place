import Card from "components/utils/card"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import PageHeader from "components/utils/pageHeader"
import { Col, ColumnGrid, Row } from "components/utils/grid"
import Filter from "components/content/find/Filter"
import SelectedFilters from "components/content/find/SelectedFilters"
import Products from "components/content/find/Products"
import "components/content/content.scss"
import { useEffect, useState } from "react"
import { getProductList } from "store/actions/product"

const asideCol = { sm: 24, md: 24, lg: 6, xl: 6, xxl: 6 }
const mainCol = { sm: 24, md: 24, lg: 18, xl: 18, xxl: 18 }
const mainCardCol = { sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
export default function Find() {
    const [filters, setFilters] = useState()
    useEffect(() => {
        filters && getProductList(`PageIndex=${filters.pageIndex}
        &PageSize=${filters.pageSize}
        &CategoryID=${filters.data.category}
        &BrandID=${filters.data.brands}`)
    }, [filters])

    return (
        <div className="content-find">
            <PageHeader
                title="جستجو یا درج محصول"
                subTitle="محصولی که قصد فروش آن را دارید، جستجو کنید. در غیر این‌صورت از ایجاد کالای جدید اقدام به درج کالای خود کنید"
            />
            <Row gutter={[16, 16]}>
                <Card>
                    <h4>جستجوی کالا در میان کالاهای شاواز بر اساس:</h4>
                    <Form className="find-search">
                        <FormInput
                            text="نام محصول"
                        />
                        <Button
                            type="primary-fail"
                            label="جستجو"
                            htmlType="submit"
                        />
                    </Form>
                </Card>
                <Col {...asideCol}>
                    <Filter setFilters={setFilters} />
                </Col>
                <Col {...mainCol}>
                    <ColumnGrid col={mainCardCol}>
                        <SelectedFilters />
                        <Products setFilters={setFilters} />
                    </ColumnGrid>
                </Col>
            </Row>
        </div>
    )
}
