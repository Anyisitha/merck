import {
  StyledColor,
  StyledContent,
  StyledItemBotonInfo1,
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

export default function Jardin() {
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
    document.body.style.overflowX = "hidden"
  }, []);

  let query1 = new URLSearchParams(window.location.search).get("popup1");
  
  useEffect(() => {
    if(query1 === "true") {
      handleOpenModal("url_3")
    }
  }, [query1])

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[48px] ml-[6%]">
            <div className="h-full" >
              <img src="/images/home/jardin.png" alt="" className="h-full" />
            </div>


            {/* Animaciones */}
            <StyledItemTapete className="tapete ">
              <img src="/images/home/tapete.png" alt="" />
            </StyledItemTapete>
            <StyledItemPelota className="tapete ">
              <img src="/images/home/pelota.png" alt="" />
            </StyledItemPelota>

            <StyledItemBotonInfo1 className="medicamentos " onClick={() => handleOpenModal()}>
              {/* <img src="/images/home/boton-info-1.png" alt="" onClick={() => handleOpenModal()} /> */}
            </StyledItemBotonInfo1>

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
          {/* <StyledItemBotton6
            className="boton2"
            onClick={() => (window.location.href = "/alianzas")}
          ></StyledItemBotton6> */}
        </Fragment>
      )}

      {width <= 767 && <Jardin.Mobile
        setOpenModalIframe={setOpenModalIframe}
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
  { setOpenModalIframe }
) => {

  return (
    <Fragment>
      <div className="container overflow-hidden">
        <StyledItemTapete className="tapete ">
          <img src="/images/home/tapete.png" alt="" />
        </StyledItemTapete>

        <StyledItemPelota className="tapete ">
          <img src="/images/home/pelota.png" alt="" />
        </StyledItemPelota>
        <div className="shadow"></div>

        <StyledItemBotonInfo1 className="medicamentos ">
              {/* <img src="/images/home/boton-info-1.png" alt="" /> */}
            </StyledItemBotonInfo1>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <div className="absolute top-[74%] left-[37%] w-[26%] h-[4%]" onClick={() => setOpenModalIframe(true)}></div>
      </div>
      {/* <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia3/index.html"
      /> */}
    </Fragment>
  );
};

Jardin.Tablet = (
  { handleOpenModal }
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
        <div className="absolute top-[74%] left-[37%]  w-[26%] h-[4%]" ></div>
        <StyledItemBotonInfo1 className="medicamentos " onClick={handleOpenModal}>
              {/* <img src="/images/home/boton-info-1.png" alt="" onClick={handleOpenModal} /> */}
            </StyledItemBotonInfo1>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
      </div>
      {/* <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia3/index.html"
      /> */}
    </Fragment>
  );
};
