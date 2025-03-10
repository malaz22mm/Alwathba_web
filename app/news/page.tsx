'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const newsArray = [ 
  {
    title: "تم تعيين رامي الجبلاوي مدرباً لفريق الوثبة",
    imageUrl: "/images/example.png",
    description: "قررت إدارة نادي الوثبة تشكيل الجهاز الفني والإداري لفريق رجال كرة القدم، بعد استقالة المدرب ماهر دالاتي عقب نهاية المباراة التي جمعت الوثبة مع الطليعة وانتهت بالتعادل السلبي. وجاء قرار إدارة النادي على النحو التالي: عمار مغربل مدير فريق، ورامي جبلاوي مدرباً، ومنهل كوسا وهايل المحيميد مساعدي مدرب، وشاكر الرزج مدرب حراس، وعبد الرحمن قراجه محلل أداء، وعبد الدايم أبو صلاح إداري، وسامر بيطار مسؤول علاقات عامة، وأحمد شدود معالج، وكمال اللبابيدي منسق إعلامي، وشادي عطا الله مصور، وسمير كحيل مسؤول تجهيزات."
  },
  {
    title: "تم تعيين رامي الجبلاوي مدرباً لفريق الوثبة",
    imageUrl: "/images/example.png",
    description: "قررت إدارة نادي الوثبة تشكيل الجهاز الفني والإداري لفريق رجال كرة القدم، بعد استقالة المدرب ماهر دالاتي عقب نهاية المباراة التي جمعت الوثبة مع الطليعة وانتهت بالتعادل السلبي. وجاء قرار إدارة النادي على النحو التالي: عمار مغربل مدير فريق، ورامي جبلاوي مدرباً، ومنهل كوسا وهايل المحيميد مساعدي مدرب، وشاكر الرزج مدرب حراس، وعبد الرحمن قراجه محلل أداء، وعبد الدايم أبو صلاح إداري، وسامر بيطار مسؤول علاقات عامة، وأحمد شدود معالج، وكمال اللبابيدي منسق إعلامي، وشادي عطا الله مصور، وسمير كحيل مسؤول تجهيزات."
  },
  {
    title: "تم تعيين رامي الجبلاوي مدرباً لفريق الوثبة",
    imageUrl: "/images/example.png",
    description: "قررت إدارة نادي الوثبة تشكيل الجهاز الفني والإداري لفريق رجال كرة القدم، بعد استقالة المدرب ماهر دالاتي عقب نهاية المباراة التي جمعت الوثبة مع الطليعة وانتهت بالتعادل السلبي. وجاء قرار إدارة النادي على النحو التالي: عمار مغربل مدير فريق، ورامي جبلاوي مدرباً، ومنهل كوسا وهايل المحيميد مساعدي مدرب، وشاكر الرزج مدرب حراس، وعبد الرحمن قراجه محلل أداء، وعبد الدايم أبو صلاح إداري، وسامر بيطار مسؤول علاقات عامة، وأحمد شدود معالج، وكمال اللبابيدي منسق إعلامي، وشادي عطا الله مصور، وسمير كحيل مسؤول تجهيزات."
  }
];

const News = () => {

const [news,setNews] = useState([])

useEffect(() => {
  const fetchNews = async () => {
    try {
      const res = await axios.get('https://alwathba.vercel.app/api/posts')
      .then(data=>{
        setNews(data.data)
      
      })
    } catch (error) {
      console.error('Failed to fetch users:', error);     
    }
  };
  fetchNews();
}, []);

const showData = news.map((product,key)=>{

  return(
<div key={key} className="flex flex-col items-center bg-[#0c243b] p-10 ">
          <h1 className="text-2xl py-4 text-white">{product.content}</h1>
          <div className="mx-auto flex h-[300px] w-[400px]">
            <Image
              src={product.media[0]?.imagePath}
              alt={`example${key + 1}`}   
              width={400}
              height={400}
            />
          </div>
          <Link href={`/news/${product.id}`}>
            <h1 className="border m-5 text-[#0c243b]   p-4 rounded bg-white">Comment</h1>
          </Link>
        </div>
)})
  return (
    <div className="flex flex-col gap-5 bg-[#0c243b]">
    {showData}
    </div>
  );
};

export default News;
