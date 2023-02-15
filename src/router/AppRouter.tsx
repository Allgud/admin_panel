import { Routes, Route } from 'react-router-dom'
import MainLayout from '../components/Layout'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'
import Posts from '../pages/Posts'
import Tags from '../pages/Tags'
import Users from '../pages/Users'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path='users' element={<Users />} />
                <Route path='posts' element={<Posts />} />
                <Route path='/tags' element={<Tags />} />
            </Route>
            <Route path='/auth' element={<Auth />} />
        </Routes>
    )
}

export default AppRoutes