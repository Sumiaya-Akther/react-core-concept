
import './App.css'
import Counter from './Counter'

function App() {
function handleClick(){
  alert('i am clicked')
}

// most use case
const handleClick3 = () => {
  alert('clicked 3')
}

const handleAdd5 = (num) =>{
  const newNum = num + 5;
  alert(newNum);
}
  return (
    <>
      
      <h3>Vite + React</h3>

      <Counter></Counter>
       {/* <button onclick="handleClick()">Click Me</button> */}
      <button onClick={handleClick}>click me</button>

      <button onClick={function handleClick2(){
         alert('clicked 2')
       }}>Click Me2</button>

      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert('click 4')}>Click me 4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
