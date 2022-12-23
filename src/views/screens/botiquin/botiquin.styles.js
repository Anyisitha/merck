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

export const StyledItemCerrado = styled.div`
  ${tw`absolute  left-[42%] top-[49.5%] w-[4.6%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemMedicamento = styled.div`
  ${tw`absolute  left-[34%] top-[40.1%] w-[9.1%] cursor-pointer`}
  animation: ${fadeInOut} 9s ease-in-out infinite;
`;

export const StyledItemPuerta = styled.div`
  ${tw`w-[11%] bottom-[4%] left-[-7%] absolute  cursor-pointer`}
`;
