import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from 'components/auth/layout'
import Button from 'components/utils/field/button'
import Modal from 'components/utils/modal'

export default function Success() {
    let navigate = useNavigate()
    const [visible, setVisible] = useState(false)

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <Layout
            page="register"
            step={2}
        >
            <div className='success-page'>
                <div className='success-logo' />
                <h2>تبریک!</h2>
                <p>اکنون شما به جمع فروشندگان شاواز پیوستید.</p>
                <p>از تجارت آنلاین لذت ببرید</p>
                <p>برای تایید پروفایل شما ، شرکت در دوره آموزشی اجباری است.</p>
                <p>پس از ورود به داشبورد پنل فروشندگان شاواز، یا ورود به صفحه پروفایل شما می توانید نسخه آنلاین قرارداد و اطلاعات تجاری خود را مشاهده کنید.لطفا توجه کنید که نیازی به چاپ و ارسال قرارداد نیست.</p>
                <Button
                    type="secondary-success"
                    label="ورود به پنل فروشندگان"
                    onClick={() => navigate("/")}
                />
                <p className='fail' onClick={() => setVisible(true)}>مشاهده جدول کمیسیون</p>
            </div>
            <Modal
                visible={visible}
                handleCancel={handleCancel}
                closable={true}
                footer={null}
            >
                جدول کمیسیون
            </Modal>
        </Layout>
    )
}
