import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SobreMim from "./pages/about/SobreMim";

//react spinner
import HashLoader
from "react-spinners/HashLoader";

//hooks
import { useState, useEffect, useMemo } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });


  return (
    <>
      {isLoading ? (
        <div className="bg-zinc-950 flex justify-center items-center h-screen">
          <HashLoader color={"#363636"} loading={isLoading} size={100} />
        </div>
      ) : (
        <BrowserRouter>
          <div className="bg-gradient-to-b from-black to-zinc-900 min-h-screen">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<SobreMim />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
