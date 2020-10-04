import React, { useEffect } from 'react'

import {
  ThemeProvider,
  SoundsProvider,
  createTheme,
  createSounds,
  Arwes,
  Words,
  Heading,
  Button,
  Frame,
} from 'arwes'

import { Container } from './styles'

import api from '../../services/api'

export default function List() {
  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds()}>
        <Arwes>
          <Container>
            <Heading>List</Heading>
          </Container>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}
