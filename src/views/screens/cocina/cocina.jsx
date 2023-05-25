import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemBotton6,
  StyledItemFuego,
  StyledItemGota,
  StyledItemPollo,
  StyledItemPuerta,
} from "./cocina.styles";
import Modal from "../../components/modal";

export default function Cacina() {
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
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      setOpenModalIframe(false);
    });
  }, []);

  let query2 = new URLSearchParams(window.location.search).get("popup2");

  useEffect(() => {
    if (query2 === "true") {
      handleOpenModal("url_3");
    }
  }, [query2]);

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ml-[6%]">
            <img src="/images/home/cocina.png" alt="" className="h-full" />
            <StyledItemFuego className="cocina" onClick={handleOpenModal}>
              <div className="relative">
                {/* <img src="/images/home/fuego.png" alt=""  onClick={handleOpenModal} /> */}
              </div>
            </StyledItemFuego>
            <StyledItemPollo className="pollo ">
              <img src="/images/home/pollo-asado-gif-dim.gif" alt="" />
            </StyledItemPollo>

            <StyledItemGota className="gota ">
              <img src="/images/home/gifs.gif" alt="" />
            </StyledItemGota>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-2")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
          </div>

          {/* Animaciones */}
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

      {width <= 767 && (
        <Cacina.Mobile
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      {width >= 768 && width <= 1024 && (
        <Cacina.Tablet
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia4/index.html"
      />
    </StyledContent>
  );
}

Cacina.Mobile = ({ handleOpenModal, openModalIframe, handleCloseModal }) => {
  return (
    <Fragment>
      <div className="container">
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>

        <StyledItemPollo className="pollo ">
          <img src="/images/home/pollo-asado-gif-dim.gif" alt="" />
        </StyledItemPollo>
        <div
          className="absolute top-[71%] left-[49%]  w-[26%] h-[4%]"
          onClick={() => handleOpenModal(true)}
        ></div>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia4/index.html"
      />
    </Fragment>
  );
};

Cacina.Tablet = ({handleOpenModal, openModalIframe, handleCloseModal}) => {
  return (
    <Fragment>
      <div className="container" onClick={() => handleOpenModal(true)} >
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>

        <StyledItemPollo className="pollo ">
          <img src="/images/home/pollo-asado-gif-dim.gif" alt="" />
        </StyledItemPollo>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia4/index.html"
      />
    </Fragment>
  );
};
