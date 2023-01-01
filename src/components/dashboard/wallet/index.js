import Card from "components/utils/card"
import Button from "components/utils/field/button"
import PageHeader from "components/utils/pageHeader"
import Tabs from "components/utils/tabs"
import "components/dashboard/wallet/wallet.scss"

export default function Wallet() {
    const tabs = [
        {
            title: "واریزی‌/برداشت‌",
        },
        {
            title: "هزینه‌کرد از کیف پول",
        },
    ]
    return (
        <div>
            <PageHeader
                title="کیف پول"
                subTitle="برای مدیریت کیف پول خود از این قسمت استفاده نمایید."
            />
            <Card>
                <div className="wallet-credit">
                    <div className="wallet-balance">
                        <h3>موجودی کیف پول شما</h3>
                        <h1>0 ریال</h1>
                    </div>
                    <div className="wallet-amount">
                        <div className="deposit">
                            <span>
                                <h3>میزان واریز به کیف پول شما</h3>
                                <p>در ۳۰ روز گذشته</p>
                            </span>
                            <h1>0 ریال</h1>
                        </div>
                        <div className=" cost">
                            <span>
                                <h3>میزان هزینه کرد از کیف پول شما</h3>
                                <p>در ۳۰ روز گذشته</p>
                            </span>
                            <h1>0 ریال</h1>
                        </div>
                        <div className=" withdrawal">
                            <span>
                                <h3>میزان برداشت از کیف پول شما</h3>
                                <p>در ۳۰ روز گذشته</p>
                            </span>
                            <h1>0 ریال</h1>
                        </div>
                    </div>
                    <div className="wallet-actions">
                        <Button
                            label="افزایش اعتبار کیف پول"
                        />
                        <Button
                            type="primary-accent"
                            label="برداشت از کیف پول"
                        />
                        <Button
                            type="primary-warning"
                            label="شارژ پنل بازاریابی کلیکی"
                        />
                    </div>
                </div>
            </Card>
            <div className="wallet-tabs">
                <Card>
                    <Tabs tabs={tabs} />
                </Card>
            </div>
        </div>
    )
}
