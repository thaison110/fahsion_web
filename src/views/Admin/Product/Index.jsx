import classNames from "classNames/bind";
import styles from "./ManagerProduct.module.scss";
import ProductModal from "./AddProduct";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);

function ManagerProduct() {
    const [showModal, setShowModal] = useState(false);
    const [datasets, setDatasets] = useState([]);

    const handleAddDataset = (newDataset) => {
        // Add the new dataset to the state
        setDatasets((prevDatasets) => [newDataset, ...prevDatasets]);
    };
    useEffect(() => {
        const getProductUser = async () => {
            try {
                const url = "http://localhost:1099/api/product";
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    // console.log("userID Null!");
                }
                // console.log("userId", userId);
                await axios
                    .get(url, {
                        params: {
                            userId: userId,
                        },
                    })
                    .then((response) => {
                        // Xử lý phản hồi từ máy chủ nếu cần
                        setDatasets(response.data);

                        console.log("Phản hồi từ máy chủ:", response.data);
                    })
                    .catch((error) => {
                        // Xử lý lỗi nếu có
                        // console.error("Đã xảy ra lỗi:", error.message);
                    });
            } catch (err) {
                // console.error(err);
            }
        };

        getProductUser();
    }, []);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}></div>
            <div>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => setShowModal(true)}
                >
                    Add Product
                </button>
            </div>
            <ProductModal
                show={showModal}
                handleClose={() => setShowModal(false)}
                handleAddDataset={handleAddDataset}
            />
        </div>
    );
}

export default ManagerProduct;
