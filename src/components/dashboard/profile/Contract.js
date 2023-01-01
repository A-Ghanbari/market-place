import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import { ColumnGrid } from 'components/utils/grid'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function Contract() {
    return (
        <div>
            <div className='profile-tab-title'>
                <h3>اطلاعات قرارداد</h3>
            </div>
            <div className="profile-seller-status">
                <h4>وضعیت قرارداد</h4>
                <div>پذیرفته نشده <span />
                </div>
            </div>
            <Form >
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="business"
                        label="شماره قرارداد "
                    />
                    <Button
                        type="secondary-success"
                        label="دانلود قرارداد"
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="sellerID"
                        label="تاریخ شروع قرارداد "
                    />
                    <FormInput
                        name="seller"
                        label="تاریخ پایان قرارداد "
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldCol}>
                    <FormInput
                        name="name"
                        label="بازه محاسبه صورت حساب"
                    />
                    <FormInput
                        name="last"
                        label="بازه پرداخت"
                    />
                </ColumnGrid>
            </Form>
        </div>
    )
}
