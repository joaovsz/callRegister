import { Form } from './Form/Form'
import { List } from './List/List'
import '../sass/register.sass'
import dayjs, { Dayjs } from 'dayjs'
import { Day_Results } from '../Charts/Day_Results'
import Divider from '@mui/material/Divider'
import { Header } from '../Header/Header'
import { useState } from 'react'

export const Register = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const formattedDate = dayjs(date).format('DD/MM/YYYY')

  return (
    <>
      <Header />
      <main id="main-container">
        <span id="today">
          <h1>{formattedDate}</h1>
        </span>
        <section id="register">
          <Form />
          <Divider
            orientation="vertical"
            color="white"
            variant="middle"
            flexItem
          />
          <Day_Results />
        </section>
        <List />
      </main>
    </>
  )
}
