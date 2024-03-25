import Footer from "../footer/Footer";

import reactGram from "../../assets/backend.png";
import springJpa from "../../assets/Captura de tela 2024-03-23 150424.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="text-white text-center flex flex-col h-52 items-center justify-center">
          <span className="text-3xl font-mono ">Projetos</span>
          <span className="opacity-50">
            Aqui você encontra todos meus projetos
          </span>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="w-3/4 mx-auto">
            <img src={reactGram} alt="" className="shadow-2xl rounded-md hover:cursor-pointer" />
            <div className="mt-5">
              <span className="text-white opacity-50 ">
                ReactGram é um projeto que foi desenvolvido utilizando React,
                nodeJS e mongoDB. Ele tem como finalidade ser uma "cópia" do
                instagram. Você pode acessar ele clicando
              </span>
              <Link to="https://frontend-xflf.vercel.app" target="_blank">
                <span className="text-slate-100 hover:text-red-600 "> aqui!</span>
              </Link>
            </div>
          </div>
          <div className="w-3/4 mx-auto">
            <img src={springJpa} alt="" className="shadow-2xl rounded-md hover:cursor-pointer"/>
            <div className="mt-5">
              <span className="text-white opacity-50 ">
                Essa é uma api feita com springboot, ao qual usei conceitos de
                relacionamento bidirecionais, apliquei arquitetura para
                estruturar o projeto e usei um banco h2 como armazenamento. Um
                projeto muito interessante que você pode acessar clicando
              </span>
              <Link to="https://github.com/magnata19/estudo-spring-data-jpa" target="_blank">
                <span className="text-slate-100 hover:text-red-600"> aqui!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
