import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
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
                    <Link to="/">PokéZon</Link>
                    <span className='right'>
                        <div className='link'>
                        <Link to="/orders/new">Shop</Link>
                        </div>
                        <div className='link'>
                        <Link to="/orders">My Backpack</Link>
                        </div>
                        <div className='link'>
                        <Link to="" onClick={handleLogOut}>Log out</Link>
                        </div>
                    </span>
                </nav>
                :
                <nav>
                    <Link to="/">PokéZon</Link>
                    <Link to="/login">Log In</Link>
                </nav>

            }
        </>
    );
}