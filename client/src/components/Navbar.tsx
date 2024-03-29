import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logout, selectUser } from '../features/auth';


export const Navbar = () => {
    const dispatch = useAppDispatch();

    const { user, isAuthenticated } = useAppSelector(selectUser)

    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className='nav-link' to='/dashboard'>
                    DashBoard
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/#!' onClick={() => dispatch(logout())}>
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

    const userName = (
        <>
            <NavLink className='nav-link' to=''>
                <h5>Hi { user?.name} </h5>
            </NavLink>
        </>

    ); 

    return(
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className='navbar-brand' to='/'>
            DotsOnMap
        </NavLink>

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

        {isAuthenticated ? userName : null}
        
      </div>
    </nav>
  );
};

export default Navbar;
