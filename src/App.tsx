import { Header } from "./components/Header/Header"
import '../src/components/sass/global.sass'
import { Form } from "./components/Register/Form/Form"
import { List } from "./components/Register/History/List"
import { Register } from "./components/Register/Register"
import { ChartContainer } from "./components/Charts/ChartContainer"
function App() {

  return (
      <>
      <Header />
      <Register/>
      <ChartContainer/>
      </>
    )
}

export default App
