import { Outlet } from "react-router-dom";
import AdminDashboard from "../AdminDashboard/Index.Jsx";
import AdminHeader from "../AdminHeader";
import NaviAdmin from "../NaviAdmin";
import classNames from "classNames/bind";
import styles from "./AdminDefault.module.scss";

const cx = classNames.bind(styles);

function AdminDefault() {
  return (
    <div>
      <AdminHeader />
      <div className={cx("wrapper-layout")}>
        <div>
          <NaviAdmin />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDefault;
