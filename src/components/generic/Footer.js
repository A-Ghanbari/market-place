import { Layout } from 'antd'
import 'assets/sass/footer.scss'

const { Footer: AntFooter } = Layout
function Footer() {
    return (
        <AntFooter className='footer'>
            <div className='top-footer'>
                <div className='top-footer-wrapper'>
                    <div className='main-footer'>
                        <h3>ارتباط با مرکز فروشندگان شاواز</h3>
                        <div className='tell'>۴۶۱۳۰۴۵۲ - ۰۲۱</div>
                        <h3>تماس با پشتیبانی فروشندگان</h3>
                    </div>
                    <div className='footer-logo' />
                </div>
            </div>
            <div className='bottom-footer'>
                <div className='bottom-footer-wrapper'>
                    <h4>کليه حقوق اين سايت به شرکت<span className='fail'> سلامت آوران یزدان (فروشگاه آنلاین شاواز) </span>تعلق دارد.</h4>
                    <h5>Copyright © 2021 - 2022 Shavaz.com</h5>
                </div>
            </div>
        </AntFooter>
    )
}

export default Footer
