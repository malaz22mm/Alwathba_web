'use client'
import Image from "next/image";
import bgCard from "../../../public/Logo.jpg";
import Link from "next/link";
import SideNavbar from "@/component/SideNavbar";

import React, { useEffect, useState } from 'react';
import axios from "axios";


export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/alluser').then(data=>console.log(data)) // Ensure the endpoint matches your Next.js API route
       
        // setUsers(data);
        // console.log(data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
        
      }
      
    };
    
    fetchUsers();
  }, []);
  return (
    
    <div className="flex flex-col gap-5 bg-[#0c243b]">
      <div className="flex bg-[#0c243b] ">
        <main className="font-Kumbh relative flex items-center h-[64rem]  justify-center bg-[#0c243b] px-[25px]">
          <div className="">
            <div className="bg-[#0c243b] p-10 text-white">
              <h1 className="mb-6 text-center text-3xl">عن النادي</h1>
              <p className=" text-right">
                نادي الوثبة الرياضي هو نادي رياضي سوري مقره في حمص. تأسس النادي
                في عام 1937 ويعتبر أحد أقدم وأنجح الأندية الرياضية في سوريا.
                يشتهر النادي بفريقه لكرة القدم الذي حقق العديد من البطولات
                المحلية والإقليمية. كما يضم النادي فروعا للعديد من الرياضات
                الأخرى مثل كرة السلة والطائرة والملاكمة والشطرنج والتنس
                والسباحة.
              </p>
              <p className="mb-4  text-right">
                يقدم النادي العديد من البرامج التدريبية وورش العمل والمحاضرات.
                فهدفه الأساسي هو تطوير مهارات اللاعبين وتعزيز قدراتهم البدنية
                والذهنية والمهارية. ويحظى النادي بقيادة فريق من الخبراء
                المتمرسين الذين يكرسون وقتهم لتحقيق الأهداف الرياضية والتعليمية
                والاجتماعية للنادي واللاعبين.
              </p>
              <p className="mb-4 text-right">
                يعتبر نادي الوثبة الرياضي رمزا للمقاومة والصمود في وجه الظلم
                والاضطهاد. فقد شهد تاريخ النادي العديد من المحن والمصاعب التي لم
                تثنه عن مواصلة نشاطه الرياضي والاجتماعي. كما أن النادي يحظى
                بشعبية كبيرة بين أبناء حمص وسوريا والعالم العربي، ويتميز بروح
                الأخوة والتضامن بين أعضائه وجماهيره.{" "}
              </p>
              <br />
              <br />
              <h1 className="mt-10 text-center text-2xl">الأعضاء</h1>
            </div>
            <div className="flex flex-row justify-center gap-5   ">
              <div className=" max-h-[275px] max-w-[250px] gap-5">
                <div className="relative h-40 gap-5">
                  <Image
                    src={bgCard}
                    alt="bgCardPatern"
                    className=" w-full rounded-t-2xl "
                  ></Image>
                </div>
                <div className="flex flex-col items-center bg-[#FFFFFF] pb-[28px] pt-[56px]">
                  <h1 className="mt-[10px] text-[18px] font-bold">
                    malaz
                    <div>منصب العضو</div>
                  </h1>
                </div>
                <div className="flex justify-evenly rounded-b-2xl border-t-2 border-[#969696]/20 bg-[#FFFFFF] p-[18px]">
                  <Link
                    href={"/aboutplayer"}
                    className="cursor-pointer rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-red-400"
                  >
                    المزيد من المعلومات
                  </Link>
                </div>
              </div>
              <div className="   max-h-[275px] max-w-[250px] ">
                <div className="relative h-40">
                  <Image
                    src={bgCard}
                    alt="bgCardPatern"
                    className=" w-full rounded-t-2xl "
                  ></Image>
                </div>
                <div className="flex flex-col items-center bg-[#FFFFFF] pb-[28px] pt-[56px]">
                  <h1 className="mt-[10px] text-[18px] font-bold">
                    malaz
                    <div>منصب العضو</div>
                  </h1>
                </div>
                <div className="flex justify-evenly rounded-b-2xl border-t-2 border-[#969696]/20 bg-[#FFFFFF] p-[18px]">
                  <Link
                    href={"/aboutplayer"}
                    className="cursor-pointer rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-red-400"
                  >
                    المزيد من المعلومات
                  </Link>
                </div>
              </div>
              <div className=" max-h-[275px] max-w-[250px] gap-5 ">
                <div className="relative h-40">
                  <Image
                    src={bgCard}
                    alt="bgCardPatern"
                    className=" w-full rounded-t-2xl "
                  ></Image>
                </div>
                <div className="flex flex-col items-center bg-[#FFFFFF] pb-[28px] pt-[56px]">
                  <h1 className="mt-[10px] text-[18px] font-bold">
                    malaz
                    <div>منصب العضو</div>
                  </h1>
                </div>
                <div className="flex justify-evenly rounded-b-2xl border-t-2 border-[#969696]/20 bg-[#FFFFFF] p-[18px]">
                  <Link
                    href={"/aboutplayer"}
                    className="cursor-pointer rounded bg-red-700 px-4 py-2 font-bold text-white hover:bg-red-400"
                  >
                    المزيد من المعلومات
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
function fetchUsers() {
  throw new Error("Function not implemented.");
}

