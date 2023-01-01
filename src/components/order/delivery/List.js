import ActionButton from 'components/utils/actionsButton'
import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'
import Table from 'components/utils/table'

const fieldCol = { sm: 24, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function List() {

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        },
        {
            title: "نام استان",
            key: "province",
            width: "20%",
        },
        {
            title: "نام شهر",
            key: "city",
            width: "10%",
        },
        {
            title: "بازه ارسال",
            key: "post",
            width: "10%",
        },
    ]

    return (
        <Card title="لیست تنظیمات">
            <Form>
                <h3>جستجو در شهر ها</h3>
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="انتخاب استان"
                    />
                    <FormSelectSearch
                        label="انتخاب شهر"
                    />
                </ColumnGrid>
                <ActionButton position="center">
                    <Button
                        htmlType="submit"
                        label="جستجو"
                    />
                </ActionButton>
            </Form>
            <Table columns={columns} />
        </Card>
    )
}
