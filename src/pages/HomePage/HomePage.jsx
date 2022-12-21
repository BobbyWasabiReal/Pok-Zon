import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h1>PokéZon</h1>
            <h3>Gotta Buy Em' All!</h3>
            <Link to="/login" className='btn'>Log In / Sign Up</Link>
        </>
    );
}