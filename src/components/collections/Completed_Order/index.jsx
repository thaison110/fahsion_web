import classNames from "classNames/bind";
import styles from "./Completed_Order.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function Completed_Order() {
  return (
    <div className={cx("wrapper-completed")}>
      <div className={cx("wrapper-inner")}>
        <div className={cx("infor-order")}>
          <div className={cx("titler")}>
            <h1>Thông tin đặt hàng</h1>
          </div>
          <div className={cx("body-infor")}>
            <div className={cx("infor")}>
              <p className={cx("text")}>Nguyễn Thái Sơn</p>
            </div>
            <div className={cx("infor")}>
              <p className={cx("text")}>0849805222</p>
            </div>
            <div className={cx("infor")}>
              <p className={cx("text")}>son@gmail.com</p>
            </div>
            <div className={cx("infor")}>
              <p className={cx("text")}>Nam Lộc Nam Đàn Nghệ An</p>
            </div>
            <div className={cx("infor")}>
              <p className={cx("text")}>Thắt lưng</p>
            </div>
            <div className={cx("infor")}>
              <p className={cx("text")}>360.000đ</p>
            </div>
          </div>
        </div>
        <div className={cx("btn-order")}>
          <h3 className={cx("link-btn")}>
            Cám ơn mình đã đặt hàng bên em. Nhân viên bên em sẽ gọi điện và xác
            nhận đơn hàng cho mình ạ! Chúc chị ngày mới tốt lành
          </h3>
          <Link className={cx("link-btn")} to="/">
            <button className={cx("btn")}>Trở về trang chủ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Completed_Order;
