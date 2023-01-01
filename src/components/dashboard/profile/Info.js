import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import { FormInputNumber } from 'components/utils/form/items/FormInputNumber'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import FormUpload from 'components/utils/form/items/FormUpload'
import { ColumnGrid } from 'components/utils/grid'
import { useEffect, useState } from 'react'
import { USER_BASIC_INFO as basicEntity } from 'tools/utils/entities'
import { getUserBasicInfo, updateUserBasicInfo } from 'store/actions/profile'
import { useSelector } from 'react-redux'
import { FormDatePicker } from 'components/utils/form/items/FormDatePicker'
import { checkFilters } from 'tools/utils'
import { API_UPLOAD_URL } from 'tools/shared/constants'
import Table from 'components/utils/table'
import Skeleton from 'components/utils/skeleton'

const columns = [
    {
        title: "ردیف",
        key: "index",
        width: "5%",
        render: (text, record, index) => index + 1,
    }, {
        title: "نوع",
        key: "documentType",
        width: "5%",
        render: (f, r) => (
            f === 1 ? <p>آخرین تغییرات گواهینامه ارزش افزوده</p> :
                f === 2 ? <p>مدارک تغییر نام,نام خانوادگی,نام شرکت</p> :
                    <p>مجوز کسب و کار</p>
        )
    }, {
        title: "مدرک",
        key: "path",
        width: "5%",
        render: (f, r) => (<a href={`${API_UPLOAD_URL}${f}`} target="blank">
            <img src={`${API_UPLOAD_URL}${f}`} width="32" height="32" alt='document' /></a>)
    }, {
        title: "وضعیت",
        key: "status",
        width: "5%",
    }
]

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function Info() {

    const { data, loading } = useSelector((s) => s[basicEntity.name])

    const [withTaxState, setWithTaxState] = useState(loading && data.withTax)

    useEffect(() => {
        getUserBasicInfo("")
    }, [])

    const onFinish = (values) => {
        const serviceModel = {
            Gender: values.gender,
            BirthCertificate: values.birthCertificate,
            StoreName: values.storeName,
            WithTax: values.withTax,
            TaxExpireDate: values.taxExpireDate,
            taxPicture: (values.taxPictureImage) ? values?.taxPictureImage[0].response.path : null,
            AboutUs: values.aboutUs,
            Logo: (values.logoImage) ? values?.logoImage[0].response.path : null
        }
        updateUserBasicInfo(checkFilters(serviceModel));
    }
    if (!loading) {
        return (
            <div>
                <Form
                    name="EditForm"
                    onFinish={onFinish}
                    initialValues={data}
                    autoComplete="off"
                >
                    <div className='profile-tab-title'>
                        <h3>اطلاعات فروشنده</h3>
                        <Button
                            type="primary-fail"
                            label="ویرایش"
                            name='submit'
                            loading={loading}
                            htmlType='submit'
                        />
                    </div>
                    {data.courseLearningStatus ?
                        <div className="profile-seller-status-success">
                            <h4>وضعیت آموزش</h4>
                            <div>ثبت‌نام کرده‌اید<span />
                            </div>
                        </div> :
                        <div className="profile-seller-status-fail">
                            <h4>وضعیت آموزش</h4>
                            <div>ثبت‌نام نکرده‌اید<span />
                            </div>
                        </div>}

                    <ColumnGrid col={fieldCol}>
                        <FormInput
                            name="storeName"
                            label="نام تجاری"
                            disabled={true}
                        />
                        <FormInput
                            name="firstName"
                            label="نام"
                            disabled={true}
                        />
                        <FormInput
                            name="lastName"
                            label="نام خانوادگی"
                            disabled={true}
                        />
                        <FormSelect
                            name="gender"
                            label="جنسیت"
                            items={[
                                {
                                    text: "مرد",
                                    value: true,
                                },
                                {
                                    text: "زن",
                                    value: false,
                                },
                            ]}

                        />
                        <FormDatePicker
                            label="تاریخ تولد ( مثال:‌ ۶۵/۱۲/۰۶ )"
                            name='birthDate'
                            required={true}
                            format="YYYY-MM-DD"
                            disabled={true}
                        />
                        <FormInputNumber
                            name="nationalCode"
                            label="کد ملی"
                            disabled={true}
                        />
                        <FormInputNumber
                            name="birthCertificate"
                            label="شماره شناسنامه"
                        />
                    </ColumnGrid>
                    <ColumnGrid>
                        <FormSelect
                            name="withTax"
                            label="مشمول مالیات بر ارزش افزوده"
                            items={[
                                {
                                    text: "بلی",
                                    value: true,
                                },
                                {
                                    text: "خیر",
                                    value: false,
                                },
                            ]}
                            onChange={(e) => { setWithTaxState(e) }}
                        />

                        {withTaxState && <FormDatePicker
                            label="تاریخ اعتبار برگه مالیاتی"
                            name='taxExpireDate'
                            format="YYYY-MM-DD"
                        />}

                    </ColumnGrid>
                    {withTaxState && <FormUpload
                        label="تصویر برگه مالیاتی"
                        name="taxPictureImage"
                        listType="picture-card"
                        accept=".png,.jpg,.jpeg"
                        maxCount={1}
                        defaultFileList={data.taxPicture && [{
                            status: 'done',
                            url: API_UPLOAD_URL + data.taxPicture,
                        }]}
                    >
                        <div className='profile-upload' />
                    </FormUpload>}

                    <FormInput
                        name="storeName"
                        label="نام فروشگاه"
                    />
                    <FormTextArea
                        name="aboutUs"
                        label="درباره فروشنده"
                    />
                    <h5>لوگوی فروشنده</h5>
                    <FormUpload
                        label="لوگوی فروشگاه"
                        name="logoImage"
                        listType="picture-card"
                        accept=".png,.jpg,.jpeg"
                        maxCount={1}
                        defaultFileList={[{
                            status: 'done',
                            url: data.url
                        }]}
                    >
                        <div className='profile-upload' />
                    </FormUpload>
                    <div className='profile-info'>
                        <p>شرایط لوگو: ۱- پس‌زمینه ترجیحا سفید باشد ۲- قالب مربع ۲- حداقل ۶۰۰ در ۶۰۰ پیکسل ۴- فرمت PNG یا JPG</p>
                    </div>
                    <div className='profile-info'>
                        <p>متن پیشنهادی را با توجه به نکات زیر ارسال کنید:</p>
                        <p>• شرح حال کسب‌ و کارتان را در خصوص تاریخچه، تنوع و محصولاتتان بین 100 تا 150 کلمه یادداشت کنید.</p>
                        <p>• حتما به سال شروع فعالیتتان در متن ارسالی اشاره کنید.</p>
                        <p>• متن ارسالی باید فاقد آدرس سایت و صفحات مجازی هرگونه شماره تماس باشد</p>
                    </div>
                </Form>
                <div>مدارک فروشنده</div>
                <Table
                    dataList={data.documents}
                    loading={loading}
                    columns={columns}
                />
            </div>

        )
    }
    return (<Skeleton></Skeleton>)
}
