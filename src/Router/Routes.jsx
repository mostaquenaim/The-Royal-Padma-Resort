import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../pages/404/ErrorElement";
import Root from "../Root/Root";
import Base from "../Base/Base";
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/pages/Rooms";
import MyBookings from "../pages/MyBookings/pages/MyBookings";
import RoomDetailsPage from "../pages/Rooms/pages/RoomDetailsPage";
import PrivateRouteComp from "./PrivateRouteComp";
import Login from "../pages/LoginAndRegister/Login";
import AboutUs from "../pages/About/AboutUs";
import ContactUs from "../pages/Contact/ContactUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Base></Base>,
                children: [
                    {
                        path: '/',
                        element: <Home></Home>,
                    },
                    {
                        path: 'rooms',
                        element: <Rooms></Rooms>,
                        loader: ()=> fetch(`https://the-royal-padma-server-side.vercel.app/room-imageries`),
                    },
                    {
                        path: 'room-details/:_id',
                        element:<RoomDetailsPage></RoomDetailsPage>,
                        loader: ({params})=> fetch(`https://the-royal-padma-server-side.vercel.app/room-details-no/${params._id}`),
                    },
                    {
                        path: 'my-bookings',
                        element:<PrivateRouteComp><MyBookings></MyBookings></PrivateRouteComp>,
                        // loader: () => fetch('https://the-royal-padma-server-side.vercel.app/room-details-no')
                    },
                    {
                        path: 'about-us',
                        element: <AboutUs></AboutUs>
                    },
                    {
                        path: 'contact-us',
                        element: <ContactUs></ContactUs>
                    }
                ],
            },
            {
                path: 'login',
                element: <Login></Login>
            }

        ]
    }
]);

export default router;