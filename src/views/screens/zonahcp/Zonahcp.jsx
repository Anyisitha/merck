import {
  StyledContent,
  StyledItemBocina,
  StyledItemBonbillo,
  StyledItemMundo,
  StyledItemNotas,
  StyledItemPata,
  StyledItemPuerta,
  StyledItemRojo,
  StyledItemSiguiente,
} from "./Zonahcp.styles";

export default function Zonahcp() {
  return (
    <StyledContent>
      <div className="h-[88%] relative bottom-[20px] ml-[6%]">
        <img src="/images/home/zona.png" alt="" className="h-full" />

        {/* Animaciones */}
        <StyledItemBocina className="botiquin ">
          <img src="/images/home/bocina.png" alt="" />
        </StyledItemBocina>

        <StyledItemNotas className="botiquin ">
          <img src="/images/home/notas.gif" alt="" />
        </StyledItemNotas>

        <StyledItemBonbillo className="botiquin ">
          <img src="/images/home/bobillo.png" alt="" />
        </StyledItemBonbillo>

        <StyledItemMundo className="botiquin ">
          <img src="/images/home/mundo.png" alt="" />
        </StyledItemMundo>

        <StyledItemRojo className="botiquin ">
          <img src="/images/home/rojo.png" alt="" />
        </StyledItemRojo>

        <StyledItemPata className="botiquin ">
          <img src="/images/home/planti.png" alt="" />
        </StyledItemPata>

        {/* Puertas navegacion*/}
        <StyledItemPuerta className="puerta">
          <img src="/images/home/puerta.png" alt="" />
        </StyledItemPuerta>
        <StyledItemSiguiente className="puerta">
          <img src="/images/home/puerta-siguiente.png" alt="" />
        </StyledItemSiguiente>
      </div>
    </StyledContent>
  );
}
