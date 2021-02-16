import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="navbar">
        <div >
          <Link className='nav-items' to='/'>Home</Link>
        </div>
        <div >
          <Link className='nav-items' to='/about'>About</Link>
        </div>
        <div className='nav-items-invs'></div>
      </div>
    )
  } 
  
export default Navbar