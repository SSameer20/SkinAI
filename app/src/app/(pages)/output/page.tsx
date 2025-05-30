"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OutputPage() {
  const searchParams = useSearchParams();
  const [reportData, setReportData] = useState({
    diseaseName: "",
    symptoms: "",
    precautions: [],
    foodSuggestions: [],
  });

  useEffect(() => {
    const query = Object.fromEntries(searchParams.entries());

    const reportData = {
      diseaseName: query["Disease Name"] || "",
      symptoms: query["Symptoms"] || "",
      precautions: query["precautions"] ? query["precautions"].split(",") : [],
      foodSuggestions: query["food suggestions"]
        ? query["food suggestions"].split(",")
        : [],
    };

    setReportData(reportData);
  }, [searchParams]);

  return (
    <div className="p-6 w-screen h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Report Data</h1>
      <div className="w-full bg-gray-50 h-full rounded-xl flex flex-col p-4">
        <div className="text-black flex justify-start mb-2">
          <h1 className="font-semibold w-[200px]">Disease Name: </h1>
          <span>{reportData.diseaseName}</span>
        </div>
        <div className="text-black flex justify-start mb-2">
          <h1 className="font-semibold">Symptoms: </h1>
          <span>{reportData.symptoms}</span>
        </div>
        <div className="text-black flex justify-start mb-2">
          <h1 className="font-semibold w-[200px]">Precautions: </h1>
          {reportData.precautions.length > 0 ? (
            <ul>
              {reportData.precautions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <span>No precautions available.</span>
          )}
        </div>
        <div className="text-black flex justify-start">
          <h1 className="font-semibold w-[200px]">Food Suggestions: </h1>
          {reportData.foodSuggestions.length > 0 ? (
            <ul>
              {reportData.foodSuggestions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <span>No food suggestions available.</span>
          )}
        </div>
      </div>
    </div>
  );
}
