import {Link} from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <Link className='navbar-link' to={'/'}> Login </Link>
            <Link className='navbar-link' to={'/home'}> Home </Link>
            <Link className='navbar-link' to={'/about'}> About Us </Link>
        </div>
    );
}