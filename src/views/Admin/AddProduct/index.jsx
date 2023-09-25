import classNames from "classNames/bind";
import styles from "./AddProduct.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className={cx("wrapper-user")}>
      <div className={cx("wrapper-title-user")}>
        <h1 className={cx("title-user")}>Product Management</h1>
        <div className={cx("wrapper-bth-user")}>
          <Link className={cx("wrapper-bth-user")}>
            <button
              className={cx("btn-add")}
              onClick={() => handleDeleteClick(item.id)}
            >
              Add Product
            </button>
          </Link>
        </div>
      </div>
      <div>
        <table className={cx("table-user")}>
          <thead>
            <tr className={cx("table-user-text")}>
              <th className={cx("table-user-text-email")}>Name</th>
              <th className={cx("table-user-text-role")}>Image</th>
              <th className={cx("table-user-text-role")}>Size</th>
              <th className={cx("table-user-text-role")}>Price</th>
              <th className={cx("table-user-text-role")}>Discount</th>
              <th className={cx("table-user-text-role")}>Product Type</th>
              <th className={cx("table-user-text-role")}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={cx("body")}>
              <td className={cx("body-text-email")}>
                nguyenthaison8x912@gmail.com
              </td>

              <td className={cx("body-img")}>
                <img
                  className={cx("img")}
                  src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_1.png?v=670"
                  alt=""
                />
              </td>
              <td className={cx("body-text-role")}>S / M /L</td>
              <td className={cx("body-text-role")}>360.000đ</td>
              <td className={cx("body-text-role")}>75%</td>
              <td className={cx("body-text-role")}>Áo</td>
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
            <tr className={cx("body")}>
              <td className={cx("body-text-email")}>
                nguyenthaison8x912@gmail.com
              </td>

              <td className={cx("body-img")}>
                <img
                  className={cx("img")}
                  src="https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_1.png?v=670"
                  alt=""
                />
              </td>
              <td className={cx("body-text-role")}>S / M /L</td>
              <td className={cx("body-text-role")}>360.000đ</td>
              <td className={cx("body-text-role")}>75%</td>
              <td className={cx("body-text-role")}>Áo</td>
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

export default AddProduct;
