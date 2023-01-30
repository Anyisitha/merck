import { Fragment, useEffect, useState } from "react";
import {
  StyledColor,
  StyledContent,
  StyledItemCerrado,
  StyledItemMedicamento,
  StyledItemPuerta,
} from "./botiquin.styles";

export default function Botiquin() {
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
            <img src="/images/home/botiquin.png" alt="" className="h-full" />

            {/* Animaciones */}
            <StyledItemCerrado className="botiquin-cerrado ">
              <img src="/images/home/pildora.gif" alt="" />
            </StyledItemCerrado>
            <StyledItemMedicamento className="medicamentos ">
              <img src="/images/home/medicamentos.png" alt="" />
            </StyledItemMedicamento>

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-2")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
          </div>
        </Fragment>
      )}

      {width <= 767 && <Botiquin.Mobile />}
      {width >= 768 && width <= 1024 && <Botiquin.Tablet />}
    </StyledContent>
  );
}

Botiquin.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemMedicamento className="medicamentos ">
          <img src="/images/home/medicamentos.png" alt="" />
        </StyledItemMedicamento>
        <StyledItemCerrado className="botiquin-cerrado ">
          <img src="/images/home/pildora.gif" alt="" />
        </StyledItemCerrado>
        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
      </div>
    </Fragment>
  );
};

Botiquin.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
        <StyledItemMedicamento className="medicamentos ">
          <img src="/images/home/medicamentos.png" alt="" />
        </StyledItemMedicamento>
        <StyledItemCerrado className="botiquin-cerrado ">
          <img src="/images/home/pildora.gif" alt="" />
        </StyledItemCerrado>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-2")}
        ></StyledColor>
      </div>
    </Fragment>
  );
};
