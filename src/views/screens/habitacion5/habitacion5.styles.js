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
`;

export const StyledItemTv = styled.div`
  ${tw`absolute right-[9.3%] top-[61.6%] w-[19.3%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
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
`;

export const StyledItemPantalla = styled.div`
  ${tw`absolute left-[23.4%] top-[26.9%] w-[43.8%]`}
  /* animation: ${fadeInOut} 9s ease-in-out infinite; */
`;

export const StyledItemRecor = styled.div`
  ${tw`absolute left-[42.4%] top-[56.7%] w-[32.3%]`}
  /* animation: ${fadeInOut} 9s ease-in-out infinite; */
`;

export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-0.9%] absolute  cursor-pointer`}
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