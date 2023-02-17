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
      background-image: url("/images/home/botiquin-tablet-version.png");
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
      background-image: url("/images/home/botiquin-moviles.png");
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
export const StyledItemCerrado = styled.div`
  ${tw`absolute  left-[42%] top-[49.5%] w-[4.6%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[49.7%] top-[47.1%] w-[10.1%] h-[8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[46.7%] top-[56.1%] w-[18.1%] h-[4%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemMedicamento = styled.div`
  ${tw`absolute  left-[34%] top-[40.1%] w-[9.1%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[32.7%] top-[38.1%] w-[22.1%] h-[19%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[32.7%] top-[49.1%] w-[22.1%] h-[14%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemBotonInfo = styled.div`
  ${tw`absolute  left-[45.5%] top-[56.6%] w-[12.1%] cursor-pointer`}
  animation: ${fadeInOut} 15s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[59%] top-[52.1%] w-[20.5%] h-[5%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[57.7%] top-[59.3%] w-[25.3%] h-[4.6%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;
/** Imagenes animadas */

/** Navigation puertas */
export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;
/** Navigation puertas */

/** Navegacion responsive movil puertas */
export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;
