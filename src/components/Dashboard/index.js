import React, { useState } from 'react'

import {
  ThemeProvider,
  SoundsProvider,
  createTheme,
  createSounds,
  Arwes,
  Words,
  Paragraph,
  Button,
  Row,
  Col,
} from 'arwes'

import api from '../../services/api'

import { Container, Form } from './styles'

/**
 * {
  "work_time": datetime,
  "sleep_time": datetime,
  "wakeup_time": datetime,
  "intended_sleep_time": datetime,
  "prescribed_medications": string[]
}
{
  "exercise_time": datetime,
  "exercise_type": string,
  "exercise_duration": int,
  "eating_times": datetime[],
  "macronutrients": float[][],
  "light_stimuli": float[][],
  "medication_times":
   {
     "medication": int
   }
}

 */

//melatonin, pf670462,

function Dashboard() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [workStart, setWorkStart] = useState('')
  const [workEnd, setWorkEnd] = useState('')
  const [sleepStart, setSleepStart] = useState('')
  const [sleepEnd, setSleepEnd] = useState('')
  const [sleepIntended, setSleepIntended] = useState('')

  async function handleSubmit() {
    await api.post('/schedule_planner', {
      name,
      age,
      workStart,
      workEnd,
      sleepStart,
      sleepEnd,
      sleepIntended,
    })
  }

  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds()}>
        <Arwes>
          <Container>
            <Paragraph style={{ fontSize: '50px' }}>
              <Words animate>
                Welcome, traveler! Let's set up your sleep schedule together
              </Words>
            </Paragraph>

            <Form action="" onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <label htmlFor="name">Name:</label>
                  <input
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>

                <Col>
                  <label htmlFor="age">Age:</label>
                  <input
                    name="age"
                    placeholder="18"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="work_start">I start working at:</label>
                  <input
                    name="work_start"
                    placeholder="09:00"
                    value={workStart}
                    onChange={(e) => setWorkStart(e.target.value)}
                  />
                </Col>

                <Col>
                  <label htmlFor="work_end">I finish working at:</label>
                  <input
                    name="work_end"
                    placeholder="18:00"
                    value={workEnd}
                    onChange={(e) => setWorkEnd(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="sleep_start">I usually sleep at:</label>
                  <input
                    name="sleep_start"
                    placeholder="22:00"
                    value={sleepStart}
                    onChange={(e) => setSleepStart(e.target.value)}
                  />
                </Col>

                <Col>
                  <label htmlFor="sleep_end">I usually wake up at:</label>
                  <input
                    name="sleep_end"
                    placeholder="08:00"
                    value={sleepEnd}
                    onChange={(e) => setSleepEnd(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label htmlFor="sleep_intended">I want to sleep at:</label>
                  <input
                    name="sleep_intended"
                    placeholder="08:00"
                    value={sleepIntended}
                    onChange={(e) => setSleepIntended(e.target.value)}
                  />
                </Col>
              </Row>

              <Button type="submit" animate>
                Submit
              </Button>
            </Form>
          </Container>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}

export default Dashboard
