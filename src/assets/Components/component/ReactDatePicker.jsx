import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import uz from "date-fns/locale/uz";
import { FaCalendarAlt } from "react-icons/fa";
import { format } from "date-fns";

registerLocale("uz", uz);
setDefaultLocale("uz");

export default function ReactDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hijriList, setHijriList] = useState({ year: "", day: "", month: "" });

  useEffect(() => {
    // setInterval(() => setTime(new Date()), 1000);/
    const manth = new Intl.DateTimeFormat("en-TN-u-ca-islamic", {
      day: "numeric",
      month: "numeric",
      weekday: "long",
      year: "numeric",
    }).format(
      new Date(
        `${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1
        }/${selectedDate.getDate()}`
      )
    );
    // console.log("hijjjjjjjjjjj", manth);
    // console.log(manth.split(" ")[1].slice(0, 2));
    // console.log(
    //   `${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1
    //   }/${selectedDate.getDate()}`,
    //   "datA"
    // );

    switch (manth.split(" ")[1].slice(0, 2)) {
      case "1/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `muharram`,
        });
        break;
      case "2/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `safar`,
        });
        break;
      case "3/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `rabiul Avval`,
        });
        break;
      case "4/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `raius Soniy`,
        });
        break;
      case "5/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `jumodul Avval`,
        });
        break;
      case "6/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `jumodus Soniy`,
        });
        break;
      case "7/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `rajab`,
        });
        break;
      case "8/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `sha'bon`,
        });
        break;
      case "9/":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `ramazon`,
        });
        break;
      case "10":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `shavvol`,
        });
        break;

      case "11":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `zulqa'da`,
        });
        // console.log(hijriList);
        break;

      case "12":
        setHijriList({
          year: `${manth.split("/")[2].slice(0, 4)}-yil`,
          day: `${manth.split("/")[1]}`,
          month: `zulhijja`,
        });
        break;
    }
  }, [selectedDate]);
  // const formattedDate = format(selectedDate, "yyyy 'yil' dd MMMM  ");
  return (
    <>
      <div className="live_clendar_item">
        <FaCalendarAlt className="icons-calendar" />
        <DatePicker
          selected={selectedDate}
          onChange={(e) => setSelectedDate(e)}
          dateFormat={"yyyy-'yil' dd-MMMM   "}
          locale="uz"
        />
        {/* <div>{formattedDate}</div> */}
        {/* {console.log();} */}
        <div className="hijri-sana">{`${hijriList.year} ${hijriList.day}-${hijriList.month}`}</div>
      </div>
    </>
  );
}
