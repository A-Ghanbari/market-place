import { Row } from "components/utils/grid"
import PageHeader from "components/utils/pageHeader"
import Filter from "components/content/productConfig/Filter"
import ProductList from "components/content/productConfig/ProductList"

export default function ProductConfig() {
    return (
        <>
            <PageHeader
                title="مدیریت تنوع و قیمت‌گذاری"
                subTitle="فعال و غیر فعال کردن تنوع‌های محصول، تغییر قیمت، موجودی و اعمال تخفیف از این قسمت امکان پذیر است."
            />
            <Row>
                <p className="warning-box">
                    فروش کالاهایی که دارای قیمت مصوب و یا قیمت مندرج هستند، با قیمتی بالاتر در شاواز اکید ممنوع است و در صورت تخلف، علاوه بر جریمه‌ای به اندازه دو برابر مجموع اختلاف قیمت کسب‌شده از قیمت واقعی تعداد کل فروخته شده از آن کالا ، منجر به غیرفعال کردن کالا و در صورت تکرار اکانت فروشنده غیرفعال خواهد شد.
                </p>
                <Filter />
                <ProductList />
            </Row>
        </>
    )
}
