"use client";
import { useState } from "react";
import {
  Upload,
  Activity,
  FileImage,
  Brain,
  AlertTriangle,
} from "lucide-react";

type FileType = { name: string; size: number; type: string };
export default function Dashboard() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<FileType | null>(null);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setUploadedFile(file);
      }
    }
  };

  // Note: This should be React.ChangeEvent<HTMLInputElement>, not a DragEvent
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Accuracy Rate */}
          <div className="bg-blue-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">
                  Accuracy Rate
                </p>
                <p className="text-white text-3xl font-bold">94.5%</p>
              </div>
              <Activity className="w-8 h-8 text-blue-200" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </div>

          {/* Images Analyzed */}
          <div className="bg-green-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium mb-1">
                  Images Analyzed
                </p>
                <p className="text-white text-3xl font-bold">12,847</p>
              </div>
              <FileImage className="w-8 h-8 text-green-200" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
          </div>

          {/* Diseases Detected */}
          <div className="bg-purple-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium mb-1">
                  Diseases Detected
                </p>
                <p className="text-white text-3xl font-bold">45+</p>
              </div>
              <Brain className="w-8 h-8 text-purple-200" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="w-6 h-6 text-gray-300" />
              <h2 className="text-xl font-semibold">Upload Medical Image</h2>
            </div>

            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragActive
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="mb-4">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-300 mb-2">
                  Upload medical image
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  Drag and drop or click to select • JPEG, PNG up to 10MB
                </p>
              </div>

              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileSelect}
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg cursor-pointer transition-colors"
              >
                <FileImage className="w-4 h-4" />
                Choose File
              </label>
            </div>

            {uploadedFile && (
              <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-300">
                  Selected file:{" "}
                  <span className="text-white">{uploadedFile.name}</span>
                </p>
              </div>
            )}

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Supported formats:</p>
              <div className="text-sm text-gray-500 space-y-1">
                <p>
                  • Retinal photographs • X-rays • CT scans • MRI images • Skin
                  lesion photos
                </p>
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          <div className="bg-gray-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-gray-300" />
              <h2 className="text-xl font-semibold">Analysis Results</h2>
            </div>

            <div className="text-center py-12">
              <AlertTriangle className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-300 mb-2">
                No Analysis Available
              </h3>
              <p className="text-gray-500">
                Upload a medical image to see analysis results
              </p>
            </div>

            {uploadedFile && (
              <div className="mt-8 p-4 bg-blue-600/10 border border-blue-600/20 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <p className="text-blue-400 text-sm">
                    Processing image analysis...
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-gray-800 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Upload className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">1. Upload Image</h4>
              <p className="text-sm text-gray-400">
                Upload your medical image in supported formats
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">2. AI Analysis</h4>
              <p className="text-sm text-gray-400">
                Our AI analyzes the image using advanced algorithms
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="w-6 h-6" />
              </div>
              <h4 className="font-medium mb-2">3. Get Results</h4>
              <p className="text-sm text-gray-400">
                Receive detailed analysis and detection results
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
