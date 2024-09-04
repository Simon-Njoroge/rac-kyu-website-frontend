
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
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/join-us',
      element: <Blogpage />,
    },
    {
      path: '/contact-us',
      element: <Contactuspage />,
    },
    {
      path: '/council-president',
      element: <Councilpage />,
    },
    {
      path: '/donate',
      element: <Donatepage />,
    },
    {
      path: '/events',
      element: <Eventpage />,
    },
    {
      path: '/gallery',
      element: <Gallerypage />,
    },
    {
      path: '/our-courses',
      element: <Coursepage />,
    },
    {
      path: '/our-history',
      element: <Histroypage />,
    },
    {
      path: '/project',
      element: <Projectpage />,
    },
    {
      path: '/admin',
      element: <Admincontainer><Managehome/></Admincontainer>,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
