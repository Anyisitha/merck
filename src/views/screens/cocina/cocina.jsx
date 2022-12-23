import {
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemBotton6,
  StyledItemFuego,
  StyledItemGota,
  StyledItemPollo,
  StyledItemPuerta,
} from "./cocina.styles";

export default function Cacina() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[6%]">
        <img src="/images/home/cocina.png" alt="" className="h-full" />
        <StyledItemFuego className="cocina ">
          <div className="relative">
            <img src="/images/home/fuego.png" alt="" />
          </div>
        </StyledItemFuego>
        <StyledItemPollo className="pollo ">
          <img src="/images/home/pollo-asado-gif-dim.gif" alt="" />
        </StyledItemPollo>

        <StyledItemGota className="gota ">
          <img src="/images/home/gifs.gif" alt="" />
        </StyledItemGota>

        {/* Puertas navegacion*/}
        <StyledItemPuerta className="puerta" onClick={() => (window.location.href = "/habitacion-2")}>
          <img src="/images/home/puerta.png" alt="" />
        </StyledItemPuerta>
        
      </div>

      {/* Animaciones */}
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
    </StyledContent>
  );
}
