import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { sm: 24, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function ProductFilter() {
    return (
        <Form>
            <ColumnGrid col={fieldCol}>
                <FormRadioButton
                    label="تعهد ارسال"
                    options={[
                        {
                            value: 1,
                            label: "گذشته و امروز"
                        },
                        {
                            value: 2,
                            label: "فردا به بعد"
                        }
                    ]}
                />
                <FormRadioButton
                    label="وضعیت موجودی"
                    options={[
                        {
                            value: 1,
                            label: "موجود"
                        },
                        {
                            value: 2,
                            label: "ناموجود"
                        }
                    ]}
                />
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
            </ColumnGrid>
            <ColumnGrid col={fieldCol}>
                <FormSelectSearch
                    label="جستجو در"
                    items={[
                        {
                            value: 1,
                            text: "همه موارد"
                        }
                    ]}
                />
                <FormSelectSearch
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
                        },
                        {
                            value: 3,
                            text: "کد تنوع"
                        },
                        {
                            value: 3,
                            text: "کد فروشنده"
                        }
                    ]}
                />
                <FormInput
                    text="عبارت مورد نظرتان را وارد کنید..."
                />
                <div className='flex-row processing-box'>
                    <span>درحال پردازش در انبار</span>
                    <span>0</span>
                </div>
            </ColumnGrid>
        </Form>
    )
}
