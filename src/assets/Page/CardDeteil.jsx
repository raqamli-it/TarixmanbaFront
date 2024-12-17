import React, { useEffect, useState } from 'react';
// import image
// import DetailImg from "../assets/img/arxeologiya4.jpg";
import { DataService } from '../config/dataService';
import { endpoints } from '../config/endpoints';
import { useParams } from 'react-router-dom';

import { RiShareBoxLine } from 'react-icons/ri';
import 'swiper/css';
import { FaPlay, FaStar } from 'react-icons/fa6';
import { CiPause1 } from 'react-icons/ci';
import { TiArrowLoop } from 'react-icons/ti';
import Breadcrumb from '../Components/component/Breadcrumb';
// import CardDetailMap from "../components/container/CardDetailMap";
// import Breadcrumb from "../components/container/Breadcrumb";
// import Video from "../components/container/Video";
// import MiniVideo from "../components/container/MiniVideo";

const AudioPlayer = ({ src, title }) => {
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
    <div className="audio-player overflow-hidden">
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

export default function CardDeteil() {
  // img carousel
  const route = useParams();

  // bu qism api lar bilan ishlash uchun
  const [apiData, setApiData] = useState([]);
  const [videos, setFiltvideo] = useState(false);
  const [Fotos, setFotoLink] = useState(false);
  const [Audios, setAudiosLink] = useState(false);
  const [location, setLocation] = useState(false);
  const [locdata, setLocData] = useState(false);
  const [max3d, setMax3d] = useState(false);
  const [Files, setFiles] = useState(false);

  const fetchData = async () => {
    // console.log(route);
    const response = await DataService.get(
      endpoints.categoryResourceDetailById(route?.id),
    );
    setApiData(response);
    console.log(response, 'detaildan chiqdi  shulass');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShare = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${apiData?.title}`);
    const webName = encodeURIComponent(`${apiData?.title}`);
    const imageUrl = encodeURIComponent(`${apiData?.image}`);
    const telegramUrl = `https://t.me/share/url?url=${url}&webName=${webName}&text=${text}%0A%0A${imageUrl}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <>
      <div key={23} id="anker">
        <Breadcrumb
          catigory={apiData?.category_name}
          deteil={apiData?.title}
          link={`/sources/archive/${apiData.category}`}
        />

        <section
          className="bg-[#2b2a2a] m-[20px]"
          style={{
            backgroundColor: 'transparent',
            //backgroundImage: `linear-gradient(12deg, rgba(193, 193, 193,0.05) 0%, rgba(193, 193, 193,0.05) 2%,rgba(129, 129, 129,0.05) 2%, rgba(129, 129, 129,0.05) 27%,rgba(185, 185, 185,0.05) 27%, rgba(185, 185, 185,0.05) 66%,rgba(83, 83, 83,0.05) 66%, rgba(83, 83, 83,0.05) 100%),linear-gradient(321deg, rgba(240, 240, 240,0.05) 0%, rgba(240, 240, 240,0.05) 13%,rgba(231, 231, 231,0.05) 13%, rgba(231, 231, 231,0.05) 34%,rgba(139, 139, 139,0.05) 34%, rgba(139, 139, 139,0.05) 71%,rgba(112, 112, 112,0.05) 71%, rgba(112, 112, 112,0.05) 100%),linear-gradient(236deg, rgba(189, 189, 189,0.05) 0%, rgba(189, 189, 189,0.05) 47%,rgba(138, 138, 138,0.05) 47%, rgba(138, 138, 138,0.05) 58%,rgba(108, 108, 108,0.05) 58%, rgba(108, 108, 108,0.05) 85%,rgba(143, 143, 143,0.05) 85%, rgba(143, 143, 143,0.05) 100%),linear-gradient(96deg, rgba(53, 53, 53,0.05) 0%, rgba(53, 53, 53,0.05) 53%,rgba(44, 44, 44,0.05) 53%, rgba(44, 44, 44,0.05) 82%,rgba(77, 77, 77,0.05) 82%, rgba(77, 77, 77,0.05) 98%,rgba(8, 8, 8,0.05) 98%, rgba(8, 8, 8,0.05) 100%),linear-gradient(334deg, hsl(247,0%,2%),hsl(247,0%,2%))`,
          }}
        >
          <div className="text-white">
            <div className="mx-auto w-full max-w-[90%] px-5 py-12 md:px-10 md:py-16 lg:py-20">
              <div className="flex flex-col items-stretch self-center  text-center">
                <h1 className="mb-5 text-4xl font-bold md:text-6xl pb-[25px]">
                  {apiData?.title}
                </h1>

                <img
                  className="inline-block w-full max-h-[70vh] rounded-2xl object-contain"
                  src={apiData?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[80%] px-5 py-12 md:px-10 md:py-16 lg:pb-20 lg:pt-0">
            <div className="flex min-w-full flex-col items-start gap-y-5">
              <div className="w-[100%] flex justify-end text-white ">
                <div className="w-[10%] flex gap-[10px]  cursor-pointer">
                  saqlash {/*<FaStar className="text-[20px]" />*/}
                  <FaStar className="text-[20px]" />
                </div>
                <div
                  className="w-[15%] flex gap-[10px] cursor-pointer"
                  onClick={handleShare}
                >
                  ulashish <RiShareBoxLine className="text-[20px]" />
                </div>
              </div>

              <div className="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
              {apiData?.contents?.map((e) => (
                <p
                  key={e?.id}
                  className="mb-2 text-lg text-[28px] text-white  texttt"
                  dangerouslySetInnerHTML={{ __html: e?.description }}
                ></p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
import { useRef } from 'react';
