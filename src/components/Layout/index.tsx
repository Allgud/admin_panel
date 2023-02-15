import { Layout } from 'antd'
import * as styles from './styles'
import AppHeader from '../AppHeader'
import AppSidebar from '../AppSidebar'
import AppContent from '../AppContent'

const MainLayout = () => {

    return (
        <Layout style={styles.layoutStyle}>
            <AppHeader />
            <Layout>
                <AppSidebar />
                <AppContent />
            </Layout>
        </Layout>
    )
}

export default MainLayout