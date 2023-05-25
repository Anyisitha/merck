import { Fragment, useEffect, useState } from "react";
import {
  StyledContent,
  StyledItemBotiquin,
  StyledItemLibros,
  StyledItemPuerta,
  StyledItemSiguiente,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledColor,
  StyledColor1,
  StyledChickend,
  StyledGarden,
  Styledfirst,
} from "./habitacion2.styles";
import Modal from "../../components/modal";

export default function Habitacion2() {

  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  const [openModalIframe, setOpenModalIframe] = useState(false);

  const handleCloseModal = () => {
    setOpenModalIframe(false);
  };

  const handleOpenModal = () => {
    setOpenModalIframe(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ml-[4%]">
            <img src="/images/home/tratamiento.png" alt="" className="h-full" />
            <div
              className="cocina absolute w-[11%] h-[7%] top-[34%] left-[18%] cursor-pointer"
              onClick={() => (window.location.href = "/cocina")}
            ></div>
            <div
              className="jardin absolute w-[11%] h-[7%] top-[34%] left-[63%] cursor-pointer"
              onClick={() => (window.location.href = "/jardin")}
            ></div>
            <div
              className="botiquin absolute w-[14%] h-[7%] top-[27%] left-[39%] cursor-pointer"
              onClick={() => (window.location.href = "/botiquin")}
            ></div>

            {/* Animaciones */}
            <StyledItemBotiquin className="botiquin ">
              <img src="/images/home/botiquin-gif.png" alt="" />
            </StyledItemBotiquin>
            <StyledItemLibros className="botiquin" onClick={() => handleOpenModal()}>
             
              {/* <img src="/images/home/libros.png" alt="" /> */}
            </StyledItemLibros>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>

            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-3")}
            >
              <img src="/images/home/puerta-siguiente.png" alt="" />
            </StyledItemSiguiente>
          </div>
          {/* Bottom navigation */}
          <StyledItemBotton1
            className="puerta"
            onClick={() => (window.location.href = "/habitacion-1")}
          ></StyledItemBotton1>

          <StyledItemBotton2
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-3")}
          ></StyledItemBotton2>

          <StyledItemBotton3
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-4")}
          ></StyledItemBotton3>
          <StyledItemBotton4
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-6")}
          ></StyledItemBotton4>

          

          {/* <StyledItemBotton4
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-5")}
          ></StyledItemBotton4>

          <StyledItemBotton5
            className="boton2"
            onClick={() => (window.location.href = "/alianzas")}
          ></StyledItemBotton5> */}
        </Fragment>
      )}

      {width <= 767 && (
        <Habitacion2.Mobile
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      {width >= 768 && width <= 1024 && (
        <Habitacion2.Tablet
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/blog-4/index.html"
      />
    </StyledContent>
  );
}

Habitacion2.Mobile = ({
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
}) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemBotiquin className="botiquin ">
          <img src="/images/home/botiquin-movil.png" alt="" />
        </StyledItemBotiquin>
        <StyledItemLibros className="botiquin" onClick={() => handleOpenModal()}>
          {/* <img src="/images/home/libros.png" alt="" /> */}
        </StyledItemLibros>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-3")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
        <StyledChickend
          className="puerta"
          onClick={() => (window.location.href = "/cocina")}
        ></StyledChickend>
        <StyledGarden
          className="puerta"
          onClick={() => (window.location.href = "/jardin")}
        ></StyledGarden>
        <Styledfirst
          className="puerta"
          onClick={() => (window.location.href = "/botiquin")}
        ></Styledfirst>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/blog-4/index.html"
      />
    </Fragment>
  );
};

Habitacion2.Tablet = ({
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
}) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemBotiquin className="botiquin ">
          <img src="/images/home/botiquin-tablet-8.png" alt="" />
        </StyledItemBotiquin>
        <StyledItemLibros className="botiquin" onClick={() => handleOpenModal()}>
          {/* <img src="/images/home/libros.png" alt="" /> */}
        </StyledItemLibros>

        <StyledChickend
          className="puerta"
          onClick={() => (window.location.href = "/cocina")}
        ></StyledChickend>
        <Styledfirst
          className="puerta1"
          onClick={() => (window.location.href = "/botiquin")}
        ></Styledfirst>
        <StyledGarden
          className="puerta2"
          onClick={() => (window.location.href = "/jardin")}
        ></StyledGarden>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-3")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/blog-4/index.html"
      />
    </Fragment>
  );
};
