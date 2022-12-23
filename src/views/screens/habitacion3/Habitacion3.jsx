import {
  StyledContent,
  StyledItemBotton1,
  StyledItemBotton2,
  StyledItemBotton3,
  StyledItemBotton4,
  StyledItemBotton5,
  StyledItemCortina,
  StyledItemCuadroRetrato,
  StyledItemPuerta,
  StyledItemSiguiente,
} from "./habitacion3.styles";

export default function Habitacion3() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[4%]">
        <img src="/images/home/testimonial.png" alt="" className="h-full" />

        {/* Animaciones */}
        <StyledItemCortina className="botiquin ">
          <img src="/images/home/sofa.png" alt="" />
        </StyledItemCortina>
        <StyledItemCuadroRetrato className="botiquin ">
          <img src="/images/home/cuadro-retrato.png" alt="" />
        </StyledItemCuadroRetrato>

        {/* Puertas navegacion*/}
        <StyledItemPuerta className="puerta" onClick={() => window.location.href = "/"}>
          <img src="/images/home/puerta.png" alt="" />
        </StyledItemPuerta>
        <StyledItemSiguiente className="puerta" onClick={() => window.location.href = "/habitacion-4"}>
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
    </StyledContent>
  );
}
