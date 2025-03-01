import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar-link' to={'/'}> Home </Link>
            <Link className='navbar-link' to={'/about'}> About Us </Link>
            <Link className='navbar-link' to={'/login'}> Login </Link>
        </div>
    );
}