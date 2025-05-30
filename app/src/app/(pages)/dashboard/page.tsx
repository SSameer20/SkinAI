"use client";
import { Image } from "lucide-react";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { ImageResponse } from "@/store/User";

export default function Page() {
  const setResponse = useSetRecoilState(ImageResponse);
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async () => {
    setLoading(true);
    const file = inputRef.current?.files?.[0];
    if (!file) {
      alert("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("disease", "skin cancer diseases");

    try {
      const response = await fetch("/api/image", {
        method: "POST",
        body: formData,
      });

      const data: { message: string; predictions?: string } =
        await response.json();

      const ExtractedTextFOrJSON =
        data.predictions?.slice(7, data.predictions.length - 3 - 1) || "";

      const NewJsonFormat = JSON.parse(ExtractedTextFOrJSON);
      setResponse({ response: NewJsonFormat });
      const queryParams = new URLSearchParams(NewJsonFormat).toString();
      location.href = `/output?${queryParams}`;
    } catch (error) {
      alert(`Try Again ${error}`);
    }
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="min-w-[40vw] min-h-[80vh] border-amber-50 border-[1px] rounded-2xl p-5">
        <div className="w-full h-2/3 flex flex-col justify-center items-center border-[1px] border-dashed rounded-xl">
          {/*eslint-disable-next-line jsx-a11y/alt-text */}
          <Image size={200} strokeWidth={0.7} />
        </div>
        <div className="mt-4">
          <input
            ref={inputRef}
            type="file"
            accept="image/png, image/jpeg"
            className="bg-white text-black px-5 py-2 rounded-xl cursor-pointer"
          />
        </div>
        <div className="w-full h-1/5 flex items-center">
          <button
            className="flex sbg-blue-500 rounded-[5px] text-white font-bold hover:bg-white hover:text-black border-2 border-amber-50 px-5 py-2 hover:border-none transition-all"
            onClick={handleSubmit}
          >
            {!loading ? "Submit" : "Loading.."}
          </button>
        </div>
      </div>
    </div>
  );
}
