import {
  StyledContent,
  StyledItemCerrado,
  StyledItemMedicamento,
  StyledItemPuerta,
} from "./botiquin.styles";

export default function Botiquin() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[6%]">
        <img src="/images/home/botiquin.png" alt="" className="h-full" />

        {/* Animaciones */}
        <StyledItemCerrado className="botiquin-cerrado ">
          <img src="/images/home/pildora.gif" alt="" />
        </StyledItemCerrado>
        <StyledItemMedicamento className="medicamentos ">
          <img src="/images/home/medicamentos.png" alt="" />
        </StyledItemMedicamento>

        {/* Puertas navegacion*/}
        <StyledItemPuerta className="puerta" onClick={() => (window.location.href = "/habitacion-2")}>
          <img src="/images/home/puerta.png" alt="" />
        </StyledItemPuerta>
        
      </div>
    </StyledContent>
  );
}
