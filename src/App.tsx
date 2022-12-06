import { Box } from '@mui/material'
import { Encabezado } from './components/Encabezado'
import { Timer } from './components/Timer'

function App() {
  return (
    <Box
      component='main'
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <Encabezado />
      <Timer />
    </Box>
  )
}

export default App
