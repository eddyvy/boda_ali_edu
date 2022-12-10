import { Box, Typography } from '@mui/material'
import { Timer } from '../../components/timer'
import { PageLayout } from '../../layouts'

export const HomePage = () => {
  return (
    <PageLayout>
      <Box>
        <Typography
          component='h1'
          variant='h2'
          align='center'
          sx={{ m: 4 }}
        >
          ¡Nos casamos!
        </Typography>
        <Typography variant='body1' align='center' sx={{ m: 2 }}>
          Si te hemos pasado el enlace a esta web es que sí... <br />
          ¡Estás invitado a nuestra boda!
        </Typography>
        <Typography variant='h4' align='center' sx={{ m: 4 }}>
          ¡Apúntate el día y resérvalo para poder asistir!
        </Typography>
        <Typography
          component='h2'
          variant='h1'
          color='primary'
          align='center'
          sx={{ m: 4 }}
        >
          26/08/2023
        </Typography>
        <Typography variant='body1' align='center' sx={{ m: 2 }}>
          Queremos que estés con nosotros en el día más especial de
          nuestra vida y queremos anunciarte la fecha para que puedas
          reservar lo que necesites para asistir, encaja tus planes,
          pide vacaciones, reserva los billetes... ¡lo que haga falta
          😜!
        </Typography>
      </Box>
      <Timer />
    </PageLayout>
  )
}
