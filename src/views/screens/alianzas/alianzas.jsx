import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledContent,
  StyledItemBolitas,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemPuerta,
} from "./alianzas.styles";

export default function Alianzas() {
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
            <img src="/images/home/alianzas.png" alt="" className="h-full" />

            {/* Animaciones */}
            <StyledItemBolitas className="botiquin-cerrado ">
              <img src="/images/home/colores.png" alt="" />
            </StyledItemBolitas>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
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

      {width <= 767 && <Alianzas.Mobile />}
      {width >= 768 && width <= 1024 && <Alianzas.Tablet />}
    </StyledContent>
  );
}

Alianzas.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemBolitas className="botiquin-cerrado ">
          <img src="/images/home/bolitas-movil-8.png" alt="" />
        </StyledItemBolitas>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>
      </div>
    </Fragment>
  );
};

Alianzas.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemBolitas className="botiquin-cerrado ">
          <img src="/images/home/tablet-bolitas-8.png" alt="" />
        </StyledItemBolitas>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>
      </div>
    </Fragment>
  );
};
