import { Layout } from 'antd'
import NavMenu from '../NavMenu'
import * as styles from './styles'

const AppSidebar = () => {
    const { Sider } = Layout
    return (
        <Sider style={styles.appSidebar}>
            <NavMenu />
        </Sider>
    )
}

export default AppSidebar