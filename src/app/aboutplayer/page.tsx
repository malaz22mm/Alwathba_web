import Image from "next/image";
import bgCard from "../../../public/Logo.jpg";

import React from 'react';


 




export default function Home() {
  return (
    <div className="flex flex-col gap-5 bg-[#0c243b]">

  

      <div className="flex bg-[#0c243b]">
        <div className="flex bg-[#0c243b] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="mb-6 mt-8 text-right text-4xl font-bold">
                  اسم اللاعب
                </h1>
                <p className="mb-6 text-right">
                  محمد علي هو لاعب كرة قدم سوري، يلعب في مركز الهجوم مع نادي
                  الوثبة والمنتخب السوري. ولد في 1 يناير 2000 في حمص، وبدأ
                  مسيرته الكروية مع نادي الوثبة في عام 2018.
                </p>
              </div>
              <div>
                <div className=" p-4">
                  <Image
                    src={bgCard}
                    alt="bgCardPatern"
                    className="aspect-w-3 aspect-h-4 w-5/6 rounded-t-2xl "
                  ></Image>
                </div>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-right text-2xl font-bold">
                 الانجازات الرياضية للاعب محمد علي
                </h2>
                <ul className="space-y-2">
                  <li className=" text-right">بطل الدوري السوري مرتين •</li>
                  <li className=" text-right"> هداف الدوري الوري مرة •</li>
                  <li className=" text-right">
                    تأهل لكأس اسيا مع المنتخب السوري •
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-4 text-right text-2xl  font-bold">
                  : المعلومات الشخصية  للاعب محمد علي
                </h2>
                <ul className="space-y-2">
                  <li className=" text-right">
                    الاسم الكامل: محمد علي عبد الرحمن •
                  </li>
                  <li className=" text-right"> الوزن: 50 كيلو غرام •</li>
                  <li className=" text-right"> العمر: 24 سنة •</li>
                  <li className=" text-right"> الجنسية: سوري •</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
