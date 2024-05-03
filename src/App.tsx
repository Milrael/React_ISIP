import { MouseEvent, useState } from 'react'
import Button from './components/Button/Button'
import Input from './components/Input/Input'







function App() {
  const [count, setCount] = useState<number>(0)

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  }


  return (
    <>
      <Button onClick={addCounter}>Сохранить</Button>
      <Button buttonStyle='big'>Войти</Button>
      <Input placeholder='email'/>

    </>
  )
}

export default App
