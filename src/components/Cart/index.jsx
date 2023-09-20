import classNames from "classNames/bind";
import styles from "./Cart.module.scss";

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section")}>
                    <div className={cx("left")}>
                        <div className={cx("left-production")}></div>
                    </div>
                    <div className={cx("right")}>
                        <div className={cx("right-production")}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
