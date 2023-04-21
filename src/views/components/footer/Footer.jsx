import { Fragment } from "react";
import { StyledContent } from "./Footer.styles";

export default function Footer() {
  return (
    <Fragment>
      <StyledContent>
        <div className="flex items-center w-[100%] justify-between">
          <div className="flex items-center gap-[25px]">
            <img
              className="house-of"
              src="/images/home/house-of-em.png"
              alt="logo"
              width={34}
              height={34}
            />

            {/* <div className="flex gap-[25px]">
              <span className="text-[8px]">Terminos y condiciones</span>
              <span className="text-[8px]">Declaracion de privacidad</span>
              <span className="text-[8px]">Politicas de cookies</span>
            </div> */}
          </div>
          <div className="flex gap-[25px]">
              <span className="text-[8px]">Terminos y condiciones</span>
              <span className="text-[8px]">Declaracion de privacidad</span>
              <span className="text-[8px]">Politicas de cookies</span>
            </div>
          {/* <p className="text-center lg:w-[60%] w-[85%] text-[8px] font-light text-small">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
        ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
        molestie consequat.
      </p> */}

          <img
            className="merck h-[18px]"
            src="/images/home/merk-icono.webp"
            alt="logo"
            width={115}
            height={10}
          />
        </div>
        <div></div>
      </StyledContent>
    </Fragment>
  );
}
