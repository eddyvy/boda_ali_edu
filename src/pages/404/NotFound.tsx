import { Box, Typography } from '@mui/material'
import { PageLayout } from '../../layouts'

export const NotFound = () => {
  return (
    <PageLayout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant='h1' color='primary' sx={{ m: 4 }}>
          404
        </Typography>
        <Typography variant='body1'>
          No hemos encontrado la página que buscabas 😕
        </Typography>
      </Box>
    </PageLayout>
  )
}
