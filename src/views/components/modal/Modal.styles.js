import styled from "styled-components";
import tw from "twin.macro";

export const StyledModalContent = styled.div`
    ${tw`relative z-10 overflow-hidden`}
`;

export const StyledOverlay = styled.div`
    ${tw`fixed inset-0 bg-[rgba(255, 255, 255, .5)] bg-opacity-75 transition-opacity`}
`;

export const StyledIframe = styled.iframe`
    ${tw`w-[900px] h-[600px]`}
    @media (max-width: 899px) {
        ${tw`h-[600px] w-full`}
    }


    @media (max-width: 500px) {
        ${tw`h-[600px] w-full`}
    }

    @media (max-height: 768px) and (min-width: 1280px) {
        ${tw`h-[500px]`}
    }
`;

export const StyledContentModal = styled.div`
    ${tw`bg-white px-4 pt-5 pb-4 sm:p-0 sm:pb-4`}

    @media (max-height: 768px) and (min-width: 1280px) {
        ${tw`pt-2`}
    }
`;