import { Form } from './Form/Form'
import { List } from './List/List'
import '../sass/register.sass'
import dayjs, { Dayjs } from 'dayjs'
import { Day_Results } from '../Charts/Day_Results'
import Divider from '@mui/material/Divider'
import { Header } from '../Header/Header'
import { useContext, useEffect, useState } from 'react'
import { ChartsContext } from '../context/chart_context'

export const Register = () => {
  const { localUser } = useContext(ChartsContext)
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  console.log(date)
  const formattedDate = dayjs(date).format('YYYY/MM/DD')

  return (
    <>
      <Header />
      <main id="main-container">
        <span id="today">
          {/* <h2>Usuário: {localUser.username}</h2> */}
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
