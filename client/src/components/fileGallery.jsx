// components/FileGallery.jsx

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const FileGallery = ({ alias, sectionName, files, onDeleteSuccess, onSelectSuccess }) => {
    const handleDelete = async (contentId) => {
        try {
            await axios.delete(`/api/v1/admin/page/${alias}/${sectionName}/delete/${contentId}`);
            toast.success("File deleted successfully");
            onDeleteSuccess(contentId);
        } catch (error) {
            toast.error("File deletion failed");
        }
    };

    const handleSelect = async (contentId) => {
        try {
            await axios.put(`/api/v1/admin/page/${alias}/${sectionName}/select/${contentId}`);
            toast.success("Content selected successfully");
            onSelectSuccess(contentId);
        } catch (error) {
            toast.error("Content selection failed");
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {files.map((file) => (
                <div key={file._id} className="border rounded-lg overflow-hidden shadow-lg">
                    {file.type === "image" ? (
                        <img
                            src={file.value}
                            alt="Uploaded"
                            className={`w-full h-40 object-cover ${file.isHero ? "border-4 border-green-500" : ""}`}
                        />
                    ) : file.type === "pdf" ? (
                        <div className="p-4 text-center">
                            <a href={file.value} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View PDF
                            </a>
                        </div>
                    ) : (
                        <div className="p-4 text-center">{file.value}</div>
                    )}
                    <div className="p-4 flex justify-between">
                        <button className="text-white bg-blue-500 px-3 py-1 rounded" onClick={() => handleSelect(file._id)}>
                            Select
                        </button>
                        <button className="text-white bg-red-500 px-3 py-1 rounded" onClick={() => handleDelete(file._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FileGallery;
