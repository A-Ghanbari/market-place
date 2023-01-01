import { useDispatch, useSelector } from 'react-redux'
import { logout, setCollapsedMenu } from 'store/actions/user'
import { Layout } from 'antd'
import Icon from 'components/utils/field/Icon'
import Menu from 'components/utils/menu'

const { Sider: AntSider } = Layout

function Sidebar() {
    const collapsed = useSelector(s => s.collapsedMenu)
    const dispatch = useDispatch()

    return (
        <AntSider
            className={`sidebar ${collapsed ? 'close-sidebar' : 'open-sidebar'}`}
            trigger={null}
            collapsible
            collapsed={collapsed}
            collapsedWidth={0}
            breakpoint={"lg"}
        >
            <div className={collapsed ? "sidebar-header-close" : "sidebar-header"}>
                <div key="logo" className="sidebar-logo" />
                <p>مــرکز فروشــندگان</p>
                <div className='collapse-icon'>
                    <Icon
                        name="collapsedMenu"
                        key="collapsedMenu"
                        type={collapsed ? 'arrowLeft' : 'arrowRight'}
                        onClick={() =>
                            dispatch(setCollapsedMenu(!collapsed))
                        }
                    />
                </div>
                <div className='logout' onClick={() => dispatch(logout())}>
                    <Icon type="logout" />
                    <h3>خروج</h3>
                </div>
            </div>
            <Menu />
        </AntSider >
    )
}

export default Sidebar
