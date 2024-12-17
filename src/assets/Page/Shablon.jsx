import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DataService } from '../config/dataService';
import { endpoints } from '../config/endpoints';
import { IoMdEye } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { FaPlay, FaStar } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion';
import LoaderCard from '../Components/component/LoaderCard';
import Skeleton from '../Components/component/Skleton';
import SkletonFilter from '../Components/component/SkletonFilter';
import { LuRotate3D } from 'react-icons/lu';
import { FaGlobeAmericas } from 'react-icons/fa';
import { GrTextWrap } from 'react-icons/gr';
import { BiSolidVideos } from 'react-icons/bi';
import { FaImages } from 'react-icons/fa';
import { PiFileAudioFill } from 'react-icons/pi';
import { IoCloseOutline } from 'react-icons/io5';
import { CiPause1 } from 'react-icons/ci';
import { TiArrowLoop } from 'react-icons/ti';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardDetailMap from '../Components/component/CardDetailMap';
import { saveAs } from 'file-saver';
import VideoLink from '../Components/component/VideoLink';
import MyErrorBoundary from '../Components/component/MyErrorBoundary';

export default function Shablon() {
  const [filters1, setFilters1] = useState([]);
  const [periodFilter, setPeriodFilter] = useState(null);
  const [selectedPeriods, setSelectedPeriods] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [ochil, setOchil] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileSize = 1024;
  const [progress, setProgress] = useState(0);
  const handleDownload = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    setProgress(0);
    const pdfUrl = 'path/to/your/pdf/file.pdf';
    await fetch(pdfUrl)
      .then((response) => {
        const total = parseInt(response.headers.get('content-length'), 10);
        const reader = response.body.getReader();
        let receivedLength = 0;
        return new Response(
          new ReadableStream({
            start(controller) {
              function push() {
                reader.read().then(({ done, value }) => {
                  if (done) {
                    controller.close();
                    return;
                  }
                  receivedLength += value.length;
                  setProgress((receivedLength / total) * 100);
                  controller.enqueue(value);
                  push();
                });
              }
              push();
            },
          }),
        );
      })
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'downloaded-file.pdf');
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  const navigate = useNavigate();
  const route = useParams();

  const togglePeriod = (periodId) => {
    if (selectedPeriods.includes(periodId)) {
      setSelectedPeriods([]);
      setPeriodFilter(null);
    } else {
      setSelectedPeriods([periodId]);
      setPeriodFilter(periodId);
    }
    setCurrentPage(1); // Filter o'zgarganda birinchi sahifaga o'tish
  };

  const toggleFilter = (filterId) => {
    setFilters1((prevFilters) => {
      if (prevFilters.includes(filterId)) {
        return prevFilters.filter((id) => id !== filterId);
      } else {
        return [...prevFilters, filterId];
      }
    });
    setCurrentPage(1); // Filter o'zgarganda birinchi sahifaga o'tish
  };

  const fetchData = async (page = 1) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (filters1.length > 0) {
        filters1.forEach((filter) => {
          queryParams.append('filters', filter);
        });
      }
      if (periodFilter) {
        queryParams.append('period_filter', periodFilter);
      }
      queryParams.append('page', page);

      const fullUrl = `${endpoints.categoryResourceApiById(
        `${route?.id}/`,
      )}?${queryParams.toString()}`;
      const response = await DataService.get(fullUrl);
      setApiData(response);
      setTotalPages(Math.ceil(response.resources.count / 20)); // Sahifa sonini hisoblash (20 elementdan iborat deb hisobladik)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    setCurrentPage(1); // Sahifa yuklanganda currentPage ni 1 ga o‘rnatish
  }, [route.id]);

  useEffect(() => {
    fetchData(currentPage);
  }, [filters1, periodFilter, route.id, currentPage]);

  const handleCategoryClick = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Sahifalashni yaratish
  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={`px-2 py-1 mx-1 rounded ${
              i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {i}
          </button>,
        );
      } else if (
        (i === currentPage - 2 || i === currentPage + 2) &&
        i !== 1 &&
        i !== totalPages
      ) {
        pages.push(
          <button
            key={`dots-${i}`}
            className="px-2 py-1 mx-1 rounded bg-gray-200"
          >
            ...
          </button>,
        );
      }
    }

    return (
      <div className="flex items-center justify-center m-14">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          {'<'}
        </button>
        {pages}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 mx-1 bg-gray-200 rounded disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>
    );
  };
  // const handleCategoryClick = (categoryId) => {
  //   setOpenCategory(openCategory === categoryId ? null : categoryId);
  // };
  return (
    <>
      <div className="shablon-container bg-transparent">
        <div className="filt-cont-shablonmanba  min-w-[30%] max-w-[35%]">
          <div className="sidebar-filter min-w-[60%] max-w-[100%] ">
            <div className="bar-filter1 max-h-[100vh] min-w-[85%] min-h-[50vh] pb-[40px]   overflow-auto">
              {apiData?.category ? (
                <h4 className="p-[20px] flex justify-center text-[30px] ">
                  {apiData?.category}
                </h4>
              ) : (
                <SkletonFilter />
              )}
              {apiData?.period_filters?.length > 0 ? (
                <div className="transition-all duration-500 px-[40px]">
                  <button
                    onClick={() => setOchil(!ochil)}
                    className={
                      ochil
                        ? ' w-[100%] text-[20px] px-[15px] bg-[#40403F] rounded hover:bg-[#191a19] transition-all duration-500 py-[15px]'
                        : ' w-[100%] text-[20px] px-[10px] hover:bg-[#1E201E] transition-all duration-500 py-[15px]'
                    }
                    style={{
                      textAlign: 'left',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                  >
                    Davr bo'yicha
                    <span
                      style={{
                        fontSize: '16px',
                        position: 'absolute',
                        right: '20px',
                        top: '30%',
                        transition: 'transform 0.3s',
                        transform: ochil ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  <AnimatePresence>
                    {ochil && (
                      <motion.div
                        className="p-[px]  bg-[#43434223] text-[!red]"
                        initial={{ opacity: 0, y: '-30%', scale: 0.5 }}
                        animate={{ opacity: 1, y: '0%', scale: 1 }}
                        exit={{ opacity: 0, y: '-30%', scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {apiData?.period_filters?.map((period) => (
                          <li
                            key={period?.id}
                            className="py-[15px] cursor-pointer hover:bg-[#3E3E3E] px-[20px] flex items-center justify-between "
                            onClick={() => {
                              setPeriodFilter(period.id);
                              togglePeriod(period.id);
                            }}
                          >
                            <span className="truncate w-[60%]">
                              {period?.title}
                            </span>
                            <input
                              type="checkbox"
                              className="w-[20px]"
                              checked={selectedPeriods.includes(period.id)}
                              readOnly
                              name="birbalo"
                            />
                          </li>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                ''
              )}
              <div className="transition-all duration-500">
                {apiData?.filter_categories?.map((category) => (
                  <div key={category.id} className="px-[40px]">
                    <button
                      onClick={() => handleCategoryClick(category.id)}
                      className={
                        openCategory === category.id
                          ? ' w-[100%] text-[20px] px-[15px] bg-[#40403F] rounded hover:bg-[#191a19] transition-all duration-500 py-[15px]'
                          : ' w-[100%] text-[20px] rounded px-[10px] hover:bg-[#1E201E] transition-all duration-500 py-[15px]'
                      }
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        cursor: 'pointer',
                        position: 'relative',
                      }}
                    >
                      {category.title}
                      <span
                        style={{
                          fontSize: '16px',
                          position: 'absolute',
                          right: '20px',
                          top: '30%',
                          transition: 'transform 0.3s',
                          transform:
                            openCategory === category.id
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                        }}
                      >
                        ▼
                      </span>
                    </button>
                    <AnimatePresence>
                      {openCategory === category.id && (
                        <motion.div
                          className="  bg-[#43434043]"
                          initial={{ opacity: 0, y: '-30%', scale: 0.5 }}
                          animate={{ opacity: 1, y: '0%', scale: 1 }}
                          exit={{ opacity: 0, y: '-30%', scale: 0.5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {apiData?.filters
                            ?.filter(
                              (filter) =>
                                filter.filter_category === category.id,
                            )
                            .map((filter) => (
                              <li
                                key={filter.id}
                                className="py-[15px] px-[20px] cursor-pointer hover:bg-[#3E3E3E] flex items-center justify-between "
                                onClick={() => toggleFilter(filter.id)}
                              >
                                <span>{filter.title}</span>
                                <input
                                  type="checkbox"
                                  className="w-[20px] h-[20px] text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-red transition duration-200 ease-in-out hover:bg-red"
                                  checked={filters1.includes(filter.id)} // Check if filter is selected
                                  readOnly
                                />
                              </li>
                            ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="card-container-shablon   min-w-[65%] max-w-[65%] ">
          {loading ? ( // Display loader if loading
            <div className="flex flex-col gap-[20px] pl-[100px]  justify-start  sticky top-[0px] h-[max-content] min-w-[100%]">
              <Skeleton />
            </div>
          ) : // Replace with your loader component
          apiData?.resources?.results?.length > 0 ? (
            apiData?.resources?.results.map((e, i) => (
              // <div className="flex flex-col justify-center  h-[max-content] " key={e?.id}>
              //   <div
              //     onClick={() => navigate(`/cardDetail/${e?.id}`)}
              //     className="relative flex flex-col cursor-pointer border-0 md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border-white bg-[#303030]"
              //   >
              //     <div className="w-full  grid  rounded">
              //       <img src={e?.image} alt="tailwind logo" className="bg-[#191a19] rounded  w-[300px] h-[200px]" />

              //       <div className=" w-[100%] flex justify-center  text-white bg-white   pt-[10px]  gap-[15px]">
              //         <span className="flex gap-[3px] text-[15px] items-center"><IoMdEye className="text-[18px]" /> 20534</span>
              //         <span className="flex gap-[3px] text-[15px] items-center">
              //           <FaStar className="text-[16px]" /> 2900
              //         </span>
              //         <span className="flex gap-[3px] text-[15px] items-center">
              //           <MdMessage className="text-[18px]" /> 2900
              //         </span>
              //       </div>

              //     </div>
              //     <div className="w-full md:w-2/3 bg-[#303030] flex gap-[20px] flex-col space-y-2 p-3">
              //       <div className="flex gap-4 items-center justify-end w-[100%]">
              //         <div className="flex items-center text-white">

              //         </div>
              //       </div>
              //       <h3 className="font-[#1E201E] text-white md:text-[25px] text-xl line-clamp-3">{e?.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, consectetur!</h3>
              //       <p className="md:text-lg text-white lg:w-[400px] line-clamp-2 text-base">
              //         <span>{e?.attributes[0]?.title}</span>: {e?.attributes[0]?.description}
              //       </p>
              //     </div>
              //   </div>
              // </div>
              <div
                className="w-[85%] flex items-center gap-1 h-[300px]"
                key={e?.id}
              >
                {/* img cont */}
                <div className="w-[33%] pl-[10px] h-[95%]">
                  <div
                    className="bg-black h-[85%] rounded"
                    onClick={() => navigate(`/cardDetail/${e?.id}`)}
                    style={{ backgroundImage: `url(${e?.image})` }}
                  >
                    {/* img */}
                  </div>
                  <div className=" w-[100%] flex justify-center  text-white   pt-[15px]  gap-[15px]">
                    <span className="flex gap-[3px] text-[15px] items-center">
                      <IoMdEye className="text-[18px]" /> 20534
                    </span>
                    <span className="flex gap-[3px] text-[15px] items-center">
                      <FaStar className="text-[16px]" /> 2900
                    </span>
                    <span className="flex gap-[3px] text-[15px] items-center">
                      <MdMessage className="text-[18px]" /> 2900
                    </span>
                  </div>
                </div>

                {/* text cont */}

                <div className="w-[67%] h-[95%] justify-between  p-[10px] flex items-center flex-col ">
                  <h2 className="line-clamp-3  text-white w-[100%]  text-[30px] font-extrabold ">
                    {/* title */}
                    {e?.title}
                  </h2>
                  <p className="md:text-lg text-white w-[100%] line-clamp-2 text-base">
                    <span>{e?.attributes[0]?.title}</span>:{' '}
                    {e?.attributes[0]?.description}
                  </p>

                  <div className="flex gap-[20px] items-center flex-wrap w-[100%]">
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      disabled={
                        e?.audios && e?.audios?.length > 0 ? false : true
                      }
                      onClick={() =>
                        document.getElementById(`audio${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.audios && e?.audios?.length > 0
                            ? '#fff'
                            : '#a9a7a7',
                        cursor:
                          e?.audios && e?.audios?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                    >
                      Eshtuv <PiFileAudioFill className="text-[20px]" />{' '}
                    </button>
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      onClick={() =>
                        document.getElementById(`rasm${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.galleries && e?.galleries?.length > 0
                            ? '#fff'
                            : '#a9a7a7',
                        cursor:
                          e?.galleries && e?.galleries?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      disabled={
                        e?.galleries && e?.galleries?.length > 0 ? false : true
                      }
                    >
                      Sur'at <FaImages className="text-[20px]" />{' '}
                    </button>
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      onClick={() =>
                        document.getElementById(`text${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.files && e?.files?.length > 0 ? '#fff' : '#a9a7a7',
                        cursor:
                          e?.files && e?.files?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      disabled={e?.files && e?.files?.length > 0 ? false : true}
                    >
                      Matn <GrTextWrap className="text-[20px]" />
                    </button>
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      onClick={() =>
                        document.getElementById(`map${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.locations && e?.locations?.length > 0
                            ? '#fff'
                            : '#a9a7a7',
                        cursor:
                          e?.locations && e?.locations?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      disabled={
                        e?.locations && e?.locations?.length > 0 ? false : true
                      }
                    >
                      Xarita <FaGlobeAmericas className="text-[20px]" />
                    </button>
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      onClick={() =>
                        document.getElementById(`modul${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.virtual_realities &&
                          e?.virtual_realities?.length > 0
                            ? '#fff'
                            : '#a9a7a7',
                        cursor:
                          e?.virtual_realities &&
                          e?.virtual_realities?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      disabled={
                        e?.virtual_realities && e?.virtual_realities?.length > 0
                          ? false
                          : true
                      }
                    >
                      3D <LuRotate3D className="text-[20px]" />{' '}
                    </button>
                    <button
                      className="flex gap-[10px] items-center  cursor-pointer  text-white"
                      onClick={() =>
                        document.getElementById(`videos${i}`).showModal()
                      }
                      style={{
                        color:
                          e?.videos && e?.videos?.length > 0
                            ? '#fff'
                            : '#a9a7a7',
                        cursor:
                          e?.videos && e?.videos?.length > 0
                            ? 'pointer'
                            : 'not-allowed',
                      }}
                      disabled={
                        e?.videos && e?.videos?.length > 0 ? false : true
                      }
                    >
                      Ko'ruv <BiSolidVideos className="text-[20px]" />{' '}
                    </button>
                  </div>
                  <dialog
                    id={`audio${i}`}
                    className="modal w-full bg-[#000000aa] h-full m-auto  "
                  >
                    <form
                      method="dialog"
                      className=" w-[100%] flex justify-end"
                    >
                      <button className="btn text-[30px] text-[#fff]">
                        <IoCloseOutline />
                      </button>
                    </form>
                    <div className="w-full h-[90%] flex items-center ">
                      <div className="w-[500px] mx-auto p-6 bg-white rounded-lg shadow-lg">
                        {e?.audios?.map((n, i) => (
                          <AudioPlayer
                            src={n?.audio}
                            title={n?.title}
                            key={n?.id || i + 1}
                          />
                        ))}
                      </div>
                    </div>
                  </dialog>
                  <dialog
                    id={`rasm${i}`}
                    className="modal w-full  bg-[#000000aa] h-full m-auto  "
                  >
                    <form
                      method="dialog"
                      className=" w-[100%] flex justify-end"
                    >
                      <button className="btn text-[30px] text-[#fff]">
                        <IoCloseOutline />
                      </button>
                    </form>
                    <Swiper className="mySwiper h-[80vh]">
                      {e?.galleries?.map((m) => (
                        <SwiperSlide
                          key={m?.id}
                          className="text-white bg-no-repeat bg-contain bg-center "
                          style={{ backgroundImage: `url(${m?.image})` }}
                        ></SwiperSlide>
                      ))}
                    </Swiper>
                  </dialog>
                  <dialog
                    id={`videos${i}`}
                    className="modal w-full bg-[#000000aa] h-full m-auto  "
                  >
                    <form
                      method="dialog"
                      className=" w-[100%] flex justify-end"
                    >
                      <button className="btn text-[30px] text-[#fff]">
                        <IoCloseOutline />
                      </button>
                    </form>
                    <div className="h-[90%]">
                      {e?.videos?.map((r) => (
                        <MyErrorBoundary>
                          <VideoLink url={r?.link} id={r?.id} />
                        </MyErrorBoundary>
                      ))}
                    </div>
                  </dialog>
                  <dialog
                    id={`map${i}`}
                    className="bg-[#000000aa] w-full h-[100vh] m-auto"
                  >
                    <form
                      method="dialog"
                      className=" w-[100%] flex justify-end"
                    >
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]">
                        <IoCloseOutline />
                      </button>
                    </form>
                    <div className="flex justify-center items-center h-[85%]">
                      <CardDetailMap location={e?.locations} />
                    </div>
                  </dialog>
                  <dialog
                    id={`modul${i}`}
                    className="bg-[#000000aa] w-full h-[100vh] m-auto"
                  >
                    <form
                      method="dialog"
                      className=" w-[100%] flex justify-end"
                    >
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn text-[30px] text-[#fff]">
                        <IoCloseOutline />
                      </button>
                    </form>
                    <div className="flex justify-center items-center h-[85%]">
                      <div className="relative  flex flex-col gap-[20px] items-center">
                        <div className="mt-4">
                          <div className="flex justify-between w-[400px] text-sm text-gray-500">
                            <span>0 KB</span>
                            <span>{fileSize} KB</span>
                          </div>
                          <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-blue-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${progress}%` }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                        </div>
                        <motion.button
                          onClick={handleDownload}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative px-6 py-3 font-bold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full shadow-lg transition-transform transform ${
                            isLoading ? 'animate-pulse' : ''
                          }`}
                        >
                          {isLoading ? (
                            <>
                              <span className="absolute inset-0 flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-white animate-spin"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                              </span>
                              Yuklanmoqda...
                            </>
                          ) : (
                            'PDF-ni yuklab olish'
                          )}
                        </motion.button>
                        <AnimatePresence>
                          {isSuccess && (
                            <motion.div
                              initial={{ opacity: 0, y: -50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -50 }}
                              transition={{ duration: 0.5 }}
                              className="absolute top-0 left-0 w-[400px] flex items-center justify-center bg-green-500 text-white font-bold rounded-full"
                              style={{ top: '-3rem' }} // Adjust the position above the button
                            >
                              Muvaffaqiyatli yuklandi!
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </dialog>
                  <div className="w-[100%] flex justify-end text-white ">
                    <div className="w-[20%] flex gap-[10px] ">
                      saqlash <FaStar className="text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col sticky top-[20px] justify-center items-center bg-[#1E201E] h-[80vh] w-[100%] ">
              <img
                className="w-[150px]"
                src="https://icons.iconarchive.com/icons/pelfusion/flat-folder/128/Cross-Folder-icon.png"
                alt=""
              />
              <h2 className="text-[white] text-[45px] ">Ma'lumot topilmadi</h2>
            </div>
          )}
          {/* <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            {'<'}
          </button>
          {renderPagination()}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            {'>'}
          </button>
        </div> */}
        </div>
      </div>
      <div className=" bg-[#202020] h-[100px] flex justify-center items-center ">
        {renderPagination()}
      </div>
    </>
  );
}

// Audio

const AudioPlayer = ({ src, key, title }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const seekTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handlePlaybackRateChange = (event) => {
    const rate = event.target.value;
    audioRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const toggleLoop = () => {
    audioRef.current.loop = !isLooping;
    setIsLooping(!isLooping);
  };

  return (
    <div className="audio-player overflow-hidden" key={key}>
      <div className="audio-title">{title}</div>

      <audio ref={audioRef} src={src}></audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? (
          <CiPause1 className="text-[25px]" />
        ) : (
          <FaPlay className="text-[25px]" />
        )}
      </button>

      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />
      <div className="flex justify-between items-center w-[100%]">
        <div>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
        <button onClick={toggleLoop} className="flex items-center">
          {isLooping ? (
            <TiArrowLoop className="text-[25px]" />
          ) : (
            <TiArrowLoop className="text-[#ccc] text-[25px]" />
          )}
        </button>
      </div>

      <label className="flex gap-2">
        Playback Speed:
        <select value={playbackRate} onChange={handlePlaybackRateChange}>
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </label>
    </div>
  );
};
