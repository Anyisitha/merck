import {
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
} from "./habitacion5.styles";

export default function Habitacion5() {
  return (
    <StyledContent>
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
    </StyledContent>
  );
}
