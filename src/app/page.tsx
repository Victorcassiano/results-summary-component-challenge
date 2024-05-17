"use client";
import Image from "next/image";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";

import TranslateJson from "../../public/assets/translate/index.json";
import DataSummary from "../../public/assets/mock/data.json";
import { useState } from "react";

type TranslationKeys = {
  title: string;
  textPercent: string;
  grade: string;
  textButton: string;
  scoredHigher: string;
  summary: string;
  Reaction: string;
  Memory: string;
  Verbal: string;
  Visual: string;
};

type Translation = {
  "en-US": TranslationKeys;
  "pt-BR": TranslationKeys;
};

export default function Home() {
  const [selectTranslate, setSelectTranslate] = useState<"en-US" | "pt-BR">(
    "en-US"
  );

  const Translate: Translation = TranslateJson;

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center bg-slate-200">
      <div className="flex flex-row sm:flex-col bg-white w-[630px] sm:w-full h-[450px] sm:h-screen rounded-3xl sm:rounded-none overflow-hidden">
        <section className="flex-1 flex flex-col gap-y-10 sm:py-5 sm:gap-y-5 items-center justify-center rounded-e-3xl sm:rounded-none sm:rounded-b-3xl bg-gradient-to-b from-[#755bfb] to-[#342fe5]">
          <p className="text-slate-200/90 text-lg font-bold">Your Result</p>
          <div className="flex flex-col gap-3 justify-center items-center w-40 h-40 rounded-full bg-gradient-to-b from-[#4b28c6] to-[#4b28c600]">
            <p className="text-white font-bold text-6xl">76</p>
            <span className="text-slate-200/90 font-medium">
              {Translate[selectTranslate].textPercent} 100
            </span>
          </div>
          <div className="flex flex-col justify-center items-center px-8 gap-2">
            <p className="text-white text-2xl font-bold">
              {Translate[selectTranslate].grade}
            </p>
            <span className="text-slate-200/90 font-medium text-center">
              {Translate[selectTranslate].scoredHigher}
            </span>
          </div>
        </section>
        <section className="flex-1">
          <div className="flex flex-col px-8 py-8 gap-y-5 h-full">
            <div className="flex flex-row items-center justify-between">
              <p className="text-gray-700 font-bold text-2xl">
                {Translate[selectTranslate].summary}
              </p>
              <Select
                onValueChange={(translate: "en-US" | "pt-BR") =>
                  setSelectTranslate(translate)
                }
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="en-US" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="en-US">en-US</SelectItem>
                    <SelectItem value="pt-BR">pt-BR</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {DataSummary.map((item) => (
              <section
                key={item.category}
                style={{ backgroundColor: item.bg }}
                className={`flex flex-row items-center justify-between p-4 w-full h-12 rounded-lg`}
              >
                <div className="flex flex-row items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.category}
                    className="w-6 h-6"
                    width={50}
                    height={50}
                  />
                  <p className={`font-bold`} style={{ color: item.textColor }}>
                    {Translate[selectTranslate][item.category]}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 font-bold">
                  <p className="text-gray-800">
                    {item.score}{" "}
                    <span className="text-gray-700/60"> / 100</span>
                  </p>
                </div>
              </section>
            ))}

            <button className="bg-gray-800 w-full h-12 rounded-3xl font-bold text-white">
              Continue
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
