import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'components/utils/card'
import { ColumnGrid, Row } from 'components/utils/grid'
import PageHeader from 'components/utils/pageHeader'
import testImg from 'assets/images/test.png'
import Create from 'components/content/product/variant/create'
import ProductList from 'components/content/product/variant/ProductList'
import Button from 'components/utils/field/button'
import "components/content/content.scss"

const fieldCol = { sm: 24, md: 24, lg: 8, xl: 8, xxl: 4 }
export default function Variant() {
    //We should be request for get single product with ID that give from useParams because we need productID and categoryID for send to create component
    const { ID } = useParams()
    const categoryID = 18
    const [isColor, setIsColor] = useState(false)
    const items = [
        {
            title: "دسته بندی:",
            text: "شامپو"
        },
        {
            title: "تنوع مجاز این کالا:",
            text: "رنگ "
        },
        {
            title: "کمیسیون فروش این کالا:",
            text: "5%"
        },
        {
            title: "ابعاد (ارتفاع×عرض×طول):",
            text: "۵x۵x۵ سانتیمتر"
        },
        {
            title: "وزن بسته‌بندی محصول",
            text: "10 گرم"
        },
    ]

    return (
        <Row>
            <PageHeader
                title="افزودن تنوع"
                subTitle=" برای محصولاتی که قصد فروش آن را دارید تنوع اضافه کنید"
            />
            <Card>
                <div className='fail-box'>
                    <h3>توجه :</h3>
                    <p>
                        لطفاً قبل از درج تنوع، مشخصات فنی کالا (مانند: رنگ، ابعاد، اقلام همراه کالا، جنس کالا، تصویر بسته‌بندی و ...) را در سایت چک کرده و اطمینان حاصل کنید که تنوع شما با مشخصات فنی کالا در سایت مطابقت داشته باشد. عدم تطابق مشخصات فنی کالا با تنوع شما، علاوه بر ایجاد نارضایتی مشتریان و تاثیر در امتیاز عملکرد شما، موجب مرجوع شدن سفارشات به علت مغایرت شده و همچنین موجب غیر‌فعال شدن کالا/گروه کالایی خواهد شد.
                    </p>
                </div>
                <div className='variant-title'>
                    <img src={testImg} width={80} />
                    <h2>شامپو مناسب موهای چرب دیپ سنس</h2>
                </div>
                <ColumnGrid col={fieldCol}>
                    {items.map(item => (
                        <div key={item.title} className='fail-box flex-row variant-info'>
                            <span>{item.title}</span>
                            <span className='fail'>{item.text}</span>
                        </div>
                    ))}
                </ColumnGrid>
                <Button
                    label="انتخاب رنگ"
                    onClick={() => setIsColor(!isColor)}
                />
            </Card>
            <Create isColor={isColor} productID={ID} categoryID={categoryID} />
            <ProductList />
        </Row>
    )
}
