import classNames from "classNames/bind";
import styles from "./AdminHeader.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo01.png";

const cx = classNames.bind(styles);

function AdminHeader() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <Link className={cx("logo-header")}>
          <img className={cx("logo")} src={logo} to="/admin" />
        </Link>
      </div>
    </div>
  );
}

export default AdminHeader;
