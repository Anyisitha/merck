import {
  StyledContent,
  StyledItemBolitas,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemPuerta,
  StyledItemSiguiente,
} from "./alianzas.styles";

export default function Alianzas() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[6%]">
        <img src="/images/home/alianzas.png" alt="" className="h-full" />

        {/* Animaciones */}
        <StyledItemBolitas className="botiquin-cerrado ">
          <img src="/images/home/colores.png" alt="" />
        </StyledItemBolitas>

        {/* Puertas navegacion*/}
        <StyledItemPuerta className="puerta" onClick={() => (window.location.href = "/")}>
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
    </StyledContent>
  );
}
