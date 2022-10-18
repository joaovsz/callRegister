
import { Form } from './Form/Form'
import { List } from './List/List'
import "../sass/register.sass"

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
