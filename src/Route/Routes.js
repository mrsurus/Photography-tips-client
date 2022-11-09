import AddService from "../Component/AddService/AddService";
import Allservices from "../Component/AllServices/Allservices";
import CardDetails from "../Component/CardDetails/CardDetails";
import Home from "../Component/Home/Home";
import Login from "../Component/Login/Login";
import MyReview from "../Component/MyReview/MyReview";
import Register from "../Component/Register/Register";
import UpdateReview from "../Component/UpdateReview/UpdateReview";
import Main from "../Layouts/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/servicesh')
            },
            {
                path: '/allservices',
                element: <Allservices></Allservices>,
                loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/allservices/:id',
                element: <CardDetails></CardDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/allservices/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/update/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path:'/addservice',
                element: <AddService></AddService>
            }
        ]
    }
])
export default router;