
import './App.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/home_page';
import Blogpage from './pages/joinuspage';
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
import Downloadspage from './pages/downloads_page';
import BlogsPage from './pages/blog_news';
import Presidentlearnmorepage from './pages/presidentlearnmorepage';
import Courseslearnmorepage from './pages/courseslearnmorepage';
import Projectlearnmorepage from './pages/projectlearnmorepage';
import Bloglearnmorepage from './pages/bloglearnmorepage';
import Boardpage from './pages/boardpage';
import Boardlearnmorepage from './pages/boardlearnmorepage';
import Memberspage from './pages/memberspage';
import Templatespage from './pages/templatespage';
import STKPushNotification from './components/prompt';
// import UnderMaintenance from './components/maintenace';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/join-us',
      element: <Blogpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/contact-us',
      element: <Contactuspage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/council-president',
      element: <Councilpage />,
      errorElement: <ErrorPage/>
    },
    {
      path:'/Plearnmore/:id',
      element:<Presidentlearnmorepage/>,
      errorElement:<ErrorPage/>
    },
    {
      path: '/en-us/donate',
      element: <Donatepage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/events',
      element: <Eventpage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/gallery',
      element: <Gallerypage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/blogs',
      element: <BlogsPage />,
      errorElement: <ErrorPage/>
    },
    {
      path:'Blearnmore/:id',
      element:<Bloglearnmorepage/>,
      errorElement:<ErrorPage/>
    },
    {
      path: '/en-us/download',
      element: <Downloadspage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/our-courses',
      element: <Coursepage />,
      errorElement: <ErrorPage/>
    },
    {
      path:'Clearnmore/:id',
      element: <Courseslearnmorepage/>,
      errorElement:<ErrorPage/>
    },
    {
      path: '/en-us/our-history',
      element: <Histroypage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/en-us/project',
      element: <Projectpage />,
      errorElement: <ErrorPage/>
    },
    {
      path:'/Pjlearnmore/:id',
      element:<Projectlearnmorepage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/en-us/board',
      element:<Boardpage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/Bmlearnmore/:id',
      element:<Boardlearnmorepage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/en-us/members',
      element:<Memberspage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/en-us/templates',
      element:<Templatespage/>,
      errorElement:<ErrorPage/>
    },
    {
      path:'/en-us/stkpush/promptsent',
      element:<STKPushNotification/>,
      errorElement:<ErrorPage/>
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
