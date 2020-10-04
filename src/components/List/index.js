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
  //output variables
  /**
   * horarios de exercio int[][]
   */

  useEffect(() => {
    async function setup() {
      const response = await api.get('/shedule_programmer')
    }
  })

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
