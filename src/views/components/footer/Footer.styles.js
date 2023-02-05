import styled from "styled-components";
import tw from "twin.macro";

export const StyledContent = styled.footer`
    ${tw`absolute w-full bg-[#522583] bottom-0 lg:flex block justify-between text-white py-[10px] px-[10px] items-center h-[40px] overflow-hidden`}
    font-family: "Roboto", sans-serif;

    @media (max-width: 1024px) {
        ${tw`top-[100vh] py-[20px] h-[50px]`}

        .house-of {
            ${tw`hidden`}
        }

        .merck {
            ${tw`w-[57px] h-[9px]`}
        }

        .text-small {
            ${tw`text-[6px] text-left pr-[10px]`}
        }

        .boll {
            ${tw`hidden`}
        }
    }
`;