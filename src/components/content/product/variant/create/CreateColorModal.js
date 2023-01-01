import ActionButton from "components/utils/actionsButton"
import Card from "components/utils/card"
import Button from "components/utils/field/button"
import Form from "components/utils/form"
import { FormInput } from "components/utils/form/items/FormInput"
import { FormUpload } from "components/utils/form/items/FormUpload"
import { ColumnGrid } from "components/utils/grid"
import Modal from "components/utils/modal"
import { setCreateColor } from "store/actions/product"

const modalFieldCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 8 }
export default function CreateColorModal({modalNewColor ,setModalNewColor , productID}) {

    const onFinishHandler = (values) => {
        const data = {
            ProductID: productID,
            Logo: values.Logo[0].response.path,
            Title: values.Title,
            ColorCode: values.ColorCode
        }
        setCreateColor(data).then((res) => {
            res.data.status === true && setModalNewColor(false)
        })
    }
    return (
        <Modal
            visible={modalNewColor}
            handleCancel={() => setModalNewColor(false)}
            footer={false}
        >
            <h2>درخواست ایجاد رنگ جدید</h2>
            <p>می‌توانید با تکمیل و ارسال فرم زیر، درخواست ایجاد رنگ جدید برای محصول خود را ثبت نمایید.</p>
            <Form onFinish={onFinishHandler}>
                <Card>
                    <ColumnGrid col={modalFieldCol}>
                        <FormInput
                            label="عنوان رنگ"
                            name="Title"
                            required={true}
                        />
                        <FormInput
                            label="کد رنگ"
                            name="ColorCode"
                            required={true}
                        />
                        <div>
                            <h3>نمونه رنگ (عکس از کالا با رنگ مورد نظر)</h3>
                            <FormUpload
                                name="Logo"
                            // required={true}
                            >
                                <div className='profile-upload' />
                            </FormUpload>
                        </div>
                    </ColumnGrid>
                </Card>
                <ActionButton position="center">
                    <Button
                        label="ارسال درخواست"
                        htmlType="submit"
                    />
                    <Button
                        type="secondary-warning"
                        label="انصراف"
                        onClick={() => setModalNewColor(false)}
                    />
                </ActionButton>
            </Form>
        </Modal>
    )
} 
