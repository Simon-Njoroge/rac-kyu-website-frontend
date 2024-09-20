
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/home_page';
import Blogpage from './pages/Blogs_page';
import Contactuspage from './pages/contact-us_page';
import Councilpage from './pages/council_president_page';
import Donatepage from './pages/donate_page';
import Eventpage from './pages/Events_page';
import Gallerypage from './pages/gallery_page';
import Coursepage from './pages/our_courses_page';
import Histroypage from './pages/our_history_page';
import Projectpage from './pages/Projects_page';
import Admincontainer from './containers/admincontainer/admincontainer';
import Managehome from './components/admin/home';
import ErrorPage from './pages/error';
import Managepresidents from './components/admin/presidents';
import Managecourses from './components/admin/courses';
import Manageprojects from './components/admin/projects';
import Manageevents from './components/admin/events';
import ManageGallery from './components/admin/gallery';
import Login from './components/admin/login';
import PrivateRoute from './components/admin/protect';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/join-us',
      element: <Blogpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/contact-us',
      element: <Contactuspage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/council-president',
      element: <Councilpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/donate',
      element: <Donatepage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/events',
      element: <Eventpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/gallery',
      element: <Gallerypage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/our-courses',
      element: <Coursepage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/our-history',
      element: <Histroypage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/project',
      element: <Projectpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/admin',
      element: <Login/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/managehome',
      element: <PrivateRoute><Admincontainer><Managehome/></Admincontainer></PrivateRoute>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/managepresidents',
      element: <PrivateRoute><Admincontainer><Managepresidents/></Admincontainer></PrivateRoute>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/managecourses',
      element: <PrivateRoute><Admincontainer><Managecourses/></Admincontainer></PrivateRoute>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageprojects',
      element: <PrivateRoute><Admincontainer><Manageprojects/></Admincontainer></PrivateRoute>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageevents',
      element:<PrivateRoute><Admincontainer><Manageevents/></Admincontainer></PrivateRoute> ,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageGallery',
      element: <PrivateRoute><Admincontainer><ManageGallery/></Admincontainer></PrivateRoute>,
      errorElement: <ErrorPage/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
