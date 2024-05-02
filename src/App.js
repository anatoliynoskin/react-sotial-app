import './App.css';
import './styles/body.css';
import './styles/card-link.css';
import './styles/arrow-link.css';
import './styles/sotial-list.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Services from "./components/Pages/Services/Services";
import Contacts from "./components/Pages/Contacts/Contacts";
import ObjectsContainer from "./components/Pages/Objects/ObjectsContainer";
import NewsContainer from "./components/Pages/News/NewsContainer";
import ObjectsSingle from './components/Pages/Objects/ObjectsSingle';
import  "./serverData.js";
import {YMaps} from "@pbe/react-yandex-maps";
function App() {
    return <>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <YMaps>
            <BrowserRouter>
              <Header />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="about" element={<About />}/>
                  <Route path="services/*" element={<Services />}>
                      <Route path=":servicesSlug" element={<Services />}/>
                  </Route>
                  <Route path="objects" element={<ObjectsContainer />}/>
                  <Route path="objects/:id" element={<ObjectsSingle />}/>
                  <Route path="news" element={<NewsContainer />}/>
                  <Route path="contacts" element={<Contacts />}/>
              </Routes>
              <Footer />
            </BrowserRouter>
        </YMaps>
    </>
}

export default App;
