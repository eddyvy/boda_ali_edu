import './index.sass'
import { RouterProvider } from 'react-router-dom'
import { appRouter, appTheme } from './app'
import { ThemeProvider } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}

export default App
