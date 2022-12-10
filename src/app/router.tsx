import { createBrowserRouter } from 'react-router-dom'
import { HomePage, NotFound } from '../pages'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />
  }
])
