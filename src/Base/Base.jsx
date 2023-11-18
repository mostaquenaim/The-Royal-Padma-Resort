import NavBar from '../components/Navigation/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Base = () => {

    return (
        <>
            <NavBar ></NavBar>
            <Outlet ></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </>
    );
};

export default Base;