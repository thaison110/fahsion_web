import classNames from "classNames/bind";
import styles from "./OrderManager.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function OrderManager() {
  return (
    <div className={cx("wrapper-user")}>
      <div className={cx("wrapper-title-user")}>
        <h1 className={cx("title-user")}>Order Manager</h1>
        <div className={cx("wrapper-bth-user")}>
          <Link className={cx("wrapper-bth-user")}>
            <button
              className={cx("btn-add")}
              onClick={() => handleDeleteClick(item.id)}
            >
              Report
            </button>
          </Link>
        </div>
      </div>
      <div>
        <table className={cx("table-user")}>
          <thead>
            <tr className={cx("table-user-text")}>
              <th className={cx("table-user-text-email")}>Name</th>
              <th className={cx("table-user-text-role")}>Adress</th>
              <th className={cx("table-user-text-email")}>Product</th>
              <th className={cx("table-user-text-email")}>Size</th>
              <th className={cx("table-user-text-email")}>Code</th>
              <th className={cx("table-user-text-email")}>Order status</th>
            </tr>
          </thead>
          <tbody>
            <tr className={cx("body")}>
              <td className={cx("body-text-email")}>Thái Sơn</td>
              <td className={cx("body-text-role")}>
                Ngách 1/36 phố Yên Lộ, Phường Yên Nghĩa, Quận HÀ Đông, Hà Nội
              </td>
              <td className={cx("body-text-role")}>Thắt Lưng</td>
              <td className={cx("body-text-role")}>S</td>
              <td className={cx("body-text-role")}>360.000đ</td>
              <td className={cx("body-text-role")}>Successful delivery</td>
            </tr>
            <tr className={cx("body")}>
              <td className={cx("body-text-email")}>Thái Sơn</td>
              <td className={cx("body-text-role")}>Nam Lộc Nam Đàn Nghệ An</td>
              <td className={cx("body-text-role")}>Thắt Lưng</td>
              <td className={cx("body-text-role")}>S</td>
              <td className={cx("body-text-role")}>360.000đ</td>
              <td className={cx("body-text-role")}>Successful delivery</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderManager;
