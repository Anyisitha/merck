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

export default function Jardin() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[48px] ml-[6%]">
            <img src="/images/home/jardin.png" alt="" className="h-full" />

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

      {width <= 767 && <Jardin.Mobile />}
      {width >= 768 && width <= 1024 && <Jardin.Tablet />}
    </StyledContent>
  );
}

Jardin.Mobile = () => {
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
    </Fragment>
  );
};

Jardin.Tablet = () => {
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
    </Fragment>
  );
};
