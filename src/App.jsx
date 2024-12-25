import { Route, Routes } from "react-router";
import Layout from "./Layout";
import Home from "./assets/Page/Home";
import LibraryCatigory from "./assets/Page/LibraryCatigory";
import Login from "./assets/Page/Login";
import News from "./assets/Page/News";
import AboutUs from "./assets/Page/AboutUs";
import ShablonManba from "./assets/Page/Shablon";
import Shablon from "./assets/Page/Shablon";
import LibraryCategoryDetail from "./assets/Page/LibraryCatigoryDeteyl";
import CardDeteil from "./assets/Page/CardDeteil";
import Register from "./assets/Page/Register";
import NotFound from "./assets/Page/NotFound";
import ScrollToTop from "./assets/Components/component/ScrollTutop";
import NewsDetail from "./assets/Page/NewsDetail";

function App() {
  return (
    <>
      <div>
        {/* <CursorAnim /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            {/* <Route path="/aboutus" Component={AboutUs} /> */}
            <Route path="/news/:id" Component={News} />
            <Route path="/library-categories/" Component={LibraryCatigory} />
            {/* <Route path="/model " Component={Model3d} /> */}
            <Route
              path="/libraryDetail/:id"
              Component={LibraryCategoryDetail}
            />
            <Route path="/cardDetail/:id" Component={CardDeteil} />
            {/* <Route path="/media" Compon ent={Media} /> */}
            <Route path="/login" Component={Login} />
            {/* <Route path="/register" Component={Register} /> */}
            <Route path="/sources/:type/:id" Component={Shablon} />

            {/* /news/newsDetail/:id" page  bu saxifa src/assets/Page/NewsDetail shu yerda joylashgan*/}
            <Route path="/news/newsDetail/:id" Component={NewsDetail} />
            <Route path="/aboutus" Component={AboutUs} />

            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
