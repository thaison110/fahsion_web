import classNames from "classNames/bind";
import styles from "./Shirt.module.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function Shirt() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Gửi yêu cầu GET đến API để lấy danh sách sản phẩm
        axios
            .get("http://localhost:1099/api/product")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy danh sách sản phẩm:", error);
            });
        console.log(products);
    }, []);

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
                    <div className={cx("product")}>
                        <div className={cx("production")}>
                            {products.map((product) => (
                                <Link
                                    to={`/collection/product?id=${product._id}`}
                                    key={product._id}
                                >
                                    <div className={cx("product")}>
                                        <div className={cx("img-product")}>
                                            <img
                                                className={cx("img")}
                                                src={product.url}
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx("text-product")}>
                                            <div
                                                className={cx("title-product")}
                                            >
                                                <strong>{product.name}</strong>
                                                {/* <a href="/">
                                                <strong>Thắt Lưng</strong>
                                            </a> */}
                                            </div>
                                            <p>{product.price}</p>
                                        </div>
                                    </div>
                                </Link>
                                // <li key={product._id}>
                                //     <h3>{product.name}</h3>
                                //     <p>Giá: {product.price}</p>
                                //     <p>Mô tả: {product.description}</p>
                                // </li>
                            ))}
                            <Link to="/collections/shirt">
                                <div className={cx("product")}>
                                    <div className={cx("img-product")}>
                                        <img
                                            className={cx("img")}
                                            src="https://product.hstatic.net/200000201725/product/z4333049270612_bb97b2e909bb66acc5233423738e62aa_350d68c3d5dd4b9f98d506c5bb9f428d_grande.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className={cx("text-product")}>
                                        <div className={cx("title-product")}>
                                            {/* <a href="/">
                                                <strong>Thắt Lưng</strong>
                                            </a> */}
                                        </div>
                                        <p>350.000đ</p>
                                    </div>
                                </div>
                            </Link>
                            <div className={cx("product")}>
                                <div className={cx("img-product")}>
                                    <img
                                        className={cx("img")}
                                        src="https://product.hstatic.net/200000201725/product/z4333105274362_cc3988a3eee03253cd66db24c51317b0_f546dc0d7ce84b8bac0cced9cf8b1257_grande.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className={cx("text-product")}>
                                    <div className={cx("title-product")}>
                                        <a href="/">
                                            <strong>Thắt Lưng</strong>
                                        </a>
                                    </div>
                                    <p>350.000đ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shirt;
