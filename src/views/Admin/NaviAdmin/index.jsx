import classNames from "classNames/bind";
import styles from "./NaviAdmin.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";

function NaviAdmin() {
  return (
    <div className={cx("wrapper-navi")}>
      <div className={cx("inner")}>
        <div>
          <div className={cx("Usermanager")}>
            <Link to="/admin/usermanger">
              <button className={cx("User")}>User Manager</button>
            </Link>
          </div>
          <div className={cx("Usermanager")}>
            <Link to="/admin/productmanager">
              <button className={cx("Product")}>Product Manager</button>
            </Link>
          </div>
          <div className={cx("Usermanager")}>
            <Link to="/admin/odermanager">
              <button className={cx("Oder")}>Order Management</button>
            </Link>
          </div>
          <div className={cx("Usermanager")}>
            <Link to="/">
              <button className={cx("Oder")}>Đăng Xuất</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NaviAdmin;
