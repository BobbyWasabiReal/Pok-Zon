import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import logo from '../../P-removebg-preview.png';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <>
            {user ?
                <nav>
                    <Link to="/"
                    style={{fontSize: "4vmin"}}
                    ><img src={logo} alt="logo" />PokéZon</Link>
                    <span className='right'>
                        <div className='link'>
                            <Link to="/shop">Shop</Link>
                        </div>
                        <div className='link'>
                            <Link to="/backpack">My Backpack</Link>
                        </div>
                        <div className='link'>
                            <Link to="" onClick={handleLogOut}>Log out</Link>
                        </div>
                    </span>
                </nav>
                :
                <nav>
                    <Link to="/"
                    style={{fontSize: "3.5vmin"}}
                    ><img src={logo} alt="logo"  />PokéZon</Link>
                    <Link to="/login">Log In</Link>
                </nav>

            }
        </>
    );
}