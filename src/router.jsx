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
import Confirm from "./components/Confirm";
import AddUser from "./views/Admin/AddUser";
import AdminDashboard from "./views/Admin/AdminDashboard/Index.Jsx";
import AdminDefault from "./views/Admin/AdminDefault";
import AddProduct from "./views/Admin/AddProduct";
import OrderManager from "./views/Admin/OrderManager";
import InformationUser from "./views/InformationUser";
import Completed_Order from "./components/collections/Completed_Order";

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
        element: <InformationUser />,
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
      {
        path: "/confirm",
        element: <Confirm />,
      },
      {
        path: "/confirm/completed",
        element: <Completed_Order />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminDefault />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/usermanger",
        element: <AddUser />,
      },
      {
        path: "/admin/productmanager",
        element: <AddProduct />,
      },
      {
        path: "/admin/odermanager",
        element: <OrderManager />,
      },
    ],
  },
]);

export default router;
