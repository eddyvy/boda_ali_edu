import { Box, Typography } from '@mui/material'
import { DateTime, Duration } from 'luxon'
import { useState, useEffect } from 'react'

const granDia = DateTime.fromFormat(
  '26/08/2023 16:00:00',
  'dd/MM/yyyy hh:mm:ss'
)

export const Timer = () => {
  const [countDown, setCountDown] = useState<Duration>(
    granDia.diffNow(['months', 'days', 'hours', 'minutes', 'seconds'])
  )

  useEffect(() => {
    setTimeout(() => {
      setCountDown(
        granDia.diffNow([
          'months',
          'days',
          'hours',
          'minutes',
          'seconds'
        ])
      )
    }, 1000)
  }, [countDown])

  return (
    <Box>
      <Typography
        variant='h2'
        color='primary'
        align='center'
        sx={{ m: 4 }}
      >
        {countDown.months} meses {countDown.days} días{' '}
        {countDown.hours} horas {countDown.minutes} minutos{' '}
        {countDown.seconds.toFixed()} segundos
      </Typography>
    </Box>
  )
}
