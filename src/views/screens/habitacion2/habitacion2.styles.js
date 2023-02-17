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
      background-image: url("/images/home/cocina-tablet.png");
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
      background-image: url("/images/home/tratamiento-movil.png");
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
export const StyledItemBotiquin = styled.div`
  ${tw`absolute cursor-pointer right-[48.6%] top-[33%] w-[14%] `}
  animation: ${fadeInOut} 8s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[36.8%] top-[24.7%] w-[24.4%] h-[19.1%]`}

    img {
      ${tw`w-[100%] h-[100%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[28.7%] top-[29.8%] w-[48.1%] h-[30%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemLibros = styled.div`
  ${tw`absolute  left-[25.8%] top-[59.6%] w-[17.3%] cursor-pointer`}
  animation: ${fadeInOut} 8s ease-in-out infinite;

  @media (max-width: 1024px) {
    ${tw`left-[16.7%] top-[41.8%] w-[58.1%] h-[30%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }

  @media (max-width: 767px) {
    ${tw`left-[23.3%] top-[54.8%] w-[36.1%] h-[13.7%]`}

    img {
      ${tw`w-[88%] h-[72%]`}
    }
  }
`;

export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-0.8%] absolute  cursor-pointer`}
`;
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
  background-image: url("/images/home/boton-testimoniales.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-testimoniales-2.png");
  }
`;

export const StyledItemBotton3 = styled.div`
  ${tw`w-[19%] left-[0] top-[35%] left-[0] absolute  cursor-pointer`}
  background-image: url("/images/home/boton-hcp.png");
  height: 6%;
  background-size: 100% 100%;

  &:hover{
    background-image: url("/images/home/boton-hcp-3.png");
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

/** Navegacion movil puertas */
export const StyledColor = styled.div`
  ${tw`w-[19%] bottom-[6px] right-[0] h-[12%] absolute  cursor-pointer`}
`;

export const StyledColor1 = styled.div`
  ${tw`w-[19%] bottom-[6px] left-[0] h-[12%] absolute  cursor-pointer`}
`;

export const StyledChickend = styled.div`
  ${tw`w-[19%] top-[34%] left-[84px] h-[12%] absolute  cursor-pointer`}

  @media (max-width: 767px) {
    ${tw`w-[19%] top-[34%] left-[38px] h-[12%] absolute  cursor-pointer`}
  }
`;

export const StyledGarden = styled.div`
  ${tw`w-[19%] top-[42%] right-[74px] h-[4%] absolute  cursor-pointer`}

  @media (max-width: 767px) {
    ${tw`w-[19%] top-[37%] right-[38px] h-[4%] absolute  cursor-pointer`}
  }
`;

export const Styledfirst = styled.div`
  ${tw`w-[19%] top-[39%] left-[341px] h-[12%] absolute  cursor-pointer`}

  @media (max-width: 767px) {
    ${tw`w-[19%] top-[39%] left-[161px] h-[12%] absolute  cursor-pointer`}
  }
`;