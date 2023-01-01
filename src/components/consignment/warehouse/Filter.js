import Card from 'components/utils/card'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import { Col, ColumnGrid, Row } from 'components/utils/grid'

const filterCol = { sm: 24, md: 24, lg: 24, xl: 24, xxl: 12 }
const fieldCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 12 }
export default function Filter() {
    return (
        <Card
            title="جستجو و فیلتر"
        >
            <Form>
                <Row>
                    <Col {...filterCol}>
                        <ColumnGrid col={fieldCol}>
                            <FormRadioButton
                                label="ماهیت کالا"
                                options={[
                                    {
                                        value: 1,
                                        label: "کوچک"
                                    },
                                    {
                                        value: 2,
                                        label: "متوسط"
                                    },
                                    {
                                        value: 3,
                                        label: "بزرگ"
                                    }
                                ]}
                            />
                            <FormRadioButton
                                label="فیلتر محصولات"
                                options={[
                                    {
                                        value: 1,
                                        label: "مشاهده همه"
                                    },
                                    {
                                        value: 2,
                                        label: "انتخاب شده ها"
                                    },
                                ]}
                            />
                        </ColumnGrid>
                    </Col>
                    <Col {...filterCol}>
                        <ColumnGrid col={fieldCol}>
                            <FormSelect
                                label="جستجو در"
                                items={[
                                    {
                                        value: 1,
                                        text: "همه موارد"
                                    },
                                    {
                                        value: 2,
                                        text: "کد تنوع"
                                    },
                                    {
                                        value: 3,
                                        text: "کد محصول"
                                    },
                                    {
                                        value: 4,
                                        text: "کد فروشنده"
                                    }
                                ]}
                            />
                            <FormInput
                                text="عنوان را بنویسید ..."
                            />
                        </ColumnGrid>
                    </Col>
                </Row>
            </Form>
        </Card>
    )
}
