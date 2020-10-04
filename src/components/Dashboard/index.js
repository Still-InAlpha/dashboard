import React, { useState } from 'react'

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

import api from '../../services/api'

import { Container, Form } from './styles'

function Dashboard() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [workStart, setWorkStart] = useState('')
  const [workEnd, setWorkEnd] = useState('')
  const [sleepStart, setSleepStart] = useState('')
  const [sleepEnd, setSleepEnd] = useState('')
  const [sleepIntended, setSleepIntended] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

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
        <Arwes animate show>
          <Container>
            <Heading node="h1">
              <Words animate>Welcome, traveler!</Words>
            </Heading>

            <Heading node="h4">
              <Words animate>Let's set up your sleep schedule together</Words>
            </Heading>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Frame
                animate={true}
                show={true}
                hover={true}
                level={3}
                corners={4}
                layer="primary"
                style={{ width: 400 }}
              >
                <Form
                  action=""
                  onSubmit={handleSubmit}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <div>
                    {anim => (
                      <div className="label">
                        <label htmlFor="name">
                          <Words animate show={anim.entered}>Name:</Words>
                        </label>
                      </div>)}

                    <input
                      name="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="age">Age:</label>
                    </div>

                    <input
                      name="age"
                      placeholder="18"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="work_start">I start working at:</label>
                    </div>

                    <input
                      name="work_start"
                      placeholder="09:00"
                      value={workStart}
                      onChange={(e) => setWorkStart(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="work_end">I finish working at:</label>
                    </div>

                    <input
                      name="work_end"
                      placeholder="18:00"
                      value={workEnd}
                      onChange={(e) => setWorkEnd(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="sleep_start">I usually sleep at:</label>
                    </div>

                    <input
                      name="sleep_start"
                      placeholder="22:00"
                      value={sleepStart}
                      onChange={(e) => setSleepStart(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="sleep_end">I usually wake up at:</label>
                    </div>

                    <input
                      name="sleep_end"
                      placeholder="08:00"
                      value={sleepEnd}
                      onChange={(e) => setSleepEnd(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="label">
                      <label htmlFor="sleep_intended">
                        I want to sleep at:
                      </label>
                    </div>

                    <input
                      name="sleep_intended"
                      placeholder="22:00"
                      value={sleepIntended}
                      onChange={(e) => setSleepIntended(e.target.value)}
                    />
                  </div>

                  <Button id="submit" type="submit" animate>
                    Submit
                  </Button>
                </Form>
              </Frame>
            </div>
          </Container>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  )
}

export default Dashboard
