import { useContext, useState } from "react";
import FormComp from "./FormComp";
import LogText from "./LogText";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from "../../firebase/firebase.config";
import {
    signInWithPopup,
    updateProfile,
    // getStorage, 
    getAuth,
    GoogleAuthProvider
    // ref 
} from "firebase/auth";
import { AuthContext } from "../../contexts/Auth/AuthProvider";
import { ThemeContext } from "../../contexts/Theme/ThemeProvider";
import axios from "axios";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Login = () => {
    const { signIn, createUser, user, setUser } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext)

    const location = useLocation();
    const navigate = useNavigate();

    const [currentState, setCurrentState] = useState('')
    const [login, setLogin] = useState(true)
    const [loginStyle, setLoginStyle] = useState("hero-content flex-col lg:flex-row-reverse ")
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        displayName: '',
        photoURL: ''
    })

    const handleRegister = () => {
        setCurrentState('')
        setLogin(false)
        setLoginStyle("hero-content flex-col lg:flex-row")
    }

    const handleLogin = () => {
        setCurrentState('')
        setLogin(true)
        setLoginStyle("hero-content flex-col lg:flex-row-reverse")

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    // google sign in 

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                const userEmail = result.user.email
                const user = { userEmail }
                axios.post('https://the-royal-padma-server-side.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        if (res.data.success) {
                            setUser(result.user);
                            navigate(location?.state ? location.state : '/');
                        }
                    })

            }).catch((error) => {
                console.log(error.message)
                // ...
            });

    }
    // login 
    const handleFormSubmitLogin = (e) => {
        e.preventDefault();

        signIn(formValues.email, formValues.password)
            .then(result => {
                const loggedInUser = result.user
                console.log(loggedInUser);
                const userEmail = formValues.email
                const user = { userEmail }
                axios.post('https://the-royal-padma-server-side.vercel.app/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log('token response', res.data);
                        if (res.data.success) {
                            navigate(location?.state ? location.state : '/');
                        }
                    })
                console.log(result.user);
                toast('Logged in jwt')

            })
            .catch(error => {
                console.log(error)
                toast(error.message);
            })
    }

    // registration 
    const handleFormSubmitRegister = e => {
        e.preventDefault();

        // validations 
        const hasCapitalLetter = /[A-Z]/.test(formValues.password);
        const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(formValues.password);

        if (formValues.password.length < 6) {
            toast('Password must be at least 6 characters')
            return
        }
        if (!hasCapitalLetter) {
            toast('Password must have at least 1 capital letter')
            return
        }
        if (!hasSpecialChar) {
            toast('Password must have at least 1 special character')
            return
        }
        // create user
        createUser(formValues.email, formValues.password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: formValues.displayName,
                    photoURL: formValues.photoURL
                }).then(() => {
                    const loggedInUser = result.user
                    console.log(loggedInUser);
                    const userEmail = formValues.email
                    const user = { userEmail }
                    axios.post('https://the-royal-padma-server-side.vercel.app/jwt', user, {
                        withCredentials: true
                    })
                        .then(res => {
                            if (res.data.success) {
                                toast("Profile created")
                                navigate(location?.state ? location.state : '/');
                            }
                        })
                }).catch((error) => {
                    toast(error.message)
                });

                toast('You have registered successfully')
                setFormValues({
                    email: '',
                    password: '',
                    displayName: '',
                    photoURL: ''
                })

            })
            .catch(error => {
                toast(error.message)
            })
    }

    return (
        <>
            {
                user ?
                    <Navigate to={location?.state ? location.state : '/'} />
                    :
                    <div data-theme={theme} className="min-h-screen">
                        <Link to='/' >
                            <figure className="bg-base-200 mx-auto pt-10 py-10">
                                <img src="/logo.png" alt="" className="h-32 mx-auto border-4 border-base-600 rounded-lg" />
                            </figure>
                        </Link>
                        <div className="hero bg-base-200">
                            <div className={loginStyle}>
                                <LogText title={login ? "Login Now!" : "Register Now!"} desc="" />
                                <div
                                    data-aos={login ? "fade-right" : "fade-left"}
                                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <FormComp
                                        handleClick={login ? handleRegister : handleLogin}
                                        btnText={login ? "Login" : "Register"} login={login}
                                        handleFormSubmit={login ? handleFormSubmitLogin : handleFormSubmitRegister}
                                        handleChange={handleChange}
                                        state={currentState}
                                        formValues={formValues}
                                        googleLogin={handleGoogleSignIn} />
                                </div>
                            </div>
                        </div>
                        <ToastContainer></ToastContainer>
                    </div>}
        </>
    );
};

export default Login;