
import { Form } from './Form/Form'
import { List } from './List/List'
import "../sass/register.sass"
import { useContext } from 'react'
import { ChartsContext } from '../context/chart_context'
import { Day_Results } from '../Charts/Day_Results'
import Divider from '@mui/material/Divider'

export const Register = () => {
  
  return (
    <main>
      <section id="register">
      <Form/>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Day_Results/>
      </section>
      <List/>
    </main>
     
  )
}
