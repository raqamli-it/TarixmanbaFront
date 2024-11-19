import React, { useEffect, useState } from "react";
import bgPattern from "../../img/bg_pattern.png";
import { endpoints } from "../../config/endpoints";
import { DataService } from "../../config/dataService";


export default function Acardion() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await DataService.get(endpoints?.slider);
      setApiData(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /////////////////////// api end
  useEffect(() => {
    fetchData();
  }, []);



  return (

    <div className="bodys ">
      <div className="wrapper-3d">
        <div className="items-3d">

          {apiData?.results?.map((item, i) => (
            apiData?.results.length > 11 ?
              i <= 7 ?
                <div key={item.id} className="item-3d  " tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">{item.title}</h3>
                </div> : "" : i <= 5 ?
                <div key={item.id} className="item-3d  " tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">{item.title}</h3>
                </div> : ""
          ))}
        </div>

        <div className="items-3d">
          {apiData?.results?.map((item, i) => (
            apiData?.results.length > 11 ?
              i > 7 ?
                <div key={item.id} className="item-3d  " tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">{item.title}</h3>
                </div> : "" : i > 5 ?
                <div key={item.id} className="item-3d  " tabIndex="0"
                  style={{ backgroundImage: `url(${item.file}) ` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">{item.title}</h3>
                </div> : ""
          ))}
        </div>


      </div>
      <div className="accardion_pattern">
        <img src={bgPattern} alt="" />
      </div>
    </div>

  );
}