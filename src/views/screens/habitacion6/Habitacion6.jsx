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
  StyledItemFarol,
  StyledItemFarol1,
  StyledItemMueble,
  StyledItemPantalla,
  StyledItemPuerta,
  StyledItemRecor,
  StyledItemSiguiente,
  StyledItemTv,
  StyledItemTv1,
} from "./habitacion6.styles";

export default function Habitacion6() {
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
            <img src="/images/home/c-logos-1.png" alt="" className="h-full" />

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta-siguiente.png" alt="" />
            </StyledItemSiguiente>

            <a href="https://eml.com.co/MerckPrueba/RUTA%20DEL%20PACIENTE%20CON%20ESCLEROSIS%20MULTIPLE%20COLOMBIA%20Y%20ECUADOR.pdf" target="_blank" className=" absolute w-[27%] h-[14%] top-[43%] left-[34%]">
              
            </a>
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

      {width <= 767 && <Habitacion6.Mobile />}
      {width >= 768 && width <= 1024 && <Habitacion6.Tablet />}
    </StyledContent>
  );
}

Habitacion6.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};

Habitacion6.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
      

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};
