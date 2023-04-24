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
      background-image: url("/images/home/zona-tablet-logo.png");
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
      background-image: url("/images/home/movil-logos-2.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;

      @media (max-width: 500px) {
        ${tw`w-full h-[100%]`}
      }
    }
  }
`;

/** Imagenes animadas */
export const StyledItemTv = styled.div`
  ${tw`absolute right-[9.3%] top-[61.6%] w-[19.3%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemTv1 = styled.div`
  ${tw`absolute right-[9.3%] top-[61.6%] w-[19.3%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[1%] top-[72.3%] w-[42.8%] h-[17.1%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemFarol = styled.div`
  ${tw`absolute left-[8.4%] top-[45%] w-[10.4%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemFarol1 = styled.div`
  ${tw`absolute right-[19.6%] top-[44.9%] w-[7.7%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemMueble = styled.div`
  ${tw`absolute left-[37.7%] top-[43.7%] w-[16%]`}

  @media (max-width: 1024px) {
    ${tw`left-[34.9%] top-[30.2%] w-[29.1%] h-[7.8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[37.9%] top-[42.2%] w-[29.1%] h-[7.8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemPantalla = styled.div`
  ${tw`absolute left-[23.4%] top-[26.9%] w-[43.8%]`}
  /* animation: ${fadeInOut} 9s ease-in-out infinite; */

  @media (max-width: 1024px) {
    ${tw`left-[9.9%] top-[33.2%] w-[84.1%] h-[24.8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;

export const StyledItemRecor = styled.div`
  ${tw`absolute left-[42.4%] top-[56.7%] w-[32.3%]`}
  /* animation: ${fadeInOut} 9s ease-in-out infinite; */

  @media (max-width: 1024px) {
    ${tw`left-[44.9%] top-[38.2%] w-[10.1%] h-[6.8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[46.9%] top-[49.2%] w-[10.1%] h-[3.8%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }
`;
/** Imagenes animadas */

/** Bottom navegation puertas */
export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-0.9%] absolute  cursor-pointer`}
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
  background-image: url("/images/home/boton-hcp.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-hcp-3.png");
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