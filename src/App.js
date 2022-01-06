import './App.css';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {inputdata} from './actions/index'



function App() {

  
  const [inputData, setInputdata] = useState('')
  const [password, setPassword] = useState('')
  const formdata={inputData,password}

  const submitForm=(e)=>{
    e.preventDefault()
  alert(JSON.stringify(formdata))
  setInputdata('')
  setPassword('')
  }

  // const myState = useSelector(state => state.login)
  const dispatch = useDispatch(formdata)

  return (
    <div className="App">

      <h1>redux form</h1>
      <form  onSubmit={submitForm}>
       <input type="text"  name='name' value={inputData} onChange={(e)=>{setInputdata(e.target.value)}} placeholder='enter your name' />  <br /><br />
       <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='enter your password'/> <br /><br />
       <button onClick={()=>dispatch(inputdata(inputData,password))}>Login</button>


       </form>
    </div>
  );
}

export default App;
