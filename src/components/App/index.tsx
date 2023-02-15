import 'antd/dist/reset.css'
import { useEffect } from 'react'
import AppRoutes from '../../router/AppRouter'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const { isAuth } = useAppSelector(state => state.authReducer)
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/auth')
  }, [])

  useEffect(() => {
    if (isAuth) {
      navigate('/')
    }
    else {
      navigate('/auth')
    }
  }, [isAuth])


  return (
    <AppRoutes />
  )
}

export default App
