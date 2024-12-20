import React, { useEffect, useState } from "react";
import { useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { DataService } from "../config/dataService";
import { endpoints } from "../config/endpoints";
import Breadcrumb from "../Components/component/Breadcrumb";
import library1 from "../img/libraryCategoriyImages/library1.png";
import library2 from "../img/libraryCategoriyImages/library2.png";
import library3 from "../img/libraryCategoriyImages/library3.png";
import library4 from "../img/libraryCategoriyImages/library4.png";

export default function () {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {});

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.libraryCategory);
    console.log(response.results, "libCategoryssss");
    setApiData(response);
    let x = document.querySelector("title");
    x.textContent = `Aqilly ktubxona `;
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [activeButton, setActiveButton] = useState("Engaging Articles");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClass = (button) =>
    activeButton === button
      ? "px-4 py-2 bg-black text-white font-semibold rounded-full"
      : "px-4 py-2 bg-gray-100 text-black font-semibold rounded-full";

  return (
    <>
      <div className="container-hero">
        <Breadcrumb catigory="Kutubxona" deteil="" link="" />

        <section>
          {/* Container */}
          <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
            <div className="text-center mb-12">
              {/* Title */}
              <h2 className="mb-4 mt-6 text-[white] text-3xl  font-bold md:text-5xl">
                Kutubxonaga
              </h2>

              {/* Buttons */}
              <div className="my-10 md:my-20 flex justify-center gap-3">
                <button
                  className={buttonClass("Engaging Articles")}
                  onClick={() => handleButtonClick("Engaging Articles")}
                >
                  O‘zasarlar
                </button>
                <button
                  className={buttonClass("Product Updates")}
                  onClick={() => handleButtonClick("Product Updates")}
                >
                  Risolalar
                </button>
                <button
                  className={buttonClass("Reflex Workflows")}
                  onClick={() => handleButtonClick("Reflex Workflows")}
                >
                  Maqolalar
                </button>
                <button
                  className={buttonClass("Artificial Intelligence")}
                  onClick={() => handleButtonClick("Artificial Intelligence")}
                >
                  Avtoreferat va dissertatsiyalar
                </button>
              </div>
            </div>
            {/* Blog Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6">
                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src={library1}
                      alt="library1"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-[22px] font-semibold mt-2">
                        O‘zasarlar
                      </h2>
                    </div>
                    <button className="cursor-pointer h-14 w-14">
                      <svg
                        className="h-14 w-14"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                          fill="#14293D"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.625 30H39.3751"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src={library2}
                      alt="library2"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-[22px] font-semibold mt-2">
                        Risolalar
                      </h2>
                    </div>

                    <button className="cursor-pointer h-14 w-14">
                      <svg
                        className="h-14 w-14"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                          fill="#14293D"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.625 30H39.3751"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>



                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src={library3}
                      alt="library3"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-[22px] font-semibold mt-2">
                        Maqolalar
                      </h2>
                    </div>
                    <button className="cursor-pointer h-14 w-14">
                      <svg
                        className="h-14 w-14"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                          fill="#14293D"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.625 30H39.3751"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src={library4}
                      alt="library4"
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-[22px] font-semibold mt-2">
                        Avtoreferat va dissertatsiyalar
                      </h2>
                    </div>


                    <button className="cursor-pointer h-14 w-14">
                      <svg
                        className="h-14 w-14"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                          fill="#14293D"
                          stroke="white"
                          stroke-width="2"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.625 30H39.3751"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="mt-10 md:mt-20 text-center">
                <button className="px-6 py-2 bg-[#14293D] text-white rounded-lg">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
