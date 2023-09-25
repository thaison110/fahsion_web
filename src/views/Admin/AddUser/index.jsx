import classNames from "classNames/bind";
import styles from "./AddUser.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function AddUser() {
  return (
    <div className={cx("wrapper-user")}>
      <div className={cx("wrapper-title-user")}>
        <h1 className={cx("title-user")}>User Management</h1>
        <div className={cx("wrapper-bth-user")}>
          <Link className={cx("wrapper-bth-user")}>
            <button
              className={cx("btn-add")}
              onClick={() => handleDeleteClick(item.id)}
            >
              Add User
            </button>
          </Link>
        </div>
      </div>
      <div>
        <table className={cx("table-user")}>
          <thead>
            <tr className={cx("table-user-text")}>
              <th className={cx("table-user-text-email")}>Email</th>
              <th className={cx("table-user-text-role")}>Vai trò</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr className={cx("body")}>
              <td className={cx("body-text-email")}>
                nguyenthaison8x912@gmail.com
              </td>
              <td className={cx("body-text-role")}>Admin</td>
              <td>
                <button
                  className={cx("btn-edit")}
                  onClick={() => handleEditClick(item)}
                >
                  Sửa
                </button>
                <button
                  className={cx("btn-remove")}
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
            <tr>
              <td className={cx("body-text-email")}>
                nguyenthaison8x912@gmail.com
              </td>
              <td className={cx("body-text-role")}>Admin</td>
              <td>
                <button
                  className={cx("btn-edit")}
                  onClick={() => handleEditClick(item)}
                >
                  Sửa
                </button>
                <button
                  className={cx("btn-remove")}
                  onClick={() => handleDeleteClick(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddUser;
