import './App.css'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'IncrementAndShowText':
      return { count: state.count + 1, showText: !state.showText }
    case 'resetValue':
      return { count: 0, showText: true }
    default:
          return "This action doens't exist"
   }
}

function useReducerApp() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })

  const [count, showText] = state

  const handleCLick = () => {
    dispatch({ type: 'IncrementAndShowText' })
  }

   //setShowtext(!showText)

  return (
    <div className="App">
    <h1>Péricles dos Santos Ramos</h1>  
    <button onClick={() => dispatch({ type: 'resetValue' })}>Reset</button>
    {showText && <p>Bem vindos!!</p>}
    </div>
  )
}

export default useReducerApp
