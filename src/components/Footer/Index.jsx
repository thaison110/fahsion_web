import classNames from "classNames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("content")}>
                    <div className={cx("cl01")}>
                        <h1 className={cx("title")}>
                            CÔNG TY CỔ PHẦN THỜI TRANG BADBOY
                        </h1>
                        <p className={cx("text")}>
                            Địa chỉ: Số 1, ngõ 40, tổ 14 phố Nguyễn Thị Định,
                            Phường Nhân Chính, Quận Thanh Xuân, Hà Nội
                        </p>
                        <p className={cx("text")}>
                            Người Đại Diện: Nguyễn Thái Sơn
                        </p>
                        <p className={cx("text")}>
                            Mã số thuế: 0106533311, ngày cấp ĐKKD 08/05/2014.
                        </p>
                        <p className={cx("text")}>
                            Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.
                        </p>
                        <img
                            src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png"
                            alt=""
                        />
                    </div>
                    <div className={cx("cl01")}>
                        <h1 className={cx("title")}>CHÍNH SÁCH </h1>
                        <p className={cx("text")}>CS ĐỔI TRẢ</p>
                        <p className={cx("text")}>KT ĐƠN HÀNG </p>
                        <p className={cx("text")}>MEMBERS </p>
                    </div>
                    <div className={cx("cl01")}>
                        <h1 className={cx("title")}>CỬA HÀNG </h1>
                        <p className={cx("text")}>HÀ NỘI</p>
                        <p className={cx("text")}>HẢI PHÒNG </p>
                        <p className={cx("text")}>TP. VINH </p>
                        <p className={cx("text")}>TP. HỒ CHÍ MINH </p>
                        <p className={cx("text")}>TP. CẦN THƠ </p>
                    </div>
                    <div className={cx("cl01")}>
                        <h1 className={cx("title")}>TƯ VẤN BÁN HÀNG </h1>
                        <a to="tel:0849805222" className={cx("text")}>
                            GỌI NGAY: 0849.805.222
                        </a>
                        <p className={cx("text")}>
                            Tất cả các ngày trong tuần{" "}
                        </p>
                        <div className={cx("media-icon")}>
                            <Link to="https://fb.com/thaison0110">
                                <FontAwesomeIcon
                                    className={cx("icon-facebook")}
                                    icon={faFacebookF}
                                    size="2x"
                                />
                            </Link>
                            <Link to="https://fb.com/thaison0110">
                                <FontAwesomeIcon
                                    className={cx("icon-instagram")}
                                    icon={faInstagram}
                                    size="2x"
                                />
                            </Link>
                            <Link to="https://fb.com/thaison0110">
                                <FontAwesomeIcon
                                    className={cx("icon")}
                                    icon={faYoutube}
                                    size="2x"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
