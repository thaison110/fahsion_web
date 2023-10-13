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
    useEffect(() => {}, []);

    return (
        <div>
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
