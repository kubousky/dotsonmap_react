import { ReactNode } from "react";
import Navbar from '../components/Navbar';

interface Props {
    children: ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
    <>
    <Navbar/>
        <div className="container mt-5">
            { children }
        </div>
    </>
    )
}
export default Layout;