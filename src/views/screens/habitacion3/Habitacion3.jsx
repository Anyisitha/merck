import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledColor1,
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemCortina,
  StyledItemCuadroRetrato,
  StyledItemPuerta,
  StyledItemSiguiente,
} from "./habitacion3.styles";
import Modal from "../../components/modal";

export default function Habitacion3() {
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
            <img src="/images/home/testimonial.png" alt="" className="h-full"  />

            {/* Animaciones */}
            <StyledItemCortina className="botiquin ">
              <img src="/images/home/sofa.png" alt="" onClick={handleOpenModal} />
            </StyledItemCortina>
            <StyledItemCuadroRetrato className="botiquin ">
              <img src="/images/home/cuadro-retrato.png" alt="" />
            </StyledItemCuadroRetrato>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-6")}
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
            onClick={() => (window.location.href = "/habitacion-2")}
          ></StyledItemBotton2>

          <StyledItemBotton3
            className="boton2"
            onClick={() => (window.location.href = "")}
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

      {width <= 767 && <Habitacion3.Mobile
        handleOpenModal={handleOpenModal}
        openModalIframe={openModalIframe}
        handleCloseModal={handleCloseModal}
      />}
      {width >= 768 && width <= 1024 && <Habitacion3.Tablet
        handleOpenModal={handleOpenModal}
        openModalIframe={openModalIframe}
        handleCloseModal={handleCloseModal}
      />}

      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia5/index.html"
      />
    </StyledContent>
  );
}

Habitacion3.Mobile = (
  {handleOpenModal}
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemCortina className="botiquin ">
          <img src="/images/home/fosa1.png" alt="" />
        </StyledItemCortina>

        <StyledItemCuadroRetrato className="botiquin ">
          <img src="/images/home/cuadro-movil-8.png" alt="" />
        </StyledItemCuadroRetrato>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-4")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
        <div className="absolute top-[71%] left-[49%]  w-[26%] h-[4%]" onClick={() => handleOpenModal(true)}></div>
      </div>
    </Fragment>
  );
};
  

Habitacion3.Tablet = (
  handleOpenModal,
  openModalIframe,
  handleCloseModal,
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemCortina className="botiquin ">
          <img src="/images/home/silla-tablet1-8.png" alt="" />
        </StyledItemCortina>

        <StyledItemCuadroRetrato className="botiquin ">
          <img src="/images/home/cuadro-tablet-version-8.png" alt="" />
        </StyledItemCuadroRetrato>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-4")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>

      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia5/index.html"
      />
    </Fragment>
  );
};
