import { Fragment, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import {
  StyledButtomLogin,
  StyledContent,
  StyledContentExperenceCreator,
  StyledContentHCP,
  StyledContentRegister,
  StyledContentSclerosis,
  StyledContentTestimonials,
  StyledContentTratamiento,
  StyledInput,
  StyledLabel,
  StyledLogin,
  StyledModal,
  StyledPassword,
  StyledRegister,
  StyledRegisterLogin,
  StyledTitle,
} from "./home.styles";

export default function Home() {


  /** States */
  const [openModal, setOpenModal] = useState(false);
  const [step, setStep] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <Fragment>
      {width > 1024 && (
        <StyledContent>
          <Home.SclerosisMultiple />
          <Home.Tratamiento />
          <Home.Testimonials />
          <Home.MyHCP />
          <Home.CreatorZone />
          <Home.ZoneHCP setOpenModal={setOpenModal} />
          <img
            src="/images/home/pasto-min.webp"
            alt="pasto"
            className="absolute bottom-[8%] w-[77%] left-[7%]"
          />
          <div
            className="alianzas absolute w-[11%] h-[15%] top-[63%] right-[1.7%] cursor-pointer"
            onClick={() => (window.location.href = "/alianzas")}
          ></div>

          <StyledModal isOpen={openModal}>
            <a href="/">
              <img
                src="/images/home/logo-1-min.png"
                alt="logo"
                className="absolute top-[20px] z-[1] w-[100px] h-[100px] left-[20px]"
              />
            </a>
            {step === 1 && (
              <Fragment>
                <img
                  src="/images/home/resiones.png"
                  className="h-[50%]"
                  alt=""
                />
                <StyledLogin onClick={() => setStep(2)}></StyledLogin>
                <StyledRegister onClick={() => setStep(3)}></StyledRegister>
              </Fragment>
            )}
            {step === 2 && (
              <Fragment>
                <div>
                  <img
                    src="/images/home/boton-sesion.png"
                    className="h-[50%]"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <StyledLabel>Usuario</StyledLabel>
                  <StyledInput type="text" />
                </div>
                <div className="flex flex-col mt-[20px]">
                  <StyledLabel>Contraseña</StyledLabel>
                  <StyledInput type="text" />
                </div>
                {/* <div>
              <checlist>Mantener mi sesión iniciada</checlist>
            </div> */}
                <div className="w-[740px] justify-center flex mt-[20px] ">
                  <StyledPassword href="/password-recovery">
                    He olvidado mi contraseña
                  </StyledPassword>
                </div>
                <StyledRegisterLogin>
                  {/* eslint-disable-next-line */}
                  ¿Todavía no tienes una cuenta? <a href="">Regístrate</a>
                </StyledRegisterLogin>
                <StyledButtomLogin>Iniciar sesión</StyledButtomLogin>
              </Fragment>
            )}
            {step === 3 && (
              <Fragment>
                <div className="flex justify-center">
                  <img
                    src="/images/home/boton-registro.png"
                    className="h-[auto] w-[70%]"
                    alt=""
                  />
                </div>
                {/* <StyledTitle1>Zona para HCP</StyledTitle1> */}
                <div className="flex flex-col mt-[10px]">
                  <StyledLabel>Nombre y apellido</StyledLabel>
                  <StyledInput type="text" />
                </div>

                <div className="flex w-[740px] gap-[30px]">
                  <div className="flex-col w-[360px]">
                    <div className=" flex-col mt-[10px] w-[352px]">
                      <StyledLabel>Correo electrónico</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <StyledLabel>País</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <StyledLabel>Especialidad</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>
                  </div>
                  <div className="flex-col w-[360px]">
                    <div className="flex flex-col mt-[10px]">
                      <StyledLabel>Contraseña</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>
                    <div className="flex flex-col mt-[10px]">
                      <StyledLabel>Ciudad</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>

                    <div className="flex flex-col mt-[10px]">
                      <StyledLabel>Tarjeta profesional</StyledLabel>
                      <StyledInput type="text" isRow />
                    </div>
                  </div>
                </div>

                <div className="flex w-[740px] gap-[10px]  mt-[10px]">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="text-white text-[10px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat.
                  </div>
                </div>
                <div>
                  <StyledButtomLogin>Registrarse</StyledButtomLogin>
                </div>
              </Fragment>
            )}
            <img
              src="/images/home/puerta.png"
              className="top-[71%] left-[27px] absolute w-[7%]"
              alt=""
              onClick={() => {
                if (step === 1) {
                  setOpenModal(false);
                } else setStep(1);
              }}
            />
            <Footer />
          </StyledModal>
        </StyledContent>
      )}
      {width <= 767 && <Home.Mobile />}
      {width >= 768 && width <= 1024 && <Home.Tablet />}
    </Fragment>
  );
}

