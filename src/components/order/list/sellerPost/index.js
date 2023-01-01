import Form from 'components/utils/form'
import FormInput from 'components/utils/form/items/FormInput'
import FormRadioButton from 'components/utils/form/items/FormRadioButton'
import FormSelectSearch from 'components/utils/form/items/FormSelectSearch'
import { ColumnGrid } from 'components/utils/grid'
import ProductList from 'components/order/list/sellerPost/ProductList'

const fieldCol = { sm: 24, md: 12, lg: 12, xl: 6, xxl: 6 }
export default function SellerPost() {
    return (
        <>
            <Form>
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="وضعیت سفارش"
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            }
                        ]}
                    />
                    <FormRadioButton
                        label="تعهد ارسال"
                        options={[
                            {
                                value: 1,
                                label: "گذشته و امروز"
                            },
                            {
                                value: 2,
                                label: "فردا به بعد"
                            }
                        ]}
                    />
                    <FormRadioButton
                        label="شیوه ارسال"
                        options={[
                            {
                                value: 1,
                                label: "هردو"
                            },
                            {
                                value: 2,
                                label: "توسط فروشنده"
                            },
                            {
                                value: 3,
                                label: "توسط پست"
                            }
                        ]}
                    />
                    <FormSelectSearch
                        label="بازه زمانی ارسال"
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            }
                        ]}
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="گروه کالایی"
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            }
                        ]}
                    />
                    <FormSelectSearch
                        label="جستجو در"
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            },
                            {
                                value: 2,
                                text: "عنوان"
                            },
                            {
                                value: 3,
                                text: "کد محصول"
                            },
                            {
                                value: 3,
                                text: "کد تنوع"
                            },
                            {
                                value: 3,
                                text: "کد فروشنده"
                            }
                        ]}
                    />
                    <FormInput
                        text="عبارت مورد نظرتان را وارد کنید..."
                    />
                </ColumnGrid>
                <ColumnGrid col={fieldCol}>
                    <FormSelectSearch
                        label="عملیات گروهی "
                        items={[
                            {
                                value: 1,
                                text: "همه موارد"
                            }
                        ]}
                    />
                </ColumnGrid>
            </Form>
            <ProductList />
        </>
    )
}
