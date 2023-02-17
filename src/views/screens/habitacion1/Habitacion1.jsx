import { Fragment, useEffect, useState } from "react";
import Modal from "../../components/modal";
import {
  StyledColor,
  StyledColor1,
  StyledContent,
  StyledItem,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemCama,
  StyledItemLampara,
  StyledItemPuerta,
  StyledItemRetrato,
  StyledItemSiguiente,
  StyledItemSilla,
  StyledItemTocador,
} from "./habitacion1.styles";

const urls = {
  url_1: "https://eml.com.co/MerckPrueba/blog-1/index.html",
  url_2: "https://eml.com.co/MerckPrueba/blog-2/index.html",
  url_3: "https://eml.com.co/MerckPrueba/blog-3/index.html",
  url_4: "https://eml.com.co/MerckPrueba/infografia-1/index.html",
  url_5: "https://eml.com.co/MerckPrueba/infografia/index.html",
};

export default function Habitacion1() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  const [openModalIframe, setOpenModalIframe] = useState(false);
  const [url, setUrl] = useState(false);

  const handleCloseModal = () => {
    setOpenModalIframe(false);
    setUrl("");
  };

  const handleOpenModal = (url) => {
    console.log(url);
    setOpenModalIframe(true);
    setUrl(url);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let query = new URLSearchParams(window.location.search).get("popup");
  
  useEffect(() => {
    if(query === "true") {
      handleOpenModal("url_3")
    }
  }, [query])

  //modal 2
  let query1 = new URLSearchParams(window.location.search).get("popup1");
  
  useEffect(() => {
    if(query1 === "true") {
      handleOpenModal("url_5")
    }
  }, [query1])

  //modal 3
  let query2 = new URLSearchParams(window.location.search).get("popup2");
  
  useEffect(() => {
    if(query2 === "true") {
      handleOpenModal("url_1")
    }
  }, [query2])

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ">
            <img
              src="/images/home/esclerosis-fondo.png"
              alt=""
              className="h-full"
            />

            {/* Animaciones */}
            <StyledItem
              className="esclerosis-fondo1 "
              onClick={() => handleOpenModal("url_1")}
            >
              <img src="/images/home/cortina1.png" alt="" />
            </StyledItem>
            <StyledItemSilla
              className="silla"
              onClick={() => handleOpenModal("url_2")}
            >
              <img src="/images/home/silla-ruedas.png" alt="" />
            </StyledItemSilla>
            <StyledItemRetrato
              className="retrato"
              onClick={() => handleOpenModal("url_3")}
            >
              <img src="/images/home/retrato.png" alt="" />
            </StyledItemRetrato>
            <StyledItemTocador
              className="tocador"
              onClick={() => handleOpenModal("url_4")}
            >
              <img src="/images/home/tocador.png" alt="" />
            </StyledItemTocador>
            
            <StyledItemLampara
              className="lampara"
              onClick={() => handleOpenModal("url_5")}
            >
              <img src="/images/home/lampara.png" alt="" />
            </StyledItemLampara>
            {/* <StyledItemCama className="cama">
              <img src="/images/home/cama.png" alt="" />
            </StyledItemCama> */}

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-2")}
            >
              <img src="/images/home/puerta-siguiente.png" alt="" />
            </StyledItemSiguiente>
          </div>

          {/* Bottom navigation */}
          <StyledItemBotton1
            className="puerta"
            onClick={() => (window.location.href = "/habitacion-2")}
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
            onClick={() => (window.location.href = "/habitacion-5")}
          ></StyledItemBotton4>

          <StyledItemBotton5
            className="boton2"
            onClick={() => (window.location.href = "/alianzas")}
          ></StyledItemBotton5>
        </Fragment>
      )}

      {width <= 767 && (
        <Habitacion1.Mobile
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      {width >= 768 && width <= 1024 && (
        <Habitacion1.Tablet
          handleOpenModal={handleOpenModal}
          openModalIframe={openModalIframe}
          handleCloseModal={handleCloseModal}
        />
      )}
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url={urls[url]}
      />
    </StyledContent>
  );
}

Habitacion1.Mobile = ({
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
}) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemSilla
          className="silla"
          onClick={() => handleOpenModal("url_2")}
        >
          <img src="/images/home/chair_responsive.png" alt="" />
        </StyledItemSilla>
        <StyledItem
          className="esclerosis-fondo1"
          onClick={() => handleOpenModal("url_1")}
        >
          <img src="/images/home/cortina-movil.png" alt="" />
        </StyledItem>
        <StyledItemCama className="cama">
          <img src="/images/home/cama-movil.png" alt="" />
        </StyledItemCama>
        <StyledItemLampara
          className="lampara"
          onClick={() => handleOpenModal("url_5")}
        >
          <img src="/images/home/lampara-mobil.png" alt="" />
        </StyledItemLampara>
        <StyledItemTocador
          className="tocador"
          onClick={() => handleOpenModal("url_4")}
        >
          <img src="/images/home/tocador-movil.png" alt="" />
        </StyledItemTocador>
        <StyledItemRetrato
          className="retrato"
          onClick={() => handleOpenModal("url_3")}
        ></StyledItemRetrato>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/index.html"
      />
    </Fragment>
  );
};

Habitacion1.Tablet = ({
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
}) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemSilla className="silla" onClick={() => handleOpenModal("url_2")}>
          <img src="/images/home/silla-tablet.png" alt="" />
        </StyledItemSilla>
        <StyledItem className="esclerosis-fondo1 " onClick={() => handleOpenModal("url_1")}>
          <img src="/images/home/cortina-tablet-8.png" alt="" />
        </StyledItem>
        <StyledItemCama className="cama">
          <img src="/images/home/cama-tablet-8.png" alt="" />
        </StyledItemCama>
        <StyledItemLampara className="lampara" onClick={() => handleOpenModal("url_5")}>
          <img src="/images/home/lampara-tablet-8.png" alt="" />
        </StyledItemLampara>
        <StyledItemTocador className="tocador" onClick={() => handleOpenModal("url_4")}>
          <img src="/images/home/tocador-tablet-8.png" alt="" />
        </StyledItemTocador>
        <StyledItemRetrato
          className="retrato"
          onClick={() => handleOpenModal("url_3")}
        ></StyledItemRetrato>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/index.html"
      />
    </Fragment>
  );
};
