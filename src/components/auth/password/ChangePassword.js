import { useNavigate } from 'react-router-dom'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Form from 'components/utils/form'
import Layout from 'components/auth/password/layout'
import FormInputEmail from 'components/utils/form/items/FormInputEmail'
import FormInputPassword from 'components/utils/form/items/FormInputPassword'
import ActionButton from 'components/utils/actionsButton'

export default function ChangePassword() {
    let navigate = useNavigate()

    const onFinish = (values) => {
        // forgetPassword(values).then((res) => {
        //     if (res.exceptionID === 0) {
        //         navigate("/auth/forgot-password/success")
        //     }
        // })
    }

    return (
        <Layout title="تغییر کلمه عبور">
            <Form
                className='forget-pass-form'
                name="forgetPassForm"
                autoComplete="off"
                onFinish={onFinish}
            >
                <FormInputEmail
                    name='username'
                    text="ایمیل"
                    label="ایمیل"
                    required={true}
                    prefix={<Icon type="mail" />}
                />
                <FormInputPassword
                    name='newpassword'
                    text="کلمه عبور جدید"
                    label="رمز عبور"
                    required={true}
                    prefix={<Icon type="lock" />}
                />
                <FormInputPassword
                    name='repeatpassword'
                    text="تکرار کلمه عبور جدید "
                    label="تکرار رمز عبور"
                    required={true}
                    prefix={<Icon type="lock" />}
                />
                <ActionButton position="center">
                    <Button
                        type="secondary-success"
                        name='cancel'
                        label='انصراف'
                        onClick={() => navigate("/")}
                    />
                    <Button
                        name='submit'
                        label='بازنشانی کلمه عبور'
                        htmlType='submit'
                    />
                </ActionButton>
            </Form>
        </Layout>
    )
}
