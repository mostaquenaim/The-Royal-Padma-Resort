import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import CustomDrawer from "./CustomDrawer";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/Theme/ThemeProvider";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";


const auth = getAuth(app);

const NavBar = () => {
    // contexts
    const { theme, setTheme } = useContext(ThemeContext)
    const { user, loading, setLoading } = useContext(AuthContext)
    // states 
    const [scrolling, setScrolling] = useState(false);
    const [showDetails, setShowDetails] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Adjust this value to determine when the background should change
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // toggle theme 
    const toggleTheme = () => {
        setTheme(theme === 'royalblue' ? 'luxury' : 'royalblue')
    }

    const navClass = `navbar ${scrolling ? 'bg-base-100' : ''}`;
    // custom style
    const listStyle = "text-accent btn btn-ghost p-0 cursor-auto hover:bg-transparent hover:border-b-2 hover:border-b-base-100"

    // navlinks 
    const navLinks = <>
        <li className={listStyle}> <NavLink to="/" className=''>
            Home
        </NavLink>
        </li>
        <li className={listStyle}> <NavLink to="/about-us" className=''>
            About Us
        </NavLink>
        </li>
        <li className={listStyle}> <NavLink to="/rooms" className=''>
            Rooms
        </NavLink>
        </li>
        <li className={listStyle}> <NavLink to="/my-bookings" className=''>
            My Bookings
        </NavLink>
        </li>
        <li className={listStyle}> <NavLink to="/contact-us" className=''>
            Contact Us
        </NavLink>
        </li>
        {/* {
            loading ?
                <li>
                    <span className="loading loading-spinner loading-lg"></span>
                </li>
                :
                user ?
                    <>

                        user.photoURL ?
                        <li className="w-16 h-16 rounded-full">
                            <img src={user.photoURL} alt="" className="w-full h-full rounded-full" />
                        </li>
                        :
                        <li>
                            <CgProfile></CgProfile>
                        </li>
                    </>
                    :
                    <li className={listStyle}>
                        <NavLink to="/login" className=''>
                            Login
                        </NavLink>
                    </li>
        } */}

    </>

    const handleLogOut = () => {
        axios.post('https://the-royal-padma-server-side.vercel.app/logout', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
            setLoading(true);
            return signOut(auth);
    }
    // return 
    return (
        <div data-theme={theme} className={`fixed w-full z-40 ${scrolling ? 'bg-base-100 border-b-2 shadow-md' : 'bg-transparent'}`}>
            <div className={navClass}>
                <div className="flex w-full items-center justify-between lg:justify-around">
                    <div className="mx-auto lg:mx-0">
                        <Link to="/">
                            <img src="/logo.png" className={`h-10 ${scrolling ? 'md:h-20' : 'md:h-28'} rounded-lg`} alt="" />
                        </Link>
                    </div>
                    <ul className="menu menu-horizontal px-1 text-base-100 hidden lg:flex gap-2">
                        {navLinks}
                        {
                    loading ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        user ?
                            <div className="relative">
                                <div className="flex items-center gap-2">
                                    <button className="" onClick={() => setShowDetails(!showDetails)}>
                                        <img className="mx-auto h-10 rounded-full border-2" src={user?.photoURL ? user.photoURL : "/avatar.png"} alt="" />
                                    </button>
                                </div>
                                {showDetails && (
                                    <div className="absolute right-0 z-50 bg-primary p-5 rounded-lg">
                                        <small className="text-sm text-base-200">Welcome, {user?.displayName}</small>
                                        <button
                                            onClick={handleLogOut}
                                            className="btn btn-sm rounded-lg lg:flex my-2"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            :
                            <li className={listStyle}>
                                <NavLink to='/login' className="">
                                    Login
                                </NavLink>
                            </li>
                }
                        <li>
                            <label className="swap swap-rotate ">

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" onClick={toggleTheme} />

                                {/* sun icon */}
                                <svg
                                    className="swap-on fill-neutral w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off fill-neutral w-8 h-8"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>

                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="lg:hidden Z-50">
                <CustomDrawer links={navLinks} />
            </div>
            <div className="lg:hidden absolute z-40 right-3 top-3 flex gap-2">
                {
                    loading ?
                        <span className="loading loading-spinner loading-lg"></span>
                        :
                        user ?
                            <div className="relative">
                                <div className="flex items-center gap-2">
                                    <button className="" onClick={() => setShowDetails(!showDetails)}>
                                        <img className="mx-auto h-10 rounded-full border-2" src={user?.photoURL ? user.photoURL : "/avatar.png"} alt="" />
                                    </button>
                                </div>
                                {showDetails && (
                                    <div className="absolute right-0 z-50 bg-primary p-5 rounded-lg">
                                        <small className="text-sm text-base-200">Welcome, {user?.displayName}</small>
                                        <button
                                            onClick={handleLogOut}
                                            className="btn btn-sm rounded-lg lg:flex my-2"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            :
                            <li className={listStyle}>
                                <NavLink to='/login' className="">
                                    Login
                                </NavLink>
                            </li>
                }
                <label className="swap swap-rotate ">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={toggleTheme} />

                    {/* sun icon */}
                    <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default NavBar;
