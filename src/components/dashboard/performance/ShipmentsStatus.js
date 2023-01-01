import Card from 'components/utils/card'
import Link from 'components/utils/link'

export default function ShipmentsStatus() {
    return (
        <Card title="وضعیت محموله ها">
            <div className='shipment'>
                <Link to="/packages/">
                    <h2 className='bold'>1</h2>
                    <p>محموله های آماده ارسال/تحویل سفارش</p>
                </Link>
                <Link to="/packages/">
                    <h2 className='bold'>2</h2>
                    <p>محموله‌های ناقص دریافت شده در ماه گذشته</p>
                </Link>
                <Link to="/packages/">
                    <h2 className='bold'>3</h2>
                    <p>محموله‌های دریافت نشده در ماه گذشته</p>
                </Link>
            </div>
        </Card>
    )
}
