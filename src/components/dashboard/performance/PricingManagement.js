import Card from 'components/utils/card'
import Link from 'components/utils/link'

export default function PricingManagement() {
    const children = [
        { title: 'تنوع‌های برنده بای باکس', value: 0, url: "/productconfig/editinformation/" },
        { title: 'تنوع‌های بدون بای باکس', value: 0, url: "/productconfig/editinformation/" },
        { title: 'تنوع های دارای کاهش هوشمند قیمت ', value: 0, url: "/productconfig/editinformation/" },
        { title: 'تنوع‌های دارای رقیب', value: 0, url: "/productconfig/editinformation/" },
        { title: 'تنوع های بدون رقیب ', value: 0, url: "/productconfig/editinformation/" },
        { title: 'کالاهای فروش رفته توسط سیستم تبلیغ در شاواز', value: 0, url: "/productconfig/editinformation/" },
    ]
    return (
        <Card title="مدیریت قیمت‌گذاری" >
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