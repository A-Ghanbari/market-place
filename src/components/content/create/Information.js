import ActionButton from "components/utils/actionsButton"
import Card from "components/utils/card"
import Collapse from "components/utils/collapse"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormRadio from "components/utils/form/items/FormRadio"
import FormSelectSearch from "components/utils/form/items/FormSelectSearch"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { Col, ColumnGrid } from "components/utils/grid"
import Link from "components/utils/link"
import Modal from 'components/utils/modal'
import { useState } from "react"
import { setProductNewBrand } from "store/actions/product"

const fieldsTwoCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
const fieldsThreeCol = { sm: 24, md: 24, lg: 12, xl: 8, xxl: 8 }
const fieldsFourCol = { sm: 24, md: 12, lg: 6, xl: 6, xxl: 6 }

export default function Information({ onFinish, brandsData }) {
    const [modalVisible, setModalVisible] = useState()

    const onFinishHandler = (values) => {
        const newValues = {
            ...values,
            Logo: values.Logo[0].response.path,
            IdentificationMinistry: values.IdentificationMinistry[0].response.path
        }
        setProductNewBrand(newValues).then((res) => {
            setModalVisible(false)
        })
        console.log(values.logo)
    }

    return (

        <Collapse
            ghost
            defaultActiveKey={['1']}
            title={
                <div className='collapse-header' >
                    <h4>درج اطلاعات کالا</h4>
                    <div className='collapse-line' />
                </div >
            }
        >
            <Form
                key="1"
                onFinish={onFinish}
            >
                <ColumnGrid col={fieldsThreeCol}>
                    <FormSelectSearch
                        name="BrandID"
                        label={<div><span>برند</span><div onClick={() => { setModalVisible(true) }}>ثبت درخواست برند جدید</div></div>}
                        required={true}
                        items={brandsData}
                    />
                    <FormSelectSearch
                        name="IsOriginal"
                        label="اصالت کالا"
                        required={true}
                        items={[
                            {
                                text: "اصل",
                                value: true
                            },
                            {
                                text: "غیر اصل",
                                value: false
                            },
                        ]}
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldsTwoCol}>
                    <FormInput
                        required={true}
                        name="ProductPersianName"
                        label="نام فارسی کالا"
                        text="نام کالای خود را با رعایت این ترتیب درج نمائید: ماهیت کالا + برند + مدل"
                    />
                    <FormInput
                        required={true}
                        name="ProductLatinName"
                        label="نام انگلیسی کالا"
                        text="Enter the name of your item in the following order: Brand + Model + Nature of the Product"
                    />
                </ColumnGrid>
                <h3>ابعاد بسته بندی (سانتیمتر)</h3>
                <ColumnGrid col={fieldsFourCol}>
                    <FormInputNumber
                        label="طول"
                        required={true}
                        name="BoxLength"
                        text="طول"
                        onChange={(e) => { console.log(e) }}
                    />
                    <FormInputNumber
                        required={true}
                        name="BoxWidth"
                        text="عرض"
                        label="عرض"
                    />
                    <FormInputNumber
                        required={true}
                        name="BoxHeight"
                        text="ارتفاع"
                        label="ارتفاع"
                    />
                    <FormInputNumber
                        required={true}
                        name="BoxWeight"
                        label="وزن بسته بندی (گرم)"
                    />
                </ColumnGrid>
                <FormTextArea
                    required={true}
                    name="Description"
                    label="شرح کالا"
                    text="برای معرفی بهتر کالا به مشتریان، پیشنهاد می‌‌شود 150 کلمه درباره‌ کالای خود بنویسید."
                />
                <ColumnGrid col={fieldsTwoCol}>
                    <FormTextArea
                        required={true}
                        name="PositiveAdvantages"
                        label="نقاط قوت"
                    />
                    <FormTextArea
                        required={true}
                        name="NegativeAdvantages"
                        label="نقاط ضعف"
                    />
                    <FormTextArea
                        required={true}
                        name="OtherDescription"
                        label="شرح بیشتر کالا"
                        text="برای معرفی بهتر کالا به مشتریان، پیشنهاد می‌‌شود 150 کلمه درباره‌ کالای خود بنویسید."
                    />
                </ColumnGrid>
                <Button
                    label="ادامه"
                    htmlType="submit"
                />
            </Form>
            <Modal visible={modalVisible} footer={null}>

                <Card title="درخواست ایجاد برند جدید">
                    <h3>فروشگاه اینترنتی شاواز این امکان را برای فروشنده فراهم کرده تا کالایش را با برند خودش نمایش دهد
                        و به فروش برساند. برای ایجاد و ثبت برندتان، فرم زیر را تکمیل کنید </h3>
                    <Card className="margin-bottom backgroundColor-pink">
                        <h3>توجه:</h3>
                        <h4>نام برند مورد نظرتان را وارد کنید و در صورتی که برند را
                            در لیست پیدا نکردید، در صفحه درخواست برند، برند مورد نظرتان را جستجو کرده
                            ودر صورت یافتن آن، روی دکمه افزودن برند به گروه کالایی کلیک کنید.</h4>
                        <h4>چنانچه، برند مورد نظر در این لیست وجود
                            نداشت، برای ساخت برند جدید، اطلاعات ذکر شده در این صفحه را ارسال کنید.</h4>
                        <h4>- برندهای ایرانی باید گواهی ثبت علامت تجاری داشته باشند و تصویر آن را باید همراه با درخواست در فرم ارسال فرمایید</h4>
                        <h4>- بندهای ایرانی که دارای گواهی ثبت علامت تجاری نیستند، ثبت نمی شوند.</h4>
                        <h4>- برای ثبت برند، اظهار نامه قابل قبول نیست وحتما باید گواهی ثبت برند را ارسال کنید.</h4>
                    </Card>
                    <Form onFinish={onFinishHandler}>
                        <ColumnGrid col={fieldsTwoCol}>
                            <FormInput
                                required={true}
                                name="PersianName"
                                label="نام فارسی برند"
                                text="نام کالای خود را با رعایت این ترتیب درج نمائید: ماهیت کالا + برند + مدل"
                            />
                            <FormInput
                                required={true}
                                name="LatinName"
                                label="نام انگلیسی برند"
                                text="Enter the name of your item in the following order: Brand + Model + Nature of the Product"
                            />
                        </ColumnGrid>
                        <FormTextArea
                            required={true}
                            name="Description"
                            label="شرح برند"
                            text="برای معرفی بهتر برند به مشتریان، پیشنهاد می‌‌شود 100 کلمه درباره‌ برند خود بنویسید."
                        />
                        <p>نوع برند</p>
                        <FormRadio
                            name='Origin'
                            label="نوع برند"
                            options={[
                                {
                                    value: true,
                                    label: "اصل"
                                },
                                {
                                    value: false,
                                    label: "غیر اصل"
                                }
                            ]}
                            required={true} />
                        <ColumnGrid col={fieldsTwoCol}>
                            <Col xl>
                                <h3>برگه ثبت برند با لینک سایت قوه قضاییه:</h3>
                                <FormUpload
                                    name="IdentificationMinistry"
                                    label="برگه ثبت برند با لینک سایت قوه قضاییه"
                                    required={true}
                                    maxCount={1}
                                >
                                    <div className='profile-upload' />
                                </FormUpload>
                            </Col>
                            <Col xl>
                                <h3>لوگوی برند:</h3>
                                <FormUpload
                                    name="Logo"
                                    label="لوگوی برند"
                                    required={true}
                                    maxCount={1}
                                >
                                    <div className='profile-upload' />
                                </FormUpload>
                            </Col>
                        </ColumnGrid>
                        <ColumnGrid col={fieldsTwoCol}>
                            <FormInput
                                required={true}
                                name="IdentificationLink"
                                label="لینک سایت قوه قضاییه را وارد کنید. لینک را به صورت کامل وارد کنید"
                                text="/ /:https"
                            />
                        </ColumnGrid>
                        <ActionButton position="right">
                            <Button
                                label="ارسال درخواست"
                                htmlType="submit"
                            />
                            <Button label="انصراف" onClick={() => { setModalVisible(false) }} />
                        </ActionButton>
                    </Form>
                </Card>
            </Modal>
        </Collapse >
    )
}
