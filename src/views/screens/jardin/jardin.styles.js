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

const rebote = keyframes`

  0% {
    top: 49%;
    right: 7%;
  }

  50% {
    top: 25%;
    right: 7%;
  }

  to {
    top: 49%;
    right: 7%;
  }
`;

const reboteMovil = keyframes`

  0% {
    top: 55%;
    right: 7%;
  }

  50% {
    top: 25%;
    right: 7%;
  }

  to {
    top: 55%;
    right: 7%;
  }
`;


export const StyledContent = styled.section`
  ${tw`w-screen h-screen relative flex items-end justify-center`}
  background-image: url('/images/home/fondo-jardin.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  /** Responsive */
  @media (max-width: 1024px) {
    .container {
      ${tw`w-[100%] flex justify-center h-[100%] relative max-w-full`}
      background-image: url("/images/home/jardin-moviles.png");
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
      background-image: url("/images/home/jardin-moviles.png");
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
export const StyledItemTapete = styled.div`
  ${tw`absolute cursor-pointer left-[-2%] top-[65%] w-[19%] `}
  animation: ${fadeInOut} 9s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[2.7%] top-[53.3%] w-[42.1%] h-[10%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[2.7%] top-[54.3%] w-[42.1%] h-[10%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemPelota = styled.div`
  ${tw`absolute cursor-pointer right-[7%] top-[48%] w-[9%] `}
  animation: ${rebote} 3s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[77.7%] top-[55%] w-[19.1%] h-[12%]`}
    animation: ${reboteMovil} 3s ease-in-out infinite;

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[69.7%] top-[55%] w-[23.1%] h-[11%]`}
    animation: ${reboteMovil} 3s ease-in-out infinite;

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemBotonInfo1 = styled.div`
  ${tw`absolute  left-[39.8%] top-[93.6%] w-[13.1%] h-[5%] cursor-pointer`}
  /* animation: ${fadeInOut} 15s ease-in-out infinite; */

  @media (max-width: 1024px) {
    ${tw`left-[37%] top-[74.1%] w-[29.5%] h-[5%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[37.7%] top-[74.3%] w-[27.3%] h-[4.6%]`}

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

/** Menu navigation */
export const StyledItemBotton1 = styled.div`
  ${tw`w-[19%] top-[21%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/sclerosis.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/sclerosis-1.png");
  }
`;

export const StyledItemBotton2 = styled.div`
  ${tw`w-[19%] top-[28%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-tratamiento.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-tratamiento-1.png");
  }
`;

export const StyledItemBotton3 = styled.div`
  ${tw`w-[19%] left-[0] top-[35%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-testimoniales.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-testimoniales-2.png");
  }
`;

export const StyledItemBotton4 = styled.div`
  ${tw`w-[19%] left-[0] top-[42%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-hcp.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-hcp-3.png");
  }
`;

export const StyledItemBotton5 = styled.div`
  ${tw`w-[19%] left-[0] top-[49%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-creador.png");
  height:6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-creador-4.png");
  }
`;

export const StyledItemBotton6 = styled.div`
  ${tw`w-[19%] left-[0] top-[56%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-alianzas.png");
  height:6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-alianzas-5.png");
  }
`;
/** Menu navigation */

/** Navegacion movil puertas */
export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;