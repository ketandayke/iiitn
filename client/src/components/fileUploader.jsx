// Updated FileUploader and Section to Support Image, PDF, and Text Upload
import React, { useState } from "react";
import api from "../utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

const FileUploader = ({ alias, sectionName, type, onUploadSuccess }) => {
    const [loading, setLoading] = useState(false);
    const [textData, setTextData] = useState({ heading: "", description: "" });

    const handleFileUpload = async (file) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await api.post(
                `/admin/page/${alias}/${sectionName}/upload/file/${type}`,
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

    const handleTextUpload = async () => {
        setLoading(true);
        try {console.log("handling text upload",textData)
            const response = await api.post(`/admin/page/${alias}/${sectionName}/upload/text`, textData, {
                withCredentials: true
            });
        
            toast.success("Text uploaded successfully");
            onUploadSuccess(response.data.data);
        } catch (error) {
            toast.error("Text upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border border-dashed border-gray-400 rounded-lg  mb-6 bg-gray-100 shadow-lg">
            <Toaster />

            {type === "text" ? (
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter Heading"
                        className="w-full border p-3 rounded-lg"
                        value={textData.heading}
                        onChange={(e) => setTextData({ ...textData, heading: e.target.value })}
                    />
                    <textarea
                        placeholder="Enter Description"
                        className="w-full border p-3 rounded-lg h-40"
                        value={textData.description}
                        onChange={(e) => setTextData({ ...textData, description: e.target.value })}
                    />
                    <button onClick={handleTextUpload}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer">
                        Upload Text
                    </button>
                </div>
            ) : (
                <div className="text-center">
                    <input
                        type="file"
                        accept={type === "image" ? "image/*" : type === "pdf" ? "application/pdf" : "*"}
                        className="cursor-pointer w-60  "
                        onChange={(e) => handleFileUpload(e.target.files[0])}
                    />
                    <p className="text-lg text-gray-700 mt-2">Drag & Drop to upload or click to select</p>
                    {loading && <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mt-4"></div>}
                </div>
            )}
        </div>
    );
};

export default FileUploader;
