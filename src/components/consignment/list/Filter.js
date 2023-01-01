import Card from 'components/utils/card'
import Form from 'components/utils/form'
import FormDatePicker from 'components/utils/form/items/FormDatePicker'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import { Col, ColumnGrid, Row } from 'components/utils/grid'

const searchSelectCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
const searchInputCol = { sm: 24, md: 24, lg: 16, xl: 18, xxl: 18 }
const dateCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 8 }
const fieldCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }
export default function Filter() {
    return (
        <Card
            title="جستجو و فیلتر"
        >
            <Form>
                <Row>

                    <Col {...searchSelectCol}>
                        <FormSelect
                            label="جستجو در"
                            items={[
                                {
                                    value: 1,
                                    text: "شماره محموله"
                                },
                                {
                                    value: 2,
                                    text: "شماره سریال"
                                },
                                {
                                    value: 3,
                                    text: "کد تنوع"
                                },
                                {
                                    value: 4,
                                    text: "کد فروشنده"
                                },
                                {
                                    value: 5,
                                    text: "وضعیت محموله"
                                }
                            ]}
                        />
                    </Col>
                    <Col {...searchInputCol}>
                        <FormInput
                            text="مثال : 1548641684161"
                        />
                    </Col>
                </Row>
                <ColumnGrid col={dateCol}>
                    <FormSelect
                        label="تاریخ"
                        items={[
                            {
                                value: 1,
                                text: "تاریخ ایجاد محموله"
                            },
                            {
                                value: 2,
                                text: "تاریخ دریافت محموله"
                            },
                        ]}
                    />
                    <FormDatePicker
                        label="از تاریخ"
                    />
                    <FormDatePicker
                        label="تا تاریخ"
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldCol}>
                    <FormRadioButton
                        label="روش تحویل"
                        options={[
                            {
                                value: 1,
                                label: "همه"
                            },
                            {
                                value: 2,
                                label: "توسط فروشنده"
                            },
                            {
                                value: 3,
                                label: "توسط پست"
                            },
                            {
                                value: 4,
                                label: "تحویل به انبار سیار"
                            }
                        ]}
                    />
                    <FormRadioButton
                        label="محموله برای"
                        options={[
                            {
                                value: 1,
                                label: "همه"
                            },
                            {
                                value: 2,
                                label: "انبارش"
                            },
                            {
                                value: 3,
                                label: "سفارش"
                            },
                        ]}
                    />
                </ColumnGrid>
            </Form>
        </Card >
    )
}
