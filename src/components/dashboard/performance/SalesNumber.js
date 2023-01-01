import Card from 'components/utils/card'
import Link from 'components/utils/link'

export default function SalesNumber() {
    return (
        <Card title="تعداد فروش (ناخالص)">
            <div className='sale'>
                <Link to="/passiveorders/">
                    <h2 className='bold'>۱۴ عدد</h2>
                    <p>تعداد کالای فروش رفته هفته جاری</p>
                </Link>
                <Link to="/passiveorders/">
                    <h2 className='bold'>۱۴ عدد</h2>
                    <p>تعداد کالای فروش رفته هفته گذشته</p>
                </Link>
                <Link to="/passiveorders/">
                    <h2 className='bold'>۱۴ عدد</h2>
                    <p>تعداد کالای فروش رفته ماه گذشته</p>
                </Link>
            </div>
        </Card>
    )
}
