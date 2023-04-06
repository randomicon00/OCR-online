import React, { ChangeEvent, useState } from "react";

type UploadProps = {
  name: string;
  accept: string;
  onChange: (file: File | null) => void;
};

const Upload = ({ name, accept, onChange }: UploadProps) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setFileName(file ? file.name : "");
    onChange(file);
  };

  return (
    <div className="p-3 text-xs no-underline">
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
        Upload an image or PDF
      </label>
      <input
        id={name}
        type="file"
        name={name}
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md">
        <span className="mr-2 text-sm font-medium text-gray-700 truncate">
          {fileName || "Choose a file..."}
        </span>
        <button
          type="button"
          className="px-2 py-1 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Browse
        </button>
      </div>
    </div>
  );
};

export default Upload;
