import Link from 'components/utils/link'
import Steps from 'components/utils/steps'
import Icon from 'components/utils/field/Icon'
import warehouseImg from 'assets/images/warehouse.svg'
import 'components/auth/layout/layout.scss'

export default function Layout({ step, page, children }) {
    const steps = [
        {
            title: "اطلاعات فروشنده",
            text: "اطلاعات شخصی فروشنده، اطلاعات تجاری، اطلاعات تماس",
            icon: <Icon type="form" />,
        },
        {
            title: "بارگذاری مدارک",
            text: "اطلاعات مربوط به مالیات بر ارزش افزوده، تصویر مدارک شخصی و تجاری",
            icon: <Icon type="upload" />,
        },
        {
            title: "اتمام ثبت نام",
            text: "به جمع فروشندگان شاواز خوش آمدید.",
            icon: <Icon type="task" />,
        },
    ]
    return (
        <div className="auth-layout-wrapper">
            <div className="aside">
                <div className='auth-aside-header' />
                <h2>{page === "register" ? "ثبت‌نام در مرکز فروشندگان" : "به مرکز فروشندگان شاواز خوش آمدید!"}</h2>
                {
                    page === "register" ?
                        <div className="signup-aside-main" ><Steps items={steps} current={step} /></div>
                        :
                        <div className='login-aside-main' />
                }
                <h5>Copyright © 2021 - 2022 Shavaz.com</h5>
            </div>
            <div className="main">
                <div className='auth-form-card' >
                    {children}
                </div>
                <div className='auth-footer'>
                    <Link to="#">ثبت رسید سفارش</Link>
                    <Link to="#">فروشگاه اینترنتی شاواز</Link>
                    <Link to="#">مرکز آموزش فروشندگان</Link>
                    <Link to="#">سوالات متداول</Link>
                    <Link to="#">مراحل ثبت نام</Link>
                </div>
                <div className="footer-aside">
                    {
                        page === "register" ?
                            <div><Steps className="md-aside-step" items={steps} current={step} /></div>
                            :
                            <div className='login-aside-main' >
                                <img src={warehouseImg} />
                            </div>
                    }
                    <h5>Copyright © 2021 - 2022 Shavaz.com</h5>
                </div>
            </div>
        </div>
    )
}