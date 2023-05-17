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

            {/* instagram */}
            <div >
              <a
                href="https://www.instagram.com/casadelaesclerosislatam/"
                target="_blank"
              >
                <img
                  className="alianzas responsive absolute w-[-5%] h-[54%] top-[27%] left-[4.7%]"
                  src="/images/home/in.webp"
                  alt=""
                />
              </a>
            </div>
            {/* instagram */}

            {/* <div className="flex gap-[25px]">
              <span className="text-[8px]">Terminos y condiciones</span>
              <span className="text-[8px]">Declaracion de privacidad</span>
              <span className="text-[8px]">Politicas de cookies</span>
            </div> */}
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <p className="w-[80%] text-center text-[8px] mb-[10px] hola">
                Este sitio web es propiedad de Grupo Merck en el país que usted
                reside. Su contenido ha sido diseñado exclusivamente para
                residentes en Ecuador, Colombia. En ningún caso la información
                contenida en la misma sustituye la consulta, el tratamiento y
                las recomendaciones del profesional de la salud. Conozca más
                sobre MERCK en{" "}
                <a href="https://www.merckgroup.com/de" target="_blank">
                  www.merckgroup.com/de
                </a>{" "}
                2023 /Grupo Merck © Todos los derechos reservados.
                CO-NONNI-00160
              </p>
            </div>
            <div className="flex gap-[25px]">
              <a
                target="_blank"
                href="https://eml.com.co/merck/Terminos-y-condiciones-Merck.pdf"
                className="text-[8px]"
              >
                Terminos y condiciones
              </a>
              <a
                target="_blank"
                href="https://eml.com.co/merck/Politica%20pirvacidad.pdf"
                className="text-[8px]"
              >
                Declaracion de privacidad
              </a>
              <a
                target="_blank"
                href="https://eml.com.co/merck/Politica%20de%20Cookies.pdf"
                className="text-[8px]"
              >
                Politicas de cookies
              </a>
              <a
                target="_blank"
                href="https://www.casadelaem.com/"
                className="text-[8px]"
              >
                Guia instagram de Merck
              </a>
            </div>
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
