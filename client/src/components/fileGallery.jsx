// // Updated FileGallery.jsx with Enhanced Image Preview and Options
// import React, { useState } from "react";
// import api from "../utils/axiosInstance";
// import toast from "react-hot-toast";

// const FileGallery = ({ alias, sectionName, files = [], onDeleteSuccess, onSelectSuccess }) => {
//     const [previewImage, setPreviewImage] = useState(null);

//     const handleDelete = async (contentId) => {
//         try {
//             await api.delete(`/admin/page/${alias}/${sectionName}/delete/${contentId}`);
//             toast.success("File deleted successfully");
//             onDeleteSuccess(contentId);
//         } catch (error) {
//             toast.error("File deletion failed");
//         }
//     };

//     const handleSelect = async (contentId, isVisible) => {
//         try {
//             await onSelectSuccess(contentId, !isVisible);
//         } catch (error) {
//             toast.error(error.response?.data?.message || "Content selection failed");
//         }
//     };

//     return (
//         <div>
//             {previewImage && (
//                 <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//                     <div className="relative">
//                         <img src={previewImage} alt="Preview" className="max-w-full max-h-screen rounded-lg" />
//                         <button
//                             className="absolute top-4 right-4 text-white text-xl bg-red-500 p-2 rounded-full"
//                             onClick={() => setPreviewImage(null)}
//                         >
//                             ✕
//                         </button>
//                     </div>
//                 </div>
//             )}


//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//                 {files.length > 0 ? (
//                     files.map((file) => (
//                         <div key={file._id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
//                             {file.value!=undefined? (
//                                 <div className="relative group cursor-pointer" onClick={() => setPreviewImage(file.value)}>
//                                     <img
//                                         src={file.value}
//                                         alt="Uploaded"
//                                         className={`w-full h-40 object-cover ${file.isVisible ? "border-4 border-green-500" : ""}`}
//                                     />
//                                 </div>
//                             ) : file.type === "pdf" ? (
//                                 <div className="p-4 text-center">
//                                     <a href={file.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                                         View PDF
//                                     </a>
//                                 </div>
//                             ) : (
//                                 <div className="p-4 text-center">
//                                     <p className="font-bold">{file.heading || "No Heading"}</p>
//                                     <p className="text-gray-600">{file.description || "No Description"}</p>
//                                     <img src={file.value} alt={file.heading}></img>
//                                 </div>
//                             )}

//                             <div className="p-4 flex justify-between items-center">
//                                 <button
//                                     className={`text-white px-3 py-1 rounded cursor-pointer ${file.isVisible ? "bg-green-500" : "bg-blue-500"}`}
//                                     onClick={() => handleSelect(file._id, file.isVisible)}
//                                 >
//                                     {file.isVisible ? "Selected" : "Select"}
//                                 </button>

//                                 <button
//                                     className="text-white bg-red-500 px-3 py-1 rounded cursor-pointer"
//                                     onClick={() => handleDelete(file._id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="col-span-full text-center text-gray-500">No content uploaded yet.</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FileGallery;


// Updated FileGallery.jsx
import React from "react";
import api from "../utils/axiosInstance";
import toast from "react-hot-toast";

const FileGallery = ({ alias, sectionName, files = [], onDeleteSuccess, onSelectSuccess }) => {
    const handleDelete = async (contentId) => {
        try {
            await api.delete(`/admin/page/${alias}/${sectionName}/delete/${contentId}`);
            toast.success("File deleted successfully");
            onDeleteSuccess(contentId);
        } catch (error) {
            toast.error("File deletion failed");
        }
    };

    const handleSelect = async (contentId, isVisible) => {
        try {
            await onSelectSuccess(contentId, !isVisible);
        } catch (error) {
            toast.error(error.response?.data?.message || "Content selection failed");
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {files.length > 0 ? (
                files.map((file) => (
                    <div key={file._id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                        {file.type === "image"||"image-text" ? (
                            <img
                                src={file.value}
                                alt="Uploaded"
                                className={`w-full h-40 object-cover bg-contain bg-center ${file.isVisible ? "border-4 border-green-500" : ""}`}
                            />
                        ) : file.type === "pdf" ? (
                            <div className="p-4 text-center">
                                <a href={file.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    View PDF
                                </a>
                            </div>
                        ) : (
                            <div className="p-4 text-center">
                                <p className="font-bold">{file.heading || "No Heading"}</p>
                                <p className="text-gray-600">{file.description || "No Description"}</p>
                            </div>
                        )}

                        <div className="p-4 flex justify-between items-center">
                            <button
                                className={`text-white px-3 py-1 rounded cursor-pointer ${file.isVisible ? "bg-green-500" : "bg-blue-500"}`}
                                onClick={() => handleSelect(file._id, file.isVisible)}
                            >
                                {file.isVisible ? "Selected" : "Select"}
                            </button>

                            <button
                                className="text-white bg-red-500 px-3 py-1 rounded cursor-pointer"
                                onClick={() => handleDelete(file._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full text-center text-gray-500">No content uploaded yet.</div>
            )}
        </div>
    );
};

export default FileGallery;
