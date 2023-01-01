import { useEffect } from 'react'
import Button from 'components/utils/field/button'
import Form from 'components/utils/form'
import { FormDatePicker } from 'components/utils/form/items/FormDatePicker'
import FormSelect from 'components/utils/form/items/FormSelect'
import { ColumnGrid } from 'components/utils/grid'
import Icon from "components/utils/field/Icon"
import Popconfirm from "components/utils/popconfirm"
import Table from 'components/utils/table'
import FormUpload from 'components/utils/form/items/FormUpload'
import ActionButton from 'components/utils/actionsButton'
import { useSelector } from 'react-redux'
import { USER_DOCUMENT_INFO as documentEntity } from 'tools/utils/entities'
import { getUserDocumentInfo, sendDocuments, deleteUserDocument } from 'store/actions/profile'
import { API_UPLOAD_URL } from 'tools/shared/constants'
import { checkFilters } from 'tools/utils'

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function Document() {
    const { data, loading } = useSelector(
        (s) => s[documentEntity.name]
    )

    useEffect(() => {
        getUserDocumentInfo("")
    }, [])

    const onFinish = (values) => {
        const serviceModel = {
            Path: values.documentFile[0].response.path,
            DocumentType: values.DocumentType,
            ExpireDate: values.ExpireDate
        }
        sendDocuments([checkFilters(serviceModel)]).then(() => getUserDocumentInfo(""))
    }

    const columns = [
        {
            title: "ردیف",
            key: "index",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "نوع",
            key: "documentType",
            width: "5%",
            render: (f, r) => (
                f === 1 ? <p>آخرین تغییرات گواهینامه ارزش افزوده</p> :
                    f === 2 ? <p>مدارک تغییر نام,نام خانوادگی,نام شرکت</p> :
                        <p>مجوز کسب و کار</p>
            )
        }, {
            title: "مدرک",
            key: "path",
            width: "5%",
            render: (f, r) => (
                <a href={`${API_UPLOAD_URL}${f}`} target="blank">
                    <img src={`${API_UPLOAD_URL}${f}`} width="32" height="32" alt='document' />
                </a>
            )
        }, {
            title: "اعتبار",
            key: "expireDateString",
            width: "10%",
            render: (r, f) => {
                const arrayDate = f.expireDateString.split(" ")
                return <p>{arrayDate[0]}</p>
            }
        }, {
            title: "عملیات",
            key: "actions",
            width: "10%",
            render: (f, r) => (
                <div className="actions">
                    <Popconfirm
                        title={`آیا از حذف مدرک اطمینان دارید؟`}
                        onConfirm={() => deleteUserDocument({ ID: r.id }).then(() => getUserDocumentInfo(""))}
                    >
                        <Icon key="delete" type="delete" title="حذف مدرک" />
                    </Popconfirm>
                </div>
            ),
        }
    ]
    return (
        <div>
            <div className='profile-tab-title'>
                <h3>بارگذاری مدارک</h3>
            </div>
            <div className="upload-form">
                <Form
                    name="EditForm"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <FormSelect
                        name="DocumentType"
                        label="نوع مدرک"
                        required={true}
                        items={[
                            {
                                text: 'آخرین تغییرات گواهینامه ارزش افزوده',
                                value: 1
                            }, {
                                text: 'مدارک تغییر نام,نام خانوادگی,نام شرکت',
                                value: 2
                            }, {
                                text: 'مجوز کسب و کار',
                                value: 3
                            }
                        ]}
                    />
                    <ColumnGrid col={fieldCol}>
                        <FormDatePicker
                            name="ExpireDate"
                            label="تاریخ انقضای مدرک"
                            format="YYYY-MM-DD"
                        />
                    </ColumnGrid>
                    <div className='upload-card-footer'>
                        <div>
                            <h5>فایل تصویر</h5>
                            <FormUpload
                                label="بارگذاری مدرک"
                                name="documentFile"
                                listType="picture"
                                accept=".png,.jpg,.jpeg"
                                maxCount={1}
                                required={true}
                            >
                                <Button label="بارگذاری گواهی ارزش افزوده" type="secondary-success" />
                            </FormUpload>
                        </div>
                        <div className='profile-info'>
                            <p>شرایط فایل:</p>
                            <p>۱- صاف و به همراه نوشته‌های خوانا و واضح</p>
                            <p>۲- حجم زیر ۲ مگابایت</p>
                        </div>
                        <ActionButton position="center">
                            <Button
                                type="primary-success"
                                label="ثبت و بارگذاری"
                                name='submit'
                                loading={loading}
                                htmlType='submit'
                            />
                        </ActionButton>
                    </div>
                </Form>
            </div>
            {!loading && <Table
                dataList={data}
                loading={loading}
                columns={columns}
            />}

        </div>
    )
}
