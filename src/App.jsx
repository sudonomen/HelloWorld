import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
    <CSSTransition timeout={1000} in={count} classNames="fade">
    <div className='app' >
      Hello World
    </div>
    </CSSTransition>
        <button onClick={()=>{setCount(!count)}}>Click</button>
        </>
  )
}

export default App
