import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInput from "components/utils/form/items/FormInput"
import { ColumnGrid } from "components/utils/grid"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import {
    USER_BANK_INFO as bankEntity,
} from 'tools/utils/entities'
import { getUserBankInfo, updateUserBankInfo } from 'store/actions/profile'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function Bank() {

    const { data, loading } = useSelector(
        (s) => s[bankEntity.name]
    )

    useEffect(() => {
        getUserBankInfo("")
    }, [])

    const onFinish = (values) => {
        updateUserBankInfo(values);
    }

    return (
        <div>
            <Form
                name="EditForm"
                onFinish={onFinish}
                initialValues={data}
                autoComplete="off"
            >
                <div className='profile-tab-title'>
                    <h3>اطلاعات حساب بانکی</h3>
                    <Button
                        type="primary-fail"
                        label="ویرایش"
                        name='submit'
                        loading={loading}
                        htmlType='submit'
                    />
                </div>
                {data.shabaConfirmed ?
                    <div className="profile-seller-status-success">
                        <h4>وضعیت شماره شبا</h4>
                        <div>تایید شده<span />
                        </div>
                    </div> :
                    <div className="profile-seller-status-fail">
                        <h4>وضعیت شماره شبا</h4>
                        <div>تایید نشده<span />
                        </div>
                    </div>}
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="shaba"
                        label="شماره شبا"
                    />
                </ColumnGrid>
            </Form>
        </div>
    )
}
