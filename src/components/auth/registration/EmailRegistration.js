import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import Link from 'components/utils/link'
import Layout from 'components/auth/layout'
import Icon from 'components/utils/field/Icon'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import { checkValidationCode, sendAgainValidationCode } from 'store/actions/user'

export default function EmailRegistration() {
    let navigate = useNavigate()
    const { state } = useLocation()

    const onFinish = (values) => {
        checkValidationCode({
            Email: state.email,
            Code: values.Code
        }).then(res => {
            if (res !== null) {
                switch (res.registerStatus) {
                    case 1:
                        navigate("/registration/business-details", { state: { status: res.registerStatus, mobile: res.mobile } })
                        break
                    case 2:
                        navigate("/registration/business-details", { state: { status: res.registerStatus, mobile: res.mobile } })
                        break
                    case 3:
                        navigate("/registration/documents", { state: { status: res.registerStatus, mobile: res.mobile } })
                        break
                    default:
                        break;
                }
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
                initialValues={{ Mobile: state.mobile }}
            >
                <div className='info-text'>
                    <span className='fail'>توجه:</span >
                    کد فعالسازی برای شما ارسال شده است.
                </div>
                <FormInput
                    name='Mobile'
                    disabled
                    required={true}
                    prefix={<Icon type="phone" />}
                    suffix={
                        <Link to="/registration"><Icon type="edit" /></Link>
                    }
                />
                <FormInputNumber
                    name='Code'
                    label="کد تایید "
                    text={`کد ارسال شده به ${state.mobile} را وارد کنید.`}
                    maxLength={4}
                    required={true}
                />
                <Button
                    name='submit'
                    label='ثبت کد تایید '
                    htmlType='submit' />
                <p>
                    کد تایید دریافت نکرده اید؟&nbsp;
                    <span className='fail'
                        style={{ cursor: "pointer" }}
                        onClick={() => sendAgainValidationCode({ Email: state.email })}>
                        ارسال مجدد کد تایید
                    </span>
                </p>
            </Form>
        </Layout>
    )
}