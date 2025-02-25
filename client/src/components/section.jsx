// components/Section.jsx

import React, { useState, useEffect } from "react";

import FileGallery from "./fileGallery";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Section = ({ alias, sectionName, type }) => {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFiles = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/v1/admin/page/${alias}/${sectionName}`);
            setFiles(response.data.content || []);
        } catch (error) {
            toast.error("Failed to load files");
        } finally {
            setLoading(false);
        }
    };

    const handleUploadSuccess = () => {
        fetchFiles();
    };

    const handleDeleteSuccess = (contentId) => {
        setFiles(files.filter((file) => file._id !== contentId));
    };

    const handleSelectSuccess = (contentId) => {
        setFiles(files.map((file) => ({ ...file, isHero: file._id === contentId })));
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    return (
        <div className="mb-12">
            <Toaster />
            <h2 className="text-2xl font-bold mb-4">{sectionName.replace("-", " ").toUpperCase()}</h2>
            <FileUploader alias={alias} sectionName={sectionName} type={type} onUploadSuccess={handleUploadSuccess} />
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
