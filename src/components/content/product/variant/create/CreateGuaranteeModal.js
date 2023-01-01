import { Form } from "antd"
import ActionButton from "components/utils/actionsButton"
import Card from "components/utils/card"
import Button from "components/utils/field/button"
import { FormCheckbox } from "components/utils/form/items/FormCheckbox"
import { FormInput } from "components/utils/form/items/FormInput"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { Col, ColumnGrid } from "components/utils/grid"
import Modal from "components/utils/modal"
import { useState } from "react"
import { setCreateGuarantee } from "store/actions/product"

const fieldsTwoCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
const modalFieldCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }
export default function CreateGuaranteeModal({ modalNewGuarantee, setModalNewGuarantee, categoryID }) {
    const [insurance, setInsurance] = useState(false)
    const onFinishNewGuaranteeHandler = (values) => {
        const data = {
            ...values,
            categoryID: categoryID,
            FrontPartImage: values.FrontPartImage[0].response.path,
            BackPartImage: values.BackPartImage[0].response.path,
            FrontPartInsuranceImage: insurance ? values.FrontPartInsuranceImage[0].response.path : "",
            BackPartInsuranceImage: insurance ? values.BackPartInsuranceImage[0].response.path : "",
            isInsurance: insurance
        }
        setCreateGuarantee(data).then((res) => res.data.status && setModalNewGuarantee(false))
    }
    return (
        <Modal visible={modalNewGuarantee} footer={null}>
            <Card title="درخواست ایجاد گارانتی جدید">
                <h3>میتوانید با تکمیل و ارسال فرم زیر، در خواست ایجاد گارانتی جدید برای محصول خود را ثبت نمایید</h3>
                <Card className="margin-bottom backgroundColor-pink">
                    <h3>توجه:</h3>
                    <h4>عنوان گارانتی، مدت زمان، شماره تماس، آدرس مرکز خدمات
                        .پس از فروش و شرایط گارانتی کالا بایستی روی تصویر کارت بارگذاری شده، وجود داشته باشد</h4>
                    <h4>گارانتی با مدت کمتر از شش ماه مورد تایید شاواز نیستند.</h4>
                    <h4>برای کالاهایی که گارانتی مورد تایید اتحادیه دارند، استفاده از گارانتی های متفرقه امکان پذیر نیست.</h4>
                </Card>
                <Form onFinish={onFinishNewGuaranteeHandler}>
                    <ColumnGrid col={fieldsTwoCol}>
                        <FormInput
                            required={true}
                            name="Title"
                            label="نام گارانتی"
                            text="نام گارانتی خود را وارد کنید "
                        />
                        <FormInput
                            required={true}
                            name="MonthCount"
                            label="مدت زمان گارانتی (بر حسب ماه وارد کنید):"
                            text="مدت زمان گارانتی بر حسب ماه"
                        />
                    </ColumnGrid>
                    <ColumnGrid col={fieldsTwoCol}>
                        <Col xl>
                            <p>تصویر برگه گارانتی ( رو )</p>
                            <FormUpload
                                name="FrontPartImage"
                                required={true}
                                maxCount={1}
                            >
                                <div className='profile-upload' />
                            </FormUpload>
                        </Col>
                        <Col xl>
                            <p>تصویر برگه گارانتی ( پشت )</p>
                            <FormUpload
                                name="BackPartImage"
                                required={true}
                                maxCount={1}
                            >
                                <div className='profile-upload' />
                            </FormUpload>
                        </Col>
                    </ColumnGrid>
                    <FormCheckbox label="کالا دارای بیمه میباشد" name="isInsurance" onChange={(e) => setInsurance(e.target.checked)} value={insurance} />
                    {insurance && <><ColumnGrid col={fieldsTwoCol}>
                        <FormInput
                            required={true}
                            name="InsuranceTitle"
                            label="نام بیمه"
                            text="نام بیمه خود را وارد کنید "
                        />
                        <FormInput
                            required={true}
                            name="InsuranceMonthCount"
                            label="مدت زمان بیمه (بر حسب ماه وارد کنید):"
                            text="مدت زمان بیمه بر حسب ماه"
                        />
                    </ColumnGrid>
                        <ColumnGrid col={fieldsTwoCol}>
                            <Col xl>
                                <p>تصویر برگه بیمه ( رو )</p>
                                <FormUpload
                                    name="FrontPartInsuranceImage"
                                    required={true}
                                    maxCount={1}
                                >
                                    <div className='profile-upload' />
                                </FormUpload>
                            </Col>
                            <Col xl>
                                <p>تصویر برگه بیمه ( پشت )</p>
                                <FormUpload
                                    name="BackPartInsuranceImage"
                                    required={true}
                                    maxCount={1}
                                >
                                    <div className='profile-upload' />
                                </FormUpload>
                            </Col>
                        </ColumnGrid></>}
                    <ActionButton position="right">
                        <Button
                            label="ارسال درخواست"
                            htmlType="submit"
                        />
                        <Button label="انصراف" onClick={() => { setModalNewGuarantee(false) }} />
                    </ActionButton>
                </Form>
            </Card>
        </Modal>
    )
}

