import Child from "./components/Child"
import Greeting from "./components/Greeting"
import HelloWorld from "./components/HelloWorld"
import SimpleForm from "./components/SimpleForm"
import Toggle from "./components/Toggle"
import Welcome from "./components/Welcome"

function App() {
  

  return (
    <>
      <SimpleForm/>
      <Welcome />
      <Toggle />
      <Greeting name="Vegeta" />
      <HelloWorld />
      <Child name="Sadia" />
    </>
  )
}

export default App