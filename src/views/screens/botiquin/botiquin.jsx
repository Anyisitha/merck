import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledContent,
  StyledItemBotonInfo,
  StyledItemCerrado,
  StyledItemMedicamento,
  StyledItemPuerta,
} from "./botiquin.styles";
import Modal from "../../components/modal";


export default function Botiquin() {
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
  
  let query = new URLSearchParams(window.location.search).get("popup");
  
  useEffect(() => {
    if(query === "true") {
      handleOpenModal("url_3")
    }
  }, [query])

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ml-[6%]">
            <img src="/images/home/botiquin.png" alt="" className="h-full"  />

            {/* Animaciones */}
            <StyledItemCerrado className="botiquin-cerrado ">
              <img src="/images/home/pildora.gif" alt="" />
            </StyledItemCerrado>
            <StyledItemMedicamento className="medicamentos ">
              <img src="/images/home/medicamentos.png" alt="" />
            </StyledItemMedicamento>
            <StyledItemBotonInfo className="medicamentos " onClick={() => handleOpenModal(true)}>
              {/* <img src="/images/home/boton-info.png" alt="" onClick={() => handleOpenModal(true)}/> */}
            </StyledItemBotonInfo>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-2")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
          </div>
        </Fragment>
      )}

      {width <= 767 && <Botiquin.Mobile
      handleOpenModal={handleOpenModal}
      openModalIframe={openModalIframe}
      handleCloseModal={handleCloseModal}
      />}
      {width >= 768 && width <= 1024 && <Botiquin.Tablet
      handleOpenModal={handleOpenModal}
      openModalIframe={openModalIframe}
      handleCloseModal={handleCloseModal}
      />}
      <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia6/index.html"
      />
    </StyledContent>
  );
}

Botiquin.Mobile = (
  {handleOpenModal}
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemMedicamento className="medicamentos ">
          <img src="/images/home/medicamentos.png" alt="" />
        </StyledItemMedicamento>
        <StyledItemCerrado className="botiquin-cerrado ">
          <img src="/images/home/pildora.gif" alt="" />
        </StyledItemCerrado>
        <StyledItemBotonInfo className="medicamentos " onClick={() => handleOpenModal(true)}>
              <img src="/images/home/boton-info.png" alt="" />
            </StyledItemBotonInfo>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <div className="absolute top-[59%] left-[56%] w-[26%] h-[4%]" ></div>
      </div>
    </Fragment>
  );
};

Botiquin.Tablet = (
  {handleOpenModal}
) => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemMedicamento className="medicamentos ">
          <img src="/images/home/medicamentos.png" alt="" />
        </StyledItemMedicamento>
        <StyledItemCerrado className="botiquin-cerrado ">
          <img src="/images/home/pildora.gif" alt="" />
        </StyledItemCerrado>
        <StyledItemBotonInfo className="medicamentos " onClick={() => handleOpenModal(true)}>
              <img src="/images/home/boton-info.png" alt="" />
            </StyledItemBotonInfo>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <div className="absolute top-[52%] left-[59%] w-[18%] h-[4%]" ></div>
      </div>
      {/* <Modal
        open={openModalIframe}
        onClose={handleCloseModal}
        url="https://eml.com.co/MerckPrueba/infografia6/index.html"
      /> */}
    </Fragment>


  );
};
