// components/FileUploader.jsx

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FileUploader = ({ alias, sectionName, type, onUploadSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleUpload = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await axios.post(
                `/api/v1/admin/page/${alias}/${sectionName}/upload/file/${type}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            toast.success("File uploaded successfully");
            onUploadSuccess(response.data.data.url);
        } catch (error) {
            toast.error("File upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border border-dashed border-gray-400 rounded-lg p-6 mb-6 text-center bg-gray-100 shadow-lg">
            <Toaster />
            <input
                type={type}
                accept="image/*, application/pdf"
                className=""
                onChange={(e) => handleUpload(e.target.files[0])}
            />
            <p className="text-lg text-gray-700">Drag & Drop to upload or click to select</p>
            {loading && <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mt-4"></div>}
        </div>
    );
};

export default FileUploader;
