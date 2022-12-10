import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app'

function App() {
  return <RouterProvider router={appRouter} />
}

export default App
