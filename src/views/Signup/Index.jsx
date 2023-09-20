import classNames from "classNames/bind";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie"; // Import js-cookie library

const cx = classNames.bind(styles);

function Signup() {
    useEffect(() => {
        const cookieValue = Cookies.get("isLoggedIn");
        if (cookieValue === "true") {
            window.location.href = "/";
        }
    }, []);
    const [data, setData] = useState({
        email: "",
        password: "",
        userName: "",
        phone: "",
    });
    const handleInputs = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    };

    const checkData = (input) => {
        if (input) return true;
        return false;
    };

    const handleSubmit = async () => {
        try {
            await axios.post("http://localhost:1099/api/register", data);
            // alert("Registration successful");
            toast.success("Registration successfully");
            setData({ email: "", password: "", userName: "", phone: "" });
        } catch (error) {
            // alert("Error registering user");
            toast.error("Email has been registered account!");
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("left")}>
                    <h1>TẠO TÀI KHOẢN</h1>
                </div>
                <div className={cx("right")}>
                    <div className={cx("form")}>
                        <div>
                            <input
                                className={cx("frist-name")}
                                placeholder="Họ và Tên"
                                required
                                name="userName"
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>
                        <div>
                            <input
                                className={cx("Last-name")}
                                type="phone"
                                name="phone"
                                required
                                placeholder="Số Điện Thoại"
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>

                        <div>
                            <input
                                className={cx("email")}
                                type="email"
                                name="email"
                                required
                                placeholder="Email"
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>
                        <div>
                            <input
                                className={cx("password")}
                                type="text"
                                placeholder="Mật Khẩu"
                                name="password"
                                required
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>
                        <div>
                            <button
                                onClick={handleSubmit}
                                className={cx("btn-login")}
                            >
                                Đăng Ký
                            </button>
                        </div>
                        <p>
                            {" "}
                            <Link className={cx("message")} to="/">
                                Quay về trang chủ?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
