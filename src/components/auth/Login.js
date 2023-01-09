import { useSelector } from 'react-redux'
import { USER as entity } from 'tools/utils/entities'
import { login } from 'store/actions/user'
import Form from 'components/utils/form'
import Button from 'components/utils/field/button'
import useAuth from 'hooks/useAuth'
import Panel from 'components/panel/Panel'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputPassword from 'components/utils/form/items/FormInputPassword'
import FormCheckbox from 'components/utils/form/items/FormCheckbox'
import Link from 'components/utils/link'
import Layout from 'components/auth/layout'
import Icon from 'components/utils/field/Icon'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
    const isAuth = useAuth()
    const { isLoading } = useSelector(
        (s) => s[entity.name]
    )

    const onFinish = (values) => {
        login(values).then(res => {
            if (res !== null) {
                switch (res.registerStatus) {
                    case 1:
                        navigate("/registration/business-details", { state: { status: res.registerStatus, mobile: res.mobile } })
                        break
                    case 2:
                        navigate("/registration/business-details", { state: { status: res.registerStatus, mobile: res.mobile } })
                        break
                    case 3:
                        navigate("/registration/documents", { state: { status: res.registerStatus } })
                        break
                    default:
                        break;
                }
            }
        })
    }

    return (
        <>
            {isAuth ?
                <Panel /> :
                <Layout
                    page="login"
                >
                    <Form
                        className='login-form'
                        name="LoginForm"
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <FormInput
                            name='UserName'
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
                        <FormCheckbox label="مرا به خاطر بسپار" />
                        <Button
                            name='submit'
                            label='ورود'
                            loading={isLoading}
                            htmlType='submit' />
                        <p >
                            <Link className='fail' to="/auth/forgot-password">رمز عبورم را فراموش کرده ام</Link>
                        </p>
                        <p >
                            <Link className='fail' to="/auth/camera">CAMERA</Link>
                        </p>
                        <p>
                            هنوز ثبت نام نکرده اید ؟
                            <Link className='fail' to="/registration">همین حالا ثبت نام کنید</Link>
                        </p>
                    </Form>
                </Layout>
            }
        </>
    )
}