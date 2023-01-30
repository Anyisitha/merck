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
  background-image: url('/images/home/fondo-jardin.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  /** Responsive */
  @media (max-width: 1024px) {
    .container {
      ${tw`w-[100%] flex justify-center h-[100%] relative max-w-full`}
      background-image: url("/images/home/alianzas-tablet9.png");
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
      background-image: url("/images/home/alianzas-movil.png");
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
export const StyledItemBolitas = styled.div`
  ${tw`absolute  left-[28.8%] top-[34.9%] w-[33.1%] cursor-pointer`}
  animation: ${fadeInOut} 10s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[40.9%] top-[43.3%] w-[39.6%] h-[23%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[39.9%] top-[45.3%] w-[52.6%] h-[21%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;
/** Imagenes animadas */

/** Puertas atras siguiente */
export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-18%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-4.9%] absolute  cursor-pointer`}
`;
/** Puertas atras siguiente */

/**navegacion bottoms */
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
/**navegacion bottoms */


/** Puertas responsive  */
export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;