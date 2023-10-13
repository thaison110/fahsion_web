import ManagerProduct from "./Product/Index";
import axios from "axios";
import classNames from "classNames/bind";
import styles from "./AddProduct.module.scss";
const cx = classNames.bind(styles);
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";

function ProductList() {
    const [products, setProducts] = useState([]);
    const types = ["Quần", "Áo"];

    useEffect(() => {
        // Gửi yêu cầu GET đến API để lấy danh sách sản phẩm
        const userId = localStorage.getItem("userId");
        const getData = () => {
            axios
                .get("http://localhost:1099/api/product", {
                    params: {
                        userId: userId,
                    },
                })
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
                });
        };
        // Fetch the updated user list every 1 seconds
        const interval = setInterval(getData, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    const handleDeleteClick = (product) => {
        // console.log(product);
        axios
            .delete(
                `http://localhost:1099/api/products/${product._id}/${product.userId}`
            )
            .then(() => {
                // onDelete(product._id); // Gọi hàm onDelete để cập nhật trạng thái ở phía React
            })
            .catch((error) => {
                console.error("Lỗi khi xóa sản phẩm:", error);
            });
    };

    return (
        <div>
            <div>
                {products.length == 0 ? (
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <table className={cx("table-user")}>
                        <thead>
                            <tr className={cx("table-user-text")}>
                                <th className={cx("table-user-text-email")}>
                                    Name
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Image
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Size
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Price
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Discount
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Product Type
                                </th>
                                <th className={cx("table-user-text-role")}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr className={cx("body")} key={product._id}>
                                    <td className={cx("body-text-email")}>
                                        {product.name}
                                    </td>

                                    <td className={cx("body-img")}>
                                        <img
                                            className={cx("img")}
                                            src={
                                                product.url
                                                    ? product.url
                                                    : "https://theme.hstatic.net/200000201725/1000749045/14/icon_policy_1.png?v=670"
                                            }
                                            alt=""
                                        />
                                    </td>
                                    <td className={cx("body-text-role")}>
                                        {product.size}
                                    </td>
                                    <td className={cx("body-text-role")}>
                                        {product.price}
                                    </td>
                                    <td className={cx("body-text-role")}>
                                        {product.discount}%
                                    </td>
                                    <td className={cx("body-text-role")}>
                                        {types[product.type]}
                                    </td>
                                    <td>
                                        <button
                                            className={cx("btn-edit")}
                                            // onClick={handleEditClick(item)}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className={cx("btn-remove")}
                                            onClick={() =>
                                                handleDeleteClick(product)
                                            }
                                        >
                                            Xóa
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

function AddProduct() {
    return (
        <div className={cx("wrapper-user")}>
            <div className={cx("wrapper-title-user")}>
                <h1 className={cx("title-user")}>Product Management</h1>
                <div className={cx("wrapper-bth-user")}>
                    <ManagerProduct />
                </div>
            </div>
            <ProductList />
        </div>
    );
}

export default AddProduct;
