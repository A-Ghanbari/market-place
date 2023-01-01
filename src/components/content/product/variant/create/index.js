import { useEffect, useState } from 'react'
import useWindowSize from 'hooks/useWindowSize'
import ActionButton from 'components/utils/actionsButton'
import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormInputNumber from 'components/utils/form/items/FormInputNumber'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelect from 'components/utils/form/items/FormSelect'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid, Row } from 'components/utils/grid'
import { getGuaranteeListList, getProductColorsList } from "store/actions/product"
import { useSelector } from 'react-redux'
import { PRODUCT_COLORS_LIST as productColorsList } from 'tools/utils/entities'
import { PRODUCT_GUARANTEE_LIST as productGuaranteeList } from 'tools/utils/entities'
import CreateGuaranteeModal from './CreateGuaranteeModal'
import CreateColorModal from './CreateColorModal'


const fieldsTwoCol = { sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }
export default function Create({ isColor, productID, categoryID }) {
    const [modalNewGuarantee, setModalNewGuarantee] = useState(false)
    const [modalNewColor, setModalNewColor] = useState(false)
    const [formFields, setFormFields] = useState([])
    const { width } = useWindowSize()
    const colorFieldCol = { xs: 6, sm: 3, md: width > 900 ? 8 : 12, lg: width > 1070 ? 6 : 8, xl: 6, xxl: 4 }
    const { data } = useSelector((s) => s[productColorsList.name])
    const { data: guaranteeListData } = useSelector((s) => s[productGuaranteeList.name])

    useEffect(() => {
        getProductColorsList(`ProductID=${productID}`)
        getGuaranteeListList(`CategoryID=${categoryID}`)
    }, [])



    const add = (name, color) => {
        setFormFields([...formFields, { name, color }])
    }

    return (
        <>
            {isColor ?
                <Card
                    title={
                        <div className='flex-row'>
                            <h3>انتخاب رنگ</h3>
                            <Button
                                type="secondary-success"
                                label="ایجاد رنگ جدید"
                                onClick={() => setModalNewColor(true)}
                            />
                        </div>
                    }>
                    <ColumnGrid col={colorFieldCol}>
                        {data.map(item => (
                            <div key={item.id} className='default-box flex-row color-box' onClick={() => add(item.title, item.colorCode)}>
                                <div style={{ backgroundColor: item.colorCode }} />
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </ColumnGrid>
                </Card>
                :
                <Button
                    label="افزودن تنوع"
                    onClick={() => add()}
                />
            }
            {
                formFields.length > 0 &&
                <Card>
                    <Row>
                        {formFields?.map((item, index) => (
                            <Card
                                key={item.name || index}
                                title={<div className='card-color' style={{ backgroundColor: item.color }} />}
                            >
                                <Form initialValues={{ color: item.name }}>
                                    {isColor &&
                                        <FormInput
                                            disabled
                                            name="color"
                                            label="رنگ"
                                            required={true}
                                        />
                                    }
                                    <ColumnGrid col={fieldsTwoCol}>
                                        <FormSelectSearch
                                            label={
                                                <div>
                                                    <span>گارانتی</span>
                                                    <div onClick={() => setModalNewGuarantee(true)} >درخواست گارانتی جدید</div>
                                                </div>
                                            }
                                            required={true}
                                            items={guaranteeListData}
                                        />
                                        <FormRadioButton
                                            label="ارسال توسط"
                                            required={true}
                                            options={[
                                                {
                                                    value: 0,
                                                    label: "شاواز"
                                                },
                                                {
                                                    value: 1,
                                                    label: "فروشنده"
                                                }
                                            ]}
                                        />
                                        <FormSelect
                                            label="بازه ارسال(روز)"
                                            required={true}
                                            items={[
                                                {
                                                    value: 0,
                                                    text: 1
                                                },
                                                {
                                                    value: 1,
                                                    text: 2
                                                }
                                            ]}
                                        />
                                        <FormInputNumber
                                            label="حداکثر سفارش در سبد (عدد)"
                                            required={true}
                                        />
                                        <FormInputNumber
                                            label="موجودی نزد شما (عدد)"
                                            required={true}
                                        />
                                        <FormInputNumber
                                            label="کد محصول فروشنده"
                                        />
                                        <FormInputNumber
                                            label="قیمت مرجع (ریال)"
                                            required={true}
                                        />
                                        <FormInputNumber
                                            label="قیمت فروش (ریال)"
                                            required={true}
                                        />
                                    </ColumnGrid>
                                    <ActionButton position="center">
                                        <Button
                                            label="افزودن"
                                        />
                                        <Button
                                            type="secondary-warning"
                                            label="انصراف"
                                            onClick={() => setFormFields(formFields.filter(value => value !== item))}
                                        />
                                    </ActionButton>
                                </Form>
                            </Card>
                        ))}
                    </Row>
                </Card>
            }{
                modalNewGuarantee &&
                <CreateGuaranteeModal
                    categoryID={categoryID}
                    modalNewGuarantee={modalNewGuarantee}
                    setModalNewGuarantee={setModalNewGuarantee} />
            }{
                modalNewColor &&
                <CreateColorModal
                    productID={productID}
                    modalNewColor={modalNewColor}
                    setModalNewColor={setModalNewColor} />
            }
        </>
    )
}
