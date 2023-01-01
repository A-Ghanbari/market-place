import { useNavigate } from 'react-router-dom'
import React from 'react'
import Button from 'components/utils/field/button'
import Icon from 'components/utils/field/Icon'
import Form from 'components/utils/form'
import Link from 'components/utils/link'
import Layout from 'components/auth/password/layout'
import FormInputEmail from 'components/utils/form/items/FormInputEmail'
import { forgetPassword } from 'store/actions/user'

export default function ForgetPassword() {
    let navigate = useNavigate()

    const onFinish = (values) => {
        forgetPassword(values).then((res) => {
            if (res.exceptionID === 0) {
                navigate("/auth/forget-password/success", { state: values.username })
            }
        })
    }
    return (
        <Layout title="یادآوری کلمه عبور">
            <Form
                className='forget-pass-form'
                name="forgetPassForm"
                autoComplete="off"
                onFinish={onFinish}
            >
                <FormInputEmail
                    name='username'
                    text="ایمیل خود را وارد کنید"
                    label="ایمیل"
                    required={true}
                    prefix={<Icon type="mail" />}
                />
                <Button
                    name='submit'
                    label='بازیابی کلمه عبور'
                    htmlType='submit'
                />
                <p>
                    هنوز ثبت نام نکرده اید ؟
                    <Link className='fail' to="/registration">همین حالا ثبت نام کنید</Link>
                </p>
            </Form>
        </Layout>
    )
}
