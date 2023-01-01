import { useEffect, useState } from 'react'
import Card from 'components/utils/card'
import PageHeader from 'components/utils/pageHeader'
import Steps from 'components/utils/steps'
import Category from 'components/content/create/Category'
import Information from 'components/content/create/Information'
import Property from 'components/content/create/Property'
import Upload from 'components/content/create/Upload'
import { getBrands, getGroups, renameKeyCategory, transformedKey } from 'tools/utils'
import { useSelector } from 'react-redux'
import { PRODUCT_ATTRIBUTES_LIST as productAttributesEntity } from "tools/utils/entities"
import { createProduct, getAttributesList } from 'store/actions/product'

export default function Create() {
    const [current, setCurrent] = useState(0)
    const [value, setValue] = useState({})
    const [categoryData, setCategoryData] = useState()
    const [brandsData, setBrandsData] = useState()
    const { data: attributesData, loading: attributesLoading } = useSelector((s) => s[productAttributesEntity.name])

    useEffect(() => {
        const category = getGroups()
        const brands = getBrands()
        setBrandsData(transformedKey(brands))
        setCategoryData(renameKeyCategory(category))
    }, [])


    const categoryHandler = (values) => {
        setCurrent(1)
        // create duplicate category array because we will have last choose of items in array  
        const duplicateCategory = [...values.category]
        const lastChoose = duplicateCategory.pop()
        setValue((prev) => ({ ...prev, CategoryID: lastChoose, WithImages: true, }))
        // get attribute list when click confirm button
        getAttributesList(`categoryID=${lastChoose}`)
    }
    const informationHandler = (values) => {
        setCurrent(2)
        setValue((prev) => ({ ...prev, ...values }))
    }
    const propertyHandler = (values) => {
        setCurrent(3)
        const newObj = {
            attributes: []
        }
        for (const [key, value] of Object.entries(values)) {
            if (key.split('prop')[1] !== undefined) {
                if (value !== undefined) {
                    if (typeof value === 'string') {
                        newObj.attributes.push({
                            ID: key.split('prop')[1],
                            value: value
                        })
                    }
                    else {
                        newObj.attributes.push({
                            ID: key.split('prop')[1]
                        })
                    }
                }
            }
            if (key.indexOf('prop') === 0) {
                delete newObj[key]
            }
            setValue((prev) => ({ ...prev, ...newObj }))
        }
    }
    const changeKeyNameUpload = (data) => {
        const uploadPathArray = []
        const getArrayPath = data.map((data) => ({ path: data.response.path }))
        uploadPathArray.push(...getArrayPath)
        return uploadPathArray
    }
    const uploadHandler = () => {
        console.log(value)
        createProduct(value)
    }
    const onChangeHandler = (values) => {
        if (values.file.status === "done") {
            const newDataUpload = changeKeyNameUpload(values.fileList)
            setValue((prev) => ({ ...prev, Images: newDataUpload }))
            console.log(value)
        }
    }

    const items = [
        {
            title: <Category onFinish={categoryHandler} categoryData={categoryData} />
        },
        {
            title: value.CategoryID ?
                <Information onFinish={informationHandler} brandsData={brandsData} />
                :
                <div className='collapse-header'>
                    <h4>درج اطلاعات کالا</h4>
                    <div className='collapse-line' />
                </div>
        },
        {
            title: value.BrandID ?
                <Property onFinish={propertyHandler} data={attributesData} />
                :
                <div className='collapse-header'>
                    <h4>درج ویژگی‌های کالا</h4>
                    <div className='collapse-line' />
                </div>
        },
        {
            title: value.attributes ?
                <Upload onFinish={uploadHandler} onChange={onChangeHandler} />
                :
                <div className='collapse-header'>
                    <h4>بارگذاری تصاویر</h4>
                    <div className='collapse-line' />
                </div>
        },
    ]

    return (
        <div className='create-product'>
            <PageHeader
                title="درج محصول"
                subTitle="اطلاعات محصول‌تان را در این صفحه وارد کنید"
            />
            <Card>
                <Steps
                    items={items}
                    current={current}
                />
            </Card>
        </div>
    )
}
