
import { Suspense } from 'react';
import './App.css';
import Batsman from './Batsman';
import Counter from './Counter';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';


const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() => {
const res = await fetch ('https://jsonplaceholder.typicode.com/users');
return res.json();

}

const fetchPosts = async() => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
  return res.json();
  
  }

function App() {

const friendsPromise = fetchFriends();
const postsPromise = fetchPosts();

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

      <Suspense fallback={<h3>Posts is comming ....</h3>}>
        <Posts postsPromise={postsPromise}>

        </Posts>
      </Suspense>
      <Suspense fallback={<h3>loading...</h3>}>
      <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>friends is comming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      
      <Batsman></Batsman>
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
