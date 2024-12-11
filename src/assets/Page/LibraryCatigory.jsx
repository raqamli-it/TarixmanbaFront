import React, { useEffect, useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useMotionValueEvent } from 'framer-motion';
import { useScroll } from 'framer-motion';
import { DataService } from '../config/dataService';
import { endpoints } from '../config/endpoints';
import Breadcrumb from '../Components/component/Breadcrumb';

export default function () {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // console.log("Page scroll: ", latest);
  });

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.libraryCategory);
    console.log(response.results, 'libCategoryssss');
    setApiData(response);
    let x = document.querySelector('title');
    x.textContent = `Aqilly ktubxona `;
  };
  useEffect(() => {
    fetchData();
  }, []);

  // ҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳҳ

  const [activeButton, setActiveButton] = useState('Product Updates');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClass = (button) =>
    activeButton === button
      ? 'px-4 py-2 bg-black text-white font-semibold rounded-full'
      : 'px-4 py-2 bg-gray-100 text-black font-semibold rounded-full';

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
                Kutubxonaga hush kelding
              </h2>
              <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet elit ut aliquam
              </p>
              {/* Buttons */}
              <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
                <button
                  className={buttonClass('Engaging Articles')}
                  onClick={() => handleButtonClick('Engaging Articles')}
                >
                  katigorya 1
                </button>
                <button
                  className={buttonClass('Product Updates')}
                  onClick={() => handleButtonClick('Product Updates')}
                >
                  katigorya 2
                </button>
                <button
                  className={buttonClass('Reflex Workflows')}
                  onClick={() => handleButtonClick('Reflex Workflows')}
                >
                  katigorya 3
                </button>
                <button
                  className={buttonClass('Artificial Intelligence')}
                  onClick={() => handleButtonClick('Artificial Intelligence')}
                >
                  katigorya 4
                </button>
              </div>
            </div>
            {/* Blog Content */}
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Blog Item */}
                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtkyVEQXHNYiPAiP1WX5N5Dw8eW89g5-Jeiw&s"
                      alt=""
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold mt-2">
                        Here is the title for this News
                      </h2>
                      <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
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

                {/* Blog Item */}
                <div className=" bg-[#14293D] text-white rounded-lg overflow-hidden">
                  <div className="relative h-80">
                    <img
                      className="h-80 w-full object-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVckFqF3CiL0i_zbXL-gYmBneBmQTn41-0Q&s"
                      alt=""
                    />
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h2 className="text-lg font-semibold mt-2">
                        Here is the title for this News
                      </h2>
                      <p>Lorem ipsum dolor sit amet elit ut aliquam</p>
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Blog Item */}
                <div className="bg-gray-50 text-white bg-[#14293D] rounded-lg overflow-hidden">
                  <div className="relative  h-72">
                    <img
                      className="h-72 w-full object-cover"
                      src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mt-2">
                      Here is the title for this News
                    </h2>
                    <p className="text-gray-500">
                      We make every expression of Hero Spirits with precision
                      and passion
                    </p>
                  </div>
                </div>
                {/* Blog Item */}
                <div className="bg-gray-50 text-white bg-[#14293D] rounded-lg overflow-hidden">
                  <div className="relative  h-72">
                    <img
                      className="h-72 w-full object-cover"
                      src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mt-2">
                      Here is the title for this News
                    </h2>
                    <p className="text-gray-500">
                      We make every expression of Hero Spirits with precision
                      and passion
                    </p>
                  </div>
                </div>
                {/* Blog Item */}
                <div className="bg-gray-50 text-white bg-[#14293D] rounded-lg overflow-hidden">
                  <div className="relative  h-72">
                    <img
                      className="h-72 w-full object-cover"
                      src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                      alt=""
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mt-2">
                      Here is the title for this News
                    </h2>
                    <p className="text-gray-500">
                      We make every expression of Hero Spirits with precision
                      and passion
                    </p>
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
