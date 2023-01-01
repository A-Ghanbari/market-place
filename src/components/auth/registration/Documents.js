import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import Layout from 'components/auth/layout'
import Radio from 'components/utils/field/radio'
import FormUpload from 'components/utils/form/items/FormUpload'
import Login from 'components/auth/Login'
import { sendDocuments } from 'store/actions/profile'

export default function Documents() {
    let navigate = useNavigate()
    const { state } = useLocation()
    const [taxation, setTaxation] = useState(2)

    const onFinish = (values) => {
        for (const key in values) {
            values[key] = values[key][0].response.path
        }
        const serviceModel = [{
            DocumentType: 1,
            Path: values.frontCard
        }, {
            DocumentType: 1,
            Path: values.backCard
        }]

        if (taxation === 1) serviceModel.push({
            DocumentType: 2,
            Path: values.taxationFile
        })

        sendDocuments(serviceModel).then(res => {
            if (res.exceptionID === 0) {
                navigate("/registration/success", { state: true })
            }
        })
    }

    if (state === null || state?.status !== 3) {
        return <Login />
    }

    return (
        <Layout
            page="register"
            step={1}
        >
            <div className='document-form'>
                <h2>مالیات بر ارزش افزوده </h2>
                <h4>آیا مشمول مالیات بر ارزش افزوده می باشید؟</h4>
                <h4>توجه نمایید برگه ارزش افزوده حقیقی باید به نام شخص ثبت نام کننده باشد</h4>
                <Radio
                    options={[
                        {
                            value: 1,
                            label: "بلی"
                        },
                        {
                            value: 2,
                            label: "خیر"
                        }
                    ]}
                    onChange={(e) => setTaxation(e.target.value)}
                    value={taxation}
                />
                <Form
                    name="signupForm"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    {taxation === 1 &&
                        <>
                            <FormUpload
                                label="بارگذاری گواهی ارزش افزوده"
                                name="taxationFile"
                                listType="picture"
                                accept=".png,.jpg,.jpeg"
                                maxCount={1}
                                required={true}
                            >
                                <Button label="بارگذاری گواهی ارزش افزوده" type="secondary-success" />
                            </FormUpload>
                            <p>فروشنده عزیز ، لطفا پس از وارد کردن شماره ملی در بخش (بررسی ثبت نام مودیان مالیات) در <a className='fail' target="blank" href="https://www.evat.ir/">سامانه الکترونیک مالیات بر ارزش افزوده</a> ، از آن صفحه اسکرین شات گرفته و در محل گواهی ارزش افزوده ، تصویر آن صفحه را بارگذاری کنید.</p>
                        </>
                    }
                    <h2>تصویر کارت ملی</h2>
                    <p>- تصاویر باید صاف و کاملا واضح باشد.</p>
                    <p>- تصویر رو و پشت کارت ملی باید به طور جداگانه بارگذاری شود.</p>
                    <p>- تصویر کارت ملی همه صاحبان حق امضا در قالب یک عکس در کنار هم قرار گرفته و بارگذاری شود.</p>

                    <FormUpload
                        label="بارگذاری تصویر روی کارت ملی"
                        name="frontCard"
                        listType="picture"
                        accept=".png,.jpg,.jpeg"
                        maxCount={1}
                        required={true}
                    >
                        <Button label="بارگذاری تصویر روی کارت ملی" type="secondary-success" />
                    </FormUpload>

                    <FormUpload
                        label="بارگذاری تصویر پشت کارت ملی"
                        name="backCard"
                        listType="picture"
                        accept=".png,.jpg,.jpeg"
                        maxCount={1}
                        required={true}
                    >
                        <Button label="بارگذاری تصویر پشت کارت ملی" type="secondary-success" />
                    </FormUpload>
                    <Button
                        name='submit'
                        label='ادامه'
                        htmlType='submit'
                    />
                </Form>
            </div>
        </Layout>
    )
}
