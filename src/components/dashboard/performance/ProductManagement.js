import Card from 'components/utils/card'
import Link from 'components/utils/link'

export default function ProductManagement() {
    return (
        <Card title="مدیریت محصولات">
            <div className='product'>
                <Link to="/product/">
                    <h1 className='bold'>5</h1>
                    <p>کالاهای درج شده در ۳۰ روز گذشته</p>
                </Link>
                <Link to="/product/">
                    <h1 className='bold'>0</h1>
                    <p>کالاهای تأیید شده</p>
                </Link>
                <Link to="/product/">
                    <h1 className='bold'>0</h1>
                    <p>کالاهای در انتظار تأیید</p>
                </Link>
                <Link to="/product/">
                    <h1 className='bold'>0</h1>
                    <p>بررسی مجدد</p>
                </Link>
                <Link to="/product/">
                    <h1 className='bold'>0</h1>
                    <p>درصد رد شدن کالا در ۳۰ روز گذشته</p>
                </Link>
            </div>
        </Card>
    )
}
