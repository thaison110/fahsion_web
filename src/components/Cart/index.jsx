import classNames from "classNames/bind";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("section1")}>
          <div className={cx("title")}>Giỏ Hàng Của Bạn</div>
        </div>
        <div className={cx("section2")}>
          <div className={cx("section2-right")}>
            <div className={cx("product")}>
              <div className={cx("")}>
                <table>
                  <thead>
                    <tr>
                      <th className={cx("img")}></th>
                      <th className={cx("item")}></th>
                      <th className={cx("remove")}></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("img")}>
                        <div className={cx("img-product")}>
                          <a href="">
                            <img
                              className={cx("img-product")}
                              src="https://360.com.vn/wp-content/uploads/2023/04/Tach-nen-APHTK422-Copy-1.png"
                            />
                          </a>
                        </div>
                      </td>
                      <td className={cx("item")}>
                        <h3 className={cx("text")}>Thắt Lưng</h3>
                        <p className={cx("text")}>
                          <span>S / Xanh</span>
                        </p>
                        <p className={cx("price")}>600.000đ</p>
                      </td>
                      <td className={cx("remove")}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={cx("product")}>
              <div className={cx("")}>
                <table>
                  <thead>
                    <tr>
                      <th className={cx("img")}></th>
                      <th className={cx("item")}></th>
                      <th className={cx("remove")}></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={cx("img")}>
                        <div className={cx("img-product")}>
                          <a href="">
                            <img
                              className={cx("img-product")}
                              src="https://360.com.vn/wp-content/uploads/2023/04/QGKTK401-7-Copy.jpg"
                            />
                          </a>
                        </div>
                      </td>
                      <td className={cx("item")}>
                        <h3 className={cx("text")}>Quần bò</h3>
                        <p className={cx("text")}>
                          <span>S / Xanh</span>
                        </p>
                        <p className={cx("price")}>680.000đ</p>
                      </td>
                      <td className={cx("remove")}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={cx("section2-left")}>
            <div className={cx("infor-product")}>
              <div className={cx("infor-title")}>
                <h1 className={cx("")}>Thông Tin Đơn Hàng</h1>
              </div>
              <div className={cx("total")}>
                <div className={cx("total-text")}>
                  <h3>Thắt lưng:</h3>
                </div>
                <div className={cx("total-price")}>
                  <h3>600.000đ</h3>
                </div>
              </div>
              <div className={cx("total")}>
                <div className={cx("total-text")}>
                  <h3>Quần bò:</h3>
                </div>
                <div className={cx("total-price")}>
                  <h3>600.000đ</h3>
                </div>
              </div>
              <div className={cx("total")}>
                <div className={cx("total-text")}>
                  <h3>Tổng Tiền:</h3>
                </div>
                <div className={cx("total-price")}>
                  <h3>1.280.000đ</h3>
                </div>
              </div>
              <div className={cx("total-button")}>
                <Link className={cx("button")} to="/confirm">
                  <button className={cx("btn")}>Đặt Hàng Ngay</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("section3")}>
          <div className={cx("section3-policy")}>
            <h3 className={cx("text-t")}>Chính sách mua hàng</h3>
            <p className={cx("text-p")}>
              Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.
            </p>
            <p className={cx("text-p")}>
              Sản phẩm còn đủ tem mác, chưa qua sử dụng.
            </p>
            <p className={cx("text-p")}>
              Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống
            </p>
            <p className={cx("text-p")}>
              Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày
              trên toàn hệ thống.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart;
