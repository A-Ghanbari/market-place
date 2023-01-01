import { useState } from 'react'
import { USER as entity } from "tools/utils/entities"
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import { logout } from 'store/actions/user'
import Affix from 'components/utils/affix'
import Drawer from 'components/utils/drawer'
import Icon from 'components/utils/field/Icon'
import Menu from 'components/utils/menu'
import Dropdown from 'components/utils/dropdown'
import Link from 'components/utils/link'
import Rate from 'components/utils/rate'
import Badge from 'components/utils/field/badge'
import 'assets/sass/header.scss'

const { Header: AntHeader } = Layout

function Header() {
    const { data } = useSelector(
        (s) => s[entity.name]
    )
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const username = (data.customerName) ? data.customerName.split(" ", 1) : 'کاربر گرامی'
    const userList = (
        <div className='user-dropdown-box'>
            <Link to="/rating/" className='rating'>
                <h4>امتیاز شما:</h4>
                <Rate value={3} />
            </Link>
            <Link to="/" >
                <Icon type="dashboard" />
                <h4>داشبورد عملکرد</h4>
            </Link>
            <Link to="/profile/" >
                <Icon type="profile" />
                <h4>پروفایل شما</h4>
            </Link>
            <Link to="/messages/" >
                <Icon type="message" />
                <h4>پیام ها</h4>
            </Link>
            <Link to="/questions/" >
                <Icon type="question" />
                <h4>پرسش ها</h4>
            </Link>
            <Link to="/wallet/" >
                <Icon type="wallet" />
                <h4>کیف پول</h4>
            </Link>
            <h4
                onClick={() => dispatch(logout())}
            >
                خروج
            </h4>
        </div>
    )

    return (
        <AntHeader className="header">
            <Affix>
                <div className='header-wrapper'>
                    <div className='nav-wrapper'>
                        <Icon
                            className="drawer-icon"
                            name="collapsedDrawer"
                            key="collapsedDrawer"
                            type="menu"
                            onClick={() => setVisible(true)}
                            icon={
                                <Icon type={visible ? 'menuOpen' : 'menuClose'} />
                            }
                        />
                        <Drawer
                            className="drawer"
                            width={230}
                            title=""
                            placement="right"
                            onClose={() => setVisible(false)}
                            visible={visible}
                            closable={false}
                            getContainer={false}
                        >
                            <div className="drawer-sidebar">
                                <div className="sidebar-header">
                                    <div key="logo" className="sidebar-logo" />
                                    <p>مــرکز فروشــندگان</p>
                                </div>
                                <div className='logout' onClick={() => dispatch(logout())}>
                                    <Icon type="logout" />
                                    <h3>خروج</h3>
                                </div>
                                <Menu setVisible={setVisible} />
                            </div>
                        </Drawer>
                        <div className='nav'>
                            <Dropdown items={userList}>
                                <span className='user-dropdown'>روز بخیر ، <span className='fail'>{username}</span><Icon type="arrowDown" /></span>
                            </Dropdown>
                            <div className='header-icon'>
                                <Link to="/questions" title="پرسش ها">
                                    <Badge count={1}>
                                        <Icon type="question" />
                                    </Badge>
                                </Link>
                                <Link to="/messages" title="پیام ها">
                                    <Badge count={3}>
                                        <Icon type="message" />
                                    </Badge>
                                </Link>
                                <Link to="/wallet" className='menu-wallet' title="کیف پول">
                                    0 ریال
                                    <Icon type="wallet" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Affix>
        </AntHeader>
    )
}

export default Header