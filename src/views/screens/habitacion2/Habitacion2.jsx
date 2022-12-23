import {
  StyledContent,
  StyledItemBotiquin,
  StyledItemLibros,
  StyledItemPuerta,
  StyledItemSiguiente,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
} from "./habitacion2.styles";

export default function Habitacion2() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[4%]">
        <img src="/images/home/tratamiento.png" alt="" className="h-full" />
        <div
          className="cocina absolute w-[11%] h-[7%] top-[34%] left-[18%] cursor-pointer"
          onClick={() => (window.location.href = "/cocina")}
        ></div>
        <div
          className="jardin absolute w-[11%] h-[7%] top-[34%] left-[63%] cursor-pointer"
          onClick={() => (window.location.href = "/jardin")}
        ></div>
        <div
          className="botiquin absolute w-[14%] h-[7%] top-[27%] left-[39%] cursor-pointer"
          onClick={() => (window.location.href = "/botiquin")}
        ></div>

        {/* Animaciones */}
        <StyledItemBotiquin className="botiquin ">
          <img src="/images/home/botiquin-gif.png" alt="" />
        </StyledItemBotiquin>
        <StyledItemLibros className="botiquin ">
          <img src="/images/home/libros.png" alt="" />
        </StyledItemLibros>

        {/* Puertas navegacion*/}
        <StyledItemPuerta
          className="puerta"
          onClick={() => (window.location.href = "/")}
        >
          <img src="/images/home/puerta.png" alt="" />
        </StyledItemPuerta>
        <StyledItemSiguiente
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-3")}
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
    </StyledContent>
  );
}
