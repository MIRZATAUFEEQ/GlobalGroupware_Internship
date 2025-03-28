import React from "react";

const Pagination = ({ page, totalPages, onPrev, onNext }) => {
    return (
        <div className="flex gap-9">
            <button onClick={onPrev} disabled={page === 1} className=" text-black border px-4 py-2 rounded bg-white">
                Previous
            </button>
            <span>{page} / {totalPages} pages</span>
            <button onClick={onNext} disabled={page === totalPages} className=" text-black border px-4 py-2 rounded bg-white">
                Next
            </button>
        </div>
    );
};

export default Pagination;
