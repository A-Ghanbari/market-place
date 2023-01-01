import Collapse from 'components/utils/collapse'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import { ColumnGrid } from 'components/utils/grid'

const fieldsCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 8 }
export default function Property() {
    return (
        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header'>
                    <h4>درج ویژگی‌های کالا</h4>
                    <div className='collapse-line' />
                </div>
            }
        >
            <ColumnGrid col={fieldsCol}>
                <FormSelectSearch
                    label="کشور مبدا کالا"
                    required={true}
                    items={[
                        {
                            text: "ایران",
                            value: 0
                        },
                        {
                            text: "زامبیا",
                            value: 1
                        },
                        {
                            text: "آلمان",
                            value: 2
                        },
                        {
                            text: "برزیل",
                            value: 3
                        },
                        {
                            text: "ونزوئلا",
                            value: 4
                        },
                    ]}
                />
                <FormInputNumber
                    name="size"
                    label="حجم"
                    required={true}
                />
                <FormInputNumber
                    label="شماره رنگ"
                />
                <FormSelectSearch
                    label="سازگار با پوست های "
                    required={true}
                    items={[
                        {
                            text: "چرب",
                            value: 0
                        },
                        {
                            text: "خشک",
                            value: 1
                        },
                        {
                            text: "حساس",
                            value: 2
                        },
                        {
                            text: "بی تفاوت",
                            value: 3
                        },
                    ]}
                />
                <FormInputNumber
                    label="شماره مجوز"
                />
                <FormSelect
                    label="صادر کننده مجوز"
                    required={true}
                    items={[
                        {
                            text: "سازمان غذا و دارو",
                            value: 0
                        },
                        {
                            text: "سازمان بهداشت جهانی",
                            value: 1
                        },
                    ]}
                />
            </ColumnGrid>
            <FormSelectSearch
                mode="multiple"
                label="ویژگی ها"
                required={true}
                items={[
                    {
                        text: "آبرسان",
                        value: 0
                    },
                    {
                        text: "آرامبخش",
                        value: 1
                    },
                    {
                        text: "براق کننده",
                        value: 2
                    },
                    {
                        text: "پاک کننده",
                        value: 3
                    },
                ]}
            />
            <FormSelect
                mode="multiple"
                label="مناسب برای رنگ پوست"
                required={true}
                items={[
                    {
                        text: "برنزه",
                        value: 0
                    },
                    {
                        text: "تیره",
                        value: 1
                    },
                    {
                        text: "روشن",
                        value: 2
                    },
                    {
                        text: "گندمی",
                        value: 3
                    },
                    {
                        text: "متوسط",
                        value: 4
                    },
                ]}
            />
            <FormTextArea
                label="سایر توضیحات"
                text="در صورت نیاز می‌توانید توضیحاتی مختصر در مورد ویژگی‌های کالا ارائه دهید."
            />
        </Collapse>
    )
}
