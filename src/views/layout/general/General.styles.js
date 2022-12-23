import styled from "styled-components";
import tw from "twin.macro";

export const StyledLogo = styled.img`
  ${tw`absolute top-[20px] z-[1] w-[100px] h-[100px] left-[20px]`}

  @media (max-width: 1024px) {
    ${tw`w-[50px] h-[50px] top-[10px] left-[10px]`}
  }
`;