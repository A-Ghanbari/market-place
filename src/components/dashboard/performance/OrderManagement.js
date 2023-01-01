import Card from 'components/utils/card'
import RadialBarChart from 'components/utils/chart/RadialBarChart'
import Link from 'components/utils/link'

export default function OrderManagement() {
    const children = [
        { title: 'کل تعهد ارسال گذشته و امروز', value: 0, url: "/order/list" },
        { title: 'تعهد ارسال فردا به بعد', value: 0, url: "/order/list" },
        { title: 'سفارشات تاخیر دار', value: 0, url: "/order/list" },
        { title: 'سفارشات امروز شما ', value: 0, url: "/order/list" },
        { title: 'سقف مجاز سفارشات امروز ', value: 0, url: "/order/list" },
    ]
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
        },
        {
            name: '30-34',
            uv: 23.69,
            pv: 1398,
            fill: '#8dd1e1',
        },
        {
            name: '35-39',
            uv: 20.22,
            pv: 9800,
            fill: '#82ca9d',
        },
        {
            name: 'unknow',
            uv: 12.67,
            pv: 4800,
            fill: '#ffc658',
        },
    ]
    return (
        <Card title="مدیریت سفارشات" >
            <RadialBarChart
                data={data}
                width={250}
                height={200}
            />
            <ul className="list chart-list">
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