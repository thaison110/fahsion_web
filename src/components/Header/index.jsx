import classNames from "classNames/bind";
import styles from "./Header.module.scss";
import logo from "../../assets/image/logo01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import {
    faCartShopping,
    faMagnifyingGlass,
    faPhone,
    faUser,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie"; // Import js-cookie library
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";

const cx = classNames.bind(styles);

function Header() {
    // Function to handle successful logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const cookieValue = Cookies.get("isLoggedIn");
        if (cookieValue === "true") {
            setIsLoggedIn(true);
        }
    }, []);
    const handleLogout = () => {
        // Remove the isLoggedIn cookie
        Cookies.remove("isLoggedIn");
        localStorage.removeItem("userId");
        window.location.href = "/login";
    };

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link className={cx("logo-header")}>
                    <img className={cx("logo")} src={logo} to="/" />
                </Link>
                <div className={cx("right-header")}>
                    <div className={cx("search-header")}>
                        <div className={cx("search")}>
                            <div className={cx("input-search")}>
                                <input
                                    className={cx("input")}
                                    placeholder="Tìm kiếm sản phẩm..."
                                ></input>
                                <button className={cx("btn-input")}>
                                    <FontAwesomeIcon
                                        className={cx("btn")}
                                        icon={faMagnifyingGlass}
                                    />
                                </button>
                            </div>
                        </div>
                        <div className={cx("menu-header")}>
                            <Popup
                                trigger={
                                    <button className={cx("none")}>
                                        <FontAwesomeIcon
                                            className={cx("menu-icon")}
                                            icon={faBars}
                                        />
                                    </button>
                                }
                                position="bottom center"
                            >
                                <div>
                                    <Link className={cx("text")} to="/">
                                        Trang Chủ
                                    </Link>
                                    <Link
                                        className={cx("text")}
                                        to="/collection"
                                    >
                                        Bộ Sưu Tập
                                    </Link>
                                    <Link className={cx("text")} to="/shirt">
                                        Áo Nam
                                    </Link>
                                    <Link className={cx("text")} to="/trousers">
                                        Quần Nam{" "}
                                    </Link>
                                    <Link className={cx("text")} to="/sale">
                                        Khuyến Mãi{" "}
                                    </Link>
                                    <Link className={cx("text")} to="/about">
                                        Về Chúng Tôi{" "}
                                    </Link>
                                </div>
                            </Popup>
                        </div>
                        <div className={cx("icon-user")}>
                            <div className={cx("icon")}>
                                <Link to="Cart">
                                    <FontAwesomeIcon
                                        className={cx("cart")}
                                        icon={faCartShopping}
                                    />
                                </Link>

                                <Link to="tel:0849805222">
                                    <FontAwesomeIcon
                                        className={cx("Phone")}
                                        icon={faPhone}
                                    />
                                </Link>
                                {!isLoggedIn ? (
                                    <Link to="login">
                                        <FontAwesomeIcon
                                            className={cx("User")}
                                            icon={faUser}
                                        />
                                    </Link>
                                ) : (
                                    <Link onClick={handleLogout}>
                                        <FontAwesomeIcon
                                            icon={faSignOutAlt}
                                            className={cx("User")}
                                        />
                                    </Link>
                                )}
                                {/* <Popup
                                    trigger={
                                        <Link to="login">
                                            <FontAwesomeIcon
                                                className={cx("User")}
                                                icon={faUser}
                                            />
                                        </Link>
                                    }
                                >
                                    <div className={cx("inner")}>
                                        <div className={cx("form")}>
                                            <div>
                                                <h1 className={cx("title")}>
                                                    Login Into Your Account
                                                </h1>
                                            </div>
                                            <div>
                                                <input
                                                    className={cx("email")}
                                                    type="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    className={cx("password")}
                                                    type="password"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    className={cx("btn-login")}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <p className="message">
                                                Not Registered?{" "}
                                                <Link to="/signup">
                                                    Create Account
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </Popup> */}
                            </div>
                        </div>
                    </div>
                    <div className={cx("navbar")}>
                        <nav className={cx("navi")}>
                            <Link className={cx("text")} to="/">
                                Trang Chủ
                            </Link>
                            <Popup
                                trigger={
                                    <Link className={cx("text")} to="">
                                        Sản Phẩm
                                    </Link>
                                }
                            >
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/shirt"
                                    >
                                        Áo
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/trousers"
                                    >
                                        Quần
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/set"
                                    >
                                        Set Đồ
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/bag"
                                    >
                                        Balo - Túi Xách
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/shoes"
                                    >
                                        Giày Da
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/collection/orthers"
                                    >
                                        Phụ Kiện Khác
                                    </Link>
                                </div>
                            </Popup>
                            <Link className={cx("text")} to="/free">
                                Mua 1 tặng 1
                            </Link>
                            <Popup
                                trigger={
                                    <Link className={cx("text")}>
                                        Sale Up To 75%
                                    </Link>
                                }
                            >
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/sale/hang-he-sale"
                                    >
                                        HÀNG HÈ SALE
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/sale/sale-75"
                                    >
                                        SALE 75%
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/sale/sale-50"
                                    >
                                        SALE 50%
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/sale/sale-30"
                                    >
                                        SALE 30%
                                    </Link>
                                </div>
                            </Popup>
                            <Popup
                                trigger={
                                    <Link className={cx("text")} to="">
                                        Địa Chỉ Store
                                    </Link>
                                }
                            >
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/location/ha-noi"
                                    >
                                        Hà Nội
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/location/hai-phong"
                                    >
                                        Hải Phòng
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/location/vinh"
                                    >
                                        Tp.Vinh
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/location/ho-chi-minh"
                                    >
                                        Tp. Hồ Chí Minh
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        className={cx("text1")}
                                        to="/location/can-tho"
                                    >
                                        Cần Thơ
                                    </Link>
                                </div>
                            </Popup>
                            <Link className={cx("text")} to="/primary">
                                H.Dẫn - C.Sách
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
