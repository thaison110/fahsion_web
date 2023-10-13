import React, { useEffect, useState } from "react";
import axios from "axios";

import classNames from "classNames/bind";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Cart() {
    const [oldOrders, setOldOrders] = useState([]);
    const [totalBill, setTotalBill] = useState(0);
    const [payment, setPayment] = useState();
    useEffect(() => {
        // Call the function to get old orders when the component mounts
        const fetchOldOrders = async () => {
            try {
                const id_user = localStorage.getItem("userId");
                const orders = await getOldOrders(id_user);
                setOldOrders(orders);
                const cost = orders.reduce(
                    (total, order) => total + order.price,
                    0
                );
                const id_orders = orders.map((order) => order._id);
                console.log("id_orders", id_orders);
                setTotalBill(cost);
                setPayment({
                    ...payment,
                    order_ids: id_orders,
                    user_id: id_user,
                    payment_total: cost,
                });
            } catch (error) {
                console.error("Error fetching old orders:", error);
            }
        };
        fetchOldOrders();
    }, []);

    // Function to get old orders by user ID
    const getOldOrders = async (id_user) => {
        try {
            const response = await axios.get(
                `http://localhost:1099/api/orders/user/${id_user}`
            );
            // console.log("response", response.data);
            return response.data;
        } catch (error) {
            throw error;
        }
    };
    const confirmPayment = async (e) => {
        console.log(payment);
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:1099/api/payments",
                payment
            );
            // Handle success or error
            console.log("Payment created:", response.data);
            window.location.href = `/confirm?id=${response.data._id}`;
        } catch (error) {
            console.error("Error creating payment:", error);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section1")}>
                    <div className={cx("title")}>Giỏ Hàng Của Bạn</div>
                </div>
                <div className={cx("section2")}>
                    <div className={cx("section2-right")}>
                        {oldOrders.map((order) => (
                            <div className={cx("product")} key={order._id}>
                                <div className={cx("")}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className={cx("img")}></th>
                                                <th className={cx("item")}></th>
                                                <th
                                                    className={cx("remove")}
                                                ></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className={cx("img")}>
                                                    <div
                                                        className={cx(
                                                            "img-product"
                                                        )}
                                                    >
                                                        <a href="">
                                                            <img
                                                                className={cx(
                                                                    "img-product"
                                                                )}
                                                                src="https://360.com.vn/wp-content/uploads/2023/04/Tach-nen-APHTK422-Copy-1.png"
                                                            />
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className={cx("item")}>
                                                    <h3 className={cx("text")}>
                                                        {order.product_id}
                                                    </h3>
                                                    <p className={cx("text")}>
                                                        <span>S / Xanh</span>
                                                    </p>
                                                    <p className={cx("price")}>
                                                        {order.price + " "}đồng
                                                    </p>
                                                </td>
                                                <td
                                                    className={cx("remove")}
                                                ></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx("section2-left")}>
                        <div className={cx("infor-product")}>
                            <div className={cx("infor-title")}>
                                <h1 className={cx("")}>Thông Tin Đơn Hàng</h1>
                            </div>
                            {oldOrders.map((order) => (
                                <div className={cx("total")} key={order._id}>
                                    <div className={cx("total-text")}>
                                        <h3>{order._id}</h3>
                                    </div>
                                    <div className={cx("total-price")}>
                                        <h3>{order.price}đ</h3>
                                    </div>
                                </div>
                            ))}

                            <div className={cx("total")}>
                                <div className={cx("total-text")}>
                                    <h3>Tổng Tiền:</h3>
                                </div>
                                <div className={cx("total-price")}>
                                    <h3>{totalBill} đ</h3>
                                </div>
                            </div>
                            <div className={cx("total-button")}>
                                <Link className={cx("button")} to="/confirm">
                                    <button
                                        className={cx("btn")}
                                        onClick={confirmPayment}
                                    >
                                        Đặt Hàng Ngay
                                    </button>
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
                            Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn
                            hệ thống
                        </p>
                        <p className={cx("text-p")}>
                            Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn)
                            trong 7 ngày trên toàn hệ thống.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart;
