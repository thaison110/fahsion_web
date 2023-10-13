import React, { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const ProductModal = ({ show, handleClose, handleAddDataset }) => {
    const [data, setData] = useState({
        userId: localStorage.getItem("userId"),
        type: 0,
    });
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {}, [refresh]);

    const submitNewDataset = (newProduct) => {
        const url = "http://localhost:1099/api/product";
        // Gửi yêu cầu POST với dữ liệu mới
        axios
            .post(url, newProduct)
            .then((response) => {
                toast.success("Thêm sản phẩm thành công");
                console.log("Dữ liệu mới đã được gửi thành công lên máy chủ.");
            })
            .catch((error) => {
                toast.error("Đã xảy ra lỗi khi gửi dữ liệu lên máy chủ");
                console.error(
                    "Đã xảy ra lỗi khi gửi dữ liệu lên máy chủ:",
                    error.message
                );
            });
    };

    const handleSubmit = async () => {
        // Validate form data and handle the product addition
        const userId = await localStorage.getItem("userId");
        await setData({ ...data, userId: userId });
        if (!userId) {
            // console.log("userID Null!");
        }
        console.log("userId", userId);
        console.log(data);
        await submitNewDataset(data);
        setData({
            userId: localStorage.getItem("userId"),
            type: 0,
        });
        setRefresh(!refresh);
        // handleAddDataset(newProduct);
        // handleClose();
    };
    const handleInputs = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            // size="lg"
            // scrollable={true}
            // centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={(event) => handleInputs(event)}
                        />
                    </Form.Group>
                    <Form.Group controlId="url">
                        <Form.Label>Url Image</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(event) => handleInputs(event)}
                            name="url"
                        />
                    </Form.Group>
                    <Form.Group controlId="size">
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(event) => handleInputs(event)}
                            name="size"
                        />
                    </Form.Group>

                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            defaultValue={0}
                            type="number"
                            onChange={(event) => handleInputs(event)}
                            name="price"
                        />
                    </Form.Group>

                    <Form.Group controlId="discount">
                        <Form.Label>Discount(%)</Form.Label>
                        <Form.Control
                            defaultValue={0}
                            type="number"
                            onChange={(event) => handleInputs(event)}
                            name="discount"
                        />
                    </Form.Group>

                    <Form.Group controlId="type">
                        <Form.Label>Product Type</Form.Label>
                        <Form.Control
                            as="select"
                            name="type"
                            onChange={(event) => handleInputs(event)}
                            className="form-select form-select-sm"
                        >
                            <option value={0}>Quần</option>
                            <option value={1}>Áo</option>
                        </Form.Control>
                    </Form.Group>

                    {/* <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            onChange={(event) => handleInputs(event)}
                        >
                            <option value={true}>Public</option>
                            <option value={false}>Private</option>
                        </Form.Control>
                    </Form.Group> */}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
