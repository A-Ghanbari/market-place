import Card from 'components/utils/card'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormSwitch from 'components/utils/form/items/FormSwitch'
import { ColumnGrid } from 'components/utils/grid'
import Table from 'components/utils/table'

const searchCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
const rateCol = { sm: 24, md: 24, lg: 8, xl: 6, xxl: 6 }
export default function ProductRating() {

    const columns = [
        {
            title: "ردیف",
            width: "5%",
        },
        {
            title: "عنوان",
            width: "5%",
            render: (r) => <div className='table-title'>{r}</div>
        },
        {
            title: "گروه کالایی",
            width: "5%",
        },
        {
            title: "کد محصول",
            width: "10%",
        },
        {
            title: "کد تنوع ",
            width: "10%",
        },
        {
            title: "فعال/غیر فعال",
            width: "10%",
        },
        {
            title: "میزان رضایت مندی",
            width: "10%",
        },
        {
            title: "توصیه خرید ",
            width: "10%",
        },
    ]

    return (
        <Card title="امتیاز کالاهای شما">
            <Form>
                <ColumnGrid col={searchCol}>
                    <FormSelect
                        name="type"
                        label="جستجو در"
                    />
                    <FormInput
                        name="title"
                        text="عنوان را بنویسید"
                    />
                </ColumnGrid>
                <ColumnGrid col={rateCol}>
                    <FormSelect
                        name="rate"
                        label="میزان رضایت"
                    />
                    <FormSwitch
                        label="فقط کالاهای دارای امتیاز"
                    />
                    <FormSwitch
                        label="نمایش کالاهای فعال"
                    />
                </ColumnGrid>
            </Form>
            <Table
                columns={columns}
            />
        </Card>
    )
}
