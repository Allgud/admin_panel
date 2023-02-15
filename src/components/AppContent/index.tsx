import { Layout } from "antd";
import { Outlet } from 'react-router-dom'
import * as styles from './styles'

const AppContent = () => {
    const { Content } = Layout
    return (
        <Content style={styles.appContent}>
            <Outlet />
        </Content>
    )
}

export default AppContent