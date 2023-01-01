import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { checkFilters } from 'tools/utils'
import Layout from 'components/auth/layout'
import Radio from 'components/utils/field/radio'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadio from 'components/utils/form/items/FormRadio'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import { ColumnGrid } from 'components/utils/grid'
import Button from 'components/utils/field/button'
import Modal from 'components/utils/modal'
import { FormDatePicker } from 'components/utils/form/items/FormDatePicker'
import { confirmRules, realRegistrationUser, registerLegalUser } from 'store/actions/user'
import FormSelectProvinceAndCity from 'components/utils/form/items/FormSelectProvinceAndCity'
import Map from 'components/utils/map'
import Notification from "components/utils/notification"
import Login from 'components/auth/Login'

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }

export default function BusinessDetails() {
    let navigate = useNavigate()
    const { state } = useLocation()

    const [sellerType, setSellerType] = useState(1)
    const [rulesModal, setRulesModal] = useState((state?.status === 2) ? true : false)
    const [position, setPosition] = useState([0, 0])

    const onFinish = (values) => {
        if (position[0] === 0) {
            Notification.error("وارد کردن محل فروشگاه روی نقشه الزامی می باشد.")
            return
        }

        const serviceModel = {
            LatLong: position.toString(),
            ...values
        }

        if (sellerType === 1) {
            realRegistrationUser(checkFilters(serviceModel)).then(res => {
                if (res.exceptionID === 0) {
                    setRulesModal(true)
                }
            })
        } else if (sellerType === 2) {
            registerLegalUser(checkFilters(serviceModel)).then(res => {
                if (res.exceptionID === 0) {
                    setRulesModal(true)
                }
            })
        }
    }

    if (state === null) {
        return <Login />
    }

    return (
        <Layout
            page="register"
            step={0}
        >
            <h3><span>توجه : </span>پر کردن تمامی موارد الزامیست.</h3>
            <h2>چه نوع فروشنده ای هستید؟</h2>
            <Radio
                options={[{
                    value: 1,
                    label: "شخص حقیقی"
                }, {
                    value: 2,
                    label: "شخص حقوقی "
                }]}
                onChange={(e) => setSellerType(e.target.value)}
                value={sellerType}
            />
            <div className='info-text'><span className='bold'>شخص حقیقی</span> فردی است که دارای خصوصیاتی مختص به خود مانند نام، نام خانوادگی، تاریخ تولد، کد ملی، شماره شناسنامه و غیره می باشد.</div>
            <div className='info-text'> <span className='bold'> شخص حقوقی</span> موسسات یا شرکت هایی هستند که پس از طی مراحل قانونی به ثبت می‌رسند و دارای مشخصاتی مانند نام شخص حقوقی، تاریخ ثبت، شماره ثبت، کد شناسایی، کد اقتصادی، موضوع فعالیت و غیره می باشند.</div>
            <Form
                name="signupForm"
                autoComplete="off"
                onFinish={onFinish}
                initialValues={{
                    Mobile: state?.mobile,
                }}
            >
                {sellerType === 1 ?
                    <>
                        <h2>اطلاعات شخصی</h2>
                        <ColumnGrid col={fieldCol}>
                            <FormInput
                                name='FirstName'
                                label="نام"
                                required={true}
                            />
                            <FormInput
                                name='LastName'
                                label="نام خانوادگی"
                                required={true}
                            />
                            <FormDatePicker
                                label="تاریخ تولد ( مثال:‌ ۶۵-۱۲-۰۶ )"
                                name='BirthDate'
                                required={true}
                                format="YYYY-MM-DD"
                            />
                            <>
                                <h3>جنسیت</h3>
                                <FormRadio
                                    name='Gender'
                                    label="جنسیت"
                                    options={[
                                        {
                                            value: true,
                                            label: "مرد"
                                        }, {
                                            value: false,
                                            label: "زن"
                                        }
                                    ]}
                                    required={true}
                                />
                            </>
                            <FormInputNumber
                                name='BirthCertificate'
                                label="شماره شناسنامه"
                                text="13245"
                                required={true}
                            />
                            <FormInputNumber
                                name='NationalCode'
                                label="کد ملی"
                                text="1324567890"
                                maxLength={10}
                                min={10}
                                required={true}
                            />
                        </ColumnGrid>
                    </>
                    :
                    <>
                        <h2>اطلاعات شرکتی</h2>
                        <FormInput
                            name='CompanyName'
                            label='نام شرکت'
                            required={true}
                        />
                        <ColumnGrid col={fieldCol}>
                            <FormSelect
                                name='CompanyType'
                                label='نوع شرکت'
                                required={true}
                                items={[
                                    {
                                        text: 'تضامنی',
                                        value: 1
                                    }, {
                                        text: 'نسبی',
                                        value: 2
                                    }, {
                                        text: 'با مسئولیت محدود',
                                        value: 3
                                    }, {
                                        text: ' سهامی خاص',
                                        value: 4
                                    }, {
                                        text: 'سهامی عام',
                                        value: 5
                                    }, {
                                        text: 'مختلط غیر سهامی',
                                        value: 6
                                    }, {
                                        text: 'مختلط سهامی',
                                        value: 7
                                    }, {
                                        text: 'تعاونی',
                                        value: 8
                                    }
                                ]}
                            />
                            <FormDatePicker
                                name='RegistrationDate'
                                label='تاریخ ثبت'
                                required={true}
                                format="YYYY-MM-DD"
                            />
                            <FormInputNumber
                                name='RegistrationNumber'
                                label='شماره ثبت'
                                text='13245'
                                required={true}
                            />
                            <FormInputNumber
                                name='NationalID'
                                label='شناسه ملی'
                                text='1324567890'
                                maxLength={11}
                                min={11}
                                required={true}
                            />
                            <FormInputNumber
                                name='EconomicCode'
                                label='کد اقتصادی'
                                text='1324567890'
                                maxLength={12}
                                min={12}
                                required={true}
                            />
                        </ColumnGrid>
                        <FormInput
                            name='SignatureManagers'
                            label='صاحبان حق امضا'
                            required={true}
                        />
                    </>
                }
                <h2>اطلاعات تماس</h2>
                <FormSelectProvinceAndCity
                    provinceName="ProvinceID"
                    provinceLabel='استان'
                    cityName="CityID"
                    cityLabel='شهر'
                    required={true} />
                <FormInput
                    name='Address'
                    label="آدرس"
                    text="آدرس خود را به صورت کامل (محله - خیابان اصلی - کوچه - پلاک – واحد ) وارد نمایید"
                    required={true}
                />
                <ColumnGrid col={fieldCol}>
                    <FormInputNumber
                        name='PostalCode'
                        label="کد پستی"
                        text="1234567890"
                        maxLength={10}
                        min={10}
                        required={true}
                    />
                    <FormInputNumber
                        name='Phone'
                        label="تلفن ثابت"
                        text="61930000"
                        maxLength={12}
                        required={true}
                    />
                    <FormInputNumber
                        name='Mobile'
                        label="تلفن همراه"
                        text="09"
                        disabled
                        maxLength={11}
                        min={11}
                        required={true}
                    />
                </ColumnGrid>
                <h2>موقعیت فروشکاه یا انبار</h2>
                <Map
                    initialPosition={[35.722, 51.333]}
                    position={position}
                    setPosition={setPosition}
                    popup="محل فروشگاه یا انبار"
                />
                <h2>اطلاعات تجاری</h2>
                <FormInput
                    name='StoreName'
                    label="نام فروشگاه"
                    text="نام فروشگاه شما در سایت شاواز"
                    required={true}
                />
                <FormInputNumber
                    name='Shaba'
                    label="شماره شبا (به نام شخص یا شرکت ثبت نام کننده)"
                    maxLength={24}
                    min={24}
                    required={true}
                />
                <FormSelect
                    name='ProductCategoryID'
                    label="قصد فروش چه کالاهایی را دارید؟"
                    required={true}
                    items={[
                        {
                            text: 'زیبایی و سلامت',
                            value: 1
                        }
                    ]}
                />
                <FormSelect
                    name='ProductsVariety'
                    label="تعداد حدودی تنوع کالای آماده فروش"
                    required={true}
                    items={[
                        {
                            text: '1-10',
                            value: 1
                        }, {
                            text: '11-50',
                            value: 2
                        }, {
                            text: '51-100',
                            value: 3
                        }, {
                            text: '101-300',
                            value: 4
                        }, {
                            text: '301-1000',
                            value: 5
                        }, {
                            text: '1001-3000',
                            value: 6
                        }, {
                            text: '3001-10000',
                            value: 7
                        }, {
                            text: '10001-30000',
                            value: 8
                        }
                    ]}
                />
                <Button
                    name='submit'
                    label='ادامه'
                    htmlType='submit' />
            </Form>
            <Modal
                visible={rulesModal}
                footer={
                    <Form
                        className="rules-form"
                        name="rulesForm"
                        autoComplete="off"
                        onFinish={
                            (values) => {
                                if (values.rules === 1) {
                                    confirmRules({
                                        Status: true
                                    }).then(res => {
                                        if (res.exceptionID === 0 && res.data.status === true) {
                                            navigate("/registration/documents", { state: { status: 3 } })
                                        }
                                    })
                                } else {
                                    navigate("/")
                                }
                            }
                        }
                    >
                        <FormRadio
                            name='rules'
                            label="قوانین"
                            options={[
                                {
                                    label: "قرارداد همکاری را مطالعه کرده و موافقم",
                                    value: 1
                                }, {
                                    label: "با شرایط قرارداد موافق نیستم و مایل به خاتمه ثبت نام هستم",
                                    value: 2
                                }
                            ]}
                            required={true}
                        />
                        <Button
                            name="submit"
                            type="primary-success"
                            label="تایید"
                            htmlType="submit"
                        />
                    </Form>
                }
            >
                <p>قوانین</p>
            </Modal>
        </Layout>
    )
}