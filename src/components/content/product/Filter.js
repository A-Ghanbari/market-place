import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import { FormCascader } from 'components/utils/form/items/FormCascader'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { Col, ColumnGrid, Row } from 'components/utils/grid'
import { getBrands, getGroups, renameKeyCategory, transformedKey } from 'tools/utils'

const searchSelectCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
const searchInputCol = { sm: 24, md: 24, lg: 16, xl: 18, xxl: 18 }
const fieldCol = { sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 }

export default function Filter() {
    const brands = getBrands()
    const category = getGroups()
    const listBrands = transformedKey(brands)
    const listCategory = renameKeyCategory(category)

    const onFinishHandler = (values) => {
        console.log(values)
    }
    return (
        <Card title="جستجو و فیلتر">
            <Form onFinish={onFinishHandler}>
                <Row>
                    <Col {...searchSelectCol}>
                        <FormSelectSearch
                            name="search"
                            label="جستجو در"
                            items={[
                                {
                                    value: 1,
                                    text: "همه موارد"
                                },
                                {
                                    value: 2,
                                    text: "عنوان"
                                },
                                {
                                    value: 3,
                                    text: "کد محصول"
                                }
                            ]}
                        />
                    </Col>
                    <Col {...searchInputCol}>
                        <FormInput
                            name="phrase"
                            text="عبارت مورد نظرتان را وارد کنید..."
                        />
                    </Col>
                </Row>
                <ColumnGrid col={fieldCol}>

                    <FormCascader
                        name="category"
                        label="گروه کالا"
                        options={listCategory}
                    />
                    <FormSelectSearch
                        name="brand"
                        label="برند کالا "
                        items={listBrands}
                    />
                    <FormSelectSearch
                        name="verification"
                        label="وضعیت تأیید کالا "
                        items={[
                            {
                                value: 1,
                                text: "پیش نویس"
                            },
                            {
                                value: 2,
                                text: "بررسی مجدد"
                            },
                            {
                                value: 3,
                                text: "در انتظار تایید"
                            },
                            {
                                value: 4,
                                text: "ویرایش پس از تایید"
                            },
                            {
                                value: 5,
                                text: "تایید شده"
                            },
                            {
                                value: 6,
                                text: "کد بررسی مجدد بعد از تایید"
                            },
                            {
                                value: 7,
                                text: "تکراری "
                            },
                            {
                                value: 8,
                                text: "حذف شده "
                            }
                        ]}
                    />
                    <FormRadioButton
                        name="originality"
                        label="اصالت کالا"
                        options={[
                            {
                                value: 1,
                                label: "همه کالاها"
                            },
                            {
                                value: 2,
                                label: "اصل"
                            },
                            {
                                value: 3,
                                label: "غیراصل"
                            }
                        ]}
                    />
                </ColumnGrid>
                <Button
                    label="جستجو"
                    htmlType='submit'
                />
            </Form>
        </Card>
    )
}
