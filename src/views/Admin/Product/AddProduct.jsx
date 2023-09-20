import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const ProductModal = ({ show, handleClose, handleAddDataset }) => {
    const [data, setData] = useState({
        name: "",
        userId: "",
        description: "",
        urlImage: "",
        caption: "",
        dateCreate: new Date().toLocaleDateString(),
        dateUpdate: new Date().toLocaleDateString(),
        isPublic: false,
        shareCode: "",
    });

    const submitNewDataset = (newProduct) => {
        const url = "http://localhost:1099/api/product";
        // Gửi yêu cầu POST với dữ liệu mới
        axios
            .post(url, newProduct)
            .then((response) => {
                // console.log("Dữ liệu mới đã được gửi thành công lên máy chủ.");
                // Xử lý phản hồi từ máy chủ nếu cần
            })
            .catch((error) => {
                // console.error(
                // "Đã xảy ra lỗi khi gửi dữ liệu lên máy chủ:",
                // error.message
                // );
            });
    };

    const handleSubmit = () => {
        // Validate form data and handle the product addition
        const userId = localStorage.getItem("userId");
        if (!userId) {
            // console.log("userID Null!");
        }
        // console.log("userId", userId);
        console.log(data);
        // submitNewDataset(data);
        // handleAddDataset(newProduct);
        // handleClose();
    };
    const handleInputs = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput });
    };

    return (
        <Modal show={show} onHide={handleClose}>
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
                    <Form.Group controlId="urlImage">
                        <Form.Label>Url Image</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(event) => handleInputs(event)}
                            name="urlImage"
                        />
                    </Form.Group>
                    <Form.Group controlId="caption">
                        <Form.Label>Caption</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(event) => handleInputs(event)}
                            name="caption"
                        />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            onChange={(event) => handleInputs(event)}
                        />
                    </Form.Group>
                    <Form.Group controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            as="select"
                            name="status"
                            onChange={(event) => handleInputs(event)}
                        >
                            <option value={true}>Public</option>
                            <option value={false}>Private</option>
                        </Form.Control>
                    </Form.Group>
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
