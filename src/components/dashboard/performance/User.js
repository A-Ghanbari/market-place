import Card from "components/utils/card"
import Icon from "components/utils/field/Icon"
import Link from "components/utils/link"

export default function User({ isDashboard }) {
    return (
        <Card>
            <div className='user-card'>
                <div className="user-avatar">خ</div>
                <h2>خورشید فناوران نفیس</h2>
                <div className='user-card-action'>
                    <Link to="/questions/">
                        <Icon type="question" />
                        <h5>پرسش‌ها</h5>
                    </Link>
                    <Link to="/messages/">
                        <Icon type="message" />
                        <h5>پیام‌ها</h5>
                    </Link>
                    <Link to="/profile">
                        <Icon type="profile" />
                        <h5>پروفایل</h5>
                    </Link>
                </div>
                {isDashboard &&
                    <>
                        <Link to="/content/find/" >
                            <div className="new-product">
                                <span> افزودن محصول جدید</span>
                                <div className='product-icon' >+</div>
                            </div>
                        </Link>
                        <Link to="#" >
                            <div className='promotion'>
                                <span>تنوع های فعال در پروموشن‌ها</span>
                                <span>23</span>
                            </div>
                        </Link>
                        <div className='status-section fail-box '>
                            <h4>وضعیت مدارک</h4>
                            <h4 className='fail'>(تایید نشده)</h4>
                        </div>
                        <div className='status-section success-box'>
                            <h4>وضعیت آموزش</h4>
                            <h4 className='success'>(گذرانده)</h4>
                        </div>
                        <div className='status-section success-box'>
                            <h4>وضعیت قرارداد</h4>
                            <h4 className='success'>(پذیرفته شده)</h4>
                        </div>
                        <div className='status-section success-box'>
                            <h4>وضعیت پرداخت</h4>
                            <h4 className='success'>(فعال )</h4>
                        </div>
                    </>
                }
            </div>
        </Card>
    )
}
