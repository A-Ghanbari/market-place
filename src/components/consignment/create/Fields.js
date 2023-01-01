import ActionButton from 'components/utils/actionsButton'
import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import FormDatePicker from 'components/utils/form/items/FormDatePicker'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { sm: 24, md: 12, lg: 12, xl: 8, xxl: 6 }
export default function Fields() {
    return (
        <Card
            title="اطلاعات محموله"
            actions={[
                <ActionButton position="center">
                    <Button
                        type="primary-success"
                        label="ساخت نهایی محموله"
                    />
                    <Button
                        type="secondary-fail"
                        label="انصراف"
                    />
                </ActionButton>
            ]}
        >
            <ColumnGrid col={fieldCol}>
                <FormInput
                    label="شماره محموله"
                />
                <FormRadioButton
                    label="نوع محموله"
                    options={[
                        {
                            value: 1,
                            label: "کوچک"
                        }
                    ]}
                />
                <FormRadioButton
                    label="روش تحویل"
                    options={[
                        {
                            value: 1,
                            label: "توسط فروشنده"
                        },
                        {
                            value: 2,
                            label: "توسط پست"
                        },
                        {
                            value: 3,
                            label: "تحویل به انبار سیار"
                        }
                    ]}
                />
                <FormSelectSearch
                    label="محل تحویل"
                    items={[
                        {
                            value: 1,
                            text: "انبار جنت آباد"
                        },
                        {
                            value: 2,
                            text: "انبار فلاح"
                        },
                        {
                            value: 3,
                            text: "انبار شوش"
                        },
                        {
                            value: 4,
                            text: "انبار مولوی"
                        },
                        {
                            value: 5,
                            text: "انبار راه آهن"
                        },
                    ]}
                />
                <FormDatePicker
                    label="تاریخ دریافت محموله"
                />
                <FormSelect
                    label="بازه زمانی دریافت محموله"
                    items={[
                        {
                            value: 1,
                            text: "11 -12"
                        },
                        {
                            value: 2,
                            text: "12 - 13"
                        },
                        {
                            value: 3,
                            text: "13 - 14"
                        },
                    ]}
                />
            </ColumnGrid>
        </Card>
    )
}
