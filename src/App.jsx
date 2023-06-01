import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const [count, setCount] = useState(false);

  window.scrollTo(0, 1);

  return (
    <>
        <div class="bg-slate-950 h-20 text-white h-screen index-10">
          <button class="bg-blue-500 p-2" onClick={()=>{alert()}}>Menu</button>
       </div>
     

      <div class="absolute left-0 w-screen top-20 h-screen overflow-y-scroll overscroll-contain">
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
        <div class="even:bg-gray odd:bg-white h-1/2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          eaque, voluptatum unde, repellendus iste ipsum omnis dignissimos ad
          molestiae dolorem iure optio, quos earum odit est esse? Placeat, illum
          animi.
        </div>
    
    </div>
    </>

  );
}

export default App;
