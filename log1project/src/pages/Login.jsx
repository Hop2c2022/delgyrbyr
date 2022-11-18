import './Login.css';
import { useState , useRef } from 'react';
import {Link} from 'react-router-dom'

export const Login = () => {

  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const inputTa = useRef(null);
  const reftoInp = () => {
    inputTa.current.focus()
  }
  const inputTap = useRef(null);
  const reftoInpa = () => {
    inputTap.current.focus()
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(e.key);
    console.log(email);
      console.log(name);
    // if(e.key == "Enter"){
    //   console.log(email);
    //   console.log(name);
    // }
  }

  return(
    <div className='Appp'>
      <form onSubmit={submit}>
      <div className='tup'>
        <div><h1 className='signp'>Sign-Up</h1></div>
      <div className='ui'> Name
      <input className='f' placeholder='Name...' value={email} ref={inputTa} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='ui'> Email
      <input className='f' placeholder='Email...' value={name} ref={inputTap} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='ghjk'>
      <div>
      <button type="submit" className='werty'>Submit</button>
      </div>
      <div className='zxcvbnm'>
      <button onClick={reftoInp}>Name</button>
      <button className='za' onClick={reftoInpa}>Email</button>
      </div>
      </div>
      </div>
      <div>
        <nav>
          <Link to={"/"}>
            <h1>Back</h1> 
          </Link>
        </nav>
      </div>
      </form>
    </div>
  )
}
