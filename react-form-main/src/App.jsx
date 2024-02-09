import { useState } from 'react';
import TaskForm from './TaskForm';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div className="container">
      <h1>Yapacaklarını Yaz</h1>
      <TaskForm />

      
    </div>
     <hr />
     <p className='container'> <img src="./public/kitap.png" width="50px" /> &copy;G.S.C</p>
   </>
  )
}

export default App
