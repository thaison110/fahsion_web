import classNames from "classNames/bind";
import styles from "./AdminDashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function AdminDashboard() {
  return (
    <div className={cx("wrapper-admin")}>
      <div className={cx("inner")}>
        <div className={cx("title-section01")}>
          <h3 className={cx("title")}>Chào Mừng Bạn Đến Với Trang Quản Trị</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
