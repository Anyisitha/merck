import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledColor1,
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemHojas,
  StyledItemLibros,
  StyledItemPc,
  StyledItemPuerta,
  StyledItemSiguiente,
} from "./habitacion4.styles";

export default function Habitacion4() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ml-[6%]">
            <img src="/images/home/hcp.png" alt="" className="h-full" />

            {/* Animaciones */}
            <StyledItemLibros className="botiquin ">
              <img src="/images/home/recursos.png" alt="" />
            </StyledItemLibros>
            <StyledItemPc className="botiquin ">
              <img src="/images/home/pc.png" alt="" />
            </StyledItemPc>
            <StyledItemHojas className="botiquin ">
              <img src="/images/home/hojas.png" alt="" />
            </StyledItemHojas>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-5")}
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

      {width <= 767 && <Habitacion4.Mobile />}
      {width >= 768 && width <= 1024 && <Habitacion4.Tablet />}
    </StyledContent>
  );
}

Habitacion4.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemPc className="botiquin ">
          <img src="/images/home/pc.png" alt="" />
        </StyledItemPc>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-5")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};

Habitacion4.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemPc className="botiquin ">
          <img src="/images/home/tv-tablet-8.png" alt="" />
        </StyledItemPc>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-5")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};
