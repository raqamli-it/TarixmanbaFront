import React, { useEffect, useState } from "react";
import bgPattern from "../../img/bg_pattern.png";
import { endpoints } from "../../config/endpoints";
import { DataService } from "../../config/dataService";
import { Link } from "react-router-dom";

export default function Acardion() {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://backend.tarixmanba.uz/api/category-resource/"
      );
      const data = await response.json();
      setApiData(data);
      console.log(data, "wwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  /////////////////////// api end
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="wrapper-3d h-[400px]">
        <div className="items-3d">
          {apiData?.slice(0, 7).map((item, idx) => (
            <Link
              key={item.id}
              to={`/sources/archive/${item.id}`}
              className="item-3d  "
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.image})` }}
            >
              <h3 className="title-3d text-[20px] text-white font-bold">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* <div className="items-3d">
          {apiData?.results?.map((item, i) =>
            apiData?.results.length > 11 ? (
              i <= 7 ? (
                <Link
                  to={`/sources/archive/${item.id}`}
                  key={item.id}
                  className="item-3d  "
                  tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">
                    {item.title}
                  </h3>
                </Link>
              ) : (
                ""
              )
            ) : i <= 5 ? (
              <div
                key={item.id}
                className="item-3d  "
                tabIndex="0"
                style={{ backgroundImage: `url(${item.file})` }}
              >
                <h3 className="title-3d text-[20px] text-white font-bold">
                  {item.title}
                </h3>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        <div className="items-3d">
          {apiData?.results?.map((item, i) =>
            apiData?.results.length > 11 ? (
              i > 7 ? (
                <div
                  key={item.id}
                  className="item-3d  "
                  tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">
                    {item.title}
                  </h3>
                </div>
              ) : (
                ""
              )
            ) : i > 5 ? (
              <div
                key={item.id}
                className="item-3d  "
                tabIndex="0"
                style={{ backgroundImage: `url(${item.file}) ` }}
              >
                <h3 className="title-3d text-[20px] text-white font-bold">
                  {item.title}
                </h3>
              </div>
            ) : (
              ""
            )
          )}
        </div> */}
      </div>

      <div className="wrapper-3d h-[400px]">
        <div className="items-3d">
          {apiData?.slice(8, 13).map((item, idx) => (
            <Link
              to={`/sources/archive/${item.id}`}
              key={item.id}
              className="item-3d"
              tabIndex="0"
              style={{ backgroundImage: `url(${item?.image})` }}
            >
              <h3 className="title-3d text-[20px] text-white font-bold">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* <div className="items-3d">
          {apiData?.results?.map((item, i) =>
            apiData?.results.length > 11 ? (
              i <= 7 ? (
                <Link
                  to={`/sources/archive/${item.id}`}
                  key={item.id}
                  className="item-3d  "
                  tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">
                    {item.title}
                  </h3>
                </Link>
              ) : (
                ""
              )
            ) : i <= 5 ? (
              <div
                key={item.id}
                className="item-3d  "
                tabIndex="0"
                style={{ backgroundImage: `url(${item.file})` }}
              >
                <h3 className="title-3d text-[20px] text-white font-bold">
                  {item.title}
                </h3>
              </div>
            ) : (
              ""
            )
          )}
        </div>

        <div className="items-3d">
          {apiData?.results?.map((item, i) =>
            apiData?.results.length > 11 ? (
              i > 7 ? (
                <div
                  key={item.id}
                  className="item-3d  "
                  tabIndex="0"
                  style={{ backgroundImage: `url(${item.file})` }}
                >
                  <h3 className="title-3d text-[20px] text-white font-bold">
                    {item.title}
                  </h3>
                </div>
              ) : (
                ""
              )
            ) : i > 5 ? (
              <div
                key={item.id}
                className="item-3d  "
                tabIndex="0"
                style={{ backgroundImage: `url(${item.file}) ` }}
              >
                <h3 className="title-3d text-[20px] text-white font-bold">
                  {item.title}
                </h3>
              </div>
            ) : (
              ""
            )
          )}
        </div> */}
      </div>
      <div className="accardion_pattern">
        <img src={bgPattern} alt="" />
      </div>
    </div>
  );
}
