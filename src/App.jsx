import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <input type="color" id='cl'/>
      <datalist id="cl">
       
      </datalist>
      <details>
        <summary style={{width:'100vw'}}>Short description</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla iusto fugiat rem ab repellat totam sint exercitationem sapiente aliquam quibusdam assumenda eveniet blanditiis quidem suscipit, quo et officia pariatur.</p>
      </details>
      <details>
        <summary style={{width:'100vw'}}>Short description</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla iusto fugiat rem ab repellat totam sint exercitationem sapiente aliquam quibusdam assumenda eveniet blanditiis quidem suscipit, quo et officia pariatur.</p>
      </details>
      <details>
        <summary style={{width:'100vw'}}>Short description</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla iusto fugiat rem ab repellat totam sint exercitationem sapiente aliquam quibusdam assumenda eveniet blanditiis quidem suscipit, quo et officia pariatur.</p>
      </details>
      <details>
        <summary style={{width:'100vw'}}>Short description</summary>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nulla iusto fugiat rem ab repellat totam sint exercitationem sapiente aliquam quibusdam assumenda eveniet blanditiis quidem suscipit, quo et officia pariatur.</p>
      </details>
      <dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>

    <dt>Morgawr</dt>
    <dd>A sea serpent.</dd>

    <dt>Owlman</dt>
    <dd>A giant owl-like creature.</dd>
</dl>

        <button onClick={()=>{setCount(!count)}}>Click</button>
        </>
  )
}

export default App
