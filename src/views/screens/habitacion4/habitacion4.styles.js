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
      background-image: url("/images/home/hcp-version-tablet.png");
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
      background-image: url("/images/home/hcp-movil.png");
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
export const StyledItemLibros = styled.div`
  ${tw`absolute right-[16.5%] top-[41.8%] w-[8%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemPc = styled.div`
  ${tw`absolute right-[36%] top-[27.5%] w-[29.7%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[23.4%] top-[21.4%] w-[53.3%] h-[22.2%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[12.6%] top-[29.4%] w-[64.9%] h-[25.5%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemHojas = styled.div`
  ${tw`absolute left-[6.8%] top-[25.2%] w-[20.3%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;
/** Imagenes animadas */

/** Bottom navegation puertas */
export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[4.9%] absolute  cursor-pointer`}
`;
/** Bottom navegation puertas */

/** Menu navegation */
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
  background-image: url("/images/home/boton-creador.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-creador-4.png");
  }
`;

export const StyledItemBotton5 = styled.div`
  ${tw`w-[19%] left-[0] top-[49%] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-alianzas.png");
  height:6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-alianzas-5.png");
  }
`;
/** Menu navegation */

/** responsive Bottom navegation movil */
export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] right-[0] h-[12%] absolute  cursor-pointer`}
`;

export const StyledColor1 = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;