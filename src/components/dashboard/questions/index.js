import { useState } from 'react'
import { Col, ColumnGrid, Row } from 'components/utils/grid'
import User from 'components/dashboard/performance/User'
import Card from 'components/utils/card'
import Radio from 'components/utils/field/radio'
import Rating from 'components/dashboard/performance/Rating'
import useWindowSize from 'hooks/useWindowSize'
import List from 'components/utils/list'
import testImg from 'assets/images/test.png'
import Button from 'components/utils/field/button'
import Modal from 'components/utils/modal'
import Form from 'components/utils/form'
import FormTextArea from 'components/utils/form/items/FormTextArea'
import FormUpload from 'components/utils/form/items/FormUpload'
import ActionButton from 'components/utils/actionsButton'
import "components/dashboard/questions/questions.scss"

const asideCol = { sm: 24, md: 24, lg: 24, xl: 6, xxl: 6 }
const asideCardCol = { sm: 24, md: 24, lg: 12, xl: 24, xxl: 24 }
const mainCol = { sm: 24, md: 24, lg: 24, xl: 18, xxl: 18 }

export default function Questions() {
    const { width } = useWindowSize()
    const [visible, setVisible] = useState(false)
    const [questionID, setQuestionID] = useState()

    const items = [
        {
            label: 'تاریخ پرسش',
            value: 'تاریخ پرسش',
        },
        {
            label: 'بیشترین پاسخ',
            value: 'بیشترین پاسخ',
        }
    ]
    const questions = [
        {
            id: 0,
            title: "ماسک مو 10 کاره تاپ شاپ ظرفیت 200 میلی لیتر",
            des: <div>
                <span>سلام چجوری از 10 تا قابلیتش استفاده کنیم؟</span>
                <h5>علی قنبری 14 تیر 1401 </h5>
            </div>,
            avatar: <img src={testImg} width={60} />,
            content:
                <div className='accent-box'>
                    <h3>پاسخ شما</h3>
                    وارد تنظیمات بشید و از اونجا اوکی کنید
                </div>
        },
        {
            id: 1,
            title: "ماسک مو 10 کاره تاپ شاپ ظرفیت 200 میلی لیتر",
            des:
                <div>
                    <span>سلام خداوکیلی کیفیتش خوبه؟</span>
                    <h5>علی قنبری 14 تیر 1401 </h5>
                </div>,
            avatar: <img src={testImg} width={60} />,
            content: ""
        },
        {
            id: 2,
            title: "ماسک مو 10 کاره تاپ شاپ ظرفیت 200 میلی لیتر",
            des: <div>
                <span>سلام خوبی </span>
                <h5>علی قنبری 14 تیر 1401 </h5>
            </div>,
            avatar: <img src={testImg} width={60} />,
            content: ""
        },
    ]
    const getReply = (id) => {
        setQuestionID(id)
        setVisible(true)
    }
    return (
        <Row gutter={[16, 16]} className="dashboard-section question" >
            <Col {...asideCol} className="aside">
                <ColumnGrid col={asideCardCol}>
                    <User />
                    {width > 767 && <Rating />}
                </ColumnGrid>
            </Col>
            <Col {...mainCol}>
                <Card
                    title={
                        <div className='questions-filter'>
                            <h4>مرتب سازی بر اساس : </h4>
                            <Radio optionType="button" buttonStyle="solid" options={items} />
                        </div>
                    }
                    actions={[
                        <h3>تعداد نتایج : {questions.length} </h3>
                    ]}
                >
                    {questions.map(question => (
                        <List
                            key={question.id}
                            data={[question]}
                            extra={
                                <Button
                                    label="پاسخ"
                                    onClick={() => getReply(question.id)}
                                />
                            }
                        />
                    ))}
                </Card>
                <Modal
                    visible={visible}
                    handleCancel={() => setVisible(false)}
                    footer={false}
                >
                    <Form>
                        <FormTextArea
                            label="پاسخ شما"
                        />
                        <h4>افزودن عکس</h4>
                        <p>ابعاد تصویر باید بین ۶۰۰x۶۰۰ تا ۲۵۰۰x۲۵۰۰ و حجم آن کمتر از ۶ مگابایت باشد.</p>
                        <FormUpload
                            name="upload"
                        >
                            <div className='profile-upload' />
                        </FormUpload>
                        <ActionButton position="center">
                            <Button
                                label="ثبت پاسخ"
                            />
                            <Button
                                type="secondary-warning"
                                label="انصراف"
                                onClick={() => setVisible(false)}
                            />
                        </ActionButton>
                    </Form>
                </Modal>
            </Col>
        </Row>
    )
}
