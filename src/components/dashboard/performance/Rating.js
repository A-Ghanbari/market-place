import Card from 'components/utils/card'
import Link from 'components/utils/link'
import Progress from 'components/utils/progress'
import Rate from 'components/utils/rate'

export default function Rating({ isDashboard }) {
    return (
        <Card title="امتیاز عملکرد شما">
            <div className="rating-card">
                <Rate value={0} />
                <h3>عضویت از 5 روز ، 1 ساعت پیش</h3>
                <div className='rating-card-action'>
                    <div >
                        <h4>تاخیر</h4>
                        <h4> در ارسال</h4>
                        <span className='rate'>100%</span>
                    </div>
                    <div >
                        <h4>لغو</h4>
                        <h4>سفارش</h4>
                        <span className='rate'>100%</span>
                    </div>
                    <div >
                        <h4>بازگشت کالا</h4>
                        <h4>از مشتری</h4>
                        <span className='rate'>100%</span>
                    </div>
                </div>
                {isDashboard &&
                    <Link to="/rating/">
                        <h5>رضایت خرید مشتریان از کالا</h5>
                        <Progress value={0} />
                        <h4>از ۰ رأی</h4>
                    </Link>
                }
            </div>
        </Card>
    )
}
