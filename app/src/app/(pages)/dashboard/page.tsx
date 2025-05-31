/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import {
  Upload,
  Activity,
  FileImage,
  Brain,
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { getSkinConditionInfo, SkinConditionResult } from "@/utils/helper";

type FileType = File | null;

export default function Dashboard() {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [uploadedFile, setUploadedFile] = useState<FileType>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [analysisResult, setAnalysisResult] =
    useState<SkinConditionResult | null>(null);
  const [error, setError] = useState<string | null>(null);

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

    if (e.dataTransfer?.files?.[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("image/")) {
        setUploadedFile(file);
        setError(null);
        setAnalysisResult(null);
      } else {
        setUploadedFile(null);
        setError("Please upload a valid image file.");
        setAnalysisResult(null);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith("image/")) {
        setUploadedFile(file);
        setError(null);
        setAnalysisResult(null);
      } else {
        setUploadedFile(null);
        setError("Please select a valid image file.");
        setAnalysisResult(null);
      }
    }
  };

  async function handleSubmit() {
    if (!uploadedFile) return;

    try {
      setIsProcessing(true);
      setError(null);

      const formData = new FormData();
      formData.append("file", uploadedFile);

      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        // Simplified error display without complex parsing
        throw new Error("Failed to process image. Please try again.");
      }

      const result = await response.json();
      const skinCondition = result.result;

      const updatedResult = getSkinConditionInfo(skinCondition);

      setAnalysisResult(updatedResult);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setAnalysisResult(null);
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium mb-1">
                  Accuracy Rate
                </p>
                <p className="text-white text-3xl font-bold">80 - 90</p>
              </div>
              <Activity className="w-8 h-8 text-blue-200" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
          </div>

          <div className="bg-green-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium mb-1">
                  Images Analyzed
                </p>
                <p className="text-white text-3xl font-bold">12</p>
              </div>
              <FileImage className="w-8 h-8 text-green-200" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full opacity-20"></div>
          </div>

          <div className="bg-purple-600 rounded-2xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium mb-1">
                  Diseases Detected
                </p>
                <p className="text-white text-3xl font-bold">23+</p>
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
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                dragActive
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => document.getElementById("file-upload")?.click()}
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
              <div className="mt-4 p-4 bg-gray-700 rounded-lg flex justify-between items-center">
                <p className="text-sm text-gray-300">
                  Selected file:{" "}
                  <span className="text-white">{uploadedFile.name}</span>
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Analyze Image"
                  )}
                </button>
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

            {isProcessing ? (
              <div className="text-center py-12">
                <Loader2 className="w-16 h-16 text-blue-500 animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-300 mb-2">
                  Analyzing Image
                </h3>
                <p className="text-gray-500">
                  Our AI is processing your medical image
                </p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-300 mb-2">
                  Analysis Failed
                </h3>
                <p className="text-red-400 mb-4">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="text-sm text-gray-400 hover:text-white underline"
                >
                  Try again
                </button>
              </div>
            ) : analysisResult ? (
              <>
                <h3 className="font-medium text-lg mt-4">
                  {analysisResult.condition}
                </h3>

                <h4 className="font-medium text-lg mt-4">Description</h4>
                <p className="text-gray-300 mb-6">
                  {analysisResult.information.description}
                </p>

                <h4 className="font-medium text-lg mb-2">Precautions</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {analysisResult.information.precautions.map(
                    (precaution, i) => (
                      <li key={i}>{precaution}</li>
                    )
                  )}
                </ul>
              </>
            ) : (
              <p className="text-gray-500 text-center mt-12">
                Upload an image to see analysis results here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
