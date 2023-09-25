import classNames from "classNames/bind";
import styles from "./Confirm.module.scss";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";

const cx = classNames.bind(styles);

function Confirm() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("section01")}>
          <div className={cx("title-section01")}>
            <h3 className={cx("title")}>Thông Tin Giao Hàng</h3>
          </div>
        </div>
        <div className={cx("section02")}>
          <div className={cx("form-confirm")}>
            <input className={cx("form")} placeholder="Name"></input>
            <input className={cx("form")} placeholder="Phone Number"></input>
            <input className={cx("form")} placeholder="Email"></input>
            <input className={cx("form")} placeholder="Adress"></input>
          </div>
          <div className={cx("btn-confirm")}>
            <Link to="./completed">
              <button className={cx("btn")}> Xác Nhận </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
