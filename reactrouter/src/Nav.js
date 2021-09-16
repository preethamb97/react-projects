import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
    color: 'white'
  };

  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-Links">
        <Link to='/about'>
          <li style={navStyle}>About</li>
        </Link>
        <Link to='/shop'>
          <li style={navStyle}>Shop</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
