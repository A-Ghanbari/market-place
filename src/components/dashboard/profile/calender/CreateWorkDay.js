import Modal from 'components/utils/modal'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import moment from 'jalali-moment'
import { ColumnGrid } from 'components/utils/grid'
import Form from 'components/utils/form'
import { FormSelect } from 'components/utils/form/items/FormSelect'
import { FormSwitch } from 'components/utils/form/items/FormSwitch'
import { createUserCalenderDay } from 'store/actions/profile'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function CreateWorkDay({ data, show, change }) {
    const onFinish = (values) => {
        const serviceModel = {
            ...values,
            Date: data.date,
            PostType: 1,
        }
        createUserCalenderDay(serviceModel)
    }
    return (
        <>
            <Modal
                visible={show}
                handleCancel={() => change(false)}
                onCancel={() => change(true)}
                width={800}
                footer={<></>}
            >
                <h3>ویرایش فعالیت برای تاریخ {moment(data.jData).locale('fa').format('YYYY/M/D')}</h3>
                <Form
                    name="EditForm"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name="PostType"
                            label="نوع پست"
                            defaultValue={1}
                            disabled
                            items={[
                                {
                                    text: "ارسال توسط شاواز",
                                    value: 1,
                                },
                                {
                                    text: "ارسال توسط فروشنده",
                                    value: 2,
                                },
                            ]}
                        />
                        <FormSwitch
                            name="IsDeactive"
                            label="روز تعطیل"
                        />
                    </ColumnGrid>
                    <ActionButton position="center">
                        <Button
                            type="secondary-success"
                            label="تایید"
                            name='submit'
                            htmlType='submit'
                        />
                        <Button
                            type="secondary-warning"
                            label="بستن"
                            onClick={() => {
                                change(false)
                            }}
                        />
                    </ActionButton>
                </Form>
            </Modal>
        </>
    )
}
