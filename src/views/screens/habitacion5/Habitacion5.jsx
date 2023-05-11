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
} from "./habitacion5.styles";

export default function Habitacion5() {
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
            <img src="/images/home/c-creador.png" alt="" className="h-full" />

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

            {/* Animaciones */}
            <StyledItemTv className="mueble ">
              <img src="/images/home/mueble.png" alt="" />
            </StyledItemTv>

            <StyledItemFarol className="farol ">
              <img src="/images/home/farol.png" alt="" />
            </StyledItemFarol>

            <StyledItemFarol1 className="farol ">
              <img src="/images/home/farol_1.png" alt="" />
            </StyledItemFarol1>

            <StyledItemPantalla className="pantalla ">
              <img src="/images/home/pantalla.png" alt="" />
            </StyledItemPantalla>

            <StyledItemMueble className="GAMEOVER ">
              <img src="/images/home/GAMEOVER.gif" alt="" />
            </StyledItemMueble>

            <StyledItemRecor className="mueble ">
              <img src="/images/home/tunes.webp" alt="" />
            </StyledItemRecor>
            <a href="https://drive.google.com/file/d/1-o7kgslrFDMYoTUHhypf1-D0cTTKx7mV/view?usp=drive_web" target="_blank" className="flex justify-center items-center text-[#fff] rounded-[10px] bg-[#e72e8a] absolute w-[10%] h-[5%] top-[62%] left-[54%]">
              Jugar
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

      {width <= 767 && <Habitacion5.Mobile />}
      {width >= 768 && width <= 1024 && <Habitacion5.Tablet />}
    </StyledContent>
  );
}

Habitacion5.Mobile = () => {
  return (
    <Fragment>
      <div className="container">

        <StyledItemPantalla className="pantalla ">
          <img src="/images/home/pantalla.png" alt="" />
        </StyledItemPantalla>

        <StyledItemMueble className="GAMEOVER ">
          <img src="/images/home/GAMEOVER.gif" alt="" />
        </StyledItemMueble>

        <StyledItemRecor className="mueble ">
          <img src="/images/home/tunes.webp" alt="" />
        </StyledItemRecor>

        <StyledItemTv1 className="mueble1">
          <img src="/images/home/mueble1.png" alt="" />
        </StyledItemTv1>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
        <a href="https://drive.google.com/file/d/1-o7kgslrFDMYoTUHhypf1-D0cTTKx7mV/view?usp=drive_web" target="_blank" className="flex justify-center items-center text-[#fff] rounded-[10px] bg-[#e72e8a] absolute w-[18%] h-[5%] top-[51%] left-[71%]">
              Jugar
            </a>
      </div>
      
    </Fragment>
  );
};

Habitacion5.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
      <StyledItemMueble className="GAMEOVER ">
          <img src="/images/home/GAMEOVER.gif" alt="" />
        </StyledItemMueble>
        <StyledItemRecor className="mueble ">
          <img src="/images/home/tunes.webp" alt="" />
        </StyledItemRecor>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>

<a href="https://drive.google.com/file/d/1-o7kgslrFDMYoTUHhypf1-D0cTTKx7mV/view?usp=drive_web" target="_blank" className="flex justify-center items-center text-[#fff] rounded-[10px] bg-[#e72e8a] absolute w-[18%] h-[5%] top-[43%] left-[68%]">
              Jugar
            </a>
      </div>
    </Fragment>
  );
};
