import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login/Index";
import SignUp from "./views/Signup/Index";
import Users from "./views/Users/Index";
import Home from "./views/Home/Index";
import NotFound from "./views/NotFound/Index";
import DefaultLayout from "./components/DefaultLayout/Index";
import Collection from "./components/collections";
import Shirt from "./components/collections/Shirt";
import Trousers from "./components/collections/Trousers";
import Set from "./components/collections/Set";
import Bag from "./components/collections/Bag";
import Shoes from "./components/collections/Shoes";
import Orthers from "./components/collections/Others";
import Free from "./components/collections/Free";
import Product from "./components/collections/Product";
import Cart from "./components/Cart";
import ManagerProduct from "./views/Admin/Product/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/admin/product",
                element: <ManagerProduct />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/Cart",
                element: <Cart />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/collection",
                element: <Home />,
            },
            {
                path: "/collection/shirt",
                element: <Shirt />,
            },
            {
                path: "/collection/trousers",
                element: <Trousers />,
            },
            {
                path: "/collection/set",
                element: <Set />,
            },
            {
                path: "/collection/bag",
                element: <Bag />,
            },
            {
                path: "/collection/shoes",
                element: <Shoes />,
            },
            {
                path: "/collection/orthers",
                element: <Orthers />,
            },
            {
                path: "/collection/free",
                element: <Free />,
            },
            {
                path: "/collection/product",
                element: <Product />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
