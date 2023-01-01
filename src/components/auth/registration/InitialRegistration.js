import { useNavigate } from 'react-router-dom'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInputPassword from 'components/utils/form/items/FormInputPassword'
import Link from 'components/utils/link'
import Layout from 'components/auth/layout'
import Icon from 'components/utils/field/Icon'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormInputEmail from 'components/utils/form/items/FormInputEmail'
import { initialRegistration } from 'store/actions/user'

export default function InitialRegistration() {
    let navigate = useNavigate()

    const onFinish = (values) => {
        initialRegistration(values).then(res => {
            if (res.exceptionID === 0) {
                navigate("/registration/email", { state:{mobile: values.Mobile, email: values.Email} })
            }
        })
    }
    return (
        <Layout
            page="register"
            step={0}
        >
            <Form
                className='signup-form'
                name="signupForm"
                autoComplete="off"
                onFinish={onFinish}
            >
                <FormInputEmail
                    name='Email'
                    text="ایمیل خود را وارد کنید"
                    label="ایمیل"
                    required={true}
                    prefix={<Icon type="mail" />}
                />
                <FormInputPassword
                    name='Password'
                    text="کلمه عبور خود را وارد کنید"
                    label="رمز عبور"
                    required={true}
                    prefix={<Icon type="lock" />}
                />
                <FormInputNumber
                    name='Mobile'
                    text="09"
                    label="شماره همراه"
                    maxLength={11}
                    min={11}
                    required={true}
                    prefix={<Icon type="phone" />}
                />
                <Button
                    name='submit'
                    label='ثبت نام'
                    htmlType='submit'
                />
                <p>
                    قبلاً ثبت نام کرده‌ام.
                    <Link className='fail' to="/">ورود</Link>
                </p>
                <div className='info-text'>
                    <span className='fail'>توجه: </span >اگر قبلا مراحل ثبت‌نام را نیمه‌تمام گذاشته‌اید، <Link className='fail' to="/auth">«ورود»</Link> را بزنید و با همان ایمیل و رمز عبور، ثبت‌نام را نهایی کنید.
                </div>
            </Form>
        </Layout>
    )
}
