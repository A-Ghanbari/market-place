import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Link from 'components/utils/link'

export default function SelectedFilters() {
    return (
        <Card>
            <div className="selected-filters">
                <h4>فیلترهای اعمال شده:</h4>
                <div className="create-product">
                    <h4> کالای شما در میان نتایج وجود ندارد ؟<Link to="/content/create"> <Button label="ایجاد کالای جدید" /></Link></h4>
                    <Link to="#">درخواست ایجاد کالا توسط شاواز</Link>
                </div>
            </div>
        </Card>
    )
}
