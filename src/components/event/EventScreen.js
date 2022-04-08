import { Container } from '@mui/material'
import React from 'react'
import { AppBarUI } from './AppBarUI'
import { EventList } from './EventList'

export const EventScreen = () => {
  return (
    <Container>
      <AppBarUI/>
      <main>
        <EventList/>
      </main>
    </Container>

  )
}
