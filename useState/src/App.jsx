import './App.css'
import { useState } from 'react'

function PericlesSantosApp() {
  const [count, setCount] = useState(0)

  const [valueInput, setValueInput] = useState('Pericles')

  const add = () => {
    setCount(count + 1)
  }

  const onChangeInput = (event) => {
    setValueInput(event.target.value)
  }

  return (
    <div className="App">
        <h1>Olá, Mundo!</h1>
        <h3>{count}</h3>
      <button onClick={add}>adicionar</button>
      <div>
        <input onChange={onChangeInput}></input>
        </div>
        <h3>{valueInput}</h3>
      </div>
  )
}

export default PericlesSantosApp
