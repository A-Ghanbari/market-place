import Link from 'components/utils/link'
import Layout from 'components/auth/password/layout'
import { useLocation } from 'react-router-dom'
import Login from 'components/auth/Login'

export default function ForgetPasswordSuccess() {
    const { state } = useLocation()
    if (state === null) {
        return <Login />
    }

    return (
        <Layout className='pass-success'>
            <div className='success-icon' />
            <h3>فروشنده گرامی</h3>
            <p>کلمه عبور جدید به شماره همراه شما ارسال گردید.</p>
            <p>
                باز گشت به صفحه
                <Link className='fail' to="/"> ورود </Link>
            </p>
        </Layout>
    )
}
