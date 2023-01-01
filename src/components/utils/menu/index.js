import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useWindowSize from 'hooks/useWindowSize'
import { cutString } from 'tools/utils'
import menu from 'tools/shared/constants/menu'
import { Menu as AntMenu } from 'antd'
import Link from "components/utils/link"
import Icon from 'components/utils/field/Icon'
import 'components/utils/menu/menu.scss'

const { SubMenu } = AntMenu

function Menu({ setVisible }) {

    const collapsed = useSelector((s) => s.collapsedMenu)
    const { width } = useWindowSize()
    const location = useLocation()
    const path = cutString(location.pathname, 1, location.pathname.length)
    const subMenu = path.split('/')[0]
    const closeDrawer = () => {
        if (width < 768) {
            setVisible(false)
        }
    }

    return (
        <>
            <AntMenu
                theme="dark"
                mode="inline"
                className={`sidebar-menu ${width > 767 ? collapsed ? 'close-sidebar' : 'open-sidebar' : 'open-sidebar'}`}
                defaultSelectedKeys={path || "dashboard"}
                defaultOpenKeys={[subMenu]}
                selectedKeys={[path || subMenu === "" && "dashboard"]}
            >
                <AntMenu.ItemGroup className="sidebar-content">
                    <AntMenu.Item
                        key="dashboard"
                        icon={<Link to="/"><Icon type="dashboard" /></Link>}
                        className="sidebar-menu-dashboard"
                        onClick={() => closeDrawer()}
                    >
                        <Link to="/">داشبورد</Link>
                    </AntMenu.Item>
                    {menu.main.map((item) =>
                        <SubMenu
                            key={item.name}
                            icon={<Icon type={item.icon} />}
                            title={item.title}
                            className="sidebar-submenu"
                        >
                            {item.children.map(child => (

                                <AntMenu.Item
                                    key={child.name}
                                    className="sidebar-menu-item"
                                    onClick={() => closeDrawer()}
                                >
                                    <Link
                                        to={child.url}
                                    >
                                        {child.title}
                                    </Link>
                                </AntMenu.Item>
                            )
                            )}
                        </SubMenu>
                    )}
                </AntMenu.ItemGroup>
            </AntMenu>
        </>
    )
}

export default Menu
