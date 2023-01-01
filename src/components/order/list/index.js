import PageHeader from 'components/utils/pageHeader'
import ShavazPost from 'components/order/list/shavazPost'
import SellerPost from 'components/order/list/sellerPost'
import Tabs from 'components/utils/tabs'
import Card from 'components/utils/card'
import "components/order/order.scss"

export default function List() {
    const tabs = [
        {
            title: "ارسال توسط شاواز",
            render: <ShavazPost />
        },
        {
            title: "ارسال توسط فروشنده",
            render: <SellerPost />
        },
    ]
    return (
        <>
            <PageHeader
                title="سفارش‌های تایید شده"
                subTitle='لطفا توجه کنید فقط در صورت انتخاب فیلتر های " گذشته و امروز " یا " فردا به بعد " امکان ایجاد محموله وجود دارد.'
            />
            <div className='accent-box'>
                <p>فروشنده عزیز،</p>
                <p>سقف مجاز سفارشات امروز شما <span className='bold'>10 سفارش</span> بوده و سفارشات ثبت شده امروز شما (فقط برای کالاهای بدون موجودی در انبار و دارای موجودی نزد فروشنده) تا به این لحظه <span className='bold'>0 سفارش </span>  است.</p>
            </div>
            <Card>
                <Tabs tabs={tabs} />
            </Card>
        </>
    )
}
