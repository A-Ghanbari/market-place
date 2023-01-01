import Card from 'components/utils/card'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import { Col, ColumnGrid, Row } from 'components/utils/grid'

const searchSelectCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
const searchInputCol = { sm: 24, md: 24, lg: 16, xl: 18, xxl: 18 }
const fieldCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
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
                                    text: "عنوان"
                                },
                                {
                                    value: 2,
                                    text: "کد محصول"
                                },
                                {
                                    value: 3,
                                    text: "کد تنوع"
                                },
                                {
                                    value: 4,
                                    text: "کد فروشنده"
                                }
                            ]}
                        />
                    </Col>
                    <Col {...searchInputCol}>
                        <FormInput
                            text="عنوان را بنویسید "
                        />
                    </Col>
                </Row>
                <ColumnGrid col={fieldCol}>
                    <FormRadioButton
                        label="وضعیت"
                        options={[
                            {
                                value: 1,
                                label: "همه"
                            },
                            {
                                value: 2,
                                label: "دریافت شده"
                            }
                        ]}
                    />
                </ColumnGrid>
            </Form>
        </Card >
    )
}
