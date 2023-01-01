import Button from "components/utils/field/button"
import Form from "components/utils/form"
import FormInputEmail from "components/utils/form/items/FormInputEmail"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectProvinceAndCity from "components/utils/form/items/FormSelectProvinceAndCity"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { ColumnGrid } from "components/utils/grid"
import CustomMap from "components/utils/map/CustomMap"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function SupplierAddress({ data }) {

    const latLong = (data?.latLong) ? data?.latLong.split(",") : [55, 55]

    return (
        <div >
            <Form
                name="EditForm"
                autoComplete="off"
                initialValues={data}
            >
                <div className='profile-tab-title'>
                    <h3>اطلاعات تماس و آدرس</h3>
                    <Button
                        type="primary-fail"
                        label="ویرایش"
                        name='submit'
                        htmlType='submit'
                        disabled={true}
                    />
                </div>
                <ColumnGrid col={fieldCol}>
                    <FormInputEmail
                        name="email"
                        label="ایمیل"
                        disabled={true}
                    />
                    <FormInputNumber
                        name="phone"
                        label="تلفن ثابت"
                        disabled={true}
                    />
                    <FormInputNumber
                        name="mobile"
                        label="همراه"
                        disabled={true}
                    />
                    <FormSelectProvinceAndCity
                        provinceName="provinceID"
                        provinceLabel='استان'
                        cityName="cityID"
                        cityLabel='شهر'
                        required={true} />
                    <FormInputNumber
                        name="postalCode"
                        label="کد پستی"
                        disabled={true}
                    />
                    <CustomMap
                        position={latLong}
                        popup="محل فروشگاه یا انبار"
                    />
                </ColumnGrid>
                <FormTextArea
                    name="address"
                    label="آدرس"
                    disabled={true}
                />
            </Form>
        </div >
    )
}
