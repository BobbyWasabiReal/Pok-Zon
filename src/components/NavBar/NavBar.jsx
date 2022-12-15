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
                        <Link to="/orders/new">Shop</Link>
                        <Link to="/orders">My Backpack</Link>
                        <Link to="" onClick={handleLogOut}>Log out</Link>
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