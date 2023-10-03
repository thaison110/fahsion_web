import classNames from "classNames/bind";
import styles from "./Bag.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Bag() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("section01")}>
          <div className={cx("background")}></div>
        </div>
        <div className={cx("title")}>
          <a className={cx("title")} href="/">
            {" "}
            ÁO
          </a>
        </div>
        <div className={cx("section02")}>
          <div className={cx("production")}>
            <Link className={cx("box01")} to="/collection/product">
              <div className={cx("product")} href="">
                <div className={cx("img-product")}>
                  <img
                    className={cx("img")}
                    src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                    alt=""
                  />
                </div>
                <div className={cx("text-product")}>
                  <div className={cx("title-product")}>
                    <a
                      className={cx("title-product")}
                      href="/collection/product"
                    >
                      <strong>Thắt Lưng</strong>
                    </a>
                  </div>
                  <p className={cx("title-price")}>350.000đ</p>
                </div>
              </div>
            </Link>
            <Link className={cx("box01")} to="/collection/product">
              <div className={cx("product")} href="">
                <div className={cx("img-product")}>
                  <img
                    className={cx("img")}
                    src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                    alt=""
                  />
                </div>
                <div className={cx("text-product")}>
                  <div className={cx("title-product")}>
                    <a
                      className={cx("title-product")}
                      href="/collection/product"
                    >
                      <strong>Thắt Lưng</strong>
                    </a>
                  </div>
                  <p className={cx("title-price")}>350.000đ</p>
                </div>
              </div>
            </Link>
            <Link className={cx("box01")} to="/collection/product">
              <div className={cx("product")} href="">
                <div className={cx("img-product")}>
                  <img
                    className={cx("img")}
                    src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                    alt=""
                  />
                </div>
                <div className={cx("text-product")}>
                  <div className={cx("title-product")}>
                    <a
                      className={cx("title-product")}
                      href="/collection/product"
                    >
                      <strong>Thắt Lưng</strong>
                    </a>
                  </div>
                  <p className={cx("title-price")}>350.000đ</p>
                </div>
              </div>
            </Link>
            <Link className={cx("box01")} to="/collection/product">
              <div className={cx("product")} href="">
                <div className={cx("img-product")}>
                  <img
                    className={cx("img")}
                    src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                    alt=""
                  />
                </div>
                <div className={cx("text-product")}>
                  <div className={cx("title-product")}>
                    <a
                      className={cx("title-product")}
                      href="/collection/product"
                    >
                      <strong>Thắt Lưng</strong>
                    </a>
                  </div>
                  <p className={cx("title-price")}>350.000đ</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
