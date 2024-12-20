import logo from '../img/logo.png'

export default () => {
  return (
    <div className="min-h-screen p-6 sm:p-10 text-gray-200">
      <div className="max-w-3xl lg:max-w-4xl mx-auto bg-white bg-opacity-10 rounded-lg shadow-xl p-8 sm:p-8 backdrop-blur-md">
        <img src={logo} alt="Logo" className='pr-4 w-48'/>
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Biz haqimizda
        </h1>
        <div className="mb-8 p-6 bg-cyan-800 bg-opacity-15 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-white mb-4">
          O‘zbekiston Respublikasi Fanlar akademiyasi Tarix instituti
          </h2>
          <ul className="space-y-4 text-white">
            <li>
              <strong className="text-white"></strong> 100060, Toshkent sh., Mirobod tumani Shahrisabz tor ko‘chasi, 5-uy
            </li>
           
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          

          {/* Aloqa ma'lumotlari */}
          <div>
            <div className="p-6 bg-cyan-800 bg-opacity-15 rounded-lg shadow-md ">
              
              <p className="text-white mb-2">
                <strong>Telefon:</strong>{' '}
                <h1
                  className="text-white "
                >
                  (+998 71) 233-54-70
                </h1>
              </p>
              <p className="text-white mb-2">
                <strong>Fax:</strong>{' '}
                <h1
                  className="text-white"
                >
                  (+998 71) 233-39-91
                </h1>
              </p>
              <p className="text-white mb-2">
                <strong>Rasmiy sayt:</strong>{' '}
                <a
                  href="http://fati.uz/"
                  className="text-white hover:underline"
                >
                  fati.uz
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
