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

const rotate = keyframes`

  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const banda = keyframes`

  0% {
    right: 19.9%; 
    top: 54%;
  }

  50% {
    right: 36.4%; 
    top: 54%;
  }

  100% {
    right: 36.6%;
    top: 73.9%;
  }
`;

export const StyledContent = styled.section`
  ${tw`w-screen h-screen relative flex items-end justify-center`}
  background-image: url('/images/home/tratamiento-fondo.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;

export const StyledItemBocina = styled.div`
  ${tw`absolute left-[1.8%] top-[43.5%] w-[5.5%]`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemNotas = styled.div`
  ${tw`absolute left-[6.4%] top-[42.5%] w-[4%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemBonbillo = styled.div`
  ${tw`absolute left-[18.7%] top-[53.4%] w-[]`}
  animation: ${fadeInOut} 4s ease-in-out infinite;
`;

export const StyledItemMundo = styled.div`
  ${tw`absolute left-[22.4%] top-[47%] w-[6.2%]`}
  animation: ${rotate} 5s ease-in-out infinite;
`;

export const StyledItemRojo = styled.div`
  ${tw`absolute left-[24.7%] top-[28.6%] w-[4.2%]`}
  animation: ${fadeInOut} 3s ease-in-out infinite;
`;

export const StyledItemPata = styled.div`
  ${tw`absolute right-[19.9%] top-[54.2%] w-[7%]`}
  animation: ${banda} 9s ease-in-out infinite;  
`;


export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;

export const StyledItemSiguiente = styled.div`
  ${tw`w-[11%] bottom-[4%] right-[-0.9%] absolute  cursor-pointer`}
`;