Home.SclerosisMultiple = () => {
  return (
    <StyledContentSclerosis>
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">Esclerosis múltiple</StyledTitle>
        </div>
      </div>
    </StyledContentSclerosis>
  );
};

Home.Tratamiento = () => {
  return (
    <StyledContentTratamiento
      onClick={() => (window.location.href = "/habitacion-2")}
    >
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">Tratamiento</StyledTitle>
        </div>
      </div>
    </StyledContentTratamiento>
  );
};

Home.Testimonials = () => {
  return (
    <StyledContentTestimonials
      onClick={() => (window.location.href = "/habitacion-3")}
    >
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">Testimoniales</StyledTitle>
        </div>
      </div>
    </StyledContentTestimonials>
  );
};

Home.MyHCP = () => {
  return (
    <StyledContentHCP onClick={() => (window.location.href = "/habitacion-4")}>
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">Mi HCP</StyledTitle>
        </div>
      </div>
    </StyledContentHCP>
  );
};

Home.CreatorZone = () => {
  return (
    <StyledContentExperenceCreator href="https://drive.google.com/file/d/1-o7kgslrFDMYoTUHhypf1-D0cTTKx7mV/view?usp=drive_web" target="_blank">
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">Creador de experiencias</StyledTitle>
        </div>
      </div>
    </StyledContentExperenceCreator>
  );
};

Home.ZoneHCP = ({ setOpenModal }) => {
  return (
    <StyledContentRegister>
      <div className="parent">
        <div className="child">
          <StyledTitle className="trata">
          
          </StyledTitle>
        </div>
      </div>
    </StyledContentRegister>
  );
};

Home.Box = () => {
  return (
    <img
      className="absolute bottom-[-14%] right-[-9%] cursor-pointer z-[1]"
      src="/images/home/box.png"
      alt="Box"
      width={107}
      height={136}
      onClick={() => (window.location.href = "/alianzas")}
    />
  );
};

Home.Mobile = ({ setOpenModal }) => {
  return (
    <StyledContent>
      <div className="container">
        <Home.SclerosisMultiple />
        <Home.Tratamiento />
        <Home.Testimonials />
        <Home.MyHCP />
        <Home.CreatorZone />
        <Home.ZoneHCP setOpenModal={setOpenModal} />
        <Home.Box />
        <img
          src="/images/home/pasto-min.webp"
          alt="grass"
          className="h-[23px] absolute bottom-0"
        />
      </div>
    </StyledContent>
  );
};

Home.Tablet = ({ setOpenModal }) => {
  return (
    <StyledContent>
      <div className="container">
        <Home.SclerosisMultiple />
        <Home.Tratamiento />
        <Home.Testimonials />
        <Home.MyHCP />
        <Home.CreatorZone />
        <Home.ZoneHCP setOpenModal={setOpenModal} />
        <Home.Box />
        <img
          src="/images/home/pasto-min.webp"
          alt="grass"
          className="h-[23px] absolute bottom-0"
        />
      </div>
    </StyledContent>
  );
};
