import React from "react";

const UserCard = ({ user, onDelete, onEdit }) => {
    return (
        <div key={user.id} className="border relative group">
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[white] border border-black text-black gap-3">
                <span onClick={() => onDelete(user.id)} className="border border-black rounded-3xl px-2">
                    Delete
                </span>
                <span onClick={() => onEdit(user)} className="border border-black rounded-3xl px-2">
                    Edit
                </span>
            </div>
            <span>{user.first_name} </span>
            <span>{user.last_name}</span>
            <img src={user.avatar} alt={user.first_name} />
        </div>
    );
};

export default UserCard;
