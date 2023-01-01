import Card from 'components/utils/card'
import Link from 'components/utils/link'

export default function InventoryManagement() {
    const children = [
        { title: 'کل تنوع‌های فعال ', value: 2, url: "/content/product-config" },
        { title: 'کل تنوع‌های غیرفعال ', value: 0, url: "/content/product-config" },
        { title: 'تنوع‌های فعال بدون موجودی ', value: 0, url: "/inventory/" },
        { title: 'تنوع‌های در حال اتمام موجودی', value: 0, url: "/inventory/" },
        { title: 'کالاهای فروش نرفته در انبار شاواز ', value: 0, url: "/inventory/" },
        { title: 'موجودی در انبار مرجوعی', value: 0, url: "/inventory/" },
    ]
    return (
        <Card title="مدیریت موجودی انبار" >
            <ul className="list">
                {children.map((child) => (
                    <Link to={child.url} key={child.title}>
                        <li>
                            <div className="bold">{child.title}</div>
                            <span className="bold">{child.value}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </Card>
    )
}
