import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllUserErrors, deleteUser, getAllUser, updateUser } from "../store/slices/userSlice";
import UserCard from "../components/UserCard";
import EditUserForm from "../components/EditUserForm";
import Pagination from "../components/Pagination";

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.user);

    const [page, setPage] = useState(1);
    const [editUser, setEditUser] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        dispatch(getAllUser(page));
    }, [dispatch, page]);

    useEffect(() => {
        if (error) {
            dispatch(clearAllUserErrors());
        }
    }, [dispatch, error]);

    const usersArray = user && Array.isArray(user.data) ? user.data : [];
    const totalPages = user?.total_pages || 1;

    const handlePrev = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage((next) => next + 1);
    };

    const handleDelete = (id) => {
        window.alert('user deleted successfully')
        dispatch(deleteUser(id));
    };

    const handleEdit = (user) => {
        setEditUser(user.id);
        setFirstName(user.first_name);
        setLastName(user.last_name);
    };

    const handleUpdate =  (e) => {
        e.preventDefault();
        if (!editUser) return;

        const updatedData = { first_name: firstName, last_name: lastName };
        dispatch(updateUser({ id: editUser, data: updatedData }));
        setEditUser(null);
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {loading && <div>Loading...</div>}

            <div className="grid grid-cols-3">
                {usersArray.length > 0 ? (
                    usersArray.map((user) => (
                        <UserCard key={user.id} user={user} onDelete={handleDelete} onEdit={handleEdit} />
                    ))
                ) : (
                    <div>User not found</div>
                )}
            </div>

            {editUser && (
                <EditUserForm
                    firstName={firstName}
                    lastName={lastName}
                    setFirstName={setFirstName}
                    setLastName={setLastName}
                    handleUpdate={handleUpdate}
                    onCancel={() => setEditUser(null)}

                />
            )}
            <div className="py-5">
                <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
            </div>
        </div>
    );
};

export default Home;
