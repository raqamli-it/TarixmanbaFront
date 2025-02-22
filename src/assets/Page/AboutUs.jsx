import MapComponent from '../Components/component/MapComponent';
import { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import { endpoints } from '../config/endpoints';
import { DataService } from '../config/dataService';

export default () => {
  const [apiData, setApiData] = useState();
  const fetchData = async () => {
    const response = await DataService.get(endpoints.xodimlar);
    // console.log(response);
    setApiData(response);
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <div className="min-h-screen p-6 sm:p-5 text-gray-200">
        <div className="max-w-3xl lg:max-w-4xl mx-auto bg-white bg-opacity-10 rounded-lg shadow-xl p-8 sm:p-8 backdrop-blur-md">
          <img src={logo} alt="Logo" className="pr-4 w-48" />
          <h1 className="text-4xl font-extrabold text-center text-white mb-10">
            Biz haqimizda
          </h1>
          <div className="mb-8 p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-white mb-4">
              O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti
            </h2>
            <ul className="space-y-4 text-white">
              <li>
                <strong className="text-white"></strong> 100060, Toshkent sh.,
                Mirobod tumani Shahrisabz tor ko‘chasi, 5-uy
              </li>
            </ul>
            <br />
            <p className="text-white mb-2">
              <strong>Telefon: (+998 71) 233-54-70</strong>{' '}
            </p>
            <p className="text-white mb-2">
              <strong>Faks: (+998 71) 233-39-91</strong>{' '}
            </p>
            <p className="text-white mb-2">
              <strong>
                Rasmiy sayt:{' '}
                <a
                  href="http://fati.uz/"
                  className="text-blue-600 hover:underline"
                >
                  fati.uz
                </a>
              </strong>{' '}
            </p>
          </div>
          <div style={{ width: '100%', height: '400px', borderRadius: '10px' }}>
            <iframe
              title="Google Maps Location"
              width="100%"
              height="100%"
              frameBorder="5"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.google.com/maps?q=41.32013711137497,69.23430705424853&hl=es;z=14&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container_full">
        <div className="people_box_card">
          <div className="people_container">
            {apiData?.results?.map((ishtirikchilar) => (
              <div key={ishtirikchilar.id} className="people_card">
                <img
                  src={'https://backend.tarixmanba.uz' + ishtirikchilar.image}
                  className="people_card_img"
                  alt="rasm"
                />
                <div className="people_content">
                  <h4>{ishtirikchilar.full_name}</h4>
                  <p>{ishtirikchilar.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
