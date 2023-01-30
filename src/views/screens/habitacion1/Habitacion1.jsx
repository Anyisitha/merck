import { Fragment, useEffect, useState } from "react";
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

export default function Habitacion1() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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
            <StyledItem className="esclerosis-fondo1 ">
              <img src="/images/home/cortina1.png" alt="" />
            </StyledItem>
            <StyledItemSilla className="silla">
              <img src="/images/home/silla-ruedas.png" alt="" />
            </StyledItemSilla>
            <StyledItemRetrato className="retrato">
              <img src="/images/home/retrato.png" alt="" />
            </StyledItemRetrato>
            <StyledItemTocador className="tocador">
              <img src="/images/home/tocador.png" alt="" />
            </StyledItemTocador>
            <StyledItemCama className="cama">
              <img src="/images/home/cama.png" alt="" />
            </StyledItemCama>
            <StyledItemLampara className="lampara">
              <img src="/images/home/lampara.png" alt="" />
            </StyledItemLampara>

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

      {width <= 767 && <Habitacion1.Mobile />}
      {width >= 768 && width <= 1024 && <Habitacion1.Tablet />}
    </StyledContent>
  );
}

Habitacion1.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemSilla className="silla">
          <img src="/images/home/chair_responsive.png" alt="" />
        </StyledItemSilla>
        <StyledItem className="esclerosis-fondo1 ">
          <img src="/images/home/cortina-movil.png" alt="" />
        </StyledItem>
        <StyledItemCama className="cama">
          <img src="/images/home/cama-movil.png" alt="" />
        </StyledItemCama>
        <StyledItemLampara className="lampara">
          <img src="/images/home/lampara-mobil.png" alt="" />
        </StyledItemLampara>
        <StyledItemTocador className="tocador">
          <img src="/images/home/tocador-movil.png" alt="" />
        </StyledItemTocador>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};

Habitacion1.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
      <StyledItemSilla className="silla">
          <img src="/images/home/silla-tablet.png" alt="" />
        </StyledItemSilla>
        <StyledItem className="esclerosis-fondo1 ">
          <img src="/images/home/cortina-tablet-8.png" alt="" />
        </StyledItem>
        <StyledItemCama className="cama">
          <img src="/images/home/cama-tablet-8.png" alt="" />
        </StyledItemCama>
        <StyledItemLampara className="lampara">
          <img src="/images/home/lampara-tablet-8.png" alt="" />
        </StyledItemLampara>
        <StyledItemTocador className="tocador">
          <img src="/images/home/tocador-tablet-8.png" alt="" />
        </StyledItemTocador>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  )
}
