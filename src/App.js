import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Houses } from "./pages/Houses/Houses";
import { HousesDetail } from "./pages/Houses/HousesDetail/HousesDetail";
import { Characters } from "./pages/Characters/Characters";
import { CharactersDetail } from "./pages/Characters/CharactersDetail/CharactersDetail";
import { Chronology } from "./pages/Chronology/Chronology";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { useTranslation } from 'react-i18next';

export const Context = React.createContext({});

function App() {
  const [page, setPage] = React.useState("");
  const [search, setSearch] = React.useState("");
  
  const { t, i18n } = useTranslation(['translation']);


  const changeLanguage = code => {
      i18n.changeLanguage(code);
  };


  return (
    <div className="App">
      <Context.Provider value={{ page, setPage, search, setSearch, t, changeLanguage }}>
        <Router>
          <Header />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/houses" element={<Houses search={search} />} />
              <Route path="/houses/:name" element={<HousesDetail />} />
              <Route path="/characters" element={<Characters search={search} />} />
              <Route path="/characters/:name" element={<CharactersDetail />} />
              <Route path="/chronology" element={<Chronology />} />
            </Routes>
          </div>
         { console.log(page)}
          {(page !== "CharactersDetail" &&
          page !== "HousesDetail") &&
          <Footer />
        }
         
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
