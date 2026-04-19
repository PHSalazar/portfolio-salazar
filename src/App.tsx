import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Rootlayout from "./layout/Rootlayout"
import About from "./pages/About"
import Blog from "./pages/Blog"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rootlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ],
    errorElement: <ErrorPage />
  },
],
  {
    basename: "/portfolio-salazar"
  })

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App