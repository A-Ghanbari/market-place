import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import testImg from 'assets/images/test.png'
import Link from 'components/utils/link'
import ActionButton from 'components/utils/actionsButton'
import Modal from 'components/utils/modal'
import { useEffect, useState } from 'react'
import { PRODUCT_LIST as productListEntity } from 'tools/utils/entities'
import TableWithCustomPagination from 'components/utils/table/TableWithCustomPagination'
import { PAGE_SIZE } from 'tools/shared/constants'
import { setAddProductToSell } from 'store/actions/product'

export default function Products({ setFilters }) {
    const [productModal, setProductModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false)
    const [currentSell, setCurrentSell] = useState()
    const [pageIndex, setPageIndex] = useState(1)
    const [pageSize, setPageSize] = useState(PAGE_SIZE)
    const [respnseProductToSell, setRespnseProductToSell] = useState(Boolean)

    useEffect(() => {
        setFilters((prev) => ({ ...prev, pageIndex, pageSize }))
    }, [pageIndex, pageSize])

    const columns = [
        {
            title: "ردیف",
            width: "5%",
            render: (text, record, index) => index + 1,
        }, {
            title: "عکس محصول",
            width: "5%",
            key: "picLink",
            render: (r) => <img src={r} alt="product" width={80} height={80} />
        },
        {
            title: "گروه کالا",
            key: "categoryName",
            width: "10%",
        },
        {
            title: "نام محصول",
            width: "15%",
            key: "productName",

        }, {
            title: "وضعیت جاری",
            key: "commission",
            width: "5%",
        }, {
            title: "تعداد تنوع فعال",
            key: "isDeactive",
            width: "5%",
        }, {
            title: "کمترین قیمت روی سایت",
            key: "minPrice",
            width: "5%",
        }, {
            title: "افزودن",
            key: "bottom",
            width: "10%",
            render: (r, f) =>
                <Button
                    type="secondary-fail"
                    label="شما هم بفروشید"
                    onClick={(e) => {
                        setProductModal(true)
                        setCurrentSell(f)
                    }} />
        }
    ]
    const paginationChangeHandler = (index, size) => {
        setPageIndex(index)
        setPageSize(size)
    }

    return (
        <Card>
            <h4>نتایج جستجو</h4>
            <TableWithCustomPagination
                entity={productListEntity.name}
                // rowSelection={{ type: "checkbox" }}
                columns={columns}
                handlerChange={paginationChangeHandler} />
            {currentSell && <Modal
                visible={productModal}
                handleCancel={() => setProductModal(false)}
                closable={true}
                footer={
                    <>
                        <h3>کمیسیون فروش گروه محصول انتخابی ٪۱۵ درصد است. آیا ادامه می‌دهید؟</h3>
                        <ActionButton position="left">
                            <Button
                                type="primary-success"
                                label="ادامه"
                                onClick={() => {
                                    setAddProductToSell({ productID: currentSell.productID }).then((res) => {
                                        setProductModal(false)
                                        setSuccessModal(true)
                                        res.data.status ? setRespnseProductToSell(true) : setRespnseProductToSell(false)
                                    })
                                }}
                            />
                            <Button
                                type="secondary-fail"
                                label="انصراف"
                                onClick={() => { setProductModal(false) }}
                            />
                        </ActionButton>
                    </>
                }
            >
                <div key="00" className='product-list'>
                    <div className='product-title'>
                        <div>
                            <img src={currentSell.picLink} width={80} height={80} />
                            <Link to="#">{currentSell.productName}</Link>
                        </div>
                    </div>
                    <div className='product-info'>
                        <div>
                            گروه:
                            <span className='bold'>{currentSell.categoryName}</span>
                        </div>
                        <div>
                            وضعیت جاری:
                            <span className='bold'>{currentSell.isSeller ? "قابل فروش" : "تایید نشده"}</span>
                        </div>
                        <div>
                            تعداد تنوع فعال:
                            <span className='bold'>{currentSell.countPrices}</span>
                        </div>
                        <div>
                            کمترین قیمت روی سایت:
                            <span className='bold'>{currentSell.minPrice}</span>
                        </div>
                    </div>
                </div>
            </Modal>}
            <Modal
                visible={successModal}
                handleCancel={() => setSuccessModal(false)}
                closable={true}
                footer={
                    <ActionButton position="left">
                        {respnseProductToSell && <Button
                            type="primary-success"
                            label="درج تنوع برای این کالا"
                        />}

                        <Button
                            type="secondary-fail"
                            label="بستن"
                            onClick={() => {
                                setSuccessModal(false)
                            }}
                        />
                    </ActionButton>
                }
            >
                {respnseProductToSell ?
                    (<><p>فروشنده گرامی،</p><p>اکنون شما هم فروشنده این کالا هستید</p></>) :
                    (<p>عملیات با خطا مواجه شد</p>)}

            </Modal>
        </Card >
    )
}
