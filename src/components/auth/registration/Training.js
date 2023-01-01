import { useNavigate } from 'react-router-dom'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import Layout from 'components/auth/layout'
import FormRadio from 'components/utils/form/items/FormRadio'
import { ColumnGrid } from 'components/utils/grid'
import FormSelect from 'components/utils/form/items/FormSelect'
import { FormCheckbox } from 'components/utils/form/items/FormCheckbox'
import ActionButton from 'components/utils/actionsButton'

const fieldCol = { xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
export default function Training() {
    let navigate = useNavigate()

    const onFinish = (values) => {
        values && navigate("/registration/success")
    }
    return (
        <Layout
            page="register"
            step={2}
        >
            <div className='training-form'>
                <h2>ثبت نام در دوره آموزشی مرکز فروشندگان</h2>
                <p>برای فروش در شاواز ، باید یک دوره دو ساعته آموزش نحوه فروش در شاواز را سپری نمایید. شرکت در این دوره اجباری و کاملا رایگان و به دو صورت حضوری (سمینار) و غیر حضوری (وبینار) می باشد.</p>
                <div className='info-text'>
                    <span className='fail'>نکته: </span > با توجه به این موضوع که در کلاس آموزشی تمام نکات مهم کار با پنل فروشندگان آموزش داده می شود، توصیه می شود مسئول مستقیم شما در این کلاس شرکت نماید.
                </div>
                <Form
                    name="signupForm"
                    autoComplete="off"
                    onFinish={onFinish}
                >
                    <FormRadio
                        name='trainingCourse'
                        label="دوره آموزشی"
                        options={[
                            {
                                value: 1,
                                label: "دوره حضوری (سمینار)"
                            },
                            {
                                value: 2,
                                label: "دوره غیر حضوری (وبینار)"
                            }
                        ]}
                    // required={true}
                    />
                    <h4>آیا تا کنون تجربه فروش آنلاین داشته اید؟</h4>
                    <FormRadio
                        name='experience'
                        label="تجربه"
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
                    // required={true}
                    />
                    <h4>روز و ساعت برگزاری دوره آموزشی را انتخاب نمایید</h4>
                    <ColumnGrid col={fieldCol}>
                        <FormSelect
                            name='day'
                            label="روز"
                        // required={true}
                        />
                        <FormSelect
                            name='time'
                            label="ساعت"
                        // required={true}
                        />
                    </ColumnGrid>
                    <FormCheckbox
                        name='participant'
                        label="یک نفر همراه نیز دارم."
                    />
                    <div className='info-text'>
                        <span className='fail'>توجه: </span > پس از ثبت نام، برای مشاهده نحوه شرکت در کلاس آموزشی حتما به ایمیلی که برای شما ارسال خواهد شد مراجعه کنید در صورتی که ایمیلی دریافت نکردید، لطفا پوشه هرزنامه (اسپم فولدر / spam folder ) ایمیل خود را چک کنید.
                    </div>
                    <ActionButton position="right">
                        <Button
                            name='submit'
                            label='ثبت نام'
                            htmlType='submit'
                        />
                        <Button
                            name='cancel'
                            label='بعدا ثبت نام میکنم'
                            type="secondary-success"
                            onClick={() => navigate("/")}
                        />
                    </ActionButton>
                </Form>
            </div>
        </Layout>
    )
}
