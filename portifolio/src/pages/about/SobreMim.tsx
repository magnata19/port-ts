import { Fade } from "react-awesome-reveal";

import perfil from "../../assets/perfil.jpg";

//icons
import { FaReact } from "react-icons/fa"; //react
import { FaNodeJs } from "react-icons/fa6"; //node
import { SiSpringboot } from "react-icons/si"; //spring
import { SiTailwindcss } from "react-icons/si"; //tailwind
import { GrMysql } from "react-icons/gr"; //mysql

const SobreMim = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-zinc-900 to-black h-full bg-fixed">
        <div className="pt-5 ">
          <h1 className="text-center text-white text-2xl mt-3">
            Olá, seja bem vindo(a).
          </h1>
          <div className="pt-20 px-8 ">
              <h1 className="text-white text-3xl mb-4">Biografia: </h1>
            <Fade className=" rounded-xl">
              <p className="font-light text-[18px] tracking-[1px] text-white">
                Me chamo Davidson Pacifico, tenho 23 anos e sou natural de
                Ubatuba-SP. Sou uma pessoa apaixonada por tecnologia, acho que
                ela nos proporciona coisas únicas e isso é uma das coisas que me
                fascina nela. Gosto muito de viagens, comida(principalmente) e
                também de música.
              </p>
            </Fade>
          </div>
          <Fade className="border-b-[1px] py-6 w-[250px] m-auto">
            <img src={perfil} alt="foto de perfil" />
          </Fade>
        </div>
        <div className="mt-6 ">
            <h1 className="text-3xl text-white opacity-80 tracking-[1px] font-light">
              Tecnologias
            </h1>
            <div className=" h-full justify-between bg-gradient-to-b from-zinc-900 to-black bg-fixed">
              <Fade direction="left" className="text-white text-[25px]">
                <div className="flex items-center mb-2">
                  <FaReact className="text-[25px] mr-1 z-20 text-blue-600" />
                  <div className="text-[22px] font-light tracking-[1px]">
                    React
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px]">
                  Atualmente, uso muito react para desenvolver o front end de
                  minhas aplicações. Tenho uma excelente experiências com
                  consumos de APIs; Utilização de hooks; Como usar rotas , rotas
                  com parâmetros; Utilização de redux;
                </div>
              </Fade>

              <Fade direction="left" className="text-white text-[25px] ">
                <div className="flex items-center">
                  <FaNodeJs className="text-green-700 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    NodeJS
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px]">
                  NodeJs é uma tecnologia que acho simplesmente incrível. Nos
                  proporciona criar um servidor com uma praticidade imensa. Uso
                  para desenvolver minhas rotas; Criar minhas APIs; Conectar a
                  bancos de dados;
                </div>
              </Fade>

              <Fade direction="left" className="text-white ">
                <div className="flex items-center">
                  <SiSpringboot className="text-green-600 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    Spring Boot
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px]">
                  Atualmente, venho estudando com muito foco o Spring Boot, com
                  ênfase em criações de APIs Restful, utilizando banco de dados
                  relacionais como o MySql; Usando conceitos de persistência de
                  dados com JPA; Conceitos de arquitetura; E em breve iniciarei
                  estudos em microserviços e deploy em nuvem, utilizando AWS.
                </div>
              </Fade>

              <Fade direction="left" className="text-white text-[25px] ">
                <div className="flex items-center">
                  <SiTailwindcss className="text-blue-500 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    Tailwind
                  </div>
                </div>
                <div className="font-light text-[18px] tracking-[1px]">
                  Há bastante tempo vinha utilizando CSS puro para desenvolver
                  meus projetos mas após descobrir tailwind isso mudou. Estou
                  muito feliz em usá-lo em minhas aplicações, pois melhora muito
                  meu desempenho na hora de desenvolver.
                </div>
              </Fade>

              <Fade direction="left" className="text-white text-[25px] ">
                <div className="flex items-center">
                  <GrMysql className="text-blue-300 mr-1" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    MySQL
                  </div>
                </div>
                <div className="font-light text-[18px] tracking-[1px]">
                  Uso o MySql como banco de dados, mas também tive contato com
                  banco de dados da oracle. Uso muito para executar querys para
                  criar tabelas, inserir dados nelas, alterar dados e junto a
                  isso utilizo a minha API para poder manipular esses dados ou
                  caso precise, faço diretamente no banco.
                </div>
              </Fade>
            </div>
          </div>
      </div>
    </>
  );
};

export default SobreMim;
