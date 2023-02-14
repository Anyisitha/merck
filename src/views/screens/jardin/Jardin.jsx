import {
  StyledColor,
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemBotton6,
  StyledItemPelota,
  StyledItemPuerta,
  StyledItemTapete,
} from "./jardin.styles";
import "./jardin.css";
import { Fragment, useEffect, useState } from "react";
import Modal from "../../components/modal";


const urls = {
  url_1: "https://eml.com.co/MerckPrueba/infografia3/index.html",
};

export default function Jardin() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  const [openModalIframe, setOpenModalIframe] = useState(false);
  const [url, setUrl] = useState(false);

  const handleCloseModal = () => {
    setOpenModalIframe(false);
    setUrl("");
  };

  const handleOpenModal = (url) => {
    alert(url);
    setOpenModalIframe(true);
    setUrl(url);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[48px] ml-[6%]">
            <div className="h-full" onClick={() => handleOpenModal("url_1")}>
              <img src="/images/home/jardin.png" alt="" className="h-full" />
            </div>


            {/* Animaciones */}
            <StyledItemTapete className="tapete ">
              <img src="/images/home/tapete.png" alt="" />
            </StyledItemTapete>
            <StyledItemPelota className="tapete ">
              <img src="/images/home/pelota.png" alt="" />
            </StyledItemPelota>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-2")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <div className="shadow"></div>
          </div>

          <StyledItemBotton1
            className="puerta"
            onClick={() => (window.location.href = "/habitacion-1")}
          ></StyledItemBotton1>

          <StyledItemBotton2
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-2")}
          ></StyledItemBotton2>

          <StyledItemBotton3
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-3")}
          ></StyledItemBotton3>

          <StyledItemBotton4
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-4")}
          ></StyledItemBotton4>

          <StyledItemBotton5
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-5")}
          ></StyledItemBotton5>
          <StyledItemBotton6
            className="boton2"
            onClick={() => (window.location.href = "/alianzas")}
          ></StyledItemBotton6>
        </Fragment>
      )}

      {width <= 767 && <Jardin.Mobile
        handleOpenModal={handleOpenModal}
        openModalIframe={openModalIframe}
        handleCloseModal={handleCloseModal}
      />}
      {width >= 768 && width <= 1024 && <Jardin.Tablet
        handleOpenModal={handleOpenModal}
        openModalIframe={openModalIframe}
        handleCloseModal={handleCloseModal}
      />}
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia3/index.html"
      />
    </StyledContent>
  );
}

Jardin.Mobile = (
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemTapete className="tapete ">
          <img src="/images/home/tapete.png" alt="" />
        </StyledItemTapete>

        <StyledItemPelota className="tapete ">
          <img src="/images/home/pelota.png" alt="" />
        </StyledItemPelota>
        <div className="shadow"></div>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia3/index.html"
      />
    </Fragment>
  );
};

Jardin.Tablet = (
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemTapete className="tapete ">
          <img src="/images/home/tapete.png" alt="" />
        </StyledItemTapete>
        <StyledItemPelota className="tapete ">
          <img src="/images/home/pelota.png" alt="" />
        </StyledItemPelota>
        <div className="shadow"></div>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia3/index.html"
      />
    </Fragment>
  );
};
