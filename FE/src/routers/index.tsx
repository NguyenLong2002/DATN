import PublicLayout from '../layouts/PublicLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from '../features/auth/signIn';
import SignUpPage from '../features/auth/signUp';
import AdminLayout from '../layouts/AdminLayout';
import PublicLayoutUser from '../layouts/PublicLayoutUser';
import NotFound from '../features/misc/NotFound';
import Forbidden from '../features/misc/Forbidden';
import ManageTour from '../features/admin/manageTour';
import MainBody from '../features/user/pages/index';
import TourPage from '../features/user/pages/tourPage';
import TourDetail from '../features/user/pages/tourDetail';
import ContactPage from '../features/user/pages/contactPage';
import VerifyEmail from '../components/shareCompt/verifyEmail';


function RouterComponent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayoutUser />,
      children: [
        {
          index: true,
          element: <MainBody />
        },
        {
          path:"/tours",
          element: <TourPage />
        },
        {
          path:"/tours/tour-detail",
          element: <TourDetail />
        },
        {
          path:"/contact",
          element: <ContactPage />
        }
      ]
    },
    {
      path: "/login",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <SignInPage />
        },
        {
          path: "sign-up",
          element: <SignUpPage />,
        },
      ]
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          index: false,
          element: <>Layout admin page</>
        },
        {
          path: "manage-users",
          element: <>Manage user</>
        },
        {
          path: "manage-tour",
          element: <ManageTour />
        },
      ]
    },
    {
      path: "/Forbidden",
      element: <Forbidden />
    },
    {
      path: "*",
      element: <NotFound />
    },
    {
      path: "/verify-email",
      element: <VerifyEmail />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default RouterComponent
