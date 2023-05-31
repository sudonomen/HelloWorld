import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const [count, setCount] = useState(false)

  return (
    <>
      <input type="color" list='cl'/>
      <datalist id="cl">
      <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
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
