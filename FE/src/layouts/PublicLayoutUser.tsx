import { getToken } from '../utils/index'
import { Outlet } from 'react-router-dom'
import { useEffect, Suspense } from 'react'
import { useAppDispatch } from '../store'
import { fetchUserInfo } from '../store/user'
// import { Skeleton } from 'antd'
import Navbar from '../components/shareCompt/navbar'
import Footer from '../components/shareCompt/Footer'

const PublicLayoutUser = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const token = getToken()
    if (token) {
      dispatch(fetchUserInfo())
    }
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicLayoutUser
