import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'
import { AppHeader } from '../components/nav'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Box component='header'>
        <AppHeader />
      </Box>
      <Box
        component='main'
        sx={{ display: 'flex', flexDirection: 'column' }}
      >
        {children}
      </Box>
    </>
  )
}
