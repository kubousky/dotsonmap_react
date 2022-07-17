import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/user'

export const Navbar = () => {
    const { isAuthenticated } = useSelector(selectUser)

    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className='nav-link' to='/dashboard'>
                    DashBoard
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/#!'>
                    Logout
                </NavLink>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <NavLink className='nav-link' to='/login'>
                Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/register'>
                    Register
                </NavLink>
            </li>
        </>
    );

    return(
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className='navbar-brand' to='/'>
            DotsOnMap
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className='nav-link' to='/'>
                    Home
                </NavLink>
            </li>

            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
