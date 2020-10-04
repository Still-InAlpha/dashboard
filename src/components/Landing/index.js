import React from 'react'
import { Link } from 'react-router-dom'

import {
  ThemeProvider,
  SoundsProvider,
  createTheme,
  createSounds,
  Arwes,
  Heading,
} from 'arwes'

import macacoImg from '../../assets/macaco.jpg'

import { Container } from './styles'

export default function Landing() {
  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds()}>
        <Arwes>
          <Container>
            <Heading>Big Monkey Productions</Heading>

            <img src={macacoImg} alt="macaco" />

            <Link className="link" to="/dashboard">
              Access Scheduler
            </Link>
          </Container>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}
