import Card from 'components/utils/card'
import Icon from 'components/utils/field/Icon'
import Progress from 'components/utils/progress'

export default function CustomerRating() {
    return (
        <Card title="رضایت مندی مشتریان">
            <div className='positive-score'>
                <Progress
                    gapDegree={120}
                    type="dashboard"
                    color="green"
                    value={50}
                />
                <h2>امتیاز مثبت</h2>
                <p>از مجموع 13 رای</p>
            </div>

            <div className='rate-icon icon-1'>
                <Icon type="laugh" />
                <h3>کاملا راضی</h3>
                <Progress
                    color="#3dc3a2"
                    value={80}
                />
            </div>
            <div className='rate-icon icon-2'>
                <Icon type="happy" />
                <h3>راضی</h3>
                <Progress
                    color="#a0d468"
                    value={80}
                />
            </div>
            <div className='rate-icon icon-3'>
                <Icon type="normal" />
                <h3>نظری ندارم</h3>
                <Progress
                    color="#f6bb42"
                    value={80}
                />
            </div>
            <div className='rate-icon icon-4'>
                <Icon type="unhappy" />
                <h3>ناراضی</h3>
                <Progress
                    color="#fc6e51"
                    value={80}
                />
            </div>
            <div className='rate-icon icon-5'>
                <Icon type="sad" />
                <h3>کاملا ناراضی</h3>
                <Progress
                    color="#da4453"
                    value={80}
                />
            </div>
        </Card>
    )
}
