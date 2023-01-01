import ActionButton from 'components/utils/actionsButton'
import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import FormSwitch from 'components/utils/form/items/FormSwitch'
import { Col, ColumnGrid, Row } from 'components/utils/grid'

const searchSelectCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
const searchInputCol = { sm: 24, md: 24, lg: 16, xl: 18, xxl: 18 }
const fieldCol = { sm: 24, md: 12, lg: 8, xl: 6, xxl: 6 }
export default function Filter() {
    return (
        <Card 
        title="جستجو و فیلتر"
        actions={[
            <ActionButton position="right">
                <Button
                    type="primary-success"
                    label="بارگذاری فایل اکسل"
                />
                <Button
                    type="primary-success"
                    label="تاریخچه بارگذاری‌ها"
                />
                <Button
                    type="secondary-success"
                    label="دریافت فایل اکسل"
                />
            </ActionButton>
        ]}
        >
            <Form>
                <Row>
                    <Col {...searchSelectCol}>
                        <FormSelectSearch
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
                            text="عبارت مورد نظرتان را وارد کنید..."
                        />
                    </Col>
                </Row>
                <ColumnGrid col={fieldCol}>
                    <FormRadioButton
                        label="ارسال توسط"
                        options={[
                            {
                                value: 1,
                                label: "هردو"
                            },
                            {
                                value: 2,
                                label: "شاواز"
                            },
                            {
                                value: 3,
                                label: "فروشنده"
                            }
                        ]}
                    />
                    <FormRadioButton
                        label="کالاهای فعال/غیرفعال"
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
                    <FormSelectSearch
                        label="گروه کالا "
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            }
                        ]}
                    />

                    <FormSelectSearch
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
                    <FormSelectSearch
                        label="شرایط قیمت کالا"
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            },
                            {
                                value: 2,
                                text: "برند 1"
                            },
                            {
                                value: 3,
                                text: "برند 2 "
                            }
                        ]}
                    />
                    <FormSwitch
                        label="کــالـای بدون موجودی"
                    />
                    <FormSwitch
                        label="کــالـای مخفی شده"
                    />
                </ColumnGrid>
            </Form>
        </Card>
    )
}
