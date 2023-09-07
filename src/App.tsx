import { useState } from 'react'
import { Button } from '../styled/button.styled'
import styled from 'styled-components'

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`


function App() {

  const [state, setState] = useState<string>("Hola mundo");

  const changeState = () => {
    setState("Hola mundo desde React");
  }

  return (
    <ContainerApp>
      <h2>{state}</h2>
      <Button onClick={changeState}>Click me!</Button>
    </ContainerApp>
  )
}

export default App
