import Card from 'components/utils/card'
import Button from 'components/utils/field/button'
import Link from 'components/utils/link'

export default function Wallet() {

    return (
        <Card title="کیف پول" >
            <div className='wallet'>
                <div className='wallet-Inventory'>
                    <p>موجودی کیف پول شما</p>
                    <h1> 0 ریال</h1>
                </div>
                <div className="list">
                    <div>
                        <span>
                            <span className='income' />
                            <div>
                                <h4>میزان واریزی</h4>
                                <p>در 30 روز گذشته</p>
                            </div>
                        </span>
                        <span className='success'>
                            0 ریال
                        </span>
                    </div>
                    <div>
                        <span >
                            <span className='expenses' />
                            <div>
                                <h4>میزان هزینه کرد</h4>
                                <p>در 30 روز گذشته</p>
                            </div>
                        </span>
                        <span className='fail'>
                            0 ریال
                        </span>
                    </div>
                        <Link to="/wallet">
                            <Button type="secondary-accent" label="جزییات کیف پول" />
                        </Link>
                </div>
            </div>
        </Card>
    )
}
