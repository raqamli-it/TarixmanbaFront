import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <>

      <section className="py-20 lg:py-24">
        <div className="px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
              <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
                <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">Malumot</span>
                <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-matn-color">
                  <span className="block">Manba</span>
                  <span className="block font-serif italic">Yaratuvchilari</span>
                </h1>
              </div>
              <img className="block w-full ml-100px" src="data:image/png;base64,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" alt="" />
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="max-w-md md:max-w-lg xl:max-w-2xl text-matn-color mx-auto lg:mx-0">
                <p className="text-2xl text-gray-800 mb-8"> O‘zbek xalqi va davlatchiligi tarixida eng muhim jarayonlardan biri sanalgan, XIX asr oxiri – XX asr boshlarida kechgan jadidchilik harakatining ahamiyati, jadid bobolarimiz turmushi, ishi va merosini keng targ‘ib qilishni ko‘zlagan, yozma, tovushli, ko‘rgazmali, raqamli ma’lumotlarni o‘zida jamlagan va muntazam ravishda boyitib boriladigan “jadidlar.uz” elektron platformasi O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi O‘zbek tilini rivojlantirish jamg‘armasining buyurtmasiga ko‘ra 2021 – 2023 yillari Tarix institutida yaratildi.</p>
                <p className="text-lg font-semibold text-gray-800 mb-8">  Loyiha boshlig‘i: akademik  Azamat Ziyo.</p>
                <p className="text-lg text-gray-700 mb-8"> Loyiha xodimlari: tarix fanlari doktori Dilnoza Jamolova (D.J), tarix fanlari doktori Muhayyo Isoqova, tarix fanlari bo‘yicha falsafa doktori Odiljon Zaripov (O.Z.), tarix fanlari bo‘yicha falsafa doktori Mashhura Darmonova (M.D.), tarix fanlari bo‘yicha falsafa doktori Gulmira Ochilova (G.O.),  </p>
                <p className="text-lg text-gray-700 mb-8">tarix fanlari bo‘yicha falsafa doktori Abduvali Yo‘ldoshev (A.Y.), tarix fanlari nomzodi Sherali Qo‘ldoshev (Sh.Q.), Alisher Navoiy nomidagi O‘zbekiston Milliy kutubxonasi direktori Umida Teshaboyeva, tarix fanlari doktori Baxtiyor Hasanov, filologiya fanlari doktori Muqaddas Tojiboyeva, katta ilmiy xodim Saodat Nazarova (S.N.), tayanch-doktorant Daler Mirzayev (D.M.), tayanch-doktorant Asadullo Hasanov (A.H.).</p>
                <p className="text-lg text-gray-700">Loyiha ustida izlanishlar olib borish jarayonida 252 jadidga oid ma’lumotlar yig‘ildi. Ularning til, adabiyot, tarix, ta’lim, axloq yo‘nalishdagi yuzdan ortiq asarlari aniqlandi, milliy matbuot sahifalaridagi maqolalari arab alifbosidan joriy alifboga o‘girildi..</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section classNameName="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark bg-cover  bg-custom ">
        <div classNameName="container mx-auto ">
          <div classNameName="flex flex-wrap items-center justify-between -mx-4">
            <div classNameName="w-full px-4 lg:w-5/12 ">
              <div classNameName="flex items-center -mx-3 sm:-mx-4">
                <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                  <div classNameName="py-3 sm:py-4">
                    <img
                      src="http://161.35.219.128:5000/media/image/Dilnoza.jpg"
                      alt=""
                      classNameName="w-full rounded-2xl"
                    />
                  </div>
                  <div classNameName="py-3 sm:py-4">
                    <img
                      src="https://fati.uz/uploads/1/1GGPXI_QRnXMB7xzc3REdMOI1hF76O2h.jpg"
                      alt=""
                      classNameName="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div classNameName="w-full px-3 sm:px-4 xl:w-1/2">
                  <div classNameName="relative z-10 my-4">
                    <img
                      src="data:image/jpeg;base64,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  "
                      alt=""
                      classNameName="w-full rounded-2xl h-[250px] "
                    />
                    <span classNameName="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="1.66667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 1.66667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 16.3333 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 31 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 45.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3334"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 60.3334 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 88.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 117.667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 74.6667 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 103 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy={104}
                          r="1.66667"
                          transform="rotate(-90 132 104)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 31 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="89.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 89.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 103 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="89.3338"
                          r="1.66667"
                          transform="rotate(-90 132 89.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="74.6673"
                          r="1.66667"
                          transform="rotate(-90 1.66667 74.6673)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 16.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 31 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 31 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 45.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="31.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 31.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 60.3333 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 60.3333 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 88.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 88.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 117.667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 117.667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 74.6667 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 74.6667 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 103 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 103 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="74.6668"
                          r="1.66667"
                          transform="rotate(-90 132 74.6668)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="30.9998"
                          r="1.66667"
                          transform="rotate(-90 132 30.9998)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 1.66667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 16.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 31 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 31 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 45.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 60.3333 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 60.3333 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 88.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 88.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 117.667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 117.667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 74.6667 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 74.6667 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 103 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 103 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="60.0003"
                          r="1.66667"
                          transform="rotate(-90 132 60.0003)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="16.3333"
                          r="1.66667"
                          transform="rotate(-90 132 16.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 1.66667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.66667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 1.66667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 16.3333 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="16.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 16.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 31 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={31}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 31 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="45.3333"
                          r="1.66667"
                          transform="rotate(-90 45.6667 45.3333)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="45.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 45.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 60.3333 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="60.3333"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 60.3333 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 88.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="88.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 88.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 117.667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="117.667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 117.667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 74.6667 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="74.6667"
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 74.6667 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 103 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={103}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 103 1.66683)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="45.3338"
                          r="1.66667"
                          transform="rotate(-90 132 45.3338)"
                          fill="#3056D3"
                        />
                        <circle
                          cx={132}
                          cy="1.66683"
                          r="1.66667"
                          transform="rotate(-90 132 1.66683)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div classNameName="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div classNameName="mt-10 lg:mt-0">
                <span classNameName="block mb-4 text-lg font-semibold text-matn-color">
                  Reliable Information
                </span>
                <h2 classNameName="mb-5 text-3xl font-bold text-matn-color dark:text-matn-color sm:text-[40px]/[48px]">
                  About the creators of the project
                </h2>
                <p classNameName="mb-5 text-base text-matn-color">
                  In the coverage of Uzbek ancient archaeological sources in Uzbekistan and in the world and about news related to them
                </p>
                <p classNameName="mb-8 text-base text-matn-color">
                  The information is posted on the basis of investigation and research by senior staff and scientists of the University of History of the Academy of History of Uzbekistan, and each source is reliable.
                </p>
                {/* <a
                  href="javascript:void(0)"
                  classNameName="inline-flex animate-bounce  items-center justify-center h-[40px] text-base font-medium text-center text-matn-color border border-matn-color rounded-[50%] w-[40px] bg-primary hover:bg-opacity-90"
                >
                  <FaArrowDownLong />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-4 overflow-hidden ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between mb-10 -m-2">
            <div className="w-auto p-2">
              <h2 className="font-heading text-3xl font-semibold py-4">Loyha Raxbari va ishtrokchilari</h2>
            </div>
            <div className="w-auto p-2">
              <a className="flex flex-wrap items-center hover:text-neutral-500" href="#">
                <span className="mr-2.5">Keyingisi</span>
                <svg width="17" height="16" viewbox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.83333 3.33331L14.5 7.99998M14.5 7.99998L9.83333 12.6666M14.5 7.99998L2.5 7.99998" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -m-3 py-4 " >
            <div className="w-full sm:w-1/3 p-3">
              <a className="inline-block h-full bg-white border overflow-hidden rounded-xl" href="#">
                <img className="w-full object-cover h-[280px]" src="http://161.35.219.128:5000/media/image/Ustoz.jpg" alt="" />
                <div className="p-6">
                  <p className="mb-8 text-xl font-medium">Tarix Universiteti Direktori, Prafessor</p>
                  <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <p className="text-neutral-500">Azamat Ziyo</p>
                    </div>

                  </div>
                </div>
              </a>
            </div>
            <div className="w-full sm:w-1/3 p-3">
              <a className="inline-block h-full bg-white border overflow-hidden rounded-xl" href="#">
                <img className="w-full object-cover h-[280px]" src="http://161.35.219.128:5000/media/image/Dilnoza.jpg" alt="" />
                <div className="p-6">
                  <p className="mb-8 text-xl font-medium">Fan doktori Loyha rahbari o'rinbosari</p>
                  <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <p className="text-neutral-500">Dilnoza Jumayeva</p>
                    </div>

                  </div>
                </div>
              </a>
            </div>
            <div className="w-full sm:w-1/3 p-3">
              <a className="inline-block h-full bg-white border overflow-hidden rounded-xl" href="#">
                <img className="w-full object-cover h-[280px]" src="http://161.35.219.128:5000/media/image/Odil.jpg" alt="" />
                <div className="p-6">
                  <p className="mb-8 text-xl font-medium">Loyha tekshiruv rahbari fan doktori</p>
                  <div className="flex flex-wrap items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <p className="text-neutral-500">Odil Saparov</p>
                    </div>

                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section> */}


      <section className="relative py-20 md:py-24 overflow-hidden">
        <img className="absolute top-0 left-0" src="saturn-assets/images/team/light-blue.png" alt="" />
        <img className="absolute bottom-0 right-0 mr-32" src="saturn-assets/images/team/light-orange.png" alt="" />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-2xl lg:max-w-3xl mx-auto xl:max-w-7xl">
            <div className="flex flex-wrap mb-20 -mx-4 items-center">
              <div className="w-full xl:w-1/2 px-4">
                <div>
                  <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-matn-color mb-8">
                    <span className="font-serif italic">Loyha a'zolari  </span>
                    {/* <span >Team</span> */}
                  </h1>
                </div>
              </div>
              <div className="w-full xl:w-1/2 px-4">
                <div className="max-w-md xl:ml-auto">
                  <p className="text-lg text-matn-color mb-6">Loyhada qatnashgan ishchi guruhi Tarix unversitetining hodimlari sanaladi. </p>
                  <a className="inline-flex py-4 px-6 items-center text-sm text-orange-900 font-semibold bg-white border border-gray-200 hover:border-orange-900 rounded-full transition duration-200" href="#">
                    <span className="mr-4 text-matn-color">To'liq ma'lumot</span>
                    <span>
                      <svg width="8" height="12" viewbox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.83 5.28999L2.59 1.04999C2.49704 0.956266 2.38644 0.881872 2.26458 0.831103C2.14272 0.780334 2.01202 0.754196 1.88 0.754196C1.74799 0.754196 1.61729 0.780334 1.49543 0.831103C1.37357 0.881872 1.26297 0.956266 1.17 1.04999C0.983753 1.23736 0.879211 1.49081 0.879211 1.75499C0.879211 2.01918 0.983753 2.27263 1.17 2.45999L4.71 5.99999L1.17 9.53999C0.983753 9.72736 0.879211 9.98081 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.70999C6.92373 6.61703 6.99813 6.50643 7.04889 6.38457C7.09966 6.26271 7.1258 6.13201 7.1258 5.99999C7.1258 5.86798 7.09966 5.73728 7.04889 5.61542C6.99813 5.49356 6.92373 5.38296 6.83 5.28999Z" fill="currentColor"></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 -mb-12">
              <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12">
                <div className="max-w-xs md:max-w-none mx-auto">
                  <img className="block mb-4 w-full h-72 object-cover rounded-3xl" src="http://161.35.219.128:5000/media/image/Odil.jpg" alt="" />
                  <h5 className="text-2xl font-semibold text-matn-color mb-2 italic">Odil aka familyasi</h5>
                  <span className="text-matn-color">Fan Doktori</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12">
                <div className="max-w-xs md:max-w-none mx-auto">
                  <img className="block mb-4 w-full h-72 object-cover rounded-3xl" src="http://161.35.219.128:5000/media/image/Odil.jpg" alt="" />
                  <h5 className="text-2xl font-semibold text-matn-color mb-2 italic">Mehnat Kashev</h5>
                  <span className="text-matn-color">Fanlan nomzodi</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12">
                <div className="max-w-xs md:max-w-none mx-auto">
                  <img className="block mb-4 w-full h-72 object-cover rounded-3xl" src="http://161.35.219.128:5000/media/image/Odil.jpg" alt="" />
                  <h5 className="text-2xl font-semibold text-matn-color mb-2 italic">Latif Yuldashev</h5>
                  <span className="text-matn-color">Tahrirchi</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/4 px-4 mb-12">
                <div className="max-w-xs md:max-w-none mx-auto">
                  <img className="block mb-4 w-full h-72 object-cover rounded-3xl" src="http://161.35.219.128:5000/media/image/Odil.jpg" alt="" />
                  <h5 className="text-2xl font-semibold text-matn-color mb-2 italic">Zafar Turopov</h5>
                  <span className="text-matn-color">Ko'chirmachi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default AboutUs;
