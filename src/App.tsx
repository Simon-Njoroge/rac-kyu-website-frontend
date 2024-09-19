
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
      element: <Admincontainer><Managehome/></Admincontainer>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/managepresidents',
      element: <Admincontainer><Managepresidents/></Admincontainer>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/managecourses',
      element: <Admincontainer><Managecourses/></Admincontainer>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageprojects',
      element: <Admincontainer><Manageprojects/></Admincontainer>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageevents',
      element: <Admincontainer><Manageevents/></Admincontainer>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/manageGallery',
      element: <Admincontainer><ManageGallery/></Admincontainer>,
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
