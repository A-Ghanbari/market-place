import Card from 'components/utils/card'
import LineChart from 'components/utils/chart/LineChart'
import Select from 'components/utils/field/select'
import { Line, YAxis } from 'recharts'

export default function SalesRecords() {

    const data = [
        {
            date: '1/1/1401',
            uv: 4000,
            pv: 2400,
        },
        {
            date: '1401/1/2',
            uv: 3000,
            pv: 1398,
        },
        {
            date: '1401/1/3',
            uv: 2000,
            pv: 9800,
        },
        {
            date: '1401/1/4',
            uv: 2780,
            pv: 3908,
        },
    ]

    return (
        <Card
            title={
                <div className='card-title'>
                    <span>سوابق فروش</span>
                    <Select defaultValue={0} items={[
                        { text: "روزانه", value: 0 },
                        { text: "هفتگی", value: 1 },
                        { text: "ماهانه", value: 2 }
                    ]} />
                </div>
            }
        >
            <div className='scroll-x ltr'>
                <LineChart
                    data={data}
                    XAxisKey="date"
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Line yAxisId="left" type="monotone" dataKey="pv" unit=" تومان " name="مبلغ" stroke="#8884d8" />
                    <Line yAxisId="right" type="monotone" dataKey="uv" unit=" عدد " name=" تعداد" stroke="#82ca9d" />
                </LineChart>
            </div>
        </Card>
    )
}
