import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const StyledContent = styled.section`
  ${tw`w-screen h-screen relative flex items-end justify-center`}
  background-image: url('/images/home/tratamiento-fondo.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;


  /** Responsive */
  @media (max-width: 1024px) {
    .container {
      ${tw`w-[100%] flex justify-center h-[100%] relative max-w-full`}
      background-image: url("/images/home/version-tablet.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      @media (max-width: 500px) {
        ${tw`w-full h-[100%]`}
      }
    }
  }

  @media (max-width: 767px) {
    .container {
      ${tw`w-[100%] flex justify-center h-[100%] relative max-w-full`}
      background-image: url("/images/home/cocina123.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      @media (max-width: 500px) {
        ${tw`w-full h-[100%]`}
      }
    }
  }
`;
/** Responsive */


/** Imagenes animadas */
export const StyledItem = styled.div`
  ${tw`absolute w-[25.3%] h-[7%] top-[30.8%] left-[13.5%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[1.3%] top-[19%] w-[57.5%] h-[58.4%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[4.6%] top-[30.9%] w-[33.1%] h-[23.5%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemSilla = styled.div`
  ${tw`absolute w-[17.1%] left-[5.6%] top-[60.2%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;  

  @media (max-width: 1024px) {
    ${tw`left-[3.8%] top-[65.4%] h-[29%] w-[33.1%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[4.7%] top-[64.5%] w-[39.4%] h-[31.4%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

`;

export const StyledItemRetrato = styled.div`
  ${tw`absolute w-[15.7%] left-[41.8%] top-[35%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[43%] top-[27.2%] w-[22.4%] h-[16%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[39.8%] top-[33.5%] w-[27.9%] h-[12.8%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemCama = styled.div`
  ${tw`absolute w-[28.7%] left-[33.7%] top-[63.1%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[30%] top-[39.2%] w-[47.4%] h-[30%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[25.8%] top-[42.5%] w-[52.9%] h-[23.8%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemLampara = styled.div`
  ${tw`absolute w-[16.7%] left-[57.8%] top-[59.1%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[32.7%] top-[53.4%] w-[37.3%] h-[37.2%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[42.1%] top-[58.2%] w-[37.2%] h-[25.2%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemTocador = styled.div`
  ${tw`absolute w-[16.6%] left-[70.1%] top-[40.6%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[69%] top-[28.3%] w-[28.3%] h-[45.7%]`}

    img {
      ${tw`w-[100%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[69.1%] top-[36%] w-[29.3%] h-[32%]`}

    img {
      ${tw`w-[100%] h-[72%]`}
    }
  }
`;
/** Imagenes animadas */


/** Puertas atras siguiente */
export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-2%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-1.9%] absolute  cursor-pointer`}
`;
/** Puertas atras siguiente */


/**navegacion bottoms */
export const StyledItemBotton1 = styled.div`
  ${tw`w-[19%] top-[21%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-tratamiento.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/home/boton-tratamiento-1.png");
  }
`;

export const StyledItemBotton2 = styled.div`
  ${tw`w-[19%] top-[28%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-testimoniales.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/home/boton-testimoniales-2.png");
  }
`;

export const StyledItemBotton3 = styled.div`
  ${tw`w-[19%] left-[0] top-[35%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-hcp.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/home/boton-hcp-3.png");
  }
`;

export const StyledItemBotton4 = styled.div`
  ${tw`w-[19%] left-[0] top-[42%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-creador.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/home/boton-creador-4.png");
  }
`;

export const StyledItemBotton5 = styled.div`
  ${tw`w-[19%] left-[0] top-[49%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-alianzas.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover {
    background-image: url("/images/home/boton-alianzas-5.png");
  }
`;

export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] right-[0] h-[12%] absolute  cursor-pointer`}
`;

export const StyledColor1 = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;
