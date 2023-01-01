import Card from 'components/utils/card'
import PageHeader from 'components/utils/pageHeader'
import Steps from 'components/utils/steps'
import Category from 'components/content/product/edit/Category'
import Information from 'components/content/product/edit/Information'
import Property from 'components/content/product/edit/Property'
import Upload from 'components/content/product/edit/Upload'
import Form from 'components/utils/form'
import Button from 'components/utils/field/button'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'

export default function Edit() {
const {ID} = useParams()
    console.log(ID)
    

    const items = [
        {
            title: <Category />
        },
        {
            title: <Information />
        },
        {
            title: <Property />
        },
        {
            title: <Upload />
        },
    ]

    const init = {
        category: 10,
        brand: 1,
        size: 10
    }

    return (
        <div className='create-product'>
            <PageHeader
                title="ویرایش محصول"
                subTitle="محصول ایجاد شده را در این صفحه ویرایش کنید"
            />
            <Card>
                <Form
                    initialValues={init}
                >
                    <Steps
                        items={items}
                        current={3}
                    />
                    <Button
                        label="ذخیره کالا"
                        htmlType="submit"
                    />
                </Form>
            </Card>
        </div>
    )
}
