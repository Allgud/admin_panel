import { Menu } from 'antd'
import { menuItems } from '../../constants'
import { useNavigate } from 'react-router-dom'

const NavMenu = () => {
    const navigate = useNavigate()

    return (
        <Menu
            onClick={(item) => { navigate(item.key) }}
            items={menuItems}
        >
        </Menu>
    )
}

export default NavMenu