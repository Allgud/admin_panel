import { Image, Layout, Space, Typography } from "antd";
import { MailOutlined, BellFilled } from '@ant-design/icons'
import * as styles from './styles'

const AppHeader = () => {
    const { Header } = Layout

    return (
        <Header style={styles.appHeader}>
            <Image style={styles.headerImage} />
            <Typography.Title level={1}>Панель администратора</Typography.Title>
            <Space>
                <MailOutlined style={styles.headerIcons} />
                <BellFilled style={styles.headerIcons} />
            </Space>
        </Header>
    )
}

export default AppHeader