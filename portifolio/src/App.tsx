import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SobreMim from "./pages/about/SobreMim";

//react spinner
import HashLoader
from "react-spinners/HashLoader";

//hooks
import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
  });
  return (
    <>
      {isLoading ? (
        <div className="bg-zinc-950 flex justify-center items-center h-full">
          <HashLoader color={"#363636"} loading={isLoading} size={100} />
        </div>
      ) : (
        <BrowserRouter>
          <div className="bg-gradient-to-b from-zinc-900 to-black min-h-screen">
            <Header />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<SobreMim />} />
            </Routes>
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
