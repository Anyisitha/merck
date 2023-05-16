import PropTypes from "prop-types";
import { Fragment } from "react";
import {
  StyledContentModal,
  StyledIframe,
  StyledModalContent,
  StyledOverlay,
} from "./Modal-image.styles";

const ModalImage = ({ url, open, onClose, urlevent }) => {
  return (
    <Fragment>
      {open && (
        <StyledModalContent
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <StyledOverlay></StyledOverlay>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-0 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-[transparent] text-left  transition-all sm:my-4 sm:max-w-[620px]">
                <StyledContentModal>
                  <img src={url} alt="" />
                  <div className="top-[79%] absolute left-[17%] w-[30%] h-[10%]" onClick={() => window.open(urlevent, "_blank")}></div>
                  <div className="top-[79%] absolute left-[54%] w-[30%] h-[10%]" onClick={onClose}></div>
                  <div className="top-[3%] absolute left-[81%] w-[30%] h-[10%]" onClick={onClose}></div>
                </StyledContentModal>
                {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:justify-between items-center sm:px-6">
                  <div>
                    <div className="flex gap-[25px]">
                      <a
                        target="_blank"
                        href="https://eml.com.co/merck/Te%CC%81rminos%20y%20Condiciones%20Generales%20de%20MERCK.pdf"
                        className="text-[12px] text-[#512583] font-semibold"
                      >
                        Terminos y condiciones
                      </a>
                      <a
                        target="_blank"
                        href="https://eml.com.co/merck/Politica%20pirvacidad.pdf"
                        className="text-[12px] text-[#512583] font-semibold"
                      >
                        Declaracion de privacidad
                      </a>
                      <a
                        target="_blank"
                        href="https://eml.com.co/merck/Politica%20de%20Cookies.pdf"
                        className="text-[12px] text-[#512583] font-semibold"
                      >
                        Politicas de cookies
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    type="button"
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cerrar
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </StyledModalContent>
      )}
    </Fragment>
  );
};

ModalImage.propTypes = {
  url: PropTypes.string,
};

export default ModalImage;
