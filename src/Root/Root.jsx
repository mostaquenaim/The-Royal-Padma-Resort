import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../contexts/Theme/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div
            data-theme={theme}
            className='min-h-screen bg-primary text-base-100'>
            {/* <span className='text-6xl'>sdf</span> */}
            <Toaster />

            <Outlet></Outlet>
        </div>
    );
};

export default Root;