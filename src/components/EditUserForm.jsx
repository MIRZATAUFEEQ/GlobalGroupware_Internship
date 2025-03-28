import React from "react";

const EditUserForm = ({ firstName, lastName, setFirstName, setLastName, handleUpdate, onCancel }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <form onSubmit={handleUpdate} className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-lg font-semibold mb-4 text-black">Edit User</h2>

                <label className="block mb-2 text-black">
                    First Name:
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="border w-full p-2 rounded text-black"
                    />
                </label>

                <label className="block mb-2 text-black">
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="border w-full p-2 rounded text-black"
                    />
                </label>

                <div className="flex gap-4 mt-4">
                    <button type="submit" className="bg-black text-white px-4 py-2 rounded">
                        Update
                    </button>
                    <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditUserForm;
