import './home.css';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Home = () => {
  return (
    <div>
      <div className="hom">
      <div>
      <div className='Home'>
        <img className='img' src="jaja.png" alt="" />
      </div>
      <div className='hurg'>
      <div className='h11'>
      <h1 className='h1'>team</h1><span className='h2'>.</span>
      </div>
      <div className='contain'>
        <h1 className='txt1'>Instant collaborations for remote teams</h1>
        <h4 className='txt2'>All in one for your remote team chats, collaboration and track projects</h4>
        <div className='smolcont'>
          <input className='input' type="text" placeholder='Email' />
          <button className='buts'>Get early access</button>
        </div>
      </div>
      </div>
      </div>
      <div className='naver'>
        <nav>
          <Link to={"/products"}> <h1 className='login'>Products</h1> </Link>
          <Link to={"/services"}> <h1 className='login'>Services</h1> </Link>
          <Link to={"/contacts"}> <h1 className='login'>Contacts</h1> </Link>
          <Link to={"/login"}> <h1 className='login'> Login </h1> </Link>
          <Link to={"/jorno"}> <h1 className='logi'> Get Access </h1> </Link>
        </nav>
      </div>
    </div>
    <div>
      d
    </div>
    </div>
  );
}
export default Home