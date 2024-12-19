import React, { useEffect, useState } from "react";
import bgPattern from "../../img/bg_pattern.png";
import { endpoints } from "../../config/endpoints";
import { DataService } from "../../config/dataService";
import { Link, useNavigate } from "react-router-dom";

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="wrapper-3d h-[400px]">
        <div className="items-3d">
          {apiData?.slice(0, 7).map((item, idx) => (
            <div
              key={item.id}
              className="item-3d"
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.image})` }}
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
          {apiData?.slice(8, 13).map((item, idx) => (
            <div
              key={item.id}
              className="item-3d"
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.image})` }}
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
