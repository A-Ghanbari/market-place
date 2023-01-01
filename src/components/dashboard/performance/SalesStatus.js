import Card from 'components/utils/card'

export default function SalesStatus() {
    return (
        <Card title="وضعیت فروش (ناخالص)">
            <div className='sale'>
                <div>
                    <h2 className='bold'>۸,۲۳۸,۸۱۲ ریال</h2>
                    <p>فروش هفته جاری</p>
                </div>
                <div>
                    <h2 className='bold'>۹,۹۹۷,۵۰۰ ریال</h2>
                    <p>فروش هفته گذشته</p>
                </div>
                <div>
                    <h2 className='bold'>۸,۲۳۸,۸۱۲ ریال</h2>
                    <p>فروش ماه گذشته</p>
                </div>
            </div>
        </Card>
    )
}
