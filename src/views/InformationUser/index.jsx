import classNames from "classNames/bind";
import styles from "./InformationUser.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function InformationUser() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("tittle-infor")}>
          <h1 className={cx("tittle")}>Tài Khoản Của Bạn</h1>
        </div>
        <div className={cx("container")}>
          <div className={cx("container-infor")}>
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <th className={cx("title-name")}>Name</th>
                  <td className={cx("title-text")}>Thái Sơn</td>
                </tr>
                <tr>
                  <th className={cx("title-name")}>Email</th>
                  <td className={cx("title-text")}>
                    Nguyenthaison8x912@gmail.com
                  </td>
                </tr>
                <tr>
                  <th className={cx("title-name")}>Số Điện Thoại</th>
                  <td className={cx("title-text")}>0849805222</td>
                </tr>
                <tr>
                  <th>
                    <Link className={cx("btn-infor")}>Thay Đổi Thông Tin</Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationUser;
