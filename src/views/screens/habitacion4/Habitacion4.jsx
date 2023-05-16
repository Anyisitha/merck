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
  StyledItemHojas,
  StyledItemLibros,
  StyledItemPc,
  StyledItemPuerta,
  StyledItemSiguiente,
} from "./habitacion4.styles";
import ModalImage from "../../components/modal-image";


export default function Habitacion4() {
  /** States */
  const [width, setWidth] = useState(window.innerWidth);

  const [openModalIframe, setOpenModalIframe] = useState(false);
  const [url, seturl] = useState("");
  const [urlevent, seturlevent] = useState("");

  const handleCloseModal = () => {
    setOpenModalIframe(false);
  };

  const handleOpenModal = (url, event) => {
    seturlevent(event)
    seturl(url);
    setOpenModalIframe(true);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <StyledContent>
      {width > 1024 && (
        <Fragment>
          <div className="h-[88%] relative bottom-[20px] ml-[6%]">
            <img src="/images/home/hcp.png" alt="" className="h-full" />

            {/* Animaciones */}
            <StyledItemLibros className="botiquin ">
              <img src="/images/home/recursos.png" alt="" />
            </StyledItemLibros>
            {/* <StyledItemPc className="botiquin ">
              <img src="/images/home/pc.png" alt="" />
            </StyledItemPc> */}
            <StyledItemHojas className="botiquin ">
              <img src="/images/home/hojas.png" alt="" />
            </StyledItemHojas>

            {/* modal */}
            <div
              onClick={() => handleOpenModal("/col.png", "https://www.google.com/maps/search/neur%C3%B3logo/@4.4222584,-74.5660229,6.5z")}
              className="absolute w-[10.4%] h-[6%] top-[43%] left-[37%] "
            ></div>

            <div
              onClick={() => handleOpenModal("/ecu.png", "https://www.google.com/maps/search/neur%C3%B3logo+cerca+de+Ecuador/@-1.1887323,-80.6097693,8z/data=!3m1!4b1")}
              className="absolute w-[11.4%] h-[7%] top-[43%] left-[50%] "
            ></div>

            {/* modal */}

            {/* Puertas navegacion*/}
            <StyledItemPuerta
              className="puerta"
              onClick={() => (window.location.href = "/")}
            >
              <img src="/images/home/puerta.png" alt="" />
            </StyledItemPuerta>
            <StyledItemSiguiente
              className="puerta"
              onClick={() => (window.location.href = "/habitacion-6")}
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
            onClick={() => (window.location.href = "/habitacion-2")}
          ></StyledItemBotton2>

          <StyledItemBotton3
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-4")}
          ></StyledItemBotton3>
          <StyledItemBotton4
            className="boton2"
            onClick={() => (window.location.href = "/habitacion-6")}
          ></StyledItemBotton4>

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

      {width <= 767 && <Habitacion4.Mobile />}
      {width >= 768 && width <= 1024 && <Habitacion4.Tablet />}

      <ModalImage
        open={openModalIframe}
        onClose={handleCloseModal}
        url={url}
        urlevent={urlevent}
      />
    </StyledContent>
  );
}

Habitacion4.Mobile = () => {
  return (
    <Fragment>
      <div className="container">
        {/* <StyledItemPc className="botiquin ">
          <img src="/images/home/pc.png" alt="" />
        </StyledItemPc> */}

        <a
          href="https://www.google.com/maps/search/neur%C3%B3logo/@4.4222584,-74.5660229,6.5z"
          target="_blank"
          className=" absolute w-[29.4%] h-[5%] top-[37%] left-[32%]"
        ></a>
        <a
          href="https://www.google.com/maps/search/neur%C3%B3logo+cerca+de+Ecuador/@-1.1887323,-80.6097693,8z/data=!3m1!4b1"
          target="_blank"
          className=" absolute w-[26.4%] h-[5%] top-[43%] left-[32%]"
        ></a>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-5")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};

Habitacion4.Tablet = () => {
  return (
    <Fragment>
      <div className="container">
        {/* <StyledItemPc className="botiquin ">
          <img src="/images/home/tv-tablet-8.png" alt="" />
        </StyledItemPc> */}

        <a
          href="https://www.google.com/maps/search/neur%C3%B3logo/@4.4222584,-74.5660229,6.5z"
          target="_blank"
          className=" absolute w-[30.4%] h-[7%] top-[25%] left-[35%]"
        ></a>
        <a
          href="https://www.google.com/maps/search/neur%C3%B3logo+cerca+de+Ecuador/@-1.1887323,-80.6097693,8z/data=!3m1!4b1"
          target="_blank"
          className=" absolute w-[30.4%] h-[7%] top-[33.1%] left-[35%]"
        ></a>

        <StyledColor
          className="puerta"
          onClick={() => (window.location.href = "/habitacion-5")}
        ></StyledColor>

        <StyledColor1
          className="puerta"
          onClick={() => (window.location.href = "/")}
        ></StyledColor1>
      </div>
    </Fragment>
  );
};
