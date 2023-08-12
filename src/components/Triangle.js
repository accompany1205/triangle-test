import React, { useState, useRef} from "react";
import TriangleMatrix from "./TriangleMatrix";

function Triangle() {
    const [fileContent, setFileContent] = useState('');
    const fileRef = useRef();

    const handleFileBtnClick = () => {
        fileRef.current.click();
    }
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            readFileContents(file);
        }
    };

    const readFileContents = (file) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            const content = event.target.result;
            setFileContent(content);
        };

        reader.readAsText(file);
    };
    return (
        <div className="triangle-container">
            <div className="triangle-container-header">
                <input ref={fileRef} type="file" className="triangle-container-input-file" onChange={handleFileChange} />
                <button
                    className="triangle-container-file-button"
                    onClick={() => handleFileBtnClick()}
                >
                    Import File
                </button>
            </div>
            <TriangleMatrix fileContent={fileContent} />
        </div>
    )
}

export default Triangle;