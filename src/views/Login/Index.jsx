import classNames from "classNames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

import Cookies from "js-cookie"; // Import js-cookie library
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const cx = classNames.bind(styles);

function Login() {
    const [data, setData] = useState({});
    useEffect(() => {
        const cookieValue = Cookies.get("isLoggedIn");
        if (cookieValue === "true") {
            window.location.href = "/";
        }
    }, []);

    const handleLogin = async () => {
        const email = data.email;
        const password = data.password;
        try {
            await axios
                .post("http://localhost:1099/api/login", {
                    email,
                    password,
                })
                .then((response) => {
                    const user = response.data.user;
                    // The response from the server will be available here
                    // console.log(user.userId); // This may contain information like user details or authentication status
                    const userId = user.userId;
                    localStorage.setItem("userId", userId);
                    Cookies.set("isLoggedIn", "true");

                    window.location.href = "/";
                    toast.success("Login successfully");
                })
                .catch((error) => {
                    // Handle any errors that occurred during the request
                    // console.error("Error:", error);
                    toast.error("Invalid credentials!");
                });
        } catch (error) {
            // alert("Invalid credentials");
            toast.error("Invalid credentials!");
        }
    };
    const handleInputs = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    };
    // const handleSubmit = (event) => {
    //     createUserWithEmailAndPassword(auth, data.email, data.password);
    //     then((response) => {
    //         console.log(response.user);
    //     }).catch((err) => {
    //         alert(err.message);
    //     });
    // };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("form")}>
                    <div className={cx("login-form")}>
                        <div>
                            <h1 className={cx("title")}>Đăng Nhập</h1>
                        </div>
                        <p className={cx("message")}>
                            Trở thành thành viên của BadBoy ngay <br />{" "}
                            <Link to="/signup">Đăng Ký Ngay</Link>
                        </p>
                        <p className={cx("title-form")}>
                            {" "}
                            Email hoặc tên người dùng
                        </p>
                        <div>
                            <input
                                className={cx("email")}
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>
                        <p className={cx("title-form")}> Mật Khẩu</p>
                        <div>
                            <input
                                className={cx("password")}
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(event) => handleInputs(event)}
                            />
                        </div>
                        <div>
                            <button
                                className={cx("btn-login")}
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                            <Link
                                href="/signup"
                                className={cx("btn-login-forgot")}
                            >
                                Quên Mật Khẩu?
                            </Link>
                        </div>

                        <Link>
                            <Link className={cx("media-login")}>
                                {" "}
                                Đăng nhập bằng Facebook
                            </Link>
                            <FontAwesomeIcon
                                className={cx("facebook-login")}
                                icon={faFacebook}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
