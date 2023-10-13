import classNames from "classNames/bind";
import styles from "./Confirm.module.scss";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const cx = classNames.bind(styles);

function Confirm() {
    const [formData, setFormData] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const paymentId = urlParams.get("id");
            await axios.put(
                `http://localhost:1099/api/payments/${paymentId}`,
                formData
            );
            // Handle success or error
            console.log("Payment updated successfully");
            window.location.href = "./confirm/completed";
        } catch (error) {
            console.error("Error updating payment:", error);
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("section01")}>
                    <div className={cx("title-section01")}>
                        <h3 className={cx("title")}>Thông Tin Giao Hàng</h3>
                    </div>
                </div>
                <div className={cx("section02")}>
                    <div className={cx("form-confirm")}>
                        <input
                            name="user_name"
                            className={cx("form")}
                            placeholder="Name"
                            onChange={handleInputChange}
                        ></input>
                        <input
                            name="phone"
                            className={cx("form")}
                            placeholder="Phone Number"
                            onChange={handleInputChange}
                        ></input>
                        <input
                            name="email"
                            className={cx("form")}
                            placeholder="Email"
                            onChange={handleInputChange}
                        ></input>
                        <input
                            name="address"
                            className={cx("form")}
                            placeholder="Address"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className={cx("btn-confirm")}>
                        <Link to="./completed">
                            <button
                                className={cx("btn")}
                                onClick={handleSubmit}
                            >
                                {" "}
                                Xác Nhận{" "}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
