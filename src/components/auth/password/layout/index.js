import 'components/auth/password/layout/layout.scss'

export default function Layout({ title, children }) {
    return (
        <div className="pass-layout-wrapper">
            <div className='pass-header' />

            <div className='pass-form-card' >
                <h2>{title}</h2>
                {children}
            </div>

            <div className='pass-footer'>
                <div className='main-footer'>
                    <h3>ارتباط با مرکز فروشندگان شاواز</h3>
                    <div className='tell'>46130452 - ۰۲۱</div>
                    <div className='email'>SellerSupport@shavaz.com</div>
                </div>
                <div className='main-footer'>
                    <h5>کليه حقوق اين سايت به شرکت <span className='fail'>سلامت آوران یزدان (فروشگاه آنلاین شاواز) </span>تعلق دارد.</h5>
                    <h5>Copyright © 2021 - 2022 Shavaz.com</h5>
                </div>
            </div>
        </div>
    )
}