import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
// import Pattern from "../Components/component/Pattern";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import dateFormat from "dateformat";
import { IoMdEye } from "react-icons/io";
import { FaShareFromSquare } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Breadcrumb from "../Components/component/Breadcrumb";

export default function News() {
  const [text, setText] = useState('http://localhost:5174/libraryDetail/40');
  // const [apiData, setApiData] = useState();
  const [apiVideo, setVideo] = useState();
  const [activeId, setActiveId] = useState();
  const [firstData, setFistData] = useState();

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Matn nusxalandi!');
    }).catch((err) => {
      console.error('Nusxalashda xatolik:', err);
    });
  };

  // share link
  const url = "https://example.com"; // Ulashmoqchi bo'lgan havolangiz
  const texts = "Bu havolani ko'ring!"; // Havola bilan birga yuboriladigan matn

  const handleShare = () => {
    const telegramUrl = `tg://msg_url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(texts)}`;
    window.open(telegramUrl, '_blank');
  };


  const [mth, setMth] = useState()
  const arr = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"]
  const route = useParams();
  const navigate = useNavigate();
  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const [apiDataDetail, setApiDataDetail] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.news);
    console.log(response, "newslardfdsfdfsdfdsfdsfdsfdsrerere");
    setApiData(response);
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onChangeId = (id) => {

    setActiveId(id);
    navigate(`/news/${id}`);

  };

  const fetchDataDetail = async () => {
    const response = await DataService.get(endpoints.newsById(activeId ?? route.id));
    setApiDataDetail(response);
    console.log('bu big detailsdanku', response);
    // let x = document.querySelector("title");
    // x.textContent = `Jadidlar / ${response.title}`;

    // console.log(response?.id, "shundamikan ?????????");
    // navigate(`/news/${response?.id}`);


  };

  useEffect(() => {
    fetchDataDetail();
  }, [route?.id, activeId]);

  return (
    <>
      <Breadcrumb catigory={'Yangiliklar'} />
      <div className="card__container container" >

        <section>
          {/* Container */}
          <div className="mx-auto w-full text-[white] max-w-7xl px-5 py-16 md:px-10 md:py-20">
            {/* Title */}
            <h2 className="text-center  text-3xl font-bold md:text-5xl lg:text-left">
              Yangilikmisan yangilikda
            </h2>
            <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 lg:text-left">
              buyerda shunchaki yozuv bo'lmaydi
            </p>
            {/* Content */}
            <div className="grid justify-items-stretch md:mb-12 md:grid-cols-3 md:gap-4 lg:mb-16 lg:gap-6">
              <a
                href="#"
                className="relative flex h-[500px] flex-col gap-4 rounded-md  px-4 py-8 [grid-area:1/1/2/2] md:p-0 md:[grid-area:1/1/2/4]"
              >
                <div className="absolute backdrop-blur bottom-12 left-8 z-20 flex w-56 max-w-lg flex-col items-start rounded-md bg-[#4242426f] p-6 sm:w-full md:bottom-[10px] md:left-[10px]">

                  <p className="mb-4 text-white max-w-xs text-xl font-bold md:text-2xl">
                    Balkin bu yerda qandaydir sarlavha bolar balkim bu
                    taxmin holos
                  </p>
                  <div className="flex text-white  flex-col text-sm text-gray-500 lg:flex-row">
                    <p>Bahora Kuziyeva</p>
                    <p className="mx-2 text-white hidden lg:block">-</p>
                    <p>6 daqiqalik o'qish</p>
                  </div>
                </div>
                <img
                  src="https://img.freepik.com/premium-photo/modern-news-studio-with-world-map-screen_14117-1107135.jpg?ga=GA1.1.712431129.1720501895&semt=ais_hybrid"
                  alt=""
                  className="inline-block h-full w-full rounded object-cover"
                />
              </a>
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
              >
                <img
                  src="https://uz24.uz/uploads/image/23d6c2965508b167da9c4bdcef3a2aa3/medium.jpg"
                  alt=""
                  className="inline-block h-60 w-full object-cover"
                />
                <div className="flex flex-col items-start py-4">

                  <p className="mb-4 text-xl text-[white] w-[300px] font-bold line-clamp-2 md:text-2xl">
                    Meta ijtimoiy tarmoqlarda senzura e'lon qildi
                  </p>
                  <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                    <p>Kimdir Shudir</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 daqiqalik o'qish </p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
              >
                <img
                  src="https://uz24.uz/uploads/image/3a78f1864ab77dbd239fbe33cae90bbb/mini.webp"
                  alt=""
                  className="inline-block h-60 w-full object-cover"
                />
                <div className="flex flex-col items-start py-4">

                  <p className="mb-4 text-xl line-clamp-2 w-[300px]  text-[white] font-bold md:text-2xl">
                    Behruz Mulkamonovni (bot) ni pichoqlagan Durov qo'lga olindi
                  </p>
                  <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                    <p>Qodirali Qodirov</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 daqiqalik o'qish</p>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col gap-4 rounded-md px-4 py-8 md:p-0"
              >
                <img
                  src="https://storage.kun.uz/source/thumbnails/_medium/10/egauPqkNnpDiWFl9WUYBBIdetPThZCZ5_medium.jpg"
                  alt=""
                  className="inline-block h-60 w-full object-cover"
                />
                <div className="flex flex-col items-start py-4">

                  <p className="mb-4 text-xl w-[300px] text-[white] line-clamp-2 font-bold md:text-2xl">
                    Durovning hibsga olinishi siyosiy qaror emas - Makron

                  </p>
                  <div className="flex flex-col text-sm text-gray-500 lg:flex-row">
                    <p>Makaron Lapsha</p>
                    <p className="mx-2 hidden lg:block">-</p>
                    <p>6 daqiqalik o'qish </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>


      </div >



    </>
  );
}
