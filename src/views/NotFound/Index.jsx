import classNames from "classNames/bind";
import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <h1>Trang Chưa Tồn Tại</h1>
            </div>
        </div>
    );
}

export default NotFound;
