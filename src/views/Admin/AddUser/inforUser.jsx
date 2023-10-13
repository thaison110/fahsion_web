import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const UserModal = ({ user, show, handleClose, data, handleAddUser }) => {
    const [role, setRole] = useState(user.role);
    const handleSelectChange = (event) => {
        setRole(event.target.value);
    };

    useEffect(() => {
        console.log("User useEffect: ", user);
    }, [show]);

    const handleSubmit = () => {
        const userUpdate = { ...user, role: role };
        console.log(userUpdate);
        axios
            .put(`http://localhost:1099/api/users/${user._id}`, userUpdate)
            .then((response) => {
                toast.success(
                    `Thông tin tài khoản ${user.email} đã được cập nhật`
                );

                console.log(
                    "Thông tin người dùng đã được cập nhật",
                    response.data
                );
                handleClose();
            })
            .catch((error) => {
                toast.error("Lỗi khi cập nhật thông tin người dùng");
                console.error("Lỗi khi cập nhật thông tin người dùng", error);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={user.email} readOnly />
                    </Form.Group>
                    <Form.Group controlId="role">
                        <Form.Label>Vai trò</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={handleSelectChange}
                            value={role}
                        >
                            <option value={0}>Người dùng</option>
                            <option value={1}>Quản trị viên</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="success" onClick={handleSubmit}>
                    Finish
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserModal;
