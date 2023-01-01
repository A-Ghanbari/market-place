import { useState } from 'react'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import { FormSelectSearch } from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'
import Card from 'components/utils/card'
import FormInput from 'components/utils/form/items/FormInput'
import Table from 'components/utils/table'
import { FormCheckbox } from 'components/utils/form/items/FormCheckbox'

const fieldCol = { sm: 8, md: 8, lg: 6, xl: 6, xxl: 4 }
const selectFieldCol = { sm: 24, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function Create() {
    const [visible, setVisible] = useState(false)
    const onFinish = (values) => {
        setVisible(true)
    }
    const columns = [
        {
            title: "فعال",
            key: "active",
            width: "5%",
        },
        {
            title: "ماهیت کالا",
            key: "size",
            width: "5%",
        },
        {
            title: "ظرفیت ارسال کالا ",
            key: "capacity",
            width: "20%",
        },
        {
            title: "هزینه ارسال (ریال) ",
            key: "price",
            width: "10%",
        },
        {
            title: "زمان ارسال تا شهر مقصد ",
            key: "time",
            width: "10%",
        },
        {
            title: "ظرفیت مرجوعی کالا",
            key: "returned",
            width: "10%",
        },
        {
            title: "کف خرید ارسال رایگان (ریال)",
            key: "freeShipping",
            width: "10%",
        },
    ]
    const dataList = [
        {
            ID: 1,
            active: <FormCheckbox />,
            size: <span className='success-box'>کوچک</span>,
            capacity: <>
                <div className='capacity-time'>
                    <span>9-15</span>
                    <span>15-21</span>
                </div>
                <div className='capacity-inputs'>
                    <FormInputNumber />
                    <FormInputNumber />
                </div>
            </>,
            price: <FormInputNumber />,
            time: <FormSelectSearch />,
            returned: <FormInputNumber />,
            freeShipping: <FormInputNumber />,
        },
        {
            ID: 2,
            active: <FormCheckbox />,
            size: <span className='warning-box'>متوسط</span>,
            capacity: <div className='capacity-inputs'>
                <FormInputNumber />
                <FormInputNumber />
            </div>,
            price: <FormInputNumber />,
            time: <FormSelectSearch />,
            returned: <FormInputNumber />,
            freeShipping: <FormInputNumber />,
        },
        {
            ID: 3,
            active: <FormCheckbox />,
            size: <span className='fail-box'>بزرگ</span>,
            capacity: <div className='capacity-inputs'>
                <FormInputNumber />
                <FormInputNumber />
            </div>,
            price: <FormInputNumber />,
            time: <FormSelectSearch />,
            returned: <FormInputNumber />,
            freeShipping: <FormInputNumber />,
        },
    ]
    return (
        <Card
            title="ارسال توسط فروشنده"
        >
            <Form
                onFinish={onFinish}
            >
                <h3>ظرفیت ارسال کل در روز</h3>
                <ColumnGrid col={fieldCol}>
                    <FormInputNumber
                        label="کوچک"
                    />
                    <FormInputNumber
                        label="متوسط"
                    />
                    <FormInputNumber
                        label="بزرگ"
                    />
                </ColumnGrid>
                <h3>ظرفیت مرجوعی کل در روز</h3>
                <ColumnGrid col={fieldCol}>
                    <FormInputNumber
                        label="کوچک"
                    />
                    <FormInputNumber
                        label="متوسط"
                    />
                    <FormInputNumber
                        label="بزرگ"
                    />
                </ColumnGrid>
                <ColumnGrid col={selectFieldCol}>
                    <FormSelectSearch
                        label="انتخاب استان"
                    />
                    <FormSelectSearch
                        label="انتخاب شهر"
                    />
                    <FormSelectSearch
                        label="انتخاب نوع بازه زمانی"
                    />
                </ColumnGrid>
                <ActionButton position="center">
                    <Button
                        htmlType="submit"
                        label="ایجاد تنظیمات جدید"
                    />
                </ActionButton>
            </Form>
            {visible &&
                <>
                    <div className='warning-box' style={{ marginBottom: 24 }}>
                        <p>تکمیل نمودن کلیه فیلدها به جز فیلد هزینه ارسال الزامی است.</p>
                        <p>لازم به ذکر است، خالی بودن فیلد هزینه ارسال به معنای صفر بودن مقدار آن و رایگان بودن هزینه ارسال خواهد بود.</p>
                        <p>در صورت عدم فروش کالا در ماهیت کالایی خاص، مقدار آن را صفر قرار دهید. مجموع کل ظرفیت ارسال و مرجوعی در تنظیمات شما، باید مساوی و یا کمتر از مجموع کل ظرفیت ارسال و مرجوعی کل روزانه شما باشد.</p>
                        <p>ظرفیت مرجوعی هر یک از ردیف‌ها نباید کمتر از ۱۰٪ ظرفیت ارسال باشد.</p>
                    </div>
                    <Card>
                        <Form>
                            <ColumnGrid col={selectFieldCol}>
                                <FormInput
                                    label="استان"
                                    disabled
                                />
                                <FormInput
                                    label="شهر"
                                    disabled
                                />
                                <FormInput
                                    label="بازه ارسال"
                                    disabled
                                />
                            </ColumnGrid>
                            <Table columns={columns} dataList={dataList} />
                            <ActionButton position="center">
                                <Button
                                    htmlType="submit"
                                    label="افزودن به لیست"
                                />
                                <Button
                                    type="secondary-warning"
                                    label="انصراف"
                                    onClick={() => setVisible(false)}
                                />
                            </ActionButton>
                        </Form>
                    </Card>
                </>
            }
        </Card>
    )
}
