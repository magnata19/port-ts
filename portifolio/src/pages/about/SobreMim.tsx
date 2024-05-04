import { Fade } from "react-awesome-reveal";

import { FaBrain } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";

import perfil from "../../assets/perfil.jpg";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiSpringboot, SiTailwindcss } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import Footer from "../footer/Footer";
const SobreMim = () => {
  return (
    <>
      <div className="py-5">
        {" "}
        {/**container geral */}
        <div className="py-10 px-8 w-full md:w-[70%] md:mx-auto">
          <div className="h-screen flex flex-col justify-center items-center">
              <div>
                <Fade triggerOnce={true} duration={500}
                  direction="up"
                  className="text-2xl text-white text-center"
                >
                  <span>Sejam bem-vindos(as)!</span>
                </Fade>
              </div>
              <div className="border-b-[1px] md:border-none">
                <Fade triggerOnce={true} duration={500}
                  direction="up"
                  className=" rounded-xl mt-5 whitespace-normal break-normal"
                >
                  <p className="font-thin text-[19px] tracking-[1px] text-white opacity-60 font-mono">
                    Me chamo Davidson Pacifico, tenho 23 anos e sou natural de
                    Ubatuba-SP. Sou uma pessoa apaixonada por tecnologia, acho
                    que ela nos proporciona coisas únicas e isso é uma das
                    coisas que me fascina nela. Gosto muito de viagens,
                    comida(principalmente) e também de música.
                  </p>
                  <div className="w-[250px] mx-auto mb-5 shadow-2xl">
                    <img className="rounded-md" src={perfil} alt="foto de perfil" />
                  </div>
                </Fade>
              </div>
          </div>
          <div className="text-white">
            <Fade direction="up" triggerOnce={true} duration={500}>
              <div className="text-3xl text-white  mt-4">
                <div className="flex items-center justify-center gap-2">
                  <span>Habilidades</span>
                  <span className="text-2xl text-red-500">
                    <FaBrain />
                  </span>
                </div>
              </div>

              <div className="mt-5 border-b-[1px]">
                <ul className="flex flex-col gap-2 mb-5 opacity-80">
                  <li>- Proatividade</li>
                  <li>- Trabalho em equipe.</li>
                  <li>- Facilidade em aprender novas tecnologias.</li>
                  <li>- Vontade de aprender.</li>
                  <li>- Conhecimento em frontend.</li>
                  <li>- Conhecimento em backend.</li>
                  <li>- Conhecimento em arquitetura.</li>
                </ul>
              </div>
            </Fade>
          </div>
          <div className="text-3xl text-white  mt-4 flex flex-col gap-10">
            <div className="flex items-center justify-center gap-2">
              <span>Tecnologias</span>
              <span className="text-amber-400">
                <FaComputer />
              </span>
            </div>
            <div>
              <Fade direction="up" triggerOnce={true} duration={500} className="text-white text-[25px]">
                <div className="flex items-center mb-2">
                  <FaReact className="text-[25px] mr-1 z-20 text-blue-600" />
                  <div className="text-[22px] font-light tracking-[1px]">
                    React
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px] opacity-80">
                  Atualmente, uso muito react para desenvolver o front end de
                  minhas aplicações. Tenho uma excelente experiências com
                  consumos de APIs; Utilização de hooks; Como usar rotas , rotas
                  com parâmetros; Utilização de redux;
                </div>
              </Fade>
            </div>

            <div>
              <Fade direction="up" triggerOnce={true} duration={500} className="text-white text-[25px] ">
                <div className="flex items-center">
                  <FaNodeJs className="text-green-700 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    NodeJS
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px] opacity-80">
                  NodeJs é uma tecnologia que acho simplesmente incrível. Nos
                  proporciona criar um servidor com uma praticidade imensa. Uso
                  para desenvolver minhas rotas; Criar minhas APIs; Conectar a
                  bancos de dados;
                </div>
              </Fade>
            </div>

            <div>
              <Fade direction="up" triggerOnce={true} duration={500} className="text-white ">
                <div className="flex items-center">
                  <SiSpringboot className="text-green-600 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    Spring Boot
                  </div>
                </div>
                <div className="text-white tracking-[1px] font-light text-[18px] opacity-80">
                  Atualmente, venho estudando com muito foco o Spring Boot, com
                  ênfase em criações de APIs Restful, utilizando banco de dados
                  relacionais como o MySql; Usando conceitos de persistência de
                  dados com JPA; Conceitos de arquitetura; E em breve iniciarei
                  estudos em microserviços e deploy em nuvem, utilizando AWS.
                </div>
              </Fade>
            </div>

            <div>
              <Fade direction="up" triggerOnce={true} duration={500} className="text-white text-[25px] ">
                <div className="flex items-center">
                  <SiTailwindcss className="text-blue-500 mr-1 text-[25px]" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    Tailwind
                  </div>
                </div>
                <div className="font-light text-[18px] tracking-[1px] opacity-80">
                  Há bastante tempo vinha utilizando CSS puro para desenvolver
                  meus projetos mas após descobrir tailwind isso mudou. Estou
                  muito feliz em usá-lo em minhas aplicações, pois melhora muito
                  meu desempenho na hora de desenvolver.
                </div>
              </Fade>
            </div>

            <div>
              <Fade direction="up" triggerOnce={true} duration={500} className="text-white text-[25px] ">
                <div className="flex items-center">
                  <GrMysql className="text-blue-300 mr-1" />
                  <div className="font-light text-[22px] tracking-[1px]">
                    MySQL
                  </div>
                </div>
                <div className="font-light text-[18px] tracking-[1px] opacity-80">
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
        <Footer />
      </div>
    </>
  );
};

export default SobreMim;
