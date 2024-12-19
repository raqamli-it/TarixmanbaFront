import React, { useEffect, useState } from "react";
import bgPattern from "../../img/bg_pattern.png";
import { endpoints } from "../../config/endpoints";
import { DataService } from "../../config/dataService";
import { Link, useNavigate } from "react-router-dom";

import photo1 from "../../img/acardionImages/photo1.jpg";
import photo2 from "../../img/acardionImages/photo2.jpg";
import photo3 from "../../img/acardionImages/photo3.jpg";
import photo4 from "../../img/acardionImages/photo4.jpg";
import photo5 from "../../img/acardionImages/photo5.jpg";
import photo6 from "../../img/acardionImages/photo6.jpg";
import photo7 from "../../img/acardionImages/photo7.jpg";
import photo8 from "../../img/acardionImages/photo8.jpg";
import photo9 from "../../img/acardionImages/photo9.jpg";
import photo10 from "../../img/acardionImages/photo10.jpg";
import photo11 from "../../img/acardionImages/photo11.jpg";
import photo12 from "../../img/acardionImages/photo12.jpg";
import photo13 from "../../img/acardionImages/photo13.jpg";

export default function Acardion() {
  const [apiData, setApiData] = useState([]);

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://backend.tarixmanba.uz/api/category-resource/"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const api = [
    { id: 5, img: photo1, title: "Arxeologiya yodgorliklari" },
    { id: 6, img: photo2, title: "Arxiv hujjatlari" },
    { id: 8, img: photo3, title: "Matbuot" },
    { id: 9, img: photo4, title: "Tangalar" },
    { id: 10, img: photo5, title: "Yozma asarlar" },
    { id: 12, img: photo6, title: "Xalq og'zaki ijodi" },
    { id: 13, img: photo7, title: "Tarixiy hujjatlar" },
    { id: 14, img: photo8, title: "Muhrlar" },
    { id: 15, img: photo9, title: "Tarixiy yodgorliklar" },
    { id: 17, img: photo10, title: "Foto va video manbalar" },
    { id: 18, img: photo11, title: "Bitiklar" },
    { id: 19, img: photo12, title: "San'at asarlari" },
    { id: 20, img: photo13, title: "Tarixiy xaritalar" },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="wrapper-3d h-[400px]">
        <div className="items-3d">
          {api?.slice(0, 7).map((item, idx) => (
            <div
              key={item.id}
              className="item-3d"
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.img})` }}
            >
              <h1
                onClick={() => navigate(`/sources/archive/${item.id}`)}
                className="title-3d text-[20px] text-white font-bold"
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div className="wrapper-3d h-[400px]">
        <div className="items-3d">
          {api?.slice(7, 14).map((item, idx) => (
            <div
              key={item.id}
              className="item-3d"
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.img})` }}
            >
              <h1
                onClick={() => navigate(`/sources/archive/${item.id}`)}
                className="title-3d text-[20px] text-white font-bold"
              >
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      <div className="accardion_pattern">
        <img src={bgPattern} alt="" />
      </div>
    </div>
  );
}
