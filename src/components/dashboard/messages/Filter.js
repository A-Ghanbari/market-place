import Card from "components/utils/card"
import Radio from "components/utils/field/radio"
import Switch from "components/utils/field/switch"

export default function Filter() {
    const items = [
        {
            label: 'نمایش همه',
            value: 'نمایش همه',
        },
        {
            label: 'خیلی مهم',
            value: 'خیلی مهم',
        },
        {
            label: 'مهم',
            value: 'مهم',
        },
        {
            label: 'عادی',
            value: 'عادی',
        },
    ]
    return (
        <Card>
            <div className="notification-filter">
                <div className="filter-switch">
                    <Switch />
                    <h4>نمایش همه اعلان های خوانده نشده</h4>
                </div>
                <Radio optionType="button" buttonStyle="solid" options={items} />
            </div>
        </Card>
    )
}
