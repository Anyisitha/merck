import styled, { keyframes } from "styled-components";
import tw from "twin.macro";

export const StyledContent = styled.section`
  ${tw`w-screen h-screen relative`}
  background-image: url('/images/home/background.webp');
  background-size: 100% 100%;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    ${tw`flex items-end pb-[17%] justify-center`}
    background-image: url('/images/home/mobile-background.png');

    .container {
      background-image: url("/images/home/casa-8.png");
      background-size: 100% 100%;
      ${tw`w-[80%] flex justify-center h-[80%] relative`}

      @media (max-width: 500px) {
        ${tw`mb-[6.4%]`}
      }
    }
  }

  @media (max-width: 767px) {
    ${tw`flex items-end pb-[17%] justify-center`}
    background-image: url('/images/home/mobile-background.png');

    .container {
      background-image: url("/images/home/mobile_house.png");
      background-size: 100% 100%;
      ${tw`w-[80%] flex justify-center h-[80%] relative`}

      @media (max-width: 500px) {
        ${tw`mb-[6.4%]`}
      }
    }
  }
`;

export const StyledTitle = styled.h1`
  ${tw`text-[22px] text-white font-medium`}
  text-shadow: 2px 2px #00000050;
`;

const zoomIn = keyframes`
       
    25% {
        transform: scale(1);
    }

    75% {
        transform: scale(1.2);
    }
`;

export const StyledContentTratamiento = styled.div`
  ${tw`w-[26.5%] h-[21.8%] absolute top-[45.1%] left-[11.5%] flex justify-center items-center cursor-pointer`}

  @media (max-width: 1024px) {
    ${tw`top-[26.7%] left-[10.2%] w-[84.5%] h-[20.4%]`}

    .parent {
      .child {
        h1 {
          font-size: 16px !important;
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/testimonial.webp");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;

        .trata {
        }
      }
    }
  }
`;

export const StyledContentTestimonials = styled.div`
  ${tw`w-[23.1%] h-[21.6%] absolute top-[45.3%] left-[38.9%] flex justify-center items-center cursor-pointer`}

  @media (max-width: 1024px) {
    ${tw`top-[48.6%] left-[10.2%] w-[41.3%] h-[21%]`}

    .parent {
      .child {
        h1 {
          ${tw`text-[16px]`}
        }
      }
    }
  }

  @media (max-width: 768px) {
    .parent {
      .child {
        h1 {
          ${tw`text-[10px]`}
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/testimonials-room.webp");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }
`;

export const StyledContentHCP = styled.div`
  ${tw`w-[18.5%] h-[21.6%] absolute top-[45.3%] left-[62.8%] flex justify-center items-center cursor-pointer`}

  @media (max-width: 1024px) {
    ${tw`top-[48.6%] left-[53.6%] w-[41.3%] h-[21%]`}

    .parent {
      .child {
        h1 {
          ${tw`text-[16px]`}
        }
      }
    }
  }

  @media (max-width: 768px) {
    .parent {
      .child {
        h1 {
          ${tw`text-[9px]`}
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/HCP-room.webp");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }
`;

export const StyledContentExperenceCreator = styled.div`
  ${tw`w-[34.4%] h-[21.5%] absolute top-[68.5%] left-[9%] flex justify-center items-center cursor-pointer`}

  @media (max-width: 1024px) {
    ${tw`top-[70.6%] left-[10.1%] w-[41.3%] h-[24%]`}

    .parent {
      .child {
        h1 {
          ${tw`text-[16px]`}
        }
      }
    }
  }

  @media (max-width: 768px) {
    .parent {
      .child {
        h1 {
          ${tw`text-[10px]`}
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/experience-room.webp");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }
`;

export const StyledContentRegister = styled.div`
  ${tw`w-[37.1%] h-[21.5%] absolute top-[68.5%] left-[44.2%] flex justify-center items-center cursor-pointer`}

  @media (max-width: 1024px) {
    ${tw`top-[70.6%] left-[53.6%] w-[41.3%] h-[24%]`}

    .parent {
      .child {
        h1 {
          ${tw`text-[16px]`}
        }
      }
    }
  }

  @media (max-width: 768px) {
    .parent {
      .child {
        h1 {
          ${tw`text-[10px]`}
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/border-azul.png");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}

      h1 {
        ${tw`text-center`}
      }
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;

        h1 {
          ${tw`text-center`}
        }
      }
    }
  }
`;

export const StyledContentSclerosis = styled.div`
  ${tw`w-[69.9%] h-[37.2%] absolute top-[6.6%] left-[11.4%] flex justify-center items-center cursor-pointer`}
  clip-path: polygon(50% 0%, 100% 57.5%, 100% 100%, 0 100%, 0% 59%);

  @media (max-width: 1024px) {
    clip-path: polygon(50% 0%, 100% 24.5%, 100% 100%, 0 100%, 0% 24.6%);
    ${tw`h-[37.2%] w-[84.8%] top-[1.4%] left-[10.1%] h-[24.2%]`}

    .parent {
      .child {
        background-image: url("/images/home/sclerosis_mobile.png") !important;
        background-size: 100% 100% !important;
        background-position: bottom;

        h1 {
          font-size: 16px !important;
        }
      }
    }
  }

  .parent {
    ${tw`relative w-full h-full overflow-hidden`}
    .child {
      background-image: url("/images/home/sclerosis-room.webp");
      background-size: 100% 100%;
      ${tw`w-full h-full flex justify-center items-center`}

      h1 {
        ${tw`mt-[7%]`}
      }
    }
    &:hover {
      .child {
        animation-name: ${zoomIn};
        animation-duration: 3s;
        animation-iteration-count: infinite;
      }
    }
  }
`;

export const StyledModal = styled.div`
  ${({ isOpen }) => (isOpen ? tw`flex` : tw`hidden`)}
  ${tw`fixed z-[1] w-screen h-screen bg-[rgba(0, 92, 169, .9)] cursor-pointer justify-center items-center flex-col`}
`;

export const StyledLogin = styled.div`
  ${tw`absolute top-[45%] left-[26%] w-[18%] h-[30%] cursor-pointer`}
`;

export const StyledRegister = styled.div`
  ${tw`absolute top-[45%] left-[55%] w-[19%] h-[30%] cursor-pointer`}
`;

export const StyledLabel = styled.label`
  ${tw`text-white text-[20px]`}
  text-shadow: 2px 2px #00000050;
`;

export const StyledInput = styled.input`
  ${({ isRow }) => (isRow ? tw`w-full` : tw`w-[740px]`)}
  ${tw`h-[25px]  bg-[rgba(1, 46, 126, .8)] p-[20px] text-white`}
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const StyledPassword = styled.a`
  ${tw`text-white font-bold text-[18px]`}
  text-shadow: 2px 2px #00000050;
`;

export const StyledRegisterLogin = styled.div`
  ${tw`text-white font-bold text-[18px]`}
  text-shadow: 2px 2px #00000050;

  a {
  }
`;

export const StyledButtomLogin = styled.button`
  ${tw`w-[283px] h-[56px] bg-[#fecc01] text-[#005ca9] mt-[20px] text-[25px] font-bold`}
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const StyledTitle1 = styled.a`
  ${tw`text-white font-bold text-[40px] mt-[20px] text-center`}
  text-shadow: 2px 2px #00000050;
`;
