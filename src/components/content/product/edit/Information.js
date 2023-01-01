import Collapse from "components/utils/collapse"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { ColumnGrid } from "components/utils/grid"

const fieldsTwoCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
const fieldsThreeCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 8 }
const fieldsFourCol = { sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 }

export default function Information() {
    return (
        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header' >
                    <h4>درج اطلاعات کالا</h4>
                    <div className='collapse-line' />
                </div >
            }
        >
            <ColumnGrid col={fieldsThreeCol}>
                <FormSelectSearch
                    name="brand"
                    label="برند"
                    required={true}
                    items={[
                        {
                            text: "دیپ سنس",
                            value: 1
                        },
                    ]}
                />
                <FormSelectSearch
                    label="نوع کالا"
                    required={true}
                />
                <FormSelectSearch
                    label="مبدا کالا"
                    required={true}
                    items={[
                        {
                            text: "ایرانی",
                            value: 0
                        },
                        {
                            text: "خارجی",
                            value: 1
                        },
                    ]}
                />
            </ColumnGrid>
            <ColumnGrid col={fieldsTwoCol}>
                <FormInput
                    label="نام فارسی کالا"
                    text="نام کالای خود را با رعایت این ترتیب درج نمائید: ماهیت کالا + برند + مدل"
                />
                <FormInput
                    label="نام انگلیسی کالا"
                    text="Enter the name of your item in the following order: Brand + Model + Nature of the Product"
                />
            </ColumnGrid>
            <h3>ابعاد بسته بندی (سانتیمتر)</h3>
            <ColumnGrid col={fieldsFourCol}>
                <FormInputNumber
                    text="طول"
                />
                <FormInputNumber
                    text="عرض"
                />
                <FormInputNumber
                    text="ارتفاع"
                />
                <FormInputNumber
                    label="وزن بسته بندی (گرم)"
                />
            </ColumnGrid>
            <FormTextArea
                label="شرح کالا"
                text="برای معرفی بهتر کالا به مشتریان، پیشنهاد می‌‌شود 150 کلمه درباره‌ کالای خود بنویسید."
            />
            <ColumnGrid col={fieldsTwoCol}>
                <FormTextArea
                    label="نقاط قوت"
                />
                <FormTextArea
                    label="نقاط ضعف"
                />
            </ColumnGrid>
        </Collapse >
    )
}
