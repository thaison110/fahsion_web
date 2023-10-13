import classNames from "classNames/bind";
import styles from "./AddUser.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import UserModal from "./inforUser";

const cx = classNames.bind(styles);
function DeleteUser({ user }) {
    const handleDelete = () => {
        // Make an HTTP DELETE request to delete the user account on the server.
        fetch(`http://localhost:1099/api/users/${user._id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle success or error here
                console.log(data);
                toast.success("Delete successfully");
            })
            .catch((error) => console.error(error));
    };

    return (
        <button className={cx("btn-remove")} onClick={handleDelete}>
            Delete
        </button>
    );
}

function EditUser({ user }) {
    const [showModal, setShowModal] = useState(false);
    const handleEdit = () => {
        setShowModal(true);
    };

    return (
        <>
            <button className={cx("btn-edit")} onClick={handleEdit}>
                Edit
            </button>
            {showModal && (
                <UserModal
                    user={user}
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                />
            )}
        </>
    );
}

function AddUser() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            fetch("http://localhost:1099/api/users") // Replace with your actual API endpoint
                .then((response) => response.json())
                .then((data) => setUsers(data))
                .catch((error) => console.error(error));
        };
        // Initial fetch when the component mounts
        fetchUsers();

        // Fetch the updated user list every 1 seconds
        const interval = setInterval(fetchUsers, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={cx("wrapper-user")}>
            <div className={cx("wrapper-title-user")}>
                <h1 className={cx("title-user")}>User Management</h1>
                {/* <div className={cx("wrapper-bth-user")}>
                    <Link className={cx("wrapper-bth-user")}>
                        <button
                            className={cx("btn-add")}
                            onClick={() => handleDeleteClick(item.id)}
                        >
                            Add User
                        </button>
                    </Link>
                </div> */}
            </div>
            <div>
                <table className={cx("table-user")}>
                    <thead>
                        <tr className={cx("table-user-text")}>
                            <th className={cx("table-user-text-email")}>
                                Email
                            </th>
                            <th className={cx("table-user-text-role")}>
                                Vai trò
                            </th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className={cx("body")} key={user._id}>
                                <td className={cx("body-text-email")}>
                                    {user.email}
                                </td>
                                <td className={cx("body-text-role")}>
                                    {user.role === 0
                                        ? "Người dùng"
                                        : user.role === 1
                                        ? "Quản trị viên"
                                        : "Quản lý"}
                                </td>
                                {user.role <
                                    localStorage.getItem("userRole") && (
                                    <td>
                                        <EditUser user={user} />
                                        <DeleteUser user={user} />
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddUser;
