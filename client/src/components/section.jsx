// Updated Admin Section Component with Dynamic Form and Content Upload
// Updated Section.jsx with Dynamic Content Upload
import React, { useState, useEffect } from "react";
import FileUploader from "./fileUploader";
import FileGallery from "./fileGallery";
import api from "../utils/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

const Section = ({ alias, sectionName, allowedContentTypes=[], allowMultiple = false, additionalFields = {} }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const response = await api.get(`/admin/page/${alias}/${sectionName}`);
            console.log("response",response);
            setFiles(response.data.content || []);
        } catch (error) {
            toast.error("Failed to load content");
        } finally {
            setLoading(false);
        }
    };

    const handleUploadSuccess = () => fetchFiles();
    const handleDeleteSuccess = (contentId) => setFiles(files.filter((file) => file._id !== contentId));
    const handleSelectSuccess = (contentId) => setFiles(files.map((file) => ({ ...file, isVisible: file._id === contentId })));

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6">
            <Toaster />
            <h2 className="md:text-2xl text-xl font-bold mb-4">{sectionName.replace("-", " ").toUpperCase()}</h2>

            {/* Dynamic Form Based on Allowed Content Types */}
            {allowedContentTypes.map((type, index) => (
                <FileUploader
                    key={index}
                    alias={alias}
                    sectionName={sectionName}
                    type={type}
                    allowMultiple={allowMultiple}
                    additionalFields={additionalFields}
                    onUploadSuccess={handleUploadSuccess}
                />
            ))}

            {loading ? (
                <div className="text-center my-6">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                <FileGallery
                    alias={alias}
                    sectionName={sectionName}
                    files={files}
                    onDeleteSuccess={handleDeleteSuccess}
                    onSelectSuccess={handleSelectSuccess}
                />
            )}
        </div>
    );
};

export default Section;



// // Updated Section.jsx
// import React, { useState, useEffect } from "react";
// import FileUploader from "./fileUploader";
// import FileGallery from "./fileGallery";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// const Section = ({ alias, sectionName, type }) => {
//     const [files, setFiles] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const fetchFiles = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get(`/api/v1/admin/page/${alias}/${sectionName}`);
//             setFiles(response.data.content || []);
//         } catch (error) {
//             toast.error("Failed to load files");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleUploadSuccess = () => {
//         fetchFiles();
//     };

//     const handleDeleteSuccess = (contentId) => {
//         setFiles(files.filter((file) => file._id !== contentId));
//     };

//     const handleSelectSuccess = (contentId) => {
//         setFiles(files.map((file) => ({ ...file, isVisible: file._id === contentId })));
//     };

//     useEffect(() => {
//         fetchFiles();
//     }, []);

//     return (
//       <div className="w-full bg-gray-100">
//           <div className="mb-4 py-4 w-full mx-auto">
//             <Toaster />
//             <h2 className="md:text-2xl text-xl font-bold mb-4">{sectionName.replace("-", " ").toUpperCase()}</h2>
//             <FileUploader alias={alias} sectionName={sectionName} type={type} onUploadSuccess={handleUploadSuccess} />
//             {loading ? (
//                 <div className="text-center my-6">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
//                 </div>
//             ) : (
//                 <FileGallery
//                     alias={alias}
//                     sectionName={sectionName}
//                     files={files}
//                     onDeleteSuccess={handleDeleteSuccess}
//                     onSelectSuccess={handleSelectSuccess}
//                 />
//             )}
//         </div>
//       </div>
//     );
// };

// export default Section;