import { useState } from 'react'
import ActionButton from 'components/utils/actionsButton'
import Button from 'components/utils/field/button'
import { useNavigate } from 'react-router-dom'
import Modal from 'components/utils/modal'
import OrdersDetail from 'components/order/list/shavazPost/OrdersDetail'
import { exportOrderDeliveredToEmail } from 'store/actions/order'

export default function TableActions() {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div className='flex-row'>
                <ActionButton>
                    <Button label="ایجاد محموله" onClick={() => navigate("/consignment/create")} />
                    <Button type="secondary-success" label="مشاهده جزییات همه سفارش ها" onClick={() => setVisible(true)} />
                    <Button type="secondary-success" label="دریافت خروجی اکسل" onClick={() => exportOrderDeliveredToEmail({})} />
                </ActionButton>
            </div>
            <Modal
                visible={visible}
                handleCancel={() => setVisible(false)}
                footer={null}
                closable={true}
            >
                <OrdersDetail />
            </Modal>
        </>
    )
}