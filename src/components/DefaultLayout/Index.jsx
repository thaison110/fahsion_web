import { Outlet } from "react-router-dom";
import { useStateContext } from "../../Contexts/ContextProvider.jsx";
import Header from "../Header";
import Footer from "../Footer/Index.jsx";
import HeaderUser from "../HeaderUsers/Index.jsx";

function DefaultLayout() {
    const { token } = useStateContext();

    return (
        <div>
            {!token && <Header />}
            {token && <HeaderUser />}
            <Outlet />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
